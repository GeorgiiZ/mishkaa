<template>
    <div class="home-main">
        <section class="week-product-section">
            <WeekProduct :product="weekProduct"
                        @onOrderClicked="onOrdered()"/>
        </section>
        <section class="about-section">
            <ReviewSection />
            <img class="about__review-img" src="../assets/review.png"/>      
        </section>
        <section class="contacts-section">
           <ContactsSection/>
        </section>
        <ModalDialog v-show="isModalOpened"
                     @onClosed ="() => isModalOpened = false" 
                     :selectedProduct ="weekProduct"/>
    </div>
</template>


<script>
import WeekProduct from './WeekProductSection.vue';
import weekProduct from '../api/week-product';
import ModalDialog from '../shared/ModalDialog.vue';
import ReviewSection from './ReviewSection.vue';
import ContactsSection from './ContactsSection.vue';



export default {
    name: 'HomePage',
    components: {
        WeekProduct,
        ModalDialog,
        ReviewSection,
        ContactsSection
    },
    data() {
        return{
            weekProduct: weekProduct,
            isModalOpened: false
        }
    },
    methods: {
        onOrdered(){
            this.isModalOpened = true;
        },
    }
}
</script>

<style scoped>

.home-main {
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    padding: 0 100px;
}

.week-product-section {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 100px 0 100px 50px; 
}

.week-product-section::after {
    max-width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    content: url("../assets/zigzaglinedesktopsvg.png");
}

.zigzag-line {
    max-width:100%;
    margin-top: 50px;
}


.about-section {
    position: relative;
    display: flex;
    height: 1000px;
    padding: 50px 0 100px 175px; 
}

.about-section::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: url("../assets/zigzaglinedesktopsvg.png");
}

.about__review-img {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 0;
    margin-bottom: 100px; 
}

.contacts-section {
    display: flex;
    padding: 50px 0 100px 50px;
}


</style>

