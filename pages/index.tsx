// You can call the directory using root calling,
// No need to put '../../../../' unless it is one directory
// down only. But for the sake of consistency, just
// use root calling for all import.
import styles from 'styles/Home.module.scss'
import Layout from 'components/Layout'
// Can use nextjs breadcrumbs for breadcrumbs features
// But if this breadcrumbs feature is not preferred, you can
// do it manually by using next/router library instead to fetch
// location information
import { Breadcrumbs } from 'nextjs-breadcrumbs'

// Another suggestion is nprogress, which is for loading indicator,
// can consider as well

export default function Home() {
    const example = Breadcrumbs()

    return (
        // Add general layout to Layout component
        // Layout component is already SEO-optimised
        <Layout
            title="Home Page"
            description="This is the home page of the web"
            // canonicalUrl="http://anyhost.com"
            // images={[{
            //     url: 'https://imageurl.com/any',
            //     width: 400,
            //     height: 600,
            //     alt: 'This image name alt'
            // }]}
            // type="website"
        >
            <div>{example}</div>
            <h1 className={styles.title}>
                Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>

            <p className={styles.description}>
                Get started by editing{' '}
                <code className={styles.code}>pages/index.js</code>
            </p>

            <div className={styles.grid}>
                <a href="https://nextjs.org/docs" className={styles.card}>
                    <h3>Documentation &rarr;</h3>
                    <p>Find in-depth information about Next.js features and API.</p>
                </a>

                <a href="https://nextjs.org/learn" className={styles.card}>
                    <h3>Learn &rarr;</h3>
                    <p>Learn about Next.js in an interactive course with quizzes!</p>
                </a>

                <a
                    href="https://github.com/vercel/next.js/tree/master/examples"
                    className={styles.card}
                >
                    <h3>Examples &rarr;</h3>
                    <p>Discover and deploy boilerplate example Next.js projects.</p>
                </a>

                <a
                    href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    className={styles.card}
                >
                    <h3>Deploy &rarr;</h3>
                    <p>
                        Instantly deploy your Next.js site to a public URL with Vercel.
                    </p>
                </a>
            </div>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
                </a>
            </footer>
        </Layout>
    )
}
