import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  marginTop: "5%",
  width: "30%",
  height: "450px",
};
const slideImages = [
  {
    url: "https://cdn.marvel.com/u/prod/marvel/i/mg/4/e0/65298f319f9d9/clean.jpg",
    caption: "Slide 1",
    title: "Moon Knight (2021) #28",
    published: "October 18, 2023",
    writer: "Jed Mackay",
    penciler: "Federico Sabbatini",
    coverArtist: "Stephen Segovia",
    description: "Moon Knight and his allies race to intercept the Black Spectre before his apocalyptic schemes bear fruit - but the clock is ticking, and a city hangs in the balance.",
  },
  {
    url: "https://cdn.marvel.com/u/prod/marvel/i/mg/3/f0/65298f4e6c035/clean.jpg",
    caption: "Slide 2",
    title: "Ghost Rider (2022) #19",
    published: "October 18, 2023",
    writer: "Benjamin Percy",
    penciler: "Cory Smith, Brent Peeples",
    coverArtist: "Bjorn Barends",
    description:
      "MOVE OVER, GHOST RIDER! Talia Warroad is one of the most gifted magicians in America. But what happens when the Cult of Mephisto wants a piece of that gift? And what will they do when they find out the Ghost Rider is her partner?",
  },
  {
    url: "https://cdn.marvel.com/u/prod/marvel/i/mg/4/60/65298f345f28e/clean.jpg",
    caption: "Slide 3",
    title: "Miles Morales: Spider-Man (2022) #11",
    published: "October 18, 2023",
    writer: "Cody Ziglar",
    penciler: "Federico Vicentini",
    coverArtist: "Federico Vicentini",
    description:
      "A BLADE BITES IN BROOKLYN! A sinister force has infiltrated SPIDER-MAN's new neighborhood. Thousands are at risk, and HIGHTAIL and the CAPE KILLERS already have Miles on the ropes. His only hope may lie in vampire hunter BLADE, who has business in Brooklyn. But Blade and Spidey may not exactly see eye to eye on the current predicament. One that Blade really wants to sink his teeth into!",
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <h2>Latest Comic releases</h2>
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index} className="one-comic">
            <div className="comic-image" style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}></div>
            <div className="comic-detail">
              <h2>{slideImage.title}</h2>
              <h3>Published</h3>
              <p>{slideImage.published}</p>
              <div className="writer">
                <div>
                  <h3>Writer:</h3>
                  <p>{slideImage.writer}</p>
                </div>
                <div>
                  <h3>Penciler:</h3>
                  <p>{slideImage.penciler}</p>
                </div>
              </div>
              <h3>Cover Artist:</h3>
              <p>{slideImage.coverArtist}</p>
              <p>{slideImage.description}</p>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
