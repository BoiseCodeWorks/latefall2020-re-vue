import { api } from './AxiosService'
import { AppState } from '../AppState'

class ItemService {
  async getProfileItems() {
    try {
      const res = await api.get('http://localhost:3000/profile/items')
      AppState.items = res.data
      // eslint-disable-next-line no-console
      console.log(res.data)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }

  async getAllItems() {
    try {
      const res = await api.get('/items')
      AppState.items = res.data
      // eslint-disable-next-line no-console
      console.log(res.data)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    }
  }
}

export const itemService = new ItemService()
