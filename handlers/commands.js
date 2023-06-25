const { readdirSync } = require("fs")
const ascii = require("ascii-table")

// 테이블 생성
let table = new ascii("commands")
table.setHeading("command", "Load status")

module.exports = (client) => {
    readdirSync("./src/commands/").forEach(dir => {
        const commands = readdirSync(`./src/commands/${dir}/`).filter(file => file.endsWith(".js"))
    
        for (let file of commands) {
            let pull = require(`../src/commands/${dir}/${file}`)
    
            if (pull.name) {
                client.commands.set(pull.name, pull)
                table.addRow(file, '✅')
            } else {
                table.addRow(file, `❌  -> missing a help.name, or help.name is not a string.`)
                continue;
            }
    
            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name))
        }
    });
    
    console.log(table.toString())
}