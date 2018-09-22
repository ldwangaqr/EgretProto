var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 长连接通信方法
 */
var Cmd;
(function (Cmd) {
    var Socket = (function () {
        function Socket() {
        }
        Object.defineProperty(Socket, "ws", {
            get: function () {
                return this._ws;
            },
            enumerable: true,
            configurable: true
        });
        Socket.connect = function () {
            /**WebSocket连接 */
            if (this._ws) {
                clearInterval(this.ticker);
                this._ws.close();
            }
            try {
                this._ws = new WebSocket("ws://url"); //url是链接的地址
                this._ws.binaryType = "arraybuffer";
            }
            catch (e) {
                console.error("[WS MyWebSocket ERROR] " + e.toString());
            }
            this.ws.onopen = this.onSocketOpen.bind(this),
                this.ws.onmessage = this.onReceiveMessage.bind(this),
                this.ws.onclose = this.onSocketClose.bind(this),
                this.ws.onerror = this.onSocketError.bind(this);
        };
        Socket.tickEvent = function () {
            //心跳事件防止websocket自动断开
            var now = new Date().getTime();
            var diff = now - Cmd.Socket.lastExchangeTime;
            if (Cmd.Socket._ws.readyState == WebSocket.CLOSED) {
                Cmd.Socket.connect();
            }
            else {
                if (diff >= 30000) {
                    // var data = new TickEventC();
                    // Cmd.Socket.sendSocketMessage(data, "TickEventC");
                    return true;
                }
            }
            return true;
        };
        Socket.sendSocketMessage = function (data, name) {
            var bytes = eval("Cmd." + name).encode(data).finish();
            var sendData = new egret.ByteArray(bytes);
            var a = name;
            var b = str2ab(a);
            var nameData = new egret.ByteArray(b);
            var sendByteArray = new egret.ByteArray();
            sendByteArray.writeBytes(nameData);
            sendByteArray.writeBytes(sendData);
            console.log("[sned]" + name, data, sendByteArray.buffer);
            if (this.ws) {
                this.lastExchangeTime = new Date().getTime();
                //发送屏蔽直接解码
                //this.ws.send(sendByteArray.buffer);
            }
            this.deCodeData(sendByteArray.buffer);
        };
        Socket.onSocketOpen = function () {
            this.connectTimes++;
            this.lastExchangeTime = new Date().getTime();
            this.ticker = setInterval(function () {
                Cmd.Socket.tickEvent();
            }, 10000);
        };
        Socket.onReceiveMessage = function (e) {
            this.lastExchangeTime = new Date().getTime();
            this.deCodeData(e.data);
        };
        Socket.deCodeData = function (data) {
            var bytes = data;
            /**获取类型名 */
            var namebyte = bytes;
            namebyte = namebyte.slice(0, 19);
            var Name = ab2str(namebyte).replace(/[0]/ig, "");
            console.error(Name + "获取的类型名");
            /**反序列化 */
            var className = eval("Cmd." + Name);
            if (className) {
                var getData = new egret.ByteArray(bytes);
                var getByteArray = new egret.ByteArray();
                getByteArray.writeBytes(getData, 20);
                var uint8data = new Uint8Array(getByteArray.buffer);
                var recvData = className.decode(uint8data);
                console.log("[recv]" + Name, recvData, getByteArray.buffer);
                var f;
                f = eval("Cmd.On" + Name);
                if (f != null) {
                    f(recvData);
                }
                else {
                    console.error("未找到" + Name + "对应的方法，请检查代码");
                }
            }
            else {
                console.error("未找到" + Name + "对应proto文件，请检查更新");
            }
        };
        Socket.onSocketClose = function (e) {
            console.log("websocket关闭", e);
        };
        Socket.onSocketError = function (e) {
            clearInterval(this.ticker);
        };
        /**心跳检测时间 */
        Socket.tickSec = 30;
        Socket.ticker = 0;
        Socket.connectTimes = 0;
        return Socket;
    }());
    Cmd.Socket = Socket;
    __reflect(Socket.prototype, "Cmd.Socket");
})(Cmd || (Cmd = {}));
/**
 * 字符串转为ArrayBuffer，参数为ArrayBuffer对象
 */
function str2ab(str) {
    var buf = new ArrayBuffer(20); // 每个字符占用2个字节
    if (str.length < 20) {
        var length_1 = 20 - str.length;
        for (var j = 0; j < length_1; j++) {
            str = str + "0";
        }
    }
    var bufView = new Uint8Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}
/**
 *  ArrayBuffer转为字符串，参数为ArrayBuffer对象
 **/
function ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint8Array(buf));
}
//# sourceMappingURL=Socket.js.map