for(let i = 1; i <= 100; i++){
    
    let div = document.createElement('div');
    div.classList.add("base-box");
    document.getElementById("container").appendChild(div);

    if(i % 3 == 0 && i % 5 == 0){
        div.innerHTML = "FizzBuzz";
    }
    else if(i % 3 == 0){
        div.innerHTML = "Fizz";
    }
    else if(i % 5 == 0){
        div.innerHTML = "Buzz";
    }
    else{
        div.innerHTML = i;
    }
}