import './App.css';
import { useState,useRef} from 'react';
import data from './data/data.js';
import Header from './Componentes/Header.jsx'
import Agregar from './Componentes/Agregar.jsx'
import Listad from './Componentes/Listado.jsx'
import Listado from './Componentes/Listado.jsx';

function App() {
  const [colaboradores,setColaboradores]=useState(data)
  const [mostrarColaboradores,setMostrarColaboradores]=useState(data)
  const buscador = useRef (null)

const handleSubmit = (e)=> {
  e.preventDefault()

if(!e.target[0].value || !e.target[1].value)return

const nuevoColaborador = {
  id: colaboradores.length + 1,
  nombre: e.target[0].value,
  correo: e.target[1].value
}

const colaboradoresActualizado =[...colaboradores,nuevoColaborador]

setColaboradores(colaboradoresActualizado)
setMostrarColaboradores(colaboradoresActualizado)

e.target[0].value = ""
e.target[1].value = ""



}

const handleKeyDown = (e)=> {
if(e.key !== 'Enter')return

const valor = buscador.current.value.toLowerCase()

const filtrado = colaboradores.filter((colaborador)=> {

  return colaborador.nombre.toLowerCase().includes(valor) ||
 colaborador.correo.toLocaleLowerCase().includes(valor) 

})

setMostrarColaboradores(filtrado)
}

const reset = ()=> {
  if (!buscador.current.value){
setMostrarColaboradores(colaboradores)
  }
}

  return (
    <div className="App">
      <Header 
      reset = {reset}
      referencia={buscador}
      buscar={handleKeyDown}>

      </Header>

    <main>
      <Agregar submit={handleSubmit}></Agregar>

    <div className='listado-colaboradores'>
    <hr></hr>
    <h3>Listado de Colaboradores</h3>
    {
      mostrarColaboradores.length > 0 ?
        <Listado listado={mostrarColaboradores}></Listado>
        : <p className='sin resultados'>No hay resultados</p>
    }
    
</div>

</main>
 

</div>
  )
}

export default App;
