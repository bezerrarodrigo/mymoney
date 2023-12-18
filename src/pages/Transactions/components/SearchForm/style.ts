import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    height: 54px;
    background: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};
    border-radius: 6px;
    border: 0;
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  button {
    display: flex;
    padding: 0.875rem 2rem;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    border-radius: 0.375rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme["green-500"]};
    color: ${(props) => props.theme["green-500"]};
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme["green-500"]};
      border-color: ${(props) => props.theme["green-300"]};
      color: ${(props) => props.theme["white"]};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`;
