document.addEventListener("DOMContentLoaded", () => {
  const selectElement = document.querySelector("#favFeature");

  const features = [
    {
      location: "all",
      feature: "Color Scheme",
    },
    {
      location: "home",
      feature: "Home Layout",
    },
    {
      location: "all",
      feature: "Menu Buttons",
    },
    {
      location: "all",
      feature: "Page Viewport Responsiveness",
    },
    {
      location: "form",
      feature: "Feedback Form",
    },
    {
      location: "dice",
      feature: "Dice Rollers",
    },
    {
      location: "all",
      feature: "Navigation",
    },
    {
      location: "tips",
      feature: "Tips Page Content",
    },
  ];

features.forEach(feature => {
    let newFeature = document.createElement("option");
    newFeature.value = feature.location;
    newFeature.text = feature.feature;

    selectElement.appendChild(newFeature);
});
});


