import { useSession, signIn } from 'next-auth/react';
import { api } from '../../services/api';
import { stripe } from '../../services/stripe';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss';


interface SubscribeButtonProps {
    priceId: string;
}
export function SubscribeButton({priceId}: SubscribeButtonProps) {
    const [session] = useSession();
    console.log(session);
    
    async function handleSubscribe() {
        // verifica se o usuário esta logado para poder inscrever
        if(!session) {
            signIn('github');
            return;
        }

        try {
            const response = await api.post('/subscribe')

            const { sessionId } = response.data;

            const stripe = await getStripeJs()
            
            await stripe.redirectToCheckout(sessionId)
        } catch (err) {
            alert(err.message)
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
