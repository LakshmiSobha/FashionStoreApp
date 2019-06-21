import React from 'react';

export class Carousel extends React.Component{
    render(){
        return <div>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div  className="carousel-inner">
                    <div className="item active">
                        <img id="carouselImgs" src="/images/carousal1.jpg" alt="Carsl Img1"  />
                    </div>
                    <div className="item">
                        <img id="carouselImgs" src="/images/carousal2.jpg" alt="Carsl Img2"  />
                    </div>
                    <div className="item">
                        <img id="carouselImgs" src="/images/carousal3.jpg" alt="Carsl Img3" />
                    </div>
                </div>
                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    }
}