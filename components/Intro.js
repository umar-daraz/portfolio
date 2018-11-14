import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faDev,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
const IntroStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .intro {
    .intro-name {
      padding-bottom: 1rem;
      font-size: 4rem;
      font-weight: 700;
      text-align: center;
    }
    display: flex;
    flex-direction: column;
    .tagline {
      font-size: 1.3rem;
      font-weight: 300;
      text-align: center;
      margin: 1.5rem 0;
    }
    .social-links {
      text-align: center;
      .social-link {
        padding: 0 0.6rem;
      }
      //justify-content: space-between;
    }
  }
`;

const Intro = () => (
  <IntroStyles>
    <div className="intro">
      <span className="intro-name">Hi,I m Umar!</span>
      <div className="tagline">
        Full Stack Dev | React | Node | Java | React Native
      </div>
      <div className="social-links">
        <a className="social-link">
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
        <a className="social-link">
          <FontAwesomeIcon icon={faDev} size="3x" />
        </a>
        <a className="social-link">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
        <a className="social-link">
          <FontAwesomeIcon icon={faTwitter} size="3x" />
        </a>
      </div>
    </div>
  </IntroStyles>
);
export default Intro;
