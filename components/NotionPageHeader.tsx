import * as React from 'react'
import cs from 'classnames'
// import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'
// import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Header, Breadcrumbs, Search, useNotionContext } from 'react-notion-x'
import * as types from 'notion-types'

// import { useDarkMode } from 'lib/use-dark-mode'
import { navigationStyle, navigationLinks, isSearchEnabled } from 'lib/config'

import styles from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link'

// const ToggleThemeButton = () => {
//   const [hasMounted, setHasMounted] = React.useState(false)
//   const isDarkMode = false

//   React.useEffect(() => {
//     setHasMounted(true)
//   }, [])

//   // const onToggleTheme = React.useCallback(() => {
//   //   toggleDarkMode()
//   // }, [toggleDarkMode])

//   return (
//     <div
//       className={cs('breadcrumb', 'button', !hasMounted && styles.hidden)}
//       // onClick={onToggleTheme}
//     >
//       {/* {hasMounted && isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />} */}
//       <IoSunnyOutline />
//     </div>
//   )
// }

export const NotionPageHeader: React.FC<{
  block: types.CollectionViewPageBlock | types.PageBlock
  currentSection: number
// eslint-disable-next-line @typescript-eslint/no-unused-vars
}> = ({ block, currentSection }) => {
  const { components, mapPageUrl } = useNotionContext()

  if (navigationStyle === 'default') {
    return <Header block={block} />
  }

  return (
    <header className='notion-header'>
      <div className='notion-nav-header'>
      <Link href={'/'}>
        <Image width={282 / 3} height={144 / 3} src={'/logo-big.svg'} alt="Vivid Logo"/>
      </Link>

        <div className='v'>
        <Link
              href={'/why-us'}
              className={cs(styles.navLink, 'breadcrumb', 'button')}
          >
            Why us
          </Link>

          {navigationLinks
            ?.map((link, index) => {
              if (!link.pageId && !link.url) {
                return null
              }

              if (link.pageId) {
                return (
                  <components.PageLink
                    href={mapPageUrl(link.pageId)}
                    key={index}
                    className={cs(styles.navLink, 'breadcrumb', 'button')}
                  >
                    {link.title}
                  </components.PageLink>
                )
              } else {
                return (
                  <components.Link
                    href={link.url}
                    key={index}
                    className={cs(styles.navLink, 'breadcrumb', 'button')}
                  >
                    {link.title}
                  </components.Link>
                )
              }
            })
            .filter(Boolean)}

          {/* <ToggleThemeButton /> */}
        </div>

        <div className="grow"></div>

        <div className='notion-nav-header-rhs breadcrumbs'>

          {isSearchEnabled && <Search block={block} title={null} />}

          <a href="tel:226-338-8495">Call us 226-338-8495</a>
          <div className="ml2 btn black">
            Book Free Estimate
          </div>
        </div>
      </div>
    </header>
  )
}
