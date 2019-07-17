<template>
  <div id="app">
    <header>
        <nav>
            <ul class="nav-main">
              <li class="nav-item col-sm-2">
                  <router-link class="nav-link" :to="{name: 'Catalog'}" exact>
                      Каталог товаров
                  </router-link>
                  <div class="nav-item__text-outer">  
                    Новые поступления
                  </div>
              </li>
              <li class="nav-item col-sm-6">
                <router-link class="nav-link" to="">
                  Вязание на заказ
                </router-link>
                <router-link class = "nav-item_centered" to="/">
                  <img src="./assets/catalog-images/mishkalogodesktopsvg.png"/>
                </router-link>
                <div class="nav-item__text-outer">
                  Распродажа
                </div>
              </li>
              <li class="nav-item col-sm-1"> 
                <img class="nav-item_centered" src="./assets/catalog-images/searchsvg.png"/>
              </li>
              <li class="nav-item col-sm-3" style="border-right: none;">
                <img class="nav-item__img-cart" src="./assets/catalog-images/cartsvg.png"/>
                <router-link class="nav-link" to="/">
                  Корзина: {{cartState}}
                </router-link>
                <div class="nav-item__text-outer" style="font-weight: lighter;">
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
        <section class="footer-main__develop">
          <span class="footer-main__develop-capture">Разработано</span>
          <img src="./assets/catalog-images/htmlacademysvg.png"/>
        </section>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data(){
    return { 
      logoTop: '',
      logoBottom: '',
      cartState: 'пока пуста',
    };
  },
  computed: {

  }
}
</script>

<style>

body, #app {
    background-color: white;
}

#app {
  font-family: Open, sans;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.nav-main {
  width: 1150px;
  margin: 0 auto;
  padding: 0px;
  display: flex;
  list-style: none;
}

.nav-item {
  font-weight: bold;
  font-size: 16px;
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-right: 1px solid #F5F5F5;
  border-bottom: 1px solid #F5F5F5;
}

.nav-link {
  display: inline-block;
  text-decoration: none;
  color: inherit;
  margin: 0 30px;
}

.nav-item__text-outer {
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  top: 100px;
  margin: 30px;
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
  background-color: #F5F5F5;
}

.footer-main {
  position: relative;
  width: 1150px;
  margin-top: auto; 
  margin-left: auto;
  margin-right: auto; 
  padding: 30px;
  display: flex;
  background-color: #F5F5F5;
}

.footer-main__logo {
  display: flex;
  align-items: center;
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
  font-size: 20px;
  font-weight: bold;
  margin-right: 20px; 
}

</style>
