import instance from "./axios/configAxios";

const getBlogPosts = async (page: number, postsPerPage: number): Promise<any> => {
    try {
        const res: any = await instance.get(`posts/blog/paging?postsPerPage=${postsPerPage}&&page=${page}`);
        return res.data.data;
    } catch (error) {
        console.log(error);
    };
};

export default getBlogPosts;