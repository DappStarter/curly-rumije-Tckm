require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process only venture strong deny remember coil gown light army gauge'; 
let testAccounts = [
"0xf5cf0106dd12be4eb985c0db44122bb6e7a9f67668bb0176b79e979a9d34ad4c",
"0x4e11b30d330c5d204bb352a77adb5ac93a57bd1fcad25ed29e3dc703f16f6611",
"0x25acc9e827d14d5721d5682f788a5cf89a8de02edf901eb542133e42539b3c12",
"0x26f4a15e7b5b3d1576eaecf9f70e2596c6405dd9848a85835d6231db3f01b597",
"0x8a5627efce3a0a329f61872abeca9ae67c485f369dfa086c07b4575d39a713a5",
"0x049e3f6f570a35e97fb6b9be0b0b0605a3cbc1cc64d3b85d0fbc562ac239c1e0",
"0xea2ff428112a158da660acb8cf38badb3d1ae9383f0f5791fccab08d5920f4f2",
"0xa2fea41efb85192e74ca1fbaa133e5298502f44df3de895f66f2749496d338ad",
"0xebd7311df78397ce8e372ec008360de21cebd4152ed30352dc5c0192780e85b4",
"0xbd9c4c5c941974214514d52cc68a1238c5b9dd9652ef1394f6258f2c6223867a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


