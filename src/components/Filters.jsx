const Filters = ({ filter, setFilter }) => {
    return (
        <div className="filters shadow container">
            <form>
                <div className="field">
                    <label> Filtrar Gastos</label>
                    <select
                        value={filter}
                        onChange={e => setFilter(e.target.value)}
                    >
                        <option value="">-- Todas las Categorias --</option>
                        <option value="saving"> Ahorro</option>
                        <option value="food"> Comida</option>
                        <option value="spends"> Gastos Varios</option>
                        <option value="house"> Casa</option>
                        <option value="leisure"> Ocio</option>
                        <option value="health"> Salud</option>
                        <option value="suscriptions"> Suscripciones</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filters