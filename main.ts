radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        pins.servoWritePin(AnalogPin.P0, 0)
    } else if (receivedNumber == 1) {
        pins.servoWritePin(AnalogPin.P0, 180)
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            # . . . #
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . # # # .
            # . # . #
            # . # . #
            # . # . #
            . # # # .
            `)
        basic.showLeds(`
            . # # # .
            # . # . #
            # . # . #
            # . # . #
            . # # # .
            `)
        basic.showLeds(`
            . # # # .
            # . # . #
            # . # . #
            # . # . #
            . # # # .
            `)
        basic.showLeds(`
            . # # # .
            # . # . #
            # . # . #
            # . # . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            # . . . #
            . # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else {
    	
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    pins.servoWritePin(AnalogPin.P0, 0)
    basic.pause(1000)
    radio.sendNumber(1)
    pins.servoWritePin(AnalogPin.P0, 180)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        # . # . #
        # . # . #
        # . # . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . # . #
        # . # . #
        # . # . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . # . #
        # . # . #
        # . # . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . # . #
        # . # . #
        # . # . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
})
radio.setGroup(214)
