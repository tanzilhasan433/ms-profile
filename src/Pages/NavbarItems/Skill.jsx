import React from 'react';
import { Card } from 'antd';
import flight from '../../assets/skills/flight management.PNG'
import cargo from '../../assets/skills/cargo.jpg'
import avsec from '../../assets/skills/avsec.jpg'
import cargo2 from '../../assets/skills/cargo2.jpg'
import crisis from '../../assets/skills/crisis management.png'
import hsia from '../../assets/skills/hsia.png'
import joint from '../../assets/skills/joint service.png'
import jungle from '../../assets/skills/jungle survival.png'
import militery from '../../assets/skills/military traning.png'
import public1 from '../../assets/skills//public affairs.png'
import public2 from '../../assets/skills/public service.png'
import security from '../../assets/skills/security management.png'
import sita from '../../assets/skills/sita.png'
import weapon from '../../assets/skills/weapon.jpg'


const { Meta } = Card;
const Skill = () => {
    return (
        
        <div className='flex flex-wrap justify-start m-4 flex gap-4'>
            {/* <h1 className='text-center font-extrabold'>This is Skills Pages</h1> */}
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={flight} />}
            >
                <Meta title="Flight Management" description="www.instagram.com" />
            </Card>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={hsia} />}
            >
                <Meta title="Flight Management" description="www.instagram.com" />
            </Card>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={cargo} />}
            >
                <Meta title="Flight Management" description="www.instagram.com" />
            </Card>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={cargo2} />}
            >
                <Meta title="Flight Management" description="www.instagram.com" />
            </Card>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={avsec} />}
            >
                <Meta title="Flight Management" description="www.instagram.com" />
            </Card>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={crisis} />}
            >
                <Meta title="Flight Management" description="www.instagram.com" />
            </Card>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={joint} />}
            >
                <Meta title="Flight Management" description="www.instagram.com" />
            </Card>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={jungle} />}
            >
                <Meta title="Flight Management" description="www.instagram.com" />
            </Card>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={militery} />}
            >
                <Meta title="Flight Management" description="www.instagram.com" />
            </Card>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={public1} />}
            >
                <Meta title="Flight Management" description="www.instagram.com" />
            </Card>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={public2} />}
            >
                <Meta title="Flight Management" description="www.instagram.com" />
            </Card>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={weapon} />}
            >
                <Meta title="Flight Management" description="www.instagram.com" />
            </Card>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={sita} />}
            >
                <Meta title="Flight Management" description="www.instagram.com" />
            </Card>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={security} />}
            >
                <Meta title="Flight Management" description="www.instagram.com" />
            </Card>

        </div>
    );
};

export default Skill;