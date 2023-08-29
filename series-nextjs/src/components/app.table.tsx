'use client'

import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'
import CreateModal from './create.modal'
import { useState } from 'react'
import EditModal from './update.modal'

interface IProps {
  blogs: IBlog[]
}

function AppSampleTable(props: IProps) {
  const { blogs } = props

  const [blog, setBlog] = useState<IBlog | null>(null)

  const [showModalCreate, setShowModalCreate] = useState<boolean>(false)
  const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false)



  return (
    <>
      <div
        className='mb-3'
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <h3>Table Blogs</h3>
        <Button variant='secondary' onClick={() => setShowModalCreate(true)}>
          Add New
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((item: IBlog) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>
                <Button
                  variant='warning'
                  className='mx-3'
                  onClick={() => {
                    setBlog(item)
                    setShowModalUpdate(true)
                  }}
                >
                  Edit
                </Button>
                <Button variant='primary' className='mx-3'>
                  View
                </Button>
                <Button variant='danger' className='mx-3'>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
        <CreateModal
          showModalCreate={showModalCreate}
          setShowModalCreate={setShowModalCreate}
        />
        <EditModal
          showModalUpdate={showModalUpdate}
          setShowModalUpdate={setShowModalUpdate}
          blog={blog}
          setBlog={setBlog}
        />
      </Table>
    </>
  )
}

export default AppSampleTable
