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
        constructor(name, date, email) {
            this.name = name;
            this.date = date;
            this.email = email;
            this.storage = {};
        
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

    const email = document.querySelector("email");

    // creating a new penguin
    const penguin = new Penguin(birthdayPerson);

    //we need to create input form for email address on html file
    function populateBirthdays (birthdayName, birthdayDate, email) {
        const person = new Person(birthdayName, birthdayDate, email);


    }
    document.addEventListener("submit", populateBirthdays())
})
