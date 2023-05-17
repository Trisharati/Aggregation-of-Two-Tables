const Product = require('../model/product.model')
const Category = require('../model/category.model')

class productController {
  /**
   * @Method showProductForm
   * @Description To Show Product Form
   */

  async showProductForm(req, res) {
    try {
      let allCategory = await Category.find({})
      res.render('add_product', {
        allCategory,
      })
    } catch (error) {
      throw error
    }
  }

  /**
   * @Method addProduct
   * @Description To Add A Product
   */

  async addProduct(req, res) {
    try {
      let saveProduct = await Product.create(req.body)
      if (saveProduct && saveProduct._id) {
        console.log('Product Added Successfully')
        res.redirect('/show-product-form')
      } else {
        console.log('Product Not Added')
        res.redirect('/show-product-form')
      }
    } catch (error) {
      throw error
    }
  }

  /**
   * @Method showProductTable
   * @Description To Show Product Data
   */

  async showProductTable(req, res) {
    try {
      let allProduct = await Product.aggregate([
        {
          $lookup: {
            from: 'categories',
            localField: 'category',
            foreignField: '_id',
            as: 'categoryName',
          },
        },
        {
          $unwind: {
            path: '$categoryName',
          },
        },
        {
          $project: {
            category: 0,
            createdAt: 0,
            updatedAt: 0,
            'categoryName.createdAt': 0,
            'categoryName.updatedAt': 0,
          },
        },
      ])
      console.log(allProduct)
      res.render('view_product', {
        allProduct,
      })
    } catch (error) {
      throw error
    }
  }
}

module.exports = new productController()
