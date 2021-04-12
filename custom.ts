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
    export function blink(x:number ,y: number, interval: number): void {
        // Add code here
        let sprite = game.createSprite(x, y)
        sprite.setBlink(interval)
        sprite.blink()
    }
}   
