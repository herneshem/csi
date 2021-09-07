


const nombre = document.getElementById('nombre')
const apellido = document.getElementById('apellido')
const alias = document.getElementById('alias')
const btn = document.getElementById('btn')
const li =  document.getElementById('lista')
const fotos = document.getElementById('fotos')


btn.addEventListener('click',()=>{
    enviar()
    //console.log(e.target) 
    })
    function enviar(){
       li.innerHTML=`
       <li>${nombre.value}</li>
       <li>${apellido.value}</li>
       <li>${alias.value}</li>
    
       `  
       fotos.innerHTML = `
       <img src="img/ted_bundy.jpg" >
       `    
                
    }


    


   


