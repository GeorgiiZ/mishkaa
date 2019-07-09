<template>
  <div id="app">
    <header class="container">
      <div class="nav-top">
        <nav>
          <ul>
            <li class="nav-item">
              Каталог товаров
            </li>
            <li class="nav-item">
              Вязание на заказ
            </li>
            <li class="nav-item logo text-center">
              <img id ="logo-top" style="position: absolute" src="./assets/catalog-images/mishkalogodesktopsvg.png"/>
            </li>
            <li class="nav-item cart">
              Корзина : {{cartLenth}}
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <footer class="container">
      <div class = "nav-bottom">
        <nav>
          <ul>
            <li class = "nav-item">
              <img id ="logo-bottom" src="./assets/catalog-images/logofootersvg.png"/>
            </li>
          </ul>
        </nav>
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

ul {
  padding: 3px;
  display: flex;
  border-bottom: 1px solid #bbb;
}

li {
  border-right: 1px solid #bbb;
}
.nav-top {
  position: relative;
}

.nav-item{
  display: flex; 
  padding: 10px 10px;
}

.nav-item.logo {
  position: relative;
}

#logo-top {
  position: absolute;
  top: 5px;
  right: -20px;
  max-height: 2rem;
}

.cart{
  position: absolute;
  right: 1px;
  float: left;
}

.nav-bottom {
  border: 1px groove greenyellow;
  background-color: #bbb;
}
</style>
