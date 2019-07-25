<template>
    <div class = "form-container">
        <form>
            <div class="form-section">
                <p class="info-paragraph">
                    Мы будем рады воплотить в жизнь ваши пожелания! Заполните форму заказа и мы свяжемся с вами, чтобы уточнить детали.
                </p>
            </div>
            <div class="form-section">
                <span class="form-caption">тип</span>
                <div class="selection">
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
            <div class="form-section
                        form-section_highlighted">
                <span class="form-caption">цвет</span>
                <div class="selection">
                    <div v-for="(color, key) in availibleColors" :key="key"> 
                        <label class="controls-label" >
                            <input type="checkbox" :value = "key" v-model="selectedColors">
                            <!-- <img src="../assets/form-images/VectorSmartObjectcop.png"/> -->
                            <span>{{color}}</span> 
                        </label>
                    </div>
                </div>
            </div>
            <div class="form-section">
                <span class="form-caption">фио</span>
                <div>
                    <input type="checkbox" checked id="test_checkbox"/>dddd</input>
                </div>
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
            availibleColors: {
                white: 'Белый',
                grey: 'Серый',
                pink: 'Розовый',
                tiffani: '"Тиффани"',
                orange: 'Оранжевый'
            },
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
    display: flex;
    flex-direction: column;
    font-size: var(--text-size__middle);
}

.info-container {
    margin: 0 auto;
    width: 70%;
}

.info-paragraph {
    font-size: var(--text-size__low);
    font-weight: lighter;
    margin: 0px 135px;
}

.form-caption {
    color:turquoise;
    font-weight: bold;
    text-transform:uppercase;
}

.form-section {
    display: flex;
    margin-top: 50px;
    max-height: 250px;
    padding: 50px 100px;
}

.selection {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

.controls-label {
    margin: 0 0px 35px 100px;
}


.form-section_highlighted {
    background-color: #F5F5F5;
    border-top: solid 2px turquoise;
}

label {
    display: flex;
}

input[type="checkbox"] {
    margin-right: 25px;
}

input[type="checkbox"]::before{
    content: url("../assets/form-images/VectorSmartObjectcop.png");
    margin-right: 15px;
}

</style>

