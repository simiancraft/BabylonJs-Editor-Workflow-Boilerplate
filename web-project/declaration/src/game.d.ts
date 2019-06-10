import "babylonjs-materials";
import "babylonjs-procedural-textures";
import "babylonjs-loaders";
import "babylonjs-gui";
import { Engine, Scene } from "babylonjs";
declare class Game {
    engine: Engine;
    canvas: HTMLCanvasElement;
    scene: Scene;
    constructor();
    run(): void;
}
export default Game;
