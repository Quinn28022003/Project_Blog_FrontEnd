import React, { ReactElement, createContext, useEffect, useState } from 'react';
import Home from './page/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Project from './page/project/Project';
import NotFound from './page/NotFound/NotFound';
import Header from './components/componentHeader/Header';
import Footer from './components/componentFooter/Footer';
import getRecentBlog from './axios/getRecentBlog';
import getTopicPosts from './axios/getTopicPosts';

export type TAppContextGetData = {
  dataGetRecentBlog: any;
};

const createAppContextGetData: TAppContextGetData = {
  dataGetRecentBlog: []
};

export const AppContextGetData = createContext<TAppContextGetData>(createAppContextGetData);

export const useGetData = (): TAppContextGetData => {
  const [dataGetRecentBlog, setDataGetRecentBlog] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resquestRecentBlogs: any = await getRecentBlog();
        setDataGetRecentBlog(resquestRecentBlogs);
      } catch (error) {
        console.error('Error fetching recent blog data:', error);
      }
    };

    fetchData();
  }, []);
  return { dataGetRecentBlog };
};

const App: React.FC = (): ReactElement => {

  const [isCheckActive, setIsCheckActive] = useState<string>('Blog');

  const dataGetRecentBlog: any = useGetData();

  return (
    <AppContextGetData.Provider value={{ dataGetRecentBlog }}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Project' element={<Project />} />
            <Route path='/Homes' element={''} />
            <Route path='/Homes' element={<Home />} />
            <Route path='/Homes' element={<Home />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </AppContextGetData.Provider>
  );
};

export default App;

