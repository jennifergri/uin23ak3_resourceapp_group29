import Article from "./components/Article";
import Nav from "./components/Nav";
import Header from  "./components/Header";
import './App.css';
import './css/main.css';


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
