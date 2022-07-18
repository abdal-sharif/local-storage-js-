const add = e=>{
    let fromdata ={
        Number : document.getElementById('number').value,
        fname : document.getElementById('fname').value,
        email : document.getElementById('email').value,
    }
    localStorage.setItem('fromdata', JSON.stringify(fromdata));
    console.log(localStorage.getItem('fromdata'))
    e.preventDefault();
}