import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router/index.js";
import { messaging, getToken, onMessage } from "@/firebase/config";

const app = createApp(App);
app.use(router);
app.mount("#app");

// FCM 초기화 시작
console.log("FCM 초기화 시작...");

//  1. 서비스 워커 등록 (FCM 사용을 위해 필수)
navigator.serviceWorker.register("/firebase-messaging-sw.js")
    .then((registration) => {
        console.log("✅ 서비스 워커 등록 완료:", registration);

        // 2. 서비스 워커가 등록된 후 알림 권한 요청
        return Notification.requestPermission();
    })
    .then((permission) => {
        if (permission === "granted") {
            console.log("✅ 알림 권한 허용됨.");

            // 3. 서비스 워커 활성화 후 FCM 토큰 가져오기
            return getToken(messaging, { vapidKey: process.env.FIREBASE_VAPID_KEY });
        } else {
            throw new Error("알림 권한이 거부되었습니다. 브라우저 설정에서 알림을 허용해주세요.");
        }
    })
    .then((token) => {
        if (token) {
            console.log("FCM 토큰:", token);
        } else {
            console.log("FCM 토큰을 가져올 수 없습니다.");
        }
    })
    .catch((error) => {
        console.error("FCM 초기화 실패:", error);
    });


// 포그라운드 메시지 수신 이벤트 등록
onMessage(messaging, (payload) => {

    console.log("📢 FCM 메시지 수신:", payload);
});
