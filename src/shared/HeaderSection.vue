<template>
    <div :class="backGround">
        <div class="container">
            <div class="header row">
                <div class="header-block col-md-2">
                    Новые поступления
                </div>
            </div>
    </div>
        <p>{{message}}</p>
    </div>
</template>

<script>
export default {
    name: "HeaderSection",
    props: {
        message:{
            type: String
        },
        backGround: {
            type: String,
            required: true,
            validator: function(value) {
                return ['gray', 'image'].includes(value);
            }
        }
    },
}
</script>



<style scoped>

.header-block {
  padding: 10px 5px;
  font-weight: bold;
  display: flex;
  justify-content: space-around;
  border: 1px solid gray;
}

.header {
    display: flex;
    padding: 10px;
    font-weight: bold;
}

.header-item {
    display: flex;
    justify-content: space-around;
    margin: 5px 15px;
    border: 1px solid gray;
}

.gray {
    background-color: lightgray;
}

</style>
