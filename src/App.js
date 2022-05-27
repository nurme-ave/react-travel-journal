import './App.css';
import travelData from './data';
import Header from '../src/components/Header';
import Card from '../src/components/Card';

function App() {

  const cards = travelData.map((item) => {
    return (
      <Card 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <main className="main-container">
      <Header />
      {cards}
    </main>
  );
}

export default App;
