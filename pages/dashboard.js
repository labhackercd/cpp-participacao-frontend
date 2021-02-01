import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../src/components/NavBar';
import Footer from '../src/components/Footer';
import ToolContent from '../src/components/ToolContent';


const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
          <>{children}</>
      )}
    </div>
  );
}


export default function Dashboard(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleTabPanelChange = (event, newValue) => {
   setValue(newValue);
 };

  return (
    <div className={classes.body}>
      <NavBar value={value} handleTabPanelChange={handleTabPanelChange}></NavBar>
      <TabPanel id="tabTools" value={value} index={0}>
        <ToolContent page={props.page}>{props.children}</ToolContent>
      </TabPanel>
      <TabPanel id="tabDocuments" value={value} index={2}>
        Item Three
      </TabPanel>
      <Footer></Footer>
    </div>
  )
}