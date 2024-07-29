// import bitcoin from '/build_wallet/assets/js/bitcoinjs-lib.js';
//  import { ECPairFactory }  from 'ecpair';
//  import * as tinysecp256k1 from 'tiny-secp256k1';

// TODO: Moralis-library


$(document).ready(function() {
    
    $('#generateAddress').click(function() {
        // function createWallet() {
            const keyPair = bitcoin.ECPair.makeRandom();
            const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
            const privateKey = keyPair.privateKey.toString('hex');
          
            console.log(`New Bitcoin Address: ${address}`);
            console.log(`Private Key: ${privateKey}`);
        //  }
          
   
    const keypair = bitcoin.ecpair.makeRandom({ network })
    console.log(keypair);
        // const Ecp = ECPair.ECPairFactory(secp256k1);
        // const keyPair = ECPair.makeRandom();
        // const { address } = payments.p2pkh({ pubkey: keyPair.publicKey });
        // $('#address').text(address);
    });

    $('#sendForm').submit(function(event) {
        event.preventDefault();
        const recipientAddress = $('#recipientAddress').val();
        const amount = parseFloat($('#amount').val());
        sendBitcoin(recipientAddress, amount);
    });
});

function sendBitcoin(toAddress, amount) {
    // Placeholder for transaction logic
    console.log(`Sending ${amount} BTC to ${toAddress}`);
    // In a real implementation, you would construct and broadcast a transaction here
}
