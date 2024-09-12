import CharectersList from './component/Charecters.List';
import person from './component/person'
import { useEffect, useState } from "react";



function App() {
const [buscar,setBuscrar] = useState("");
  return <div>
    <CharectersList/>
    <person/>
     
  </div>;
      }

export default App;
