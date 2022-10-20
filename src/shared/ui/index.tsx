import styled from 'styled-components'

export const Display = styled(`div`)`
  background: #10121b;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 710px) {
    margin: 20px 0;
  }
`;

export const Text = styled.p`
  font-weight: bolder;
  font-size: 16px;
  font-family: 'Times new Roman';
  margin: 0 10px;
`

interface propsInformation {
   isSingle:boolean;
}

export const Information = styled.header.attrs((props:propsInformation) => props)`
  width: 400px;
  height: ${props => props.isSingle ? 15 : 45}px;
  display: flex;
  align-items: center;
  justify-content: ${props => props.isSingle ? 'center' : 'space-between' };
  
  @media(max-width: 1300px) {
    width: 350px;
  }

  @media(max-width: 1130px) {
    width: 300px;
  }

  @media(max-width: 995px) {
    width: 250px;
  }

  @media(max-width: 850px) {
    width: 200px;
    flex-direction: column;
  }

  @media(max-width: 710px) {
    margin: 0 auto;
  }
`

interface propsButton {
   isConnectBtn:boolean;
}

export const Button = styled.button.attrs((props:propsButton) => props)`
  border-radius: 7px;
  background: white;
  color:hsl(250, 43.0%, 48.0%);
  border: none;
  padding: ${props => !props.isConnectBtn ? '10' : '0' }px;
  width: ${props => !props.isConnectBtn ? '90%' : '150px' };
  height: ${props => !props.isConnectBtn ? '45' : '40' }px;
  font-size: ${props => !props.isConnectBtn ? '20' : '15px' }px;
  font-weight: bolder;
  margin: 10px auto;
  cursor: pointer;
  
  @media(max-width: 850px) {
    font-size: 17px;
  }
`