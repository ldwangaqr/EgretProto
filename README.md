# EgretProto
egret项目proto文件在websocket长连接中的使用

proto文件在protobuf/protofile文件下

proto文件用结尾S，C，CS来区分是发送消息或者是接收消息的数据接收，发送C结尾，接收S结尾，发送和接收结构相同使用CS。

使用| nameLength | nameString | data |结构发送和接收数据

修改proto文件后使用pb-egret generate生成对应的d.ts、js、min.js文件
