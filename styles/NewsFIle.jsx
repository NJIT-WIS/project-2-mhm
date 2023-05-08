export default function NewsLetterSignUpForm()

return (

  <NewsletterMaxWidthWrapper>
    <SignUpFormContainer>
      <SignUpFormInnerContainer>
        <SignUpFormContentContainer>
          <NewsletterHeading>
            A Web Development Newsletter That Helps You Create
          </NewsletterHeading>

          <NewsLetterAbout>
            Sign up for my newsletter for more information!
          </NewsLetterAbout>

          <Form onSubmit={subscribeUser}>
            <EmailField>
              <EmailInput
                type="email"
                id="email-input"
                name="email"
                placeholder="your best email"
                ref={inputRef}
                required
                autoCapitalize="off"
                autoCorrect="off"
              />

              <Label htmlFor="email-input" className="form__label">
                Your Best Email
              </Label>
            </EmailField>

            <ButtonContainer>
              <Subscribe type="submit" value="" name="subscribe">
                <ButtonText>Subscribe</ButtonText>

                <Icon></Icon>
              </Subscribe>
            </ButtonContainer>
          </Form>
        </SignUpFormContentContainer>
      </SignUpFormInnerContainer>
    </SignUpFormContainer>
  </NewsletterMaxWidthWrapper>
)