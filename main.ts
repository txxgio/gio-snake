function Growth (Grow: number, Snake: Sprite[]) {
    if (Grow == 0) {
        snake = Snake.shift()
    } else {
        growth = 0
        snake = sprites.create(img`
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
            8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
            8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
            8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
            8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
            8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
            8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
            8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
            8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
            8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
            8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
            8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
            8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
            8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
            `, SpriteKind.Player)
        snake.setFlag(SpriteFlag.AutoDestroy, true)
    }
    x2 = Snake[Snake.length - 1].x + 16 * speedX
    y2 = Snake[Snake.length - 1].y + 15 * speedY
    snake.setPosition(x2, y2)
    Snake.push(snake)
    if (Snake.length == 80) {
        game.over(true)
    }
    pause(200)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (speedY == 0) {
        speedX = 0
        speedY = -1
    }
})
function spawnFood (list: any[]) {
    Apple = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.Food)
    isEmptyPosition = false
    while (!(isEmptyPosition)) {
        x = 8 + 16 * randint(0, 9)
        y = 8 + 15 * randint(0, 7)
        isEmptyPosition = true
        for (let value of Snakes) {
            if (x == value.x && y == value.y) {
                isEmptyPosition = false
            }
        }
    }
    Apple.setPosition(x, y)
}
function Start () {
    scene.setBackgroundImage(img`
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        7777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf77777777777777fdddddddddddddddf777777777777777fdddddddddddddddd
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        ddddddddddddddddf777777777777777fdddddddddddddddf777777777777777fdddddddddddddddf777777777777777fddddddddddddddf777777777777777fdddddddddddddddf7777777777777777
        `)
    snake = sprites.create(img`
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
        8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
        8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
        8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
        8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
        8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
        8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
        8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
        8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
        8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
        8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
        8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
        8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        `, SpriteKind.Player)
    snake.setFlag(SpriteFlag.AutoDestroy, true)
    snake.setPosition(8, 8)
    Snakes.push(snake)
    snake = sprites.create(img`
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
        8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
        8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
        8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
        8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
        8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
        8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
        8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
        8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
        8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
        8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
        8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
        8 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        `, SpriteKind.Player)
    snake.setFlag(SpriteFlag.AutoDestroy, true)
    snake.setPosition(24, 8)
    Snakes.push(snake)
    speedX = 1
    speedY = 0
    growth = 0
    spawnFood(list)
    info.setScore(0)
    pause(2000)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (speedX == 0) {
        speedX = -1
        speedY = 0
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (speedX == 0) {
        speedX = 1
        speedY = 0
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (speedY == 0) {
        speedX = 0
        speedY = 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    growth = 1
    spawnFood(list)
    info.changeScoreBy(1)
})
function checkList (myList: any[]) {
    for (let i = 0; i <= myList.length - 1; i++) {
        if (myList[i] % 2 == 0) {
            containsEven = true
        } else {
            containsOdd = true
        }
        if (containsEven && containsOdd) {
            return true
        }
    }
    return false
}
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.over(false)
})
let containsOdd = false
let containsEven = false
let list: number[] = []
let Snakes: Sprite[] = []
let y = 0
let x = 0
let isEmptyPosition = false
let Apple: Sprite = null
let speedY = 0
let y2 = 0
let speedX = 0
let x2 = 0
let growth = 0
let snake: Sprite = null
let isEmptyPosition2 = false
let Apple2 = null
Start()
// Contains only odd numbers
let myList1 = [
1,
3,
5,
7,
9
]
// Contains only even numbers
let myList2 = [
2,
4,
6,
8,
10
]
// Contains both even and odd numbers
let myList3 = [
1,
2,
3,
4,
5
]
// Output: false
console.log(checkList(myList1))
// Output: false
console.log(checkList(myList2))
// Output: true
console.log(checkList(myList3))
forever(function () {
    Growth(growth, Snakes)
})
