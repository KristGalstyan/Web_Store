import React from 'react'
import {
  AboutBlock,
  AboutParagraph,
  AboutTitle,
  WrapperAbout,
  AboutSection
} from './about'

function About() {
  return (
    <AboutSection>
      <h3>How it works.</h3>
      <AboutBlock>
        <WrapperAbout>
          <img src="/img/about/about1.png" alt="aboutus" />
          <AboutTitle>Adapt your menu items</AboutTitle>
          <AboutParagraph>
            Easily adapt your menu using the webflow CMS and allow customers to
            browse your items.
          </AboutParagraph>
        </WrapperAbout>
        <WrapperAbout>
          <img src="/img/about/about2.png" alt="aboutus" />
          <AboutTitle>Adapt your menu items</AboutTitle>
          <AboutParagraph>
            Easily adapt your menu using the webflow CMS and allow customers to
            browse your items.
          </AboutParagraph>
        </WrapperAbout>
        <WrapperAbout>
          <img src="/img/about/about3.png" alt="aboutus" />
          <AboutTitle>Adapt your menu items</AboutTitle>
          <AboutParagraph>
            Easily adapt your menu using the webflow CMS and allow customers to
            browse your items.
          </AboutParagraph>
        </WrapperAbout>
      </AboutBlock>
    </AboutSection>
  )
}

export default About
