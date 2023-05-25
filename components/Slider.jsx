import { useTheme } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import Slider from "react-slick";
import SliderCard from "./SliderCard";
import sliderData from "../data/sliderData";

export default function SimpleSlider() {
  const theme = useTheme();

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "20px",
    slidesToShow: 3,
    autoplay: true,
    dots: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "10px",
          slidesToShow: 1,
          autoplay: false,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {sliderData.map(({ id, title, text, subtitle, img }) => (
        <SliderCard key={id}>
          <SliderCard.text>{text}</SliderCard.text>
          <Avatar src={img} alt={title} style={{ width: 60, height: 60 }} />
          <SliderCard.title>{title}</SliderCard.title>
          <SliderCard.subtitle>{subtitle}</SliderCard.subtitle>
        </SliderCard>
      ))}
    </Slider>
  );
}
