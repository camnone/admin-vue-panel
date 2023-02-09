import { createStore } from 'vuex'

export default createStore({
	state: {
		isAuth: false,
		pattern: null
	},
	mutations: {
		setAuthUser(state, isAuth) {
			state.isAuth = isAuth
		},
		setPatternList(state, pattern) {
			state.pattern = pattern
		}
	}
})
