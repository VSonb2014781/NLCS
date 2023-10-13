import React from "react";
import {
    SearchOutlined
} from '@ant-design/icons';
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const ButttonInputSearch = (props)=>{
    const {
        size,placeholder,textButton,
        bordered,backgroundColorInput='#fff',
        backgroundColorButton='rgb(144, 12, 63)',
        colorButton='#fff'
    }
       =props
    return(
        <div style={{display:'flex',}} >
            <InputComponent
                size={size} 
                placeholder={placeholder} 
                bordered={bordered} 
                style={{backgroundColor:backgroundColorInput}} />
            <ButtonComponent
                size={size}
                bordered={false}
                styleButton={{ background:backgroundColorButton,  border: !bordered && 'none'}}
                icon={<SearchOutlined  styple={{ color:colorButton}} type={{color: "fff"}}/>}
                textButton={textButton}
                styleTextButton={{ color: colorButton}}
             />
        </div>
    )
}
export default ButttonInputSearch