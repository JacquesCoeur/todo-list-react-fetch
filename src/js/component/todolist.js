import React, { useState, useEffect } from "react";

export const TodoList = () => {
	const [tarea, setTarea] = useState("");
	const [listaTareas, setListaTareas] = useState([]);
	return (
		<div>
			<div className="contenedor">
				<h1>Tareas por hacer!</h1>
				<input
					placeholder="agrega una tarea!"
					onChange={(e) => {
						setTarea(e.target.value);
					}}
				/>
				<button
					onClick={() => {
						tarea == ""
							? null
							: setListaTareas([...listaTareas, tarea]);
					}}>
					Agregar tarea
				</button>
				<div>
					{listaTareas.map((tarea, key) => {
						return (
							<p className="textito" key={key}>
								{tarea}
								<button
									className="buttoncito"
									onClick={() => {
										setListaTareas(
											listaTareas.filter(function (
												item,
												i
											) {
												return i !== key;
											})
										);
									}}>
									X
								</button>
							</p>
						);
					})}
				</div>
				<div>
					<p>Hay {listaTareas.length} tareas agregadas! </p>
				</div>
			</div>
		</div>
	);
};
