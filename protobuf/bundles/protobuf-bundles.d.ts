type Long = protobuf.Long;

/** Namespace Cmd. */
declare namespace Cmd {

    /** Properties of a GetUserDataC. */
    interface IGetUserDataC {

        /** GetUserDataC uid */
        uid?: (string|null);
    }

    /** Represents a GetUserDataC. */
    class GetUserDataC implements IGetUserDataC {

        /**
         * Constructs a new GetUserDataC.
         * @param [properties] Properties to set
         */
        constructor(properties?: Cmd.IGetUserDataC);

        /** GetUserDataC uid. */
        public uid: string;

        /**
         * Creates a new GetUserDataC instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUserDataC instance
         */
        public static create(properties?: Cmd.IGetUserDataC): Cmd.GetUserDataC;

        /**
         * Encodes the specified GetUserDataC message. Does not implicitly {@link Cmd.GetUserDataC.verify|verify} messages.
         * @param message GetUserDataC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Cmd.IGetUserDataC, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetUserDataC message, length delimited. Does not implicitly {@link Cmd.GetUserDataC.verify|verify} messages.
         * @param message GetUserDataC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Cmd.IGetUserDataC, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetUserDataC message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUserDataC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Cmd.GetUserDataC;

        /**
         * Decodes a GetUserDataC message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUserDataC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Cmd.GetUserDataC;

        /**
         * Verifies a GetUserDataC message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }

    /** Properties of a GetUserDataS. */
    interface IGetUserDataS {

        /** GetUserDataS info */
        info?: (string|null);
    }

    /** Represents a GetUserDataS. */
    class GetUserDataS implements IGetUserDataS {

        /**
         * Constructs a new GetUserDataS.
         * @param [properties] Properties to set
         */
        constructor(properties?: Cmd.IGetUserDataS);

        /** GetUserDataS info. */
        public info: string;

        /**
         * Creates a new GetUserDataS instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUserDataS instance
         */
        public static create(properties?: Cmd.IGetUserDataS): Cmd.GetUserDataS;

        /**
         * Encodes the specified GetUserDataS message. Does not implicitly {@link Cmd.GetUserDataS.verify|verify} messages.
         * @param message GetUserDataS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Cmd.IGetUserDataS, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified GetUserDataS message, length delimited. Does not implicitly {@link Cmd.GetUserDataS.verify|verify} messages.
         * @param message GetUserDataS message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Cmd.IGetUserDataS, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a GetUserDataS message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUserDataS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): Cmd.GetUserDataS;

        /**
         * Decodes a GetUserDataS message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUserDataS
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): Cmd.GetUserDataS;

        /**
         * Verifies a GetUserDataS message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);
    }
}
