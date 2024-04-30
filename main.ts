let direction = ""
let apple: Sprite = null
let x: number[] = []
let snake: Sprite = null
let body: Sprite = null
let snakes: Sprite[] = []
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "up"
})
function start_game () {
    info.setScore(0)
    apple = sprites.create(img`
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
    apple.setPosition(0, 0)
    snake_spawn()
    x = []
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "left"
})
function snakemove () {
    if (direction == "right") {
        snake.setImage(img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
            2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
            2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
            2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
            2 8 8 8 8 8 8 8 8 8 8 8 1 8 8 2 
            2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
            2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
            2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
            2 8 8 8 8 8 8 8 8 8 8 8 1 8 8 2 
            2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
            2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
            2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
            2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `)
        snake.x += 16
        body.x = snake.x - 0
        body.y = snake.y
    } else if (false) {
    	
    } else {
    	
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "Right"
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = "down"
})
function snake_spawn () {
    snake = sprites.create(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
        2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
        2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
        2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
        2 8 8 8 8 8 8 8 8 8 8 8 1 8 8 2 
        2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
        2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
        2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
        2 8 8 8 8 8 8 8 8 8 8 8 1 8 8 2 
        2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
        2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
        2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
        2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, SpriteKind.Player)
    snake.setFlag(SpriteFlag.AutoDestroy, true)
    snake.setPosition(0, 0)
    snakes = []
    snake = sprites.create(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
        2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
        2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
        2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
        2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
        2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
        2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
        2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
        2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
        2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
        2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
        2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
        2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
        2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, SpriteKind.Player)
    snake.setFlag(SpriteFlag.AutoDestroy, false)
    snakes.push(body)
    direction = "Right"
}
