import Cover from '../../shared/Cover/Cover';
import bgMenu from '../../assets/img/menu/banner3.jpg'
import SectionTitle from '../../shared/SectionTitle/SectionTitle';

import { Helmet } from 'react-helmet-async';
import useMenu from '../../hooks/useMenu';
import MenuCategory from '../../pages/Menu/MenuCategory/MenuCategory';

// impor images
import dessertbg from '../../assets/img/menu/dessert-bg.jpeg'
import pizzabg from '../../assets/img/menu/pizza-bg.jpg'
import saladbg from '../../assets/img/menu/salad-bg.jpg'
import soupbg from '../../assets/img/menu/soup-bg.jpg'
const Menu = () => {

    const [menu] = useMenu();
    
    
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    console.log(offered.length, soup.length, salad.length, pizza.length)

    // image section


    return (
        <>
        <Helmet>
            <title>Our Menu | Bistro Boss</title>
        </Helmet>
        <div className='container mx-auto'>
            <Cover img={bgMenu} title={'OUR MENU'} description={'Would you like to try a dish?'} />
            <div className='mt-10'>
            <SectionTitle subtitle={"---Don't miss---"} Title={"TODAY'S OFFER"}/>
            </div>
            {/* offered */}
            <MenuCategory items={offered} MenuTitle={offered.name} coverImg={offered.image}  />
            {/* dessert */}
            <MenuCategory items={dessert} title="dessert" coverImg={dessertbg} menuDes={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}/>
            {/* pizza */}
            <MenuCategory items={pizza} title="pizza" coverImg={pizzabg} menuDes={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}/>
            {/* salad */}
            <MenuCategory items={salad} title="salad" coverImg={saladbg} menuDes={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}/>
             {/* soup */}
             <MenuCategory items={soup} title="soup" coverImg={soupbg} menuDes={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}/>
        </div>
        </>
    );
};

export default Menu;