"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("babylonjs-materials");
require("babylonjs-procedural-textures");
require("babylonjs-loaders");
require("babylonjs-gui");
var babylonjs_1 = require("babylonjs");
var babylonjs_editor_1 = require("babylonjs-editor");
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        this.canvas = (document.getElementById("renderCanvas"));
        this.scene = null;
        this.engine = new babylonjs_1.Engine(this.canvas, true, {});
        window.addEventListener("resize", function () { return _this.engine.resize(); });
    }
    Game.prototype.run = function () {
        var _this = this;
        var rainyDay = "./scenes/Rainy-Day/";
        //const spaceScene = `./scenes/Space-Scene/`;
        var currentScene = rainyDay;
        babylonjs_1.SceneLoader.Load("" + currentScene, "scene.babylon", this.engine, function (scene) {
            _this.scene = scene;
            console.log(_this.scene);
            if (!_this.scene.activeCamera) {
                _this.scene.createDefaultCamera(false, true, true);
            }
            _this.scene.activeCamera.attachControl(_this.canvas, true);
            babylonjs_1.Tools.LoadFile(currentScene + "/project.editorproject", function (data) {
                babylonjs_editor_1.Extensions.RoolUrl = currentScene;
                babylonjs_editor_1.Extensions.ApplyExtensions(_this.scene, JSON.parse(data));
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