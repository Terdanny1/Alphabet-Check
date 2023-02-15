// function test(){
//     let letter = New(document.getElementById("alphabet").value)


//     if (letter === "A" || letter === "a") {
//         console.log(document.getElementById("alphabet").innerHTML = `${letter} is a vowel letter`) 
//      }
// }

function checkLetter() {
  const input = document.getElementById('input').value.toLowerCase()
  const vowels = ['a', 'e', 'i', 'o', 'u']

  if (vowels.includes(input)) {
    document.getElementById('answer').innerHTML = `${input} is a vowel letter`
  }
  else if (input.length === 1 && input.match()){

  }
  else{
    document.getElementById('answer').innerHTML = "Please input a valid letter"
  }

}