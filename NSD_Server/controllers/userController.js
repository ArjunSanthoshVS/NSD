require('dotenv').config()
const bcrypt = require('bcrypt');
const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');
const { Payment } = require('../models/paymentSchema');
const Stripe = require("stripe")
const stripe = Stripe(process.env.STRIPE_SECRET)

module.exports = {

    register: async (req, res) => {
        try {
            console.log(req.body);
            const isExisting = await User.findOne({ email: req.body.email })
            if (isExisting) {
                return res.status(409).send({ message: "User with given email already Exist!" });
            }
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            console.log("jhfjh");
            const newUser = new User({ ...req.body, password: hashedPassword })
            await newUser.save();
            res.status(201).json({ mobile: newUser.mobile, message: 'User registered successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Unable to register user' });
        }
    },
    login: async (req, res) => {
        try {
            console.log(req.body);
            const user = await User.findOne({ email: req.body.email })
            console.log(user);
            if (!user) {
                return res.status(400).send({ message: "User credentials are wrong" })
            }
            const checkPass = await bcrypt.compare(req.body.password, user.password)
            if (!checkPass) {
                return res.status(400).send({ message: "User credentials are wrong" })
            }
            const token = jwt.sign({ user }, "NSD", { expiresIn: "24h" })
            return res.status(201).json({ user, token })
        } catch (error) {
            return res.status(500).send({ message: "Internal Server Error" });
        }
    },
    otpVerify: async (req, res) => {
        try {
            let localMobile = req.query.mobile;
            const user = await User.findOne({ mobile: localMobile });
            if (!user) {
                return res.status(400).send({ message: "User not found" });
            }
            user.otpVerify = true;
            await user.save();
            return res.status(201).json({ user, msg: "Otp verification successful" });
        } catch (error) {
            return res.status(500).send({ message: "Internal Server Error" });
        }
    },
    googleLogin: async (req, res) => {
        try {
            const data = req.headers.authorization
            let result = data.split(' ')[1]
            result = jwt.decode(result)
            const email = result.email
            const fullName = result.name
            const googleId = result.sub

            let user = await User.findOne({ email: email })

            if (!user) {
                user = await User.create({ ...req.body, email, fullName, googleId })
            }
            const token = jwt.sign({ user }, "NSD", { expiresIn: "24h" })
            return res.status(201).json({ user, token })
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    payment: async (req, res) => {
        try {
            console.log(req.body);
            const amount = Number(req.body.amount);
            const userId = req.body.userId;
            const userName = req.body.userName;
            const createdAt = req.body.createdAt;

            const payment = new Payment({
                amount: amount,
                userId: userId,
                userName: userName,
                createdAt: createdAt
            });

            const session = await stripe.checkout.sessions.create({
                line_items: [
                    {
                        price_data: {
                            currency: 'inr',
                            product_data: {
                                name: req.body.userName,
                                description: 'Pay your service fee and Enjoy..!',
                            },
                            unit_amount: amount * 100,
                        },
                        quantity: 1
                    },
                ],
                mode: 'payment',
                success_url: 'http://localhost:5173/congradulations',
                cancel_url: 'http://localhost:5173/congradulations',
            });
            try {
                await payment.save();
                res.send({ url: session.url });
            } catch (error) {
                res.status(500).send({ message: "Not saved in the database" });
            }
        } catch (error) {
            res.status(500).send({ message: "Error in Stripe" });
        }
    },
}