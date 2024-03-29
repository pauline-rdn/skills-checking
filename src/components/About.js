import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";
import MagicAsk from "./MagicAsk";


class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently working as a remote
        <a href='https://etherscore.network/' target='_blank'> UX/UI web3 designer and developer at @OnChained Lab/ Etherscore</a>.
        I have an affinity with Adobe Suite & Figma - Python, Javascript, Flask & React development.
      </p>
    );
    const two = (
      <p>
        Outside of work, I am interested in following the developments of
        art and tech. I have strong interest in music, drawing, animation & video-game arts, reading comics and mangas.
        I think I am an enthousiastic learner who love to explore life.
      </p>
    );
  
    const desc_items = [one, two];

    const tech_stack = [
      "Javascript ES6+",
      "Python",
      "React.js",
      "Flask",
      "Node.js",
      "HTML & CSS"
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header">
            <span className="section-title">/ About me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been familiar to work with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              <br />
              {[two]}
            </div>
            <div className="about-image">
              <img src={"./assets/alakazam-1.gif"} alt='alakazam' />
              <MagicAsk></MagicAsk>
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;