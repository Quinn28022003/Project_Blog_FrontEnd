import React, { ReactElement, createContext, useEffect, useState } from 'react';
import Home from './page/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Project from './page/project/Project';
import NotFound from './page/NotFound/NotFound';
import Header from './components/componentHeader/Header';
import Footer from './components/componentFooter/Footer';
import getRecentBlog from './axios/getRecentBlog';
import About from './page/about/About';
import Newsletter from './page/newsletter/Newsletter';
import DetailPost from './page/detailPost/DetailPost';

export type TContextApp = {
  dataGetRecentBlog: any;
  isCheckTheme: boolean;
  handleOnclickchangeIsCheckTheme: () => void;
  page: number;
  postsPerPage: number;
  handleOnlickUpdatePageAndPostsPerPage: (page: number, postsPerPage: number) => void;
};

const createAppContextGetData: TContextApp = {
  dataGetRecentBlog: [],
  isCheckTheme: false,
  handleOnclickchangeIsCheckTheme: () => { },
  page: 1,
  postsPerPage: 6,
  handleOnlickUpdatePageAndPostsPerPage: () => { }
};

export const contextApp = createContext<TContextApp>(createAppContextGetData);

export const useGetData = (): TContextApp => {
  const [dataGetRecentBlog, setDataGetRecentBlog] = useState<any>([]);
  const [isCheckTheme, setIsCheckTheme] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState<number>(6);

  const handleOnclickchangeIsCheckTheme = (): void => {
    setIsCheckTheme((prevIsCheckTheme) => !prevIsCheckTheme);
    console.log(isCheckTheme);
  };

  const handleOnlickUpdatePageAndPostsPerPage = (page: number, postsPerPage: number): void => {
    setPage(page);
    setPostsPerPage(postsPerPage);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resquestRecentBlogs: any = await getRecentBlog();
        setDataGetRecentBlog(resquestRecentBlogs);
      } catch (error) {
        console.error('Error fetching recent blog data:', error);
      };
    };
    fetchData();
  }, [isCheckTheme]);

  return { dataGetRecentBlog, isCheckTheme, handleOnclickchangeIsCheckTheme, page, postsPerPage, handleOnlickUpdatePageAndPostsPerPage };
};

const App: React.FC = (): ReactElement => {

  const dataContextApp: TContextApp = useGetData();

  return (
    <contextApp.Provider value={dataContextApp}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Project' element={<Project />} />
            <Route path='/about' element={<About />} />
            <Route path='/newsletter' element={<Newsletter />} />
            <Route path='/detailPosts/:idPost' element={<DetailPost />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </contextApp.Provider>
  );
};

export default App;

