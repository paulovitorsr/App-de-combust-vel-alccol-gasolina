import { useState } from 'react'
import './App.css'

import logoImg from './assets/logo.png'

function App() {
  const [gasolina, setGasolina] = useState()
  const [alcool, setAlcool] = useState()
  const [info, setInfo] = useState()

  function calcular(e){
    e.preventDefault()

    let calcular = (alcool / gasolina)

    if (calcular <= 0.7) {
      setInfo({
        title: "Compensa colocar Ácool",
        gasolina: FormatarMoeda(gasolina),
        alcool: FormatarMoeda(alcool)
      })
    }else{
      setInfo({
        title: "Compensa colocar Gasolina",
        gasolina: FormatarMoeda(gasolina),
        alcool: FormatarMoeda(alcool)
      })
    }
    
    setAlcool(0)
    setGasolina(0)
  }

  function FormatarMoeda(valor){
    let valorFormatado = valor.toLocaleString("pt-br", 
    {
      style: "currency",
      currency: "BRL"
    })

    return valorFormatado;
  }

  return (
   <div>
    <main className="container">
      <img 
        src={logoImg} 
        alt="Alcool ou Gasolina"
      />
      <h1 className='title'>Qual a melhor opção?</h1>

      <form className='form' onSubmit={calcular}>
        <label>
          <span>Álcool (Preço por litro):</span>
          <input 
            type="number"
            step="0.01"
            placeholder='Ex: R$ 4,90'
            min="1"
            required
            className='input'
            value={alcool}
            onChange={ (e) => setAlcool(e.target.value) }
          />
        </label>
        <label>
          <span>Gasolina (Preço por litro):</span>
          <input 
            type="number"
            step="0.01"
            placeholder='Ex: R$ 4,90'
            min="1"
            required
            className='input'
            value={gasolina}
            onChange={ (e) => setGasolina(e.target.value) }
          />
        </label>

        <input className='button' type="submit" value="Calcular" />
      </form>

      {info && Object.keys(info).length > 0 && (
        <section className='result'>
          <h2 className='result-title'>{info.title}</h2>

          <span>Álcool R$ {info.alcool}</span>
          <span>Gasolina R$ {info.gasolina}</span>
        </section>
      )}

    </main> 
   </div> 
  )
}

export default App
