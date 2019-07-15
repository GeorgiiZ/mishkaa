<template>
  <div id="app" style="height: 100%;">
    <header>
        <nav>
            <div class="nav-block col-sm-3">
                  <div class="nav-item">  
                    Каталог товаров
                  </div>
                  <div class="nav-item-absolute">  
                    Новые поступления
                  </div>
            </div>
            <div class="nav-block col-sm-5">
              <div>
                  <div class="nav-item" style="display: inline;">                  
                    Вязание на заказ
                  </div>
                  <div class="nav-item" style="display: inline;"> 
                      <img  class = "nav-top-logo" src="./assets/catalog-images/mishkalogodesktopsvg.png"/>
                  </div> 
              </div>
              <div class="nav-item-absolute">
                Распродажа
              </div>
            </div>
            <div class="nav-block col-sm-1"> 
              <div class="nav-item"> 
                <img class="nav-item-img" src="./assets/catalog-images/searchsvg.png"/>
              </div>
            </div>
            <div class="nav-block col-sm-3">
              <div class="nav-item">
                <img class="nav-item-img" src="./assets/catalog-images/cartsvg.png"/>
              </div>
              <div class="nav-item">
                Корзина: {{cartState}}
              </div>
              <div class="nav-item-absolute">
                Бесплатная доставка по России
              </div>
            </div>
        </nav>
    </header>
    <main style="background-color: #bbb;" class="main-content">
      <router-view   name="header"></router-view>
      <router-view></router-view>
    </main>
    <footer class="container">
      <div class="row">
          <ul>
            <li class = "nav-item">
              <img id ="logo-bottom" src="./assets/catalog-images/logofootersvg.png"/>
            </li>
          </ul>
      </div>
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
    height: 10000px;
}

#app {
  display: flex;
  flex-direction: column;
}

nav {
  display: flex;
  top: 0px;
}

.nav-block {
  padding: 10px 5px;
  font-weight: bold;
  display: flex;
  position: relative;
  border: 1px solid gray;
}

.nav-item {
  font-size: 16px;
  margin: 15px;
}

.nav-item-absolute {
  font-size: 14px;
  margin: 15px;
  position: absolute;
  top: 80px;
  z-index: 1;
}

.nav-top-logo {
  max-height: 6rem;
  margin-left: auto;
}

.nav-item-img {
  max-height: 25px;
}

footer {
  margin-top: auto;
}

footer ul {
  list-style: none;
}

header {
  width: 1150px;
  margin: 0 auto;
}

.main-content {
  width: 1150px;
  margin: 0 auto;
}

</style>
