import React from "react";
import {
  Modal,
  Button,
  Card,
  CardBody,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import NavComponent from "./components/Navbar.js";
import FooterComponent from "./components/Footer.js";
class App extends React.Component {
  state = {};
  toggleModal = (state) => {
    this.setState({
      [state]: !this.state[state],
    });
  };
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  };

  constructor(props) {
    super(props);
    this.state = {
      field1: '',
      field2: '',
      field3: '',
      errors: {}
    };
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { field1, field2, field3 } = this.state;
    const errors = {};
    if (!field1.trim()) {
      errors.field1 = 'Field 1 is required';
    }
    if (!field2.trim()) {
      errors.field2 = 'Field 2 is required';
    }
    if (!field3.trim()) {
      errors.field3 = 'Field 3 is required';
    }
    if (Object.keys(errors).length === 0) {
      this.toggleModal("defaultModal");
      this.setState({ field1: '', field2: '', field3: '' });
    } else {
      this.setState({ errors });
    }
  };
  render() {
    const { field1, field2, field3, errors } = this.state;
    return (
      <>
        <NavComponent />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("./assets/img/Character/cruspero.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">Angelo R. Cruspero</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                        Hi My name is Angelo R. Cruspero. I live in Angilan Antequera Bohol. I was born on December 10,1997 in Surigao City. I completed my elementary in Angilan Elementary School and High school in Christ the King Academy. I took Bachelor of Science in Marine Transportation in Cristal e College and completed all the academic requirements on march 2018. And now I am currently taking Bachelor of Science in Information Technology and I am in my fourth year
                        </p>
                      </Col>
                    </Row>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center mt--100">
                      <Col lg="8">
                        <Card className="bg-gradient-secondary shadow">
                          <CardBody className="p-lg-5">
                            <h4 className="mb-1">Want to work with me?</h4>
                            <p className="mt-0">
                              Your project is very important to me.
                            </p>
                            <form onSubmit={this.handleSubmit}>
                              <FormGroup
                                className={classnames("mt-5")}
                              >
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-user-run" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    name="field1"
                                    value={field1}
                                    onChange={this.handleChange}
                                    placeholder="Your name"
                                    type="text"
                                    required
                                  />
                                  {errors.field1 && <span style={{ color: 'red' }}>{errors.field1}</span>}
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <InputGroup className="input-group-alternative">
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="ni ni-email-83" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    name="field2"
                                    value={field2}
                                    onChange={this.handleChange}
                                    placeholder="Email address"
                                    type="email"
                                    required
                                  />
                                  {errors.field2 && <span style={{ color: 'red' }}>{errors.field2}</span>}
                                </InputGroup>
                              </FormGroup>
                              <FormGroup className="mb-4">
                                <Input
                                  name="field3"
                                  value={field3}
                                  onChange={this.handleChange}
                                  className="form-control-alternative"
                                  cols="80"
                                  placeholder="Type a message..."
                                  rows="4"
                                  type="textarea"
                                  required
                                />
                                {errors.field3 && <span style={{ color: 'red' }}>{errors.field3}</span>}
                              </FormGroup>
                              <div>
                                <Button
                                  block
                                  className="btn-round"
                                  color="default"
                                  size="lg"
                                  type="submit"
                                >
                                  Send Message
                                </Button>
                              </div>
                            </form>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <Row>
          <Col md="4">
            <Modal
              className="modal-dialog-centered"
              isOpen={this.state.defaultModal}
              toggle={() => this.toggleModal("defaultModal")}
            >
              <div className="modal-header">
                <h6 className="modal-title" id="modal-title-default">
                  Form Submited
                </h6>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("defaultModal")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>
                  Thank you for getting in touch with me
                </p>
              </div>
              <div className="modal-footer">
                <Button
                  className="ml-auto"
                  color="link"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("defaultModal")}
                >
                  Close
                </Button>
              </div>
            </Modal>
          </Col>
        </Row>
        <FooterComponent />
      </>
    );
  }
}

export default App;
