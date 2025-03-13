document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      name: "My First Fire",
      image:
        "https://s3-alpha-sig.figma.com/img/5c7b/e56f/906ee0f61136a050e1e5e79ed5fb0c31?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pRvwDknoVHXDCHPfPAx9O9QXl9t6O884n8liqn7fu5bsnPH8B6DC4-y1EQhWHPeRj7a7SdtTYiOtnGlnOnkR1vhrAfPgywfeViEFLeV3OedSk45wjqeltXfFpPs0kt2kKX418x5qUG853jMZP2ovZ85wV6jLNFZG2kruCGjoJ0BHj7zv71nVHRcCvWOdQGWFNZNMI2~ux7o~pOO-F1sX8mzH~plQc82C-ntSoMVaigCGvsfFyRuX6pP12oDamgvxZBOQa0JfskrSdfug5QKz4EcinDBDgJGXCH-vM9ac80gdB63f1R8L1a3fRuGaGo1z-FXfgblA8KKqgjpThMf1oA__",
    },
    {
      name: "Handy Hand",
      image:
        "https://s3-alpha-sig.figma.com/img/554c/b28d/412e76012baef2e2e5bd2e6668605662?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qkFv7ieNFpVz~XbxnsE8b~7RqsyfP1JxgVKvkLGO1LzpknT7q8nQsPZ5WUvDMBXur~V90objiwsiwZGOvPPZ3UJcVsvX8H4z34R8mT~C6XoJi3KgO3JfSZxXK93z0p~Ib9nHY2~gl5pZXlySFj-LrwpTUEdsznt~9JE1brvW3fUBFrmf99JlfGcpJcH-Gl1HnXcdzgjlHUCxVD8hxm~IFjt5vH4VSI~ythC0iLknF77dalAB-QUJWKKrHbfxCB8ltvkN6qghnXzrMCWYRtRGjoNISZBJh6ke2hmPNtdEfEs2AYebst8qwSPv998atAq-ETOANmiWNI9IaGV1fajiqA__",
    },
    {
      name: "NapSack",
      image:
        "https://s3-alpha-sig.figma.com/img/5141/42e4/077559592476b447ca9c5469a05bbe0c?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FYT9HQtfsR330r4zyunFHw70ar24pCDT~VrF-QMw4ukkyrWRsYSsPJ~npb9pO3PT-1PwsPPhZ3QNQsMbtabKUSEsK9ELzzDpQAwVtomDAgZDrOuGx4Tn4YltyOGTzAOEfXkIZEtOtj65kqqNiW893DOGMFCSJSorcLhwdi-oeWkdf8nvEHCx~QJIX~-HcF02Ashx9iZ25yVLIqDfx0t6xnVnV~ZZgsS4aXuZG3nyrY5a~3A5raYff0A3zfAmfeJpQlh9e5EuTyE6ygdmnrpGCTa360~9fFzyhizQoDNLnrOiIV~SyuwxE7oUXCGoWXsx0PyRx0zrlT-iDY7l3-0GAg__",
    },
    {
      name: "Hot Tub Wildlife Feeder",
      image:
        "https://s3-alpha-sig.figma.com/img/54d9/5161/fb3abb2a548b316fc1bbe673efed640c?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pzrsGVQhKxFG3HRx9ZAviv5S-3H64Fv0j~hC14qrL4~4xNRr-xvFTXEVh3kYPaapIZip9ano6K2H4JAd0Eoq1lRitCc7VltclbDwf3bkDelMyePOXP1QqaBXuvuPLuVHNUIXqwSBmhH~R7DhLEgqaj9u0v4viE79X5-2Rlv-AYLQSGYQyrraC1-Oc9CUyWQFaXOatjcDVSK-y6NQaeCePq~uJ7vvlPr9GbWxWlKw~peeEu2FMgqv3UJdvTlZlJdLehnzNgjv91SmBVXSw9WOEDU~9SjYuV97JMTt-W-vzNOnNAUS2xclyvMPPAVyeqnbyXjXFjbXQaoqeyxwjRVHdQ__",
    },
    {
      name: "Toilet Meadow",
      image:
        "https://s3-alpha-sig.figma.com/img/ff87/7ddf/bbc11b9218f6f4deb970afcfb99b82fc?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZpbkCYs8lv4MV2TFHAlxvDcU7Ot88QzEno9MzIqhvaR~nW6ATpVes8HlF4ewG5r9LLU4ND3uFlnryl9-hI47B-B-KnGP2~3xvoSFRH69REV~905m4H-tGKqbCBrC-FmWRLq8-wXwkJGwLA7RhJzl5PXMgVVh2l98kAuI3mLkrTnuW2mUZR497AvHIEMQ2o8BtVSIxdULvMqoHLsdr6m8tTbfavHjPJoYbofHZCU~pRHdIWBLT6zh0-xBEqZflzzbukD-kPyDhQQeaQWt81RsjwbNUmK~BUykanTC-RH0TCZfB-~uxuSqLIOOkp0ECsBn0v0hMLDqSo9i-913YVlE1A__",
    },
    {
      name: "Pudding Pouch",
      image:
        "https://s3-alpha-sig.figma.com/img/2900/e791/fe3709d4a30f95ef45037f380f9a470e?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rgKExjh3mfuTWRO4X4RmEj-AbtKdFmcLwJEzMGNTJf-wcIs-qNi~LmtR~eO-oQj-VKkYl178tXhIImwAAn0aHhuaaHWPuJR2HyiWqWb6Znfc5XlIXgCfD44vihnNigit3Ia0iiQ7YN-NPNFg4GsPzw6dk9OF625FB34Vq559XoLruk4BIARl86aRxnayUPjAC5rxfhtwG4z6dtOIoEncajT9ScrWAbOWRYrPVJaUyxj6VOcgJpU1Rx187SZY7MeKHLTj~l3n95NolmfpeWG7VyvRsmx-FdAaXCrZ9YphxXJVuq1EJDDkEJBDYEVvfEx0RYNp7y~uYUNSikFV4q3NbA__",
    },
  ];

  const container = document.getElementById("product-container");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;

    const title = document.createElement("p");
    title.textContent = product.name;

    productDiv.appendChild(img);
    productDiv.appendChild(title);
    container.appendChild(productDiv);
  });
});
