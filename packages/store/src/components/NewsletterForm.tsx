import { Box, Columns, Heading, Small, Text } from "@wdlk/components"
import { GatsbyLink, Input } from "."

import { InputButton } from "./InputButton"
import React from "react"
import styled from "./styled"

const formElementSize = 50

const StyledFormContainer = styled.div`
  padding: 0 0 ${props => props.theme.space[3]}px 0;
`
StyledFormContainer.displayName = "StyledFormContainer"

const StyledForm = styled.form`
  display: flex;
`
StyledForm.displayName = "StyledForm"

export const NewsletterForm = () => {
  return (
    <div>
      <Box padding={[0, 0, 6, 0]}>
        <Heading size="m" type="primary" weight={500}>
          Want 10% off your first order?
        </Heading>
      </Box>
      <Box padding={[0, 0, 3, 0]}>
        <Text size="s">Enter Your Email Address</Text>
      </Box>
      <StyledFormContainer>
        <StyledForm>
          <Input type="email" placeholder={"Email Address"} />
          <InputButton isSingle={false} />
        </StyledForm>
      </StyledFormContainer>
      <Columns align="center">
        <Small size="m" color="muted">
          By signing up, you agree to our{"   "}
        </Small>
        <GatsbyLink size="s" color="secondary" to={"/legal/terms-conditions"}>
          Terms and Conditions.
        </GatsbyLink>
      </Columns>
    </div>
  )
}
