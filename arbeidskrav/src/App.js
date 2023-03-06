import Article from "./components/Article";
import Nav from "./components/Nav";
// import Main from "./components/Main";
import Layout from "./components/Layout";
//importere resourses?
//Importere css.stilarket?
//I App.js filen er alt som skal rendres ut på nettsiden :) 

function App() {
  return (
    <Layout>
      <Nav />
      {/* <Main /> */}
      <Article />
    </Layout>
  );
}

export default App;
