const fetch = require('node-fetch');
const cheerio = require('cheerio');
const FormData = require('form-data');
export default async (req, res) => {
    const buzzniHome = await fetch('https://recruit.buzzni.com/').then(res => res.text())
    const home = cheerio.load(buzzniHome)
    const vcnonce = home('div[data-vc-post-id=50450]').attr('data-vc-public-nonce')
    const form = new FormData();
    const body = {
            'action': 'vc_get_vc_grid_data',
            'vc_action': 'vc_get_vc_grid_data',
            'tag': 'vc_basic_grid',
            'data[visible_pages]': '5',
            'data[page_id]': '50450',
            'data[style]': 'all',
            'data[action]': 'vc_get_vc_grid_data',
            'data[shortcode_id]': '1591002754609-06611173-2008-2',
            'data[tag]': 'vc_basic_grid',
            'vc_post_id': '50450',
            '_vcnonce': vcnonce,
        }
    for(const [k,v] of Object.entries(body)) form.append(k, v);
    const html = await fetch('https://recruit.buzzni.com/wp-admin/admin-ajax.php', 
        { 
            method: 'POST', 
            body: form,
        }
        )
        .then(res => res.text()) // expecting a json response
    const $ = cheerio.load(html);
    const items = $('div.vc_grid-item.vc_clearfix.vc_col-sm-12');
    const list = []
    items.map((i,el) => {
        const zone = $(el).find('a').attr('title');
        const regexr = /\[(.*)\]/;
        const team = regexr.exec(zone) ? regexr.exec(zone)[1] : null;
        const title = team ? /\](.*)/.exec(zone)[1] : zone;
        const info = {
            link:'https://' + $(el).find('a').attr('href'),
            title: title.trim(),
            type: $(el).find('.vc_gitem-post-meta-field-wpcf-career.vc_gitem-align-left').text().trim(),
            due: $(el).find('.vc_gitem-post-meta-field-wpcf-end-date.vc_gitem-align-right').text().trim(),
            description: null,
            team
        }
        list.push(info)
    })
  res.status(200).json(list)
}