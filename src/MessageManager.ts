//接受消息处理
module Cmd {
    /**
     * 获取登录check链接websocket
     */
    export function OnGetUserDataC(data: Cmd.GetUserDataC) {
        console.error("获取的uid", data.uid);
    }
}