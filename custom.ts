/**
 * Animation blocks
 */
//% weight=80 color=#0fbc11 icon=""
namespace animation {
    /**
     * Blink an LED at a particular interval
     * @param x horizontol led coordinate
     * @param y vertical led coordinate
     * @param interval time in milli second between blinks
     */
    //% block="blink x $x y $y every $interval ms"
    //% x.min=0 x.max=4 y.min=0 y.max=4
    //% x.fieldOptions.precision=1 y.fieldOptions.precision=1
    export function blink(x:number ,y: number, interval: number): void {
        // Add code here
        let sprite = game.createSprite(x, y)
        sprite.setBlink(interval)
        sprite.blink()
    }
}   
