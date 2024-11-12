import React from "react";
import "../App.css";
export default function Slider(props) {
  return (
    <div className="slider">
      <div>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://assets-in.bmscdn.com/promotions/cms/creatives/1728393843687_raghudixitbmsadaptallcities.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://assets-in.bmscdn.com/promotions/cms/creatives/1727703711171_halloweenwithtalwiinderweb.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="cards1">
        <p className="p">Recommended Concerts</p>
        <div className="maincard">
          <div className="card1">
            <img
              className="cardimg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRab48kN72VSevrFl6BsMXCRArv8OuifqEGGg&s"
              alt=""
            />
            <h6>Coldplay Concert</h6>
            <p className="p4">
              ⭐⭐⭐⭐⭐<span className="sp4">16K Votes</span>
            </p>
            <button className="btn1" onClick={props.home}  >Available</button>
          </div>
          <div className="card1">
            <img
              className="cardimg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQic4yGN0Rr5Q2Bpkg2x5Eulb48dXmPC2L5GQ&s"
              alt=""
            />
            <h6>Amaal Malik Concert</h6>
            <p className="p4">
              ⭐⭐⭐⭐⭐<span className="sp4">8K Votes</span>
            </p>
            <button  className="btn2">Unavilable</button>
          </div>
          <div className="card1">
            <img
              className="cardimg"
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <h6>Armaan Malik Concert</h6>
            <p className="p4">
              ⭐⭐⭐⭐⭐<span className="sp4">11K Votes</span>
            </p>
            <button  className="btn2">Unavilable</button>
          </div>
          <div className="card1">
            <img
              className="cardimg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG-bYpcra9VCtahanq7_p3Yni3fRtjBzdwcA&s"
              alt=""
            />
            <h6>Neha kakkar Concert</h6>
            <p className="p4">
              ⭐⭐⭐⭐⭐<span className="sp4">9K Votes</span>
            </p>
            <button  className="btn2">Unavilable</button>
          </div>
          <div className="card1">
            <img
              className="cardimg"
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <h6>Arijit Singh Concert</h6>
            <p className="p4">
              ⭐⭐⭐⭐⭐<span className="sp4">8K Votes</span>
            </p>
            <button  className="btn2">Unavilable</button>
          </div>
          <div className="card1">
            <img
              className="cardimg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ24sgzwt01Gy3ZMQscVEM8GvuqHJsNq_0Ccg&s"
              alt=""
            />
            <h6>Tulsi Kumar Concert</h6>
            <p className="p4">
              ⭐⭐⭐⭐⭐<span className="sp4">6K Votes</span>
            </p>
            <button  className="btn2">Unavilable</button>
          </div>
        </div>
      </div>
    </div>
  );
}
