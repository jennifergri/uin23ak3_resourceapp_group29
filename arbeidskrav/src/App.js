import Article from "./components/Article";
import Nav from "./components/Nav";
import Header from  "./components/Header";
import './sass/main.scss';


function App() {
  return (
    <section>
      <Header />
      <Nav />
      <Article />
    </section>
  );
}

export default App;
