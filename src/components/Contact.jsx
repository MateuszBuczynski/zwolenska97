export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50">
      <div className="container section grid md:grid-cols-2 gap-8">
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-3">Kontakt</h3>
          <p className="mb-2">Telefon: <a className="font-medium" href="tel:+48123456789">+48 123 456 789</a></p>
          <p className="mb-2">Email: <a className="font-medium" href="mailto:kontakt@twojadomena.pl">kontakt@twojadomena.pl</a></p>
          <p className="mb-4">Adres: ul. …, 00-000 Miasto</p>

          <form action="https://formspree.io/f/TWOJ_ID" method="POST" className="grid gap-3">
            <input name="name" required placeholder="Imię i nazwisko" className="border p-3 rounded" />
            <input type="email" name="email" required placeholder="Email" className="border p-3 rounded" />
            <textarea name="message" required placeholder="Wiadomość" className="border p-3 rounded h-28" />
            <button className="btn-primary w-fit">Wyślij</button>
          </form>
          <p className="text-xs text-slate-500 mt-2">*Zastąp placeholdery realnymi danymi obiektów.</p>
        </div>

        <div className="card overflow-hidden">
          {/* Wstaw tu embed z Google Maps (Udostępnij → Umieszczanie mapy → kopiuj HTML) */}
          <div className="grid place-items-center h-[350px] text-slate-400">
            Mapa (dodamy później)
          </div>
        </div>
      </div>
    </section>
  );
}
