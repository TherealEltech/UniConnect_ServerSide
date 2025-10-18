const User = require("../models/user");
const jwt = require("jsonwebtoken");

//generate JWT token
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
}
/*function generateToken(user) {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
}*/
//Register new User

exports.registerUser = async(req, res) => {
    const {name, email, password} = req.body;
    try{
        //checking if user exists
        const userExists = await User.findOne({ email });
        if(userExists){
            return res.status(400).json({ message: "User Already Exists" });
        } 
        //create(register) new user(s)
        const user = await User.create({ name, email, password });
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id),
        });

    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}


//loggigng User
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try{
        const user = await User.findOne( { email } );
        if(user && (await user.matchPassword(password))){
            res.status(200).json({
                _id:user._id,
                name:user.name,
                email:user.email,
                token:generateToken(user._id),
            })
        }else{
            res.status(401).json({
                message: 'Invalid email or password'
            });
        }
    }catch(error){
         res.status(500).json({
                message:error.message
            })
    }
}