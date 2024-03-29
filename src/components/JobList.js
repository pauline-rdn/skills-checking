import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
// import Tab from '@mui/material/Tab';
// import Tabs from '@mui/material/Tabs';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import FadeInSection from "./FadeInSection";


const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 410
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "Education": {
      jobTitle: "",
      duration: "",
      desc: [
        "Graphic arts, interactive design & illustration diploma (ESMA & LISAA Nantes, France).",
        "MBA diploma - Master Degree of International Art Market (ICART, Paris). Also worked as an intern at @La Galerie Cinema, Paris.",
        "Was introduced to Shell & C languages - 42 School, Paris.",
        "Oriented myself into web development branch - WF3 School, Paris."
      ]
    },
    "RapMinerz": {
      jobTitle: "Intern at @",
      duration: "MAY & JUNE 2022",
      desc: [
        "Created a Python script in order to manage spotify playlists - using Spotipy Library & Spotipy API technologies",
        "Developed a responsive Flask python application from scratch, both on client and server side - under the leading team supervision",
      ]
    },
    "OnChained Lab/ Etherscore": {
      jobTitle: "Web developer at @",
      duration: "DEC 2022 - PRESENT",
      desc: [
        "Design & develop OnChained Lab's websites and applications  - in collaboration with web3 developers and UX/UI team.",
        "Collaborate with experienced cross-disciplinary developers to conceive and design web3 products.",
        "Technologies in use : react.js, node.js, vue.js, typescript, docker, adobe suite, web security tools such as sonarqube."
      ]
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;