require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom security chat crater remind home hunt lobster flush topic'; 
let testAccounts = [
"0x720a0170195d2c415be8c031d6f3b74aaa647df0be16174c2651ee3d56892bb3",
"0x7149bfe0e18fe379c35ba1b5a020a29efebaa01e7bf2a9360b5def3651eaa56d",
"0x43b962066c27f42b7a7c797007d06ff9bcebe3905fc351a88021c5c2a7159275",
"0x4368722367c6bcfbbd2a8c7db2e3ed30c0718696033fedaa3156c1f55e0ae1a8",
"0xd160cae39794c3af0c023d31299d2dd8ffcd381dffb2b41fd7ef9d180a99cff6",
"0x3e008152a7f94e4706cae3b7789d7cdf7c228f30792e5d5dd3683c3799bf049a",
"0xb144955be85e7f81ef9e8f38bade7cef8fcf8615f00ffb2c222a8e1de420fdb9",
"0xd4fd9f181ecf084ecd72cbd32afcb9623429242c0273b14d178ee19ac7c14ae3",
"0x117e18016191a728456a4d3dfefb53ab50ebb6a91fcbcfa8500a5100cc45a433",
"0xa7d1cee5f5727adf897016c3411091596a580c18f5443112c817a0d090a194b1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

