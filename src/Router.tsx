import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from './Pages/Home';
import Login from './Pages/Login';
import ProtectedRoute from "./ProtectedRoute";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={
                    <ProtectedRoute component={Home} />
                } />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
};