<template>
    <div class="deco-container">
        <button class="floating-btn" @click="$router.push('/home')">
            <v-icon icon="mdi-home-outline" style="font-size: 60px;" />
        </button>
    </div>
</template>

<style scoped>
.floating-btn {
    color: black;
    position: absolute;
    top: 20px;
    right: 20px;
    background: white;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
