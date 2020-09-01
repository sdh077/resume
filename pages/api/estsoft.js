const fetch = require('node-fetch');
export default async (req, res) => {
    const url = `https://estsoft.recruiter.co.kr/app/jobnotice/list.json?recruitClassSn=&recruitClassName=&jobnoticeStateCode=10&pageSize=50&currentPage=1`
    const json = await fetch(url).then(res => res.text())
    const est = JSON.parse(json).list
    const list = [];
    est.map(info => {
        const due = new Date(info.applyEndDate.time)
        const item = {
            link:`https://estsoft.recruiter.co.kr/app/jobnotice/view?systemKindCode=${info.systemKindCode}&jobnoticeSn=${info.jobnoticeSn}`,
            title:info.jobnoticeName,
            type: null,
            due,
            description: info.receiptState,
            team: info.recruitClassName,
        }
        list.push(item)
    })
    res.status(200).json(list)

}