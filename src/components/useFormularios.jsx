import React, { useState } from 'react';

// export default function Formularios(){

//     const [nombre, setNombre] = useState("");           //INPUT TYPE TEXT
//     const [sabor, setSabor] = useState("");             //INPUT TYPE RADIO
//     const [lenguaje, setLenguaje] = useState("");       //SELECT
//     const [terminos, setTerminos] = useState(false);    //CHECKBOX

//     const handleSubmit = e => {
//         e.preventDefault();
//         alert("El formulario se ha enviado ")
//     }

//     return (
//         <>
//             <h2>Formularios</h2>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="nombre">Nombre:</label>
//                 <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
//             <p>Elige tu Sabor Js Favorito</p>
//                 <input type="radio" id="vanilla" name='sabor' value='vanilla' onChange={(e) => setSabor(e.target.value)}/>
//                 <label htmlFor="vanilla">Vanilla</label>
//                 <input type="radio" id="react" name='sabor' value='react' onChange={(e) => setSabor(e.target.value)}/>
//                 <label htmlFor="react">React</label>
//                 <input type="radio" id="angular" name='sabor' value='angular' onChange={(e) => setSabor(e.target.value)} defaultChecked/>
//                 <label htmlFor="angular">Angular</label>
//                 <input type="radio" id="vue" name='sabor' value='vue' onChange={(e) => setSabor(e.target.value)}/>
//                 <label htmlFor="vue">Vue</label>
//             <p>Elige tu lenguaje de programacion</p>
//                 <select name="lenguaje" onChange={(e) => setLenguaje(e.target.value)}>
//                     <option value="">----</option>
//                     <option value="js">JavaScript</option>
//                     <option value="php">PHP</option>
//                     <option value="py">Python</option>
//                     <option value="go">GO</option>
//                     <option value="rb">Ruby</option>
//                 </select>
//             <br/>
//             <label htmlFor="terminos">Acepto terminos y condiciones</label>
//                 <input type="checkbox" name="terminos" id="terminos" onChange={(e) => setTerminos(e.target.checked)}/>
//             <br/>
//             <input type="submit"/>
//             </form>
//         </>
//     )
// }


export default function Formularios(){
    //para todo el formulario UN STATE
    const [form, setForm] = useState({});
    // para los inputs con values que cambian
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }
    // para los inputos con checked
    const handleChecked = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.checked
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("El formulario se ha enviado ")
    }

    return (
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" value={form.nombre} onChange={handleChange}/>
            <p>Elige tu Sabor Js Favorito</p>
                <input type="radio" id="vanilla" name='sabor' value='vanilla' onChange={handleChange}/>
                <label htmlFor="vanilla">Vanilla</label>
                <input type="radio" id="react" name='sabor' value='react' onChange={handleChange}/>
                <label htmlFor="react">React</label>
                <input type="radio" id="angular" name='sabor' value='angular' onChange={handleChange} defaultChecked/>
                <label htmlFor="angular">Angular</label>
                <input type="radio" id="vue" name='sabor' value='vue' onChange={handleChange}/>
                <label htmlFor="vue">Vue</label>
            <p>Elige tu lenguaje de programacion</p>
                <select name="lenguaje" onChange={handleChecked}>
                    <option value="">----</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>
                </select>
            <br/>
            <label htmlFor="terminos">Acepto terminos y condiciones</label>
                <input type="checkbox" name="terminos" id="terminos" onChange={handleChange}/>
            <br/>
            <input type="submit"/>
            </form>
        </>
    )
}