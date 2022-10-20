import styled from 'styled-components';
import {Text} from 'shared/ui'

export const ModalWrapper = styled.div`
  background-color: white;
  border-radius: 6px;
  box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px;
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
`

export const ModalTitle = styled.h2`
  color: #ba1d1d;
  text-align: center;
  margin-bottom: 20px;
`

export const ModalAbout = styled(Text)`
  color:hsl(250deg 88% 58%);
  text-align: center;
  margin-bottom: 20px;
`