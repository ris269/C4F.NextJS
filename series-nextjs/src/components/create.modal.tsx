'use client'

import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

interface IProps {
  showModalCreate: boolean
  setShowModalCreate: (value: boolean) => void
}

function CreateModal(props: IProps) {
  const { showModalCreate, setShowModalCreate } = props

  return (
    <>
      <Modal
        show={showModalCreate}
        onHide={() => setShowModalCreate(false)}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setShowModalCreate(false)}>
            Close
          </Button>
          <Button variant='primary'>Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CreateModal
