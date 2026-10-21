let sprite = game.createSprite(2, 2)
let coin = game.createSprite(randint(0, 4), randint(0, 4))
game.startCountdown(10000)
while (game.isRunning()) {
    if (input.acceleration(Dimension.X) < -200) {
        sprite.change(LedSpriteProperty.X, -1)
        if (input.acceleration(Dimension.X) > 200) {
            sprite.change(LedSpriteProperty.X, 1)
        }
        if (input.acceleration(Dimension.Y) < -200) {
            sprite.change(LedSpriteProperty.Y, -1)
        }
        if (input.acceleration(Dimension.Y) > 200) {
            sprite.change(LedSpriteProperty.Y, 1)
        }
        if (sprite.isTouching(coin)) {
            game.addScore(1)
            coin.set(LedSpriteProperty.X, randint(0, 4))
            coin.set(LedSpriteProperty.Y, randint(0, 4))
        }
        basic.pause(100)
    }
}
