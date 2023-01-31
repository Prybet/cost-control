import React, { useState } from 'react'
import Message from './Message';

const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {

    const [msg, setMsg] = useState("");
    const handleBudget = (e) => {
        e.preventDefault();
        if (!budget || budget < 0) {
            setMsg("No es un presupuesto válido");
            setBudget(0);
            return;
        }
        setMsg("");
        setIsValidBudget(true);
    }
    return (
        <div className='container budget-container shadow'>
            <form onSubmit={handleBudget} className='form'>
                <div className='field'>
                    <label>Definir Presupuesto</label>
                    <input className='new-budget' type="text" placeholder='Añade tu presupuesto'
                        value={budget}
                        onChange={e => setBudget(Number(e.target.value))} />
                </div>
                <input type="submit" value="Añadir" />
                {msg && <Message type="error">{msg}</Message>}
            </form>
        </div>
    )
}

export default NewBudget