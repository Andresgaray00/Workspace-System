import { createReservation } from "@/services/reservation.service";
import { getSession } from "@/utils";
import { navigateTo } from "@/router/router";

export const reservationController = () => {
  const form = document.querySelector("#reservationForm");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const user = getSession();

    const reservation = {
      userId: user.id,
      workspace: document.querySelector("#workspace").value,
      date: document.querySelector("#date").value,
      startHour: document.querySelector("#startHour").value,
      endHour: document.querySelector("#endHour").value,
      reason: document.querySelector("#reason").value,
      status: "pending",
    };

    try {
      await createReservation(reservation);

      alert("Reserva creada correctamente");

      navigateTo("/home");
    } catch (error) {
      console.error(error);

      alert("Error al crear la reserva");
    }
  });
};