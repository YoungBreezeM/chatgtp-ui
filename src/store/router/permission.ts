import type { Router } from 'vue-router'
import { useAuthStore } from '@/store/modules/auth'

export function setupPageGuard(router: Router) {
  
  router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore()
    const { key, openId } = to.query as { key: string, openId: string }

    if (key && openId) {
      authStore.setToken(`${key}:${openId}`)
    }
    
    next()
     
  })
}
