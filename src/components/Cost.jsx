import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list';
import "react-swipeable-list/dist/styles.css"
import { formatDate } from "../helpers";
import Icon_food from "../img/icon_food.svg";
import Icon_health from "../img/icon_health.svg";
import Icon_house from "../img/icon_house.svg";
import Icon_leisure from "../img/icon_leisure.svg";
import Icon_saving from "../img/icon_saving.svg";
import Icon_spend from "../img/icon_spend.svg";
import Icon_suscriptions from "../img/icon_suscriptions.svg";


const Cost = ({ cost , setEditCost, deleteCost}) => {
  const dictionary = {
    food: Icon_food,
    health: Icon_health,
    house: Icon_house,
    leisure: Icon_leisure,
    saving: Icon_saving,
    spends: Icon_spend,
    suscriptions: Icon_suscriptions
  }
  
  const { category, name, amount, date, id } = cost;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={()=>setEditCost(cost)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  );
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction destructive={true} onClick={()=>deleteCost(id)}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem leadingActions={leadingActions()} trailingActions={trailingActions()}>
        <div className="cost shadow">
          <div className="content-cost">
            <img src={dictionary[category]} alt="Icon Cost" />
            <div className="description-cost">
              <p className="category">{category}</p>
              <p className="name-cost">{name}</p>
              <p className="date-cost">
                Agregado el : {""}
                <span>{formatDate(date)}</span>
              </p>
            </div>
            <p className="amount-cost">${amount}</p>
          </div>
        </div>
      </SwipeableListItem>

    </SwipeableList>
  )
}

export default Cost