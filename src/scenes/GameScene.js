import { platform } from "os"

var background
var platforms
let keyW,keyA,keyS,keyD
let player
let cloud
let lightning
let lightningGroup
let thunder
let thunderGroup
class GameScene extends Phaser.Scene{

    constructor(){
        super({
            key: 'GameScene'
        })
    }

    preload(){
            this.load.image('sky','images/sky.jpg');
            this.load .image('platform','images/platform.png')
            this.load.image('Player','../../images/nong.png',{frameWidth :384 ,frameHeight:216})
            this.load.image('Lightning','../../images/lightning.png')

    }
    
    create(){
        platforms = this.physics.add.image(0,0,'platform').setOrigin(0.5).setScale(1).setSize(1800,250).setCollideWorldBounds(true);
        background = this.add.image(0,0,'sky').setOrigin(0).setScale(1)
        player = this.physics.add.image(384,216,'Player').setSize(350,650).setScale(0.2).setCollideWorldBounds(true);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.physics.add.collider(player,platforms);
        
        lightningGroup = this.physics.add.group();
        this.physics.add.collider(player,lightningGroup,function(){console.log('test')})
        event = this.time.addEvent({
            delay : 1500,
            callback : function(){
                lightning = this.physics.add.sprite(Phaser.Math.Between(0,900),20,'Lightning').setScale(0.1)
                lightningGroup.add(lightning)
                lightningGroup.setVelocityY(200)
            },
            callbackScope : this,
            loop : true,
            pause : true,
            
            
        })

    }

    update(){
        {
            if (keyA.isDown) {
                player.setVelocityX(-400)

            } else if (keyD.isDown) {
                player.setVelocityX(400)

            } else if (keyS.isDown) {
                player.setVelocityY(400)
            } else {
                player.setVelocity(0, 0)
            }
            if (keyW.isDown) {
                player.setVelocityY(-400)
            }
        }
        for(let i = 0;i < lightningGroup.getLength();i++){
            let thun = lightningGroup.getChildren()[i]
            if(lightning.y <= -50){
                lightning.destroy(true)
            }
        }
    }

}
export default GameScene