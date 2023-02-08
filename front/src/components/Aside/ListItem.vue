<template>
	<div class='listItem'>
		<router-link to='/pwalist'>
			<Item :name='"PWA"' :imgName="'pwa-svgrepo-com'" />
		</router-link>

		<div class='select' @click='show'>
			<div class='link'>
				<Item :name='"Шаблоны"' :imgName="'folder'" />
				<Arrow class='arrow' />
			</div>
			<ul class='list' ref='list'>
				<router-link to='all-pattern'>
					<Item class='item' :name='"Все шаблоны"' :imgName="'pattern'" />
				</router-link>
				<Item class='item' @click='showModal' :name='"Добавить шаблон"' :imgName="'addTemplate'" />
			</ul>
		</div>
		<Modal v-model:show='modalVisible'>
			<div class='grid'>
				<Input v-model="patternName"  type='text' :placeholder="'Название шаблона'" />
				<div class='wrapper' :class="{'photo-active': isDragStarted }">
					<input @dragenter='isDragStarted = true' @dragleave='isDragStarted = false' class='input-uploader' ref='files'
								 type='file' @change='handleFileUpload()'>
				</div>
				<Btn @click='submitFile()' class='btn'>Отправить</Btn>
			</div>
		</Modal>
	</div>
</template>

<script>
import Arrow from '../UI/arrow.vue'
import Item from './Item.vue'
import Modal from '../UI/Modal.vue'
import Download from '../dowload/download.component.vue'
import Input from '../UI/Input.vue'
import Btn from '../UI/btn.vue'
import { ref } from 'vue'
import axios from 'axios'

export default {
	components: { Arrow, Item, Modal, Download, Input, Btn },
	data() {
		return {
			files: '',
			modalVisible: false,
			patternName: ''
		}
	},
	methods: {
		showModal() {
			this.modalVisible = true
		},
		show() {
			this.$el.querySelector('.list').classList.toggle('show')
		},
		submitFile() {
			let formData = new FormData()
			for (let i = 0; i < this.files.length; i++) {
				let file = this.files[i]
				formData.append('pattern', file)
			}
			axios.post('http://localhost:5000/api/pattern', formData, {
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				}
			).then(function() {
				console.log('SUCCESS!!')
			})
				.catch(function() {
					console.log('FAILURE!!')
				})
		},
		handleFileUpload() {
			this.files = this.$refs.files.files
		}
	}
}


</script>


<style lang='scss' scoped>

.listItem {
	display: flex;
	flex-direction: column;
	row-gap: 15px;

	.link {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.grid {
		display: flex;
		flex-direction: column;
		row-gap: 15px;
	}

	.wrapper {
		padding: 20px;
		display: flex;
		row-gap: 15px;
		flex-direction: column;
		position: relative;
		text-align: center;
		min-height: 150px;
		justify-content: center;
		border: 2px dotted #eee;
		border-radius: 10px;
		color: var(--font-main-color);

		.btn {
			margin: 0 auto;
			width: 100%;
		}
	}

	.photo-active {
		background: #2CD9FF;
	}

	.photo-inActive {
		background: #2CD9FF;
	}

	.photo-remove {
		cursor: pointer;
		position: absolute;
		outline: none;
		top: 0;
		right: 0;
		width: calc(100% + 10px);
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background-color: rgba(#000, 0.05);
		border: 0;

		&::after {
			content: 'x';
			position: absolute;
			z-index: 1;
			top: 36%;
			right: 19%;
			transform: translate(-50%, -50%);
			width: 10px;
			height: 10px;

		}
	}

	.input-uploader {
		cursor: pointer;
		position: absolute;
		z-index: 2;
		right: 0;
		bottom: 0;
		left: 0;
		height: 100%;
		width: 100%;
		opacity: 0;
	}

	.arrow {
		cursor: pointer;
		padding-right: 20px;
	}

	.select {
		text-align: center;

		.list {
			animation: fadeInFromNone 1s ease-in-out;
			opacity: 0;
			margin-top: 10px;
			display: none;
			list-style: none;

			.item {
				padding: 10px 20px;
				text-align: center;
				border-bottom: 1px solid var(--border-color);
				background: var(--border-color);
			}

			&.show {
				animation: fadeInFromNone 1s ease-in-out;
				opacity: 1;
				display: block;
			}
		}

	}

	.photo-uploader {
		display: flex;
		justify-content: space-between;
		flex-direction: row;

		&-photos {
			position: relative;

			> img {
				width: 200px;
				height: auto;
				margin-right: 60px;
			}
		}
	}

}
</style>