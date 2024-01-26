import React, { useContext, useEffect, useState } from 'react';
import './PostItem.scss';
import imgArrow from '../../assets/image/arrow-up-right.svg';
import Button from '../componentButton/Button';
import { TColorBackgroud, TColorText } from '../../constant/Color';
import getTopicPosts from '../../aip/getTopicPosts';
import { Link, useNavigate } from 'react-router-dom';
import { scrollToTop } from '../../utils/animationscrollToTop';
import { TContextApp, contextApp } from '../../App';

type TPostItemProps = {
    RecentBlogPosts?: boolean;
    AllBlogPosts?: boolean;
    AllRecentBlogPosts?: boolean;
    ProjectPosts?: boolean;
    Newsletter?: boolean;
    element: any;
    itemIndex: number;
};

const initGetTopicPosts = async (idPost: number): Promise<any> => {
    try {
        const resquestTopicPost = await getTopicPosts(idPost);
        return resquestTopicPost;
    } catch (error) {
        console.error('Error fetching topic posts:', error);
        return null;
    };
};

const PostItem: React.FC<TPostItemProps> = ({ RecentBlogPosts, AllBlogPosts, AllRecentBlogPosts, ProjectPosts, Newsletter, element, itemIndex }: TPostItemProps) => {
    const [dataTopicPost, setDataTopicPost] = useState<string[]>([]);
    const [containerColorBg, setContainerColorbg] = useState<string[]>(Object.values(TColorBackgroud));
    const [containerColorText, setContainerColorText] = useState<string[]>(Object.values(TColorText));
    const [count, setCountBg] = useState<number>(Math.floor(Math.random() * containerColorBg.length));
    const [image, setImage] = useState<string>(`data:image/png;base64,${element.image}`);
    const navigate = useNavigate();
    const dataContextApp: TContextApp = useContext(contextApp);
    const isCheckTheme = dataContextApp.isCheckTheme;

    const handleLinkClick = () => {
        navigate(`/detailPosts/${element.idPost}`);
        scrollToTop();
    };

    const isCheckChangePostItem = (data: string[]): string => {
        switch (itemIndex) {
            case 1:
                return data[itemIndex - 1];
            case 2:
                return data[itemIndex - 1];
            case 3:
                return data[itemIndex - 1];
            case 4:
                return data[itemIndex - 1];
            case 5:
                return data[itemIndex - 1];
            case 6:
                return data[itemIndex - 1];
            default:
                return '';
        };
    };
    const [isCheckTypeDisplayPostItem, setIsCheckTypeDisplayPostItem] = useState<string>((): string => {
        if (RecentBlogPosts === true) {
            return isCheckChangePostItem([
                `post_item-recentPostItem${itemIndex}`,
                `post_item-recentPostItem${itemIndex}`,
                `post_item-recentPostItem${itemIndex}`,
                `post_item-recentPostItem${itemIndex}`
            ]);
        } else if (AllBlogPosts === true) {
            return 'post_item-allBlogPostItem';
        } else if (AllRecentBlogPosts === true) {
            return 'post_item-AllRecentBlogPosts';
        } else if (ProjectPosts === true) {
            return isCheckChangePostItem([
                `post_item-projectPostItem${itemIndex}`,
                `post_item-projectPostItem${itemIndex}`,
                `post_item-projectPostItem${itemIndex}`,
                `post_item-projectPostItem${itemIndex}`,
                `post_item-projectPostItem${itemIndex}`,
                `post_item-projectPostItem${itemIndex}`
            ]);
        } else if (Newsletter === true) {
            return 'post_item-newsletterAllBlogPostItem';
        } else {
            return '';
        };
    });
    const [isCheckTypeDisplayPostItemImg, setIsCheckTypeDisplayPostItemImg] = useState<string>((): string => {
        if (RecentBlogPosts === true) {
            return isCheckChangePostItem([
                'post_item_image-recentPostItem1',
                'post_item_image-recentPostItem2',
                'post_item_image-recentPostItem3',
                'post_item_image-recentPostItem4'
            ]);
        } else if (AllBlogPosts === true) {
            return 'post_item_image-allBlogPostItem';
        } else if (AllRecentBlogPosts === true) {
            return 'post_item_image-AllRecentBlogPosts';
        } else if (ProjectPosts === true) {
            return isCheckChangePostItem([
                `post_item_image-projectPostItem${itemIndex}`,
                `post_item_image-projectPostItem${itemIndex}`,
                `post_item_image-projectPostItem${itemIndex}`,
                `post_item_image-projectPostItem${itemIndex}`,
                `post_item_image-projectPostItem${itemIndex}`,
                `post_item_image-projectPostItem${itemIndex}`
            ]);
        } else if (Newsletter === true) {
            return 'post_item_image-newsletterAllBlogPostItem';
        } else {
            return '';
        };
    });
    const [isCheckTypeDisplayPostItemContent, setIsCheckTypeDisplayPostItemContet] = useState<string>((): string => {
        if (RecentBlogPosts === true) {
            return isCheckChangePostItem([
                'post_item_content-recentPostItem1',
                'post_item_content-recentPostItem2',
                'post_item_content-recentPostItem3',
                'post_item_content-recentPostItem4'
            ]);
        } else if (AllBlogPosts === true) {
            return 'post_item_content-allBlogPostItem';
        } else if (AllRecentBlogPosts === true) {
            return 'post_item_content-AllRecentBlogPosts';
        } else if (ProjectPosts === true) {
            return isCheckChangePostItem([
                `post_item_content-projectPostItem${itemIndex}`,
                `post_item_content-projectPostItem${itemIndex}`,
                `post_item_content-projectPostItem${itemIndex}`,
                `post_item_content-projectPostItem${itemIndex}`,
                `post_item_content-projectPostItem${itemIndex}`,
                `post_item_content-projectPostItem${itemIndex}`
            ]);
        } else if (Newsletter === true) {
            return 'post_item_content-newsletterAllBlogPostItem';
        } else {
            return '';
        };
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataTopicPost = await initGetTopicPosts(Number(element.idPost));
                setDataTopicPost(dataTopicPost);
            } catch (error) {
                console.error('Error fetching topic posts:', error);
            };
        };
        fetchData();
    }, []);

    return (
        <div className={isCheckTypeDisplayPostItem} >
            <img src={image} srcSet={`${image} 1x, ${image} 2x`} alt="" className={isCheckTypeDisplayPostItemImg} />
            <div className={isCheckTypeDisplayPostItemContent} >
                <span className='post_item_content_authorAndDate'>
                    {element.authorName} • {element.FormattedDate}
                </span>
                <Link to={`/detailPosts/${element.idPost}`} style={{ textDecoration: 'none', color: 'inherit', display: 'inherit' }} onClick={handleLinkClick}>
                    <div className='post_item_content_containerTitle'>
                        <h3 className={`post_item_content_containerTitle_title ${isCheckTheme === false ? 'chageColorDark' : 'chageColorbright'}`}>{element.title}</h3>
                        <img src="/assets/image/arrow-up-right.svg" alt="Arrow" className='post_item_content_containerTitle_imgArrow' />
                    </div>
                </Link>
                <p className={`post_item_content_description ${isCheckTheme === false ? 'chageColorDark' : 'chageColorbright'}`}>{element.decscription}</p>
                <div className='post_item_content_topic'>
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
            </div>
        </div >
    );
};

export default PostItem;