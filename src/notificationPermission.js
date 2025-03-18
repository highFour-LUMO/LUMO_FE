//service/notificationPermission.js

import { getToken } from "firebase/messaging";
import { messaging } from "../firebase/config";

export function requestFCMPermission() {
    // Notification 권한 요청
    console.log('권한을 요청하는 중...');

    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('알림 권한이 부여되었습니다.');

            // FCM 토큰 요청
            getToken(messaging, { vapidKey: process.env.FIREBASE_VAPID_KEY })
                .then((currentToken) => {
                    if (currentToken) {
                        console.log('FCM Token:', currentToken);
                    } else {
                        console.log('권한을 허용해주세요');
                    }
                })
                .catch((err) => {
                    console.log('푸시 토큰 가져오는 중 에러 발생', err);
                });

        } else {
            console.log('권한을 얻을 수 없습니다.');
        }
    });
}