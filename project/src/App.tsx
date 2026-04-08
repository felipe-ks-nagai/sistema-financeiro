import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import './App.css'


function App() {
  type Exemplo = {
    id: number,
    valor: number;
    data: string;
    categoria: string;
    descricao: string;
  }
  const dados: Exemplo[] = [
  {id: 1, valor: 150, data: "01/04", categoria: "Alimentação", descricao: "Mercado" },
  {id:1, valor: 30, data: "02/04", categoria: "Transporte", descricao: "Uber" } ]
  const cabecalho: string[] = ["Valor","Data","Categoria","Descrição","Total"]
  

  return (
    <>
      <table>
        <thead>
          <tr>
            {cabecalho.map((element,index) => (
              <th key={element}>{element}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>{dados.map((element) => (
              <input type='hidden' id={ element.id}>
              <th>{element.valor}</th>
              <th>{element.}</th>
              <th>{element.id}</th>
              <th>{element.id}</th>
            ))}
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default App
