import {
  CannonJSPlugin,
  Engine,
  Scene,
  SceneLoader,
  Tools,
  Vector3
} from "babylonjs";

import { Extensions } from "babylonjs-editor";

export default class Game {
  // Public members
  public engine: Engine;
  public canvas: HTMLCanvasElement = <HTMLCanvasElement>(
    document.getElementById("renderCanvas")
  );

  public scene: Scene = null;

  /**
   * Constructor
   */
  constructor() {
    // Create engine
    this.engine = new Engine(this.canvas, true, {
      // Options
    });

    // Events
    window.addEventListener("resize", () => this.engine.resize());
  }

  /**
   * Runs the game
   */
  public run(): void {
    // Load Scene

    // TODO: use this pattern to swap these:
    // https://doc.babylonjs.com/how_to/multi_scenes#switch-scenes
    const rainyDay = `./scenes/rainy-day/`;
    const tileRoom = `./scenes/tile-room/`;
    let currentScene = tileRoom;

    SceneLoader.Load(
      `${currentScene}`,
      "scene.babylon",
      this.engine,
      (scene: Scene) => {
        this.scene = scene;

        // No camera?
        if (!this.scene.activeCamera) {
          this.scene.createDefaultCamera(false, true, true);
        }

        // Attach camera
        this.scene.activeCamera.attachControl(this.canvas, true);

        // Load extensions
        Tools.LoadFile(
          `${currentScene}/project.editorproject`,
          (data: string) => {
            // Apply extensions (such as custom code, custom materials etc.)
            Extensions.RoolUrl = currentScene;
            Extensions.ApplyExtensions(this.scene, JSON.parse(data));

            // Run render loop
            this.engine.runRenderLoop(() => {
              this.scene.render();
            });
          }
        );
      }
    );
  }
}
