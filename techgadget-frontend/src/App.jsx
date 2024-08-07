import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/HomePage";
import Blogs from "./pages/Blogs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermsOfService from "./pages/TermsOfService";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import Test from "./pages/Test";
import NotFound from "./pages/NotFound";
import AdminLayout from "./layouts/admin/AdminLayout";
import ProductsManagement from "./pages/admin/ProductsManagement";
import CustomersManagement from "./pages/admin/CustomersManagement";
// import CartsManagement from "./pages/admin/CartsManagement";
import OrdersManagement from "./pages/admin/OrdersManagement";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import AuthLayout from "./layouts/auth/AuthLayout";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import CheckoutSuccess from "./pages/checkout/CheckoutSuccess";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import ProtectedRouteAdmin from "./components/admin/ProtectedRouteAdmin";

//Test
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products/:categoryName" element={<ProductListPage />} />
        <Route path="product/:id" element={<ProductDetailPage />} />
        <Route path="cart" element={<CartPage />} />

        <Route path="blogs" element={<Blogs />} />
        <Route path="customer-service/contact" element={<Contact />} />
        <Route
          path="customer-service/privacy-policy"
          element={<PrivacyPolicy />}
        />
        <Route
          path="customer-service/refund-policy"
          element={<RefundPolicy />}
        />
        <Route
          path="customer-service/terms-of-service"
          element={<TermsOfService />}
        />
        <Route path="test" element={<Test />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="checkout_success" element={<CheckoutSuccess />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="/admin_auth" element={<AuthLayout />}>
        <Route index element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>

      <Route
        path="/admin"
        element={
          <ProtectedRouteAdmin>
            <AdminLayout />
          </ProtectedRouteAdmin>
        }
      >
        <Route index element={<ProductsManagement />} />
        <Route path="customers-management" element={<CustomersManagement />} />
        {/* <Route path="carts-management" element={<CartsManagement />} /> */}
        <Route path="orders-management" element={<OrdersManagement />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router}>
        <ScrollToTop />
      </RouterProvider>
    </>
  );
};

export default App;
