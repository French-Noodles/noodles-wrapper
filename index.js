const fetch = require('node-fetch')
const baseurl = 'https://frenchnoodles.xyz/api/endpoints/'



async function request(endpoint, input='') {
    const res = await fetch(`${baseurl}${endpoint}/?${input}`, {
        headers: {'User-Agent': `noodles-wrapper@${process.env.npm_package_version}(https://www.npmjs.com/package/noodles-wrapper) by French Noodles#4000`}
    });
    return res
}

module.exports.drake = async function(text1, text2) {
    if(!text1) throw new Error('The field text1 was left empty in the drake function')
    if(!text2) throw new Error('The field text2 was left empty in the drake function')
    const input = `text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`
    const response = await request('drake', input)
    return response.buffer()
}

module.exports.worthless = async function(text) {
    if(!text) throw new Error('The field text was left empty in worthless function')
    const input = `text=${encodeURIComponent(text)}`
    const response = await request('worthless', input)
    return response.buffer()
}

module.exports.presidentialalert = async function(text) {
    if(!text) throw new Error('The field text was left empty in presidentialalert function')
    const input = `text=${encodeURIComponent(text)}`
    const response = await request('presidentialalert', input)
    return response.buffer()
}

module.exports.spongebobburnpaper = async function(text) {
    if(!text) throw new Error('The field text was left empty in spongebobburnpaper function')
    const input = `text=${encodeURIComponent(text)}`
    const response = await request('spongebobburnpaper', input)
    return response.buffer()
}


module.exports.lisastage = async function(text) {
    if(!text) throw new Error('The field text was left empty in lisastage function')
    const input = `text=${encodeURIComponent(text)}`
    const response = await request('lisastage', input)
    return response.buffer()
}

module.exports.changemymind = async function(text) {
    if(!text) throw new Error('The field text was left empty in changemymind function')
    const input = `text=${encodeURIComponent(text)}`
    const response = await request('changemymind', input)
    return response.buffer()
}

module.exports.awkwardmonkey = async function(text) {
    if(!text) throw new Error('The field text was left empty in awkwardmonkey function')
    const input = `text=${encodeURIComponent(text)}`
    const response = await request('awkwardmonkey', input)
    return response.buffer()
}

module.exports.blur = async function(image) {
    if(!image) throw new Error('The field text was left empty in blur function')
    const input = `image=${encodeURIComponent(image)}`
    const response = await request('blur', input)
    return response.buffer()
}

module.exports.invert = async function(image) {
    if(!image) throw new Error('The field text was left empty in invert function')
    const input = `image=${encodeURIComponent(image)}`
    const response = await request('invert', input)
    return response.buffer()
}

module.exports.edges = async function(image) {
    if(!image) throw new Error('The field text was left empty in edges function')
    const input = `image=${encodeURIComponent(image)}`
    const response = await request('edges', input)
    return response.buffer()
}

module.exports.circle = async function(image) {
    if(!image) throw new Error('The field text was left empty in circle function')
    const input = `image=${encodeURIComponent(image)}`
    const response = await request('circle', input)
    return response.buffer()
}

module.exports.wide = async function(image) {
    if(!image) throw new Error('The field text was left empty in wide function')
    const input = `image=${encodeURIComponent(image)}`
    const response = await request('wide', input)
    return response.buffer()
}

module.exports.uglyupclose = async function(image) {
    if(!image) throw new Error('The field text was left empty in uglyupclose function')
    const input = `image=${encodeURIComponent(image)}`
    const response = await request('uglyupclose', input)
    return response.buffer()
}

module.exports.clown = async function(image) {
    if(!image) throw new Error('The field text was left empty in clown function')
    const input = `image=${encodeURIComponent(image)}`
    const response = await request('clown', input)
    return response.buffer()
}

module.exports.rip = async function(image) {
    if(!image) throw new Error('The field text was left empty in rip function')
    const input = `image=${encodeURIComponent(image)}`
    const response = await request('rip', input)
    return response.buffer()
}

module.exports.affectbaby = async function(image) {
    if(!image) throw new Error('The field text was left empty in affectbaby function')
    const input = `image=${encodeURIComponent(image)}`
    const response = await request('affectbaby', input)
    return response.buffer()
}

module.exports.trash = async function(image) {
    if(!image) throw new Error('The field text was left empty in trash function')
    const input = `image=${encodeURIComponent(image)}`
    const response = await request('trash', input)
    return response.buffer()
}

//welcome banner soon

module.exports.boostercard = async function(image) {
    if(!image) throw new Error('The field text was left empty in boostercard function')
    const input = `image=${encodeURIComponent(image)}`
    const response = await request('boostercard', input)
    return response.buffer()
}

//balance card soon

module.exports.randommeme = async function() {
    const response = await request('randommeme')
    return response.buffer()
}