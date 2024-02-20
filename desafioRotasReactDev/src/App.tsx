
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import HomeBody from './routes/Home/HomeBody'
import Products from './routes/Home/Products'
import Computers from './routes/Home/Products/Computers'

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Navigate to="/home" />} />
            <Route path="home" element={<HomeBody />} />
            <Route path="products" element={<Products />}>
              <Route path="computers" element={<Computers />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
