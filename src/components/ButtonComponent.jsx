import React from 'react'

const ButtonComponent = propsObj => {
    console.log("PROPS", propsObj);
    return (
        <div>
            <button placeholder={propsObj.placeholder} className={propsObj.className}>{propsObj.placeholder}</button>
        </div>
    )
}
export default ButtonComponent