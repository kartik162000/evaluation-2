const controller=require('../controllers/controller');
const express=require('express');
const router=express.Router();
 
router.post('/api/save', controller.postURLController);

module.exports=router;

