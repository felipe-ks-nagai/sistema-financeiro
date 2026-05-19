import './App.css';
import {deleteFinancier, getFinancier, createFinancier} from "../backend/Back";
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@mui/material';

function App() {
  type Financier = {
    id: number,
    valor: number,
    data: string,
    categoria: string,
    descricao: string
  }

  // variaveis de estado
  const navigate = useNavigate();
  const cabecalho: string[] = ["Valor","Data","Categoria","Descrição","Total", "Funções"]
  const [dados, setDados] = useState<Financier[]>([]);
  const [totalProvis, settotalProvis] = useState<number>(0);
  const quantPage = 5;
  const [currentPage, setCurrentPage] = useState<number>(1);


  // inputs de criacao
  const [valor, setValor] = useState<number>(0);
  const [data, setData] = useState<string>('');
  const [categoria, setCategoria] = useState<string>('');
  const [descricao, setDescricao] = useState<string>('');

  // função de exclusão
  const handleDelete = async (id: number) => {
    await deleteFinancier(id);
    const result = await getFinancier();
    setDados(result);
  };

  // função de criação
  const handleCreate = async () => {
    await createFinancier({valor, data, categoria, descricao});
    const result = await getFinancier();
    setDados(result);
  };

  const HandleValor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const total = dados.reduce((acc, item) => acc + item.valor, 0);
    settotalProvis(total + Number(e.target.value));
  };  

  // useEffect para carregar os dados ao montar o componente
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
            {/* {dados.map((element, index) => {
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
            })} */}
            {dados.slice((currentPage - 1) * quantPage, currentPage * quantPage).map((element, index) => {
            const cumulativeTotal = dados.slice(0, index + 1).reduce((acc, item) => acc + item.valor, 0);
            return (
              <tr key={element.id}>
                <td>{element.valor}</td>
                <td>{element.data}</td>
                <td>{element.categoria}</td>
                <td>{element.descricao}</td>
                <td>{cumulativeTotal}</td>
                <td>
                  <Button onClick={() => handleDelete(element.id)} variant="contained" color="secondary">
                    Excluir
                  </Button>
                </td>
              </tr>
            );
            })}
          </tbody>
        </table>
        <div className='pagination'>
          <Button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1} variant="text" color="primary">
            Anterior
          </Button>
          <span>Página {currentPage}</span>
          <Button onClick={() => setCurrentPage(prev => prev + 1)} disabled={currentPage * quantPage >= dados.length} variant="text" color="primary">
            Próxima
          </Button>
        </div>
        <h6>Adicionar dado</h6>
        <div className='container'>
          <input name='valor' className='input-create' type='number' onChange={(e) => {
            setValor(Number(e.target.value));
            HandleValor(e);
          }}/>
          <input name='data' className='input-create' type='date' onChange={(e) => setData(e.target.value)} />
          <input name='categoria' className='input-create' type='text' onChange={(e) => setCategoria(e.target.value)} />
          <input name='descricao' className='input-create' type='text' onChange={(e) => setDescricao(e.target.value)} />
          <input name='total' className='input-create' type='text' readOnly value={totalProvis} />
          <Button onClick={() => handleCreate()} variant="contained" color="primary">
            Adicionar
          </Button>
        </div>
    </>
  )
}

export default App
