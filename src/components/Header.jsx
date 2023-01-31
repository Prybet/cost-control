import React from 'react'
import BudgetControl from './BudgetControl'
import NewBudget from './NewBudget'

const Header = ({ budget, setBudget, costs, setCosts, isValidBudget, setIsValidBudget }) => {
    return (
        <header>
            <h1>Planificador de gastos</h1>
            {isValidBudget ? (
                <BudgetControl
                    budget={budget}
                    setBudget={setBudget}
                    costs={costs}
                    setCosts={setCosts}
                    setIsValidBudget={setIsValidBudget}
                />
            ) : (
                <NewBudget
                    budget={budget}
                    setBudget={setBudget}
                    setIsValidBudget={setIsValidBudget}
                />
            )}
        </header>
    )
}

export default Header