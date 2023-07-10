<template>
  <div>
    <h2>Actividades</h2>
    <!-- Formulario para agregar una actividad -->
    <h3>Agregar Actividad</h3>
    <form @submit.prevent="agregarActividad">
      <!-- Agrega los campos para los atributos de la actividad -->
      <ul>
        <li>
          <label for="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            v-model="nuevaActividad.nombre"
            required
          />
        </li>
        <li>
          <label for="tipo">Tipo:</label>
          <input type="text" id="tipo" v-model="nuevaActividad.tipo" required />
        </li>
        <li>
          <label for="materiales">Materiales:</label>
          <input
            type="text"
            id="materiales"
            v-model="nuevaActividad.materiales"
            required
          />
        </li>
        <li>
          <label for="descripcion">Descripción:</label>
          <input
            type="text"
            id="descripcion"
            v-model="nuevaActividad.descripcion"
            required
          />
        </li>
        <li>
          <label for="dinamica">Dinámica:</label>
          <input
            type="text"
            id="dinamica"
            v-model="nuevaActividad.dinamica"
            required
          />
        </li>
        <li>
          <label for="pacientes">Límite pacientes:</label>
          <input
            type="number"
            id="pacientes"
            v-model="nuevaActividad.pacientes"
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
          <label for="tiempo">Tiempo:</label>
          <input
            type="text"
            id="tiempo"
            v-model="nuevaActividad.tiempo"
            required
          />
        </li>
      </ul>
      <button type="submit">Agregar</button>
    </form>

    <!-- Lista de actividades -->
    <h3>Actividades</h3>
    <ul>
      <li v-for="(actividad, index) in actividades" :key="actividad.id">
        {{ actividad.descripcion }}
        <!-- Muestra los demás atributos de la actividad -->
        <button @click="editarActividad(index)">Editar</button>
        <button @click="eliminarActividad(index)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      actividades: [], // Array para almacenar las actividades
      nuevaActividad: {
        // Objeto para almacenar los datos de la nueva actividad
        actividadId: "",
        nombre: "",
        tipo: "",
        materiales: "",
        descripcion: "",
        dinamica: "",
        pacientes: "",
        valoracion: "",
        tiempo: "",
        // Agrega los demás atributos de la actividad
      },
    };
  },
  methods: {
    agregarActividad() {
      const actividad = { ...this.nuevaActividad, id: Date.now() }; // Asigna un ID único a la actividad
      this.actividades.push(actividad); // Agrega la actividad al array de actividades
      this.nuevaActividad = {
        actividadId: "" /* Restablece los valores del formulario */,
      };
    },
    editarActividad(index) {
      // Lógica para editar una actividad según su índice en el array de actividades
      // Puedes abrir un modal o redirigir a una página de edición
    },
    eliminarActividad(index) {
      this.actividades.splice(index, 1); // Elimina la actividad según su índice en el array de actividades
    },
  },
};
</script>
