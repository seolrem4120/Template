// 메시지가 보내질 때마다 발생 (봇이든 사용자든)
module.exports.run = async (client, message) => {
    
    // config.json 호출
    client.config = require("../config.json")
    
    if(!message.content.startsWith(client.config.prefix)) return
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/)
    const commandName = args.shift()
    const command = client.commands.get(commandName)
    if (!command) return
    try{
        command.execute(message,args)
    } catch (error) {
        console.error(error)
    }
}