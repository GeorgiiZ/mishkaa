<template>
    <div class = "form-container">
        <form>
            <p class="info-paragraph">
                 Мы будем рады воплотить в жизнь ваши пожелания! Заполните форму заказа и мы свяжемся с вами, чтобы уточнить детали.
            </p>
            <div class="kind-selection">
                <span class="form-caption">тип</span>
                <div class="controls-container">
                    <label class="controls-label">
                        <input type="radio" v-model="selectedKind" value="white">
                        Аксессуар для интерьера
                    </label>
                    <label class="controls-label">
                        <input type="radio" v-model="selectedKind" value="black">
                        Детская игрушка
                    </label>
                </div>
            </div>
            <div class="color-selection">
                <span class="form-caption">цвет</span>
                <div class="controls-container">
                     <!-- <div v-for="(color, key) in availibleColors" :key="key">  -->
                        <label class="controls-label" >
                            <input type="checkbox" value = "1" v-model="selectedColors">
                             Черный
                        </label>
                        <label class="controls-label" >
                            <input type="checkbox" value = "2" v-model="selectedColors">
                             Белый
                        </label>
                        <label class="controls-label" >
                            <input type="checkbox" value = "3" v-model="selectedColors">
                            Серый
                        </label>
                    <!-- </div> -->
                    
                </div>
            </div>
            <div class="customer-name">

            </div>
            <div class="customer-contacts">
                
            </div>
            <div class="add-wishes">
                
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'FormPage',
    data(){
        return {
            selectedKind:'',
            selectedColors: [],
            availibleColors: ['Белый', 'Черный', 'Серый', 'Розовый', '"Тиффани"', 'Серый'],
            fullName: {},
            customerNumber:'',
            customerEmail: '',
            addWishes: ''
        }
    }
}
</script>

<style>

.form-container {
    padding: 80px; 
    display: flex;
    flex-direction: column;
}

.info-container {
    margin: 0 auto;
    width: 70%;
}

.info-paragraph {
    font-weight: lighter;
    font-size: 16px;
}

.form-caption {
    color:turquoise;
    font-weight: bold;
    text-transform:uppercase;
    font-size: 16px;
}

.kind-selection {
    display: flex;
    margin-top: 50px;
    max-height: 150px;
}

.color-selection {
    display: flex;
    max-height: 150px;
    margin-top: 50px;
}

.controls-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

.controls-label {
    font-size: 16px;
    margin: 0 0px 35px 100px ;
}

input[type="radio"]{
    display: none;
}

</style>

