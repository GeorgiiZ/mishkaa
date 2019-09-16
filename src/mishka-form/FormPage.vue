<template>
    <div class = "form-container">
        <form method="GET" action="#">
            <div  class="initial-info">
                <span class="initial-info__paragraph" >Мы будем рады воплотить в жизнь ваши пожелания! Заполните форму заказа и мы свяжемся с вами, чтобы уточнить детали.</span>
            </div>
            <div class="form-section">
                <span class="form-section__caption">тип</span>
                <div class="controls">
                    <label class="controls__item form__radio">
                        <input type="radio" name="selectedKind" v-model="selectedKind" value="toy" required>
                        <span class="form__radio-custom"></span>
                        <span class="controls__item_indent">Аксессуар для интерьера</span>
                    </label>
                    <label class="controls__item form__radio">
                        <input type="radio" name="selectedKind" v-model="selectedKind" value="accessory" required>
                        <span class="form__radio-custom"></span>
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
                    <label v-for="(color, key) in availibleColors" :key="key" class="controls__item form__checkbox" >
                        <input type="checkbox" name="selectedColor"  :value = "key" v-model="selectedColors"> 
                        <span >{{ color | capitalize }}</span>
                    </label>
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
            <div class="form-section">
                <label class="form-section__caption" for="addWishes">доп</label>
                <div class="controls">
                    <div class="controls__item">
                        <textarea name="email"
                                  v-model.trim="addWishes"
                                  class="form-input 
                                         form-input_textarea" 
                                  placeholder="Опишите ваши пожелания к заказу*" required/>
                    </div>
                    <div class="make-order controls__item">
                        <button type="submit" 
                            class="make-order__btn"
                            @click="sendOrder()">отправить заказ</button>
                        <span class="make-order__paragraph">*Поля обязательны для заполнения</span>
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
    font-size: var(--text-size__regular);
    font-weight: bold;
}

.form-section {
    display: flex;
    padding: 50px 0 0 100px;
}

::placeholder {
    opacity: 0.5;
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

.form-section__caption {
    color:turquoise;
    font-weight: bold;
    text-transform:uppercase;
}

.initial-info {
    display: flex;
    font-size: var(--text-size__light);
    padding: 70px  0  0 230px;
}

.initial-info__paragraph {
    max-width: 700px;
}

.form__radio-custom {
    position: relative;
    min-height: 50px;
    min-width: 50px;
    border: 2px solid black;
    border-radius: 50%;
}

.form__radio input:checked ~ .form__radio-custom::after{
    content: "";
    position: absolute;
    top: 13px;
	left: 13px;
    width: 23px;
    height: 23px;
    background-color: turquoise;
    border-radius: 50%;
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
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 150px 80px 80px;
}

.controls__item_indent {
     margin-left: 25px; 
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
    background-color: inherit;
    border-bottom: 2px solid black;
    min-height: 50px; 
    width: 100%;
}

.form-input_large {
    position: relative;
    min-height: 80px;
    /* margin-left: auto; 
    margin-right: 150px; */
}


#phoneNumberContainer::after{
    position: absolute;
    right: 170px;
    content: url("../assets/phonesvg.png");
}

#emailContainer::after {
    position: absolute;
    right: 170px;
    content: url("../assets/mailsvg.png");
}

.form-input_textarea {
    width: 100%; 
    min-height : 150px;
    resize: none;
    border: 2px solid black;
}

.form-input:focus{
    outline: none;
}

.make-order {
    display: flex;
    align-items: center;
}

.make-order__btn{
    padding: 15px;
    min-width: 250px;
    text-transform: uppercase;
    font-weight: bold;
    outline: inherit;
    background-color: transparent;
    border: 2px black solid;
    cursor: pointer;
}

.make-order__paragraph {
    margin-left: auto;
    font-weight: normal;
}

input[type="checkbox"], input[type="radio"] {
    position: absolute;
    display: none;
    font-size: var(--text-size__regular);
}

button {
    font-size: var(--text-size__regular);
}

textarea {
    font-size: var(--text-size__regular);
}

.form__checkbox input:checked + span:before  {
    content: url("../assets/VectorSmartObjectcop.png");
    position: absolute;
    top: 0;
    left: 25px;
}

</style>

