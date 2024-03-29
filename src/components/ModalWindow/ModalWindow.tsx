import React, { PropsWithChildren, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { ReactComponent as IconExit } from '../../assets/icons/IconExit.svg'

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
  display: flex;
  position: relative;
  text-align: left;
  background-color: #fff;
  width: 50%;
  padding: 1rem;
  border-radius: 25px;

  & > div {
    margin: 2rem 1rem;
    width: 100%;
  }
`

const CloseButton = styled.button`
  display: flex;
  position: absolute;
  top: 1rem;
  right: 1rem;

  cursor: pointer;
  padding: 0.7rem;
  border-radius: 100rem;
  background-color: rgba(255, 0, 0, 0.1);

  transition: 300ms;

  & > svg {
    fill: red;
    transition: 300ms;
  }

  &:hover {
    background-color: red;

    & > svg {
      fill: white;
    }
  }

`

type ModalWindowProps = {
  closeHandler: ()=> void
} & PropsWithChildren

const ModalWindow: React.FC<ModalWindowProps> = ({ children, closeHandler }) => {
	
  const closeModal = useCallback((e: KeyboardEvent) => {
    e.key === 'Escape' && closeHandler()
  }, [])
	
  useEffect(() => {
    window.addEventListener('keydown', closeModal)
    return () => window.removeEventListener('keydown', closeModal)
  }, [])
	
	
  return (
    <ModalBG
      tabIndex={0}
      onClick={closeHandler}
    >
      <Modal onClick={event => event.stopPropagation()}>
        <CloseButton onClick={closeHandler}>
          <IconExit/>
        </CloseButton>
        {children}
      </Modal>
    </ModalBG>
	
  )
}

export default ModalWindow