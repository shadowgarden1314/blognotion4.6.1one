import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { getGlobalData } from '@/lib/db/getSiteData'
import { getLayoutByTheme } from '@/themes/theme'
import { useRouter } from 'next/router'

/**
 * 标签首页
 * @param {*} props
 * @returns
 */
const TagIndex = props => {
  // 根据页面路径加载不同Layout文件
  const Layout = getLayoutByTheme({
    theme: siteConfig('THEME'),
    router: useRouter()
  })
  return <Layout {...props} />
}

export async function getStaticProps(req) {
  const { locale } = req

  const from = 'tag-index-props'
  const props = await getGlobalData({ from, locale })
  delete props.allPages
  return {
    props,
    revalidate: process.env.EXPORT
      ? undefined
      : siteConfig(
          'NEXT_REVALIDATE_SECOND',
          BLOG.NEXT_REVALIDATE_SECOND,
          props.NOTION_CONFIG
        )
  }
}

export default TagIndex
