import './main.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';
import Items from './components/Items';

function App() {
  return( 
      <div>
        <Header title={"Rick And Morty"} secondary={"Characters"} />
        <Container>
          <Items/>
        </Container>
        <Footer/>
      </div>
  )
}

export default App;
