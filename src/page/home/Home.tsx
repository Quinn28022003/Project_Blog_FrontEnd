import { useContext, useEffect, useState } from 'react';
import './Home.scss';
import Title from '../../components/componentTitle/Title';
import DisplayPostList from '../../components/componentDisplayPostList/DisplayPostList';
import Paging from '../../components/componentPaging/Paging';
import { TContextApp, contextApp } from '../../App';
import getBlogPosts from '../../axios/getBlogPosts';

const Home = () => {
    const dataContextApp: TContextApp = useContext(contextApp);
    const isCheckTheme = dataContextApp.isCheckTheme;
    const [dataBlogPost, setDataBlogPost] = useState<any>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataBlogPost = await getBlogPosts(dataContextApp.page, dataContextApp.postsPerPage);
                setDataBlogPost(dataBlogPost)
            } catch (error) {
                console.error('Error fetching topic posts:', error);
            };
        };
        fetchData();
    }, [dataContextApp.page, dataContextApp.postsPerPage]);

    return (
        <div id={`main${isCheckTheme === true ? '_theme' : ''}`} >
            <div className={`${isCheckTheme === true ? 'chageBgColorDark' : 'chageBgColorbright'} `}>

                <Title title='THE BLOG' />
                <DisplayPostList title='Recent blog posts' RecentBlogPosts DataPosts={dataContextApp.dataGetRecentBlog} />
                <DisplayPostList title='All blog posts' AllBlogPosts DataPosts={dataBlogPost} />
                <Paging />
            </div>
        </div>
    );
};

export default Home;