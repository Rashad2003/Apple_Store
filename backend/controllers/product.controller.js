import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/product.model.js";


const addProduct = async (req, res) => {
  try {
    const { name, price, description, category, featured } = req.body;

    const image1 = req.files.image1 && req.files.image1[0]
    const image2 = req.files.image2 && req.files.image2[0]
    const image3 = req.files.image3 && req.files.image3[0]
    const image4 = req.files.image4 && req.files.image4[0]

    const images = [ image1, image2, image3, image4 ].filter((item) => item !== undefined)

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {resource_type: 'image'});
        return result.secure_url
      }) 
    )

    const productData = {
      name,
      price: Number(price),
      description,
      category,
      featured,
      image: imagesUrl,
      date: Date.now()
    }
    const product = new productModel(productData);
    await product.save();

    res.status(200).json({ message: "Product added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
    
  }
}

const listProducts = async (req, res) => {
try {
  const products = await productModel.find({});
  res.status(200).json({products})
} catch (error) {
  console.log(error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
}
}

const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.status(200).json({ message: "Product removed successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
}

const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.status(200).json({product});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
}

export { addProduct, listProducts, removeProduct, singleProduct };