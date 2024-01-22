import instance from "./configAxios";

const postAddEmailUser = async (email: string): Promise<any> => {
    try {
        const res = await instance.post('posts/sub', { email });
        return res.data.data;
    } catch (error) {
        console.log(error);
    };
};

export default postAddEmailUser;