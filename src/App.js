import React, { useState } from "react";
import "./App.css";

function App() {
  const [cards] = useState([
    {
      title: "3.3.0 (14/05/2018)",
      photo: "photo1.jpg",
      name: "Kevin Joe",
      text: "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements. Share permissions re-design and optimization",
      buttonText: "New",
    },
    {
      title: "3.1.0 (20/05/2015)",
      photo: "photo1.jpg",
      name: "Kevin Joe",
      text: "Introducing Host Cloud Drive - virtual drive functionality  New Share options and managment New, more user friendly design Sync optimizations Various performance improvements and bug fixes",
      buttonText: "Fix",
    },
    {
      title: "3.1.0 (20/05/2015)",
      photo: "photo1.jpg",
      name: "Kevin Joe",
      text: "Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes",
      buttonText: "Improvement",
    },
    {
      title: "3.3.0 (14/05/2018)",
      photo: "photo1.jpg",
      name: "Kevin Joe",
      text: "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements. Share permissions re-design and optimization",
      buttonText: "New",
    },
    {
      title: "3.1.0 (20/05/2015)",
      photo: "photo1.jpg",
      name: "Kevin Joe",
      text: "Introducing Host Cloud Drive - virtual drive functionality  New Share options and managment New, more user friendly design Sync optimizations Various performance improvements and bug fixes",
      buttonText: "Fix",
    },
    {
      title: "3.1.0 (20/05/2015)",
      photo: "photo1.jpg",
      name: "Kevin Joe",
      text: "Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes",
      buttonText: "Improvement",
    },
    {
      title: "3.3.0 (14/05/2018)",
      photo: "photo1.jpg",
      name: "Kevin Joe",
      text: "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements. Share permissions re-design and optimization",
      buttonText: "New",
    },
    {
      title: "3.1.0 (20/05/2015)",
      photo: "photo1.jpg",
      name: "Kevin Joe",
      text: "Introducing Host Cloud Drive - virtual drive functionality  New Share options and managment New, more user friendly design Sync optimizations Various performance improvements and bug fixes",
      buttonText: "Fix",
    },
    {
      title: "3.1.0 (20/05/2015)",
      photo: "photo1.jpg",
      name: "Kevin Joe",
      text: "Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes",
      buttonText: "Improvement",
    },
  ]);

  return (
    <div>
      <section>
        <div className="App">
          <div className="cards">
            {cards.map((card, i) => (
              <div key={i} className="card">
                <h3>{card.title}</h3>
                <div className="button-container">
                  <button
                    className={`button ${getButtonClass(card.buttonText)}`}
                  >
                    {card.buttonText}
                  </button>
                  <div className="photo-name">
                    <img src={card.photo} alt="" />
                    <span>{card.name}</span>
                  </div>
                </div>

                <p>{card.text}</p>
                <button className="btn">Download</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
function getButtonClass(buttonText) {
  switch (buttonText) {
    case "New":
      return "new-button";
    case "Fix":
      return "fix-button";
    case "Improvement":
      return "improvement-button";
    default:
      return "";
  }
}

export default App;
