//Challenges
//1.Reverse a string
function reverseString(input) {
     return input.split('').reverse().join('');
}
console.log(reverseString("Hello")); // Output: "olleH"
     
//2.Filter Positive numbers
function filterPositiveNumbers(numbers) {
       return numbers.filter(num=>num>0);
}
     
console.log(filterPositiveNumbers([-1, 2, -3, 4, -5, 6])); // Output: [2, 4, 6]

//3.Find the maximum
function findMaxNumber(numbers) {
      const max= numbers.reduce(function(acc,curr){
              if(curr>acc) 
                 acc=curr;
              return acc;
       },0)
       return max;
}
     
console.log(findMaxNumber([3, 9, 1, 7, 4])); // Output: 9

//4.Tile case a statement
function titleCase(sentence) {
       return sentence.split(' ').map(capitalize).join(' ');
       // console.log(sentence);
}

function capitalize(x){
       if(x.indexOf())
       x.toUpperCase();
}
     
console.log(titleCase("this is a sample sentence")); // Output: "This Is A Sample Sentence"
     
     
