const services=require('../services/services');

const getController=async (req,res)=>{
const data=await services.getService();
    res.status(200).json(data);
}
module.exports={getController};