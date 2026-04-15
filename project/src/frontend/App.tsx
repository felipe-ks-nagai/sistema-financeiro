import './App.css';
import {getFinancier} from "../backend/Back";
import { useEffect, useState } from 'react';

function App() {
  type Financier = {
    id: number,
    valor: number,
    data: string,
    categoria: string,
    descricao: string
  }
  const cabecalho: string[] = ["Valor","Data","Categoria","Descrição","Total"]
  const [dados, setDados] = useState<Financier[]>([])
  var total = 0;

useEffect(() => {
  async function loadData(){
  const result = await getFinancier()
  setDados(result);
  }

  loadData();
},[]);
  return (
    <>
      <table>
        <thead>
          <tr>
            {cabecalho.map((element) => (
              <th key={element}>{element}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dados.map((element) => (
            <tr key={element.id}>
                <td>{element.valor}</td>
                <td>{element.data}</td>
                <td>{element.categoria}</td>
                <td>{element.descricao}</td>
                <td>{total += element.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
