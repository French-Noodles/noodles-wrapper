const fetch = require('node-fetch')
const baseurl = 'https://frenchnoodles.xyz/api/endpoints/'



async function request(endpoint, input='') {
    const res = await fetch(`${baseurl}${endpoint}/?${input}`, {
        headers: {'User-Agent': `noodles-wrapper@${process.env.npm_package_version}(https://www.npmjs.com/package/noodles-wrapper) by French Noodles#4000`}
    });
    return res
}


async function lisastage(text) {
    if(!text) return console.error('A field was left empty in the noodles request function')
    const input = `text=${encodeURIComponent(text)}`
    const response = await request('lisastage', input)
    return response.buffer()
}

module.exports.lisastage = lisastage