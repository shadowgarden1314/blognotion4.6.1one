import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'
import { MenuItemCollapse } from './MenuItemCollapse'

export const MenuBarMobile = props => {
  const { customMenu, customNav } = props
  const { locale } = useGlobal()

  let links = [
    // { name: locale.NAV.INDEX, href: '/' || '/', show: true },
    {
      name: locale.COMMON.CATEGORY,
      href: '/category',
      show: CONFIG.MENU_CATEGORY
    },
    { name: locale.COMMON.TAGS, href: '/tag', show: CONFIG.MENU_TAG },
    { name: locale.NAV.ARCHIVE, href: '/archive', show: CONFIG.MENU_ARCHIVE }
    // { name: locale.NAV.SEARCH, href: '/search', show: CONFIG.MENU_SEARCH }
  ]

  if (customNav) {
    links = links.concat(customNav)
  }

  // 如果 开启自定义菜单，则不再使用 Page生成菜单。
  if (siteConfig('CUSTOM_MENU')) {
    links = customMenu
  }

  if (!links || links.length === 0) {
    return null
  }

  return (
    <nav id='nav' className=' text-md'>
      {links?.map(link => (
        <MenuItemCollapse
          onHeightChange={props.onHeightChange}
          key={link?.id}
          link={link}
        />
      ))}
    </nav>
  )
}
