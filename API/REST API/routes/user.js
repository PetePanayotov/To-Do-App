const express = require('express');
const router = express.Router();
const {getUser , registerUser , verifyUser , verifyPassword ,updatedUser , deleteUser , getUserWithActivities} = require('../controllers/user');


// router.get('/', async (req , res , next) => {
    
//     await getUser(req , res , next);

// });

router.get('/validate/:username', async (req , res , next) => {
    
    await getUser(req , res , next);

});

router.get('/:userId' , async (req , res , next) => {
    
    await getUserWithActivities(req , res , next);

});

router.post('/register' , async (req , res , next) => {
    
    await registerUser(req , res , next);

});

router.post('/verifyPassword', async (req , res , next) => {
    
    await verifyPassword(req , res , next);

});

router.post('/verify' , async (req , res) => {

    await verifyUser(req , res);

});

router.put('/update/:userId', async (req , res , next) => {

    await updatedUser(req , res , next);

});

router.delete('/delete/:id', async (req , res , next) => {
    
    await deleteUser(req , res , next);
})

module.exports = router;