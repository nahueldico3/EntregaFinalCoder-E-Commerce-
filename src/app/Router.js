import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Init from '../pages/Init';
import ItemListContainer from "../pages/ItemListContainer";
import ItemListContainerCategory from "../pages/ItemList"
import ItemDetailsContainer from "../pages/ItemDetailsContainer"
import Cart from "../pages/Cart"
import Checkout from "../pages/Checkout"

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Init />} />
                <Route path="/ItemListContainer" element={<ItemListContainer />} />
                <Route path="/ItemListContainerCategory" element={<ItemListContainerCategory />} />
                <Route path="/ItemDetailsContainer" element={<ItemDetailsContainer />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Checkout" element={<Checkout />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Router;