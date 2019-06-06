"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var babylonjs_1 = require("babylonjs");
var babylonjs_editor_1 = require("babylonjs-editor");
var Game = /** @class */ (function () {
    /**
     * Constructor
     */
    function Game() {
        var _this = this;
        this.canvas = document.getElementById('renderCanvas');
        this.scene = null;
        // Create engine
        this.engine = new babylonjs_1.Engine(this.canvas, true, {
        // Options
        });
        // Events
        window.addEventListener('resize', function () { return _this.engine.resize(); });
    }
    /**
     * Runs the game
     */
    Game.prototype.run = function () {
        var _this = this;
        // Load Scene
        babylonjs_1.SceneLoader.Load('./scene/', 'scene.babylon', this.engine, function (scene) {
            _this.scene = scene;
            // No camera?
            if (!_this.scene.activeCamera) {
                _this.scene.createDefaultCamera(false, true, true);
            }
            // Attach camera
            _this.scene.activeCamera.attachControl(_this.canvas, true);
            // Load extensions
            babylonjs_1.Tools.LoadFile('./scene/project.editorproject', function (data) {
                // Apply extensions (such as custom code, custom materials etc.)
                babylonjs_editor_1.Extensions.RoolUrl = './scene/';
                babylonjs_editor_1.Extensions.ApplyExtensions(_this.scene, JSON.parse(data));
                // Run render loop
                _this.engine.runRenderLoop(function () {
                    _this.scene.render();
                });
            });
        });
    };
    return Game;
}());
exports.default = Game;
//# sourceMappingURL=game.js.map