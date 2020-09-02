const express = require('express');
const router = express.Router();
const {addActivity , getAllCars , getCar , createCar , updateCar , deleteActivity , likeCar , dislikeCar , commentCar , removeComment} = require('../controllers/activity');


router.post('/add' , (req , res , next) => {

    addActivity(req , res , next);

});

router.delete('/:id', (req , res , next) => {
    
    deleteActivity(req , res , next);

});

// router.get('/' , async (req , res , next) => {
    
//     await getAllCars(req , res , next);

// });

// router.get('/:id' , async (req , res , next) => {

//     await getCar(req , res , next);

// });

// router.post('/' , async (req , res, next) => {
    
//     await createCar(req , res, next);
// });

// router.put('/:id' , async (req , res , next) => {

//     await updateCar(req , res , next)

// });

// router.post('/like/:id' , async (req , res , next) => {

//     await likeCar(req , res , next);

// });

// router.post('/dislike/:id' , async (req , res , next) => {

//     await dislikeCar(req , res , next);

// });

// router.post('/comment/:id' , async (req , res , next) => {

//     await commentCar(req , res , next);

// });

// router.post('/remove-comment/:id' , async (req , res , next) => {

//     await removeComment(req , res , next);

// });

// router.delete('/:id', async (req , res , next) => {
    
//     await deleteActivity(req , res , next);

// });

module.exports = router;
