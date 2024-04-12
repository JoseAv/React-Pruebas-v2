import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types';
import {ShowAll} from './showTaskAll'
import {ShowFilters} from './taskFilters'
export const Main=({filters,products,filTask,handleDeleteCompleted,handleDelete,CompleteInput,handleCompleteAll,ShowAllProducts,ShowPendingProducts,ShowCompletedProducts})=> {



    return(
        <div className='container'>
            {filters === 'all'? <ShowAll products={products} handleDelete={handleDelete} CompleteInput={CompleteInput}/> 
            :  <ShowFilters filTask={filTask} handleDelete={handleDelete} CompleteInput={CompleteInput}/> }
            
           
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
    filTask:PropTypes.array,
    filters:PropTypes.any,
    handleDelete: PropTypes.func.isRequired,
    CompleteInput: PropTypes.func.isRequired,
    handleCompleteAll: PropTypes.func.isRequired,
    ShowAllProducts: PropTypes.func.isRequired,
    ShowPendingProducts: PropTypes.func.isRequired,
    ShowCompletedProducts: PropTypes.func.isRequired,
    handleDeleteCompleted: PropTypes.func.isRequired,
  };