
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Dashboard from './Components/Dashboard/Dashboard';
import Error from './Components/Error/Error';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import Review from './Components/Review/Review';
import Title from './Components/Title/Title';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Title></Title>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
