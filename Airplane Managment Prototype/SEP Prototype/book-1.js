document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("search-form");
  const trainDetails = document.getElementById("train-details");

  // Define an array of train objects for demonstration purposes
  const trains = [
    {
      name: "Shatabdi Express",
      origin: "Mumbai",
      destination: "Pune",
      duration: "51 hours",
      stops: ["Nasik", "Asangaon", "Thane", "Pune"],
    },
    {
      name: "Deccan Queen",
      origin: "Pune",
      destination: "Mumbai",
      duration: "46 hours",
      stops: ["Thane", "Asangaon", "Nasik", "Pune"],
    },
  ];

  function displayTrainDetails(train) {
    trainDetails.innerHTML = "";
    const trainName = document.createElement("p");
    trainName.classList.add("train-name");
    trainName.textContent = train.name;
    trainDetails.appendChild(trainName);

    const trainDuration = document.createElement("p");
    trainDuration.classList.add("train-duration");
    trainDuration.textContent = `Duration: ${train.duration}`;
    trainDetails.appendChild(trainDuration);

    const trainStops = document.createElement("p");
    trainStops.classList.add("train-stops");
    trainStops.textContent = `Stops: ${train.stops.join(", ")}`;
    trainDetails.appendChild(trainStops);
  }

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const from = searchForm.from.value;
    const to = searchForm.to.value;
    const matchingTrains = trains.filter(
      (train) => train.origin === from && train.destination === to
    );
    if (matchingTrains.length > 0) {
      const trainList = document.createElement("ul");
      trainList.classList.add("train-list");
      matchingTrains.forEach((train) => {
        const trainItem = document.createElement("li");
        trainItem.classList.add("train-item");
        trainItem.textContent = train.name;
        trainItem.addEventListener("click", () => {
          displayTrainDetails(train);
        });
        trainList.appendChild(trainItem);
      });
      trainDetails.innerHTML = "";
      trainDetails.appendChild(trainList);
    } else {
      trainDetails.innerHTML = "<p>No trains found.</p>";
    }
  });
});
