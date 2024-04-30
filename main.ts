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
    x = Snake[Snake.length - 1].x + 16 * speedX
    y = Snake[Snake.length - 1].y + 15 * speedY
    snake.setPosition(x, y)
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
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.over(false)
})
let list: number[] = []
let Snakes: Sprite[] = []
let isEmptyPosition = false
let Apple: Sprite = null
let speedY = 0
let y = 0
let speedX = 0
let x = 0
let growth = 0
let snake: Sprite = null
Start()
forever(function () {
    Growth(growth, Snakes)
})
