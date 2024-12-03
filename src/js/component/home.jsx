import React, { useState } from "react";




//create your first component
const Home = () => {
	const [tarea, setTarea] = useState("")
	const [listaTareas, setListatareas] = useState([])
	console.table(listaTareas)

	function borrartarea(index) {
		// aqui estamos almazenando un copia del array principal ya que puede genrar conflicto con el array principal 

		const nuevalista = [...listaTareas]
		nuevalista.splice(index, 1);
		setListatareas(nuevalista)
	}

	let listadetareasnuevas = listaTareas.map((item, index) => <li key={index}>   {item} <span onClick={() => { console.log(index); borrartarea(index) }}> x </span> </li>)

	function agregartarea(e) {

		// Aqui estamos utilizando una condicion para 
		if (e.key == "Enter") {

			// Al array listaTareas le agregamos la informacion que recopila el input(Tarea)

			// Creamos un nuevo array en el cual se lo incorporamos a la base de datos que recopila el input(Tarea)
			let arraynuevo = listaTareas.concat(tarea)

			// // Ahora aqui le pasamos el valor de arraynuevo a la funcion setListatareas

			setListatareas(arraynuevo)

			// quiero agregar lo que se esta escribiendo(Tarea) a una lista (Listatareas)

			setTarea('')
		}

	}

	return (
		<div className=" p-3 mb-2 bg-light">
			<div className="">

				<div className=" cabecera fw-light "> <h1> TAREAS </h1></div>


				<input type=" input text" onChange={(e) => setTarea(e.target.value)} value={tarea}
					onKeyDown={agregartarea}
				/>

				<ul className="lista">
					{listadetareasnuevas}
				</ul>

				<div> <p> {listaTareas.length} </p> </div>
			</div>
		</div>
	);
};

export default Home;
