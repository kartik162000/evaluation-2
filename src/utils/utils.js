const { default: axios } = require("axios");
const completeCompanyInfo= async () => {

    let result=[];
    for(c_id of global.company_id)
    {
        const information=await axios.get(`http://54.167.46.10/company/${c_id}`);
        result.push(information.data);
    }
    return result;
}
const completeSectorInfo= async () => {
    let result=[];
    for(secName of global.company_sector)
    {
        const information=await axios.get(`http://54.167.46.10/sector?name=${secName}`);
        result.push(information.data);
    }
    return result;
    
}

module.exports={completeCompanyInfo,completeSectorInfo};