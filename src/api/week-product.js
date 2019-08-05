const images = require.context("../assets/", true, /\.png$/)

const weekProduct = {
    name: 'Вязанные корзинки',
    description: 'Экологически чистая пряжа ручная работа. Доступны в шести расцветках и трех размерах',
    src: images('./triplesetdesktop.png'),
    cost: 990,
    parameters : {
        color: '"Тиффани"/серый',
        diameter: 25,
        height: 15,
    },
};

export default weekProduct;
