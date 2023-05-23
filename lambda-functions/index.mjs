import stripePackage from 'stripe';

const stripe = stripePackage(process.env.STRIPE_SECRET_KEY);
const calculateOrderAmount = (shipping_fee, total_amount) => {
  return shipping_fee + total_amount;
};

export const handler = async (event) => {
  if (event.body) {
    const { cart, shipping_fee, total_amount } = JSON.parse(event.body);

    try {
      const paymentIntent = await stripe.paymentIntent.create({
        amount: calculateOrderAmount(shipping_fee, total_amount),
        currency: 'usd',
      });
      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ msg: error.message }),
      };
    }
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify('Bad Request: event.body is required'),
    };
  }
};
