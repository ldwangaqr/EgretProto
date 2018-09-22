var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Cmd = (function() {

    /**
     * Namespace Cmd.
     * @exports Cmd
     * @namespace
     */
    var Cmd = {};

    Cmd.GetUserDataC = (function() {

        /**
         * Properties of a GetUserDataC.
         * @memberof Cmd
         * @interface IGetUserDataC
         * @property {string|null} [uid] GetUserDataC uid
         */

        /**
         * Constructs a new GetUserDataC.
         * @memberof Cmd
         * @classdesc Represents a GetUserDataC.
         * @implements IGetUserDataC
         * @constructor
         * @param {Cmd.IGetUserDataC=} [properties] Properties to set
         */
        function GetUserDataC(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserDataC uid.
         * @member {string} uid
         * @memberof Cmd.GetUserDataC
         * @instance
         */
        GetUserDataC.prototype.uid = "";

        /**
         * Creates a new GetUserDataC instance using the specified properties.
         * @function create
         * @memberof Cmd.GetUserDataC
         * @static
         * @param {Cmd.IGetUserDataC=} [properties] Properties to set
         * @returns {Cmd.GetUserDataC} GetUserDataC instance
         */
        GetUserDataC.create = function create(properties) {
            return new GetUserDataC(properties);
        };

        /**
         * Encodes the specified GetUserDataC message. Does not implicitly {@link Cmd.GetUserDataC.verify|verify} messages.
         * @function encode
         * @memberof Cmd.GetUserDataC
         * @static
         * @param {Cmd.IGetUserDataC} message GetUserDataC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserDataC.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uid != null && message.hasOwnProperty("uid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uid);
            return writer;
        };

        /**
         * Encodes the specified GetUserDataC message, length delimited. Does not implicitly {@link Cmd.GetUserDataC.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Cmd.GetUserDataC
         * @static
         * @param {Cmd.IGetUserDataC} message GetUserDataC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserDataC.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserDataC message from the specified reader or buffer.
         * @function decode
         * @memberof Cmd.GetUserDataC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Cmd.GetUserDataC} GetUserDataC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserDataC.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Cmd.GetUserDataC();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUserDataC message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Cmd.GetUserDataC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Cmd.GetUserDataC} GetUserDataC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserDataC.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUserDataC message.
         * @function verify
         * @memberof Cmd.GetUserDataC
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUserDataC.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isString(message.uid))
                    return "uid: string expected";
            return null;
        };

        /**
         * Creates a GetUserDataC message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Cmd.GetUserDataC
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Cmd.GetUserDataC} GetUserDataC
         */
        GetUserDataC.fromObject = function fromObject(object) {
            if (object instanceof $root.Cmd.GetUserDataC)
                return object;
            var message = new $root.Cmd.GetUserDataC();
            if (object.uid != null)
                message.uid = String(object.uid);
            return message;
        };

        /**
         * Creates a plain object from a GetUserDataC message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Cmd.GetUserDataC
         * @static
         * @param {Cmd.GetUserDataC} message GetUserDataC
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserDataC.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.uid = "";
            if (message.uid != null && message.hasOwnProperty("uid"))
                object.uid = message.uid;
            return object;
        };

        /**
         * Converts this GetUserDataC to JSON.
         * @function toJSON
         * @memberof Cmd.GetUserDataC
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserDataC.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUserDataC;
    })();

    Cmd.GetUserDataS = (function() {

        /**
         * Properties of a GetUserDataS.
         * @memberof Cmd
         * @interface IGetUserDataS
         * @property {string|null} [info] GetUserDataS info
         */

        /**
         * Constructs a new GetUserDataS.
         * @memberof Cmd
         * @classdesc Represents a GetUserDataS.
         * @implements IGetUserDataS
         * @constructor
         * @param {Cmd.IGetUserDataS=} [properties] Properties to set
         */
        function GetUserDataS(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserDataS info.
         * @member {string} info
         * @memberof Cmd.GetUserDataS
         * @instance
         */
        GetUserDataS.prototype.info = "";

        /**
         * Creates a new GetUserDataS instance using the specified properties.
         * @function create
         * @memberof Cmd.GetUserDataS
         * @static
         * @param {Cmd.IGetUserDataS=} [properties] Properties to set
         * @returns {Cmd.GetUserDataS} GetUserDataS instance
         */
        GetUserDataS.create = function create(properties) {
            return new GetUserDataS(properties);
        };

        /**
         * Encodes the specified GetUserDataS message. Does not implicitly {@link Cmd.GetUserDataS.verify|verify} messages.
         * @function encode
         * @memberof Cmd.GetUserDataS
         * @static
         * @param {Cmd.IGetUserDataS} message GetUserDataS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserDataS.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.info != null && message.hasOwnProperty("info"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.info);
            return writer;
        };

        /**
         * Encodes the specified GetUserDataS message, length delimited. Does not implicitly {@link Cmd.GetUserDataS.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Cmd.GetUserDataS
         * @static
         * @param {Cmd.IGetUserDataS} message GetUserDataS message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserDataS.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserDataS message from the specified reader or buffer.
         * @function decode
         * @memberof Cmd.GetUserDataS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Cmd.GetUserDataS} GetUserDataS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserDataS.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Cmd.GetUserDataS();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.info = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUserDataS message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Cmd.GetUserDataS
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Cmd.GetUserDataS} GetUserDataS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserDataS.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUserDataS message.
         * @function verify
         * @memberof Cmd.GetUserDataS
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUserDataS.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.info != null && message.hasOwnProperty("info"))
                if (!$util.isString(message.info))
                    return "info: string expected";
            return null;
        };

        /**
         * Creates a GetUserDataS message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Cmd.GetUserDataS
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Cmd.GetUserDataS} GetUserDataS
         */
        GetUserDataS.fromObject = function fromObject(object) {
            if (object instanceof $root.Cmd.GetUserDataS)
                return object;
            var message = new $root.Cmd.GetUserDataS();
            if (object.info != null)
                message.info = String(object.info);
            return message;
        };

        /**
         * Creates a plain object from a GetUserDataS message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Cmd.GetUserDataS
         * @static
         * @param {Cmd.GetUserDataS} message GetUserDataS
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserDataS.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.info = "";
            if (message.info != null && message.hasOwnProperty("info"))
                object.info = message.info;
            return object;
        };

        /**
         * Converts this GetUserDataS to JSON.
         * @function toJSON
         * @memberof Cmd.GetUserDataS
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserDataS.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUserDataS;
    })();

    return Cmd;
})();