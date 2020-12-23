const Discord = require('discord.js')
const chalk = require('chalk')
const fs = require('fs');
const mkdirp = require('mkdirp');
var dmall = new Discord.Client();
var sleep = require('system-sleep');
var readline = require('readline');
var tm = readline.createInterface(process.stdin, process.stdout);
9


dmall.login("token_here");
messagetosend = ("kazion#1337 loves me") // put the message you want to dmall here

// configure the dmall speed below
timeout = 100
// 100 : 10 messages per second
// 1000 : 1 message per second
// 2000 : 1 message every 2 seconds
// 3000 : 1 message every 3 seconds

dmall.on('ready', () => {
   console.log(`Statistiques globales : \n\nThe bot have a total of ${dmall.guilds.size} servers. \nFor a total of ${dmall.users.size} members. \n\nMessage :\n\u001b[36m${messagetsend}\u001b[0m\n\n\n `)
   tm.question('\u001b[0mTape \u001b[32mENTER \u001b[0mfor launch dmall\n\n', (answer) => {
      dmed = "0"
      dmall.users.forEach((member) => {
         dmed++
         sleep(timeout);
         member.send(messagetosend).catch(O_o => {})
         console.log("\u001b[31;1m[" + dmed + "/" + dmall.users.size + "]\u001b[37m Message sended to \u001b[36m" + member.username + "#" + member.discriminator)
         if (dmed == dmall.users.size) {
            console.log("\u001b[32mGlo On Top ! \nYou've Massdmed successfully!")
         }
      })
   })
})

process.on("unhandledRejection", error => {

      if (error) {
         console.log("Token invalid")
      } else {
         console.error(error);
      }
   
});k
