import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


 function FooterExample() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright &Copy; ODC
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default FooterExample;
