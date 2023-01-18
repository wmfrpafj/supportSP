var summon = prompt("현재 뽑스피(소환SP)를 입력해주세요","메세지를 입력해주세요.")
var have = prompt("현재 보유 SP를 입력해주세요","메세지를 입력해주세요.")
var wave = prompt("현재 웨이브를 입력해주세요","메세지를 입력해주세요.")

var finalS = ((summon/10)+1)*(summon/20)
var finalH = have - ((wave-45)/4)*1050 - ((wave-45)/2)*1000 - 18900 - 3500
var SP = Math.ceil(finalS*10 + finalH)
var deal = Math.ceil(SP + ((wave-45)/4)*1050 + ((wave-45)/2)*1000 + 18900 + 3500)
