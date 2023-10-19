import React from 'react'
import WhyWe from "../components/WhyWe/WhyWe";
import Wrapper from "../components/Wrapper/Wrapper";
import Container from '../components/Container/Container';
import styles from './index.module.scss'
import Service from '../components/Service/Service';
import Carousel from '../components/Carousel/Carousel';
import CarouselTitle from '../components/CarouselTitle/CarouselTitle';
import Request from '../components/Request/Request';
function Main() {
    return(
        <div className={styles.main}>
            <Wrapper>
            <Container>
                    <WhyWe/>
                    <Service/>
                    <CarouselTitle/>
                    <Carousel/>
                    <Request/>
            </Container>
            </Wrapper>
        </div>
    )
}
export default Main