import React from "react";
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

class FooterComponent extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    target="_blank"
                  >
                  </a>
                </div>
              </Col>
              <Col md="6">
                <Nav className=" nav-footer justify-content-end">
                  <NavItem>
                    <NavLink>
                      NAME
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default FooterComponent;
