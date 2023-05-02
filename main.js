(function(Scratch) {
    'use strict';

    if (!Scratch.extensions.unsandboxed) {
        throw new Error('This Hello World example must run unsandboxed');
    }

    class DataOperationPlusPlus {
        getInfo() {
            return {
                id: 'dataoperationpp',
                name: "Let's operation some data.",
                docsURI: 'https://github.com/forestrharumaki/tw-ext',
                blocks: [{
                        opcode: 'spritWithChar',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'Sprit [BEFORE] with [DELIMITER]',
                        arguments: {
                            BEFORE: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'I like apple'
                            },
                            DELIMITER: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: ' '
                            }
                        }
                    },
                    {
                        opcode: 'getIndexItemFromArrayString',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'item [INDEX] of [BEFORE]',
                        arguments: {
                            BEFORE: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: '[I,like,apple]'
                            },
                            INDEX: {
                                type: Scratch.ArgumentType.NUMBER,
                                defaultValue: 3
                            }
                        }
                    }
                ]
            };
        }

        spritWithChar(args) {
            return '[' + ((args.BEFORE).split(args.DELIMITER)).join(',') + ']';
        }

        getIndexItemFromArrayString(args) {
            return (args.BEFORE).charAt(0) == '[' && (args.BEFORE).charAt((args.BEFORE).length) == ']' ? (((args.BEFORE).substring(1, (args.BEFORE).length - 1)).split(','))[args.INDEX] : 'NaN';
        }
    }

    Scratch.extensions.register(new DataOperationPlusPlus());
})(Scratch);