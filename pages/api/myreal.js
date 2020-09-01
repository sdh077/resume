const fetch = require('node-fetch');
const cheerio = require('cheerio');
export default async (req, res) => {
    const html = await fetch('https://my-real-trip.breezy.hr').then(res => res.text())
    const $ = cheerio.load(html)
    const items = $('ul.positions > li')
    const list = []
    items.map((i,el) => {
        const info = {
            link:'https://my-real-trip.breezy.hr' + $(el).find('a').attr('href').trim(),
            title:$(el).find('h2').text().trim(),
            type: $(el).find('span.polygot').text().trim().trim() === '%LABEL_POSITION_TYPE_FULL_TIME%'? 'Full time': '',
            due: null,
            description: null,
            team:$(el).find('li.department').text().trim(),
        }
        list.push(info)
    })
    res.status(200).json(list)

}