<template>
  <div>
    <!-- Lista de actividades -->
    <div id="lista-actividades">
      <h2>Lista de Actividades</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Descripción</th>
            <th>Materiales</th>
            <th>Dinámica</th>
            <th>Límite pacientes</th>
            <th>Valoración</th>
            <th>Tiempo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(actividad, index) in actividades" :key="index">
            <td>{{ index }}</td>
            <td>{{ actividad.nombre }}</td>
            <td>{{ actividad.tipo }}</td>
            <td>{{ actividad.descripcion }}</td>
            <td>{{ actividad.materiales }}</td>
            <td>{{ actividad.dinamica }}</td>
            <td>{{ actividad.pacientes }}</td>
            <td>{{ actividad.valoracion }}</td>
            <td>{{ actividad.tiempo }}</td>
            <td>
              <button @click="editarActividad(index)">Editar</button>
              <button @click="eliminarActividad(index)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div>
      <button @click="mostrarFormulario = true">Agregar Actividad</button>
      <div id="form-agregar" v-if="mostrarFormulario">
        <h3>Nueva actividad</h3>
        <!-- Formulario para agregar una actividad  -->
        <form @submit.prevent="agregarActividad">
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
              <input
                type="text"
                id="tipo"
                v-model="nuevaActividad.tipo"
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
              <label for="materiales">Materiales:</label>
              <input
                type="text"
                id="materiales"
                v-model="nuevaActividad.materiales"
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
                v-model="nuevaActividad.valoracion"
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
      </div>
    </div>

    <!-- Formulario de edición de actividad -->
    <div id="form-editar">
      <div v-if="actividadEditada">
        <h3>Editar Actividad</h3>
        <form @submit.prevent="guardarActividadEditada">
          <ul>
            <li>
              <label for="nombreEditado">Nombre:</label>
              <input
                type="text"
                id="nombreEditado"
                v-model="actividadEditada.nombre"
                required
              />
            </li>
            <li>
              <label for="tipoEditado">Tipo:</label>
              <input
                type="text"
                id="tipoEditado"
                v-model="actividadEditada.tipo"
                required
              />
            </li>
            <li>
              <label for="descripcionEditado">Descripción:</label>
              <input
                type="text"
                id="descripcionEditado"
                v-model="actividadEditada.descripcion"
                required
              />
            </li>
            <li>
              <label for="materialesEditado">Materiales:</label>
              <input
                type="text"
                id="materialesEditado"
                v-model="actividadEditada.materiales"
                required
              />
            </li>
            <li>
              <label for="dinamicaEditado">Dinámica:</label>
              <input
                type="text"
                id="dinamicaEditado"
                v-model="actividadEditada.dinamica"
                required
              />
            </li>
            <li>
              <label for="pacientesEditado">Límite pacientes:</label>
              <input
                type="number"
                id="pacientesEditado"
                v-model="actividadEditada.pacientes"
                required
              />
            </li>
            <li>
              <label for="valoracionEditado">Valoración:</label>
              <input
                type="range"
                id="valoracionEditado"
                min="1"
                max="5"
                v-model="actividadEditada.valoracion"
                required
              />
            </li>
            <li>
              <label for="tiempoEditado">Tiempo:</label>
              <input
                type="text"
                id="tiempoEditado"
                v-model="actividadEditada.tiempo"
                required
              />
            </li>
          </ul>
          <button type="submit">Guardar</button>
          <button @click="cancelarEdicion">Cancelar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      actividades: [], // Array para almacenar las actividades
      mostrarFormulario: false,
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
      },
      actividadEditada: null, // Variable para almacenar la actividad actualmente en edición
    };
  },
  methods: {
    agregarActividad() {
      const actividad = { ...this.nuevaActividad }; // Crea una copia de los datos de la nueva actividad
      this.actividades.push(actividad); // Agrega la actividad al array de actividades
      this.mostrarFormulario = false;
      this.nuevaActividad = {
        actividadId: "",
        tipo: "",
        materiales: "",
        descripcion: "",
        dinamica: "",
        pacientes: "",
        valoracion: "",
        tiempo: "" /* Restablece los valores del formulario */,
      };
    },
    editarActividad(index) {
      // Obtiene la actividad según el índice (ID único)
      this.actividadEditada = { ...this.actividades[index] };
    },
    guardarActividadEditada() {
      // Guarda los cambios realizados en la actividad editada
      const index = this.actividades.findIndex(
        (actividad) => actividad.id === this.actividadEditada.id
      );
      if (index !== -1) {
        this.actividades.splice(index, 1, this.actividadEditada);
        this.actividadEditada = null; // Restablece la variable de edición
      }
    },
    cancelarEdicion() {
      // Cancela la edición y restablece la variable de edición
      this.actividadEditada = null;
    },
    eliminarActividad(index) {
      this.actividades.splice(index, 1); // Elimina la actividad según su índice en el array de actividades
    },
  },
};
</script>
