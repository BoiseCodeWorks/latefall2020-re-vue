<template>
  <div class="home container-fluid">
    <h1>Welcome</h1>
    <div class="row">
      <item v-for="item in items" :item-prop="item" :key="item.id" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { itemService } from '../services/ItemService'
import Item from '../components/Item'
export default {
  name: 'Home',
  setup() {
    onMounted(() => itemService.getAllItems())
    return {
      items: computed(() => AppState.items)
    }
  },
  components: { Item }

}
</script>
