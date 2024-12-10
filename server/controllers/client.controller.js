import Product from '../models/product.schema.js'
import ProductStat from '../models/product-stat.schema.js'

export const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find()
        const productsWithStats = await Promise.all(
            products.map(async product => {
                console.log('product: ', product)
                const stat = await ProductStat.findOne({ productId: product.id})
                console.log('stat: ', stat)
                return { product: product.toObject({ getters: true }), stat }
            })
        )
        res.status(200).json({ productsWithStats })
    } catch (error) {
        
    }
}