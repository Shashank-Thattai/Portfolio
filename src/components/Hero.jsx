import Reactfrom from "react";
import "./Hero.css"

export default function Hero(){
   
      
    return(
        <section className="Hero">
        <div className ="hero-content" id ="hero">
        <h1>Hello, im <span>Shashank Thattai</span> </h1>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/045/132/934/small_2x/a-beautiful-picture-of-the-eiffel-tower-in-paris-the-capital-of-france-with-a-wonderful-background-in-wonderful-natural-colors-photo.jpg"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, architecto?</p>
        <a href="#projects" className="btn">View my work</a>
        <a href="#" className="btn">View my resume</a>
        <a href="#" className="btn">View my Github</a>
        </div>

        </section>
    );
}