import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types';
export const Main=({products,handleDeleteCompleted,handleDelete,CompleteInput,handleCompleteAll,ShowAllProducts,ShowPendingProducts,ShowCompletedProducts})=> {
const productsNoEmpty = products.length > 0


    return(
        <div className='container'>
        <div>
        {productsNoEmpty ?   products.map(tsk => (
                <div key={tsk.id} className="container-task">
                        <input type="checkbox" className="form-check-input" onChange={()=> CompleteInput(tsk)} checked={tsk.completed}/>
                        <h2 style={{textDecoration: tsk.completed ? 'line-through' : 'none'}} >{tsk.title}</h2>
                        <button className="btn btn-danger" onClick={()=>{handleDelete({tsk})}}>x</button>
                        
                </div>


        )):  <h2>Sin Tareas Aun</h2> }
        </div>

            <div className='listBotom'><button onClick={()=> handleCompleteAll()}>Completar Todos</button>
                <button onClick={ShowCompletedProducts}>Mostrar Completados</button>
                <button onClick={ShowPendingProducts}>Mostrar Sin Completar</button>
                <button onClick={ShowAllProducts}>Mostrar Todos</button>
                <button onClick={handleDeleteCompleted}>Borrar Completadas</button>
            </div>
        </div>

    )


}


Main.propTypes = {
    products: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    CompleteInput: PropTypes.func.isRequired,
    handleCompleteAll: PropTypes.func.isRequired,
    ShowAllProducts: PropTypes.func.isRequired,
    ShowPendingProducts: PropTypes.func.isRequired,
    ShowCompletedProducts: PropTypes.func.isRequired,
    handleDeleteCompleted: PropTypes.func.isRequired,
  };