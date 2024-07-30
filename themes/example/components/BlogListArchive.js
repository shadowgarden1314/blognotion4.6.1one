import Link from 'next/link'

/**
 * 博客归档列表；仅归档页面使用
 * 按照日期将文章分组
 * @param {*} param0
 * @returns
 */
export default function BlogListArchive({ archiveTitle, archivePosts }) {
  return (
    <div key={archiveTitle}>
      <div id={archiveTitle} className='pt-16 pb-4 text-3xl dark:text-gray-300'>
        {archiveTitle}
      </div>

      <ul>
        {archivePosts[archiveTitle].map(post => {
          return (
            <li
              key={post.id}
              className='border-l-2 p-1 text-xs md:text-base items-center  hover:scale-x-105 hover:border-gray-500 dark:hover:border-gray-300 dark:border-gray-400 transform duration-500'>
              <div id={post?.publishDay}>
                <span className='text-gray-400'>{post?.publishDay}</span> &nbsp;
                <Link
                  href={post?.href}
                  className='dark:text-gray-400  dark:hover:text-gray-300 overflow-x-hidden hover:underline cursor-pointer text-gray-600'>
                  {post.title}
                </Link>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
