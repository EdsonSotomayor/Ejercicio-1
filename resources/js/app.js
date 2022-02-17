const app = {
    urlDatos : "/resources/data/autos.json",

    cargarFichas : function()
    {
        const fichas = document.querySelector("#fichas");
        let html = "";

        fetch(this.urlDatos)
            .then( response => response.json())
            
            .then( autos => {
                for( let auto of autos)
                {
                    html += `
                    <div class="ficha">
                        <img src="/resources/img/${auto.foto}" alt="${auto.foto}">
                        <div class="datos">
                            <h3>${auto.marca}</h3>
                            <span>${auto.modelo}</span>
                            <span>${auto.ano}</span>
                            <br>
                            <small>
                                ${auto.motor.desplazamiento},
                                ${auto.motor.potencia},
                                ${auto.motor.rendimiento},
                            </small>
                        </div>
                    </div>
                        `;
                }
                fichas.innerHTML = html

            } ).catch(error => console.error( error ));

    }
    
}
window.onload = function(){
    app.cargarFichas();
}