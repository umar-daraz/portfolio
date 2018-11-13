import styled from 'styled-components';
const AboutStyles = styled.div`
  height: 35em;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    background-color: red;
    flex-direction: column;
    .skills {
    }
  }
`;
const About = () => (
  <AboutStyles>
    <div className="title">
      <span>Umar Daraz</span>
      <div>
        <span>Full Stack | React | Node</span>
      </div>
    </div>
  </AboutStyles>
);
export default About;
