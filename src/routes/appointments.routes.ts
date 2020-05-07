import { Router } from 'express'; // importando o router

import { uuid } from 'uuidv4'; // importando a lib de ids
import { startOfDay, parseISO, isEqual } from 'date-fns';

const appointmentsRouter = Router();

interface Appointment {
  // fazendo a tipagem de appointment
  id: string;
  provider: string;
  date: Date;
}

// definindo que o appointmentss será um array de appointment
const appointments: Appointment[] = []; // iniciando o array que vai receber os agendamentos depois irá ser mudado para um banco de dados

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body; // recebendo o provider e o date do req.body

  const parsedDate = startOfDay(parseISO(date)); // passando a data para um horário com número absoluto

  const findAppointmentInSameDate = appointments.find(
    appointment =>
      // faz uma varredura pelos appointments
      isEqual(parsedDate, appointment.date), // verifica se já tem horário igual no banco de dados
  );

  if (findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ message: 'This appointment is already booked.' });
  }

  const appointment = {
    id: uuid(),
    provider,
    date: parsedDate,
  };

  appointments.push(appointment);

  return response.json(appointments);
});

export default appointmentsRouter;
