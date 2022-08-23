
const express = require('express')
const router = express.Router()
const FileController = require('../controller/file_controller')


///////////////////////////////////////////////////////////////////-----------file store
const mongoose = require('mongoose')
const multer = require('multer')
const {GridFsStorage} = require('multer-gridfs-storage')
const Grid = require('gridfs-stream')
const {conn} = require('../db/mongoose')
const crypto = require('crypto');
const path = require('path')

let gfs
let gridFSBucket
conn.once('open', ()=>{
    //initialize stream

    gfs = Grid(conn.db, mongoose.mongo)
    gfs.collection("uploads")

    gridFSBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'uploads'
    })


})

//create storage engine
var storage = new GridFsStorage({
    url: process.env.MONGO_DB,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
      });
    }
  });

const upload = multer({ storage });

const routes = (app) =>{
    
    router.get('/test',(req,res)=>{
        res.status(200).send('test is ok')
    })

    router.post('/upload', upload.single('file'), FileController.upload_file)

    router.get('/download/del', async (req,res)=>{
        try{
            gfs.files.find().toArray(function(err, file){
                res.status(200).send(file)
            })
        }
        catch(e){
            res.status(500).send({
                Error: e.message
            })
        }
    })

    router.get('/download/:filename', async (req,res)=>{
        try{
            gfs.files.findOne({filename: req.params.filename}, (err, files)=>{
                if(err){
                    res.status(401).send('Not Found')
                }
                gridFSBucket.openDownloadStream(files._id).pipe(res);
            })
        }
        catch(e){
            res.status(500).send({
                Error: e.message
            })
        }
    })
    
    // files/del/:id
    // Delete chunks from the db
    app.post("/files/del/:id", (req, res) => {
        try{
            gridFSBucket.delete(new mongoose.Types.ObjectId(req.params.id), (err, data) => {
            if (err) return res.status(404).json({ err: err.message });
            res.sent("OK");
            });
        }
        catch(e){
            res.status(500).send({
                Error: e.message
            })
        }
    });


    return app.use('/',router)
}

module.exports = {
    routes,
    gfs
}