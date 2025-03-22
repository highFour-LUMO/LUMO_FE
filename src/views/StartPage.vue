<template>
    <v-container class="fill-height d-flex justify-center align-center background" style="width: 70vw;">
        <v-row>
            <v-col cols="5" class="content">
                <h1 class="fade-in" style="font-size: 32px; font-weight: 700; margin-bottom: 20px">
                    반짝이는 당신의 순간을 <br /> 기록하세요 ✨
                </h1>
                <p class="fade-in">
                    하루의 소중한 순간과 감사한 마음을 <br />
                    <strong>LUMO</strong>
                    에서 특별하게 남겨보세요.
                </p>
                <v-btn v-if="isLogin" class="black-btn fade-in">시작하기</v-btn>
                <v-btn v-if="!isLogin" class="black-btn fade-in">시작하기</v-btn>
            </v-col>
            <v-col cols="7">
                <img src="@/assets/final_maingif.gif" style="width: 40vw; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);">
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import gsap from 'gsap';

export default {
    name: 'TravelPlanner',
    data() {
        return {
            isLogin: false,
            profileUrl: null,
            showDialog: true,

        };
    },
    mounted() {
        this.animateContent();
    },
    methods: {
        // 로그인 여부 확인
        async checkLoginStatus() {
            const token = localStorage.getItem('token');
            if (token) {
                this.isLogin = true;
                this.profileUrl = localStorage.getItem('profileUrl');
            }
        },
        animateContent() {
            const fadeEls = document.querySelectorAll('.fade-in');
            fadeEls.forEach(function (fadeEl, index) {
                gsap.to(fadeEl, {
                    duration: 1,
                    delay: (index + 1) * 0.9,
                    opacity: 1,
                });
            });
        },
    },
};
</script>

<style scoped>
.content {
    margin: auto 0;
}

.fade-in {
    opacity: 0;
}

.black-btn {
    background-color: #fff !important;
    color: #000 !important;
    border: none !important;
    font-weight: bold;
    margin-top: 10px;
}

.black-btn:hover {
    background-color: #333 !important;
}
</style>