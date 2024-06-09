console.log("joki");

const containerDisp = document.querySelector(".wrapper");

fetch("http://localhost:3000/hugo-shirts").then(data => data.json())
    .then(myJsonData => showCards(myJsonData));


function showCards(shoes) {
    console.log(shoes);
    let htmlCode = '';
    for (let i = 0; i < shoes.length; i++) {
        const shoe = shoes[i];
        htmlCode += createCard(shoe);
    }
    containerDisp.innerHTML += htmlCode;
}

function createCard(shoe) {
    let htmlCodes = `
    <div class="cards">
    <img src="${shoe.imageUrl}">
   <h3>${shoe.title}</h3>
   <h3>${shoe.colour}</h3>
   <h3> € ${shoe.price}</h3>
   <h3>${shoe.description}</h3>
</div>
    `;

    return htmlCodes;
};
