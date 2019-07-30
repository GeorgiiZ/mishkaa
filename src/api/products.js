const images = require.context("../assets/catalog-images/", true, /\.png$/)

const products = [
    {
        src: images("./photo1desktop.png"),
        name: "Зайчик попрыгайчик",
        height: "30",
        weight: "200",
        cost: "1200",
        size:"",
    }, 
    {
        src: images("./photo2desktop.png"),
        name: "Корзинка для белья",
        height: "10",
        diameter: "15",
        cost: "690",
        size:"",
    }, 
    {
        src: images("./photo3desktop.png"),
        name: "Большая корзинка для игрушек",
        height: "30",
        diameter: "30",
        cost: "1500",
        size: "",
    }, 
];

export default products;