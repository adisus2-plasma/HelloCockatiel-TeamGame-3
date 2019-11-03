var background
var platforms
let keyW,keyA,keyS,keyD
let player
class GameScene extends Phaser.Scene{

    constructor(){
        super({
            key: 'GameScene'
        })
    }

    preload(){
            this.load.image('player','../images/Gokuตัดเองจ้า.png')
    }
    
    create(){
        
        player = this.physics.add.image(384, 216, 'player').setSize(400, 300).setScale(0.2).setCollideWorldBounds(true)
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

    }

    update(){
    {
        if (keyA.isDown) {
            player.setVelocityX(-400)

        } else if (keyD.isDown) {
            player.setVelocityX(400)

        } else  {
            player.setVelocityX(0)
        }
        if (keyW.isDown) {
            player.setVelocityY(-400)
        }else if (keyS.isDown) {
            player.setVelocityY(400)
        }else  {
            player.setVelocityY(0)
        }
    }

    }
}
export default GameScene