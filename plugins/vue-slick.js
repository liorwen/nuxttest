import Vue from 'vue'
import Slick from 'vue-slick'

const VueSlick = {
    install(Vue, option) {
        Vue.component('slick',Slick);
        console.log('slick installed');
    }
}

Vue.use(VueSlick);

export default VueSlick;

