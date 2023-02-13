input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Skull)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showString("Hello!")
    }
})
