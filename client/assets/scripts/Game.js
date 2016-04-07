var NetMgr = require("NetMgr");

var Game = cc.Class({
    extends: cc.Component,
    
    properties: {
        mainUI: cc.Node,
    },
    
    // 单例
    statics: {
        instance: null
    },

    // use this for initialization
    onLoad: function () {
        Game.instance = this;
        console.log("游戏启动！");
        
    },
    
    start: function() {
        
        cc.director.loadScene('TestScene');
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
    
    
});