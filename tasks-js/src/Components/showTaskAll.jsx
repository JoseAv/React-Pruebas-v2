import PropTypes from 'prop-types';

export function ShowAll({products,CompleteInput,handleDelete}){

    const productsNoEmpty = products.length > 0

return(
    <div>
        {productsNoEmpty ?   products.map(tsk => (
                <div key={tsk.id} className="container-task">
                        <input type="checkbox" className="form-check-input" onChange={()=> CompleteInput(tsk)} checked={tsk.completed}/>
                        <h2 style={{textDecoration: tsk.completed ? 'line-through' : 'none'}} >{tsk.title}</h2>
                        <button className="btn btn-danger" onClick={()=>{handleDelete({tsk})}}>x</button>
                        
                </div>


        )):  <h2>Sin Tareas Aun</h2> }
        </div>



)

    
}


ShowAll.propTypes = {
    products: PropTypes.array.isRequired,
    CompleteInput:PropTypes.func,
    handleDelete:PropTypes.func
}