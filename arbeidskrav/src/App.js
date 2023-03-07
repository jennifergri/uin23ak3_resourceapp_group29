import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Article from "./components/Article";
import Layout from "./components/Layout";
import ArticleList from "./components/ArticleList";
//I App.js filen er alt som skal rendres ut på nettsiden
 
function App() {
  return (
    <>
    <Layout>
      <Outlet />
    </Layout>

    <Routes>
      <Route index path="/" element={<ArticleList/>}/>
      <Route path="/:category" element={<ArticleList/>} />
    </Routes>
    </>
  );
}

export default App;
