<template>
  <div id="app" style="height: 100%;">
    <header>
        <nav class="nav-list">
            <div class="nav-item col-sm-2">
                <router-link class="nav-link" :to="{name: 'Catalog'}" exact>
                    Каталог товаров
                </router-link>
                <div class="nav-item__text-outer">  
                  Новые поступления
                 </div>
            </div>
            <div class="nav-item col-sm-5">
              <router-link class="nav-link" to="/">
                 Вязание на заказ
              </router-link>
              <img  class = "nav__logo" src="./assets/catalog-images/mishkalogodesktopsvg.png"/>
              <div class="nav-item__text-outer">
                 Распродажа
              </div>
            </div>
            <div class="nav-item col-sm-1"> 
               <img class="nav-item__img" src="./assets/catalog-images/searchsvg.png"/>
            </div>
            <div class="nav-item col-sm-4">
              <img class="nav-item__img-cart" src="./assets/catalog-images/cartsvg.png"/>
              <router-link class="nav-link" to="/">
                Корзина: {{cartState}}
              </router-link>
              <div class="nav-item__text-outer--light">
                Бесплатная доставка по России
              </div>
            </div>
        </nav>
    </header>
    <main class="main-content">
      <router-view name="header" style="background-color: #F5F5F5;"></router-view>
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
  display: flex;
  flex-direction: column;
}

nav{
  width: 1150px;
  margin: 0 auto;
  top: 0px;
  display: flex;
}

.nav-item {
  font-weight: bold;
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid gray;
}

.nav-item__text-outer {
  font-size: 14px;
  font-weight: bold;
  position: absolute;
  top: 100px;
  margin: 15px;
  z-index: 1;
}

.nav-item__text-outer--light {
  font-size: 14px;
  font-weight: lighter;
  position: absolute;
  top: 100px;
  margin: 15px;
  z-index: 1;
}


.nav__logo {
  width: 149px;
	height: 72px;
  margin: 0 auto;
}

.nav-item__img {
  margin: 0 auto;
}

.nav-item__img-cart {
  max-height: 25px;
  margin: 0 15px;
}


.nav-link {
  color: inherit;
  text-decoration: none;
  margin: 0 15px;
}

.footer-main {
  position: relative;
  width: 1150px;
  margin-top: auto; 
  margin-left: auto;
  margin-right: auto; 
  padding: 50px;
  display: flex;
  background-color: #F5F5F5;
}

.footer-main__logo {
  display: flex;
  align-items: center;
}


.main-content {
  width: 1150px;
  margin: 0 auto;
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
