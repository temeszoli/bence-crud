import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import HomeComponent from './components/HomeComponent'
import CreateComponent from './components/CreateComponent'
import ReadComponent from './components/ReadComponent'
import UpdateComponent from './components/UpdateComponent'
import Footer from './components/Footer'

import './input.scss';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route  path='/' element={<HomeComponent />}/>
        <Route  path='/read' element={<ReadComponent />}/>
        <Route  path='/create' element={<CreateComponent />}/>
        <Route  path='/update' element={<UpdateComponent />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
