import { http } from "@/api/http";

// Obtener todas las reservas
export const getReservations = () =>
  http.get("/reservations");

// Crear reserva
export const createReservation = (data) =>
  http.post("/reservations", data);

// Actualizar reserva
export const updateReservation = (
  id,
  data
) =>
  http.patch(
    `/reservations/${id}`,
    data
  );

// Eliminar reserva
export const deleteReservation = (id) =>
  http.delete(
    `/reservations/${id}`
  );