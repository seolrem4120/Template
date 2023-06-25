// interaction이 만들어질 때마다 발생
module.exports.run = async (client, interaction) => {

    if(!interaction.isCommand()) reqturn
        const command = client.slash.get(interaction.commandName)
        if(!command) return
        try {
            await command.execute(interaction)
        } catch (err) {
            console.error(err)
            await interaction.reply({ content: "오류가 발생했습니다", ephemeral: true })
        } 
    
    process.on("unhandledRejection", err=> {
    if(err == "DiscordAPIError: Missibng Access") return console.log("봇이 서버에 슬래쉬 커맨드를 푸쉬하는 권한이 없습니다")
        console.error(err)
    })
}
