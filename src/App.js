import React, { useState } from "react";
import Modal from "./Modal";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const Other = styled.div`
  background: red;
  position: relative;
  z-index: 2;
  padding: 10px;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Nav = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
`;

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      <Nav>
        <div>Heading</div>
        <ButtonWrapper onClick={() => console.log("clicked")}>
          <button onClick={() => setIsOpen(true)}>Open Modal</button>
        </ButtonWrapper>
      </Nav>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        Fancy Modal
      </Modal>
      <Other>Other Content</Other>
    </Container>
  );
}
