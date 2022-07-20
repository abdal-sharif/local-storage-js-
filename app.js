document.querySelector("#contact-form").addEventListener('submit', (e) =>{
    e.preventDefault();
    const phone = document.querySelector('#phone-number').value;
    const name = document.querySelector('#full-name').value;
    const email = document.querySelector('#email').value;
 
    if(phone === '' ||  name === '' || email === ''){
        const div = document.createElement('div');
        div.className = `alert alert-danger`;
        div.appendChild(document.createTextNode("fadlan xog ku buuxi"));

        const container = document.querySelector('.container');
        const form = document.querySelector("#contact-form");

        container.insertBefore(div , form)

        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000);

    }
    else{
        const list = document.querySelector("#contact-list");
        const row = document.createElement("tr");
        row.innerHTML = `
        <td> ${phone} </td>
        <td> ${name} </td>
        <td> ${email} </td>
        <td>  <a href="" class="btn btn-danger btn-sm delete ">X</a></td>
     
        `;
        list.append(row);
      document.querySelector('#phone-number').value ="";
      document.querySelector('#full-name').value = "";
      document.querySelector('#email').value = "";

      const div = document.createElement('div');
      div.className = `alert alert-success`;
      div.appendChild(document.createTextNode("contact added"));

      const container = document.querySelector('.container');
      const form = document.querySelector("#contact-form");

      container.insertBefore(div , form)

      setTimeout(function(){
          document.querySelector('.alert').remove();
      },2000);
    }
})

document.querySelector("#contact-list").addEventListener('click' , (e) =>{
          if(e.target.classlist.contains('delete')) {
            target.parentelement.parentelement.remove();


            
          }
    

          
})
