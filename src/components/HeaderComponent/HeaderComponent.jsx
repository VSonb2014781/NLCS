import React from 'react'
import {  Col} from'antd'
 import { WrapperHeader,  WrapperHeaderAccout,  WrapperTextHeader, WrapperTextHeaderSmall } from './style'
import {
    ShoppingCartOutlined,
    CaretDownOutlined,
    UserOutlined
  } from '@ant-design/icons';
import ButttonInputSearch from '../ButttonInputSearch/ButttonInputSearch';
const HeaderComponent =()=>{
    return(
        <div>
            <WrapperHeader gutter={16}>
                <Col span={5}>
                    <WrapperTextHeader> SHOPKSLDV</WrapperTextHeader>
                </Col>
                <Col span={13}>
                <ButttonInputSearch
                 size="large"
                 bordered={false}
                 placeholder='Tìm kiến'
                />

                </Col>
                <Col span={6} style={{display:'flex',gap:'54px',alignItems:'center'}} >
                <WrapperHeaderAccout>
                        <UserOutlined style={{fontSize:'30px'}}/>
                        <div>
                            <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                            <div>
                                <WrapperTextHeaderSmall>Tai Khoan</WrapperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperHeaderAccout>
                        <div>
                            <ShoppingCartOutlined style={{fontSize:'30px',color:'#fff'}}/>
                            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                        </div>
                </Col>
            </WrapperHeader>
        </div>
    )
    
}
export default HeaderComponent