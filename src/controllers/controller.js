const services=require('../services/services');

const postURLController=async (req,res)=>{
try
{
    const data=await services.postURLService(req.body);
    res.status(200).json(data);
}
catch(err)
{
    res.status(500).json({error:err});
}
}
module.exports={postURLController};