declare module '*.jpg' {
    const jpgPath: string;
    export default jpgPath;
};

declare module '*.jpeg' {
    const jpegPath: string;
    export default jpegPath;
};

declare module '*.svg' {
    const svgPath: string;
    export default svgPath;
};

declare module '*.png' {
    const pngPath: string;
    export default pngPath;
};

declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
}

interface IArticle {
    id: number;
    title: string;
    body: string;
};

type ArticleState = {
    articles: IArticle[];
};
