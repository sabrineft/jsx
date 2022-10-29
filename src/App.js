import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Address from './Components/Profile/Address'
import FullName from './Components/Profile/FullName'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePhotoo from './Components/Profile/ProfilePhotoo';

function App() {
  return (
 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" /><ProfilePhotoo/>
      <Card.Body>
        <Card.Title><FullName/></Card.Title>
        <Card.Text>
        <Address/>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default App