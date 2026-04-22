import './App.css';
import ConfirmExclusion from './ConfirmExclusion';
import {deleteFinancier, getFinancier} from "../backend/Back";
import { useEffect, useState } from 'react';

function App() {
  type Financier = {
    id: number,
    valor: number,
    data: string,
    categoria: string,
    descricao: string
  }
  const cabecalho: string[] = ["Valor","Data","Categoria","Descrição","Total", "Funções"]
  const [dados, setDados] = useState<Financier[]>([]);
  const handleDelete = async (id: number) => {
    await deleteFinancier(id);
    const result = await getFinancier();
    setDados(result);
  }

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
            {dados.map((element, index) => {
              const cumulativeTotal = dados.slice(0, index + 1).reduce((acc, item) => acc + item.valor, 0);
              return (
                <tr key={element.id}>
                  <td>{element.valor}</td>
                  <td>{element.data}</td>
                  <td>{element.categoria}</td>
                  <td>{element.descricao}</td>
                  <td>{cumulativeTotal}</td>
                  <td>
                    <button onClick={() => handleDelete(element.id)}>Excluir</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
    </>
  )
}

export default App
