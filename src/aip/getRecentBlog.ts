import instance from "./axios/configAxios";

const getRecentBlog = async (): Promise<any> => {
    try {
        const res: any = await instance.get('posts/recentBlog');
        return res.data.data;
    } catch (error) {
        console.log(error);
    };
};

export default getRecentBlog;