import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import PostsComponent from '../components/PostsComponent'

export default function ArticlePage() {
  return (
    <>
        <Container>
            <Row>
                <Col xs={12}>
                    <PostsComponent></PostsComponent>
                </Col>

                <Col>
                </Col>
            </Row>
        </Container>
    </>
  )
    

}
