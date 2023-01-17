// Define the input and submit elements, and the p tag where the answer will display
let input = document.querySelector("#input");
let submit = document.querySelector("#submit");
let answer = document.querySelector("#answer");

// Create an event listener for the submit button
submit.addEventListener("click", function(){
    let inputValue = input.value;
    countVowels(inputValue);
    console.log(inputValue);
});

// Create a function that takes in a string, counts the vowels, and displays the answer
function countVowels(str){
    // Define the vowels and initial count state
    let vowels = "aeiouAEIOU";
    let count = 0;

    // Iterate through the string, count the vowels, and return the number of vowels as the answer
    for(i = 0; i < str.length; i++){
        if(vowels.indexOf(str[i]) !== -1){
            count++
        }
    }
    // Display the answer inside the p tag with the id=answer
    answer.innerHTML = count;
};