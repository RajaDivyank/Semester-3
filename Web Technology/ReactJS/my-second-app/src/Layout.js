import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import MainContent from './MainContent';

export default function Layout(){
    return(<>
        <div><Header/></div>
        <div>
            <MainContent/>
        </div>
        <div />
        <div><Outlet/></div>
        <div><Footer/></div>
    </>);
}