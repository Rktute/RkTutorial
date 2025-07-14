import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Body/Body2.css';

const toppers = [
  { name: 'Sandeep', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4NAwzCmINjyHGPI5NKiyOeFc53q_-kzk78g&s', marks: 485, rank: 1 },
  { name: 'Anjali', image: 'https://static.sociofyme.com/photo/102538525/102538525.jpg', marks: 478, rank: 2 },
  { name: 'Rahul', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_p5HRQgBwqUL-u2WZ3Ire2ywbNKKnBP_ZA&s', marks: 470, rank: 3 },
  { name: 'Pooja', image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202007/cbse_result_2020_cbse_12th_res.jpeg?size=690:388', marks: 465, rank: 4 },
  { name: 'Aman', image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/jee_main_2022_topper_jharkhand_1200x768.jpeg?VersionId=pcgJuCl0dfkOM7dKpFSuHE6VxPdAr2MD', marks: 460, rank: 5 }
];

const Bodu2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="toppers-section">
      <h1 className="section-title">YOUR TOPPERS</h1>
      <Slider {...settings}>
        {toppers.map((student, index) => (
          <div className="topper-card" key={index}>
            <img src={student.image} alt={student.name} className="topper-img" />
            <h3>{student.name}</h3>
            <p className="topper-info">Marks: {student.marks}/500</p>
            <p className="topper-info">Rank: #{student.rank}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Bodu2;
