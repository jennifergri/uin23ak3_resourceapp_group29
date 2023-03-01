import Article from "./components/Article";
import Nav from "./components/Nav";
import Header from  "./components/Header";
import './sass/main.scss';


function App({menyItems, index}) {
  return (
    <section>
      <Header />
      <Nav menyItems={menyItems} index={index} />
      <Article />
    </section>
  );
}

export default App;
