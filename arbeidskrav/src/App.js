import Article from "./components/Article";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Layout from "./components/Layout";
import Header from "./components/Header";

function App({menyItems, index, title, url}) {
  return (
    <Layout>
      <Header />
        <Nav />
        <Main />
        <Article />
    </Layout>
  );
}

export default App;
