import {useAppDispatch, useAppSelector} from "app/model/hooks";
import {StatusValue} from "../type";
import {setPurchase, setStake} from "./valuesSlice";

type eventType = React.ChangeEvent<HTMLInputElement>;
type returnsValue = [
   valueInput:number,
   setValueInput:(event:eventType) => void
]

export const useValues = (type:StatusValue):returnsValue => {
   const {purchase, stake} = useAppSelector(state => state.valuesSlice)
   const dispatch = useAppDispatch();

   const onChange = (event:eventType) => {
      const {value} = event.target

      dispatch(
         type === StatusValue.stake ?
         setStake(value) : setPurchase(value)
      )
   }

   if(type === StatusValue.purchase) {
      return [
         purchase,
         onChange
      ]
   } else {
      return [
         stake,
         onChange
      ]
   }
}