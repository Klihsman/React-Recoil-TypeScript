import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Register from './Pages/Register';
import Login from './Pages/Login';
import ProtectedRoute from "./ProtectedRoute";
import In from "./Pages/In";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logged" element={
                    <ProtectedRoute component={In}/>
                } />
            </Routes>
        </BrowserRouter>
    )
};