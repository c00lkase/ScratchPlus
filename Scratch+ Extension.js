// Hello! Here's a quick warning to not edit the code unless you know what you're doing!

class ScratchPlus {
    getInfo() {
        return {
            "id": "Scratch+",
            "name": "Scratch+",
            "blocks": [
                {
                    "opcode": "openWebsite",
                    "blockType": "command",
                    "text": "open website [site]",
                    "arguments": {
                        "site": {
                            "type": "string",
                            "defaultValue": ""
                        },
                    }
                },
            ],
            "menus": { 
            }
    };
    openWebsite({site})
        window.open(site, _blank)
    };   
}
Scratch.extensions.register(new ScratchPlus());