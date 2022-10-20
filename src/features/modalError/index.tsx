import {createPortal} from "react-dom";
import {useEffect, useMemo} from "react";
import {useAppSelector} from "app/model/hooks";
import {ModalAbout, ModalTitle, ModalWrapper} from "shared/ui/modal.styled";
import {ClearError} from "../clearError";

const modalRootElement = document.querySelector('#modal')

export const modalError = (component: () => React.ReactNode) => () => {
   const {error} = useAppSelector(state => state.blockChainSlice)
   const element = useMemo(() => document.createElement('div'), []);

   useEffect(() => {
      if(error && modalRootElement !== null) {
         modalRootElement['appendChild'](element)

         return () => {
            modalRootElement['removeChild'](element)
         }
      }
   }, [error])

   return (
      <>
         {createPortal(<Modal error={error} />, element)}
         {component()}
      </>
   )
}

export const Modal = ({error}: {error:string | false}) => {

   return(
      <div>
         <ModalWrapper>
            <ModalTitle>Error</ModalTitle>
            <ModalAbout>{error}</ModalAbout>
            <ClearError />
         </ModalWrapper>
      </div>
   )
}