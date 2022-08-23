const express = require('express')
const {gfs} = require('../routes/file_routers')

const upload_file = async (req,res)=>{
    try{
        res.status(201).send(req.file)
    }
    catch(e){
        res.status(500).send({
            Error: e.message
        })
    }
    
}

const download_file = async (req,res)=>{
    try{
        gfs.files.find().toArray((err, files)=>{
            res.status(200).send(files)
        })
    }
    catch(e){
        res.status(500).send({
            Error: e.message
        })
    }
}

module.exports = {
    upload_file,
    download_file
}