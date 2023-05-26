const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const headers = {
  'Access-Control-Allow-Origin': '*', // Or 'http://localhost:3000'
  'Access-Control-Allow-Credentials': true,
};

exports.handler = async function (event, context) {
  // In case the lambda function doesn't have a event.body
  if (!event.body) {
    return {
      statusCode: 400,
      headers,
      body: 'Bad Request: event.body is required',
    };
  }

  const { cart, shipping_fee, total_amount } = JSON.parse(event.body);
  // In case the variables are not provided
  if (!cart || !shipping_fee || !total_amount) {
    return {
      statusCode: 400,
      headers,
      body: 'Bad Request: cart, shipping_fee, and total_amount are required',
    };
  }

  const calculateOrderAmount = () => {
    return shipping_fee + total_amount;
  };

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(),
      currency: 'usd',
    });
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ msg: error.message }),
    };
  }
};
