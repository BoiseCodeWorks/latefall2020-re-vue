<template>
  <div class="item">
    this is an item ocmponent
    <h1>{{ item.title }}</h1>
    <h5>{{ item.description }}</h5>
    <p>{{ item.quantity }}</p>
    <button class="btn btn-danger" v-if="item.creatorId == profile.id">
      Delete
    </button>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Item',
  props: {
    itemProp: Object
  },
  // props: ['itemProp']
  setup(props) {
    return {
      profile: computed(() => AppState.profile),
      item: computed(() => props.itemProp)
    }
  },
  components: {}
}

// export default {
//   name: 'Item',
//   data() {
//     return {
//       whatevs: 'neat'
//     }
//   },
//   props: ['itemProp'],
//   computed: {
//     item() {
//       return this.item
//     }
//   }
// }
</script>

<style lang="scss" scoped>

</style>
