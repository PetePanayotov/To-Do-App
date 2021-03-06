const Activity = require('../models/Activity');
const User = require('../models/User');


const addActivity = async (req , res) => {

    const {activity , location , date , time , userId} = req.body;
    const newActivity = new Activity({activity , location , date , time});

    try {

        const activity = await newActivity.save();
        
        if (!activity) {
            throw new Error();
        };

        
        const user = await User.findOneAndUpdate({_id: userId} , {
                        
                            $addToSet: {
                                activities: [activity._id]
                            }
                        });
        
        if(!user) {
            throw new Error();
        };

        res.send('All clear');

    }catch(e) {
        res.status(503).send('Something went wrong');
    };

};


// const getAllCars = async (req , res, next) => {
   
//     try {
        
//         const cars = await Car.find();
        
//         if (!cars) {
//             throw new Error();
//         };

//         res.send(cars);

//     } catch (error) {
//         next();
//     };

// };

// const getCar = async (req , res , next) => {
    
//     const {id} = req.params;

//     try {
        
//         const car  = await Car.findOne({_id: id});
        
//         if (!car) {
//             throw new Error()
//         };

//         res.send(car);
        
//     } catch (error) {
//         next()
//     };


// };

// const createCar = async (req , res , next) => {

//     let {brand , model , price , imageUrl , description , isVipOffer , specifications} = req.body;
    
//     specifications = JSON.stringify(specifications);
    
//     const newCar = new Car({brand , model , price , imageUrl , description , isVipOffer , specifications});
    
//     try {
        
//         const carObj = await newCar.save();
//         if (!carObj) {
//             throw new Error();
//         }


//         res.send(newCar)
        
//     } catch (error) {
//         console.log('Something is wrong' , error)
//         next()
//     }


// };

// const updateCar = async (req , res , next) => {

//     const {id} = req.params;
//     const {model , price , imageUrl , description , isVipOffer} = req.body;
//     const newData = {model , price , imageUrl , description , isVipOffer};

//     try {
        
//         const updatedCar = await Car.update({ _id: id } , newData);
        
//         if (!updatedCar) {
//             throw new Error();
//         };

//         res.send(updatedCar)
        
//     } catch (error) {
//         next()
//     };

// };

// const likeCar = async (req , res , next) => {
    
//     const {id} = req.params;
//     const {userId} = req.body;

//     try {
//         const car = await Car.findOneAndUpdate({_id: id} , {

//                 $addToSet: {
//                     likes: [userId]
//                 }
                
//             });

//         const user = await User.findOneAndUpdate({_id: userId} , {
//             $addToSet: {
//                 likedCars: [id]
//             }
//         })

//         if (!car || !user) {
//             throw new Error();
//         };

//         res.send(car);
        
//     } catch (error) {
//         next()
//     }


// };

// const dislikeCar = async (req ,res) => {

//     const {id} = req.params;
//     const {userId} = req.body;

//     try {
//         const car = await Car.findOneAndUpdate({_id: id} , {

//                 $pull: {
//                     likes: {$in: [userId]}
//                 }
                
//             });

//         const user = await User.findOneAndUpdate({_id: userId} , {
//             $pull: {
//                 likedCars: {$in: [id]}
//             }
//         })

//         if (!car || !user) {
//             throw new Error();
//         };

//         res.send('All clear');
        
//     } catch (error) {
//         next()
//     }

// };


const deleteActivity = async (req , res , next) => {

    const {id} = req.params;

    try {
        
        const removedCar = await Activity.deleteOne({_id: id});

        if (!removedCar) {
            throw new Error();

        };

        res.send(removedCar);
        
    } catch (error) {
        res.status(401)
    }
};



// };

// const commentCar = async (req , res , next) => {

//     const {username , comment , time} = req.body;
//     const {id} = req.params;

//     const newComment = JSON.stringify([username , comment , time]);

//     try {
        
//         const car = await Car.findOneAndUpdate({_id: id} , {

//             $addToSet: {
//                 comments: [newComment]
//             }

//         });

//         if (!car) {
//             throw new Error();
//         };

//         res.send(car);
        
//     } catch (error) {
//         next();
//     };

// };

// const removeComment = async (req , res , next) => {

//     const {comment} = req.body;
//     const {id} = req.params;

//     try {

//         const car = await Car.findOneAndUpdate({_id: id} , {

//             $pull: {
//                 comments: {$in: [comment]}
//             }
            
//         });

//         if (!car) {
//             throw new Error();
//         };

//         res.send('All clear');
        
//     } catch (error) {
//         next();
//     };

// };

module.exports = {
    addActivity,
    deleteActivity
}



