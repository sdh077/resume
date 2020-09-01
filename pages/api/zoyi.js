const fetch = require('node-fetch');
export default async (req, res) => {
    const json = await fetch('https://api.lever.co/v0/postings/zoyi?mode=json').then(res => res.text())
    const zoyi = JSON.parse(json)
    const list = [];
    zoyi.map(info => {
        const item = {
            link:info.hostedUrl,
            title:info.text,
            type: info.categories.commitment,
            due: null,
            description: null,
            team: info.categories.team,
        }
        list.push(item)
    })
    res.status(200).json(list)

}