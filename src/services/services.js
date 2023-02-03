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

const getBoth = async()=>{
    const ans=[]
const bothInfo= await db.CompanyPerformanceBySector.findAll({
      include:db.Company
    });
    bothInfo.forEach((data)=>{
        ans.push({
        "c_id":data.c_id,
        "score":((data.cpi * 10) + (data.cf / 10000) + (data.mau * 10) + data.roic) / 4})}
    )
    return ans;
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

    const newCompanySector = global.company_sector.filter((item,index)=>{  
        return global.company_sector.indexOf(item) == index;  
     });  
     global.company_sector=newCompanySector;

    const companyDataFromId=await completeCompanyInfo();
    const companyForSector=await completeSectorInfo();
    const dataStore=await storeCompanyDataDb(companyDataFromId);
    const companyPerformanceDataStore=await storeCompanyPerformanceDataDb(companyForSector);
    return await getBoth().catch((err)=>{
        console.log(err);
    });

};



module.exports = {
    postURLService
}
