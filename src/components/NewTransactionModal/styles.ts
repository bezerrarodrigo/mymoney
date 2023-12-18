import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 7px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme["gray-800"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border: 0;
      padding: 1rem;
      border-radius: 6px;
      background: ${(props) => props.theme["gray-900"]};
      color: ${(props) => props.theme["gray-300"]};

      &::placeholder {
        color: ${(props) => props.theme["gray-500"]};
      }
    }

    button[type="submit"] {
      height: 58px;
      border: 0;
      border-radius: 6px;
      background: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme.white};
      font-weight: bold;
      cursor: pointer;
      padding: 0 1.25rem;
      margin-top: 1.5rem;

      &:hover {
        background: ${(props) => props.theme["green-700"]};
        transition: background-color 0.2s;
      }
    }
  }
`;

export const ModalCloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  border: 0;
  line-height: 0;
  color: ${(props) => props.theme["gray-500"]};
  cursor: pointer;
`;
