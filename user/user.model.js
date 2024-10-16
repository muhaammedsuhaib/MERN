import mongoose from "mongoose";


const userShema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type: String,
        required:true,
        unique:true
    }
});

const User = mongoose.model("User",userShema);
export default User;
