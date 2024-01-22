import instance from "./configAxios";

const getDetailPost = async (idPost: number): Promise<any> => {
    try {
        const res: any = await instance.get(`/posts/detailPosts/${idPost}`);
        return res.data.data;
    } catch (error) {
        console.log(error);
    };
};

export default getDetailPost;