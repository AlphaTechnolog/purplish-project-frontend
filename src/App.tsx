import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./views/Home";
import WarehouseDetail from "./views/WarehouseDetail";
import ItemsPage from "./views/Items";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/items" element={<ItemsPage />} />
                <Route path="/warehouses/:id" element={<WarehouseDetail />} />
            </Routes>
        </BrowserRouter>
    );
}
