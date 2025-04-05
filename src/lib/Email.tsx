import * as React from "react";
import {
  Html,
  Body,
  Container,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Hr,
  Link,
} from "@react-email/components";

type Props = {
  name: string;
  surname: string;
  email: string;
  message: string;
};

export function Email(props: Props) {
  const { name, surname, email, message } = props;

  return (
    <Html lang="en">
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header */}
          <Section style={headerStyle}>
            <Heading as="h1" style={headingStyle}>
              New Contact Form Submission
            </Heading>
          </Section>

          <Hr style={hrStyle} />

          {/* Contact Information */}
          <Section style={sectionStyle}>
            <Heading as="h2" style={subHeadingStyle}>
              Contact Details
            </Heading>
            <Row style={rowStyle}>
              <Column style={labelColumnStyle}>
                <Text style={labelStyle}>Name:</Text>
              </Column>
              <Column style={valueColumnStyle}>
                <Text style={valueStyle}>{name}</Text>
              </Column>
            </Row>
            <Row style={rowStyle}>
              <Column style={labelColumnStyle}>
                <Text style={labelStyle}>Surname:</Text>
              </Column>
              <Column style={valueColumnStyle}>
                <Text style={valueStyle}>{surname}</Text>
              </Column>
            </Row>
            <Row style={rowStyle}>
              <Column style={labelColumnStyle}>
                <Text style={labelStyle}>Email:</Text>
              </Column>
              <Column style={valueColumnStyle}>
                <Text style={valueStyle}>
                  <Link href={`mailto:${email}`} style={linkStyle}>
                    {email}
                  </Link>
                </Text>
              </Column>
            </Row>
          </Section>

          <Hr style={hrStyle} />

          {/* Message */}
          <Section style={sectionStyle}>
            <Heading as="h2" style={subHeadingStyle}>
              Message
            </Heading>
            <Text style={messageStyle}>{message}</Text>
          </Section>

          {/* Footer */}
          <Section style={footerStyle}>
            <Text style={footerTextStyle}>
              © {new Date().getFullYear()} Language Course. All rights
              reserved.
            </Text>
            <Text style={footerTextStyle}>
              This is an automated email sent from our contact form.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const bodyStyle = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '"-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  margin: "0",
  padding: "0",
};

const containerStyle = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px",
};

const headerStyle = {
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "8px 8px 0 0",
  textAlign: "center" as const,
  marginBottom: "0",
};

const headingStyle = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "16px 0 0",
  padding: "0",
  textAlign: "center" as const,
};

const subHeadingStyle = {
  color: "#333",
  fontSize: "18px",
  fontWeight: "bold",
  margin: "0 0 16px",
  padding: "0",
};

const sectionStyle = {
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "0",
  marginBottom: "0",
};

const hrStyle = {
  borderColor: "#e6ebf1",
  margin: "0",
};

const labelStyle = {
  color: "#666",
  fontSize: "14px",
  fontWeight: "bold",
  margin: "8px 0",
};

const valueStyle = {
  color: "#333",
  fontSize: "14px",
  margin: "8px 0",
};

const linkStyle = {
  color: "#2563eb",
  textDecoration: "none",
};

const messageStyle = {
  color: "#333",
  fontSize: "14px",
  lineHeight: "24px",
  margin: "8px 0",
  whiteSpace: "pre-wrap" as const,
};

const footerStyle = {
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "0 0 8px 8px",
  textAlign: "center" as const,
};

const footerTextStyle = {
  color: "#8898aa",
  fontSize: "12px",
  margin: "4px 0",
};

const rowStyle = {
  margin: "0 0 8px",
  width: "100%",
};

const labelColumnStyle = {
  width: "30%",
  paddingRight: "16px",
  textAlign: "right" as const,
};

const valueColumnStyle = {
  width: "70%",
  textAlign: "left" as const,
};

export default Email;
