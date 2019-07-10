<template>
  <div id="app">
    <header class="container">
        <nav class="nav-top row">
            <div class="nav-block col-sm-3">
              <div class="nav-item">
                Каталог товаров
              </div>
            </div>
            <div class="nav-block col-sm-5">
              <div style="justify-content: space-between;">
                  <div class="nav-item">                  
                    Вязание на заказ
                  </div>
                  <div class="nav-item">
                    <img  class = "nav-top-logo" src="./assets/catalog-images/mishkalogodesktopsvg.png"/>
                  </div>
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
            </div>
        </nav>
    </header>
    <div class="container">
      <div class="row">
       <router-view></router-view>
      </div>
    </div>
    <footer class="container">
        <nav class = "nav-bottom">
          <ul>
            <li class = "nav-item">
              <img id ="logo-bottom" src="./assets/catalog-images/logofootersvg.png"/>
            </li>
          </ul>
        </nav>
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
  #app{
    font-family: sans-serif;
  }
</style>

<style scoped>

.nav-top {
  font-size: 18px;
  display: flex;
}

.nav-block {
  padding: 10px 5px;
  font-weight: bold;
  display: flex;
  justify-content: space-around;
  border: 1px solid gray;
}

.nav-item {
  margin: 15px;
  display: inline;
}

.nav-top-logo {
  max-height: 6rem;
  margin-left: auto;
}

.nav-item-img {
  max-height: 25px;
}

.cart {
  margin-right: auto;
}

.nav-bottom {
  border: 1px groove greenyellow;
  background-color: #bbb;
}

.nav-bottom ul {
  list-style: none;
}

.content {
    display: flex;
    margin:  10px auto 0 auto;
}


</style>
