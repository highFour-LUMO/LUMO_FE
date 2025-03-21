<template>
    <v-dialog v-model="dialog">
        <v-row class="content">
            <v-col cols="3" class="sidebar">
                <v-card class="profile-card" variant="flat">
                    <img src="../img/Chihuahua.jpg" width="100%" alt="" class="profile-img">
                    <v-card-title>나는 오늘도 오늘만 산다.</v-card-title>
                </v-card>

                <v-card class=" notification-card" variant="flat">
                    <v-card-title>
                        <v-icon icon="mdi-bell-outline" style="font-size: 24px;" />
                        새로운 알림</v-card-title>
                    <v-list class="notifications">
                        <v-list-item v-for="(item, index) in notifications" :key="index">
                            <v-list-item-title>{{ item }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>

            <!-- 달력 -->
            <v-col cols="9">
                <v-tabs align-tabs="end" active-class="">
                    <v-tab class="tab-content">다이어리</v-tab>
                    <v-tab class="tab-content">친구</v-tab>
                </v-tabs>
                <v-card class="calendar-card" variant="flat">
                    달력 넣어주세여
                </v-card>
            </v-col>
        </v-row>
    </v-dialog>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            required: true,
        },
    },
    computed: {
        dialog: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit('input', value);
            },
        },
    },
    data() {
        return {
            notifications: [
                "아옹님이 새 친구가 되었습니다",
                "아옹님이 나의 댓글에 좋아요를 눌렀습니다",
                "아옹님이 5월 7일 일기에 댓글을 남겼습니다",
                "스니커즈님이 새로운 일기를 작성하였습니다.",
                "스니커즈님이 나의 댓글에 좋아요를 눌렀습니다."
            ],
            showDialog: true,
        }
    },
    methods: {

    }
};
</script>


<style scoped>
.content {
    margin: 0;
    border-radius: 40px;
}

.sidebar {
    padding: 16px;
}

.profile-card {
    text-align: center;
    border-radius: 0;
}

.profile-img {
    padding: 30px 30px 10px;
    border-radius: 10%;
}

.notification-card {
    padding: 16px;

    border-radius: 0;
}

.calendar-card {
    padding: 16px;
    background-color: #fff;
    border-radius: 0;
    height: 90%;
}

.tab-content {
    padding: 20px;
    background-color: #fff;
    margin: 0 2px;
    padding: 12px 20px;
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