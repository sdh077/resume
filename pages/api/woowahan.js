const fetch = require('node-fetch');
export default async (req, res) => {
    const json = await fetch('https://www.woowahan.com/jobapi/jobs/list?searchword=&cc=244001').then(res => res.text())
    const woowahan = JSON.parse(json)
    const list = [];
    woowahan.map(info => 
        list.push({
            link:info.TargetURL,
            title:info.JobTitle,
            type: info.CareerName,
            due: info.RealEDate,
            description: info.Contents,
            team: info.BusinessName,
        }))
    res.status(200).json(list)

}