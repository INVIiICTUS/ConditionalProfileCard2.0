import "../style/index.css";

function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // Name and Last name
  if (variables.name == null) variables.name = "Nombre";
  if (variables.lastname == null) variables.lastname = "Apellido";

  //Social Media links
  //Twitter
  if (variables.twitter != null) variables.twitter;
  //Github
  if (variables.github != null) variables.github;
  //Linkedin
  if (variables.linkedin != null) variables.linkedin;
  //IG
  if (variables.instagram != null) variables.instagram;

  // Role
  let userRole = "<h2>Puesto</h2>";
  if (variables.role == "Floor Planner") userRole = "<h2>Floor Planner</h2>";
  else if (variables.role == "Technical Writter")
    userRole = "<h2>Technical Writer</h2>";
  else if (variables.role == null) userRole = "<h2>Puesto</h2>";
  // Country & City
  if (variables.country == null) variables.country = "Pais";
  else if (variables.country == "France") variables.country = "France";
  else if (variables.country == "USA") variables.country = "USA";
  else if (variables.country == "Portugal") variables.country = "Portugal";
  else if (variables.country == "Venezuela") variables.country = "Venezuela";
  else if (variables.country == "Spain") variables.country = "Spain";
  if (variables.city == null) variables.city = "Ciudad";
  else if (variables.city == "Miami") variables.city = "Miami";
  else if (variables.city == "Munich") variables.city = "Munich";
  else if (variables.city == "Caracas") variables.city = "Caracas";
  else if (variables.city == "Toronto") variables.city = "Toronto";
  else if (variables.city == "Madrid") variables.city = "Madrid";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
            <img src="${variables.avatarURL}" class="photo" />
            <h1>${variables.name} ${variables.lastname}</h1>
            <h2>${variables.role}</h2>
            <h3>${variables.city}, ${variables.country}</h3>
            <ul class=${variables.socialMediaPosition}>
            <li><a href="${variables.twitter}"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/${variables.github}"><i class="fa fa-github"></i></a></li>
            <li><a href="https://linkedin.com/in/${variables.linkedin}"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${variables.instagram}"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background:
      "https://static.brusheezy.com/system/resources/previews/000/001/464/non_2x/lightning-brushes.jpg",
    // this is the url for the profile avatar
    avatarURL:
      "https://mundotrucos.com/wp-content/uploads/2020/10/fortnite-profile-pic-guaco.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter:
      "https://pbs.twimg.com/profile_images/1267871213386424321/iMP7ZMNn_400x400.jpg",
    github: "INVIiICTUS",
    linkedin: "j-enrique-arés-lorenzo-6a636a148",
    instagram: "j3alor89",
    name: null,
    lastname: null,
    role: "puesto",
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
