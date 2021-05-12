 
# Noodles wrapper [![npm](https://img.shields.io/npm/v/noodles-wrapper.svg)](https://www.npmjs.com/package/noodles-wrapper) [![npm](https://img.shields.io/npm/dt/noodles-wrapper.svg?maxAge=3600)](https://www.npmjs.com/package/noodles-wrapper) [![install size](https://packagephobia.now.sh/badge?p=noodles-wrapper)](https://packagephobia.now.sh/result?p=noodles-wrapper) 



An API wrapper for [Noodles API](https://frenchnoodles.xyz/api) made by French Noodles#6046 to make your life easier while using the noodles API
 [![NPM](https://nodei.co/npm/noodles-wrapper.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/alexflipnote.js/)
 
 
## Installation
```
npm i noodles-wrapper
```

## Examples
### Random memes command, no input example
```js
const  noodles_api  =  require('noodles-wrapper')
const Discord = require('discord.js')

const  Image  =  await  noodles_api.randommeme()
let  embed=  new  Discord.MessageEmbed()
	.attachFiles([{name:  "meme.png",  attachment:Image}])
	.setImage('attachment://meme.png')
message.channel.send(embed)
```

### Lisa-Stage command, 1 text input example
```js
const  noodles_api  =  require('noodles-wrapper')
const Discord = require('discord.js')

let  text  =  args.toString().replace(/,/g,  '  ')
let  Image  =  await noodles_api.lisastage(text)
  
const  attachment  =  new  Discord.MessageAttachment(Image);
message.channel.send(attachment);
```

###  Drake command, more than one text input example
```js
const  noodles_api  =  require('noodles-wrapper');

let  text1  =  args.toString().split('/')[0].replace(/,/g,  '  ')
let  text2  =  args.toString().split('/')[1].replace(/,/g,  '  ')

let  Image  =  await  noodles_api.drake(text1,  text2)
const  attachment  =  new  Discord.MessageAttachment(Image);

message.channel.send(attachment);
```

### Trash command, image input example
```js
let  Discord  =  require("discord.js");
const  noodles_api  =  require('noodles-wrapper')

let  user  =  message.mentions.users.first() ||  message.author
let  result  =  user.displayAvatarURL()

let  Image  =  await  noodles_api.trash(result)

const  attachment  =  new  Discord.MessageAttachment(Image);
message.channel.send(attachment);
```

## Endpoints
You can get a full list of the possible API endpoints [Here](https://frenchnoodles.xyz/api/endpoints)
But here are the functions:

 - `drake(text1 ,text2)`
 - `worthless(text)`
 - `presidentialalert(text)`
 - `spongebobburnpaper(text)`
 - `lisastage(text)`
 - `changemymind(text)`
 - `awkwardmonkey(text)`
 - `blur(image)`
 - `invert(image)`
 - `edges(image)`
 - `circle(image)`
 - `wide(image)`
 - `uglyupclose(image)`
 - `clown(image)`
 - `rip(image)`
 - `affectbaby(image)`
 - `trash(image)`
 - `welcomebanner` implemented to wrapper soon
 - `boostercard(image)`
 - `randommeme()`
 - `balancecard` implemented to wrapper soon
 
just replace the inputs with whatever you want,
balancecard and welcomebanner are missing cuz they arent implemented in the API yet

## Made by
Made with ❤ by French Noodles#6046, you can checkout my website [Here](https://frenchnoodles.xyz) or join my discord server [Here!](https://frenchnoodles.xyz/discord) if you have any questions or suggestions or bug reports

## Notes
I will be adding the more complicated balance card and welcome endpoints

Plus the wrapper is made in a way so that in Visual Studio Code you will get autocomplete for the function names!


