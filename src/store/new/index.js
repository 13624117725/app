import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        RepairMyList: {
            resolute: []
        }, //我的维修的列表数据
        buttonGroup: '',
        loginShow: false,
        isIndexTrue: false,
        isonLineTrue: false,
        isonLinerent: false,
        isMyTrue: false,
        isShowBottom: true,
        IndexMarketShow: false,
        location: '',
        buildListLocation: [],
        filterShow: true,
        area: '海南省',
        logo: 1,
        showWxTitle: false,
        isLogin: false,
        userName: '',
        userPhone: '',
        ExitLoginShow: '',
        loginData: true, //监听是否打开登录
        isEnd: false,
        currentRouter: '',
        miniShare: true,
    },
    mutations: {
        setarea(state, obj) {
            state.area = obj.area;
            state.logo = obj.logo;
        },
        showLogin(state) {
            state.loginShow = true;
        },
        login(state, bool) {
            state.isLogin = bool;
        }
    }
})
export default store