import {useState} from 'react';
// import TabContent from './TabContent';

const Tabs = (props) => {
    // const [one,setOne]=useState('First Message')
    const [two,setTwo]=useState('Second Message')
    const [three,setThree]=useState('Third Message')
    const {one, setOne}=props
    const {tabContent, setTabContent}=props
    const box = {
        border:'2px solid green',
        color:'blue',
        width:'20vw',
        height:'10vh'
    }
    const area = {
        display:'flex',
        flexDirection:'row',
        marginBottom:'20px',
        marginRight:'10px',
        paddingRight:'5px',
        gap:'10px'
    }
    const handleClick=(e)=>{
        if(e.target.id === 'uno') { 
            setOne('I want brownies');
            setTabContent(one);
        }
        else if (e.target.id === 'dos'){
            setTwo('Please make cookies');
            setTabContent(two);
        }else if (e.target.id === 'tres'){
            setThree('Coffee is good');
            setTabContent(three);
        }
    }
  return (
    <div style={area}>
        <label onClick={handleClick} style={box} htmlFor="tabOne" id='uno'>Tab One </label>
        <label  style={box} onClick={handleClick} htmlFor="tabTwo" id='dos'>Tab Two </label>
        <label  style={box} onClick={handleClick} htmlFor="tabThree" id='tres'>Tab Three </label>
    </div>
  )
}

export default Tabs