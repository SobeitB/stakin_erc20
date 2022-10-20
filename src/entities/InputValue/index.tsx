import {InputWrapper} from "./input.styled";
import {StatusValue} from "./type";
import {useValues} from "./model";

export const InputValue = ({status}:{status:StatusValue}) => {
   const [valueInput, setValueInput] = useValues(status)

   return <InputWrapper
         placeholder='ether'
         type='number'
         onChange={setValueInput}
         value={valueInput.toString()}
         min="0"
         step='0.01'
   />
}

