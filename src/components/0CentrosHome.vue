<template>
  <div>
    <h2>Centros</h2>

    <!-- Formulario para agregar un centro -->
    <h3>Agregar Centro</h3>
    <form @submit.prevent="agregarCentro">
      <ul>
        <li>
          <label for="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            v-model="nuevoCentro.nombre"
            required
          />
        </li>
        <li>
          <label for="tipo">Tipo:</label>
          <input type="text" id="tipo" v-model="nuevoCentro.tipo" required />
        </li>
        <li>
          <label for="ubicacion">Ubicación:</label>
          <input
            type="text"
            id="ubicacion"
            v-model="nuevoCentro.ubicacion"
            required
          />
        </li>
        <li>
          <label for="valoracion">Valoración:</label>
          <input
            type="range"
            id="valoracion"
            min="1"
            max="5"
            v-model="nuevoCentro.valoracion"
            required
          />
        </li>
        <li>
          <label for="pacientes">Número de pacientes:</label>
          <input
            type="text"
            id="pacientes"
            v-model="nuevoCentro.pacientes"
            required
          />
        </li>
        <li>
          <label for="honorarios">Honorarios:</label>
          <input
            type="number"
            id="honorarios"
            v-model="nuevoCentro.honorarios"
            required
          />
        </li>
        <li>
          <label for="observaciones">Observaciones:</label>
          <input
            type="text"
            id="observaciones"
            v-model="nuevoCentro.observaciones"
            required
          />
        </li>
      </ul>
      <button type="submit">Agregar</button>
    </form>

    <!-- Lista de centros -->
    <h3>Centros</h3>
    <ul>
      <li v-for="(centro, index) in centros" :key="centro.id">
        {{ centro.nombre }}
        <!-- Muestra los demás atributos del centro -->
        <button @click="editarCentro(index)">Editar</button>
        <button @click="eliminarCentro(index)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      centros: [], // Array para almacenar los centros
      nuevoCentro: {
        // Objeto para almacenar los datos del nuevo centro
        centroId: "",
        nombre: "",
        tipo: "",
        ubicacion: "",
        valoracion: "",
        pacientes: "",
        honorarios: "",
        observaciones: "",
        // Agrega los demás atributos del centro
      },
    };
  },
  methods: {
    // agregarNuevoCentro() {
    //     this.$http
    //         .post('/api/centros', JSON.stringify({
    agregarCentro() {
      const centro = { ...this.nuevoCentro, id: Date.now() }; // Asigna un ID único al centro
      this.centros.push(centro); // Agrega el centro al array de centros
      this.nuevoCentro = {
        ubicacion: "" /* Restablece los valores del formulario */,
      };
    },
    // editarCentro(index) {
    //   // Lógica para editar un centro según su índice en el array de centros
    //   // Puedes abrir un modal o redirigir a una página de edición
    // },
    // eliminarCentro(index) {
    //   this.centros.splice(index, 1); // Elimina el centro según su índice en el array de centros
    // },
  },
};
</script>
