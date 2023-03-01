import Article from "./components/Article";
import Header from  "./components/Header";
import '../src/css';
import Nav from "./components/Nav";

function App({menyItems, index, title, url}) {
  return (
    <section>
      <Header />
      <Nav menyItems={menyItems} index={index} />
      <Article title={title} url={url}/>
    </section>
  );
}

export default App;
