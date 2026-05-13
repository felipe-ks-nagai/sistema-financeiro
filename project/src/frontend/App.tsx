import './App.css';
import {deleteFinancier, getFinancier} from "../backend/Back";
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function App() {
  type Financier = {
    id: number,
    valor: number,
    data: string,
    categoria: string,
    descricao: string
  }
  const navigate = useNavigate();
  const cabecalho: string[] = ["Valor","Data","Categoria","Descrição","Total", "Funções"]
  const [dados, setDados] = useState<Financier[]>([]);
  const [totalProvis, settotalProvis] = useState();
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
        <h6>Adicionar dado</h6>
        <div className='container'>
          <input name='valor' className='input-create' type='number' onChange={settotalProvis()}/>
          <input name='data' className='input-create' type='date'/>
          <input name='categoria' className='input-create' type='text' />
          <input name='descricao' className='input-create' type='text' />
          <input name='total' className='input-create' type='text' readOnly/>
        <button>Adicionar</button>
        </div>
    </>
  )
}

export default App
