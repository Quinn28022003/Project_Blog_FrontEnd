import instance from "./configAxios";

const getBlogPosts = async (): Promise<any> => {
    try {
        const res: any = await instance.get('posts/blog');
        return res.data.data;
    } catch (error) {
        console.log(error);
    };
};

export default getBlogPosts;