<template>
    <div class="content">
        <HeaderSection :message="headerMessage"/>
    </div>
</template>

<script>
import HeaderSection from "../shared/HeaderSection"

export default {
    name: "CatalogPage",
    components: { HeaderSection},
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
  justify-content: stretch;
}
</style>
