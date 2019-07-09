<template>
  <div id="app">

    <header>
      <div class="nav-top">
        <nav>
          <ul>
            <li class="nav-item">
              Каталог товаров
            </li>
            <li class="nav-item">
              Вязание на заказ
            </li>
            <li class="nav-item logo">
              <img id ="logo-top" style="position: absolute" src="./assets/catalog-images/mishkalogodesktopsvg.png"/>
            </li>
            <li class="nav-item cart">
              Корзина : {{cartLenth}}
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <footer>
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

.nav-top {
  border: 1px groove greenyellow;
}

.nav-item logo {
  position: relative;
}

.nav-bottom {
  border: 1px groove greenyellow;
}

#logo-top {
  position: absolute;
  top: 5px;
  right: -20px;
  max-height: 3rem;
}

.nav-top ul {
  display: flex;
  padding: 10px;
  margin: 10px;
}

.nav-bottom{
  background-color: #bbb;
}

.nav-item{
  display: inline-block;
  padding: 10px 10px;
  margin: 10px;
  border: 1px groove #bbb;
}

</style>
