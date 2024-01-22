import { TContextApp, contextApp } from '../../App';
import { useContext } from 'react';
import './Footer.scss';

const Footer = () => {
    const dataContextApp: TContextApp = useContext(contextApp);
    const isCheckTheme = dataContextApp.isCheckTheme;

    return (
        <footer className={`container_footer ${isCheckTheme === true ? 'chageBgColorDark ' : 'chageBgColorbright'}`}>
            <ul className='container_footer_list'>
                <li className={`container_footer_list_item ${isCheckTheme === true ? 'chageColorDark ' : 'chageColorbright'}`}>
                    <a href="" className={` `}>© 2023</a>
                </li>
                <li className={`container_footer_list_item ${isCheckTheme === true ? 'chageColorDark ' : 'chageColorbright'}`}>
                    <a href="" >Twitter</a>
                </li>
                <li className={`container_footer_list_item ${isCheckTheme === true ? 'chageColorDark ' : 'chageColorbright'}`}>
                    <a href="" >LinkedIn</a>
                </li>
                <li className={`container_footer_list_item ${isCheckTheme === true ? 'chageColorDark ' : 'chageColorbright'}`}>
                    <a href="" >Email</a>
                </li>
                <li className={`container_footer_list_item ${isCheckTheme === true ? 'chageColorDark ' : 'chageColorbright'}`}>
                    <a href="" >RSS feed</a>
                </li>
                <li className={`container_footer_list_item ${isCheckTheme === true ? 'chageColorDark ' : 'chageColorbright'}`}>
                    <a href="" >Add to Feedly</a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;