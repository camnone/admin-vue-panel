<template>
  <div class="download" ref="fileform">
    <div class="papper">
      <div v-for="(file, key) in files" class="file-listing">
        <img class="preview" v-bind:ref="'preview' + parseInt(key)" />
      </div>
      <div class="remove-container">
        <img class="close remove" src="../../assets/img/close.svg" v-on:click="removeFile(key)" v-show="files.length > 0">
      </div>
      <img v-show="files.length === 0" src="../../assets/img/zip.png" alt="">
      <div v-show="files.length === 0" class="download-text">{{ text }}</div>

<!--       <a class="submit-button" v-on:click="submitFiles()" v-show="files.length > 0">Submit</a>
      <progress v-show="files.length > 0" max="100" :value.prop="uploadPercentage"></progress> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      default: "Drag & Drop File here to upload",
      type: String,
    }
  },
  data() {
    return {
      dragAndDropCapable: false,
      files: [],
      uploadPercentage: 0
    }
  },
  methods: {
    determineDragAndDropCapable() {
      var div = document.createElement('div');
      return (('draggable' in div)
        || ('ondragstart' in div && 'ondrop' in div))
        && 'FormData' in window
        && 'FileReader' in window;
    },
    getImagePreviews() {
      for (let i = 0; i < this.files.length; i++) {
        if (/\.(jpe?g|png|gif)$/i.test(this.files[i].name)) {
          let reader = new FileReader();
          reader.addEventListener("load", function () {
            this.$refs['preview' + parseInt(i)][0].src = reader.result;
          }.bind(this), false);
          reader.readAsDataURL(this.files[i]);
        } else {
          this.$nextTick(function () {
            this.$refs['preview' + parseInt(i)][0].src = '/images/file.png';
          });
        }
      }
    },
    removeFile(key) {
      this.files.splice(key, 1);
    },
    submitFiles() {
      let formData = new FormData();
      for (var i = 0; i < this.files.length; i++) {
        let file = this.files[i];
        formData.append('files[' + i + ']', file);
      }
      axios.post('/file-drag-drop',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: function (progressEvent) {
            this.uploadPercentage = parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total));
          }.bind(this)
        }
      ).then(function () {
        console.log('SUCCESS!!');
      })
        .catch(function () {
          console.log('FAILURE!!');
        });
    },
    removeFile(key) {
      this.files.splice(key, 1);
    }
  },
  mounted() {
    this.dragAndDropCapable = this.determineDragAndDropCapable();
    if (this.dragAndDropCapable) {
      ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach(function (evt) {
        this.$refs.fileform.addEventListener(evt, function (e) {
          e.preventDefault();
          e.stopPropagation();
        }.bind(this), false);
      }.bind(this));
      this.$refs.fileform.addEventListener('drop', function (e) {

        for (let i = 0; i < e.dataTransfer.files.length; i++) {

          this.files.push(e.dataTransfer.files[i]);
          this.getImagePreviews();
        }
      }.bind(this));
    }
  },
}
</script>

<style lang="scss" scoped>
.download {
  position: relative;
  border: 1px dotted #0C151C;
  background-color: #E4E5EA;
  border-radius: 1rem;
  justify-content: center;
  display: flex;
  flex-direction: column;

  &-text {
    color: #0C151C;
    max-width: 150px;
    text-align: center;
  }
  .close{
    width: 30px;
    height: auto;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }

  .papper {
    row-gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 10px;
  }


  a.submit-button {
    display: block;
    margin: auto;
    text-align: center;
    width: 200px;
    padding: 10px;
    text-transform: uppercase;
    background-color: #CCC;
    color: white;
    font-weight: bold;
    margin-top: 20px;
  }

  progress {
    width: 100%;
    margin: auto;
    display: block;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .file-listing{
    height: 100%;
    width: 100%;
    img{
      width: 100%;
      height: 100%;
      border-radius: 1rem;
    }
  }
}
</style>