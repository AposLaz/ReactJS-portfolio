const mongoose = require('mongoose')

const resumeSchema = new mongoose.Schema({
    resume_pdf: {
        type: Buffer
    }
})

const resumeModel = new mongoose.model('Resume',resumeSchema)

module.exports = resumeModel