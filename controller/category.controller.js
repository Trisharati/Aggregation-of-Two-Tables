const Category = require('../model/category.model')
class categoryControllers {
  /**
   * @Method showForm
   * @Description To Show The Category Form
   */

  async showForm(req, res) {
    try {
      res.render('add_category')
    } catch (error) {
      throw error
    }
  }
  /**
   * @Method addCategory
   * @Description To add The Category
   */
  async addCategory(req, res) {
    try {
      req.body.category = req.body.category.trim()
      let saveCategory = await Category.create(req.body)
      if (saveCategory && saveCategory._id) {
        console.log('Category Created')
        res.redirect('/show-form')
      } else {
        console.log('Category Not Created')
        res.redirect('/show-form')
      }
    } catch (error) {
      throw error
    }
  }

  /**
   * @Method viewCategory
   * @Description To View The Category
   */

  async viewCategory(req, res) {
    try {
      let allCategory = await Category.find()
      res.render('view_category', {
        allCategory,
      })
    } catch (error) {
      throw error
    }
  }
}

module.exports = new categoryControllers()
