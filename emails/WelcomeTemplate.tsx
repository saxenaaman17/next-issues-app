import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
  Tailwind,
} from "@react-email/components";

const bodyStyles: CSSProperties = {
  background: "white",
};

const headingStyles: CSSProperties = {
  fontSize: "32px",
};

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text style={headingStyles}>Hello {name}</Text>
            <Link href="https://www.google.com/">www.google.com</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
