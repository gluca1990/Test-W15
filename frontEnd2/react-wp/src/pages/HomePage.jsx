import React from 'react'
import HomeComponent from '../components/HomeComponent'
import { Container, Row, Col } from 'react-bootstrap'
export default function HomePage() {
  return (
    <>
    <Container>
        <Row>
            <Col xs={12}>
                <HomeComponent></HomeComponent>
            </Col>

            <Col>
            </Col>
        </Row>
    </Container>
</>
  )
}
