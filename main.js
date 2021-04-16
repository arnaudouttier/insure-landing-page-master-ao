import SiteBranding from './src/components/site-branding.vue';
import SiteNavigation from './src/components/site-navigation.vue';
import SiteBanner from './src/components/site-banner.vue';

export default {
    components: {
        SiteBranding,
        SiteNavigation,
        SiteBanner
    }
}

new Vue({
    el: '#app',
})