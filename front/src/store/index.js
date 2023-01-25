import { createStore } from 'vuex'
export default createStore({
  state: {
    isAuth:false
  },
  mutations:{
    setAuthUser(state,isAuth){
      state.isAuth = isAuth
    }
  },
})