import { useGameGlobal } from '..'
import Logo from './Logo'

/**
 * 顶栏
 * @returns
 */
export default function Header(props) {
  const { siteInfo } = props
  const { setSideBarVisible } = useGameGlobal()
  return (
    <header className='z-20'>
      <div className='w-full py-2 rounded-md bg-white shadow-md hover:shadow-xl transition-shadow duration-200 dark:bg-[#1F2030] flex justify-between items-center px-4'>
        <Logo siteInfo={siteInfo} />

        <button
          className='flex xl:hidden'
          onClick={() => {
            setSideBarVisible(true)
          }}>
          <i className='fas fa-search' />
        </button>
      </div>
    </header>
  )
}
