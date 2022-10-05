const Header = ({reset,referencia, buscar})=> {
return(
<header>
  <h2>Buscador de Colaboradores</h2>
  <input 
  ref={referencia}
  type="text" 
  placeholder="Busca un colaborador" 
  onChange={()=>reset()}
  onKeyDown={(e)=>buscar(e)}/>
</header>

)
  
}

export default Header