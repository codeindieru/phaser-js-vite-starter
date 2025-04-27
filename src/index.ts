import Phaser from "phaser";
import { BootScene } from "./scenes/BootScene";

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const gameConfig: Phaser.Types.Core.GameConfig = {
    type: Phaser.CANVAS,
    parent: 'game-container',
    width: screenWidth,
    height: screenHeight,
    backgroundColor: '#fcf0e4',
    scale: {
        mode: Phaser.Scale.RESIZE,
        width: '100%',
        height: '100%',
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0, x: 0 },
            debug: false
        }
    },
    scene: [BootScene]
};

new Phaser.Game(gameConfig);
