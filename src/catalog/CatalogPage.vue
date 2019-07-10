<template>
    <HeaderSection :message="headerMessage" 
                    backGround = "gray"/>
</template>

<script>
import HeaderSection from "../shared/HeaderSection"

export default {
    name: "CatalogPage",
    components: { HeaderSection },
    data() {
        return {
            headerMessage: "Каталог товаров"
        }
    }
}
</script>

<style scoped>

.content {
  display: flex;
}

.header {
    background-color: lightgrey;
}

</style>
