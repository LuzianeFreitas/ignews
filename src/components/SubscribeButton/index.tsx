import { useSession, signIn } from 'next-auth/react';
import styles from './styles.module.scss';


interface SubscribeButtonProps {
    priceId: string;
}
export function SubscribeButton({priceId}: SubscribeButtonProps) {
    const [session] = useSession();

    function handleSubscribe() {
        // verifica se o usuário esta logado para poder inscrever
        if(!session) {
            signIn('github');
            return;
        }

        
    }
    return (
        <button
            type="button"
            className={styles.subscribeButton}
            onClick={handleSubscribe}
        >
            Subscribe now
        </button>
    );
}