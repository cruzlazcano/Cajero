var uno = document.getElementById('uno');
var dos = document.getElementById('dos');
var tres = document.getElementById('tres');
var cuatro = document.getElementById('cuatro');
var cinco = document.getElementById('cinco');
var seis = document.getElementById('seis');
var siete = document.getElementById('siete');
var ocho = document.getElementById('ocho');
var nueve = document.getElementById('nueve');

var aceptar = document.getElementById('aceptar');
var boton1 = document.getElementById('boton1');
var boton2 = document.getElementById('boton2');
var info = document.getElementById('info');
var display_datos = document.getElementById('display_datos');
var txt_titulo=document.getElementById('txt_titulo');
var btn_saldo = document.getElementById('btn_saldo');
var saldo = document.getElementById('saldo');
var btn_monto = document.getElementById('btn_monto');
var btn_retiro = document.getElementById('btn_retiro');
var agregar = document.getElementById('agregar');
var retiro = document.getElementById('retiro');
var led = document.getElementById('led');
var billete = document.getElementById('billete');



var personas = [{
        nombre: "raul",
        saldo:15000
    },  
    {
        nombre:"francisco",
        saldo:1500
    },
    {
        nombre:"jesus",
        saldo:5000
    }];

uno.addEventListener('click', () =>{
    let nip = document.getElementById('nip').value;
    if (nip == "0"){
        document.getElementById('nip').value="1";
    }
    else{
        let mas = "1"
        let resultado = nip.concat(mas);
        document.getElementById('nip').value=resultado;     
    }
});
dos.addEventListener('click', () =>{
    let nip = document.getElementById('nip').value;
    if (nip == "0"){
        document.getElementById('nip').value="2";
    }
    else{
        let mas = "2"
        let resultado = nip.concat(mas);
        document.getElementById('nip').value=resultado;  
    }
});
tres.addEventListener('click', () =>{
    let nip = document.getElementById('nip').value;
    if (nip == "0"){
        document.getElementById('nip').value="3";
    }
    else{
        let mas = "3"
        let resultado = nip.concat(mas);
        document.getElementById('nip').value=resultado;  
    }
});
cuatro.addEventListener('click', () =>{
    let nip = document.getElementById('nip').value;
    if (nip == "0"){
        document.getElementById('nip').value="4";
    }
    else{
        let mas = "4"
        let resultado = nip.concat(mas);
        document.getElementById('nip').value=resultado;  
    }
});
cinco.addEventListener('click', () =>{
    let nip = document.getElementById('nip').value;
    if (nip == "0"){
        document.getElementById('nip').value="5";
    }
    else{
        let mas = "5"
        let resultado = nip.concat(mas);
        document.getElementById('nip').value=resultado;  
    }
});
seis.addEventListener('click', () =>{
    let nip = document.getElementById('nip').value;
    if (nip == "0"){
        document.getElementById('nip').value="6";
    }
    else{
        let mas = "6"
        let resultado = nip.concat(mas);
        document.getElementById('nip').value=resultado;  
    }
});
siete.addEventListener('click', () =>{
    let nip = document.getElementById('nip').value;
    if (nip == "0"){
        document.getElementById('nip').value="7";
    }
    else{
        let mas = "7"
        let resultado = nip.concat(mas);
        document.getElementById('nip').value=resultado;  
    }
});
ocho.addEventListener('click', () =>{
    let nip = document.getElementById('nip').value;
    if (nip == "0"){
        document.getElementById('nip').value="8";
    }
    else{
        let mas = "8"
        let resultado = nip.concat(mas);
        document.getElementById('nip').value=resultado;  
    }
});
nueve.addEventListener('click', () =>{
    let nip = document.getElementById('nip').value;
    if (nip == "0"){
        document.getElementById('nip').value="9";
    }
    else{
        let mas = "9"
        let resultado = nip.concat(mas);
        document.getElementById('nip').value=resultado;  
    }
});

aceptar.addEventListener('click', ()=>{
    let resultado = document.getElementById('nip').value;
    let usuario = document.getElementById('usuario').value;

    if (usuario == "raul" && resultado == "1234"){
        boton1.classList.remove('btn_izquierdo');
        boton2.classList.remove('btn_derecho');
        boton1.classList.add('show_boton1');
        boton2.classList.add('show_boton2');
        info.classList.remove('info');
        info.classList.add('info_hidden');
        display_datos.classList.remove('display_datos');
        display_datos.classList.add('show_display');
        txt_titulo.innerHTML = `Bienvenido ${usuario}`;
        agregar.classList.add('show_agregar');
        
    }
    if (usuario == "francisco" && resultado == "5555"){
        boton1.classList.remove('btn_izquierdo');
        boton2.classList.remove('btn_derecho');
        boton1.classList.add('show_boton1');
        boton2.classList.add('show_boton2');
        info.classList.remove('info');
        info.classList.add('info_hidden');
        display_datos.classList.remove('display_datos');
        display_datos.classList.add('show_display');
        txt_titulo.innerHTML = `Bienvenido ${usuario}`;
        agregar.classList.add('show_agregar');
        
    }

    if (usuario == "jesus" && resultado == "9999"){
        boton1.classList.remove('btn_izquierdo');
        boton2.classList.remove('btn_derecho');
        boton1.classList.add('show_boton1');
        boton2.classList.add('show_boton2');
        info.classList.remove('info');
        info.classList.add('info_hidden');
        display_datos.classList.remove('display_datos');
        display_datos.classList.add('show_display');
        txt_titulo.innerHTML = `Bienvenido ${usuario}`;
        agregar.classList.add('show_agregar');
        
    }
});

btn_saldo.addEventListener('click',()=>{
    
    let usuario = document.getElementById('usuario').value;
    console.log(personas[0].nombre == usuario);
    if (personas[0].nombre == usuario){
        saldo.innerHTML = `Saldo ${personas[0].saldo}`


    }else if(personas[1].nombre == usuario){
        saldo.innerHTML = `Saldo ${personas[1].saldo}`

    }else if(personas[2].nombre == usuario){
        saldo.innerHTML = `Saldo ${personas[2].saldo}`

    }else{
        saldo.innerHTML = "No hay un usuario con saldo"
    }

   });

   btn_monto.addEventListener('click',()=>{
    let usuario = document.getElementById('usuario').value;
    if (agregar.classList.contains('show_agregar')){
        if (personas[0].nombre == usuario){
            suma= parseInt(personas[0].saldo) + parseInt(agregar.value)
            personas[0].saldo = suma;
            saldo.innerHTML = `Saldo ${suma}`
            agregar.classList.remove('show_agregar');
    
        }else if(personas[1].nombre == usuario){
            suma= parseInt(personas[1].saldo) + parseInt(agregar.value)
            personas[1].saldo = suma;
            saldo.innerHTML = `Saldo ${suma}`
            agregar.classList.remove('show_agregar');
    
        }else if(personas[2].nombre == usuario){
            suma= parseInt(personas[2].saldo) + parseInt(agregar.value)
            personas[2].saldo = suma;
            saldo.innerHTML = `Saldo ${suma}`
            agregar.classList.remove('show_agregar');
    
        }else{
            saldo.innerHTML = "No hay un usuario con saldo"
        }
    
    }else{
        agregar.classList.add('show_agregar');

    }

   });
   
   btn_retiro.addEventListener('click', ()=>{
    let usuario = document.getElementById('usuario').value;
    let suma =0;
    const valid =  billete.style.display = 'none'
    if (agregar.classList.contains('show_agregar') && valid && !led.classList.contains('animated')){
        if (personas[0].nombre == usuario){
            resta= parseInt(personas[0].saldo) - parseInt(agregar.value)
            suma = personas[0].saldo;
            saldo.innerHTML = `Saldo ${resta}`
            agregar.classList.remove('show_agregar');
            led.classList.add('animated');
            billete.style.display = 'flex';

    
        }else if(personas[1].nombre == usuario){
            resta= parseInt(personas[1].saldo) - parseInt(agregar.value)
            personas[1].saldo = suma;
            saldo.innerHTML = `Saldo ${resta}`
            agregar.classList.remove('show_agregar');
            led.classList.add('animated');
            billete.style.display = 'flex';
    
        }else if(personas[2].nombre == usuario){
            resta= parseInt(personas[2].saldo) - parseInt(agregar.value)
            personas[2].saldo = suma;
            saldo.innerHTML = `Saldo ${resta}`
            agregar.classList.remove('show_agregar');
            led.classList.add('animated');
            billete.style.display = 'flex';
    
        }else{
            saldo.innerHTML = "No hay un usuario con saldo"
        }

    }else{
        agregar.value=0;
        agregar.classList.add('show_agregar');
        led.classList.remove('animated');

    }
    
   });