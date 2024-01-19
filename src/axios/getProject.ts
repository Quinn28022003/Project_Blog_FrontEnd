import instance from "./configAxios";

const getProject = async (): Promise<any> => {
    try {
        const res: any = await instance.get('posts/project');
        return res.data.data;
    } catch (error) {
        console.log(error);
    };
};

export default getProject;