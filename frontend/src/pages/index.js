import {lazy} from "react";

export const LoginPage = lazy(() => import("./LoginPage").then(LoginPage));
export const HomePage = lazy(() => import("./HomePage").then(HomePage));
export const WomenPage = lazy(() => import("./WomenPage").then(WomenPage));
export const MenPage = lazy(() => import("./MenPage").then(MenPage));
export const ProductDetailsPage = lazy(() => import("./ProductDetailsPage").then(ProductDetailsPage));
export const CartPage = lazy(() => import("./CartPage").then(CartPage));
export const FavoriteProductsPage = lazy(() => import("./FavoriteProductsPage").then(FavoriteProductsPage));
export const SalesPage = lazy(() => import("./SalesPage").then(SalesPage));
export const ProfilePage = lazy(() => import("./ProfilePage").then(ProfilePage));
export const ShippingPage = lazy(() => import("./ShippingPage").then(ShippingPage));
export const PaymentPage = lazy(() => import("./PaymentPage").then(PaymentPage));
export const CreateOrderPage = lazy(() => import("./CreateOrderPage").then(CreateOrderPage));
export const OrderDetailsPage = lazy(() => import("./OrderDetailsPage").then(OrderDetailsPage));
export const AdminCustomers = lazy(() => import("./AdminCustomers").then(AdminCustomers));

