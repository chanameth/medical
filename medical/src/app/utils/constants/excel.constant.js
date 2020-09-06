import moment from 'moment';
import {
    isMomentValid
} from '../functions'

const defaultText = "";
const defaultDate = "";

const formatDate = (val) => {
    try{
        const _moment = moment(val);
        return isMomentValid(_moment) ? _moment.format("DD/MM/YYYY") : defaultDate;
    }catch(err){
        return defaultDate;
    }
}

const topic16Lab = [
    {field:"order_id",name:"ที่", defaultVal : defaultText },
    {field:"code_id",name:"รหัส 5 หลัก" , defaultVal : defaultText},
    {field:"district_id",name:"เขต" , defaultVal : defaultText},
    {field:"hub_id",name:"ศวก.", defaultVal : defaultText},
    {field:"laboratory_name",name:"ห้องปฏิบัติการ", defaultVal : defaultText},
    {field:"province_name",name:"จังหวัด", defaultVal : defaultText},    
    {field:"status",name:"สถานะ", defaultVal : defaultText},    
    {field:"registration_number_new",name:"เลขทะเบียน\n(ใหม่)", defaultVal : defaultText},    
    {field:"registration_number_old",name:"เลขทะเบียน\n(เก่า)", defaultVal : defaultText},    
    {field:"approved_date",name:"วันที่ผ่านการรับรอง" , format : formatDate},    
    {field:"surveillance_due_date",name:"วันครบกำหนดเฝ้าระวัง" , format : formatDate},    
    {field:"certification_deadline_date",name:"วันครบกำหนดการรับรอง" , format : formatDate},
    {field:"latitude",name:"ละติจูด", defaultVal : defaultText},    
    {field:"longitude",name:"ลองจิจูด", defaultVal : defaultText} 
];

const topic16Hospital = [
    {field:"order_id",name:"ที่", defaultVal : defaultText},
    {field:"code_id",name:"รหัส 5 หลัก", defaultVal : defaultText},
    {field:"district_id",name:"เขต", defaultVal : defaultText},
    {field:"hub_id",name:"ศวก.", defaultVal : defaultText},
    {field:"hospital_name",name:"โรงพยาบาล", defaultVal : defaultText},
    {field:"province_name",name:"จังหวัด", defaultVal : defaultText},    
    {field:"status",name:"สถานะ", defaultVal : defaultText},    
    {field:"registration_number_new",name:"เลขทะเบียน\n(ใหม่)", defaultVal : defaultText},    
    {field:"registration_number_old",name:"เลขทะเบียน\n(เก่า)", defaultVal : defaultText},    
    {field:"approved_date",name:"วันที่ผ่านการรับรอง", format : formatDate},    
    {field:"surveillance_due_date",name:"วันครบกำหนดเฝ้าระวัง", format : formatDate},    
    {field:"certification_deadline_date",name:"วันครบกำหนดการรับรอง", format : formatDate},
    {field:"latitude",name:"ละติจูด", defaultVal : defaultText},    
    {field:"longitude",name:"ลองจิจูด", defaultVal : defaultText} 
];

const topic8 = [
    {field:"department_name",name:"ชื่อหน่วยงาน",defaultVal : defaultText},
    {field:"year",name:"ปี",defaultVal : defaultText},
    {field:"month",name:"เดือน",defaultVal : defaultText},
    {field:"source",name:"งานจัดซื้อหรือจัดจ้าง",defaultVal : defaultText},
    {field:"source_budget",name:"วงเงินที่จะซื้อหรือจ้าง",defaultVal : defaultText},//
    {field:"standard_price",name:"ราคากลาง",defaultVal : defaultText},//
    {field:"source_method",name:"วิธีซื้อหรือจ้าง",defaultVal : defaultText},
    {field:"name_proposal",name:"รายชื่อผู้เสนอราคา",defaultVal : defaultText},
    {field:"proposed_price",name:"ราคาที่เสนอ",defaultVal : defaultText},//
    {field:"selection",name:"ผู้ได้รับการคัดเลือก",defaultVal : defaultText},
    {field:"final_price",name:"ราคาที่ตกลงซื้อหรือจ้าง",defaultVal : defaultText},//
    {field:"reason",name:"เหตุผลที่คัดเลือกโดยสรุป",defaultVal : defaultText},
    {field:"no_date_contract",name:"เลขที่และวันที่ของสัญญาหรือข้อตกลงในการซื้อหรือจ้าง",defaultVal : defaultText},
    {field:"budget_code",name:"รหัสงบประมาณ",defaultVal : defaultText},
    {field:"resource_code",name:"รหัสแหล่งเงิน",defaultVal : defaultText},
    {field:"project_no",name:"เลขที่โครงการ",defaultVal : defaultText},
    {field:"contract_no",name:"เลขคุมสัญญา",defaultVal : defaultText}
]

export const mapNameHeaders = {
    topic8,
    topic16Lab,
    topic16Hospital
}