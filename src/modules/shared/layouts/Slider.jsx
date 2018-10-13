import React, { Component } from 'react';
import '../../../slider.css';
import Slide from '../../../utils/slide';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlideIndex: 0,
      slideArray: [
        new Slide(
          "The Walking Dead",
          "A show about fighting zombies",
          "https://acollectivemind.files.wordpress.com/2013/12/season-4-complete-cast-poster-the-walking-dead-the-walking-dead-35777405-2528-670.png",
          "http://www.amc.com/shows/the-walking-dead",
          0
        ),
        new Slide(
          "The Big Bang Theory",
          "A show about Sheldon",
          "https://wwwimage-secure.cbsstatic.com/thumbnails/photos/770xh/tbbt_baby_name_1920.jpg",
          "http://www.cbs.com/shows/big_bang_theory/",
          1
        ),
        new Slide(
          "The Last Man on Earth",
          "A show about loneliness",
          "https://www.wired.com/wp-content/uploads/2015/02/LMOE-AliveInTuscon_scene44_0028_hires2.jpg",
          "http://www.fox.com/the-last-man-on-earth",
          2
        )
      ],
    };
  }

  componentDidMount() {
    const currentSlide = document.getElementById('slide' + this.state.currentSlideIndex)
    if (currentSlide) currentSlide.style.left = 0;
  }

  prevSlide(){
    // Figure out what the previous slide is
    var nextSlideIndex;
    // If we are at zero go to the last slide in the list
    if (this.state.currentSlideIndex === 0) {
      nextSlideIndex = this.state.slideArray.length - 1;
    } else {
      // Otherwise the next one is this slide minus 1
      nextSlideIndex = this.state.currentSlideIndex - 1;
    }

    // Setup the next slide and current slide for animations
    document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
    document.getElementById("slide" + this.state.currentSlideIndex).style.left = 0;

    // Add the appropriate animation class to the slide
    document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
    document.getElementById("slide" + this.state.currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");
    console.log('Next ----->', nextSlideIndex);
    console.log('Current ----->', this.state.currentSlideIndex);
    // Set current slide to the new current slide
    this.setState({
      currentSlideIndex: nextSlideIndex
    })
  }

  nextSlide(){
    // Figure out what the next slide is
    var nextSlideIndex;
    // If we are at the last slide the next one is the first (zero based)
    if (this.state.currentSlideIndex === (this.state.slideArray.length - 1) ) {
      nextSlideIndex = 0;
    } else {
      // Otherwise the next slide is the current one plus 1
      nextSlideIndex = this.state.currentSlideIndex + 1;
    }

    // Setup the next slide and current slide for animations
    document.getElementById("slide" + nextSlideIndex).style.left = "100%";
    document.getElementById("slide" + this.state.currentSlideIndex).style.left = 0;

    // Add the appropriate animation class to the slide
    document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
    document.getElementById("slide" + this.state.currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft");

    console.log('current ----->', this.state.currentSlideIndex);

    // Set current slide to the new current slide
    this.setState({
      currentSlideIndex: nextSlideIndex
    })
  }

  render() {
    const slideArray = this.state.slideArray;
    const listSlideItems = slideArray.map((item) => {
      return (
        <div key={item.id} id={item.id} className='singleSlide' style={{backgroundImage: `url(${item.background})`}}>
          <div className='slideOverlay'>
            <h1>{item.title}</h1>
            <h4>{item.subtitle}</h4>
            <a href={item.link} target='_blank'>Open Link</a>
          </div>
        </div>
      )
    });

    return (
      <div>
        <div id="mySlider">
          { listSlideItems }
        </div>
        <div id="sliderNav">
          <div id="sliderPrev" onClick={this.prevSlide.bind(this)}>
            <img alt='prev' src="https://www.advdiabetes.com/webroot/images/pre-btn.png" />
          </div>
          <div id="sliderNext" onClick={this.nextSlide.bind(this)}>
            <img alt='next' src="https://www.advdiabetes.com/webroot/images/nxt-btn.png" />
          </div>
        </div>
      </div>
    )
  }
}

export default Slider;
