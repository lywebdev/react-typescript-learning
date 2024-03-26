import React from 'react';
import './App.css';
import Card, {CardVariant} from "./components/Card";

function App() {
  return (
      <div>
        <Card width='200px' height='200px' onClick={(num: number) => console.log('click', num)} variant={CardVariant.outlined}>
          <button>Кнопка</button>
        </Card>
      </div>
  );
}

export default App;
