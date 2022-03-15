import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';
import Prismic from '@prismicio/client'

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, earum sint quas officia id aliquam ipsum ex deserunt non mollitia est illo fugiat quisquam natus ad omnis quidem excepturi dicta.</strong>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, recusandae ducimus molestias totam necessitatibus eaque vero inventore repudiandae excepturi saepe, velit commodi, eveniet ut obcaecati officia placeat ipsam rem sapiente.</p>
                    </a>
                </div>
                <div className={styles.posts}>
                    <a href="">
                        <time>12 de março de 2021</time>
                        <strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, earum sint quas officia id aliquam ipsum ex deserunt non mollitia est illo fugiat quisquam natus ad omnis quidem excepturi dicta.</strong>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, recusandae ducimus molestias totam necessitatibus eaque vero inventore repudiandae excepturi saepe, velit commodi, eveniet ut obcaecati officia placeat ipsam rem sapiente.</p>
                    </a>
                </div>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();

    const response = await prismic.query([
        Prismic.predicate.at('document.type', 'publication')
    ], {
        fetch: ['publication.title','publication.content'],
        pageSize: 100
    })
    console.log(response);
    
    return {
        props: {}
    }
}