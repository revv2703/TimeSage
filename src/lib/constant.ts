import Category from '@/components/icons/category'
import Logs from '@/components/icons/clipboard'
import Templates from '@/components/icons/cloud_download'
import Home from '@/components/icons/home'
import Payment from '@/components/icons/payment'
import Settings from '@/components/icons/settings'
import Workflows from '@/components/icons/workflows'

export const clients = [...new Array(10)].map((client, index) => ({
  href: `/${index + 1}.png`,
}))

export const menuOptions = [
  { id: 1, name: 'Dashboard', Component: Home, href: '/dashboard' },
  { id: 2, name: 'Workflows', Component: Workflows, href: '/workflows' },
  { id: 3, name: 'Settings', Component: Settings, href: '/settings' },
  { id: 4, name: 'Connections', Component: Category, href: '/connections' },
  { id: 5, name: 'Billing', Component: Payment, href: '/billing' },
  { id: 6, name: 'Templates', Component: Templates, href: '/templates' },
  { id: 7, name: 'Logs', Component: Logs, href: '/logs' },
]