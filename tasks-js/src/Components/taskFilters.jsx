import PropTypes from 'prop-types';

export function ShowFilters({filTask,CompleteInput,handleDelete}){

    const productsNoEmpty = filTask.length > 0

return(
    <div>
        {productsNoEmpty ?   filTask.map(tsk => (
               <div key={tsk.id} className="container-task">
               <input type="checkbox" className="form-check-input" onChange={()=> CompleteInput(tsk)} checked={tsk.completed}/>
               <h2 style={{textDecoration: tsk.completed ? 'line-through' : 'none'}} >{tsk.title}</h2>
               <button className="btn btn-danger" onClick={()=>{handleDelete({tsk})}}>x</button>
               
       </div>

        )):  <h2>Sin Tareas Aun</h2> }
        </div>



)

    
}

ShowFilters.propTypes = {
    filTask: PropTypes.array,
    CompleteInput:PropTypes.func,
    handleDelete:PropTypes.func
}