import * as React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import clearSky from '../images/clearsky.png'
import destinology from '../images/destinology.png'
import justAccounts from '../images/justaccounts.png'
import mckesson from '../images/mckesson.png'
import tyresonthedrive from '../images/tyresonthedrive.png'
import yellowbus from '../images/yellowbus.png'
import systemc from '../images/systemc.jpg'
import moneysupermarket from '../images/moneysupermarket.png'
import moneysavingexpert from '../images/moneysavingexpert.png'
import booking from '../images/booking.png'
import rentalcars from '../images/rentalcars.png'

import csharp from '../images/csharp.png'
import aws from '../images/aws.png'
import javascript from '../images/javascript.png'
import nodejs from '../images/nodejs.png'
import react from '../images/react.png'
import sass from '../images/sass.png'
import webpack from '../images/webpack.png'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        'jon',
        'preece',
        'jpreecedev',
        'freelancer',
        'react',
        'javascript',
        'contractor',
        'frontend'
      ]}
    />
    <div className="container mb-5 p-3">
      <section id="about">
        <h2>About</h2>
        <p>
          I am Jon Preece, an experienced front-end website developer from Warrington (UK)
          currently working in and around Manchester (UK).
        </p>
        <p>
          Throughout my 10+ year professional career I have worked in many industries,
          including;
          {' '}
          <strong>
            e-commerce, financial services, marketing, healthcare, travel and accountancy
          </strong>
          .
        </p>
        <p>
          My drive and determination to deliver the best has meant that I have risen to
          every challenge. I do not struggle under pressure, I excel under pressure.
        </p>
        <p>
          I love to teach, I love to train and share my knowledge with others, I love to
          speak at public events.
        </p>
      </section>
      <section id="work">
        <h2>Work</h2>
        <p>I have had the pleasure to work at some of the UK's biggest companies.</p>
        <div style={{ textAlign: 'center' }}>
          <img
            src={clearSky}
            alt="ClearSky Contractor Accounting"
            style={{ margin: '20px' }}
          />
          <img src={destinology} alt="Destinology" style={{ margin: '20px' }} />
          <img src={justAccounts} alt="JustAccounts" style={{ margin: '20px' }} />
          <img src={mckesson} alt="McKesson" style={{ margin: '20px' }} />
          <img
            src={systemc}
            alt="SystemC Healthcare"
            style={{ height: '45px', margin: '20px' }}
          />
          <img
            src={tyresonthedrive}
            alt="Tyres on the Drive"
            style={{ margin: '20px' }}
          />
          <img src={yellowbus} alt="Yellowbus" style={{ margin: '20px' }} />
          <img
            src={moneysupermarket}
            alt="Moneysupermarket"
            style={{ height: '45px', margin: '20px' }}
          />
          <img
            src={rentalcars}
            alt="RentalCars"
            style={{ height: '35px', margin: '20px' }}
          />
          <img
            src={moneysavingexpert}
            alt="MoneySavingExpert"
            style={{
              height: 'auto',
              maxHeight: '35px',
              maxWidth: '299px',
              margin: '20px'
            }}
          />
          <img
            src={booking}
            alt="Booking.com"
            style={{ height: '35px', margin: '20px' }}
          />
        </div>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <p>
          I work hard and train hard to keep up to date with technology as best I can.
        </p>
        <p>My favourite technologies include;</p>
        <div style={{ textAlign: 'center' }}>
          <img src={csharp} alt="C#" style={{ margin: '20px' }} />
          <img
            src={aws}
            alt="AWS Amazon Web Services"
            style={{ height: '65px', margin: '20px' }}
          />
          <img src={javascript} alt="JavaScript" style={{ margin: '20px' }} />
          <img src={nodejs} alt="NodeJS" style={{ height: '65px', margin: '20px' }} />
          <br />
          <img src={react} alt="React" style={{ margin: '20px' }} />
          <img src={sass} alt="SASS" style={{ margin: '20px' }} />
          <img src={webpack} alt="Webpack" style={{ margin: '20px' }} />
        </div>
      </section>
      <section id="speaking">
        <h2>Speaking &amp; Training</h2>
        <p>
          I have had the absolute pleasure to speak at several meetups around Warrington
          and Manchester.
        </p>
        <p>Would you like me to speak at your event? </p>
        <p>
          I do not charge a fee for public speaking, but I may ask you to cover travel
          expenses. Please get in touch with me to discuss further.
        </p>
        <h3>Blog &amp; Tutorials</h3>
        <p>
          I regularly contribute to
          {' '}
          <a href="https://developerhandbook.com">DeveloperHandbook.com</a>
, my personal
          blog that has over 15k hits per month.
        </p>
        <p>
          I am very active on
          {' '}
          <a
            href="https://github.com/jpreecedev"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <p>I plan to launch a YouTube channel at some point in the future, stay tuned!</p>
      </section>
      <section id="consulting">
        <h2>Consulting &amp; Contracting</h2>
        <p>
          I can provide you and/or your team with expert advice you can trust. Using my
          wealth of industry experience I can advise on software &amp; website
          architecture, tooling, processes and more. Need more than just a consultant? As
          an independent, self employed contractor I can come and work on site for your
          business for 3, 6, or up to 12 months (full time) on a daily basis.
        </p>
        <h3>Website &amp; Software Coding</h3>
        <p>
          I have been writing code for over 10 years professionally and a massive 15 years
          in total. I have expert knowledge of NodeJS, C#, ASP .NET MVC, WebForms, SQL
          Server, PostgreSQL, JavaScript (ES5/6+), HTML, CSS, Angular, and countless more.
          Whilst I do not know it all (who does!), I have learnt how to learn, and I can
          get up to speed quickly.
        </p>
        <h3>Remote Work</h3>
        <p>
          Are you a small company, startup, or just have a team that works remotely? Do
          not worry, I am fully set up to work from my personal office, complete with
          landline phone and video conferencing facilities.
        </p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>
          You can reach out to me via Twitter
          {' '}
          <a href="https://twitter.com/jpreecedev">@jpreecedev</a>
          {' '}
or you can connect with
          me on
          <a href="https://www.linkedin.com/in/jonpreecedev/"> LinkedIn</a>
.
        </p>
      </section>
    </div>
  </Layout>
)

export default IndexPage
