import {Schema, model} from "mongoose";


const productSchema = new Schema({
  name: { type: String, required: false },
  productImage: { type: Buffer, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category' }
});

const Product = new model('Product', productSchema);

export default Product;