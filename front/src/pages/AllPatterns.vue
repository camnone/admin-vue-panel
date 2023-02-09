<template>
	<Container>
		<search-input />
		<pattern-list :patterns="$store.state.pattern" />
	</Container>
</template>	

<script>
import Container from '../components/Container/Container.vue'
import PatternList from '../components/Pattern/PatternList.vue'
import SearchInput from '../components/UI/SearchInput.vue'
import { useGetPattern } from '../hooks/useGetPatternItem'
import { useStore } from 'vuex'
export default {
	components: { Container, PatternList, SearchInput },
	setup() {
		const store = useStore()
		const { dataList, isSuccess, isLoading, error, } = useGetPattern()
		store.commit('setPatternList', dataList)
		return {
			dataList,
			isSuccess,
			isLoading,
			error
		}
	}
}
</script>

<style lang='scss' scoped>

</style>