const services=require('../services/services');

const postURLController=async (req,res)=>{
    console.log("I m in controller");
const data=await services.postURLService(req.body);
    res.status(200).json(data);
}
module.exports={postURLController};