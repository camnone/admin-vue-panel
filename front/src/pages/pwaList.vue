<template>
  <Container>
    <div class="table">
      <div class="table-configuration">
        <div class="table-name">
          <div class="img-wrapper"><svg viewBox="0 0 24 24" width="24" height="24" class="inline-block">
              <path fill="currentColor"
                d="M21,19A1,1 0 0,1 20,20H19V18H21V19M15,20V18H17V20H15M11,20V18H13V20H11M7,20V18H9V20H7M4,20A1,1 0 0,1 3,19V18H5V20H4M19,4H5A2,2 0 0,0 3,6V8H5L11,8H13L19,8H21V6C21,4.89 20.11,4 19,4M5,14H3V16H5V14M5,10H3V12H5V10M21,10H19V12H21V10M21,14H19V16H21V14M11,16V14H13V16H11M11,12V10H13V12H11">
              </path>
            </svg>
          </div>
          <h1 class="table-title">Tables</h1>
        </div>
        <div class="setting-search">
          <SearchInput v-model="searchQuery" />
          <span class="table-settings" @click="showModal"> <svg viewBox="0 0 24 24" width="16" height="16"
              class="inline-block">
              <path fill="currentColor"
                d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z">
              </path>
            </svg>
          </span>
        </div>
      </div>
      <TableList @settings="settings" @remove="deletePwa" :pwaList="sortedAndSearchedPosts" />
      <Modal v-model:show="modalVisible">
        <PwaForm @close="hideModal" :post="pwaUpdateItem" />
      </Modal>
    </div>
  </Container>
</template>

<script>
import PwaForm from '../components/PwaList/pwaForm.vue';
import TableList from '../components/PwaList/TableList.vue';
import SearchInput from '../components/UI/SearchInput.vue';
import Modal from '../components/UI/Modal.vue';
import Container from '../components/Container/Container.vue';
import { useGetPwaItem } from '../hooks/useGetPwaItem'
import useSortedAndSearchPwaList from '../hooks/useSortedAndSearchPwaList'
import { useDeletePwa } from '../hooks/useDeletePwa'
export default {
  components: { TableList, Modal, PwaForm, SearchInput, Container },
  data() {
    return {
      modalVisible: false,
    }
  },
  methods: {
    showModal() {
      this.modalVisible = true;
    },
    hideModal() {
      this.modalVisible = false;
    },
    settings(id) {
      this.$router.push(`/template/${id}`)  
    }
  },
  setup() {
    const { dataList } = useGetPwaItem()
    const { searchQuery, sortedAndSearchedPosts } = useSortedAndSearchPwaList(dataList)
    const { deletePwa } = useDeletePwa()


    return {
      deletePwa,
      searchQuery,
      sortedAndSearchedPosts,
    }
  }
}
</script>

<script setup>
</script> 

<style lang="scss" scoped>
@import '../assets/styles/variables';

.table {
  &-settings {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--font-second-color);
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    color: #fff;

    svg {
      color: var(--font-main-color);
      width: 100%;
      height: 50%;
    }


  }

  .setting-search {
    display: flex;
    column-gap: 10px;
  }

  &-container {
    flex: 1 1 0%;
  }

  &-configuration {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }



  &-name {
    display: flex;
    align-items: center;
    column-gap: 10px;

    .img-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--font-second-color);
      width: 3rem;
      height: 3rem;
      border-radius: 100%;

      svg {
        color: var(--font-main-color);
      }
    }
  }

  &-title {
    font-weight: 500;
    color: var(--font-main-color);
    font-size: 1.875rem;
  }


}
</style>