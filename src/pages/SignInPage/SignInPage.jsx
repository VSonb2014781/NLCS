
import React from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import {  Image } from 'antd'
import imageLogo from '../../assets/images/logo-login.png'
const SignInPage =()=>{
    return(
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',background:'rgb(125, 124, 124)',height:'100vh'}}>
            <div style={{width:'800px',height:'445px',borderRadius:'6px',background:'#fff',display:'flex'}}>
           <WrapperContainerLeft>
            <h1>Xin Chào</h1>
            <p>Đăng nhập vào tài khoản </p>
            <InputForm style={{marginBottom:'10px'}} placeholder="abc@gmail.com"/>
            <InputForm placeholder="password"/>
            <ButtonComponent
            bordered={false}
            size={40}
            styleButton={{
                background: 'rgb(255,57,69)',
                height:'48px',
                width:'100%',
                border:'none',
                borderRadius:'4px',
                margin:'26px 0 10px '
            }}
            textbutton={'Đăng Nhập '}
            styleTextButton={{color:'#fff',fontSize:'15px',fontWeight:'700'}}
            ></ButtonComponent>
            <p><WrapperTextLight>Quên mật khẩu?</WrapperTextLight></p>
            <p>Chưa có tài khoản? <WrapperTextLight>Tạo tài khoản </WrapperTextLight></p>
           </WrapperContainerLeft>
           <WrapperContainerRight>
            <Image src={imageLogo} preview={false} alt="iamge-logo" height="203px" width="203px" />
            <h4>Mua sắm taij Shop </h4>
           </WrapperContainerRight>
        </div>
        </div>
    )
    
}
export default SignInPage