const adidas1Name = document.querySelector(".sweather-name1");
const adidas1Color = document.querySelector(".sweather-color1");
const adidas1Price = document.querySelector(".sweather-price1");
const adidas1Img = document.querySelector(".sweather-img1");
const adidas1Description = document.querySelector(".sweather-description1");
///
const adidas2Name = document.querySelector(".sweather-name2");
const adidas2Color = document.querySelector(".sweather-color2");
const adidas2Price = document.querySelector(".sweather-price2");
const adidas2Img = document.querySelector(".sweather-img2");
const adidas2Description = document.querySelector(".sweather-description2");
///
const adidas3Name = document.querySelector(".sweather-name3");
const adidas3Color = document.querySelector(".sweather-color3");
const adidas3Price = document.querySelector(".sweather-price3");
const adidas3Img = document.querySelector(".sweather-img3");
const adidas3Description = document.querySelector(".sweather-description3");
//////////////////////////////////////////////////////////////
const hugo1Name = document.querySelector(".hugo-name1");
const hugo1Color = document.querySelector(".hugo-color1");
const hugo1Price = document.querySelector(".hugo-price1");
const hugo1Img = document.querySelector(".hugo-img1");
const hugo1Description = document.querySelector(".hugo-description1");
///
const hugo2Name = document.querySelector(".hugo-name2");
const hugo2Color = document.querySelector(".hugo-color2");
const hugo2Price = document.querySelector(".hugo-price2");
const hugo2Img = document.querySelector(".hugo-img2");
const hugo2Description = document.querySelector(".hugo-description2");
///
const hugo3Name = document.querySelector(".hugo-name3");
const hugo3Color = document.querySelector(".hugo-color3");
const hugo3Price = document.querySelector(".hugo-price3");
const hugo3Img = document.querySelector(".hugo-img3");
const hugo3Description = document.querySelector(".hugo-description3");
/////////////////////////////////////////////////////////////////
const tommy1Name = document.querySelector(".tommy-name1");
const tommy1Color = document.querySelector(".tommy-color1");
const tommy1Price = document.querySelector(".tommy-price1");
const tommy1Img = document.querySelector(".tommy-img1");
const tommy1Description = document.querySelector(".tommy-description1");
///
const tommy2Name = document.querySelector(".tommy-name2");
const tommy2Color = document.querySelector(".tommy-color2");
const tommy2Price = document.querySelector(".tommy-price2");
const tommy2Img = document.querySelector(".tommy-img2");
const tommy2Description = document.querySelector(".tommy-description2");
///
const tommy3Name = document.querySelector(".tommy-name3");
const tommy3Color = document.querySelector(".tommy-color3");
const tommy3Price = document.querySelector(".tommy-price3");
const tommy3Img = document.querySelector(".tommy-img3");
const tommy3Description = document.querySelector(".tommy-description3");
///////////////////////////////////////////////////////////////////
let Link;
const adidasLink = `https://mbo-sd.nl/period3-fetch/clothes-sweater-adidas`;
const hugoLink = `https://mbo-sd.nl/period3-fetch/clothes-sweater-hugo-boss`;
const tommyLink = `https://mbo-sd.nl/period3-fetch/clothes-sweater-tommy-hilfiger`;
/////////////////////////////////////////////////////////////////
// fetch and display functions
fetch("https://mbo-sd.nl/period3-fetch/clothes-sweater-adidas").then((credits) => credits.json())
    .then((objData) => {
        let adidas = objData;

        for (let index = 0; index < adidas.length; index++) {
            adidas[index];
            adidas1Img.src = adidas[0].imageUrl;
            adidas1Name.innerHTML = adidas[0].title;
            adidas1Color.innerHTML = "Colour: " +adidas[0].colour;
            adidas1Price.innerHTML = "Price: " + adidas[0].price + ' euro';
            adidas1Description.innerHTML = "Description:" + adidas[0].description;

            adidas2Img.src = adidas[1].imageUrl;
            adidas2Name.innerHTML = adidas[1].title;
            adidas2Color.innerHTML = "Colour: " + adidas[1].colour;
            adidas2Price.innerHTML = "Price: " + adidas[1].price + ' euro';
            adidas2Description.innerHTML = "Description:" + adidas[1].description;

            adidas3Img.src = adidas[2].imageUrl;
            adidas3Name.innerHTML = adidas[2].title;
            adidas3Color.innerHTML = "Colour: " + adidas[2].colour;
            adidas3Price.innerHTML = "Price: " + adidas[2].price + ' euro';
            adidas3Description.innerHTML = "Description:" + adidas[2].description;
        }

    })
/////////////////////////////////////
    fetch("https://mbo-sd.nl/period3-fetch/clothes-sweater-hugo-boss").then((credits) => credits.json())
    .then((objData) => {
        let hugo = objData;

        for (let index = 0; index < hugo.length; index++) {
            hugo[index];
            hugo1Img.src = hugo[0].imageUrl;
            hugo1Name.innerHTML = hugo[0].title;
            hugo1Color.innerHTML = "Colour: " +hugo[0].colour;
            hugo1Price.innerHTML = "Price: " + hugo[0].price + ' euro';
            hugo1Description.innerHTML = "Description:" + hugo[0].description;

            hugo2Img.src = hugo[1].imageUrl;
            hugo2Name.innerHTML = hugo[1].title;
            hugo2Color.innerHTML = "Colour: " + hugo[1].colour;
            hugo2Price.innerHTML = "Price: " + hugo[1].price + ' euro';
            hugo2Description.innerHTML = "Description:" + hugo[1].description;

            hugo3Img.src = hugo[2].imageUrl;
            hugo3Name.innerHTML = hugo[2].title;
            hugo3Color.innerHTML = "Colour: " + hugo[2].colour;
            hugo3Price.innerHTML = "Price: " + hugo[2].price + ' euro';
            hugo3Description.innerHTML = "Description:" + hugo[2].description;
        }

    })
////////////////////////
fetch("https://mbo-sd.nl/period3-fetch/clothes-sweater-tommy-hilfiger").then((credits) => credits.json())
.then((objData) => {
    let tommy = objData;

    for (let index = 0; index < tommy.length; index++) {
        tommy[index];
        tommy1Img.src = tommy[0].imageUrl;
        tommy1Name.innerHTML = tommy[0].title;
        tommy1Color.innerHTML = "Colour: " +tommy[0].colour;
        tommy1Price.innerHTML = "Price: " + tommy[0].price + ' euro';
        tommy1Description.innerHTML = "Description:" + tommy[0].description;

        tommy2Img.src = tommy[1].imageUrl;
        tommy2Name.innerHTML = tommy[1].title;
        tommy2Color.innerHTML = "Colour: " + tommy[1].colour;
        tommy2Price.innerHTML = "Price: " + tommy[1].price + ' euro';
        tommy2Description.innerHTML = "Description:" + tommy[1].description;

        tommy3Img.src = tommy[2].imageUrl;
        tommy3Name.innerHTML = tommy[2].title;
        tommy3Color.innerHTML = "Colour: " + tommy[2].colour;
        tommy3Price.innerHTML = "Price: " + tommy[2].price + ' euro';
        tommy3Description.innerHTML = "Description:" + tommy[2].description;
    }

})
    

