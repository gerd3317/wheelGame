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
var Wheel = (function (_super) {
    __extends(Wheel, _super);
    function Wheel() {
        var _this = _super.call(this) || this;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.init, _this);
        return _this;
    }
    Wheel.prototype.init = function () {
        var _this = this;
        /**加入輸入文字盒 */
        var inputArea = new egret.TextField();
        inputArea.width = 480;
        inputArea.height = 60;
        inputArea.x = this.stage.stageWidth / 2 - (inputArea.width / 2);
        inputArea.y = 90;
        inputArea.border = true;
        inputArea.borderColor = 0xFFFFFF;
        this.addChild(inputArea);
        inputArea.verticalAlign = egret.VerticalAlign.MIDDLE;
        inputArea.type = egret.TextFieldType.INPUT;
        inputArea.addEventListener(egret.Event.FOCUS_OUT, function () {
            /**從這邊把後臺數字帶入this.cricle.rotation ===x */
            SlowDownBtn.addEventListener(egret.TouchEvent.ENTER_FRAME, function () {
                var displayRotation = 25;
                switch (inputArea.text) {
                    case '800':
                        displayRotation = -110;
                        break;
                    case '400':
                        displayRotation = -65;
                        break;
                    case '7000':
                        displayRotation = -155;
                        break;
                    case '1000':
                        displayRotation = -20;
                        break;
                    case '100':
                        displayRotation = 25;
                        break;
                    case '2000':
                        displayRotation = 70;
                        break;
                    case '300':
                        displayRotation = 115;
                        break;
                    case '5000':
                        displayRotation = 160;
                        break;
                }
                if (_this.round >= 4 && _this.cricle.rotation === displayRotation) {
                    _this.timer.stop();
                    if (_this.cricle.rotation >= 0 && _this.cricle.rotation <= 45) {
                        _this.textInfo.text = "獎金100元";
                        _this.textInfo.anchorOffsetX = _this.textInfo.width / 2;
                    }
                    if (_this.cricle.rotation >= 45.1 && _this.cricle.rotation <= 89) {
                        _this.textInfo.text = "獎金2000元";
                        _this.textInfo.anchorOffsetX = _this.textInfo.width / 2;
                    }
                    if (_this.cricle.rotation >= 89.1 && _this.cricle.rotation <= 137.2) {
                        _this.textInfo.text = "獎金300元";
                        _this.textInfo.anchorOffsetX = _this.textInfo.width / 2;
                    }
                    if (_this.cricle.rotation >= 137.3 && _this.cricle.rotation <= 180) {
                        _this.textInfo.text = "獎金5000元";
                        _this.textInfo.anchorOffsetX = _this.textInfo.width / 2;
                    }
                    if (_this.cricle.rotation <= 0.1 && _this.cricle.rotation >= -45.2) {
                        _this.textInfo.text = "獎金1000元";
                        _this.textInfo.anchorOffsetX = _this.textInfo.width / 2;
                    }
                    if (_this.cricle.rotation <= -45.3 && _this.cricle.rotation >= -90) {
                        _this.textInfo.text = "獎金400元";
                        _this.textInfo.anchorOffsetX = _this.textInfo.width / 2;
                    }
                    if (_this.cricle.rotation <= -90.1 && _this.cricle.rotation >= -134.7) {
                        _this.textInfo.text = "獎金800元";
                        _this.textInfo.anchorOffsetX = _this.textInfo.width / 2;
                    }
                    if (_this.cricle.rotation <= -134.8 && _this.cricle.rotation >= -180) {
                        _this.textInfo.text = "獎金7000元";
                        _this.textInfo.anchorOffsetX = _this.textInfo.width / 2;
                    }
                    /**重置歸零 */
                    _this.textBtn.text = "開始";
                    _this.round = 0;
                    _this.timer.delay = 0;
                }
            }, _this);
        }, this);
        /**提示文字 */
        var label = new egret.TextField();
        label.width = 450;
        label.height = 60;
        label.text = "輸入後台文字:";
        label.x = this.stage.stageWidth / 2 - (inputArea.width / 2);
        label.y = 40;
        label.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.addChild(label);
        /**建立圓盤 */
        this.cricle = new egret.Bitmap(RES.getRes('prizeWheel_png'));
        this.cricle.x = this.stage.stageWidth / 2;
        this.cricle.y = this.stage.stageHeight / 2 - 100;
        this.cricle.anchorOffsetX = this.cricle.width / 2;
        this.cricle.anchorOffsetY = this.cricle.height / 2;
        this.addChild(this.cricle);
        /**繪製指針 */
        this.pointer = new egret.Bitmap(RES.getRes('pointer_png'));
        this.pointer.anchorOffsetY = this.pointer.height / 2 + 20;
        this.pointer.anchorOffsetX = this.pointer.width / 2;
        this.pointer.x = this.stage.stageWidth / 2;
        this.pointer.y = this.stage.stageHeight / 2 - 100;
        this.addChild(this.pointer);
        /**建立按鈕*/
        var SlowDownBtn = new egret.Bitmap(RES.getRes('btn_png'));
        SlowDownBtn.x = 200;
        SlowDownBtn.y = 800;
        SlowDownBtn.touchEnabled = true;
        this.addChild(SlowDownBtn);
        /**提示訊息 */
        this.textInfo = new egret.TextField;
        this.textInfo.size = 30;
        this.textInfo.textColor = 0x000000;
        this.textInfo.lineSpacing = 10;
        this.textInfo.multiline = true;
        this.textInfo.text = "點擊按鈕開始或停止";
        this.textInfo.bold = true;
        this.textInfo.anchorOffsetX = this.textInfo.width / 2;
        this.textInfo.x = this.stage.stageWidth / 2;
        this.textInfo.y = 750;
        this.addChild(this.textInfo);
        /**按鈕文字 */
        this.textBtn = new egret.TextField;
        this.textBtn.size = 50;
        this.textBtn.textColor = 0xffffff;
        this.textBtn.lineSpacing = 10;
        this.textBtn.multiline = true;
        this.textBtn.text = "開始";
        this.textBtn.x = this.stage.stageWidth / 2 - 65;
        this.textBtn.y = 880;
        this.addChild(this.textBtn);
        /**創建一個計時器 */
        this.timer = new egret.Timer(5, 0);
        this.round = 0;
        this.timer.addEventListener(egret.TimerEvent.TIMER, function () {
            _this.cricle.rotation += 25;
            if (_this.cricle.rotation === 180) {
                _this.timer.delay += 25;
                _this.round += 1;
            }
        }, this);
        SlowDownBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (inputArea.text) {
                if (inputArea.text === '800' || inputArea.text === '400' || inputArea.text === '7000' || inputArea.text === '1000' ||
                    inputArea.text === '100' || inputArea.text === '2000' || inputArea.text === '300' || inputArea.text === '5000') {
                    _this.timer.start();
                    _this.textBtn.text = "停止";
                    _this.textInfo.text = "轉動中...";
                    _this.textInfo.anchorOffsetX = _this.textInfo.width / 2;
                }
                else {
                    _this.textInfo.text = "沒有這個數字可以轉喔!";
                    _this.textInfo.anchorOffsetX = _this.textInfo.width / 2;
                }
            }
            else {
                _this.textInfo.text = "還沒輸入後台數字喔!";
                _this.textInfo.anchorOffsetX = _this.textInfo.width / 2;
            }
        }, this);
    };
    return Wheel;
}(egret.Sprite));
__reflect(Wheel.prototype, "Wheel");
//# sourceMappingURL=Wheel.js.map