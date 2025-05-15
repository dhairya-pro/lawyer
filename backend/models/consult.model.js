import mongoose from "mongoose"

const ConsultSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        trim:true,
    },
    phoneNumber:{
        type:Number,
        required:true,
        trim:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,

    },
    caseDetails:{
        type:String,
        required:true,
        trim:true,
    }
})
const Consult = mongoose.model("Consult", ConsultSchema);

export default Consult;
