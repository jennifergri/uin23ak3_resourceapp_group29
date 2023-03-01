import Article from "./components/Article";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Layout from "./components/Layout";

function App({menyItems, index, title, url}) {
  return (
    <Layout>
      <Nav />
      <Main />
      <Article />
    </Layout>
  );
}

export default App;
