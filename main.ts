input.onButtonPressed(Button.A, function () {
    makerbit.showStringOnLcd1602("Hello MakerBit", makerbit.position1602(LcdPosition1602.Pos1), 16)
    makerbit.showStringOnLcd1602("LCD1602 ShowTime", makerbit.position1602(LcdPosition1602.Pos17), 16)
})
input.onButtonPressed(Button.B, function () {
    makerbit.clearLcd1602()
})
makerbit.connectLcd(39)
basic.forever(function () {
	
})
