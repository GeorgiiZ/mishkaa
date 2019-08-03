<template>
    <div class="about">
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
                <div class="about__review-block">
                    <span class="about__review-header">Отзывы</span>     
                    <button class="about__write-btn">написать</button>
                </div>
                <div class="about__review-block">
                    <p> {{ curReview.text }} </p>
                </div>
                <div class="about__review-block
                            about__review-block_bottom">
                    <div>
                        <div class="about__review-name"> {{ curReview.name }} </div>
                        <div> {{ curReview.email }} </div>
                    </div>
                    <div class="about__swap">
                         <button class="about__swap-btn" @click="swapReviewPrev()">
                             <img src="../assets/home-images/hugearrowleftsvg.png"/>
                         </button>
                         <button type="image" class="about__swap-btn" @click="swapReviewNext()">
                             <img src="../assets/home-images/hugearrowrightsvg.png"/>
                         </button>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>

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
    name: "ReviewSection",
    data(){
        return {
            selectedeviewIndx: 0,
            reviews: reviews,
        }
    },
    computed: {
        curReview() {
            return reviews[this.selectedeviewIndx];
        }
    },
    methods: {
        swapReviewNext() {
            this.selectedeviewIndx = getNextValidIndex(
                this.selectedeviewIndx,
                this.reviews.length
            );
        },
        swapReviewPrev() {
            this.selectedeviewIndx = getPreviousValidIndex (
                this.selectedeviewIndx,
                this.reviews.length
            )
        }
    }
}
</script>

<style scoped>

.about {
    display: flex;
    flex-direction: column;
    width: 100%;
}


.about__info{
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
    margin: 0;
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
    display: flex;
    flex-direction: column;
    z-index: 1;
    margin-top: auto; 
    min-height: 450px;
    padding-top: 80px; 
    width: 100%;
    height: 40%;
}

.about__review-block {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
}

.about__review-block_bottom {
    margin-top: auto; 
}

.about__review-header {
    font-weight: bold;
    font-size: var(--text-size__large);
}

.about__write-btn {
    margin-left: auto;
    padding: 10px;
    text-transform: uppercase;
    outline: inherit;
    cursor: pointer;
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
    background-color: transparent;
    border: none;
    outline: inherit;
    margin-left: 25px; 
    cursor: pointer;
}

.about__swap-btn:hover {
    opacity: 0.5;
}

.about__swap-btn:active {
    opacity: 0.3;
}



</style>
