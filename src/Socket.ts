/**
 * 长连接通信方法
 */
module Cmd {
    export class Socket {
        /**心跳检测时间 */
        private static tickSec: number = 30;
        private static lastExchangeTime: number;
        public static ticker: number = 0;
        public static connectTimes = 0;
        private static _ws: WebSocket;
        public static get ws(): WebSocket {
            return this._ws;
        }
        public static connect() {
            /**WebSocket连接 */
            if (this._ws) {
                clearInterval(this.ticker);
                this._ws.close();
            }
            try {
                this._ws = new WebSocket("ws://url");//url是链接的地址
                this._ws.binaryType = "arraybuffer";
            } catch (e) {
                console.error("[WS MyWebSocket ERROR] " + e.toString())
            }
            this.ws.onopen = this.onSocketOpen.bind(this),
                this.ws.onmessage = this.onReceiveMessage.bind(this),
                this.ws.onclose = this.onSocketClose.bind(this),
                this.ws.onerror = this.onSocketError.bind(this);

        }
        private static tickEvent() {
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
        }

        /**
         * | nameLength | nameString | data |
         */
        public static sendSocketMessage(data: any, name: string) {
            var bytes: Uint8Array = eval("Cmd." + name).encode(data).finish();
            var sendData = new egret.ByteArray(bytes);
            var a = name;
            var b = str2ab(a);
            var nameData = new egret.ByteArray(b);
            var sendByteArray = new egret.ByteArray();
            sendByteArray.writeInt(nameData.length);
            sendByteArray.writeBytes(nameData);
            sendByteArray.writeBytes(sendData);
            console.log("[sned]" + name, data, sendByteArray.buffer);
            if (this.ws) {
                this.lastExchangeTime = new Date().getTime();
                //发送屏蔽直接解码
                //this.ws.send(sendByteArray.buffer);
            }
            this.deCodeData(sendByteArray.buffer);
        }

        public static onSocketOpen() {
            this.connectTimes++;
            this.lastExchangeTime = new Date().getTime();
            this.ticker = setInterval(function () {
                Cmd.Socket.tickEvent();
            }, 10000);
        }

        public static onReceiveMessage(e: egret.Event) {
            this.lastExchangeTime = new Date().getTime();
            this.deCodeData(e.data);
        }
        public static deCodeData(data: ArrayBuffer) {
            var bytes: ArrayBuffer = data;
            /**获取类型名长度 */
            var nameLength = Number(bytes.slice(0, 3));
            /**获取类型名 */
            var namebyte = bytes.slice(4, nameLength);
            var Name = ab2str(namebyte);
            console.error(Name + "获取的类型名");
            /**反序列化 */
            var className = eval("Cmd." + Name);
            if (className) {
                var getData = new egret.ByteArray(bytes);
                var getByteArray = new egret.ByteArray();
                getByteArray.writeBytes(getData, nameLength);
                var uint8data = new Uint8Array(getByteArray.buffer);
                var recvData = className.decode(uint8data);
                console.log("[recv]" + Name, recvData, getByteArray.buffer);
                var f: any;
                //在MessageManager中调用On+消息名方法
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
        }

        public static onSocketClose(e) {
            console.log("websocket关闭", e);
        }
        public static onSocketError(e) {

            clearInterval(this.ticker);
        }
    }

}

/**
 * 字符串转为ArrayBuffer，参数为ArrayBuffer对象
 */
function str2ab(str: string) {
    var buf = new ArrayBuffer(str.length); // 每个字符占用2个字节
    var bufView = new Uint8Array(buf);
    for (var i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
}
/**
 *  ArrayBuffer转为字符串，参数为ArrayBuffer对象
 **/
function ab2str(buf): string {
    return String.fromCharCode.apply(null, new Uint8Array(buf));
}
