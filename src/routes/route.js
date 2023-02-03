const controller=require('../controllers/controller');
const express=require('express');
const router=express.Router();
 
router.get('/test', controller.getController);

module.exports=router;

