import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const PinterestProduct = () => {
  return (
    <Container className="pinterest-product">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1 className="display-4 mb-4">PinSmart Organizer</h1>
          <h2 className="h4 mb-4">Pinterest Management Tool</h2>
          <p className="lead mb-4">
            PinSmart Organizer helps users organize and schedule their Pinterest Pins by allowing them to group Pins into custom categories, track engagement metrics, and schedule posts to boards at optimal times. The app connects securely to Pinterest using the official API and helps users maximize the value of their Pinterest content.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={4} className="text-center mb-4">
          <div className="feature-box p-4">
            <h3 className="h4 mb-3">Pin Scheduling</h3>
            <p>Allows users to schedule Pins at specific times for optimal engagement.</p>
          </div>
        </Col>
        <Col md={4} className="text-center mb-4">
          <div className="feature-box p-4">
            <h3 className="h4 mb-3">Content Organization</h3>
            <p>Categorize Pins into custom folders or boards for better management.</p>
          </div>
        </Col>
        <Col md={4} className="text-center mb-4">
          <div className="feature-box p-4">
            <h3 className="h4 mb-3">Engagement Insights</h3>
            <p>Provides detailed analytics on Pins' performance and engagement metrics.</p>
          </div>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col className="text-center">
          <p className="mb-4">
            The app is designed for personal use or small business owners looking to streamline their Pinterest management process.
          </p>
          <a href="http://www.steintech.studio" className="btn btn-primary">
            Visit SteinTech Studio
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default PinterestProduct; 