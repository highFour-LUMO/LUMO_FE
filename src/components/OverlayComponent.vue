<template>
    <div class="overlay" @click="goToDecoPage">
        <!-- 홈버튼 클릭 시 deco 페이지로 이동 -->
        <button class="floating-btn" @click="goToDecoPage">
            <v-icon icon="mdi-home-outline" style="font-size: 60px;" />
        </button>

        <!-- 본문 내용 -->
        <v-card class="content" @click.stop>
            <v-row>
                <!-- 사이드바 -->
                <v-col cols="3">
                    <slot name="sidebar"></slot>
                </v-col>

                <!-- 콘텐츠 부분 -->
                <v-col cols="9">
                    <slot name="content"></slot>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>


export default {
    components: {

    },
    data() {
        return {
        };
    },
    methods: {
        goToDecoPage() {
            this.$router.push('/deco');
        },
    },
};
</script>

<style scoped>
.overlay {

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    /* 모달처럼 흐림 효과 */
    display: flex;
    align-items: center;
    justify-content: center;
}

.content {
    background-color: beige;
    width: 80%;
    height: 80%;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}

.floating-btn {
    color: #000;
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