import {HeaderContainer, HeaderContent, NewTransactionButton} from "./style.ts";
import logoImg from '../../assets/logo.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt=""/>
        <NewTransactionButton>New transaction</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
};
