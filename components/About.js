import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin,faDev, faGithub} from '@fortawesome/free-brands-svg-icons'
const AboutStyles = styled.div`
  height: 35em;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    display: flex;
    flex-direction: column;
    .skills {
    }
    .links {
      display: flex;
      justify-content:space-around;
    }
  }
`;

const About = () => (
  <AboutStyles>
    <div className="title">
      <span>Umar Daraz</span>
      <div className="skills">
        <span>Full Stack | React | Node</span>
      </div>
      <div className="links">
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faDev}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
      </div>
    </div>
  </AboutStyles>
);
export default About;
