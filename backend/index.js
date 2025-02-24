import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import {connectDB} from './config/mongoDB.js';
import connectCloudinary from './config/cloudinary.js';
import userRoutes from './routes/user.route.js';
import productRoutes from './routes/product.route.js';
import cartRoutes from './routes/cart.route.js';
import orderRoutes from './routes/order.route.js'
import contactRoutes from './routes/contact.route.js'
const app = express();
app.use(cors());
app.use(express.json());
connectDB();
connectCloudinary();

app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/order', orderRoutes);
app.use("/api/contact", contactRoutes);

app.get('/', (req, res) => res.send('API is running...'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
});
