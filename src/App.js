import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Home from './Pages/Home/home';
import { createContext } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
const MyContext = createContext();
function App() {
  
  const [contryList,setContryList]= useState([]);

  const [selectedCountry,setselectedCountry] = useState('');

  useEffect(()=> {
    getConutry("https://countriesnow.space/api/v0.1/countries/")
  },[]);

  const getConutry= async (url) =>{
    const responsive = await axios.get(url).then((res)=>{
     setContryList(res.data.data)
     console.log(res.data.data);
     
      
    })
  }
  const values = {
    contryList,
    setselectedCountry,
    selectedCountry

  }
  return (
   <BrowserRouter>
   <MyContext.Provider value={values}>
   <Header/>
    <Routes>
      <Route path="/" exact={true} element={<Home />}/>
    </Routes>
    </MyContext.Provider>
   </BrowserRouter>
  );
}

export default App;
export {MyContext}
