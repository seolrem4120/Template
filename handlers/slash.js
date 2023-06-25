let slash = []
const { readdirSync } = require("fs")
const ascii = require("ascii-table")
const { Collection } = require("discord.js")

//테이블 생성
let table = new ascii("slash commands")
table.setHeading("slashcommand", "Load status")

module.exports = (client) => {
    readdirSync("./src/slashCommands/").forEach(dir => {
        const commands = readdirSync(`./src/slashCommands/${dir}/`).filter(file => file.endsWith(".js"));
    
        for (let file of commands) {
            let pull = require(`../src/slashCommands/${dir}/${file}`)
    
            if (pull.name) {
                client.slash.set(pull.name, pull);
                slash.push(pull);
                table.addRow(file, '✅')
            } else {
                table.addRow(file, `❌  -> missing a help.name, or help.name is not a string.`)
                continue
            }
    
            }
    })
    
    console.log(table.toString())


client.on("ready",async ()=> {


await client.application.commands.set(slash)
console.log("Slash Loaded")
})

}