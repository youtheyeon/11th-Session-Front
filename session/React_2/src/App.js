import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import SearchResultPage from './pages/SearchResultPage';
import DetailPage from './pages/DetailPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/search' element={<SearchResultPage />} />
                <Route path='/detail/:id' element={<DetailPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
