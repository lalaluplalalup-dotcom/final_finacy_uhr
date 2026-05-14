function uhrCheck2 () {
    minutenCheck()
    stundenCheck()
}
function erstelle5_minuten_sequenz () {
    for (let index = 0; index < 4; index++) {
        for (let Index = 0; Index <= 1; Index++) {
            list.push(neopixel.colors(NeoPixelColors.Purple))
        }
    }
    for (let Index = 0; Index <= 1; Index++) {
        list.push(neopixel.colors(NeoPixelColors.Green))
    }
}
function minutenCheck () {
    if (minute == minutenlimit) {
        minute = 0
        stunde += 1
    }
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    stunde += 1
    uhrCheck()
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showNumber(stunde)
    basic.showString("M")
    basic.showNumber(minute)
    basic.clearScreen()
    zeigeMinuten()
    zeigeStunden()
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    minute += 1
    uhrCheck()
})
function zeigeStunden () {
    stunden_strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    for (let Index = 0; Index <= stunde * leds_pro_stunde - 1; Index++) {
        stunden_strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.Red))
    }
    stunden_strip.show()
}
function zeigeMinuten () {
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    for (let Index = 0; Index <= minute * leds_an_pro_minute - 1; Index++) {
        strip.setPixelColor(Index, list[Index])
    }
    strip.show()
}
function uhrCheck () {
    minutenCheck()
    stundenCheck()
}
function stundenCheck () {
    if (stunde == stundenlimit) {
        stunde = 0
    }
}
let list: number[] = []
let leds_pro_stunde = 0
let leds_an_pro_minute = 0
let stunden_strip: neopixel.Strip = null
let strip: neopixel.Strip = null
let stundenlimit = 0
let minutenlimit = 0
let stunde = 0
let minute = 0
minute = 0
stunde = 0
minutenlimit = 60
stundenlimit = 12
strip = neopixel.create(DigitalPin.P3, 118, NeoPixelMode.RGB)
stunden_strip = neopixel.create(DigitalPin.P1, 22, NeoPixelMode.RGB)
leds_an_pro_minute = 2
leds_pro_stunde = 2
strip.showColor(neopixel.colors(NeoPixelColors.Blue))
stunden_strip.showColor(neopixel.colors(NeoPixelColors.Blue))
list = [neopixel.colors(NeoPixelColors.Green)]
list.pop()
for (let index = 0; index < 12; index++) {
    erstelle5_minuten_sequenz()
}
loops.everyInterval(1000, function () {
    minute += 1
    uhrCheck()
    zeigeMinuten()
    zeigeStunden()
})
