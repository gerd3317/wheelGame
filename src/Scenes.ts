class Scenes extends egret.DisplayObjectContainer{
    constructor(){
        super();
        /**載入場景 */
        this.once(egret.Event.ADDED_TO_STAGE, this.init, this);
    }
    /**初始化 */
    private init(){
        /**創建背景 */
        const BG:egret.Bitmap = new egret.Bitmap(RES.getRes('BG_png'));
        const stageH = this.stage.stageHeight;
        const stageW = this.stage.stageWidth;
        BG.height = stageH;
        BG.width = stageW;
        this.addChild(BG);

        /**創建一個轉盤 */
        const wheel:egret.Sprite = new Wheel();
        this.addChild(wheel);
    }
}