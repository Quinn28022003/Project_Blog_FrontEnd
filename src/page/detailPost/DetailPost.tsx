import { useContext, useEffect, useRef, useState } from 'react';
import DisplayPostList from '../../components/componentDisplayPostList/DisplayPostList';
import './DetailPost.scss';
import { TContextApp, contextApp } from '../../App';
import getDetailPost from '../../axios/getDetailPost';
import { useParams } from 'react-router-dom';
import imageDetailPost1 from '../../assets/image/Image1.png';
import imageDetailPost2 from '../../assets/image/Image2.png';
import imageDetailPost3 from '../../assets/image/Image3.png';
import imageDetailPost4 from '../../assets/image/Image4.png';
import imageDetailPost5 from '../../assets/image/Image5.png';
import imageDetailPost6 from '../../assets/image/Image6.png';
import imageDetailPost7 from '../../assets/image/Image7.png';
import imageDetailPost8 from '../../assets/image/Image8.png';
import imageDetailPost9 from '../../assets/image/Image9.png';
import imageDetailPost10 from '../../assets/image/Image10.png';
import Subscriber from '../../components/componentSubscriber/Subscriber';
import getTopicPosts from '../../axios/getTopicPosts';
import Button from '../../components/componentButton/Button';
import { TColorBackgroud, TColorText } from '../../assets/ts/Color';
import { scrollToTop } from '../../utils/animationscrollToTop';

const initGetTopicPosts = async (idPost: number): Promise<any> => {
    try {
        const resquestTopicPost = await getTopicPosts(idPost);
        return resquestTopicPost;
    } catch (error) {
        console.error('Error fetching topic posts:', error);
        return null;
    };
};

const DetailPost = () => {
    const dataContextApp = useContext<TContextApp>(contextApp);
    const isCheckTheme = dataContextApp.isCheckTheme;
    const [dataBlogPost, setDataBlogPost] = useState<any>([]);
    const [dataTopicPost, setDataTopicPost] = useState<any>([]);
    const [containerColorBg, setContainerColorbg] = useState<string[]>(Object.values(TColorBackgroud));
    const [containerColorText, setContainerColorText] = useState<string[]>(Object.values(TColorText));
    const [count, setCountBg] = useState<number>(Math.floor(Math.random() * containerColorBg.length));
    const [showButton, setShowButton] = useState<boolean>(false);
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const [showListRecentBlogPost, setShowListRecentBlogPost] = useState<boolean>((): boolean => {
        if (windowWidth < 1200) {
            return false;
        } else {
            return true;
        };
    });
    const { idPost } = useParams();
    const [loop, setloop] = useState<any[]>([
        imageDetailPost1,
        imageDetailPost2,
        imageDetailPost3,
        imageDetailPost4,
        imageDetailPost5,
        imageDetailPost6,
        imageDetailPost7,
        imageDetailPost8,
        imageDetailPost9,
        imageDetailPost10
    ]);

    const handleLinkClick = () => {
        scrollToTop();
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataBlogPosts = await getDetailPost(Number(idPost));
                const dataTopicPosts = await initGetTopicPosts(Number(idPost));
                setDataTopicPost(dataTopicPosts);
                setDataBlogPost(dataBlogPosts[0]);
            } catch (error) {
                console.error('Error fetching topic posts:', error);
            };
        };
        fetchData();
    }, [idPost]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            };
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = (): void => {
            const windowWidth: number = window.innerWidth;
            if (windowWidth < 1200) {
                setShowListRecentBlogPost(false);
            } else {
                setShowListRecentBlogPost(true);

            };
            setWindowWidth(windowWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [windowWidth]);

    const handleOnclickChageShowListRecentBlogPosts = (): void => {
        setShowListRecentBlogPost(!showListRecentBlogPost)
    };

    return (
        <div className={`detailPost ${isCheckTheme === true ? 'chageBgColorDark ' : 'chageBgColorbright'}`}>
            <div className={showListRecentBlogPost === true ? 'detailPost_list show' : 'detailPost_list hiddent'}>
                {
                    windowWidth < 1200 ?
                        <button className='detailPost_list_btn-left' onClick={handleOnclickChageShowListRecentBlogPosts} style={{ display: `${showListRecentBlogPost === true ? 'block' : 'none'}` }}>
                            <i className="fa-solid fa-arrow-left"></i>
                        </button> : null
                }
                <DisplayPostList title='Recent blog posts' AllRecentBlogPosts DataPosts={dataContextApp.dataGetRecentBlog} />
            </div>
            <button className='detailPost_list_btn-right ' onClick={handleOnclickChageShowListRecentBlogPosts} style={{ display: `${showListRecentBlogPost === false ? 'block' : 'none'}` }}>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
            <div className='detailPost_content'>
                <h4 className='detailPost_content_text'>
                    {dataBlogPost.authorName} • {dataBlogPost.FormattedDate}
                </h4>
                <h2 className={`detailPost_content_title ${isCheckTheme === true ? 'chageColorDark ' : 'chageColorbright'}`}>
                    {dataBlogPost.title}
                </h2>
                <img src={`data:image/png;base64,${dataBlogPost.image}`} alt="" className='detailPost_content_image' />
                <p className={`${isCheckTheme === true ? 'chageColorDark ' : 'chageColorbright'}`}>
                    A grid system is a design tool used to arrange content on a webpage.
                    It is a series of vertical and horizontal lines that create a matrix of intersecting points,
                    which can be used to align and organize page elements. Grid systems are used to create a consistent
                    look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.
                </p>
                <p className={`${isCheckTheme === true ? 'chageColorDark ' : 'chageColorbright'}`}>
                    If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place
                    to another because of the grid system that the city is built on. Just as the predictability of a city grid helps
                    ocals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike.
                    Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly
                    get where they need to go.
                </p>
                <h3 className={`${isCheckTheme === true ? 'chageColorDark ' : 'chageColorbright'}`}>
                    Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.
                </h3>
                {
                    loop && loop.length > 0 ?
                        loop.map((element: any, index: any) => {
                            return (
                                <div key={index}>
                                    <img src={element} alt="" className='detailPost_content_image' />
                                    <h3 className={`${isCheckTheme === true ? 'chageColorDark ' : 'chageColorbright'}`}>
                                        Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.
                                    </h3>
                                    <p className={`${isCheckTheme === true ? 'chageColorDark ' : 'chageColorbright'}`}>
                                        A grid system is a design tool used to arrange content on a webpage.
                                        It is a series of vertical and horizontal lines that create a matrix of intersecting points,
                                        which can be used to align and organize page elements. Grid systems are used to create a consistent
                                        look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.
                                    </p>
                                    <p className={`${isCheckTheme === true ? 'chageColorDark ' : 'chageColorbright'}`}>
                                        If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place
                                        to another because of the grid system that the city is built on. Just as the predictability of a city grid helps
                                        ocals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike.
                                        Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly
                                        get where they need to go.
                                    </p>
                                    <h3 className={`${isCheckTheme === true ? 'chageColorDark ' : 'chageColorbright'}`}>
                                        Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.
                                    </h3>
                                </div>
                            )
                        }) : null
                }
                <div style={{ display: 'flex', margin: '30px 0px' }}>
                    {

                        dataTopicPost && dataTopicPost.length > 0 ?
                            dataTopicPost.map((item: any, index: number) => (
                                <div key={index}>
                                    <Button bgColor={`${containerColorBg[count === containerColorBg.length ? count - 1 : count]}`} color={`${containerColorText[count === containerColorText.length ? count - 1 : count]}`} text={item} />
                                </div>
                            ))
                            : null
                    }
                </div>
                <div className='detailPost_content_subscriber'>
                    <Subscriber />
                </div>
            </div>
            {
                showButton && showButton === true ?
                    <button className='detailPost_btnControllerTop' onClick={handleLinkClick}>
                        <i className="fa-solid fa-arrow-up"></i>
                    </button> : null
            }
        </div >
    );
};

export default DetailPost;

