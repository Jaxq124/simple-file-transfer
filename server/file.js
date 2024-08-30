import mongoose from "mongoose";


const fileScheme = new mongoose.Schema({
 path:{
    type: String,
    required: true
 },
 name: {
    type: String,
    required: true
 },
 downloadContent: {
    type: Number,
    required : true,
    default: 0
 }   
})

const File = mongoose.model('file',fileScheme);

export default File;
