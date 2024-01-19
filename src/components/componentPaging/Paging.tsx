import React, { useState, useEffect } from 'react';
import './Paging.scss';

const Paging = () => {
    const [changeLayout, setChangeLayout] = useState<string>((): string => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 640) {
            return 'block';
        } else {
            return 'flex'
        };
    });

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            if (windowWidth <= 640) {
                setChangeLayout('block');
            } else {
                setChangeLayout('flex');
            };
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="container_paging" style={{ display: `${changeLayout}` }}>
            <div className='container_paging_previous'>
                <i className="fa-solid fa-arrow-left"></i>
                Previous
            </div>
            <ul className='container_paging_content_list' >
                <li className='container_paging_content_list_item active'>
                    1
                </li>
                <li className='container_paging_content_list_item'>
                    2
                </li>
                <li className='container_paging_content_list_item'>
                    3
                </li>
                <li className='container_paging_content_list_item_notHover'>
                    ...
                </li>
                <li className='container_paging_content_list_item'>
                    8
                </li>
                <li className='container_paging_content_list_item'>
                    9
                </li>
                <li className='container_paging_content_list_item'>
                    10
                </li>
            </ul>
            <div className='container_paging_next' >
                Next
                <i className="fa-solid fa-arrow-right"></i>
            </div>
        </div>
    );
};

export default Paging;