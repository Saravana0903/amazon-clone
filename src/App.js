import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import {useEffect} from 'react'
import './App.css';
import Home from './Home'
import Login from "./Login"
import Header from './Header'
import Checkout from './Checkout'
import {auth} from './firebase'
import {useStateValue} from './StateProvider'
function App() {
  
  const [{basket},dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
  
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
      
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  },[])
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}  />
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
