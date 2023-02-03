const controller=require('../controllers/controller');
const express=require('express');
const router=express.Router();
 
router.post('/api/save', controller.postURLController);
router.get('/api/get', controller.getScoreController);

module.exports=router;

