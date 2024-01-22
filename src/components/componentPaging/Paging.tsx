import { useState, useEffect, useContext } from 'react';
import { TContextApp, contextApp } from '../../App';
import './Paging.scss';

const Paging = () => {
    const dataContextApp: TContextApp = useContext(contextApp);
    const [changeLayout, setChangeLayout] = useState<string>(() => {
        const windowWidth = window.innerWidth;
        return windowWidth <= 640 ? 'block' : 'flex';
    });
    const [activePage, setActivePage] = useState<number>(1);
    const [visiblePages, setVisiblePages] = useState<number[]>([1, 2, 3]);

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            setChangeLayout(windowWidth <= 640 ? 'block' : 'flex');
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handlePageClick = (pageNumber: number) => {
        const newActivePage = Math.max(1, pageNumber);
        setActivePage(newActivePage);
        dataContextApp.handleOnlickUpdatePageAndPostsPerPage(newActivePage, 6);
        const newVisiblePages = Array.from({ length: 3 }, (_, index) => newActivePage - 1 + index);
        setVisiblePages(newVisiblePages);
    };

    return (
        <div className="container_paging" style={{ display: changeLayout }}>
            <div className="container_paging_previous" onClick={() => handlePageClick(activePage - 1)}>
                <i className="fa-solid fa-arrow-left"></i> Previous
            </div>
            <ul className="container_paging_content_list">
                <li className='container_paging_content_list_item_notHover notActive'><i className="fa-solid fa-angles-left"></i></li>
                <li className='container_paging_content_list_item_notHover notActive'><i className="fa-solid fa-angle-left"></i></li>
                {visiblePages.map((pageNumber) => (
                    <li
                        key={pageNumber}
                        className={`container_paging_content_list_item ${pageNumber === activePage ? 'active' : ''}`}
                        onClick={() => handlePageClick(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                ))}
                <li className='container_paging_content_list_item_notHover notActive'><i className="fa-solid fa-angle-right"></i></li>
                <li className='container_paging_content_list_item_notHover notActive'><i className="fa-solid fa-angles-right"></i></li>
            </ul>
            <div className="container_paging_next" onClick={() => handlePageClick(activePage + 1)}>
                Next <i className="fa-solid fa-arrow-right"></i>
            </div>
        </div>
    );
};

export default Paging;
