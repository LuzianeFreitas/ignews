import Head from 'next/head';
import styles from './styles.module.scss';

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