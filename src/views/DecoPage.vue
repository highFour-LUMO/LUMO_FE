<template>
    <div class="deco-container">
        <btn @click.stop="dialog = true">
            <v-icon icon="mdi-home-outline" style="font-size: 60px;" />
        </btn>
        <HomePage :value="dialog" @input="dialog = $event"></HomePage>
    </div>
</template>

<script>
import HomePage from './HomePage.vue';

export default {
    data() {
        return {
            dialog: false,
        };
    },
    components: {
        HomePage,
    },
};
</script>

<style scoped>
.deco-container {
    /*임시로 이미지 정했는데 변경 예정입니다*/
    background-image: url('../img/nightsky.jpg');
    background-size: cover;
    height: 100vh;
}
</style>