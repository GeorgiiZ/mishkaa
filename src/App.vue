<template>
  <div id="app">
    <header class="container">
        <nav class="nav-top">
            <div class="nav-block col-sm-3">
                Каталог товаров
            </div>
            <div class="nav-block col-sm-5">
                <div class="row">
                  <div class='col-sm-6'>                  
                    Вязание на заказ
                  </div>
                  <div class="col-sm-6">
                    <img class = "nav-top-logo" src="./assets/catalog-images/mishkalogodesktopsvg.png"/>
                  </div>
                </div>
            </div>
            <div class="nav-block col-sm-1"> 
              <img class="nav-item-img" src="./assets/catalog-images/searchsvg.png"/>
            </div>
            <div class="nav-block col-sm-3">
              <img class="nav-item-img" src="./assets/catalog-images/cartsvg.png"/>
            </div>
        </nav>
    </header>
    <div class="content">
      <router-view></router-view>
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
      cartLenth: 'пока пуста',
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
  padding: 20px 10px;
  font-weight: bold;
  display: flex;
  border: 1px solid gray;
}

.nav-top-logo {
  position: absolute;
  top: -15px;
  margin: 0px auto 0px auto;
  max-height: 6rem;
}

.nav-item-img {
  max-height: 25px;
  margin: 0% auto;
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
