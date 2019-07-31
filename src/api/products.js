const images = require.context("../assets/catalog-images/", true, /\.png$/)

const products = [
    {
        src: images("./photo1desktop.png"),
        name: "Зайчик попрыгайчик",
        cost: "1200",
        parameters: {
            height: "30",
            weight: "200",
        }        
    }, 
    {
        src: images("./photo2desktop.png"),
        name: "Корзинка для белья",
        cost: "690",
        parameters: {
            height: "10",
            diameter: "15",
        }
    }, 
    {
        src: images("./photo3desktop.png"),
        name: "Большая корзинка для игрушек",
        cost: "1500",
        parameters: {
            height: "30",
            diameter: "30",
        }
        
    }, 
];

export default products;