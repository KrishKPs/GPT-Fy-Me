
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { SignupPage } from './Pages/SignupPage'
import {  Enterdata } from './Pages/EnterData'
import { Dashboard } from './Pages/Dashboard'
import { GPT } from './Pages/GPT'



function App() {


  return (
    <>
    <BrowserRouter> 
    <Routes>

   <Route path='/' element={<SignupPage/>}> </Route>
   <Route path='/datainput' element={<Enterdata/>}> </Route> 
   <Route path='/dashboard' element={<Dashboard/>}> </Route>
   <Route path='/gpt/:name' element={<GPT/>}></Route>

   


    </Routes>
    
    </BrowserRouter>
   
     
    </>
  )
}

export default App
