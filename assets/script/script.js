// Elementos del DOM
let htmlalq = document.querySelector(".alquileres");
let htmlvent = document.querySelector(".ventas");
let htmlv = document.querySelector(".pventa");
let htmla = document.querySelector(".palquiler");
let i = 0;
// PROPIEDADES EN ALQUILER

const propiedades_alquiler = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de 2 habitaciones estáubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: 2000,
    smoke: false,
    pets: true,
  },

  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 2500,
    smoke: true,
    pets: false,
  },

  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: 2200,
    smoke: false,
    pets: false,
  },

  {
    nombre: "Departamento acojedor centrico",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion: "Espacioso depto en barrio centrico muy seguro",
    ubicacion: "La pintana",
    habitaciones: 3,
    baños: 2,
    costo: 1500,
    smoke: false,
    pets: true,
  },

  {
    nombre: "Departamento acojedor centrico",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion: "Espacioso depto en barrio centrico muy seguro",
    ubicacion: "La pintana",
    habitaciones: 3,
    baños: 2,
    costo: 1500,
    smoke: false,
    pets: true,
  },

  {
    nombre: "Departamento acojedor centrico",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion: "Espacioso depto en barrio centrico muy seguro",
    ubicacion: "La pintana",
    habitaciones: 3,
    baños: 2,
    costo: 1500,
    smoke: false,
    pets: true,
  },

  {
    nombre: "Departamento acojedor centrico",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion: "Espacioso depto en barrio centrico muy seguro",
    ubicacion: "La pintana",
    habitaciones: 3,
    baños: 2,
    costo: 1500,
    smoke: false,
    pets: true,
  },
];

function renderalquiler() {
  for (let alq of propiedades_alquiler) {
    // Todo permitido
    if (alq.smoke == true && alq.pets == true) {
      const okpets = `
    <div class="col-md-4 mb-4">
      <div class="card">
      <img
      src="${alq.src}"
      class="card-img-top"
      alt="Imagen del departamento"
    /> 
    <div class="card-body">
    <h5 class="card-title">
      ${alq.nombre}
    </h5>
    <p class="card-text">
    ${alq.descripcion}
    </p>
    <p>
        <i class="fas fa-map-marker-alt"></i> 
        ${alq.ubicacion}
     </p> 
     <p>
         <i class="fas fa-bed"></i> 
         ${alq.habitaciones} Habitaciones |
         <i class="fas fa-bath"></i> ${alq.baños} Baños
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${alq.costo} </p>
      <p class="text-success">
           <i class="fas fa-smoking"></i>  permitido fumar
      </p>
      <p class="text-success">
      <i class="fas fa-paw"></i> Mascotas permitidas
    </p>
      </div>`;
      htmlalq.innerHTML += okpets;
    } else if (alq.smoke == true && alq.pets == false) {
      // Solo fumar
      const nopets = `
      <div class="col-md-4 mb-4">
        <div class="card">
        <img
        src="${alq.src}"
        class="card-img-top"
        alt="Imagen del departamento"
      /> 
      <div class="card-body">
      <h5 class="card-title">
        ${alq.nombre}
      </h5>
      <p class="card-text">
      ${alq.descripcion}
      </p>
      <p>
          <i class="fas fa-map-marker-alt"></i> 
          ${alq.ubicacion}
       </p> 
       <p>
           <i class="fas fa-bed"></i> 
           ${alq.habitaciones} Habitaciones |
           <i class="fas fa-bath"></i> ${alq.baños} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${alq.costo} </p>
        <p class="text-success">
             <i class="fas fa-smoking"></i>  permitido fumar
        </p>
        <p class="text-danger">
        <i class="fas fa-ban"></i> No se permiten mascotas 
      </p>
        </div>`;
      htmlalq.innerHTML += nopets;
    } else if (alq.smoke == false && alq.pets == false) {
      const noall = `
    <div class="col-md-4 mb-4">
      <div class="card">
      <img
      src="${alq.src}"
      class="card-img-top"
      alt="Imagen del departamento"
    /> 
    <div class="card-body">
    <h5 class="card-title">
      ${alq.nombre}
    </h5>
    <p class="card-text">
    ${alq.descripcion}
    </p>
    <p>
        <i class="fas fa-map-marker-alt"></i> 
        ${alq.ubicacion}
     </p> 
     <p>
         <i class="fas fa-bed"></i> 
         ${alq.habitaciones} Habitaciones |
         <i class="fas fa-bath"></i> ${alq.baños} Baños
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${alq.costo} </p>
      <p class="text-danger">
           <i class="fa-smoking-ban"></i>  No se permite fumar
      </p>
      <p class="text-danger">
      <i class="fas fa-ban"></i> No se permiten mascotas
    </p>
      </div>`;
      htmlalq.innerHTML += noall;
    } else if (alq.smoke == false && alq.pets == true) {
      const pets = `
    <div class="col-md-4 mb-4">
      <div class="card">
      <img
      src="${alq.src}"
      class="card-img-top"
      alt="Imagen del departamento"
    /> 
    <div class="card-body">
    <h5 class="card-title">
      ${alq.nombre}
    </h5>
    <p class="card-text">
    ${alq.descripcion}
    </p>
    <p>
        <i class="fas fa-map-marker-alt"></i> 
        ${alq.ubicacion}
     </p> 
     <p>
         <i class="fas fa-bed"></i> 
         ${alq.habitaciones} Habitaciones |
         <i class="fas fa-bath"></i> ${alq.baños} Baños
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${alq.costo} </p>
      <p class="text-danger">
           <i class="fas fa-smoking-ban"></i>  No se permite fumar
      </p>
      <p class="text-success">
      <i class="fas fa-paw"></i> Mascotas permitidas
    </p>
      </div>`;
      htmlalq.innerHTML += pets;
    }
  }
}

// PROPIEDADES EN VENTA

const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    baños: 4,
    costo: 5000,
    smoke: false,
    pets: false,
  },

  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road,Summit Peaks, CA 23456",
    habitaciones: 2,
    baños: 1,
    costo: 1200,
    smoke: true,
    pets: true,
  },

  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 4500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 4500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 4500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 4500,
    smoke: false,
    pets: true,
  },

  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 4500,
    smoke: false,
    pets: true,
  },
];

function renderventa() {
  for (let vent of propiedades_venta) {
    // Todo permitido
    if (vent.smoke == true && vent.pets == true) {
      const okpetsv = `
    <div class="col-md-4 mb-4">
      <div class="card">
      <img
      src="${vent.src}"
      class="card-img-top"
      alt="Imagen del departamento"
    /> 
    <div class="card-body">
    <h5 class="card-title">
      ${vent.nombre}
    </h5>
    <p class="card-text">
    ${vent.descripcion}
    </p>
    <p>
        <i class="fas fa-map-marker-alt"></i> 
        ${vent.ubicacion}
     </p> 
     <p>
         <i class="fas fa-bed"></i> 
         ${vent.habitaciones} Habitaciones |
         <i class="fas fa-bath"></i> ${vent.baños} Baños
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${vent.costo} </p>
      <p class="text-success">
           <i class="fas fa-smoking"></i>  permitido fumar
      </p>
      <p class="text-success">
      <i class="fas fa-paw"></i> Mascotas permitidas
    </p>
      </div>`;
      htmlvent.innerHTML += okpetsv;
    } else if (vent.smoke == true && vent.pets == false) {
      // Solo fumar
      const nopetsv = `
      <div class="col-md-4 mb-4">
        <div class="card">
        <img
        src="${vent.src}"
        class="card-img-top"
        alt="Imagen del departamento"
      /> 
      <div class="card-body">
      <h5 class="card-title">
        ${vent.nombre}
      </h5>
      <p class="card-text">
      ${vent.descripcion}
      </p>
      <p>
          <i class="fas fa-map-marker-alt"></i> 
          ${vent.ubicacion}
       </p> 
       <p>
           <i class="fas fa-bed"></i> 
           ${vent.habitaciones} Habitaciones |
           <i class="fas fa-bath"></i> ${vent.baños} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${vent.costo} </p>
        <p class="text-success">
             <i class="fas fa-smoking"></i>  permitido fumar
        </p>
        <p class="text-danger">
        <i class="fas fa-ban"></i> No se permiten mascotas 
      </p>
        </div>`;
      htmlvent.innerHTML += nopetsv;
    } else if (vent.smoke == false && vent.pets == false) {
      const noallv = `
    <div class="col-md-4 mb-4">
      <div class="card">
      <img
      src="${vent.src}"
      class="card-img-top"
      alt="Imagen del departamento"
    /> 
    <div class="card-body">
    <h5 class="card-title">
      ${vent.nombre}
    </h5>
    <p class="card-text">
    ${vent.descripcion}
    </p>
    <p>
        <i class="fas fa-map-marker-alt"></i> 
        ${vent.ubicacion}
     </p> 
     <p>
         <i class="fas fa-bed"></i> 
         ${vent.habitaciones} Habitaciones |
         <i class="fas fa-bath"></i> ${vent.baños} Baños
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${vent.costo} </p>
      <p class="text-danger">
           <i class="fa-smoking-ban"></i>  No se permite fumar
      </p>
      <p class="text-danger">
      <i class="fas fa-ban"></i> No se permiten mascotas
    </p>
      </div>`;
      htmlvent.innerHTML += noallv;
    } else if (vent.smoke == false && vent.pets == true) {
      const petsv = `
    <div class="col-md-4 mb-4">
      <div class="card">
      <img
      src="${vent.src}"
      class="card-img-top"
      alt="Imagen del departamento"
    /> 
    <div class="card-body">
    <h5 class="card-title">
      ${vent.nombre}
    </h5>
    <p class="card-text">
    ${vent.descripcion}
    </p>
    <p>
        <i class="fas fa-map-marker-alt"></i> 
        ${vent.ubicacion}
     </p> 
     <p>
         <i class="fas fa-bed"></i> 
         ${vent.habitaciones} Habitaciones |
         <i class="fas fa-bath"></i> ${vent.baños} Baños
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${vent.costo} </p>
      <p class="text-danger">
           <i class="fas fa-smoking-ban"></i>  No se permite fumar
      </p>
      <p class="text-success">
      <i class="fas fa-paw"></i> Mascotas permitidas
    </p>
      </div>`;
      htmlvent.innerHTML += petsv;
    }
  }
}

function indexhtml() {
  htmlacontent = "";
  for (let pventa of propiedades_venta) {
    if (i >= 3) {
      break;
    }
    if (pventa.smoke == true && pventa.pets == true) {
      const okpetsve = `
    <div class="col-md-4 mb-4">
      <div class="card">
      <img
      src="${pventa.src}"
      class="card-img-top"
      alt="Imagen del departamento"
    /> 
    <div class="card-body">
    <h5 class="card-title">
      ${pventa.nombre}
    </h5>
    <p class="card-text">
    ${pventa.descripcion}
    </p>
    <p>
        <i class="fas fa-map-marker-alt"></i> 
        ${pventa.ubicacion}
     </p> 
     <p>
         <i class="fas fa-bed"></i> 
         ${pventa.habitaciones} Habitaciones |
         <i class="fas fa-bath"></i> ${pventa.baños} Baños
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${pventa.costo} </p>
      <p class="text-success">
           <i class="fas fa-smoking"></i>  permitido fumar
      </p>
      <p class="text-success">
      <i class="fas fa-paw"></i> Mascotas permitidas
    </p>
      </div>`;
      htmlv.innerHTML += okpetsve;
      i++;
    } else if (pventa.smoke == true && pventa.pets == false) {
      // Solo fumar
      const nopetsve = `
      <div class="col-md-4 mb-4">
        <div class="card">
        <img
        src="${pventa.src}"
        class="card-img-top"
        alt="Imagen del departamento"
      /> 
      <div class="card-body">
      <h5 class="card-title">
        ${pventa.nombre}
      </h5>
      <p class="card-text">
      ${pventa.descripcion}
      </p>
      <p>
          <i class="fas fa-map-marker-alt"></i> 
          ${pventa.ubicacion}
       </p> 
       <p>
           <i class="fas fa-bed"></i> 
           ${pventa.habitaciones} Habitaciones |
           <i class="fas fa-bath"></i> ${pventa.baños} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${pventa.costo} </p>
        <p class="text-success">
             <i class="fas fa-smoking"></i>  permitido fumar
        </p>
        <p class="text-danger">
        <i class="fas fa-ban"></i> No se permiten mascotas 
      </p>
        </div>`;
      htmlv.innerHTML += nopetsve;
      i++;
    } else if (pventa.smoke == false && pventa.pets == false) {
      const noallve = `
    <div class="col-md-4 mb-4">
      <div class="card">
      <img
      src="${pventa.src}"
      class="card-img-top"
      alt="Imagen del departamento"
    /> 
    <div class="card-body">
    <h5 class="card-title">
      ${pventa.nombre}
    </h5>
    <p class="card-text">
    ${pventa.descripcion}
    </p>
    <p>
        <i class="fas fa-map-marker-alt"></i> 
        ${pventa.ubicacion}
     </p> 
     <p>
         <i class="fas fa-bed"></i> 
         ${pventa.habitaciones} Habitaciones |
         <i class="fas fa-bath"></i> ${pventa.baños} Baños
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${pventa.costo} </p>
      <p class="text-danger">
           <i class="fa-smoking-ban"></i>  No se permite fumar
      </p>
      <p class="text-danger">
      <i class="fas fa-ban"></i> No se permiten mascotas
    </p>
      </div>`;
      htmlv.innerHTML += noallve;
      i++;
    } else if (pventa.smoke == false && pventa.pets == true) {
      const petsve = `
    <div class="col-md-4 mb-4">
      <div class="card">
      <img
      src="${pventa.src}"
      class="card-img-top"
      alt="Imagen del departamento"
    /> 
    <div class="card-body">
    <h5 class="card-title">
      ${pventa.nombre}
    </h5>
    <p class="card-text">
    ${pventa.descripcion}
    </p>
    <p>
        <i class="fas fa-map-marker-alt"></i> 
        ${pventa.ubicacion}
     </p> 
     <p>
         <i class="fas fa-bed"></i> 
         ${pventa.habitaciones} Habitaciones |
         <i class="fas fa-bath"></i> ${pventa.baños} Baños
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${pventa.costo} </p>
      <p class="text-danger">
           <i class="fas fa-smoking-ban"></i>  No se permite fumar
      </p>
      <p class="text-success">
      <i class="fas fa-paw"></i> Mascotas permitidas
    </p>
      </div>`;
      htmlv.innerHTML += petsve;
      i++;
    }
  }
  i = 0;
  for (let palq of propiedades_alquiler) {
    if (i >= 3) {
      break;
    }
    if (palq.smoke == true && palq.pets == true) {
      const okpetsa = `
    <div class="col-md-4 mb-4">
      <div class="card">
      <img
      src="${palq.src}"
      class="card-img-top"
      alt="Imagen del departamento"
    /> 
    <div class="card-body">
    <h5 class="card-title">
      ${palq.nombre}
    </h5>
    <p class="card-text">
    ${palq.descripcion}
    </p>
    <p>
        <i class="fas fa-map-marker-alt"></i> 
        ${palq.ubicacion}
     </p> 
     <p>
         <i class="fas fa-bed"></i> 
         ${palq.habitaciones} Habitaciones |
         <i class="fas fa-bath"></i> ${palq.baños} Baños
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${palq.costo} </p>
      <p class="text-success">
           <i class="fas fa-smoking"></i>  permitido fumar
      </p>
      <p class="text-success">
      <i class="fas fa-paw"></i> Mascotas permitidas
    </p>
      </div>`;
      htmla.innerHTML += okpetsa;
      i++;
    } else if (palq.smoke == true && palq.pets == false) {
      // Solo fumar
      const nopetsa = `
      <div class="col-md-4 mb-4">
        <div class="card">
        <img
        src="${palq.src}"
        class="card-img-top"
        alt="Imagen del departamento"
      /> 
      <div class="card-body">
      <h5 class="card-title">
        ${palq.nombre}
      </h5>
      <p class="card-text">
      ${palq.descripcion}
      </p>
      <p>
          <i class="fas fa-map-marker-alt"></i> 
          ${palq.ubicacion}
       </p> 
       <p>
           <i class="fas fa-bed"></i> 
           ${palq.habitaciones} Habitaciones |
           <i class="fas fa-bath"></i> ${palq.baños} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${palq.costo} </p>
        <p class="text-success">
             <i class="fas fa-smoking"></i>  permitido fumar
        </p>
        <p class="text-danger">
        <i class="fas fa-ban"></i> No se permiten mascotas 
      </p>
        </div>`;
      htmla.innerHTML += nopetsa;
      i++;
    } else if (palq.smoke == false && palq.pets == false) {
      const noalla = `
    <div class="col-md-4 mb-4">
      <div class="card">
      <img
      src="${palq.src}"
      class="card-img-top"
      alt="Imagen del departamento"
    /> 
    <div class="card-body">
    <h5 class="card-title">
      ${palq.nombre}
    </h5>
    <p class="card-text">
    ${palq.descripcion}
    </p>
    <p>
        <i class="fas fa-map-marker-alt"></i> 
        ${palq.ubicacion}
     </p> 
     <p>
         <i class="fas fa-bed"></i> 
         ${palq.habitaciones} Habitaciones |
         <i class="fas fa-bath"></i> ${palq.baños} Baños
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${palq.costo} </p>
      <p class="text-danger">
           <i class="fa-smoking-ban"></i>  No se permite fumar
      </p>
      <p class="text-danger">
      <i class="fas fa-ban"></i> No se permiten mascotas
    </p>
      </div>`;
      htmla.innerHTML += noalla;
      i++;
    } else if (palq.smoke == false && palq.pets == true) {
      const petsa = `
    <div class="col-md-4 mb-4">
      <div class="card">
      <img
      src="${palq.src}"
      class="card-img-top"
      alt="Imagen del departamento"
    /> 
    <div class="card-body">
    <h5 class="card-title">
      ${palq.nombre}
    </h5>
    <p class="card-text">
    ${palq.descripcion}
    </p>
    <p>
        <i class="fas fa-map-marker-alt"></i> 
        ${palq.ubicacion}
     </p> 
     <p>
         <i class="fas fa-bed"></i> 
         ${palq.habitaciones} Habitaciones |
         <i class="fas fa-bath"></i> ${palq.baños} Baños
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${palq.costo} </p>
      <p class="text-danger">
           <i class="fas fa-smoking-ban"></i>  No se permite fumar
      </p>
      <p class="text-success">
      <i class="fas fa-paw"></i> Mascotas permitidas
    </p>
      </div>`;
      htmla.innerHTML = petsa;
      i++;
    }
  }
}

//Eventos

if (document.title === "pventas") {
  window.addEventListener("load", renderventa);
} else if (document.title === "palquiler") {
  window.addEventListener("load", renderalquiler);
} else if (document.title === "Corredor de propiedades") {
  window.addEventListener("load", indexhtml);
}
