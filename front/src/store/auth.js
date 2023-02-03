export const checkAuth = {
  state:() => {
    isAuth:true
  },
  mutations:{
    setIsAuth(state,isAuth){
      state.isAuth = isAuth
    }
  },
  namespaced:true
}