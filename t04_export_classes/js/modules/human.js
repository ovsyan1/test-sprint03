let superhero;
let idLife;
let idFeet;
class Human {
    superhero = false;
    idLife;
    idFeet;
  constructor(img, firstName, lastName, gender, age, calories) {
    this.img = img;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.calories = calories;
  }
  sleepFor() {
    let howLong = prompt('How long do you want sleep in seconds?');
    nomNomNom.innerHTML = `I'm sleeping`;
    nomNomNom.classList.add('show')
    document.querySelector('img').src = 'assets/images/sleep.gif'
    setTimeout(() => {
      if(!this.superhero){
        document.querySelector('img').src = 'assets/images/dtretiakov.png';
      }else if(human.calories > 500 && this.superhero){
        document.querySelector('img').src = 'assets/images/dtretiakov1.png';
        document.querySelector("#fly").classList.add('show')
        document.querySelector("#fight").classList.add('show')
      }
      nomNomNom.innerHTML = `I'm awake now`
      setTimeout(() => {
        nomNomNom.classList.remove('show');
      }, 2000);
    }, howLong * 1000)
  }
  feed() {
    nomNomNom.innerHTML = `Nom Nom Nom`;
    if (human.calories < 500) {
      nomNomNom.classList.add("show");
      document.querySelector("img").src = "assets/images/giphy.gif";
          idFeet = setInterval(() => {
            this.calories += 200 / 100;
            document.querySelector('.calories').innerHTML = Math.floor(this.calories)
          }, 100);
        // human.calories +=  200;
        // document.querySelector(".calories").innerHTML = `${human.calories}`;
        setTimeout(() => {
        nomNomNom.classList.remove("show");
        document.querySelector("img").src = "assets/images/dtretiakov.png";
        clearInterval(idFeet)
      }, 10000);
    }else if(human.calories > 500){
      
      nomNomNom.innerHTML = `I'm full`;
      nomNomNom.classList.add("show");
      setTimeout(()=>{
        nomNomNom.classList.remove('show')
      }, 3000)
    }
  }
  checkCalories(){
    nomNomNom.innerHTML = `I'm hungry, please feed me`;
    nomNomNom.classList.add('show');
  }
  startLife(){
    this.idLife = setInterval(() => {
      this.calories -= 200 / (100 * 60);
      document.querySelector('.calories').innerHTML = Math.floor(this.calories)
    }, 10);
  }
  humanDead(){
    if(human.calories <= 0){
      document.querySelector("img").src = "assets/images/dead.gif"
    }
  }

  startHero() {
    this.superhero = true;
  }
}

let human = new Human(
  "assets/images/dtretiakov.png",
  "Denis",
  "Tretiakov",
  "male",
  22,
  300
);

export default human