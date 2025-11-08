import MapInline from "./MapInline.jsx";

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50">
      <div className="container section grid md:grid-cols-2 gap-8">
        {/* lewa kolumna – kontakt + formularz */}
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-3">Kontakt</h3>
          <p className="mb-2">
            Telefon: <a className="font-medium" href="tel:+48690104850">+48 690 104 850</a>
          </p>
          <p className="mb-2">
            Email: <a className="font-medium" href="mailto:michalbuczynski@op.pl">michalbuczynski@op.pl</a>
          </p>

<form
  action="https://formspree.io/f/mpwkarya"  // ← TU WSTAW SWÓJ ENDPOINT
  method="POST"
  className="grid gap-3"
>
  {/* Temat maila na Twojej skrzynce */}
  <input type="hidden" name="_subject" value="Zwoleńska 97 — nowa wiadomość z formularza" />
  {/* Po wysłaniu pokażemy prostą stronę „dziękuję” Formspree */}
  <input type="hidden" name="_next" value="https://formspree.io/thanks" />
  {/* Honeypot anty-spam */}
  <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />

  <input name="name" required placeholder="Imię i nazwisko" className="border p-3 rounded" />
  <input type="email" name="email" required placeholder="Email" className="border p-3 rounded" />
  <textarea name="message" required placeholder="Wiadomość" className="border p-3 rounded h-28" />
  <button className="btn-primary w-fit">Wyślij</button>
</form>


        </div>

        {/* prawa kolumna – MAPA */}
        <MapInline />
      </div>
    </section>
  );
}
