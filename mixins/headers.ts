import nuxtStorage from 'nuxt-storage'
function headersConfig() {
  const token: string | null = nuxtStorage.localStorage.getItem('token')
  if (typeof token === 'string') {
    const headers = {
      Authorization: token
    }
    return headers
  }
}

export const headers = headersConfig()
