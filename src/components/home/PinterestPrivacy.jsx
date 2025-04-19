import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const PinterestPrivacy = () => {
  return (
    <Container className="pinterest-privacy">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="display-4 mb-4">Privacy Policy for PinSmart Organizer</h1>
          <p className="text-muted mb-4">Effective Date: {new Date().toLocaleDateString()}</p>

          <section className="mb-5">
            <h2 className="h3 mb-3">Introduction</h2>
            <p>
              PinSmart Organizer respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and disclose information that we gather when you use the PinSmart Organizer app.
            </p>
          </section>

          <section className="mb-5">
            <h2 className="h3 mb-3">Information We Collect</h2>
            <ul>
              <li className="mb-2">
                <strong>User Data:</strong> We collect user authentication data when you sign in using Pinterest's API.
              </li>
              <li className="mb-2">
                <strong>Usage Data:</strong> Information about your usage of the app, such as the Pins you interact with, is collected for providing better services and analytics.
              </li>
            </ul>
          </section>

          <section className="mb-5">
            <h2 className="h3 mb-3">How We Use Your Information</h2>
            <ul>
              <li className="mb-2">To provide the features of the PinSmart Organizer app.</li>
              <li className="mb-2">To track your engagement with Pins and provide analytics.</li>
              <li className="mb-2">To improve the performance and functionality of the app.</li>
            </ul>
          </section>

          <section className="mb-5">
            <h2 className="h3 mb-3">Data Security</h2>
            <p>
              Your data is stored securely and is never shared with third parties without your consent. We adhere to all legal requirements to protect your personal data.
            </p>
          </section>

          <section className="mb-5">
            <h2 className="h3 mb-3">Contact Us</h2>
            <p>
              For any questions regarding this Privacy Policy, please contact us at: [your contact email]
            </p>
          </section>

          <footer className="text-muted mt-5">
            <p>Developed by All Tech Here</p>
          </footer>
        </Col>
      </Row>
    </Container>
  );
};

export default PinterestPrivacy; 