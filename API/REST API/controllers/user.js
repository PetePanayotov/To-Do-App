const User = require('../models/User')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config/config');
const {cookieName , privateKey} = config;

const generateToken = async data => {
    const token = await jwt.sign(data , privateKey);
    return token;
};

const getUsers = async (req , res , next) => {

    try {
        
        const users = await User.find();
        
        if (!users) {
            throw new Error();
        };

        res.send(users);

    } catch (error) {
        next();
    };


};

const registerUser = async (req , res , next) => {

    const {username, password} = req.body;
    
    const salt =  await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password , salt);

    const newUser = new User({
        username,
        password: hashedPassword
    });

    try {

        const userObj = await newUser.save();
       
        if (!userObj) {
            throw new Error();
        };

        const token = await generateToken({ 
            userId: userObj._id,
            username: userObj.username
        });

        res.header('Authorization' , token).send(userObj);

    } catch (error) {
        next();
    };
};

const loginUser = async (req , res , next) => {

    const {username , password} = req.body;
    let isAdmin = undefined;

    try {
        
        const user = await User.findOne({username});
        
        if (!user) {
            res.status(401);
            throw new Error();
        };

        const passwordsMatch = await bcrypt.compare(password , user.password);
    
        if (passwordsMatch) {

            const userId = user._id.toString()
            
            const token = await generateToken({ 
                userId,
                username: user.username,
                password: user.password
            });

            if (user.isAdmin) {
                isAdmin = true;
            };
    
            res.header('Authorization' , token).send([isAdmin ,user]);

        }else{
            res.status(401).send('Invalid password');
            return;
        }
        
    } catch (error) {
        next();
    };

};

const verifyUser = async (req , res , next) => {

    const {token} = req.body;

    const decodeObj = jwt.verify(token , privateKey);
    
    const {username , userId} = decodeObj;

    const user = await User.findOne({_id:userId});
    
    let isAdmin = false;

    if (user.isAdmin) {
        isAdmin = true;
    };

    const userInfo = {
        username,
        userId
    };

    res.send([isAdmin , userInfo]);

};


const updatedUser = async (req , res , next) => {

    const {id} = req.params;
    const { username, password } = req.body;

    const salt =  await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password , salt);

    const newData = {
        username,
        password: hashedPassword
    }

    try {
        
        const updatedUser = await User.update({_id : id} , newData);

        if (!updatedUser) {
            throw new Error();
        };

        res.send(updatedUser);
        
    } catch (error) {
        next()
    };

};

const deleteUser = async (req , res , next) => {

    const {id} = req.params;

    try {

        const removedUser = await User.deleteOne({ _id: id});

        if (!removedUser) {
            throw new Error();
        };

        res.send(removedUser);

    } catch (error) {
        next();
    };
 
};

const getUserWithCars = async (req , res , next) => {

    const {id} = req.params;
    
    try {

        const user = await User.findById(id).populate('likedCars').lean();

        if (!user) {
            throw new Error();
        };

        res.send(user);
        
    } catch (error) {
        next();
    }

}


module.exports = {
    getUsers,
    registerUser,
    loginUser,
    updatedUser,
    deleteUser,
    verifyUser,
    getUserWithCars
}
