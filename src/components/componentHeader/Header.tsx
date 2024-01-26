import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { contextApp, TContextApp } from '../../App';
import { TColorTheme } from '../../constant/Color';
import { scrollToTop } from '../../utils/animationscrollToTop';

const Header = () => {
    const dataContextApp: TContextApp = useContext(contextApp);
    const isCheckTheme = dataContextApp.isCheckTheme;
    const [isCheckActives, setIsCheckActive] = useState<string>('Blog');
    const [isCheckChageTheme, setIsCheckChageTheme] = useState<boolean>(false);
    const [widthWindown, setWidthWindown] = useState<number>(window.innerWidth);
    const [showBoxShadow, setShowBoxShadow] = useState<boolean>(false);
    const [isDisplayBars, setIsDisplayBars] = useState<boolean>((): boolean => {
        const windowWidth = window.innerWidth;
        if (windowWidth < 1024) {
            return true;
        } else {
            return false;
        };
    });

    const handleOnclickActiveNavbar = (name: string): void => {
        switch (name) {
            case 'Blog':
                setIsCheckActive('Blog');
                if (widthWindown < 1024) {
                    setIsDisplayBars(true);
                } else {
                    setIsDisplayBars(false);
                };
                scrollToTop();
                break;
            case 'Project':
                setIsCheckActive('Project');
                if (widthWindown < 1024) {
                    setIsDisplayBars(true);
                } else {
                    setIsDisplayBars(false);
                };
                scrollToTop();
                break;
            case 'About':
                setIsCheckActive('About');
                if (widthWindown < 1024) {
                    setIsDisplayBars(true);
                } else {
                    setIsDisplayBars(false);
                };
                scrollToTop();
                break;
            case 'Newsletter':
                setIsCheckActive('Newsletter');
                if (widthWindown < 1024) {
                    setIsDisplayBars(true);
                } else {
                    setIsDisplayBars(false);
                };
                scrollToTop();
                break;
            default:
                if (widthWindown < 1024) {
                    setIsDisplayBars(true);
                } else {
                    setIsDisplayBars(false);
                };
                setIsCheckActive('Blog');
                scrollToTop();
        };
    };

    const handleOnclickChangeTheme = (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }

        setIsCheckChageTheme((prevState) => !prevState);
        console.log('Is Check Change Theme: ', isCheckChageTheme);
        dataContextApp.handleOnclickchangeIsCheckTheme();
    };

    const HandleDisplayMobile = (): void => {
        setIsDisplayBars(!isDisplayBars);
    };

    const handleOnlickScrollTop = (): void => {
        scrollToTop();
        handleOnclickActiveNavbar('Blog');
    };

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            setWidthWindown(windowWidth);
            if (windowWidth < 1024) {
                setIsDisplayBars(true);
            } else {
                setIsDisplayBars(false);
            };
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [widthWindown]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setShowBoxShadow(true);
            } else {
                setShowBoxShadow(false);
            };
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const htmlElement: HTMLElement = document.documentElement;
        if (isDisplayBars === false && widthWindown < 1024) {
            htmlElement.style.overflow = 'hidden';
        } else {
            htmlElement.style.overflow = 'auto';
        };
    }, [isDisplayBars]);

    return (
        <header className={`header ${showBoxShadow === true ? 'showBoxShadow' : ''} ${isCheckTheme === false ? 'chageColorDark' : 'chageColorbright'} `}>
            <h1 className={`header_logo ${isCheckTheme === true ? 'chageColorDark' : 'chageColorbright'}`} onClick={handleOnlickScrollTop}>
                <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                    Quinn
                </Link>
            </h1>
            {isDisplayBars === false ?
                <div className='header_navbar' style={{ backgroundColor: `${isCheckTheme === false ? `${TColorTheme.$colorThemeWhite}` : `${TColorTheme.$colorThemeDarkBackGreen}`}` }}>
                    <div className='header_navbar_list ' >
                        <Link
                            to='/'
                            className={isCheckActives === 'Blog' ?
                                `header_navbar_list_item   ${isCheckTheme === false ? 'chageColorDark active' : 'chageColorbright active-theme'} `
                                : `header_navbar_list_item  ${isCheckTheme === false ? 'chageColorDark hover' : 'chageColorbright hover-theme'}`}
                            onClick={() => handleOnclickActiveNavbar('Blog')}
                        >
                            Blog
                        </Link>
                        <Link to='/Project' className={isCheckActives === 'Project' ? `header_navbar_list_item  ${isCheckTheme === false ? 'chageColorDark active' : 'chageColorbright active-theme'} `
                            : `header_navbar_list_item  ${isCheckTheme === false ? 'chageColorDark hover' : 'chageColorbright hover-theme'}`} onClick={() => handleOnclickActiveNavbar('Project')}>
                            Project
                        </Link>
                        <Link to='/About' className={isCheckActives === 'About' ? `header_navbar_list_item  ${isCheckTheme === false ? 'chageColorDark active' : 'chageColorbright active-theme'} `
                            : `header_navbar_list_item  ${isCheckTheme === false ? 'chageColorDark hover' : 'chageColorbright hover-theme'}`} onClick={() => handleOnclickActiveNavbar('About')}>
                            About
                        </Link>
                        <Link to='/Newsletter' className={isCheckActives === 'Newsletter' ? `header_navbar_list_item  ${isCheckTheme === false ? 'chageColorDark active' : 'chageColorbright active-theme'} `
                            : `header_navbar_list_item  ${isCheckTheme === false ? 'chageColorDark hover' : 'chageColorbright hover-theme'}`} onClick={() => handleOnclickActiveNavbar('Newsletter')}>
                            Newsletter
                        </Link>
                        <li className='header_navbar_list_item ' >
                            {/* <div className={`header_navbar_list_item_containerTheme  ${isCheckTheme === false ? 'chageBgColorDark' : 'chageBgColorbright'}`}>
                                {isCheckChageTheme === true ? <i className={`fa-regular fa-sun header_navbar_list_item_containerTheme_iconSun ${isCheckTheme === false ? 'chageColorDark' : 'chageColorbright'}`} onClick={() => handleOnclickChangeTheme()}></i> : <div className={`header_navbar_list_item_containerTheme_iconShapeCircle ${isCheckTheme === false ? 'chageBgColorDark' : 'chageBgColorbright'}`}></div>}
                                {isCheckChageTheme === false ? <i className={`fa-regular fa-moon header_navbar_list_item_containerTheme_iconMoon ${isCheckTheme === false ? 'chageColorDark' : 'chageColorbright'}`} onClick={() => handleOnclickChangeTheme()}></i> : <div className={`header_navbar_list_item_containerTheme_iconShapeCircle ${isCheckTheme === false ? 'chageBgColorDark' : 'chageBgColorbright'}`}></div>}
                            </div> */}
                            <label className="header_navbar_list_item_switch" onClick={(event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => handleOnclickChangeTheme(event)}>
                                <input type="checkbox" className='slider' checked={isCheckChageTheme} onChange={() => { }} />
                                <span className={`header_navbar_list_item_switch_slider round ${isCheckChageTheme === true ? 'slider' : ''} `}></span>
                            </label>

                        </li>
                        <li className='header_navbar_list_item header_navbar_list_item_iconClose' onClick={() => HandleDisplayMobile()} style={{ color: `${isCheckTheme === true ? `${TColorTheme.$colorThemeWhite}` : `${TColorTheme.$colorThemeDarkBackGreen}`}` }}>
                            <i className="fa-solid fa-xmark "></i>
                        </li>
                    </div>
                </div> : <div></div>}
            <button className={`header_btnMobile ${isCheckTheme === false ? 'chageColorDark ' : 'chageColorbright'}`} onClick={() => HandleDisplayMobile()}>
                <i className="fa-solid fa-bars"></i>
            </button>
        </header>
    );
};

export default Header;