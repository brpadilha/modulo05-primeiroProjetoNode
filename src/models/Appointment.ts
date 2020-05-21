import { uuid } from 'uuidv4';

class Appointment {
  id: string; // define o id do tipo string

  provider: string;

  date: Date;

  constructor(provider: string, date: Date) {
    this.id = uuid(); // inicia o constructor
    this.provider = provider;
    this.date = date;
  }
}

export default Appointment;
