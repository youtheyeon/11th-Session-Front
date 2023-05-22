import { Routes, Route, Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import NavLinkHomePage from './pages/navlink/NavLinkHomePage';
import NavLinkMyPage from './pages/navlink/NavLinkMyPage';

const NavLinkRoutes = () => {
    return (
        <>
            <NavContainer>
                <Link className='back' to='/'>
                    Google 메인으로
                </Link>
                <div className='inner'>
                    <p>a tag</p>
                    <a href='/navlink/home'>HOME</a>
                    <a href='/navlink/mypage'>MY</a>
                </div>
                <div className='inner'>
                    <p>React-Router-Dom Link</p>
                    <Link to='/navlink/home'>HOME</Link>
                    <Link to='/navlink/mypage'>MY</Link>
                </div>
                <div className='inner'>
                    <p>React-Router-Dom NavLink</p>
                    <NavLink to='/navlink/home'>HOME</NavLink>
                    <NavLink to='/navlink/mypage'>MY</NavLink>
                </div>
            </NavContainer>
            <Routes>
                <Route path='/home' element={<NavLinkHomePage />} />
                <Route path='/mypage' element={<NavLinkMyPage />} />
            </Routes>
        </>
    );
};

export default NavLinkRoutes;

const NavContainer = styled.nav`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .back {
        flex-shrink: 0;
        text-decoration: underline;
        color: dimgray;
        :hover {
            color: black;
        }
    }
    .inner {
        display: flex;
        align-items: center;
    }
    p {
        margin: 15px 30px 15px 50px;
        font-weight: 300;
        color: darkgray;
        flex-shrink: 0;
    }
    a {
        padding: 3px 10px;
        text-decoration: none;
        font-weight: 600;
        color: midnightblue;
        :hover {
            color: steelblue;
        }
    }
    .active {
        background-color: lightblue;
    }
`;
