import { query as q } from 'faunadb';
import { fauna } from "../../../services/fauna";
import { stripe } from '../../../services/stripe';

// Salva as informações no banco de dados
export async function saveSubscription(
    subscriptionId: string,
    customerId: string,
    createAction = false 
) {   
    // Buscar o usuário no banco do fauna com o Id CustomerId
    const userRef = await fauna.query(
        q.Select(
           "ref",
            q.Get(
                q.Match(
                    q.Index('user_by_stripe_customer_id'),
                    customerId
                )
            )
        )
    )

    // Buscar todos os dados da subscription
    const subscription = await stripe.subscriptions.retrieve(subscriptionId);

    const subscriptionData = {
        id: subscription.id,
        userId: userRef,
        status: subscription.status,
        price_id: subscription.items.data[0].price.id,
    }

    if(createAction) {
         // Salvar os dados da Subscription no Fauna
        await fauna.query(
            q.Create(
                q.Collection('subscriptions'),
                { data: subscriptionData }
            )
        ) 
    } else {
        await fauna.query(
            q.Replace(
                q.Select(
                  "ref",
                  q.Get(
                      q.Match(
                          q.Index('subscription_by_id'),
                          subscriptionId
                      )
                  )  
                ),
                {data: subscriptionData}
            )
        )
    }

    
}