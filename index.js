// function test(){
//     let letter = New(document.getElementById("alphabet").value)


//     if (letter === "A" || letter === "a") {
//         console.log(document.getElementById("alphabet").innerHTML = `${letter} is a vowel letter`) 
//      }
// }

//fuction to check if a letter is vowel or consonant
function checkLetter() {
  const input = document.getElementById('input').value.toLowerCase()
  const vowels = ['a', 'e', 'i', 'o', 'u']

  if (vowels.includes(input)) {
    document.getElementById('result').innerHTML = `${input} is a vowel letter`
  }
  else if (input.length === 1 && input.match(/[a-z]/i)){
    document.getElementById('result').innerHTML = `${input} is a consonant letter`
  }
  else{
    document.getElementById('result').innerHTML = "Please input a valid letter"
  }

  //clear input field and reset text
//   document.getElementById('input').value = ''
//   setTimeout (() => XPathResult.innerHTML = '', 3000)

}

//funtion to reset it
function reset(){
    document.getElementById('input').value = ""
    document.getElementById('result').innerHTML=""
}