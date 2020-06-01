namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
let Apples: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`0a000800080707070707070707050910101010101010100d0910131313131313100d0910130e0e0e0e13100d0910130e0e0e0e13100d0910131313131313100d0910101010101010100d0a0b0b0b060b0b0b0b0c`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`,
            [myTiles.tile0,sprites.builtin.coral2,myTiles.tile1,sprites.builtin.oceanDepths4,sprites.builtin.oceanSand12,sprites.castle.tilePath3,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tileGrass2,sprites.castle.tileGrass3,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3,sprites.castle.tileGrass1],
            TileScale.Sixteen
        ))
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . f f f f f f f . . . . . . . . . 
. . . . . . . . f d d d d d f . . . . . . . . . 
. . . . . . . . f d f d f d f . . . . . . . . . 
. . . . . . . . f d d d d d f . . . . . . . . . 
. . . . . . . . f d d d d d f . . . . . . . . . 
. . . . . . . . 9 9 9 9 9 9 9 . . . . . . . . . 
. . . . . . . . 9 9 9 9 9 9 9 . . . . . . . . . 
. . . . . . . . 9 9 9 9 9 9 9 . . . . . . . . . 
. . . . . . . . 9 9 9 9 9 9 9 . . . . . . . . . 
. . . . . . . . 9 9 9 9 9 9 9 . . . . . . . . . 
. . . . . . . . d 8 8 8 8 8 d . . . . . . . . . 
. . . . . . . . . 8 8 8 8 8 . . . . . . . . . . 
. . . . . . . . . 8 8 . 8 8 . . . . . . . . . . 
. . . . . . . . . 8 8 . 8 8 . . . . . . . . . . 
. . . . . . . . . 8 8 . 8 8 . . . . . . . . . . 
. . . . . . . . . 8 8 . 8 8 . . . . . . . . . . 
. . . . . . . . a a a . a a a . . . . . . . . . 
. . . . . . . . a a a . a a a . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
info.setScore(0)
info.startCountdown(60)
scene.cameraFollowSprite(mySprite)
game.onUpdateInterval(500, function () {
    Apples = sprites.create(img`
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
    Apples.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
})
