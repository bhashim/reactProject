const mongoose = require('mongoose');

const ReactProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            'Please provide a name!'
        ]
    },
    email: {
        type: String,
        required: [
            true,
            'Please provide an email!'
        ]
    },
    subject: {
        type: String,
        required: [
            true,
            'Please provide a subject!'
        ]
    },
    message: {
        type: String,
        required: [
            true,
            'Please provide a message!'
        ]
    },
    quantity: {
        type: Number,
        required: [
            true,
            'Please provide a quantity!'
        ]
    },
    shippingAddress: {
        type: String,
        required: [
            true,
            'Please provide a shipping address!'
        ]
    },
    city: {
        type: String,
        required: [
            true,
            'Please provide a city!'
        ]
    },
    state: {
        type: String,
        required: [
            true,
            'Please provide a state!'
        ]
    },
    zipCode: {
        type: Number,
        required: [
            true,
            'Please provide a zip code!'
        ]
    },
    creditcardNumber: {
        type: Number,
        required: [
            true,
            'Please provide a credit card number!'
        ]
    },
    securityCode: {
        type: Number,
        required: [
            true,
            'Please provide a security code!'
        ]
    },
    cardType: {
        type: String,
        required: [
            true,
            'Please provide the type of card used!'
        ]
    },
    expirationDate: {
        type: Date,
        required: [
            true,
            'Please provide the expiration date of your card!'
        ]
    },


}, {
    timestamps: true
});

const ReactProject = mongoose.model('ReactProject', ReactProjectSchema);

module.exports = ReactProject;