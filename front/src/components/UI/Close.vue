<template>
	<div class="close" >
		<svg viewBox="0 0 24 24" width="20" height="20" class="inline-block">
			<path fill="currentColor"
						d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z">
			</path>
		</svg>
	</div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.close {
	cursor: pointer;
	position: absolute;
	top: 10px;
	right: 10px;
	display: flex;
	width: 30px;
	height: 30px;
	justify-content: center;
	align-items: center;
	z-index: 10;
	color: var(--font-main-color)
	svg {
		width: 100%;
	}
}
</style>