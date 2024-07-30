import LazyImage from '@/components/LazyImage'
import NotionIcon from '@/components/NotionIcon'
import { siteConfig } from '@/lib/config'

/**
 * 文章背景图
 */
export default function PostHero({ post, siteInfo }) {
  const headerImage = post?.pageCoverThumbnail
    ? post?.pageCoverThumbnail
    : siteInfo?.pageCover
  const title = post?.title
  return (
    <div
      id='header'
      className='flex h-96 justify-center align-middle items-center w-full relative bg-black'>
      <div
        data-wow-delay='.1s'
        className='wow fadeInUp z-10 leading-snug font-bold xs:text-4xl sm:text-4xl md:text-5xl md:leading-snug text-4xl shadow-text-md flex justify-center text-center text-white'>
        {siteConfig('POST_TITLE_ICON') && <NotionIcon icon={post?.pageIcon} />}
        {title}
      </div>
      <LazyImage
        alt={title}
        src={headerImage}
        className='pointer-events-none select-none w-full h-full object-cover opacity-30 absolute'
        placeholder='blur'
        blurDataURL={siteConfig('IMG_LAZY_LOAD_PLACEHOLDER')}
      />
    </div>
  )
}
