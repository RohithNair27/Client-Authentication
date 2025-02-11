import {BrowserRouter,Routes,Route} from 'react-router'
import LoginPage from '../pages/Auth/LoginPage'
import SignupPage from '../pages/Auth/SignupPage'
import Header from '../components/Header'
function Router(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Router