import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

function nw() {
  window.location.href = "https://www.linkedin.com/in/femisii-lojede-1535201b0/",
  target = "_blank"
}

const Hero = (props) => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Femisii <br />
        Lojede
      </SectionTitle>
      <SectionText>
      Front-end developer who cares deeply about user experience.
Serious passion for UI design and new technologies.
<br /> <br />
      </SectionText>
      <Button onClick={() => window.open("https://www.linkedin.com/in/femisii-lojede-1535201b0/", '_ blank')}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;