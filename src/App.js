import React , {useEffect,createContext , useReducer, useContext} from 'react';
import { Route, BrowserRouter , Switch , useHistory } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { reducer ,initialState } from './reducers/userReducer';
import './App.css';
import Appointment from './components/Appointment';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import M from 'materialize-css';

export const UserContext = createContext();

const Routing = ()=>{

    const history = useHistory();
    const {state , dispatch} =useContext(UserContext);

    useEffect(()=>{
        const user =JSON.parse(localStorage.getItem("user"))
    
        if(user){
            dispatch({type :"USER", payload:user})
            history.push('/')
        }else{
            history.push('/')
        }
    },[])

    
    
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route path="/signin">
                <Signin/>
            </Route>

            <Route path="/signup">
                <Signup/>
            </Route>

            <Route path="/appointment">
                <Appointment/>
            </Route>
        </Switch>

    )
}

function App() {

    const [state , dispatch] = useReducer(reducer , initialState);

    return (
        <UserContext.Provider value={{state,dispatch}}>      
                <div className="home">
                    <BrowserRouter>
                        <Navbar/>
                        <Routing/>
                    </BrowserRouter>
                </div>
                {/* Add Componet List Here */}
            
                <div className="back-all">
                    <About/>
                    <Contact/>
                    <Footer/>
                </div>
        </UserContext.Provider>
    );
}

export default App;
