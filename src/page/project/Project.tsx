import DisplayPostList from '../../components/componentDisplayPostList/DisplayPostList';
import Title from '../../components/componentTitle/Title';
import './Project.scss';
import getProject from '../../aip/getProject';
import { useContext, useEffect, useState } from 'react';
import { TContextApp, contextApp } from '../../App';

const Project = () => {
    const [dataProjectPosts, setDataProjectPosts] = useState<any>([]);
    const dataContextApp: TContextApp = useContext(contextApp);
    const isCheckTheme = dataContextApp.isCheckTheme;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataProjectPost = await getProject();
                setDataProjectPosts(dataProjectPost)
            } catch (error) {
                console.error('Error fetching topic posts:', error);
            };
        };
        fetchData();
    }, []);

    return (
        <div id={`mainProject${isCheckTheme === true ? '_theme' : ''}`}>
            <Title title='PROJECTS' />
            <DisplayPostList title='List Project' ProjectPosts DataPosts={dataProjectPosts} />
        </div>
    );
};

export default Project;