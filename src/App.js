import React from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js'
import Body from './components/Body/Body';

export const CartContext = React.createContext(0);

function App() {
  const [cartState, setCartState] = React.useState(0);
  const value = React.useMemo(() => ({ cartState, setCartState }), [cartState])

  return (
    <CartContext.Provider value={value}>
      <div className="App">
        <Header></Header>
        <Body></Body>
      </div>
    </CartContext.Provider>
  );
}

export default App;
