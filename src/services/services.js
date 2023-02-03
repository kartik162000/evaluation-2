const axios= require('axios');
const csv=require('csvtojson')
const db=require('../models')
const {completeCompanyInfo,completeSectorInfo}=require('../utils/utils');

const storeCompanyDataDb=async(companyDataFromId)=>{
    const answer= companyDataFromId.map((data)=>{
        return {"c_id":data.id,"name":data.name,"ceo":data.ceo,"description":data.description[55],"tags":data.tags.join(":")}
    });
    const result=await db.Company.bulkCreate(answer);
    return result;
}
const storeCompanyPerformanceDataDb=async(companyForSector)=>{
    const mf=companyForSector.flat();
    const answer= mf.map((data)=>{
        console.log(data.companyId);
        return {"c_id":data.companyId,"cpi":Number(data.performanceIndex[0].value),"cf":Number(data.performanceIndex[1].value),"mau":Number(data.performanceIndex[2].value),"roic":Number(data.performanceIndex[3].value)}
    });
    const result=await db.CompanyPerformanceBySector.bulkCreate(answer);
    return result;
}

const postURLService = async (datas) => {
    const {urlLink} = datas;
    const data = await axios.get(urlLink);
    const csvData = await csv().fromString(data.data);
   global.company_id=[];
    global.company_sector=[];
    csvData.forEach((enteries) => {
        company_id.push(enteries.company_id);
        company_sector.push(enteries.company_sector);
    })
    const companyDataFromId=await completeCompanyInfo();
    const companyForSector=await completeSectorInfo();
    const dataStore=await storeCompanyDataDb(companyDataFromId);
    const companyPerformanceDataStore=await storeCompanyPerformanceDataDb(companyForSector);
    if(companyPerformanceDataStore && dataStore)
    {
        return {"message":"Data stored successfully"};
    }
    else
    {
        return {"message":"Data not stored"};
    }

};



module.exports = {
    postURLService
}
