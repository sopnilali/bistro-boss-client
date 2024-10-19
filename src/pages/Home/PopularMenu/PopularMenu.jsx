import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import MenuItems from '../../../shared/MenuItems/MenuItems';

const PopularMenu = () => {

    const [menu, setMenu ]= useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularMenuItems = data.filter(item => item.category === 'popular')
            setMenu(popularMenuItems)
        })
    },[])

    console.log(menu)

    return (

        <div className='my-4'>
            <SectionTitle subtitle={'Popular Items'} Title={'From Our Menu'}/>
            <div className='grid grid-cols-2 gap-4'>
            {
                menu.map(item => <MenuItems key={item._id}  item={item}/>)
            }
            </div>
        </div>
    );
};

export default PopularMenu;