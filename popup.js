document.addEventListener('DOMContentLoaded', function() {

    class Penguin {
        constructor(el) {
            this.node = document.createElement("img");
            this.node.setAttribute("id", "penguin");
            this.node.setAttribute("src", "src/access/Penguin-16px.png");
        
            el.appendChild(this.node);
        
        }
    }  

    class Person {
        constructor(name, date) {
            this.name = name;
            this.date = date;

        
        }
    }  
    
    // DOM Elements
    // body
    const body = document.querySelector("body");

    // 1. div birthdayPerson
    const birthdayPerson = document.querySelector("#birthdayPerson");
    // 2. div giftCard
    const giftCard = document.querySelector("#giftCard");
    // 3. input birthdayName
    const birthdayName = document.querySelector("#birthdayName");
    // 4. input birthdayDate
    const birthdayDate = document.querySelector("#birthdayDate");

    // creating a new penguin
    const penguin = new Penguin(birthdayPerson);

    function populateBirthdays (birthdayName, birthdayDate) {
        const person = new Person(birthdayName, birthdayDate);
        console.log(person);

    }()
    document.addEventListener("submit", populateBirthdays())
})
