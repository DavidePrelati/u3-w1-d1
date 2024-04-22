import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
      <div className='div'>
        <ImageComponent src=" https://img.fotocommunity.com/herbstbaum-98afdef5-30d2-42cb-958d-a26be878075d.jpg?height=200" alt="Questa è un'immagine" />
        <ButtonComponent placeholder="Questo è un bottone" className="custom-button" style={{ marginTop: "1rem" }} />
      </div>
      <div className='div'>
        <ImageComponent src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujAK7HED_oqCCtNHpWbhCEM_DEfF_Fm9sTpeKklUmiA&s" alt="Questa è un'immagine" />
        <ButtonComponent placeholder="Questo è un ALTRO bottone" className="custom-button" style={{ marginTop: "1rem" }} />
      </div>
    </div>
  );
}

export default App;
