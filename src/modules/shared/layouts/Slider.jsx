import React, { Component } from 'react';
import '../../../slider.css';
import Slide from '../../../utils/slide';

class Slider extends Component {
  constructor(props) {
    super(props);

    this.slideIndex = 0;
    this.currentSlideIndex = 0;
    this.slideArray = [];
    this.initSlideItems.bind(this);
  }

  componentDidMount() {
    this.buildSlider.bind(this);
  }

  initSlideItems() {
    var walkingDead = new Slide(
      "The Walking Dead",
      "A show about fighting zombies",
      "https://acollectivemind.files.wordpress.com/2013/12/season-4-complete-cast-poster-the-walking-dead-the-walking-dead-35777405-2528-670.png",
      "http://www.amc.com/shows/the-walking-dead",
      0
    );
    this.slideArray.push(walkingDead);
    this.slideIndex = 1;

    var bigBang = new Slide(
      "The Big Bang Theory",
      "A show about Sheldon",
      "https://wwwimage-secure.cbsstatic.com/thumbnails/photos/770xh/tbbt_baby_name_1920.jpg",
      "http://www.cbs.com/shows/big_bang_theory/",
      1
    );
    this.slideArray.push(bigBang);
    this.slideIndex = 2;
    var LastMan = new Slide(
      "The Last Man on Earth",
      "A show about loneliness",
      "https://www.wired.com/wp-content/uploads/2015/02/LMOE-AliveInTuscon_scene44_0028_hires2.jpg",
      "http://www.fox.com/the-last-man-on-earth",
      2
    );
    this.slideArray.push(LastMan);
  }

  buildSlider(){
    // A variable to hold all our HTML
    var myHTML;

    // Go through the Array and add the code to our HTML
    for(var i = 0; i < this.slideArray.length; i++) {
      myHTML += "<div id='" + this.slideArray[i].id +
      "' class='singleSlide' style='background-image:url(" + this.slideArray[i].background + ");'>" +
      "<div class='slideOverlay'>" +
      "<h1>" + this.slideArray[i].title + "</h1>" +
      "<h4>" + this.slideArray[i].subtitle + "</h4>" +
      "<a href='" + this.slideArray[i].link + "' target='_blank'>Open Link</a>" +
      "</div>" +
      "</div>";
    }

    // Print our HTML to the web page
    document.getElementById("mySlider").innerHTML = myHTML;
    // Display the first slide
    document.getElementById("slide" + this.currentSlideIndex).style.left = 0;
  }

  prevSlide(){
    // Figure out what the previous slide is
    var nextSlideIndex;
    // If we are at zero go to the last slide in the list
    if (this.currentSlideIndex === 0) {
      nextSlideIndex = 0;
    } else {
      // Otherwise the next one is this slide minus 1
      nextSlideIndex = this.currentSlideIndex - 1;
    }

    // Setup the next slide and current slide for animations
    document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
    document.getElementById("slide" + this.currentSlideIndex).style.left = 0;

    // Add the appropriate animation class to the slide
    document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
    document.getElementById("slide" + this.currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");
    console.log('----->', nextSlideIndex);
    console.log('----->', this.currentSlideIndex);
    // Set current slide to the new current slide
    this.currentSlideIndex = nextSlideIndex;
  }

  nextSlide(){
    // Figure out what the next slide is
    var nextSlideIndex;
    // If we are at the last slide the next one is the first (zero based)
    if (this.currentSlideIndex === (this.slideArray.length - 1) ) {
      nextSlideIndex = 0;
    } else {
      // Otherwise the next slide is the current one plus 1
      nextSlideIndex = this.currentSlideIndex + 1;
    }

    // Setup the next slide and current slide for animations
    document.getElementById("slide" + nextSlideIndex).style.left = "100%";
    document.getElementById("slide" + this.currentSlideIndex).style.left = 0;

    // Add the appropriate animation class to the slide
    document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
    document.getElementById("slide" + this.currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft");

    console.log('----->', this.currentSlideIndex);

    // Set current slide to the new current slide
    this.currentSlideIndex = nextSlideIndex;
  }

  render() {
    return (
      <div>
        <div id="mySlider"></div>
        <div id="sliderNav">
          <div id="sliderPrev" onClick={this.prevSlide.bind(this)}><img alt='prev' src="https://www.advdiabetes.com/webroot/images/pre-btn.png" /></div>
          <div id="sliderNext" onClick={this.nextSlide.bind(this)}><img alt='next' src="https://www.advdiabetes.com/webroot/images/nxt-btn.png" /></div>
        </div>
      </div>
    )
  }
}

export default Slider;
