import { Swiper, SwiperSlide } from 'swiper/react'

import Card from '../Card'
import { Container } from './styles'

function Slider({ info, title, details }) {
  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        grabCursor
        spaceBetween={12}
        slidesPerView={'auto'}
        className="Swiper"
      >
        {info.map((item, index) => (
          <SwiperSlide key={index}>
            <Card item={item} details={details} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}

export default Slider
