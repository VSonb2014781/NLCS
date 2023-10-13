import { Row,Col,Image } from 'antd'
import React from 'react'
import imageProduct from '../../assets/images/test.webp'
import imageProductSmall from '../../assets/images/imagesmall.webp'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import {  WrapperAddressProduct, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQualityProduct, WrapperStyleColImage, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from './stype'
import {
    PlusOutlined,
    MinusOutlined,
  } from '@ant-design/icons';
const ProductDetailsComponent =()=>{
    return(
        <Row stype={{padding:'16px',borderRadius:'4px', paddingLeft:'6px'}}>
            <Col span={10} style={{borderRight: '1px solid  #e5e5e5'}} >
                <Image src={imageProduct} alt="image prodcut" preview={false}/>
                <Row style={{paddingTop:'10px',justifyContent: 'space-between',background:'#fff'}}>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image prodcut" preview={false}/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image prodcut" preview={false}/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image prodcut" preview={false}/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image prodcut" preview={false}/>
                    </WrapperStyleColImage>
                    <WrapperStyleColImage span={4}>
                        <WrapperStyleImageSmall src={imageProductSmall} alt="image prodcut" preview={false}/>
                    </WrapperStyleColImage>
                </Row>
            </Col>
            <Col span={14} style={{background:'#fff',paddingLeft:'10px'}}>
                <div>
                <WrapperStyleNameProduct>Tham tu lung danh conan asdasdasdas asasd  </WrapperStyleNameProduct>
                <WrapperStyleTextSell>Da ban 1000+</WrapperStyleTextSell>
                </div>
                <WrapperPriceProduct>
                    <WrapperPriceTextProduct>200.000</WrapperPriceTextProduct>
                </WrapperPriceProduct>
                <WrapperAddressProduct>
                    <span>Giao den:</span>
                    <span className='address'>Hau giang</span>-
                    <span className='change-address'>Doi dia chi</span>
                </WrapperAddressProduct>
                <div style={{margin:'10px 0 20px',padding:'10px 0',borderBottom:'1px solid #e5e5e5'}}>
                <div style={{marginBottom:'10px'}} >So Luong</div>
                    <WrapperQualityProduct>
                        <button style={{border:'none',background:'transparent'}}>
                        <MinusOutlined stype={{color:'#000',fontSize:'20px'}} />
                        </button>
                        <WrapperInputNumber min={1} max={10} defaulValue={3} onChange={onchange}/>
                        <button style={{border:'none',background:'transparent'}}>
                        <PlusOutlined stype={{color:'#000',fontSize:'20px'}}/>
                        </button>
                    </WrapperQualityProduct>
                    </div>
                    <div style={{display:'flex',alignItems:'center',gap:'12px'}} >
                    <ButtonComponent
                        bordered={false}
                        size={40}
                        styleButton={{
                            background: 'rgb(255,57,69)',
                            height:'48px',
                            width:'220px',
                            border:'none',
                            borderRadius:'4px'
                        }}
                        textbutton={'Chọn Mua'}
                        styleTextButton={{color:'#fff',fontWeight:'700'}}>
                    </ButtonComponent>
                    <ButtonComponent
                        bordered={false}
                        size={40}
                        styleButton={{
                            background: '#fff',
                            height:'48px',
                            width:'220px',
                            border:'1px solid rgb(10, 104, 255)',
                            borderRadius:'4px'
                        }}
                        textbutton={'Mua Trả Sau '}
                        styleTextButton={{color:'rgb(13,92,182)',fontSize:'15px'}}>
                        </ButtonComponent>
                        

                    </div>
                    
                
                
            </Col>
        </Row>
    )
    
}
export default ProductDetailsComponent