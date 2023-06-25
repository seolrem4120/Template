//콘솔로 봇 상태 확인
//상테메시지 변경
module.exports.run = async (client) => {
    let number = 0
    setInterval(() => {
        const list = ["테스트", "연구", "몰?루"]
        if(number == list.length) number = 0
        client.user.setActivity(list[number],{
            type:"PLAYING"
        })
        number++
    }, 2000) //몇초마다 상태메세지를 바꿀지 정해주세요 (1000 = 1초)
    console.log(`[API] ${client.user.username} 준비됨 / ${client.guilds.cache.size}개의 서버에 참가중`)
}