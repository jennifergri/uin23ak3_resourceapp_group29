import Article from "./components/Article";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Layout from "./components/Layout";
import './App.css';
import './css/main.css';

function App({FunctionNav, index, title, url}) {
  return (
    <Layout>
      <Nav FunctionNav={FunctionNav}/>
      <Main />
      <Article />
    </Layout>
  );
}

export default App;
