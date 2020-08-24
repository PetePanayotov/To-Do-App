const express = require('express');
const router = express.Router();
const {getUser , registerUser , verifyUser , verifyPassword ,updatedUser , deleteUser , getUserWithCars} = require('../controllers/user');


// router.get('/', async (req , res , next) => {
    
//     await getUser(req , res , next);

// });

router.get('/:username', async (req , res , next) => {
    
    await getUser(req , res , next);

});

router.get('/:id' , async (req , res , next) => {
    
    await getUserWithCars(req , res , next);

});

router.post('/register' , async (req , res , next) => {
    
    await registerUser(req , res , next);

});

router.post('/verifyPassword', async (req , res , next) => {
    
    await verifyPassword(req , res , next);

});

router.post('/verify' , async (req , res , next) => {

    await verifyUser(req , res , next);

});

router.put('/:id', async (req , res , next) => {

    await updatedUser(req , res , next);

});

router.delete('/:id', async (req , res , next) => {
    
    await deleteUser(req , res , next);
})

module.exports = router;