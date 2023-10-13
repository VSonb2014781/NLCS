
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OredrPage/OredrPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
import SignInPage from "../pages/SignInPage/SignInPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
 import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage"
export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader:true
 
    },
    {
        path: '/order',
        page: OrderPage,
        isShowHeader:true

 
    },
    {
        path: '/products',
        page: ProductsPage,
        isShowHeader:true 
 
    },
    {
        path:'/:type',
        page:TypeProductPage,
        isShowHeader:true 
    },
    {
        path:'/sign-in',
        page:SignInPage,
        isShowHeader:false
    },
    {
        path:'/sign-up',
        page:SignUpPage,
        isShowHeader:false
    },
    {
        path: '/product-details',
        page: ProductDetailsPage,
        isShowHeader: true
    },

    
    {
        path: '*',
        page: NotFoundPage
    }
    
]