<template>
    <div class="layout">
        <header>
            <nav>
              <ul class="nav-main">
                <li class="nav-item" style="width: 20%">
                    <router-link class = "nav-item__link" :to ="{name: 'catalog'}" exact >
                        Каталог товаров
                    </router-link>
                    <span class="nav-item__text-outer
                                 nav-item__link">
                        Новые поступления
                    </span>
                </li>
                <li class="nav-item" style="width: 50%">
                    <router-link class = "nav-item__link" :to="{name: 'form'}">
                      Вязание на заказ
                    </router-link>
                    <router-link class = "nav-item__link" to="/">
                        <img src="../assets/mishkalogodesktopsvg.png" alt="mishka-logo"/>
                    </router-link>
                    <span class="nav-item__text-outer
                                 nav-item__link">
                        Распродажа
                    </span>
                </li>
                <li class="nav-item" style="width: 10%"> 
                    <img class="nav-item__search" src="../assets/searchsvgcopy.png" alt="search-button"/>
                </li>
                <li class="nav-item" style="border-right: none; width: 30%">
                    <div class="nav-item__cart">
                    <img class="nav-item__cart-img" src="../assets/cartsvgcopy.png" alt="cart-button"/>
                    <span class="nav-item__cart-text">Корзина: {{basket.length | goodsFilter}}</span>
                    </div>
                    <span class="nav-item__text-outer
                                nav-item_last
                                nav-item__link" style="font-weight: normal;">
                        Бесплатная доставка по России
                    </span>
                </li>
              </ul>
            </nav>
        </header>
        <main class="main-content">
          <router-view name="header" class="main-content__header"></router-view>
          <router-view></router-view>
        </main>
        <footer class="footer-main">
            <div class="footer-main__link">
              <img  src="../assets/logofootersvg.png" alt="foter-logo"/>
            </div>
            <div class="footer-main__social
                        footer-main__link">
              <img class="footer-main__social-img" src="../assets/instasvg.png" alt="insta-link"/>
              <img class="footer-main__social-img" src="../assets/fbsvg.png" alt="facebook-link"/>
              <img class="footer-main__social-img" src="../assets/twittersvg.png" alt="twitter-link"/>
            </div>
            <a class="footer-main__develop
                      footer-main__link" target="_blank" href="https://htmlacademy.ru/intensive/adaptive">
              <span class="footer-main__develop-capture">Разработано</span>
              <img src="../assets/htmlacademysvg.png" alt="htmlacademy-link"/>
            </a>
        </footer>
    </div>
</template>

<script>
export default {
  name: 'Layout',
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

<style scoped>

.layout {
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}


.nav-main {
  padding: 0px;
  display: flex;
  list-style: none;
  margin: 0;
}

.nav-item {
  font-weight: bold;
  font-size: var(--text-size__regular);
  position: relative;
  display: flex;
  align-items: center;
  border-right: 1px solid #F5F5F5;
  border-bottom: 1px solid #F5F5F5;
}

.nav-item_last {
  margin-left: 25px;
  font-weight: lighter;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.nav-item__link{
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 10px 25px;
}

.nav-item__link:hover{
  opacity: 0.6;
}

.nav-item__link:active {
  opacity: 0.4;
}

.nav-item__search {
  opacity: 0.2;
  cursor: pointer;
  margin: 0 auto;
}

.nav-item__search:hover {
  opacity: 1;
}

.nav-item__search:active {
  opacity: 0.3;
}


.nav-item__text-outer {
  font-size: var(--text-size__light);
  font-weight: bold;
  position: absolute;
  top: 80px;
  z-index: 1;
}

.nav-item__cart {
  display: flex;
  align-items: center;
  margin: 0 25px;
  cursor: pointer;
}


.nav-item__cart-img {
  margin-right: 25px;
  opacity: 0.2;
}

.nav-item__cart:hover .nav-item__cart-img {
   opacity: 1;
}

.nav-item__cart:hover .nav-item__cart-text {
   opacity: 0.6;
}

.nav-item__cart:active .nav-item__cart-img {
   opacity: 0.4;
}

.nav-item__cart:active .nav-item__cart-text {
   opacity: 0.4;
}

.main-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.main-content__header {
  background-color: var(--light-grey);
}

.footer-main {
  width: 92%;
  margin: auto 0; 
  padding: 50px;
  display: flex;
  justify-content: space-between;
  background-color: var(--light-grey);
}

.footer-main__link {
  cursor: pointer;
  width: 33%;
}

.footer-main__link:active {
  opacity: 0.5;
}

.footer-main__social {
  display: flex;
  justify-content: center ;
  align-items: center;
}

.footer-main__social-img {
  margin: 0 15px;
  height: 20px;
}

.footer-main__develop {
  display: flex;
  align-items: center;
  justify-content:flex-end;
}

.footer-main__develop-capture {
  font-size: var(--text-size__regular);
  font-weight: bold;
  margin-right: 25px; 
}

</style>