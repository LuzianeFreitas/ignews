import Link from 'next/link';
import styles from './styles.module.scss';
import { SignInButton } from '../SignInButton.tsx';
import { useRouter } from 'next/dist/client/router';

export function Header() {
    const { asPath } = useRouter();

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <Link href="/">
                        <a  className={asPath === '/' ? styles.active : ''}>Home</a>
                    </Link>
                    <Link href="posts">
                        <a className={asPath === '/posts' ? styles.active : ''}>Posts</a>
                    </Link>
                </nav>

                <SignInButton/>
            </div>
        </header>
    );

}