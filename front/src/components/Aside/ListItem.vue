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
				<Input v-model='patternName' type='text' class='pattern-input' :placeholder="'Название шаблона'" />
				<div class='wrapper' :class="{ 'active': isDragStarted }">
					<Close @click='removeFile' v-if='isDragStarted' />
					<div class='img'>
						<svg fill='#000000' width='800px' height='800px' viewBox='0 0 1920 1920' xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M533.333 586.667v106.666h-320v479.997h.422l233.6 213.34H1472.64l233.6-213.34h.43V693.333h-320V586.667h352c41.23 0 74.66 33.429 74.66 74.666v511.997H1856c35.35 0 64 28.66 64 64V1856c0 35.35-28.65 64-64 64H64c-35.346 0-64-28.65-64-64v-618.67c0-35.34 28.654-64 64-64h42.667V661.333c0-41.237 33.429-74.666 74.666-74.666h352ZM172.378 1280h-65.711v533.33H1813.33V1280h-65.71l-233.6 213.33H405.978L172.378 1280ZM1013.33 0v1044.579l228.96-228.958 75.42 75.425L960 1248.76 602.288 891.046l75.424-75.425 228.955 228.955V0h106.663Z'
								fill-rule='evenodd' />
						</svg>
					</div>
					<div class='folder-name' v-show="files !== ''">{{ files && this.files[0].name }}</div>
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
import Close from '../UI/Close.vue'
import { ref } from 'vue'
import axios from 'axios'

export default {
	components: { Arrow, Item, Modal, Download, Input, Btn, Close },
	data() {
		return {
			files: '',
			modalVisible: false,
			patternName: '',
			isDragStarted: false
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
			formData.append('pattern', this.files[0])
			formData.append('patternName', this.patternName)
			axios.post('http://localhost:5000/api/pattern', formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			}
			).finally(() => {
				this.files = ''
				this.patternName = ''
				this.isDragStarted = true
			})
		},
		removeFile() {
			this.files = ''
		},
		handleFileUpload() {
			this.files = this.$refs.files.files
		}
	},
	watch: {
		files() {
			if (this.files !== '') {
				this.isDragStarted = true
			} else {
				this.isDragStarted = false
			}
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

		.btn {
			width: 100%;
		}

		.wrapper {
			padding: 20px 20px 5px 20px;
			display: flex;
			row-gap: 15px;
			flex-direction: column;
			position: relative;
			text-align: center;
			min-height: 150px;
			justify-content: flex-end;
			border: 2px dotted var(--border-color);
			border-radius: 10px;
			color: var(--font-main-color);

			.img {
				content: '';
				position: absolute;
				background: url('../../assets/img/archive.svg');
				width: 100%;
				max-width: 70px;
				height: auto;
				z-index: 1;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				font-size: 20px;

				svg {
					width: 100%;
					height: auto;
					fill: #e6e6e633;
				}
			}

			&.active {
				border: 2px dotted var(--font-main-color);

				svg {
					fill: var(--font-main-color);
				}
			}

			.folder-name {

				font-size: 1rem;
				width: 100%;
				bottom: 0;
			}
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
}
</style>