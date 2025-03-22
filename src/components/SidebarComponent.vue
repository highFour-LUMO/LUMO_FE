<template>
    <!-- 프로필 -->
    <v-card class="profile-card" variant="flat">
        <img src="../img/Chihuahua.jpg" width="100%" alt="" class="profile-img">
        <v-card-title>이거 사이드바임</v-card-title>
    </v-card>

    <!-- 알림 -->
    <v-card class="notification-card" variant="flat">
        <v-card-title>
            <v-icon icon="mdi-bell-outline" style="font-size: 24px;" />
            새로운 알림
        </v-card-title>
        <v-list class="notifications">
            <v-list-item v-for="(item, index) in notifications" :key="index">
                <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            notifications: [
                "아옹님이 새 친구가 되었습니다",
                "아옹님이 나의 댓글에 좋아요를 눌렀습니다",
                "아옹님이 5월 7일 일기에 댓글을 남겼습니다",
                "스니커즈님이 새로운 일기를 작성하였습니다.",
                "스니커즈님이 나의 댓글에 좋아요를 눌렀습니다."
            ],
        };
    },
};
</script>

<style scoped>
.content {
    margin: 0;
    border-radius: 20px;
}

.profile-card {
    text-align: center;
    border-radius: 0;
}

.profile-img {
    padding: 10px;
    border-radius: 10%;
}

.notification-card {

    border-radius: 0;
}

.calendar-card {
    padding: 16px;
    border-radius: 0;
    height: 90%;
}

.tab-content {
    padding: 20px;
    margin: 0 2px;
    padding: 12px 20px;
    background-color: red;
}

:deep(.v-tab) {
    /* v-tab에 border-radius 적용 */
    border-radius: 12px 12px 0 0 !important;
    overflow: hidden;
}

.v-tab--selected {}

* {
    color: black;
}
</style>