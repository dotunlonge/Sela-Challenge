// Generated by https://pagedraw.io/pages/9921
import React from "react";
import styled, { injectGlobal } from "styled-components";
import Background from "../../assets/background.svg";

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Nunito:300,500,600|Open+Sans:300,500');
    
    * {
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
    }
    
    button:hover {
        cursor: pointer;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }
    
    .pd-onhover-parent >.pd-onhover {
        display: none;
    }
    
    .pd-onhover-parent:hover > * {
        display: none;
    }
    
    .pd-onhover-parent:hover > .pd-onhover {
        display: flex;
    }
    
    .pd-onactive-parent > .pd-onactive {
        display: none;
    }
    
    .pd-onactive-parent:active > * {
        display: none;
    }
    
    .pd-onactive-parent:active > .pd-onactive {
        display: flex;
    }
    
    .pd-onactive-parent.pd-onhover-parent:active > .pd-onhover {
        display: none;
    }
`;
const Header = styled.div`
  display: flex;
  height: 100%;
`;

const Headerimage = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${Background});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Header000 = styled.div`
  display: flex;
  height: auto;
`;

const Headerbackground0 = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.699999988079071);
  height: 100%;
  width: 100%;
  min-height:100vh;
`;

const Header00000 = styled.div`
  display: block;
`;

const Headerlogo0 = styled.div`
display: flex;
flex-direction: column;
padding: 8px 30px;
border: 1.5px solid rgba(255,255,255,1);
width: 150px;
margin: 5vh auto 0;
`;

const Header0000000 = styled.div`
height: auto;
width: auto;
display: block;
`;

const Headertext0 = styled.div`
  flex-shrink: 0;
  font-family: "Nunito", sans-serif;
  color: rgba(255, 255, 255, 1);
  font-size: 24px;
  letter-spacing: 0.2px;
  font-weight: 400;
  font-style: normal;
  text-decoration: none;
  text-align: center;
`;

const Header00001 = styled.div`
@media(max-width: 767px){
  margin: 10vh 0 0;
}

@media(min-width: 768px){
  margin: 20vh 0 0;
}
`;

const Headerheading0 = styled.div`
  flex-shrink: 0;
  font-family: "Nunito", sans-serif;
  color: rgba(255, 255, 255, 1);
  letter-spacing: 0px;
  font-weight: bold;
  font-style: normal;
  text-decoration: none;
  text-align: center;
  h3 {
    font-weight: 400;
    font-size: 2.5em;
    line-height: 60px;
    margin: 0;
    padding: 0 20%;
  }

  @media (min-width: 1024px) {
    h3 {
      padding: 0 26%;
    }
  }

  @media (max-width: 1023px) {
    h3 {
      padding: 0 15%;
    }
  }
  @media (max-width: 600px) {
    h3 {
      padding: 0 5%;
      font-size: 1.7em;
      line-height: 45px;
    }
  }
`;

const Header00002 = styled.div`
  margin: 5px 0;
`;

const Headerparagraph0 = styled.div`
  p {
    font-family: "Open Sans",sans-serif;
    font-weight: 300;
    text-align: center;
    line-height: 30px;
    font-weight: 300;
    color: #eee;
    font-size: 1.14em;
  }

  @media (min-width: 1024px) {
    p {
      padding: 0 28%;
    }
  }

  @media (max-width: 1023px) {
    p {
      padding: 0 15%;
    }
  }
  @media (max-width: 600px) {
    p {
      padding: 0 5%;
      font-size: 0.9em;
    }
  }
`;

const Header00003 = styled.div`
text-align: center;
@media(max-width: 767px){
  margin: 5vh auto;
}

@media(min-width: 768px){
  margin: 15vh auto 5vh;
}

`;

const Headerdownbutton0 = styled.a`
  border-radius: 50px;
  background: rgba(45, 156, 219, 1);
  text-align: center;
  display: inline-block;
  height: 78px;
  min-width: 250px;
  margin: auto;
  border: 0;
  cursor: pointer;
  text-decoration: none;
`;

const Headerbuttontext0 = styled.span`
font-family: "Nunito",sans-serif;
color: rgba(255,255,255,1);
font-size: 20px;
line-height: 34px;
letter-spacing: 0.3px;
font-weight: 400;
font-style: normal;
text-decoration: none;
text-align: center;
padding: 12px 5vw 0;
display: block;
`;

const Headerchevrondown3 = styled.img`
  margin: auto;
  height: 35px;
  position: relative;
  top: -8px;
`;

function render() {
  return (
    <Header>
      <Headerimage>
        <Header000>
          <Headerbackground0>
            <Header00000>
              <Headerlogo0>
                <Header0000000>
                  <Headertext0>SELA</Headertext0>
                </Header0000000>
              </Headerlogo0>
            </Header00000>

            <Header00001>
              <Headerheading0>
                <h3>Keep track of development projects near you</h3>
              </Headerheading0>
            </Header00001>

            <Header00002>
              <Headerparagraph0>
                <p>
                  The Sela Platform enables stakeholders share real time
                  information on the state of infrastructure projects to ensure
                  transparent delivery
                </p>
              </Headerparagraph0>
            </Header00002>

            <Header00003>
              <Headerdownbutton0 href="#projects">
                <Headerbuttontext0>SEE PROJECTS</Headerbuttontext0>
                <Headerchevrondown3 src="https://s3-us-west-2.amazonaws.com/figma-alpha/img/1674/e3d9/09124a4ac716dcd218718ada4b6b6428" />
              </Headerdownbutton0>
            </Header00003>
          </Headerbackground0>
        </Header000>
      </Headerimage>
    </Header>
  );
}

export default function(props) {
  return render.apply({ props: props });
}
