'use client'

import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { toast } from 'react-toastify'
import { mutate } from 'swr'

interface IProps {
  showModalCreate: boolean
  setShowModalCreate: (value: boolean) => void
}

function CreateModal(props: IProps) {
  const { showModalCreate, setShowModalCreate } = props

  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const handleSubmit = () => {
    if (!title || !author || !content) {
      toast.error('Please fill all fields!')
      return
    }

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, author, content }),
    }).then((res) =>
      res.json().then((res) => {
        if (res) {
          toast.success('Create new blog successfully!')
          setShowModalCreate(false)
          mutate('http://localhost:8000/blogs')
        } else {
          toast.error('Create new blog failed!')
        }
      })
    )
  }

  const handleCloseModal = () => {
    setTitle('')
    setAuthor('')
    setContent('')
    setShowModalCreate(false)
  }

  return (
    <>
      <Modal
        show={showModalCreate}
        onHide={() => setShowModalCreate(false)}
        backdrop='static'
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='email'
                placeholder='...'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Author</Form.Label>
              <Form.Control
                type='text'
                placeholder='...'
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Content</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant='primary' onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CreateModal
