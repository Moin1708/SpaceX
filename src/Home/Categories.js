import React from 'react'
import { Card } from 'antd';
import rimg1 from '../Home/Rimg1.webp'
import rimg2 from '../Home/Rimg2.webp'
import rimg3 from '../Home/Rimg3.jpg'
import Ships from '../Home/shipsSpacex.jpg'
import { Divider } from 'antd'
import { Button, Space } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'



const { Meta } = Card;

function Categories() {
  const navigate=useNavigate()


  return (
    <div style={{height:'100vh'}} className='main_sec'>
      <h1 className='h1 m-4 'style={{display:'block'}}>Explore the Future</h1>
      <div class="container text-center">
        <div class="row align-items-start">
    <div class="col ">
    <Card
    hoverable
    style={{
      width: '80%',
     }} className='m2 mq2 mb-5'
    cover={<img alt="example" src={rimg1} height='200px'/>}>
    <Meta title="Rocket"  />
    <Meta  description="Rockets: Explore SpaceX's cutting-edge rockets designed for efficient and groundbreaking space travel." /> 
    <Divider/>
    <Button type="primary" className='d-flex align-items-center newd primary'  onClick={()=>navigate('rocket')}>Details <InfoCircleOutlined /> </Button>

  </Card>
    </div>
    <div class="col m2">
    <Card
    hoverable
    style={{
      width: '80%',
    }}className='m2 mq2 mb-5'
    cover={<img alt="example" src={rimg2} height='200px'/>}>
    <Meta title="Launches" />
    
    <Meta  description="Capsules: Discover the innovative spacecraft capsules by SpaceX, engineered to transport astronauts." />
    <Divider/>
    <Button type="primary" className='d-flex align-items-center newd primary ' onClick={()=>navigate('launches')}>Details <InfoCircleOutlined /> </Button>
  </Card>
    </div>
    <div class="col m2">
    <Card
    hoverable
    style={{
      width: '80%',
    }}className='m2 mq2 mb-5'
    cover={<img alt="Ships" src={Ships} height='200px'/>}>
    <Meta title="Ships"  />
    <Meta description="Ships: Discover the innovative spacecraft Ships by SpaceX, engineered to transport astronauts ." /> 
    <Divider/>
    <Button type="primary" className='d-flex align-items-center newd primary' onClick={()=>navigate('capsule')}>Details <InfoCircleOutlined /> </Button>
  </Card>

    </div>
  </div>
</div>
    </div>
  )
}

export default Categories
