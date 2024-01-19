import React, { useEffect, useState } from 'react';
import PostItem from '../componentPostItem/PostItem';
import './DisplayPostList.scss';

type TDisplayPostList = {
    RecentBlogPosts?: boolean;
    AllBlogPosts?: boolean;
    AllRecentBlogPosts?: boolean;
    DataPosts: any;
    title: string;
};

type TUseChangeParameterGrid = {
    parameter: string;
    windowWidth: number;
};

const changeParameterGrid = (value1: string = '', value2?: string, value3?: string): TUseChangeParameterGrid => {
    let parameter: string = value1;

    const windowWidth = window.innerWidth;
    if (windowWidth <= 1300 && windowWidth > 868) {
        parameter = value2 || value1;
        return { parameter, windowWidth };
    } else if (windowWidth <= 868) {
        parameter = value3 || value1;
        return { parameter, windowWidth };
    } else {
        return { parameter, windowWidth };
    };
};


const DisplayPostList: React.FC<TDisplayPostList> = ({ RecentBlogPosts, AllBlogPosts, AllRecentBlogPosts, DataPosts, title }: TDisplayPostList) => {
    const [displayPostItemTwo, setDisplayPostItemTwo] = useState<string>('flex');
    const [displayPostItemThree, setDisplayPostItemThree] = useState<string>('flex');
    const [displayPostItemFour, setDisplayPostItemFour] = useState<string>('');
    const [dataPosts, setdataPosts] = useState<any>(DataPosts);
    const [displayPostItemTwoWidth, setDisplayPostItemTwoWidth] = useState<number>(window.innerWidth);

    const [displayPostItemFourWidth, setDisplayPostItemFourWidth] = useState<string>((): string => {
        const windowWidth = window.innerWidth;
        if (RecentBlogPosts) {
            if (windowWidth <= 1300 && windowWidth > 868) {
                return '100%';
            } else if (windowWidth <= 868) {
                return '100%';
            } else {
                return '50%';
            };
        } else {
            return '';
        };
    });
    const [classNameContentPosts, setClassNameContentPosts] = useState<string>((): string => {
        if (RecentBlogPosts === true) {
            return 'DisplayPostList_content';
        } else if (AllBlogPosts === true) {
            return 'DisplayPostList_contentAllBlogPosts';
        } else if (AllRecentBlogPosts === true) {
            return '';
        } else {
            return '';
        };
    });

    const [valueAreaPostItemOne, setValueAreaPostItemOne] = useState<string>((): string => {
        if (RecentBlogPosts) {
            const data: TUseChangeParameterGrid = changeParameterGrid('1 / 1 / 3 / 2', '1 / 1 / 2 / 3', '1 / 1 / 2 / 3')
            if (data.windowWidth <= 1300 && data.windowWidth > 868) {
                setDisplayPostItemFour('block');
                setDisplayPostItemTwo('flex');
                setDisplayPostItemThree('flex');
            } else if (data.windowWidth <= 868) {
                setDisplayPostItemTwo('block');
                setDisplayPostItemThree('block');
            } else {
                setDisplayPostItemFour('flex')
            };
            return data.parameter;
        } else {
            return '';
        };
    });
    const [valueAreaPostItemTwo, setValueAreaPostItemTwo] = useState<string>((): string => {
        if (RecentBlogPosts) {
            const data: TUseChangeParameterGrid = changeParameterGrid('1 / 2 / 2 / 3', '2 / 1 / 3 / 3', '2 / 1 / 3 / 3');
            return data.parameter;
        } else {
            return '';
        };
    });
    const [valueAreaPostItemThree, setValueAreaPostItemThree] = useState<string>((): string => {
        if (RecentBlogPosts) {
            const data: TUseChangeParameterGrid = changeParameterGrid('2 / 2 / 3 / 3', '3 / 1 / 4 / 3', '3 / 1 / 4 / 3');
            return data.parameter;
        } else {
            return '';
        };
    });
    const [valueAreaPostItemFour, setValueAreaPostItemFour] = useState<string>((): string => {
        if (RecentBlogPosts) {
            const data: TUseChangeParameterGrid = changeParameterGrid('3 / 1 / 4 / 3', '4 / 1 / 5 / 3', '4 / 1 / 5 / 3');
            return data.parameter;
        } else {
            return '';
        };
    });
    const [widthItem, setWidthItem] = useState<string>((): string => {
        if (AllBlogPosts) {
            const windowWidth = window.innerWidth;
            if (windowWidth <= 1300 && windowWidth > 868) {
                return '44%';
            } else if (windowWidth <= 868) {
                return '100%';
            } else {
                return '30%';
            };
        } else {
            return '';
        };
    });

    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            setDisplayPostItemTwoWidth(windowWidth)
            if (RecentBlogPosts) {
                if (windowWidth <= 1300 && windowWidth > 868) {
                    setValueAreaPostItemOne('1 / 1 / 2 / 3');
                    setValueAreaPostItemTwo('2 / 1 / 3 / 3');
                    setValueAreaPostItemThree('3 / 1 / 4 / 3');
                    setValueAreaPostItemFour('4 / 1 / 5 / 3');
                    setDisplayPostItemFour('block');
                    setDisplayPostItemTwo('flex');
                    setDisplayPostItemThree('flex');
                    setDisplayPostItemFourWidth('100%');
                } else if (windowWidth <= 868) {
                    setValueAreaPostItemOne('1 / 1 / 2 / 3');
                    setValueAreaPostItemTwo('2 / 1 / 3 / 3');
                    setValueAreaPostItemThree('3 / 1 / 4 / 3');
                    setValueAreaPostItemFour('4 / 1 / 5 / 3');
                    setDisplayPostItemTwo('block');
                    setDisplayPostItemThree('block');
                } else {
                    setValueAreaPostItemOne('1 / 1 / 3 / 2');
                    setValueAreaPostItemTwo('1 / 2 / 2 / 3');
                    setValueAreaPostItemThree('2 / 2 / 3 / 3');
                    setValueAreaPostItemFour('3 / 1 / 4 / 3');
                    setDisplayPostItemFour('flex');
                    setDisplayPostItemTwo('flex');
                    setDisplayPostItemThree('flex');
                    setDisplayPostItemFourWidth('50%');
                };
            } else if (AllBlogPosts) {
                if (windowWidth <= 1300 && windowWidth > 868) {
                    setWidthItem('44%');
                } else if (windowWidth <= 868) {
                    setWidthItem('100%');
                } else {
                    setWidthItem('30%');
                };
            };
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [RecentBlogPosts, AllBlogPosts]);

    useEffect(() => {
        setdataPosts(DataPosts);
        console.log('dataPosts1111111: ', dataPosts);
    }, [DataPosts, dataPosts]);

    return (
        <div className='DisplayPostList'>
            <h2 className='DisplayPostList_title'>
                {title}
            </h2>
            <div className={`${classNameContentPosts}`} >
                {
                    RecentBlogPosts === true && dataPosts.length > 0 ?
                        dataPosts.map((element: any, index: number) => {
                            switch (index) {
                                case 0:
                                    return <PostItem key={index} element={element} display='block' widthImg='100%' widthContent='100%' STT={`${valueAreaPostItemOne}`} />;
                                case 1:
                                    return <PostItem
                                        key={index}
                                        element={element}
                                        display={`${displayPostItemTwo}`}
                                        widthImg={
                                            displayPostItemTwoWidth < 1300
                                                ? displayPostItemTwoWidth < 1000
                                                    ? '100%'
                                                    : '50%'
                                                : '35%'
                                        }
                                        widthContent={
                                            displayPostItemTwoWidth < 1300
                                                ? displayPostItemTwoWidth < 1000
                                                    ? '100%'
                                                    : '50%'
                                                : '65%'
                                        }
                                        p={displayPostItemTwo === 'flex' ? '0px 30px' : ''}
                                        STT={`${valueAreaPostItemTwo}`}
                                    />;
                                case 2:
                                    return <PostItem
                                        key={index}
                                        element={element}
                                        display={`${displayPostItemThree}`}
                                        widthImg={
                                            displayPostItemTwoWidth < 1300
                                                ? displayPostItemTwoWidth < 1000
                                                    ? '100%'
                                                    : '50%'
                                                : '35%'
                                        }
                                        widthContent={
                                            displayPostItemTwoWidth < 1300
                                                ? displayPostItemTwoWidth < 1000
                                                    ? '100%'
                                                    : '50%'
                                                : '65%'
                                        }
                                        p={displayPostItemThree === 'flex' ? '0px 30px' : ''}
                                        STT={`${valueAreaPostItemThree}`}
                                    />;
                                case 3:
                                    return <PostItem key={index} element={element} display={`${displayPostItemFour}`} widthImg={displayPostItemFourWidth} widthContent={displayPostItemFourWidth} p={displayPostItemFour === 'flex' ? '0px 30px' : ''} STT={`${valueAreaPostItemFour}`} />;
                                default:
                                    return null;
                            }
                        }) : null
                }
                {
                    AllBlogPosts === true && dataPosts.length > 0 ?
                        dataPosts.map((element: any, index: number) => {
                            return (
                                <PostItem key={index} display='block' widthItem={`${widthItem}`} widthImg='100%' element={element} />
                            )
                        }) : null
                }
            </div>
        </div >
    );
};

export default DisplayPostList;