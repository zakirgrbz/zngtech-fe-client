import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { UserContext } from '../contexts/UserContext';

function Dashboard() {
  const user = useContext(UserContext);
  console.log(user);
  if (!user) {
    return null;
  }
  const { name, email, role, picture, birthday, phoneNumber } = user;

  return (
    <Container className="Bgg">
      <div className='d-flex justify-content-center align-items-center'>
        <div className='col-6 d-flex flex-column align-items-center'>
          <Col md={2} className='mb-3 mt-5 mb-md-5'>
            <img
              src={picture}
              alt="Profile"
              className="rounded-circle img-fluid profile-picture"
            />
          </Col>
          <Col md className='text-center'>
            <h1 className='text-dark h1'>{name}</h1>
            <h1 className="lead text-dark h3">{email}</h1>
            <h1 className='text-dark h1'>{role}</h1>
            <p className='text-dark h3'>Birthday: {birthday}</p>
            
            <p className='text-dark h3'>Phone Number: {phoneNumber}</p>
          </Col>
        </div>
      </div>
    </Container>
  );
}
export default Dashboard;