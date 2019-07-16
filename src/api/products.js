const images = require.context("./images", true, /\.png$/)

const products = [
    {
        src: images("./photo1desktop.png"),
        name: "Зайчик попрыгайчик",
        parameters: {
            рост: "30 см",
            вес: "200 г"
        },
        cost: "1200 руб."
    }, 
    {
        src: images("./photo2desktop.png"),
        name: "Корзинка для белья",
        parameters: {
            высота: "10 см",
            диаметр: "15 см"
        },
        cost: "690 руб."
    }, 
    {
        src: images("./photo3desktop.png"),
        name: "Большая корзинка для игрушек",
        parameters: {
            высота: "30 см",
            диаметр: "30 см"
        },
        cost: "1500 руб."
    
    }, 
];

export default products;