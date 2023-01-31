import { useEffect } from "react";
import { useState } from "react";
import CLoseBtn from "../img/close.svg"
import Message from "./Message";

const Modal = ({ setModal, animateModal, setAnimateModal, saveCost, editCost, setEditCost }) => {
    const [msg, setMsg] = useState("");
    const [name, setName] = useState("");
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState(0);
    const [date, setDate] = useState(0);
    const [id, setId] = useState(0);


    useEffect(() => {
        if (Object.keys(editCost).length > 0) {
            setName(editCost.name);
            setAmount(editCost.amount);
            setCategory(editCost.category);
            setDate(editCost.date);
            setId(editCost.id);
        }
    }, []);
    const closeModal = () => {
        setAnimateModal(false);
        setEditCost({});
        setTimeout(() => {
            setModal(false);
        }, 300);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if ([name, amount, category].includes("")) {
            setMsg("Todos los campos son obligatorios");
            setTimeout(() => {
                setMsg("");
            }, 2000);
            return;
        }
        saveCost({ name, amount, category, id , date });
    }
    return (
        <div className="modal">
            <div className="close-modal">
                <img src={CLoseBtn} alt="Close Button" onClick={closeModal} />
            </div>
            <form className={`form ${animateModal ? "animate" : "close"}`} onSubmit={handleSubmit}>
                <legend> {editCost.name ? "Editar Gasto" : "Nuevo Gasto"}</legend>
                {msg && <Message type="error">{msg}</Message>}
                <div className="field">
                    <label htmlFor="name"> Nombre Gasto</label>
                    <input id="name" type="text" placeholder="Añade el nombre del gasto" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="field">
                    <label htmlFor="amount"> Nombre Gasto</label>
                    <input id="amount" type="number" placeholder="Añade la cantidad del gasto: ej. 20000" value={amount} onChange={e => setAmount(Number(e.target.value))} />
                </div>
                <div className="field">
                    <label htmlFor="category">Categoria</label>
                    <select id="category" value={category} onChange={e => setCategory(e.target.value)}>
                        <option value="">-- Seleccione --</option>
                        <option value="saving"> Ahorro</option>
                        <option value="food"> Comida</option>
                        <option value="spends"> Gastos Varios</option>
                        <option value="house"> Casa</option>
                        <option value="leisure"> Ocio</option>
                        <option value="health"> Salud</option>
                        <option value="suscriptions"> Suscripciones</option>
                    </select>
                </div>
                <input type="submit" value={editCost.name ? "Guardar Cambios" : "Nuevo Gasto"} />
            </form>
        </div>
    )
}

export default Modal