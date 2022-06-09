let tablaProvincias= document.querySelector("#tblProvincias");
const urlProvincia= "http://localhost/two-gestion/public/json/provincias.json";
const prueba= new XMLHttpRequest();
prueba.open("GET", urlProvincia);
prueba.responseType= "json";
prueba.send();
console.info(tablaProvincias.innerHTML);
prueba.onload= function(){
    const respuesta= prueba.response;
    const provincias= respuesta["provincias"];
    let bodyTabla= "<tbody>";
    for(let propiedad in provincias){
        let id= provincias[propiedad].iso_id;
        let nCompleto= provincias[propiedad].nombre_completo;
        let nombre= provincias[propiedad].nombre;
        bodyTabla+= `
                    <tr>
                        <td>${id}</td>
                        <td>${nCompleto}</td>
                        <td>${nombre}</td>
                    </tr>`
    }
    bodyTabla+=`
                </tbody>`;
    tablaProvincias.innerHTML+= bodyTabla;
}