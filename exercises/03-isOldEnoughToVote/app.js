function isOldEnoughToVote(age) {
  // your code here
  if(age<18){
      return false;
    }
  else
    {
      return true;
    }}
var output = isOldEnoughToVote(18)
console.log(output);
