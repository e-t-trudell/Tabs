import React from 'react'

const TabContent = (props) => {
    // const {one}=props
    // const {two}=props
    // const {three}=props
    const {tabContent}=props
  return (
    <div>
        {

            <textarea id='tabOne' name='uno' value={tabContent} rows='5' cols='20' ></textarea>
        }
    </div>
  )
}

export default TabContent