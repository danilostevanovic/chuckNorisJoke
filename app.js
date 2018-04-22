document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const xhr =new XMLHttpRequest();
  const number = document.getElementById("number").value;
  

  xhr.open('GET',`https://api.icndb.com/jokes/random/${number}`,true);
  
  xhr.onload = function(){
    if(this.status===200){
      const response = JSON.parse(this.responseText);

      let output = '';

      if(response.type==='success'){
        response.value.map(response=>{
          return output += `<li>${response.joke}</li>`
        })
      }else{
        output += `<li>Something went wrong</li>`
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  }



  xhr.send();

  e.preventDefault();
}