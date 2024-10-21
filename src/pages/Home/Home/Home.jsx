import Cover from "../../../shared/Cover/Cover";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";

import coverImg from '../../../assets/img/home/chef-service.jpg'
import PopularMenu from "../PopularMenu/PopularMenu";
import NumberTitle from "../../../shared/NumberTitle/NumberTitle";
import CheefReco from "../CheefReco/CheefReco";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner/>
            <SectionTitle subtitle={'From 11:00am to 10:00pm'} Title={'order online'}/>
            <Category/>
            <Cover img={coverImg} title={'Bistro Boss'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.'} />
            <PopularMenu/>
            <NumberTitle heading={'Call Us: +8801737055870'}/>
            <SectionTitle subtitle={'Should Try'} Title={'CHEF RECOMMENDS'}/>
            <CheefReco/>
            <Featured/>
            <Testimonials/>
        </div>
    );
};

export default Home;