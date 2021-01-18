// Edit the general layout here,
// e.g. Sidebar, header, footer, menu etc.

import { FC, ReactNode } from 'react'
import {  NextSeo } from 'next-seo'
import styles from 'styles/Layout.module.scss'
// Noticed that module.scss is used here
// to modularise the css stylesheet to avoid
// CSS styling polution. But you can also use bootstrap
// but need to download react-bootstrap and add it to
// _app.tsx for global usage.

interface LayoutProps {
    title: string,
    description: string,
    canonicalUrl? : string,
    images?: {
        url: string,
        width?: number,
        height?: number,
        alt?: string,
    }[],
    children: ReactNode,
    type?: string,
}

const Layout: FC<LayoutProps> = ({
    title = 'Page Name',
    description = 'Page Description Here',
    canonicalUrl = 'http://localhost:3000',
    images,
    children,
    type,
}) => {
  return (
    <div className={styles.container}>
      <NextSeo
        title={title}
        description={description}
        canonical={canonicalUrl}
        openGraph={{
            type: type || "website",
            url: canonicalUrl,
            title,
            description,
            images: images || [],
        }}
      />

      <main className={styles.main}>
          { children }
      </main>
    </div>
  )
}

export default Layout;
