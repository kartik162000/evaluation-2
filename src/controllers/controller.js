const services=require('../services/services');

const postURLController=async (req,res)=>{
    console.log("I m in controller");
    const data=await services.postURLService(req.body);
    res.status(200).json(data);
}
const getScoreController=async (req,res)=>{
    const data=await services.getAllScores();
    res.status(200).json(data);
}

module.exports={postURLController,getScoreController};