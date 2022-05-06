import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './Components/AddItems/AddItems';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import RequireAuth from './Components/Login/RequireAuth/RequireAuth';
import ManageItems from './Components/ManageItems/ManageItems';
import MyItems from './Components/MyItems/MyItems';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import NotFound from './Components/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/manageitems' element={
          <RequireAuth>
            <ManageItems />
          </RequireAuth>
        } />
        <Route path='/add/additems' element={
          <RequireAuth>
            <AddItems />
          </RequireAuth>
        } />
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        } />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
