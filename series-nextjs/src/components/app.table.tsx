"use client";

import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

interface IProps {
  blogs: IBlog[];
}

function AppSampleTable(props: IProps) {
  const { blogs } = props;
  console.log(">>> Check props blogs: ", blogs);
  return (
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
        {blogs.map((blog: IBlog) => (
          <tr key={blog.id}>
            <td>{blog.id}</td>
            <td>{blog.title}</td>
            <td>{blog.author}</td>
            <td>
              <Button variant="warning" className="mx-3">
                Edit
              </Button>
              <Button variant="primary" className="mx-3">
                View
              </Button>
              <Button variant="danger" className="mx-3">
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default AppSampleTable;
