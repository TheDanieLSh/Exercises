'use strict'
const axios = require('axios');
const xml2js = require('xml2js');
const parser = new xml2js.Parser();

async function siteMapParse(site) {
    const xmlMapAddress = site + 'sitemap.xml';
    const xmlMapString = (await axios.get(xmlMapAddress)).data;
    let xmlMap = {};
    parser.parseString(xmlMapString, (er, res) => {
        xmlMap = res;
    });
    xmlMap.urlset.url.forEach(async url => {
        const resp = await axios.get(url.loc);
        console.log(resp.status);
    });
}

siteMapParse('https://mfk-botanica.ru/')