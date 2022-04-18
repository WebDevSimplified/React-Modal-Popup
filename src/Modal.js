import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";

const ModalWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 50px;
  z-index: 1000;
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.7);
  z-index: 1000;
`;

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <Overlay />
      <ModalWrap>
        <button onClick={onClose}>Close Modal</button>
        {children}
      </ModalWrap>
    </>, 
    document.getElementById('portal')
  );
}
