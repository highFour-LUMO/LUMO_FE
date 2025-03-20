import 'vuetify/styles'
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { mdi } from 'vuetify/iconsets/mdi';
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify({
    components,

    directives,
    icons: {
        iconfont: 'mdi',
        defaultSet: 'mdi',
        sets: {
            mdi,
        }
    }

})