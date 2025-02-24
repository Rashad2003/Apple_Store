import userModel from "../models/user.model.js"

const addToCart = async (req, res) => {
  try {
    const {userId, itemId} = req.body;
    const userData = await userModel.findById(userId)
    let cartData = await userData.cartData;
    if (cartData[itemId]) {
      if (cartData[itemId]){
        cartData[itemId] += 1
      } else {
        cartData[itemId] = 1      
      }
    } else {
      cartData[itemId] = {}
      cartData[itemId] = 1
    }
    await userModel.findByIdAndUpdate(userId, {cartData})   
    res.status(200).json({ message: "Added to Cart" })
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }}

  const updateCart = async (req, res) => {
    try {
      const {userId, itemId, quantity} = req.body

      const userData = await userModel.findById(userId)
      let cartData = await userData.cartData;

      cartData[itemId] = quantity

      await userModel.findByIdAndUpdate(userId, {cartData})
      res.status(200).json({ message: "Cart Updated" })
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong", error: error.message });
    }}

    const getUserCart = async (req, res) => {
      try {
        const {userId} = req.body
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        res.status(200).json({ cartData })
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong", error: error.message });
      }}

      const clearCart = async (req, res) => {
        try {
          const { userId } = req.body;
      
          await userModel.findByIdAndUpdate(userId, { cartData: {} }); // Clear cart
      
          res.status(200).json({ message: "Cart cleared successfully" });
        } catch (error) {
          console.log(error);
          res.status(500).json({ message: "Something went wrong", error: error.message });
        }
      };

  export {addToCart, updateCart, getUserCart, clearCart};