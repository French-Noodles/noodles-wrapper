const fetch = require('node-fetch')
const baseurl = 'https://frenchnoodles.xyz/api/endpoints/'



async function request(endpoint, input='') {
    const res = await fetch(`${baseurl}${endpoint}/?${input}`, {
        headers: {'User-Agent': `noodles-wrapper@${process.env.npm_package_version} by French Noodles#4000`}
    });
    return res
}


module.exports.lisastage = function (text) {
    if(!text) return console.error('A field was left empty in the noodles request function')
    const input = encodeURIComponent(text)
    const response = await request('lisastage', input)
    return response.buffer()
}