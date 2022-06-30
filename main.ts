controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ColorChange) {
        Ball.setImage(assets.image`Ball_Color2`)
        ColorChange = false
    } else {
        Ball.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . 7 5 5 5 5 5 5 5 7 . . . . 
            . . 7 5 5 5 5 5 5 5 5 5 7 . . . 
            . 7 5 5 5 5 5 5 5 5 5 5 5 7 . . 
            . 7 5 5 5 7 7 7 7 7 5 5 5 7 . . 
            . 7 5 5 7 6 6 6 6 6 7 5 5 7 . . 
            . 7 5 5 7 6 6 6 6 6 7 5 5 7 . . 
            . 7 5 5 7 6 6 6 6 6 7 5 5 7 . . 
            . 7 5 5 7 6 6 6 6 6 7 5 5 7 . . 
            . 7 5 5 7 6 6 6 6 6 7 5 5 7 . . 
            . . 7 5 5 7 7 7 7 7 5 5 7 . . . 
            . . . 7 5 5 5 5 5 5 5 7 . . . . 
            . . . . 7 7 7 7 7 7 7 . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        ColorChange = true
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    Ball.setVelocity(randint(-1 * BallSpeed, BallSpeed), randint(-1 * BallSpeed, BallSpeed))
    Ball2.setVelocity(randint(-1 * Ball2Speed, Ball2Speed), randint(-1 * Ball2Speed, Ball2Speed))
    info.changeScoreBy(1)
})
let ColorChange = false
let Ball2Speed = 0
let BallSpeed = 0
let Ball2: Sprite = null
let Ball: Sprite = null
let Cage = sprites.create(assets.image`Cage`, SpriteKind.Player)
Ball = sprites.create(assets.image`Ball_Color2`, SpriteKind.Player)
Ball2 = sprites.create(assets.image`Ball_Color2`, SpriteKind.Player)
Ball.setPosition(randint(70, 90), randint(50, 70))
Ball2.setPosition(randint(70, 90), randint(50, 70))
BallSpeed = 20
Ball2Speed = 25
Ball.setVelocity(randint(-1 * BallSpeed, BallSpeed), randint(-1 * BallSpeed, BallSpeed))
Ball2.setVelocity(randint(-1 * Ball2Speed, Ball2Speed), randint(-1 * Ball2Speed, Ball2Speed))
ColorChange = false
game.onUpdate(function () {
    if (info.score() >= 200) {
        game.over(false)
    }
})
