import { useState } from 'react';
import Cover from '../../../shared/Cover/Cover';
import OrderImg from '../../../assets/img/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';

const OrderFood = () => {
    const {category} = useParams();
    
    const categories = ['salad','pizza','soup', 'dessert','drinks'];
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    
    const [menu] = useMenu();
    
    const drinks = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    
    return (
        <div>
            <Cover img={OrderImg} title={'OUR ORDER'} description={'Would you like to try a dish?'} />

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>drinks</Tab>
                </TabList>
                <TabPanel><OrderTab items={salad}/></TabPanel>
                <TabPanel><OrderTab items={pizza}/></TabPanel>
                <TabPanel><OrderTab items={soup}/></TabPanel>
                <TabPanel><OrderTab items={dessert}/></TabPanel>
                <TabPanel><OrderTab items={drinks}/></TabPanel>
            </Tabs>
        </div>
    );
};

export default OrderFood;