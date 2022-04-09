const { Intents } = require("discord.js");

const settings = {
    token: "OTU2MjI1ODM5Mjk1NTEyNTk2.YjtItQ.lFjNqdPBhpunneIh2ADoKWQHLC0", /* Token de votre bot https://discord.com/developers/applications */
    mongo: "mongodb+srv://Oreki:Oreki2021@cluster0.hm69l.mongodb.net/test", /* L'url mongo https://www.mongodb.com/ */
    specific_guild: "958445046993145886", /* Dans ce serveur les commandes slash sont instantanément chargées (guild id) */
    color:"#F81308", /* couleur de l'embed https://htmlcolorcodes.com/fr/ */
    intents: [
        Intents.FLAGS.GUILDS
    ] /* Les intents que vous souhaitez */
}

module.exports = settings;