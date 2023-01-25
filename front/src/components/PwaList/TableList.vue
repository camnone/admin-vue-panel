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
          <TableItem @remove="$emit('remove',pwaItem._id)" v-for="pwaItem in pwaList" :pwaItem="pwaItem"
            :key="pwaItem._id" />
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
.table-wrapper {
  border-radius: 1rem;
  background: #fff;

  .list-else {
    width: 100%;
    color: #fff;
    display: flex;
    padding: 0.5rem 0;
    justify-content: center;
    align-content: center;
    font-size: 1.2rem;
    background: #141c2fe1;
  }

  table {
    color: #fff;
    font-weight: 300;
    width: 100%;

    text-indent: 0;
    border-color: #ffffff3b;
    border-collapse: collapse;

    thead {
      display: table-header-group;
      background: #141c2f;

      th {


        &:last-child {
          border-radius: 0 10px 0 0;
        }

        &:first-child {
          border-radius: 10px 0 0 0;
        }
      }

    }

    th {
      padding: 0.75rem;

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
  background-color: #141c2f;
  border-radius: 0 0 10px 10px;

  .wrapper {
    background-color: #141c2f;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .count {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      margin-bottom: -0.75rem;

      button {
        background: rgb(30 41 59 / 96%);
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
          color: #fff;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
          font-size: .875rem;
          line-height: 1.25rem;
        }
      }
    }

    .page-of {
      background-color: #141c2f;

      small {
        font-size: 0.9rem;
        background-color: #141c2f;
        color: #fff;
      }
    }
  }
}
</style>