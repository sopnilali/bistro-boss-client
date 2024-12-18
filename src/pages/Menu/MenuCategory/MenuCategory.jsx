import React from 'react';
import MenuItems from '../../../shared/MenuItems/MenuItems';
import MenuCover from '../../../shared/MenuCover/MenuCover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, title, coverImg, menuDes, _id }) => {


    return (
        <div>
            {title && <MenuCover title={title} img={coverImg} description={menuDes} />}
            <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
            {
                items.map(item => <MenuItems 
                    key={item._id}  
                    item={item}/>)
            }
            </div>
            <div className='text-center mb-5'>
                <Link to={`/order/${title ? title :'offered'}`} className="btn border-0 mt-3 border-b-black border-b-2 text-black hover:bg-black hover:text-white uppercase">Order Your Favourite Food</Link>
            </div>
        </div>
    );
};

export default MenuCategory;