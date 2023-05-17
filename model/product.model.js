const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: String,
      required: true,
    },
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'category'
  }
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = new mongoose.model('product', productSchema)
