import User from "./user.model.js";


export const create_user= async (req,res)=>{

    const {name,email }= req.body;
    if(!name||!email) return res.status(404).json({message: "Required name or email "});

    const user = new User({name,email});
    await user.save();
    res.status(200).json({message: "User created successfully."});
    
    // res.status(200).json({message: "Required name or email "})
}
export const user_find = async (req,res)=>{

    const users= await User.find();
    if(!users){
    return res.status(404).json({message:"User not found"});
    }
    res.status(200).json(users);
}