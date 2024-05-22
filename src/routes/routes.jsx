import { Route, Routes } from 'react-router-dom'

import Detail from '../containers/Detail'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Movies from '../containers/Movies'
import Search from '../containers/Search'
import Series from '../containers/Series'
import DefaultLayout from '../layout/DefaultLayout'

function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/detalhe/:id" element={<Detail />} />
        <Route path="/busca/:queryword" element={<Search />} />
      </Route>
    </Routes>
  )
}

export default Router
