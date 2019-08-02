<template>
    <div class = "form-container">
        <form method="GET" action="#">
            <div class="form-section">
                <p class="initial-info">
                    Мы будем рады воплотить в жизнь ваши пожелания! Заполните форму заказа и мы свяжемся с вами, чтобы уточнить детали.
                </p>
            </div>
            <div class="form-section">
                <span class="form-section__caption">тип</span>
                <div class="controls">
                    <label class="controls__item">
                        <input type="radio" name="selectedKind" v-model="selectedKind" value="toy" required>
                        <span class="controls__item_indent">Аксессуар для интерьера</span>
                    </label>
                    <label class="controls__item">
                        <input type="radio" name="selectedKind" v-model="selectedKind" value="accessory" required>
                        <span class="controls__item_indent">Детская игрушка</span>
                    </label>
                </div>
            </div>
            <div class="form-section
                        form-section_highlighted
                        form-section_height-limited">
                <span class="form-section__caption">цвет</span>
                <div class="controls
                            controls_wraped">
                    <div v-for="(color, key) in availibleColors" :key="key" class="controls__item" > 
                        <label>
                            <input type="checkbox" name="selectedColor"  :value = "key" v-model="selectedColors"> 
                            <span class="controls__item_indent">{{color | capitalize}}</span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="form-section">
                <span class="form-section__caption">фио</span>
                <div class="controls">
                    <div class="controls__item">
                        <label  for="fistName">Имя:</label>
                        <input type="text" id="fistName" name="fistName" class="form-input controls__item_indent"
                               v-model.trim="fullName.fistName" placeholder="Введите ваше имя*" autocomplete="off" required/>
                    </div>
                    <div class="controls__item">
                        <label for="lastName">Фамилия:</label>
                        <input type="text" id="lastName" name="lastName" class="form-input controls__item_indent"
                               v-model.trim="fullName.lastName" placeholder="Укажите фамилию*" autocomplete="off" required/>
                    </div>
                    <div class="controls__item">
                        <label  for="fatherName">Отчество:</label>
                        <input type="text" id="fatherName" name="fatherName" class="form-input controls__item_indent"
                               v-model.trim="fullName.fatherName" placeholder="Отчество если желаете*" autocomplete="off" required/>
                    </div>
                </div>
            </div>
            <div class="form-section 
                        form-section_column
                        form-section_highlighted">
                <div class="controls_inline" id="phoneNumberContainer" >
                    <label class="form-section__caption" for="phoneNumber">тел</label>
                    <input type="tel" id="phoneNumber" name="phoneNumber" class="form-input form-input_large"
                           v-model.trim="phoneNumber" placeholder="+7 XXX-XXX-XXXX" autocomplete="off" required/>
                </div>
                <div class="controls_inline" id="emailContainer">
                    <label class="form-section__caption" for="email">E-mail</label>
                    <input type="email" id="email" name="email" class="form-input form-input_large"
                           v-model.trim="email" placeholder="Ваш Email*" autocomplete="off" required/>
                </div>
            </div>
            <div class="form-section
                        form-section_add-wishes">
                <label class="form-section__caption" for="addWishes">доп</label>
                <div class="controls">
                    <textarea name="email"
                              v-model.trim="addWishes"
                              class="form-input 
                                     form-input_textarea 
                                     controls__item " 
                              placeholder="Опишите ваши пожелания к заказу*" required/>
                    <div class="make-order controls__item">
                        <button type="submit" 
                            class="make-order__btn"
                            @click="sendOrder()">отправить заказ</button>
                        <p class="make-order__paragraph">*Поля обязательны для заполнения</p>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'FormPage',
    data(){ 
        return {
            selectedKind:'toy',
            selectedColors: [],
            availibleColors: {
                white: 'белый',
                grey: 'cерый',
                pink: 'розовый',
                tiffani: '"Тиффани"',
                orange: 'оранжевый',
                black: 'Черный'
            },
            fullName: {
                fistName:'',
                lastName:'',
                fatherName: ''
            },
            phoneNumber:'',
            email: '',
            addWishes: ''
        }
    },
    methods: {
        sendOrder() {

        }
    }
}
</script>

<style>

.form-container {
    display: flex;
    flex-direction: column;
    font-size: var(--text-size__light);
}

.form-section {
    display: flex;
    padding: 50px 100px 0 100px;
}

.form-section_highlighted {
    background-color: #F5F5F5;
    border-top: solid 2px turquoise;
}

.form-section_height-limited {
    max-height: 210px;
}

.form-section_column {
    flex-direction: column;
}

.form-section_add-wishes {
    min-height: 300px;
}



.form-section__caption {
    color:turquoise;
    font-weight: bold;
    text-transform:uppercase;
    font-size: var(--text-size__regular);
}

.initial-info {
    font-size: var(--text-size__light);
    font-weight: lighter;
    margin: 30px 135px 0 135px;
}

.controls {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.controls_wraped {
    flex-wrap: wrap;
}

.controls_inline {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 50px;
}

.controls__item {
    position: relative;
    margin: 0 0px 50px 100px;
    font-size: var(--text-size__regular);
}

.controls__item_indent {
    margin-left: 50px; 
}

.controls__item_indent-absolute {
    position: absolute;
    top: 0px;
    right: 0px;
}


.form-input {
    border : none;
    padding-left: 15px; 
    text-overflow: ellipsis;
}

.form-input_large {
    position: relative;
    height:5rem;
    min-width: 70%;
    margin-left: auto; 
    margin-right: 150px;
}


#phoneNumberContainer::after{
    position: absolute;
    right: 170px;
    content: url("../assets/form-images/phonesvg.png");
}

#emailContainer::after {
    position: absolute;
    right: 170px;
    content: url("../assets/form-images/mailsvg.png");
}

.form-input_textarea {
    width: 100%; 
    height : 30%;
    resize: none;
}

.form-input:focus{
    outline: none;
}

.make-order {
    display: flex;
    align-items: center;
    width: 100%;
}

.make-order__btn{
    padding: 15px;
    max-width: 200px;
    text-transform: uppercase;
    font-weight: bold;
    outline: inherit;
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.make-order__paragraph {
    margin-left: auto;
    margin-right: 250px;
}

input[type="checkbox"], input[type="radio"] {
    display: none;
}

:checked + span:before  {
    content: url("../assets/form-images/VectorSmartObjectcop.png");
    position: absolute;
    top: 0;
    left: 0;
}

</style>

