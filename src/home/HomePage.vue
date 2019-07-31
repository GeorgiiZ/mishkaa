<template>
    <div class="home-main">
        <section class="week-product-content">
            <WeekProduct :product="weekProduct"
                         @onOrderClicked="onOrdered(weekProduct)"></WeekProduct>
        </section>
        <section class="about">
            <div class="about__info">
                <span class="about__info-header">Коротко о нас:</span>
                <ul class="about__info-list">
                    <li class="about__info-item" id="eco-pic">Экологически чистые материалы</li>
                    <li class="about__info-item" id="cash-pic">Скандинавский стиль по российской цене</li>
                    <li class="about__info-item" id="heart-pic">Увеличивает лайки на фотографиях</li>
                    <li class="about__info-item" id="roll-pic">Связано вручную с лбовью и умилением</li>
                    <li class="about__info-item" id="rocket-pic">Поддержка отечественного производителя</li>
                    <li class="about__info-item" id="present-pic">Поставляется в подарочной упаковке</li>
                </ul>
            </div>
            <div class="about__review">
                <div class="about__review-content">
                    <div class="about__review-block">
                        <span class="about__review-header">Отзывы</span>     
                        <button class="about__write-btn">написать</button>
                    </div>
                    <div class="about__review-block">
                        <p> {{curReview.text}} </p>
                    </div>
                    <div class="about__review-block">
                        <div>
                            <div class="about__review-name"> {{ curReview.name }} </div>
                            <div> {{ curReview.email }} </div>
                        </div>
                        <div class="about__swap">
                            <button class="about__swap-btn">&#8592</button>
                            <button class="about__swap-btn">&#8594</button>
                        </div>
                    </div>
                </div>
                <img class="about__review-img" src="../assets/home-images/review.png"/>      
            </div>

        </section>
        <ModalDialog v-show="isModalOpened"
                     @onClosed ="() => isModalOpened = false" 
                     :selectedProduct ="selectedProduct"/>
    </div>
</template>

<script>
import WeekProduct from './WeekProduct.vue';
import weekProduct from '../api/week-product';
import ModalDialog from '../shared/ModalDialog.vue';
import reviews from '../api/reviews';

function getPreviousValidIndex(index, length) {
  const deprecatedIndex = index - 1;
  return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
}

function getNextValidIndex(index, length) {
  const incrementedIndex = index + 1;
  return incrementedIndex > length - 1 ? 0 : incrementedIndex;
}


export default {
    name: 'HomePage',
    components: {
        WeekProduct,
        ModalDialog
    },
    data() {
        return{
            weekProduct: weekProduct,
            isModalOpened: false,
            selectedProduct: {},
            selectedeviewIndx: 0,
            reviews: reviews,
        }
    },
    computed: {
        curReview() {
            return reviews[selectedeviewIndx];
        }
    },
    methods: {
        onOrdered(product){
            this.selectedProduct = product;
            this.isModalOpened = true;
        },
        swapReviewNext(curIndx) {
            this.selectedeviewIndx = getNextValidIndex(
                this.selectedeviewIndx,
                this.reviews.length
            );
        },
    }
}
</script>

<style scoped>

.home-main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.week-product-content {
    position: relative;
    display: flex;
    width: 85%;
    padding: 100px 50px; 
}

.week-product-content::after {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    content: url("../assets/home-images/zigzaglinedesktopsvg_0.png");
}

.about {
    display: flex;
    flex-direction: column;
    width: 85%;
    height: 1200px;
}

.about__info{
    padding: 50px 0 50px 165px;
    height: 50%;
}

.about__info-header {
    font-size: var(--text-size__large);
    font-weight: bold;
}

.about__info-list {
    list-style: none;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    padding: 0;
    height: 100%;
}

.about__info-item {
    position: relative;
    font-weight: bold;
    margin-top: 100px; 
    margin-right: 110px; 
    width: 230px;
    font-size: var(--text-size__regular);
}

#eco-pic::before {
    position: absolute;
    top: -50px;
    left: 10px;
    content: url("../assets/home-images/icon1svg.png");
}

#cash-pic::before{
    position: absolute;
    top: -50px;
    left: 10px;
    content: url("../assets/home-images/icon3svg.png");
}

#heart-pic::before{
    position: absolute;
    top: -50px;
    left: 10px;
    content: url("../assets/home-images/icon5svg.png");
}

#roll-pic::before {
    position: absolute;
    top: -50px;
    left: 10px;
    content: url("../assets/home-images/icon2svg.png");
}

#rocket-pic::before {
    position: absolute;
    top: -50px;
    left: 10px;
    content: url("../assets/home-images/icon4svg.png");
}

#present-pic::before {
    position: absolute;
    top: -50px;
    left: 10px;
    content: url("../assets/home-images/icon6svg.png");
}

.about__review {
    position: relative;
    display: flex;
    padding: 50px 0 50px 165px;
    height: 500px;
}

.about__review-content {
    width: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
}

.about__review-block {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
}

.about__review-header {
    font-weight: bold;
    font-size: var(--text-size__large);
}

.about__write-btn {
    margin-left: auto;
    padding: 10px;

    text-transform: uppercase;
    font-weight: bold;
    background-color: transparent;
    border: none;
}

.about__review-name {
    font-weight: bold;
    margin-bottom: 5px; 
}

.about__swap {
    margin-left: auto; 
}

.about__swap-btn {
    padding: 15px;
    font-size: 60px;
    font-weight: bold;
    background-color: transparent;
    border: none;
    outline: inherit;
}

.about__review-img {
    position: absolute;
    left: 0;
    bottom: 0;
    margin-bottom: 50px;
    z-index: 0;
}

</style>

