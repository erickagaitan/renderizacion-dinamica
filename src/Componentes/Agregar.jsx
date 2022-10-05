const Agregar = ({submit})=> {
    return(
 
<section className="agregar-colaborador">
    <form onSubmit={(e)=> submit(e)}>
        <h4>Nombre del colaborador</h4>
        <input type="text" placeholder="Ingresa el nombre del colaborador"/>
        <h4>Correo del colaborador</h4>
        <input type="text" placeholder="Ingresa correo del colaborador"/>
        
        <button>Agregar colaborador</button>
    </form>

        </section>
    
    )
      
    }
    
    export default Agregar