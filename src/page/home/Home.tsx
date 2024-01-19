import { useContext, useEffect, useState } from 'react';
import './Home.scss';
import Title from '../../components/componentTitle/Title';
import DisplayPostList from '../../components/componentDisplayPostList/DisplayPostList';
import Paging from '../../components/componentPaging/Paging';
import { AppContextGetData, TAppContextGetData } from '../../App';
import getBlogPosts from '../../axios/getBlogPosts';

const Home = () => {
    const [dataBlogPost, setDataBlogPost] = useState<any>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataBlogPost = await getBlogPosts();
                setDataBlogPost(dataBlogPost)
            } catch (error) {
                console.error('Error fetching topic posts:', error);
            };
        };
        fetchData();
    }, []);

    const { dataGetRecentBlog } = useContext<TAppContextGetData>(AppContextGetData);

    return (
        <div id='main'>
            <Title />
            <DisplayPostList title='Recent blog posts' RecentBlogPosts DataPosts={dataGetRecentBlog.dataGetRecentBlog} />
            <DisplayPostList title='All blog posts' AllBlogPosts DataPosts={dataBlogPost} />
            <Paging />
        </div>
    );
};

export default Home;