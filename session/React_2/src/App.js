import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import SearchResultPage from './pages/SearchResultPage';
import DetailPage from './pages/DetailPage';
import NavLinkRoutes from './NavLinkRoutes';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/search' element={<SearchResultPage />} />
                <Route path='/detail/:id' element={<DetailPage />} />
                <Route path='/navlink/*' element={<NavLinkRoutes />} />
                <Route path='*' element={<h1>404 Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
