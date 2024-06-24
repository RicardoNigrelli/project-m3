export default function Appointment(appointment) {
  return (
    <div>
      <h2>{appointment.date}</h2>
      <p>{appointment.time}</p>
      <p>{appointment.description}</p>
      <button>{appointment.status}</button>
    </div>
  );
}
