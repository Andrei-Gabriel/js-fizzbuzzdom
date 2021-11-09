for(let i = 1; i <= 100; i++){

    let div = document.createElement('div');
    div.classList.add("base-box");
    document.getElementById("container").appendChild(div);

    if(i % 3 == 0 && i % 5 == 0){
        div.innerHTML = "FizzBuzz";
        div.classList.add("FizzBuzz");
    }
    else if(i % 3 == 0){
        div.innerHTML = "Fizz";
        div.classList.add("Fizz");
    }
    else if(i % 5 == 0){
        div.innerHTML = "Buzz";
        div.classList.add("Buzz");
    }
    else{
        div.innerHTML = i;
    }
}