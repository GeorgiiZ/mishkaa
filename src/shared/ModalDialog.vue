<template>
     <div class="modal-window">
            <article class="modal-window__content">
                <span class="modal-window__close" @click="windowClosed()">&times;</span>
                <span class="modal-window__header">добавить в корзину</span>
                <p class="modal-window__paragraph">Выберите размер:</p>
                <div class="modal-window__selection" @change="saveToBasket()">
                    <label class="modal-window__selection-item">
                        <input type="radio"  value="S" v-model="productSize" class="custom-radio"> S
                    </label>
                    <label class="modal-window__selection-item">
                        <input type="radio"  value="M" v-model="productSize" class="custom-radio"> M
                    </label>
                    <label class="modal-window__selection-item">
                        <input type="radio"  value="L" v-model="productSize" class="custom-radio"> L
                    </label>
                </div>
            </article>
        </div>
</template>

<script>
export default {
    name: "ModalDialog",
    props: {
        selectedProduct: {
            type: Object,
        },
    },
    data(){
        return {
            productSize: null,
        }
    },
    methods: {
        saveToBasket() {
            const product = this.selectedProduct;
            const size = this.productSize;
            this.$store.commit('addProductToBasket', Object.assign( {}, product, {size} ));
            this.productSize = null;
            this.windowClosed();
        },
        windowClosed() {
            this.$emit('windowClosed');
        }
    }
}
</script>

<style>

.modal-window {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    z-index: 2;
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

.modal-window__content {
    position: relative;
    padding: 30px;
    text-align: center;
    height: 300px;
    width: 500px;
    background-color: white;
}

.modal-window__header {
    display: inline-block;
    text-transform: uppercase;
    font-size: 2.5rem;
    margin-top: 25px;
    font-weight: bold;
}

.modal-window__paragraph {
    font-size: 1.5rem;
    margin-top: 25px;
}


.modal-window__selection {
    margin-top: 35px;
}

.modal-window__selection-item {
    display: inline-block;
    margin: 0 30px;
    font-size: var(--text-size__regular);
    font-weight: bold;
}

.modal-window__selection-item:hover {
    cursor: pointer;
}

.modal-window__close {
  position: absolute;
  right: 0;
  top: 0;
  color: #aaaaaa;
  font-size: 28px;
  font-weight: bold;
  margin: 20px  25px;
}

.modal-window__close:hover {
  text-decoration: none;
  cursor: pointer;
}

.custom-radio {
    display: none
}

</style>


