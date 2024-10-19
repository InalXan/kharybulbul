import {model, Schema} from "mongoose";

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    categoryImage: {
        type: Buffer,
        required: true
    },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

const Category = model("Category", CategorySchema);

export default Category;