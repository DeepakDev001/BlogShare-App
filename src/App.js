import './App.css';
import { Fragment } from 'react';
import Home from './Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogDetailPage from './components/BlogDetailPage';

function App() {

  //================= Main_Retrun_Function ===============//
  return (
    <Fragment>
      <div className='App-header'>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/BlogDetailPage' element={<BlogDetailPage />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </Fragment>

  );
}

export default App;
