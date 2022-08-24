const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51LRVptSIX2MbRnIWMTlj3rdqRSozSr2r9LnlhuKaPhiYYwU9mYT1hTwom1nnCZlvq2DsNXZ6wLTkKC7QoAFDr9Bi00kqE7XAom');

// API

// - APP Config
const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request,response) => response.status(200).send('hello world'))

app.post('/payments/create',async (request, response) => {
    const total = request.query.total;

    console.log('Payment request received > ', total);

    const paymentIntent= await stripe.paymentIntents.create({
        amount:total,
        currency: "inr",
    })

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
    
})

// - Listen Command
exports.api = functions.https.onRequest(app)

// example endpoint:
// http://localhost:5001/clone-95d40/us-central1/api