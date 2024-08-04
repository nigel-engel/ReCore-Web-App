import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Font,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

export default function Email() {
  return (
    <div className="flex justify-center mx-auto">
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>This is the preview text of the email</Preview>
      <Tailwind>
        <Body className="bg-gray-500 max-w-[580px] mx-auto my-auto">
          <Container className="bg-white mt-[32px] p-[20px] leading-[24px] tracking-normal">
            <Section>
              <Row>
                <Column className="max-w-[32px]" align="left" width="32px">
                  <Img 
                    src="https://tinypic.host/images/2024/07/25/recore-icon-blue.png"  
                    width="32px"
                  />
                </Column>
                <Column>
                  <Heading as="h2" className="text-[20px] font-medium ml-2 text-blue-600">
                    ReCore
                  </Heading>
                </Column>
              </Row>
            </Section>
            
            <Heading className="text-[31px] font-semibold text-gray-950">
              Password Reset
            </Heading>
            
            <Button
              href="https://example.com"
              className="bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
            > 
              Reset Your Password →
            </Button>
            
            <Text className="text-[16px] text-gray-600">
              You have requested to reset your password.
              After you click the button above, you'll be prompted to complete the following steps:
            </Text>
            
            <Section className="m-5">
              <Text className="text-[16px] text-gray-600">
                1. Enter a new password.
              </Text>
              <Text className="text-[16px] text-gray-600">
                2. Confirm your new password.
              </Text>
              <Text className="text-[16px] text-gray-600">
                3. Submit new password.
              </Text>
            </Section>
            
            <Heading className="text-[20px] font-semibold text-gray-950">
              This link is valid for one use only. It will expire in 2 hours.
            </Heading>
            
            <Text className="text-[16px] text-gray-600">
              If you didn't request this password reset or you received this message in error, please disregard this email. 
            </Text>
            
            <Section>
              <Row className="mt-[40px]">
                <Column align="right" style={{ width: "45%" }}>
                  <Link href="#">
                    <Img src="https://tinypic.host/images/2024/07/13/X.png" alt="X" border="0" width="22px" />
                  </Link>
                </Column>
                <Column>
                  <Link href="#">
                    <Img style={{margin: "auto"}} src="https://tinypic.host/images/2024/07/13/Linkedin.png" alt="Linkedin" border="0" width="22px" />
                  </Link>
                </Column>
                <Column align="left" style={{ width: "45%" }}>
                  <Link href="#">
                    <Img src="https://tinypic.host/images/2024/07/13/Instagram.png" alt="Instagram" border="0" width="22px" />
                  </Link>
                </Column>                               
              </Row>
            </Section>
            <Section>
              <Text className="text-[13px] text-gray-400 text-center">
                <Link className="text-blue-600 underline underline-offset-2" href="#">ReCore</Link> is committed to helping you build your email design system. If you'd prefer to not receive these emails, please <Link className="text-blue-600 underline underline-offset-2" href="#">unsubscribe</Link> or <Link className="text-blue-600 underline underline-offset-2" href="#">manage your email preferences</Link>.
              </Text> 
              <Text className="text-[13px] text-gray-400 text-center">
                ReCore 420 George Street, Sydney, NSW 2000 Australia 
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
    </div>
  );
}
