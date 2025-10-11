export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded shadow p-6">
          <h3 className="text-xl font-semibold mb-3">Kontakt</h3>
          <p className="mb-2">Telefon: <a className="font-medium" href="tel:+48123456789">+48 123 456 789</a></p>
          <p className="mb-2">Email: <a className="font-medium" href="mailto:kontakt@twojadomena.pl">kontakt@twojadomena.pl</a></p>
          <p className="mb-2">Adres: ul. …, 00-000 Miasto</p>
        </div>
        <div className="bg-white rounded shadow grid place-items-center text-slate-400 h-64">
          Mapa (dodamy później)
        </div>
      </div>
    </section>
  );
}
