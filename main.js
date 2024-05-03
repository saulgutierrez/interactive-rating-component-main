window.addEventListener("load", () => {
    const component1 = document.querySelector(".rate-1");
    const component2 = document.querySelector(".rate-2");
    const component3 = document.querySelector(".rate-3");
    const component4 = document.querySelector(".rate-4");
    const component5 = document.querySelector(".rate-5");

    // Give color into the selected item
    component1.addEventListener('click', () => {
      component1.style.backgroundColor = "hsl(25, 97%, 53%)";
      component1.style.color = "hsl(0, 0%, 100%)";
      component2.style.backgroundColor = "hsl(213, 19%, 18%)";
      component2.style.color = "hsl(216, 12%, 54%)";
      component3.style.backgroundColor = "hsl(213, 19%, 18%)";
      component3.style.color = "hsl(216, 12%, 54%)";
      component4.style.backgroundColor = "hsl(213, 19%, 18%)";
      component4.style.color = "hsl(216, 12%, 54%)";
      component5.style.backgroundColor = "hsl(213, 19%, 18%)";
      component5.style.color = "hsl(216, 12%, 54%)";
    });

    component2.addEventListener('click', () => {
      component1.style.backgroundColor = "hsl(213, 19%, 18%)";
      component1.style.color = "hsl(216, 12%, 54%)";
      component2.style.backgroundColor = "hsl(25, 97%, 53%)";
      component2.style.color = "hsl(0, 0%, 100%)";
      component3.style.backgroundColor = "hsl(213, 19%, 18%)";
      component3.style.color = "hsl(216, 12%, 54%)";
      component4.style.backgroundColor = "hsl(213, 19%, 18%)";
      component4.style.color = "hsl(216, 12%, 54%)";
      component5.style.backgroundColor = "hsl(213, 19%, 18%)";
      component5.style.color = "hsl(216, 12%, 54%)";
    });

    component3.addEventListener('click', () => {
        component1.style.backgroundColor = "hsl(213, 19%, 18%)";
        component1.style.color = "hsl(216, 12%, 54%)";
        component2.style.backgroundColor = "hsl(213, 19%, 18%)";
        component2.style.color = "hsl(216, 12%, 54%)";
        component3.style.backgroundColor = "hsl(25, 97%, 53%)";
        component3.style.color = "hsl(0, 0%, 100%)";
        component4.style.backgroundColor = "hsl(213, 19%, 18%)";
        component4.style.color = "hsl(216, 12%, 54%)";
        component5.style.backgroundColor = "hsl(213, 19%, 18%)";
        component5.style.color = "hsl(216, 12%, 54%)";
    });

    component4.addEventListener('click', () => {
        component1.style.backgroundColor = "hsl(213, 19%, 18%)";
        component1.style.color = "hsl(216, 12%, 54%)";
        component2.style.backgroundColor = "hsl(213, 19%, 18%)";
        component2.style.color = "hsl(216, 12%, 54%)";
        component3.style.backgroundColor = "hsl(213, 19%, 18%)";
        component3.style.color = "hsl(216, 12%, 54%)";
        component4.style.backgroundColor = "hsl(25, 97%, 53%)";
        component4.style.color = "hsl(0, 0%, 100%)";
        component5.style.backgroundColor = "hsl(213, 19%, 18%)";
        component5.style.color = "hsl(216, 12%, 54%)";
    });

    component5.addEventListener("click", () => {
        component1.style.backgroundColor = "hsl(213, 19%, 18%)";
        component1.style.color = "hsl(216, 12%, 54%)";
        component2.style.backgroundColor = "hsl(213, 19%, 18%)";
        component2.style.color = "hsl(216, 12%, 54%)";
        component3.style.backgroundColor = "hsl(213, 19%, 18%)";
        component3.style.color = "hsl(216, 12%, 54%)";
        component4.style.backgroundColor = "hsl(213, 19%, 18%)";
        component4.style.color = "hsl(216, 12%, 54%)";
        component5.style.backgroundColor = "hsl(25, 97%, 53%)";
        component5.style.color = "hsl(0, 0%, 100%)";
    });
  });

  function submitRate() {
    // Modified components
    const component1 = document.querySelector(".rate-1");
    const component2 = document.querySelector(".rate-2");
    const component3 = document.querySelector(".rate-3");
    const component4 = document.querySelector(".rate-4");
    const rating = document.querySelector(".rating");
    const ratingCard = document.querySelector(".card-1");
    const thankYouState = document.querySelector(".card-2");

    // Showing thankYou component
    if (component1.style.backgroundColor == "rgb(251, 116, 19)") {
        rating.innerHTML = "You selected 1 out of 5";
        ratingCard.style.display = "none";
        thankYouState.style.display = "flex";
    } else if (component2.style.backgroundColor == "rgb(251, 116, 19)") {
        rating.innerHTML = "You selected 2 out of 5";
        ratingCard.style.display = "none";
        thankYouState.style.display = "flex";
    } else if (component3.style.backgroundColor == "rgb(251, 116, 19)") {
        rating.innerHTML = "You selected 3 out of 5";
        ratingCard.style.display = "none";
        thankYouState.style.display = "flex";
    } else if (component4.style.backgroundColor == "rgb(251, 116, 19)") {
        rating.innerHTML = "You selected 4 out of 5";
        ratingCard.style.display = "none";
        thankYouState.style.display = "flex";
    } else {
        rating.innerHTML = "You selected 5 out of 5";
        ratingCard.style.display = "none";
        thankYouState.style.display = "flex";
    }
  }