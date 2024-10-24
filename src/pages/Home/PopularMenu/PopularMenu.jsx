import MenuItems from '../../../shared/MenuItems/MenuItems';
import useMenu from '../../../hooks/useMenu';
import { Link } from 'react-router-dom';

const PopularMenu = () => {

    const [menu] = useMenu()

    const popular = menu.filter(menu => menu.category === 'popular')

    return (

        <div className='my-4'>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
            {
                popular.map(item => <MenuItems key={item._id}  item={item}/>)
            }
            </div>
            <div className='text-center'>
            <Link to={'/menu'} className="btn border-0 mt-3 border-b-black border-b-2 text-black hover:bg-black hover:text-white">View Full Menu</Link>
            </div>
        </div>
    );
};

export default PopularMenu;