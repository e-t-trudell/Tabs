import {useState} from 'react';
import './App.css';
import Tabs from './components/Tabs'
import TabContent from './components/TabContent';

function App(props) {
  
  const [one,setOne]=useState('')
  const [two,setTwo]=useState('')
  const [three,setThree]=useState('')
  const [tabContent, setTabContent]= useState('')
    // const {one, setOne}=props
  
  const home = {
    backgroundColor:'#589',
    height:'100vh',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    margin:'10px',
    padding:'10px'
  }
  return (
    <div style={home} className="App">
      <Tabs one={one} setOne={setOne} two={two} setTwo={setTwo} three={three} setThree={setThree} tabContent={tabContent} setTabContent={setTabContent}/>
      <TabContent tabContent={tabContent}/>
    </div>
  );
}

export default App;
