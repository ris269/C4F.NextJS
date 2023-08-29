'use client'

import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { toast } from 'react-toastify'
import { mutate } from 'swr'

interface IProps {
  showModalUpdate: boolean
  setShowModalUpdate: (value: boolean) => void
  blog: IBlog | null
  setBlog: (value: IBlog | null) => void
}

function EditModal(props: IProps) {
  const { showModalUpdate: showModalUpdate, setShowModalUpdate: setShowModalUpdate, blog, setBlog } = props

  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [content, setContent] = useState<string>('')

  useEffect(() => {
    if (blog) {
      setTitle(blog.title)
      setAuthor(blog.author)
      setContent(blog.content)
    }
  }, [blog])
  

  const handleSubmit = () => {
    if (!title || !author || !content) {
      toast.error('Please fill all fields!')
      return
    }

    fetch(`http://localhost:8000/blogs/${blog?.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, author, content }),
    }).then((res) =>
      res.json().then((res) => {
        if (res) {
          toast.success('Update blog successfully!')
          setShowModalUpdate(false)
          mutate('http://localhost:8000/blogs')
        } else {
          toast.error('Update blog failed!')
        }
      })
    )
  }

  const handleCloseModal = () => {
    setTitle('')
    setAuthor('')
    setContent('')
    setBlog(null)
    setShowModalUpdate(false)
  }

  return (
    <>
      <Modal
        show={showModalUpdate}
        onHide={() => setShowModalUpdate(false)}
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

export default EditModal
