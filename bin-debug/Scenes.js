var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Scenes = (function (_super) {
    __extends(Scenes, _super);
    function Scenes() {
        var _this = _super.call(this) || this;
        /**載入場景 */
        _this.once(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    /**初始化 */
    Scenes.prototype.init = function () {
        /**創建背景 */
        var BG = new egret.Bitmap(RES.getRes('BG_png'));
        var stageH = this.stage.stageHeight;
        var stageW = this.stage.stageWidth;
        BG.height = stageH;
        BG.width = stageW;
        this.addChild(BG);
        /**創建一個轉盤 */
        var wheel = new Wheel();
        this.addChild(wheel);
    };
    return Scenes;
}(egret.DisplayObjectContainer));
__reflect(Scenes.prototype, "Scenes");
//# sourceMappingURL=Scenes.js.map