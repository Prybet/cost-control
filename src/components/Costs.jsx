import Cost from "./Cost"

const Costs = ({ costs, setEditCost, deleteCost, filter, filteredCosts }) => {
    return (
        <div className="costs-list container">
            {
                filter ?
                    (
                        <>
                            <h2> {filteredCosts.length ? "Gastos" : "No hay gastos en esta Categroria"} </h2>
                            {filteredCosts.map(cost => (
                                <Cost key={cost.id} cost={cost} setEditCost={setEditCost} deleteCost={deleteCost} />
                            ))}
                        </>

                    ) : (
                        <>
                            <h2> {costs.length ? "Gastos" : "No hay gastos aún"} </h2>
                            {costs.map(cost => (
                                <Cost key={cost.id} cost={cost} setEditCost={setEditCost} deleteCost={deleteCost} />
                            ))}
                        </>
                    )
            }
        </div>
    )
}

export default Costs