import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    const [isCheckActives, setIsCheckActive] = useState<string>('Blog');
    const [isCheckChageTheme, setIsCheckChageTheme] = useState<boolean>(false);
    const [isDisplayBars, setIsDisplayBars] = useState<boolean>((): boolean => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 1024) {
            return true;
        } else {
            return false;
        };
    });

    const handleOnclickActiveNavbar = (name: string): void => {
        switch (name) {
            case 'Blog':
                setIsCheckActive('Blog');
                break;
            case 'Project':
                setIsCheckActive('Project');
                break;
            case 'About':
                setIsCheckActive('About');
                break;
            case 'Newsletter':
                setIsCheckActive('Newsletter');
                break;
            default:
                setIsCheckActive('Blog');
        };
    };

    const handleOnclickChangeTheme = (): void => {
        setIsCheckChageTheme(!isCheckChageTheme);
    };

    const HandleDisplayMobile = (): void => {
        setIsDisplayBars(!isDisplayBars);
    };

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            if (windowWidth >= 1024) {
                setIsDisplayBars(false);
            } else {
                setIsDisplayBars(true);
            };
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className='header '>
            <h1 className="header_logo ">
                Quinn
            </h1>
            {isDisplayBars === false ?
                <div className='header_navbar'>
                    <div className='header_navbar_list '>
                        <Link to='/' className={isCheckActives === 'Blog' ? 'header_navbar_list_item active' : 'header_navbar_list_item hover'} onClick={() => handleOnclickActiveNavbar('Blog')}>
                            Blog
                        </Link>
                        <Link to='/Project' className={isCheckActives === 'Project' ? 'header_navbar_list_item active' : 'header_navbar_list_item hover'} onClick={() => handleOnclickActiveNavbar('Project')}>
                            Project
                        </Link>
                        <Link to='/About' className={isCheckActives === 'About' ? 'header_navbar_list_item active' : 'header_navbar_list_item hover'} onClick={() => handleOnclickActiveNavbar('About')}>
                            About
                        </Link>
                        <Link to='/Newsletter' className={isCheckActives === 'Newsletter' ? 'header_navbar_list_item active' : 'header_navbar_list_item hover'} onClick={() => handleOnclickActiveNavbar('Newsletter')}>
                            Newsletter
                        </Link>
                        <li className='header_navbar_list_item'>
                            <div className='header_navbar_list_item_containerTheme'>
                                {isCheckChageTheme === true ? <i className="fa-regular fa-sun header_navbar_list_item_containerTheme_iconSun" onClick={() => handleOnclickChangeTheme()}></i> : <div className='header_navbar_list_item_containerTheme_iconShapeCircle'></div>}
                                {isCheckChageTheme === false ? <i className="fa-regular fa-moon header_navbar_list_item_containerTheme_iconMoon" onClick={() => handleOnclickChangeTheme()}></i> : <div className='header_navbar_list_item_containerTheme_iconShapeCircle'></div>}
                            </div>
                        </li>
                        <li className='header_navbar_list_item header_navbar_list_item_iconClose' onClick={() => HandleDisplayMobile()}>
                            <i className="fa-solid fa-xmark "></i>
                        </li>
                    </div>
                </div> : <div></div>}
            <button className='header_btnMobile' onClick={() => HandleDisplayMobile()}>
                <i className="fa-solid fa-bars"></i>
            </button>
        </header>
    );
};

export default Header;