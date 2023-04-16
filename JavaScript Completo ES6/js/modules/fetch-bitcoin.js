// // alternativa:
// export default function initFetchBitcoin() {
//   fetch("https://blockchain.info/ticker")
//     .then((response) => response.json())
//     .then((bitcoin) => {
//       const btcPreco = document.querySelector(".btc-preco");
//       btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
//     })
//     .catch((erro) => {
//       console.log(Error(erro));
//     });
// }

export default function initFetchBitcoin() {
  async function fetchBitcoin(url) {
    try {
      const btcResponse = await fetch(url);
      const btcJSON = await btcResponse.json();
      const btcPreco = document.querySelector(".btc-preco");
      btcPreco.innerText = (1000 / btcJSON.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchBitcoin("https://blockchain.info/ticker");
}
