import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import Pop from '../utils/Notifier'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async editAccount() {
    try {
      await api.put('/account')
      await this.getAccount()
    } catch (error) {
      Pop.toast(error, 'error')
    }
  }
}

export const accountService = new AccountService()
