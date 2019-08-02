<template>
  <div id="app">
    <header>
        <nav>
            <ul class="nav-main">
              <li class="nav-item col-sm-2">
                  <router-link class = "nav-item__link 
                                        nav-item_indent"
                              :to ="{name: 'Catalog'}" exact >
                      Каталог товаров
                  </router-link>
                  <div class="nav-item__text-outer 
                              nav-item_indent">  
                    Новые поступления
                  </div>
              </li>
              <li class="nav-item col-sm-6">
                <router-link class = "nav-item__link 
                                      nav-item_indent" 
                            :to="{name: 'Form'}">
                  Вязание на заказ
                </router-link>
                <router-link class = "nav-item_centered" 
                             to="/">
                  <img src="./assets/catalog-images/mishkalogodesktopsvg.png"/>
                </router-link>
                <div class="nav-item__text-outer
                            nav-item_indent">
                  Распродажа
                </div>
              </li>
              <li class="nav-item col-sm-1"> 
                <img class="nav-item_centered" 
                     src="./assets/catalog-images/searchsvg.png"/>
              </li>
              <li class="nav-item col-sm-3" style="border-right: none;">
                <img class="nav-item__img-cart" src="./assets/catalog-images/cartsvg.png"/>
                <router-link  to="/" class="nav-item__link 
                                            nav-item_indent">
                  Корзина: {{basket.length | goodsFilter}}
                </router-link>
                <div class="nav-item__text-outer
                            nav-item_last">
                  Бесплатная доставка по России
                </div>
              </li>
            </ul>
        </nav>
    </header>
    <main class="main-content">
      <router-view name="header" class="main-content__header"></router-view>
      <router-view></router-view>
    </main>
    <footer class="footer-main">
        <div class="footer-main__logo">
          <img  src="./assets/catalog-images/logofootersvg.png"/>
        </div>
        <div class="footer-main__social-links">
          <img class="footer-main__social-img" src="./assets/catalog-images/instasvg.png"/>
          <img class="footer-main__social-img" src="./assets/catalog-images/fbsvg.png"/>
          <img class="footer-main__social-img" src="./assets/catalog-images/twittersvg.png"/>
        </div>
        <a class="footer-main__develop" target="_blank" href="https://htmlacademy.ru/intensive/adaptive">
          <span class="footer-main__develop-capture">Разработано</span>
          <img src="./assets/catalog-images/htmlacademysvg.png"/>
        </a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  computed: {
    basket(){
      return this.$store.state.basket;
    }
  },
  filters: {
    goodsFilter(amount) {
      var captions =  [
        'корзина пуста', 
        `${amount} товар`, 
        `${amount} товара`, 
        `${amount} товара`, 
        `${amount} товара`,
        `${amount} товаров`];
      const idx = Math.min(amount, captions.length-1);
      return captions[idx];
    }
  }
}
</script>

<style>

body, #app {
    background-color: white;
}

@font-face {
  font-family: 'Open_Sans';
  src: url(fonts/Open-Sans/OpenSans-Regular.ttf);
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Open_Sans';
  src: url(fonts/Open-Sans/OpenSans-Bold.ttf);
  font-weight: bold;
  font-style: normal;
}

#app {
  --text-size__large: 50px;
  --text-size__regular: 16px;
  --text-size__light: 14px;
  --line-height__paragraph: 200%;
  --light-grey: #F5F5F5;
  font-family: Open_Sans;
  line-height: 150%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

p {
  line-height: var(--line-height__paragraph);
  font-size: var(--text-size__light);
}

</style>

<style scoped>

.nav-main {
  width: 1150px;
  margin: 0 auto;
  padding: 0px;
  display: flex;
  list-style: none;
}

.nav-item {
  font-weight: bold;
  font-size: var(--text-size__regular);
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-right: 1px solid #F5F5F5;
  border-bottom: 1px solid #F5F5F5;
}

.nav-item_indent {
  margin-left:  50px;
  margin-right: 10px;
}

.nav-item_last {
  margin-left: 25px;
}

.nav-item__link, a {
  text-decoration: none;
  color: inherit;
}

.nav-item__text-outer {
  font-size: var(--text-size__light);
  font-weight: bold;
  position: absolute;
  top: 100px;
  z-index: 1;
}

.nav-item_centered {
  margin: 0 auto;
}

.nav-item__img-cart {
  max-height: 25px;
  margin: 0 25px;
}

.main-content {
  width: 1150px;
  margin: 0 auto;
}

.main-content__header {
  background-color: var(--light-grey);
}

.footer-main {
  width: 1150px;
  margin: auto auto 0 auto; 
  padding: 50px;
  display: flex;
  background-color: var(--light-grey);
}


.footer-main__social-links {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
}

.footer-main__social-img {
  margin: 0 15px;
  height: 20px;
}

.footer-main__develop {
  display: inline-block;
}

.footer-main__develop-capture {
  font-size: var(--text-size__regular);
  font-weight: bold;
  margin-right: 25px; 
}

</style>
