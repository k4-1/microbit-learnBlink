/**
 * Animation blocks
 */
//% weight=80 color=#9c8025 icon="\uf140"
namespace animation {
    let sprites: game.LedSprite[] = []
    /**
     * Blink an LED at a particular interval
     * @param x horizontol led coordinate
     * @param y vertical led coordinate
     * @param interval time in milli second between blinks
     */
    //% block="blink x $x y $y every $interval ms"
    //% x.min=0 x.max=4 y.min=0 y.max=4
    //% x.fieldOptions.precision=1 y.fieldOptions.precision=1
    //% interval.shadow=timePicker
    export function blink(x:number ,y: number, interval: number): void {
        // Add code here
        // find an existing sprite
        let sprite = sprites.find(s => s.x() == x && s.y() == y);
        if (!sprite)
            sprite = game.createSprite(x, y)
        sprite.setBlink(interval)
        sprite.blink()
    }
}   
