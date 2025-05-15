import mongoose from "mongoose"

const ContactUsSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
    },
    lastname:{
        type:String,
        required:true,
        trim:true,

    },
    email:{
        type:String,
        required:true,
        trim:true,
       

    },
    phone:{
        type:Number,
        required:true,
        trim:true,
       
    },
    message:{
        type:String,
        required:true,
        trim:true,
    }
})
const Contact = mongoose.model("Contact", ContactUsSchema);

export default Contact;