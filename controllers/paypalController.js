const db = require("../models");
const paypal = require("paypal-rest-sdk");

// Defining methods for the userController
module.exports = {
    checkout: function (req, res) {
        paypal.configure({
            'mode': 'sandbox', //sandbox or live
            'client_id': 'Aav9tpRIjzCtMFB3yVf_ge8HZ_TldrkobIEugasgNIX924VULdWGw8QD8ZlYguZuNlsaStqGBsvcJnxw',
            'client_secret': 'EOKQGTymscjKkWbyDP42m7fmPsYskd5opvCPtteLRYGyRR0uqC4xiVv8nQkJ8UMk4jiy-C-pZgtfnHOF'
        });
    },

    payment: function (req, res) {

        var create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": "http://localhost:3000/cancel",
                "cancel_url": "http://localhost:3000/cancel"
            },
            "transactions": [{
                "item_list": {
                    "items": [{
                        "name": "item",
                        "sku": "item",
                        "price": "25.00",
                        "currency": "USD",
                        "quantity": 1
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": "1.00"
                },
                "description": "This is the payment description."
            }]
        };

        paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                throw error;
            } else {
                console.log(payment);
                // res.send("test");
                for (let i = 0; i < payment.links.length; i++) {
                    if (payment.links[i].rel === "approval_url") {
                        res.redirect(payment.links[i].href);
                    }
                }
            }
        });
    },

    success: function (req, res) {
        const payerId = req.query.PayerID;
        const paymentId = req.query.paymentId;

        const execute_payment_json = {
            "payerid": payerId,
            "transaction": [{
                "amount": {
                    "currency": "USD",
                    "total": "25.00"
                }
            }]
        };

        paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
            if (error) {
                console.log(error.response);
                throw error;
            } else {
                console.log(JSON, stringify(payment));
                res.send("Success")
            }
        });
    },

    cancel: function (req, res) {
        res.send("Cancelled");
    }



};