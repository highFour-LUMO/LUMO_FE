<template>
    <OverlayComponent>
        <template v-slot:sidebar>
            <SidebarComponent />
        </template>

        <template v-slot:content>
            <v-tabs align-tabs="end">
                <v-tab class="tab-content" @click="$router.push('/calendar')">캘린더</v-tab>
                <v-tab class="tab-content" @click="$router.push('/diary')">다이어리</v-tab>
                <v-tab class="tab-content" @click="$router.push('/friends')">친구칭기</v-tab>
            </v-tabs>
            <v-card class="calendar-card" variant="flat">
                캘린더 페이지로 하꼐요~~~
            </v-card>
        </template>
    </OverlayComponent>
</template>

<script>
import OverlayComponent from '@/components/OverlayComponent.vue';
import SidebarComponent from '@/components/SidebarComponent.vue';

export default {
    components: {
        OverlayComponent,
        SidebarComponent,
    }
};
</script>