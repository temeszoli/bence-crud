import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import HomeComponent from './components/HomeComponent'
import CreateComponent from './components/CreateComponent'
import ReadComponent from './components/ReadComponent'
import UpdateComponent from './components/UpdateComponent'
import Footer from './components/Footer'
import { DataProvider } from './components/DataContext';

import './input.scss';

function App() {
  return (
    <DataProvider>
    <div className='app'>
      <Header />
      <Routes>
        <Route  path='/' element={<HomeComponent />}/>
        <Route  path='/read' element={<ReadComponent />}/>
        <Route  path='/create' element={<CreateComponent />}/>
        <Route  path='/update/:id' element={<UpdateComponent />}/>
      </Routes>
      <Footer />
    </div>
    </DataProvider>
  )
}

export default App
