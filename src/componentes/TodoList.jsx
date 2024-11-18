import React, {useState} from 'react';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';
import '../hojas-de-estilo/TodoList.css'

function ListaDeTareas() { 
  
	const [tareas, setTareas] = useState([]);

	const agregarTarea = tarea => {
		console.log(tarea)

        

		if (tarea.texto.trim()){
			tarea.texto = tarea.texto.trim();
			const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);


		}
	}
	
	const eliminarTarea = id => {
		const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
		setTareas(tareasActualizadas);
	}


	const TareaCompletada = id => {
		const tareasActualizadas = tareas.map(tarea => {
			if(tarea.id === id){
				tarea.completada = !tarea.completada;
				console.log(tarea)
			}
			
			return tarea;
		})
		setTareas(tareasActualizadas);
	}

  return(
   
		<>
		<AddTodoForm onSumbit={agregarTarea} />
		<div className="tareas-lista-contenedor">
			{
				tareas.map((tarea) =>
					<TodoItem
					key={tarea.id}
					id = {tarea.id}
				texto ={tarea.texto}
				completada = {tarea.completada}
				completarTarea={TareaCompletada}
				eliminarTarea={eliminarTarea}
				 />
				
				)
			}
		</div>
		</>

  );

}

export default ListaDeTareas;