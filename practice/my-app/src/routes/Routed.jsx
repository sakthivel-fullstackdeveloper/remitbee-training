import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Counter from '../pages/Counter';
import Items from '../pages/Items';
import Login from '../pages/Login';


const Routed = () => {
    
    const user = !!localStorage.getItem("user") && !!localStorage.getItem("logged");
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/counter" element={user ? <Counter /> : <Navigate to="/login" />} />
                <Route path="/item" element={user ? <Items /> : <Navigate to="/login" />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/logout" element={()=>{localStorage.setItem("logged","")}} />
            </Routes>
        </BrowserRouter>
    );
}
export default Routed;