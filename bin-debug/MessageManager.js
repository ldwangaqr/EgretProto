//接受消息处理
var Cmd;
(function (Cmd) {
    /**
     * 获取登录check链接websocket
     */
    function OnGetUserDataC(data) {
        console.error("获取的uid", data.uid);
    }
    Cmd.OnGetUserDataC = OnGetUserDataC;
})(Cmd || (Cmd = {}));
//# sourceMappingURL=MessageManager.js.map