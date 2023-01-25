<template>
  <tr>
    <td class="w">
      <label class="checkbox">
        <input type="checkbox">
        <span class="check"></span>
      </label>
    </td>
    <td>
      <span class="id">{{ pwaItem.id }}</span>
    </td>
    <td :class="[pwaItem.status !== 'true' ? 'status' : 'status active']">
      <div></div>
    </td>
    <td data-label="Name" class="name">
      <span>
        {{ pwaItem.pattern }}
      </span>
    </td>

    <td data-label="City" class="city">
      <span>{{ pwaItem.domain }}</span>
    </td>

    <td data-label="Language" class="city">
      <span>{{ pwaItem.language }}</span>
    </td>

    <td data-label="City" class="city">
      <span>{{ pwaItem.platform }}</span>
    </td>

    <td data-label="Created" class="created">
      <span>{{ pwaItem.createdAt }}</span>
    </td>

    <td>
      <span>Open</span>
    </td>

    <td class="settings w-25">
      <div class="settings-wrapper">
        <button class="btn blue">
          <span>
            <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block" data-v-a2a18305="">
              <path fill="currentColor"
                d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"
                data-v-a2a18305=""></path>
            </svg>
          </span>
        </button>

        <DeleteBtn :name="'btnDelete'" @click="$emit('remove', pwaItem._id)" />
      </div>
    </td>
  </tr>
</template>

<script>
import DeleteBtn from '../UI/DeleteBtn.vue';
export default {
  components: { DeleteBtn },
  props: {
    pwaItem: {
      type: Object,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
tbody {
  tr:nth-child(odd) {
    background: rgb(30 41 59 / 96%);
  }

  tr {
    background: #141c2f;
  }

  td {
    text-align: center;
    display: table-cell;
    border-bottom-width: 0px;
    padding: 0.75rem;
    text-align: center;
    vertical-align: middle;
  }

  td:not(:first-child) {
    text-align: center;
    border-color: #0f172ad1;
    border-left-width: 1px;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
  }
}

.status {
  div {
    background: #ff646d;
    box-shadow: 0 0 12px #ff646d;
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 100%;
    margin: 0 auto;
  }

  &.active {
    div {
      background: #00ff73;
      box-shadow: 0 0 12px #00ff37;
    }
  }
}

.blue {
  background-color: rgba(37, 99, 235);
}

.red {
  background-color: #ef4444;
}

.w-25 {
  text-align: center;
  width: 0.25rem;
}

.checkbox {
  position: relative;
  display: inline-flex;
  cursor: pointer;
  align-items: center;
}

[type=checkbox] {
  border-radius: 0;
  appearance: none;
  padding: 0;
  print-color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  color: #2563eb;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
}

.checkbox input[type=checkbox]:checked+.check {
  background-image: url("../../assets/check.svg");
  border: none;
}

.checkbox input[type=checkbox] {
  position: absolute;
  left: 0px;
  z-index: -1;
  opacity: 0;
}

.checkbox input[type=checkbox]+.check {
  border-width: 1px;
  background-color: rgb(62 90 137);
  display: block;
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 0.25rem;
}

.settings {
  &-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: nowrap;
    margin-bottom: -0.75rem;


  }

  .btn {
    white-space: nowrap;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    margin-bottom: 0.75rem;
    padding: 0.25rem;
    margin-right: 0.75rem;
    border-radius: 0.25rem;

    &:last-child {
      margin-right: 0;
    }

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1.5rem;
      height: 1.5rem;
      color: white;
      background: transparent;

      svg {
        background: transparent;
      }
    }
  }

}
</style>