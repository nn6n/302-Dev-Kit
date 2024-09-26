import { env } from '@/env'
import { useAppStore } from '@/stores'

export function useDomain() {
  const { region } = useAppStore.getState()

  const domain = region == '0'
    ? env.NEXT_PUBLIC_OFFICIAL_WEBSITE_URL_CHINA
    : env.NEXT_PUBLIC_OFFICIAL_WEBSITE_URL_GLOBAL
  return domain
}
