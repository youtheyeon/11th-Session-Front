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
                {/* 구글 메인 페이지 */}
                <Route path='/' element={<MainPage />} />
                {/* 검색 결과 페이지 - URL parameter는 영향 x */}
                <Route path='/search' element={<SearchResultPage />} />
                {/* 각 게시글 상세 페이지 (글 & 댓글) */}
                <Route path='/detail/:id' element={<DetailPage />} />
                {/* 네비게이션 바 테스트 페이지, 중첩 라우팅 */}
                <Route path='/navlink/*' element={<NavLinkRoutes />} />
                {/* 위 모든 경로와 일치하지 않는, 정의되지 않은 path인 경우 */}
                <Route path='*' element={<h1>404 Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
