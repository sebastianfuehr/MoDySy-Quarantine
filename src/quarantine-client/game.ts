import 'phaser';
import { MainScene } from './scenes/main-scene';
import { GuiScene } from "./scenes/gui-scene";
import { ChartScene } from './scenes/chart-scene';
import { AgentScene } from './scenes/agent-scene';
import { MapScene } from './scenes/map-scene';

const config: Phaser.Types.Core.GameConfig = {
    width: 1600,
    height: 800,
    backgroundColor: Phaser.Display.Color.GetColor(255, 255, 255),
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    dom: {
        createContainer: true // allow manipulation of dom elements within phaser (used by status bar in gui-scene.ts)
    },

    scene: [MainScene, GuiScene, ChartScene, AgentScene, MapScene],
    physics: {
        default: 'arcade',
        arcade: {
            // set to true to display object collision bounding boxes
            debug: false
        }
    }
};

/** Program entry point */
export class Game extends Phaser.Game {
    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config);
    }
}

window.addEventListener("load", () => {
    new Game(config);
});
