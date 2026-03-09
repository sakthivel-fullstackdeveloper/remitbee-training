import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Counter from '../pages/Counter';
import Items from '../pages/Items';
const Routed =()=>{
    return(
    <>
    <BrowserRouter>
    <Routes>
        <Route  element={<Counter/>} path='/counter' />
        <Route element={<Items/>} path='/lister'/>
        <Route element={<h1>hi home page</h1>} path='/' />
    </Routes>
    </BrowserRouter>
    </>);
}
export default Routed;