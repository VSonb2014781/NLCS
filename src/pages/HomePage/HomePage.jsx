import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style'
import CardComponent from '../../components/CardComponent/CardCompoent'
//import NavBarComponent from '../../components/NavBarComponent/NavBarComponent'
import slider1 from '../../assets/images/slider1.webp'
import slider2 from '../../assets/images/slider2.webp'
import slider3 from '../../assets/images/slider3.webp'
import SliderComponent from '../../components/SliderComponent/SliderComponent'

const HomePage =()=>{
    const arr = ['Tainghe','Sac','Op']
    return(
        <>
        <div style={{padding:'0 120px'}}>
            <WrapperTypeProduct>
            {arr.map((item)=>{
                return(
                    <TypeProduct name={item} key={item} />
                )
            })}
            </WrapperTypeProduct>
        </div>
        <div className='body' style={{width:'100%',backgroundColor:'#efefef'}}>
        <div id="container" style={{backgroundColor:'#efefef',padding:'0 120px',height:'1000px'}}>
            <SliderComponent arrImages={[slider1,slider2,slider3]}/>
            <WrapperProducts>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
                <CardComponent/>
            </WrapperProducts>
            
            
            <WrapperProducts>
            <WrapperButtonMore type="outline"
            styleButton={{
                border: '1px solid rgb(11,116,229)',
                color:'rgb(11,116,229)',
                height:'48px',
                width:'220px',
                borderRadius:'4px'
            }}
            styleTextButton={{fontWeight:500}}
            textbutton={'Xem Thêm '}
            />
            </WrapperProducts>
        </div>
        </div>
     </>
    )
    
}
export default HomePage