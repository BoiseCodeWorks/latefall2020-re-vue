<template>
  <div class="about text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt="" />
    <p>{{ profile.email }}</p>
    <item v-for="item in items" :item-prop="item" :key="item.id" />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { itemService } from '../services/ItemService'
import Item from '../components/Item'
export default {
  name: 'Profile',
  setup() {
    onMounted(() => itemService.getProfileItems())

    return {
      profile: computed(() => AppState.profile),
      items: computed(() => AppState.items)
    }
  },
  components: { Item }
}

</script>

<style scoped>
img {
  max-width: 100px;
}
.router-link-active{
  color: red;
}
</style>
