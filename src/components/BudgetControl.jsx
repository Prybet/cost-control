import { useState } from "react";
import { useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const BudgetControl = ({ budget, setBudget, costs, setCosts, setIsValidBudget }) => {
    const [available, setAvailable] = useState(0);
    const [spend, setSpend] = useState(0);

    const [percent, setPercent] = useState(0);
    useEffect(() => {
        const totalSpend = costs.reduce((total, spend) => (spend.amount + total), 0);
        const totalAvailable = budget - totalSpend;
        setPercent((((budget - totalAvailable) / budget) * 100).toFixed(2));

        setSpend(totalSpend);
        setAvailable(totalAvailable);
    }, [costs]);

    const formatBudget = (number) => {
        return number.toLocaleString("es-CL", {
            style: "currency",
            currency: "CLP"
        });
    }

    const handleResetApp = () => {
        if (confirm("Desear reiniciar presupuesto y gastos?")) {
            setBudget(0);
            setCosts([]);
            setIsValidBudget(false);
        }
    }
    return (
        <div className="container budget-container shadow two-columns">
            <div>
                <CircularProgressbar
                    value={percent}
                    styles={buildStyles({
                        pathColor: percent > 100 ? "#DC2626" : "#3B82F6",
                        textColor: "#3B82F6",
                        trailColor: "#F5F5F5"
                    })}
                    text={`${percent}% Gastado`}
                />
            </div>
            <div className="budget-content">
                <button className="reset-app" type="button" onClick={handleResetApp}> Resetear App</button>
                <p>
                    <span>Presupuesto:</span> {formatBudget(budget)}
                </p>
                <p className={`${available < 0 ? "negative" : ""}`}>
                    <span>Disponible:</span> {formatBudget(available)}
                </p>
                <p>
                    <span>Gastado:</span> {formatBudget(spend)}
                </p>
            </div>
        </div>
    )
}

export default BudgetControl