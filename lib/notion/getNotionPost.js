import BLOG from '@/blog.config'
import { idToUuid } from 'notion-utils'
import { defaultMapImageUrl } from 'react-notion-x'
import formatDate from '../utils/formatDate'
import { getPage } from './getPostBlocks'

/**
 * 根据页面ID获取内容
 * @param {*} pageId
 * @returns
 */
export async function getPost(pageId) {
  const blockMap = await getPage(pageId, 'slug')
  if (!blockMap) {
    return null
  }

  const postInfo = blockMap?.block?.[idToUuid(pageId)].value
  return {
    id: pageId,
    type: postInfo,
    category: '',
    tags: [],
    title: postInfo?.properties?.title?.[0],
    status: 'Published',
    createdTime: formatDate(
      new Date(postInfo.created_time).toString(),
      BLOG.LANG
    ),
    lastEditedDay: formatDate(
      new Date(postInfo?.last_edited_time).toString(),
      BLOG.LANG
    ),
    fullWidth: postInfo?.fullWidth || false,
    page_cover: getPageCover(postInfo) || BLOG.HOME_BANNER_IMAGE,
    date: {
      start_date: formatDate(
        new Date(postInfo?.last_edited_time).toString(),
        BLOG.LANG
      )
    },
    blockMap
  }
}

function getPageCover(postInfo) {
  const pageCover = postInfo.format?.page_cover
  if (pageCover) {
    if (pageCover.startsWith('/')) return BLOG.NOTION_HOST + pageCover
    if (pageCover.startsWith('http'))
      return defaultMapImageUrl(pageCover, postInfo)
  }
}
