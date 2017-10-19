import React from "react"
import styled from "react-emotion"

import Container from "./Container"

const Section = styled.section`
  background: #0d2481;
  padding: 10rem 0;
  position: relative;
`

const SectionTitle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #ffafa3;
`

const SectionBody = styled.div`
  color: #FFF;
  max-width: 24rem;

  p {
    line-height: 1.5;
    font-size: 1.25rem;
  }
`

const ThingGrid = styled.div`
  position: absolute;
  top: -7rem;
  right: 0;
  max-width: 22.5rem;
  background: #FFF;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);

  img {
    width: 3rem;
    height: 3rem;
    margin: 0.75rem;
  }
`

const Browser = styled.div`
  border: 1px solid #ffafa3;
  border-top-width: 3rem;
  width: 30rem;
  height: 20rem;
  background: #FFF;
`

const Flows = () => (
  <Section>
    <Container>
      <SectionBody>

        <SectionTitle>Flows</SectionTitle>
        <p>
          Octoblu’s drag-and-drop designer makes automation simple. It's powerful enough to handle complex interactions, yet simple enough for non-engineers to use. Just drag, drop, and deploy, without ever writing a single line of code.
        </p>
      </SectionBody>

      <Browser />
    </Container>
  </Section>
)

export default Flows
