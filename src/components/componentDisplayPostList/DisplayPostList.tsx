import React, { useContext, useEffect, useState } from 'react';
import PostItem from '../componentPostItem/PostItem';
import { TContextApp, contextApp } from '../../App';
import './DisplayPostList.scss';

type TDisplayPostList = {
    RecentBlogPosts?: boolean;
    AllBlogPosts?: boolean;
    AllRecentBlogPosts?: boolean;
    ProjectPosts?: boolean;
    Newsletter?: boolean;
    DataPosts: any;
    title: string;
};

const DisplayPostList: React.FC<TDisplayPostList> = ({ RecentBlogPosts, AllBlogPosts, AllRecentBlogPosts, ProjectPosts, Newsletter, DataPosts, title }: TDisplayPostList) => {
    const dataContextApp = useContext<TContextApp>(contextApp);
    const isCheckTheme = dataContextApp.isCheckTheme;
    const [dataPosts, setdataPosts] = useState<any>(DataPosts);
    const [isCheckTypeDisplayPostList, setIsCheckTypeDisplayPostList] = useState<string>((): string => {
        if (RecentBlogPosts === true) {
            return 'DisplayPostList_content';
        } else if (AllBlogPosts === true || Newsletter === true) {
            return 'DisplayPostList_content_allBlogPosts';
        } else if (AllRecentBlogPosts === true) {
            return 'DisplayPostList_content_allRecentBlogPosts';
        } else if (ProjectPosts === true) {
            return 'DisplayPostList_content_projectPosts';
        } else {
            return 'DisplayPostList_content_default';
        };
    });

    useEffect(() => {
        setdataPosts(DataPosts);
    }, [DataPosts, dataPosts]);

    return (
        <div className='DisplayPostList'>
            <h2 className={`DisplayPostList_title ${isCheckTheme === true ? 'chageColorDark ' : 'chageColorbright'}`}>
                {title}
            </h2>
            <div className={isCheckTypeDisplayPostList} >
                {
                    RecentBlogPosts === true && dataPosts && dataPosts.length > 0 ?
                        dataPosts.map((element: any, index: any) => {
                            switch (index) {
                                case 0:
                                    return <PostItem key={element.idPost} RecentBlogPosts element={element} itemIndex={index + 1} />
                                case 1:
                                    return <PostItem key={element.idPost} RecentBlogPosts element={element} itemIndex={index + 1} />
                                case 2:
                                    return <PostItem key={element.idPost} RecentBlogPosts element={element} itemIndex={index + 1} />
                                case 3:
                                    return <PostItem key={element.idPost} RecentBlogPosts element={element} itemIndex={index + 1} />
                                default:
                                    return <></>
                            }
                        }) : null
                }
                {
                    AllBlogPosts === true && dataPosts && dataPosts.length > 0 ?
                        dataPosts.map((element: any, index: any) => {
                            return (
                                <PostItem key={element.idPost} AllBlogPosts element={element} itemIndex={index + 1} />
                            )
                        }) : null
                }
                {
                    ProjectPosts === true && dataPosts && dataPosts.length > 0 ?
                        dataPosts.map((element: any, index: any) => {
                            switch (index) {
                                case 0:
                                    return <PostItem key={element.idPost} ProjectPosts element={element} itemIndex={index + 1} />
                                case 1:
                                    return <PostItem key={element.idPost} ProjectPosts element={element} itemIndex={index + 1} />
                                case 2:
                                    return <PostItem key={element.idPost} ProjectPosts element={element} itemIndex={index + 1} />
                                case 3:
                                    return <PostItem key={element.idPost} ProjectPosts element={element} itemIndex={index + 1} />
                                case 4:
                                    return <PostItem key={element.idPost} ProjectPosts element={element} itemIndex={index + 1} />
                                case 5:
                                    return <PostItem key={element.idPost} ProjectPosts element={element} itemIndex={index + 1} />

                                default:
                                    return <></>
                            }
                        }) : null
                }
                {
                    Newsletter === true && dataPosts && dataPosts.length > 0 ?
                        dataPosts.map((element: any, index: any) => {
                            if (index < 3) {
                                return (
                                    <PostItem key={element.idPost} AllBlogPosts element={element} itemIndex={index + 1} />
                                )
                            }
                        }) : null
                }
                {
                    AllRecentBlogPosts === true && dataPosts && dataPosts.length > 0 ?
                        dataPosts.map((element: any, index: any) => {
                            return (
                                <PostItem key={element.idPost} AllRecentBlogPosts element={element} itemIndex={index + 1} />
                            )
                        }) : null
                }
            </div>
        </div >
    );
};

export default DisplayPostList;