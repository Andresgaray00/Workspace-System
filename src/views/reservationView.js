import Sidebar from "@/components/Sidebar";
import { reservationController } from "@/controllers/reservation.controller";

export default function reservationView() {

  setTimeout(() => {
    reservationController();
  });

  return `
    <div class="flex">

      ${Sidebar()}

      <main class="flex-1 p-6 bg-slate-100 min-h-screen">

        <h1 class="text-2xl font-bold mb-4">
          Nueva Reserva
        </h1>

        <form
          id="reservationForm"
          class="bg-white p-5 rounded-lg shadow"
        >

          <div class="mb-3">

            <label class="block mb-1">
              Espacio de trabajo
            </label>

            <input
              id="workspace"
              type="text"
              placeholder="Sala A"
              class="border p-2 w-full rounded"
              required
            >

          </div>

          <div class="mb-3">

            <label class="block mb-1">
              Fecha
            </label>

            <input
              id="date"
              type="date"
              class="border p-2 w-full rounded"
              required
            >

          </div>

          <div class="mb-3">

            <label class="block mb-1">
              Hora inicio
            </label>

            <input
              id="startHour"
              type="time"
              class="border p-2 w-full rounded"
              required
            >

          </div>

          <div class="mb-3">

            <label class="block mb-1">
              Hora fin
            </label>

            <input
              id="endHour"
              type="time"
              class="border p-2 w-full rounded"
              required
            >

          </div>

          <div class="mb-4">

            <label class="block mb-1">
              Motivo
            </label>

            <textarea
              id="reason"
              class="border p-2 w-full rounded"
              required
            ></textarea>

          </div>

          <button
            type="submit"
            class="bg-green-600 text-white px-4 py-2 rounded"
          >
            Guardar Reserva
          </button>

        </form>

      </main>

    </div>
  `;
}