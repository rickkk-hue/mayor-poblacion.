let pais1;
let pais2;

let puntaje = 0;


let respondio = false;

async function cargarPaises(){

    try{

        const respuesta = await fetch(
            "https://raw.githubusercontent.com/VC-LP/data-countries/main/paises.json"
        );

        const rta = await respuesta.json();

        const datos = rta.data.objects;

        const random1 =
            Math.floor(Math.random() * datos.length);

        let random2 =
            Math.floor(Math.random() * datos.length);

        while(random1 === random2){

            random2 =
                Math.floor(Math.random() * datos.length);
        }

        pais1 = datos[random1];
        pais2 = datos[random2];

  

        document.getElementById("nombre1").innerText =
            pais1.names.common;

        document.getElementById("nombre2").innerText =
            pais2.names.common;



        document.getElementById("img1").src =
            pais1.flag.url_png;

        document.getElementById("img2").src =
            pais2.flag.url_png;



        document.getElementById("resultado").innerText =
            "";



        document.getElementById("poblacion1").innerText =
            "";

        document.getElementById("poblacion2").innerText =
            "";

        respondio = false;
    }

    catch(error){

        console.log(error);

        document.getElementById("resultado").innerText =
            "Error al cargar datos";
    }
}

function elegir(opcion){


    if(respondio){

        return;
    }

    respondio = true;

    let acerto = false;

    if(opcion === 1){

        acerto =
            pais1.population >
            pais2.population;
    }
    else{

        acerto =
            pais2.population >
            pais1.population;
    }

    if(acerto){

        puntaje++;

        document.getElementById("resultado").innerText =
            " Correcto";
    }
    else{

        document.getElementById("resultado").innerText =
            " Incorrecto";
    }



    document.getElementById("poblacion1").innerText =
        `👥 ${pais1.population.toLocaleString()} habitantes`;

    document.getElementById("poblacion2").innerText =
        `👥 ${pais2.population.toLocaleString()} habitantes`;



    document.getElementById("puntaje").innerText =
        puntaje;
}



cargarPaises();