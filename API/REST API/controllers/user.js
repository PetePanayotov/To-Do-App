const User = require('../models/User')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config/config');
const {privateKey} = config;

const generateToken = async data => {
    const token = await jwt.sign(data , privateKey);
    return token;
};

const getUser = async (req , res , next) => {

    const {username} = req.params;


    const [user] = await User.find({username});
   
    if (user) {
        
        return res.send(user);
    };

     return res.status(404).send('Invalid Username');

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

const verifyPassword = async (req , res , next) => {

    const {username , password} = req.body;

    try {
        
        const user = await User.findOne({username});

        const passwordsMatch = await bcrypt.compare(password , user.password);
    
        if (passwordsMatch) {

            const userId = user._id.toString()
            
            const token = await generateToken({ 
                userId,
                username: user.username,
                password: user.password
            });

            res.header('Authorization' , token).send(user);

        }else{
            res.status(401).send({});
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

    try {

        const user = await User.findOne({_id:userId});

        if (!user) {
            throw new Error();
        };

        const userInfo = {
            username,
            userId
        };

        res.send(userInfo);
    }
    catch {
        next();
    };

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

const getUserWithActivities = async (req , res , next) => {

    const {userId} = req.params;

    try {

        const user = await User.findById(userId).populate('activities').lean();

        if (!user) {
            throw new Error();
        };

        res.send(user);
        
    } catch (error) {
        next();
    }

}


module.exports = {
    getUser,
    registerUser,
    verifyPassword,
    updatedUser,
    deleteUser,
    verifyUser,
    getUserWithActivities
}
