import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './context/productContex.jsx'
import { FilterContextProvider } from './context/filter_context.jsx'
import { CartProvider } from './context/cart_context.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
    <FilterContextProvider>
      <CartProvider>
    <App />
    <ToastContainer
    position="top-right"
    autoClose={2000}
    hideProgressBar
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    bodyClassName="toastBody"
    />
    </CartProvider>
    </FilterContextProvider>
    </AppProvider>
  </StrictMode>
);
 