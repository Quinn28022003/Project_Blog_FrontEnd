import instance from "./axios/configAxios";

const getTopicPosts = async (idPost: number): Promise<any> => {
    try {
        const res: any = await instance.get(`posts/topics/${idPost}`);
        return res.data.data;
    } catch (error) {
        console.log(error);
    };
};

export default getTopicPosts;