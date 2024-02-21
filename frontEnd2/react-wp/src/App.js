import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBarComponent from './components/NavBarComponent';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBarComponent></NavBarComponent>
        <Container fluid>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/article" element={<ArticlePage />}></Route>
            <Route path="/post/:id" element={<DetailPage />}></Route>
            <Route path="/search/:query" element={<SearchPage />}></Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
