export default function ReservationCard(reservation) {
  const {

    // Identificador de la reserva para acciones como editar o eliminar
    id,

    workspace,
    date,
    startHour,
    endHour,
    reason,
    status,
  } = reservation;

  return `
    <article
      class="bg-white rounded-lg shadow p-4"
    >

      <h3 class="font-bold text-lg mb-2">
        ${workspace}
      </h3>

      <div>

        <p>
          <strong>Fecha:</strong>
          ${date}
        </p>

        <p>
          <strong>Horario:</strong>
          ${startHour}
          -
          ${endHour}
        </p>

        <p>
          <strong>Motivo:</strong>
          ${reason}
        </p>

        <p class="mb-3">
          <strong>Estado:</strong>
          ${status}
        </p>

        <div class="flex gap-2">

          <button

            // Guarda el id de la reserva seleccionada
            data-id="${id}"

            // Clase utilizada para identificar el botón de edición
            class="editReservation bg-yellow-500 text-white px-3 py-1 rounded"
          >
            Editar
          </button>

          <button

            // Guarda el id de la reserva seleccionada
            data-id="${id}"

            // Clase utilizada para identificar el botón de eliminación
            class="deleteReservation bg-red-600 text-white px-3 py-1 rounded"
          >
            Eliminar
          </button>

        </div>

      </div>

    </article>
  `;
}