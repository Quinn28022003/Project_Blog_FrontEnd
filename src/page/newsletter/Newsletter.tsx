import { useContext, useEffect, useState } from "react";
import DisplayPostList from "../../components/componentDisplayPostList/DisplayPostList";
import getBlogPosts from "../../axios/getBlogPosts";
import './Newsletter.scss';
import Subscriber from "../../components/componentSubscriber/Subscriber";
import { TContextApp, contextApp } from '../../App';
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {
    const dataContextApp = useContext<TContextApp>(contextApp);
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
        <div className={`newsletter ${isCheckTheme === true ? 'chageBgColorDark ' : 'chageBgColorbright'}`}>
            <Subscriber />
            <DisplayPostList title="All blog posts" Newsletter DataPosts={dataBlogPost} />
        </div>
    );
};

export default Newsletter;