import React, { useEffect, useState } from 'react';
import './PostItem.scss';
import imgArrow from '../../assets/image/arrow-up-right.svg';
import Button from '../componentButton/Button';
import { TColorBackgroud, TColorText } from '../../assets/ts/Color';
import getTopicPosts from '../../axios/getTopicPosts';
import imgTest from '../../assets/image/post1.png';

type TPostItemProps = {
    element?: any;
    display: string;
    widthItem?: string;
    widthImg?: string;
    widthContent?: string;
    p?: string;
    STT?: string;
};

const initGetTopicPosts = async (idPost: number): Promise<any> => {
    try {
        const resquestTopicPost = await getTopicPosts(idPost);
        return resquestTopicPost;
    } catch (error) {
        console.error('Error fetching topic posts:', error);
        return null;
    }
};



const PostItem: React.FC<TPostItemProps> = ({ element, display = '', widthItem = '', widthImg = '', widthContent = '', p = '', STT = '' }: TPostItemProps) => {
    const [dataTopicPost, setDataTopicPost] = useState<string[]>([]);
    const [containerColorBg, setContainerColorbg] = useState<string[]>(Object.values(TColorBackgroud));
    const [containerColorText, setContainerColorText] = useState<string[]>(Object.values(TColorText));
    const [countBg, setCountBg] = useState<number>(Math.floor(Math.random() * containerColorBg.length));
    const [countText, setCountText] = useState<number>(Math.floor(Math.random() * containerColorText.length));

    useEffect(() => {
        const fetchData = async () => {
            if (element && element.idPost) {
                try {
                    const dataTopicPost = await initGetTopicPosts(Number(element.idPost));
                    setDataTopicPost(dataTopicPost)
                } catch (error) {
                    console.error('Error fetching topic posts:', error);
                };
            } else {
                console.log('Error: element or element.idPost is undefined');
            }
        };

        fetchData();
    }, [element]);

    console.log('Image URL:', element.image);

    if (!element || !element.title || !element.decscription || !element.authorName || !element.FormattedDate || !element.image) {

        return null;
    };

    return (
        <div className='post_item' style={{ display: `${display}`, gridArea: `${STT}`, width: `${widthItem}` }}>
            <img src={imgTest} alt="" className='post_item_image' style={{ width: `${widthImg}` }} />
            <div className='post_item_content' style={{ padding: `${p}`, width: `${widthContent}` }}>
                <span className='post_item_content_authorAndDate'>
                    {element.authorName} • {element.FormattedDate}
                </span>
                <h3 className='post_item_content_title'>{element.title}  </h3><img src={imgArrow} alt="Arrow" className='post_item_content_imgArrow' />
                <p className='post_item_content_description'>{element.decscription}</p>
                <div className='post_item_content_topic'>
                    {
                        dataTopicPost && dataTopicPost.length > 0 ?
                            dataTopicPost.map((item: any, index: number) => (
                                <div key={index}>
                                    <Button bgColor={`${containerColorBg[countBg === containerColorBg.length ? countBg - 1 : countBg]}`} color={`${countText === containerColorText.length ? countText - 1 : countText}`} text={item} />
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