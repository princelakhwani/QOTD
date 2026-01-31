import { useState } from 'react'
import './App.css'
import QOTD from "/src/page/QOTD.jsx";

function App() {
  const [count, setCount] = useState(0)

  return <QOTD />;
}

export default App
