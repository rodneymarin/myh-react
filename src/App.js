import ChanceList from "./components/chanceList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Muertos y Heridos</h1>
        <p>
          He pensado en un número de 3 cifras.<br/>
          Debes adivinarlo en el mínimo número de intentos.<br/>
          Muerto: cuando adivinas el número en la posición exacta que lo pensé.<br/>
          Herido: cuando adivinas el número, pero en una posición distinta.
        </p>
      </header>
      <ChanceList/>
    </div>
  );
}

export default App;
