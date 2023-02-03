<template>
  <Container>
    <div class="text">Загрузите шаблон</div>
    <Input placeholder="Название шаблона"/>
    <div class="wrapper">
      <div class="icon">
        <span>Иконка приложения</span>
        <div class="bg">
          <DownloadComponent class="screen" />
        </div>
      </div>
      <div class="icon">
        <span>Скрины приложения</span>
        <div class="bg">
          <DownloadComponent class="screen-app"/>
          <DownloadComponent class="screen-app"/>
          <DownloadComponent class="screen-app"/>
          <DownloadComponent class="screen-app"/>
        </div>
      </div>
    </div>
    <div class="app-text">
      <div class="name input">
        <Input placeholder="Название приложения"/>
      </div>
      <div class="link input">
        <Input placeholder="Ссылка на редирект"/>
      </div>   
    </div>
    <div class="app-text">
      <div class="name input">
        <Input type="textarea" placeholder="Описание"/>
      </div>
      <div class="link input">
        <Input placeholder="Полное описание"/>
      </div>   
    </div>
  </Container>
</template>

<script>
import Container from '../components/Container/Container.vue';
import DownloadComponent from '../components/dowload/download.component.vue';
import Input from '../components/UI/Input.vue';

export default {
    components: { Container, Input, DownloadComponent }
}
</script>

<style lang="scss" scoped>
  .text{
    font-size: 2rem;
    color: #fff;
    text-align: center;
  }
  .wrapper{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    row-gap:30px;
    .icon{
      row-gap: 15px;
      height: auto;
      display: flex;
      flex-direction:column;
      justify-content: space-between;
      span{
        text-align: center;
        color:#fff
      }
      .bg{
        border-radius: 1rem;
        padding: 15px;
        background: #d2d2d4;
        display: flex;
        column-gap: 15px;
      }

    }
  }
  .app-text{
    border-radius: 1rem;
    display: flex;
    column-gap: 15px;
    padding: 15px;
    align-items: center;
    background: #d2d2d4;
    justify-content: center;
    .input{
      width: 100%;
    }
  }

  .screen{
    width: 250px;
    height: auto;
  }
  .screen-app{
    width: 300px;
    height: auto;
  }
</style>