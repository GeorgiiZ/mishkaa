<template>
    <div class="form-header">
        <span class="form-header__title">{{message}}</span>
    </div>
</template>

<script>
export default {
    name: "FormHeader",
    data() {
        return {
            message: "Вязание на заказ",        
        }
    },
}
</script>

<style scoped>

.form-header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 255px;
    margin: auto 0;
}

.form-header__title {
    z-index: 1;
    font-weight: bold;
    font-size: 50px;
}


.form-header::after {
    content: '';
    position: absolute;
    width: 1150px;
	height: 34px;
    background: url("../assets/catalog-images/zigzagfilldesktopsvg.png");
    bottom: 0;
    left: 0;
}

</style>
