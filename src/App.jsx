import { useEffect } from 'react';
import { useState } from 'react';
import Costs from './components/Costs';
import Filters from './components/Filters';
import Header from './components/Header';
import Modal from './components/Modal';
import { makeID } from './helpers';
import NewCostIcon from "./img/new-cost.svg";

function App() {
  const [budget, setBudget] = useState(Number(localStorage.getItem("budget") ?? 0));
  const [isValidBudget, setIsValidBudget] = useState(false);

  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);

  const [costs, setCosts] = useState(localStorage.getItem("costs") ? JSON.parse(localStorage.getItem("costs")) : []);

  const [editCost, setEditCost] = useState({});

  const [filter, setFilter] = useState("");
  const [filteredCosts, setFilteredCosts] = useState([]);

  useEffect(() => {
    localStorage.setItem("budget", budget ?? 0);
  }, [budget]);

  useEffect(() => {
    localStorage.setItem("costs", JSON.stringify(costs) ?? []);
  }, [costs]);



  useEffect(() => {
    if (Number(localStorage.getItem("budget") ?? 0)) {
      setIsValidBudget(true);
    }
  }, []);


  useEffect(() => {
    if (Object.keys(editCost).length > 0) {
      setModal(true);
      setTimeout(() => {
        setAnimateModal(true);
      }, 100);
    }
  }, [editCost]);
  const saveCost = cost => {
    if (cost.id) {
      setCosts(costs.map(costState => costState.id === cost.id ? cost : costState));
    } else {
      cost.id = makeID();
      cost.date = Date.now();
      setCosts([...costs, cost]);
    }

    setModal(false);
    setEditCost({});
    setTimeout(() => {
      setAnimateModal(false);
    }, 100);
  }

  const handleNewCost = () => {
    setModal(true);
    setEditCost({});
    setTimeout(() => {
      setAnimateModal(true);
    }, 100);
  }

  const deleteCost = id => {
    setCosts(costs.filter(cost => cost.id !== id));
  }

  useEffect(() => {
    if (filter) {
      setFilteredCosts(costs.filter(cost => cost.category === filter));
    }
  }, [filter]);


  return (
    <div className={modal ? "pin" : ""}>
      <Header
        budget={budget}
        setBudget={setBudget}
        costs={costs}
        setCosts={setCosts}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidBudget && (
        <>
          <main>
            <Filters filter={filter} setFilter={setFilter} />
            <Costs
              costs={costs}
              setEditCost={setEditCost}
              deleteCost={deleteCost}
              filter={filter}
              filteredCosts={filteredCosts} />
          </main>
          <div className='new-cost'>
            <img src={NewCostIcon} alt="NewCostIcon" onClick={handleNewCost} />
          </div>
        </>

      )}
      {modal && <Modal
        setModal={setModal}
        animateModal={animateModal}
        setAnimateModal={setAnimateModal}
        saveCost={saveCost}
        editCost={editCost}
        setEditCost={setEditCost}
      />}
    </div>
  )
}

export default App
