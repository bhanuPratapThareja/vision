import User from '../models/user.schema.js'
import Product from '../models/product.schema.js'
import ProductStat from '../models/product-stat.schema.js'
import Transaction from '../models/transactions.schema.js'
import getCountryISO3 from 'country-iso-2-to-3'

export const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find()
        const productsWithStats = await Promise.all(
            products.map(async product => {
                const stat = await ProductStat.findOne({ productId: product.id})
                return { product: product.toObject({ getters: true }), stat }
            })
        )
        res.status(200).json({ productsWithStats })
    } catch (error) {
        next(error)
    }
}

export const getCustomers = async (req, res, next) => {
    try {
        const customers = await User.find({ role: 'user' }).select('-password')
        res.status(200).json({ customers: customers.map(customer => customer.toObject({ getters: true })) })
    } catch (error) {
        next(error)
    }
}

export const getTransactions = async (req, res, next) => {
    try {
        let { page = 1, pageSize = 20, sort = null, search = "" } = req.query

        console.log('page: ', page)
        console.log('pageSize: ', pageSize)
        console.log('sort: ', sort)
        console.log('search: ', search)

        let generalSort = () => {
            let sortParsed = JSON.parse(sort)
            let sortFormatted = {
                [sortParsed.field]: sortParsed.sort === "asc" ? 1 : -1
            }
            return sortFormatted
        }

        let sortFormatted = Boolean(sort) ? generalSort() : {}

        let transactions = await Transaction.find({
            $or: [
                { cost: { $regex: new RegExp(search, "i")}},
                { userId: { $regex: new RegExp(search, "i")}},
            ]
        })
        .sort(sortFormatted)
        .skip(page * pageSize)
        .limit(pageSize)


        let total = await Transaction.countDocuments({
            name: { $regex: search, $options: "i" }
        })

        console.log('transactions: ', transactions)
        console.log('total: ', total)
        res.status(200).json({ total, transactions: transactions.map(t => t.toObject({ getters: true })) })
    } catch (error) {
        console.log('error: ', error)
        next(error)
    }
}

export const getGeography = async (req, res, next) => {
    try {
        const users = await User.find()

        const mappedLocations = users.reduce((acc, val, index) => {
            const countryISO3 = getCountryISO3(val.country)
            if(!acc[countryISO3]) {
                acc[countryISO3] = 0
            }
            acc[countryISO3]++
            return acc
        }, {})

        const formattedLocations = Object.entries(mappedLocations).map(([country, count]) => ({ id: country, value: count }))
        res.status(200).json({ locations: formattedLocations })
    } catch (error) {
        next(error)
    }
}