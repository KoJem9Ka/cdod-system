import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const ModalBG = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Modal = styled.div`
  text-align: left;
  background-color: #fff;
  width: 50%;
  padding: 2rem 3rem;
  border-radius: 25px;
`

type ModalWindowProps = {
  closeHanlder: ()=> void
} & PropsWithChildren

const ModalWindow: React.FC <ModalWindowProps> = ({ closeHanlder, children }) => (
  <ModalBG onClick={closeHanlder}>
    <Modal>
      {children}
    </Modal>
  </ModalBG>
)

export default ModalWindow