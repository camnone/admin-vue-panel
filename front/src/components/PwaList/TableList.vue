<template>
  <div class="table-wrapper">
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>
              <DeleteBtn :svg="btnDelete" />
            </th>
            <th>ID</th>
            <th>Статус</th>
            <th>Шаблон</th>
            <th>Домен</th>
            <th>Язык</th>
            <th>Платформа</th>
            <th>Дата создания</th>
            <th>Фукнции</th>
            <th>Настройки</th>
          </tr>
        </thead>
        <tbody v-if="pwaList.length > 0">
          <TableItem @settings="$emit('settings',pwaItem.id)" @remove="$emit('remove',pwaItem.id)" v-for="pwaItem in pwaList" :pwaItem="pwaItem"
            :key="pwaItem.id" />
        </tbody>
      </table>
      <div v-if="pwaList.length === 0" class="list-else">Постов нет</div>
      <div class="pages-counter">
        <div class="wrapper">
          <div class="count">
            <div class="wrapper">
              <button>
                <span>1</span>
              </button>
              <button>
                <span>2</span>
              </button>
              <button>
                <span>3</span>
              </button>
            </div>
          </div>
          <div class="page-of">
            <small>1 fo 4</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DeleteBtn from '../UI/DeleteBtn.vue';
import TableItem from './TableItem.vue';

export default {
  components: { TableItem, DeleteBtn },
  props: {
    pwaList: {
      required: false,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/variables.scss';
.table-wrapper {
  border-radius: 1rem;
  background: var(--background-color);
  margin-top: 15px;
  border-right: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);

  .list-else {
    width: 100%;
 
    display: flex;
    padding: 0.5rem 0;
    justify-content: center;
    align-content: center;
    font-size: 1.2rem;
   
  }

  table {
    color: var(--background-color);
    font-weight: 300;
    width: 100%;

    text-indent: 0;
    border-color: var(--border-color);
    border-collapse: collapse;

    thead {
      display: table-header-group;
      background: var(--background-color);
      border: 1px solid var(--border-color);
      border-radius: 1px;
      color: var(--font-main-color);
    }

    th {
      padding: 0.75rem;
      border: 1px solid var(--border-color);

      &:last-child {
        text-align: right;
      }
    }

    tr {
      display: table-row;
      position: relative;
      max-width: 100%;
    }

    .logo {
      width: 1.5rem;

      .img {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
}

.pages-counter {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding: 0.75rem;
  background-color: var(--background-color);
  border-radius: 0 0 10px 10px;
  border: 1px solid var(--border-color);

  .wrapper {
    background-color: var(--background-color);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .count {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      margin-bottom: -0.75rem;

      button {
        background: var(--border-color);
        padding: 0.25rem;
        border-radius: 0.25rem;
        white-space: nowrap;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-bottom: 0.75rem;
        margin-right: 0.75rem;
        font-size: .875rem;
        line-height: 1.25rem;
        cursor: pointer;
        

        span {
          color: var(--font-main-color);
          padding-left: 0.5rem;
          padding-right: 0.5rem;
          font-size: .875rem;
          line-height: 1.25rem;
        }
      }
    }

    .page-of {
      background-color: var(--border-color);
      padding: 5px;
      border-radius: 5px;
      small {
        font-size: 1rem;
        font-weight: 400;
        color: var(--font-main-color);
      }
    }
  }
}
</style>