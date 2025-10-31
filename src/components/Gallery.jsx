export default function Gallery() {
  const imgs = [
    "/images/DSC_6843_cleanup.jpg",
    "/images/DSC_6848_cleanup.jpg",
    "/images/DSC_6853_cleanup.jpg",
    "/images/DSC_6861_cleanup.jpg",
    "/images/DSC_6866_cleanup.jpg",
    "/images/DSC_6879_cleanup.jpg",
    "/images/DSC_6883_cleanup.jpg",
    "/images/DSC_6892_cleanup.jpg",
    "/images/DSC_6896_cleanup.jpg",
    "/images/DSC_6805_cleanup.jpg",
    "/images/DSC_6822_cleanup.jpg",
    "/images/DSC_6824_cleanup.jpg",
    "/images/DSC_6825_cleanup.jpg",
  ];
  return (
    <section className="bg-white">
      <div className="container section">
        <h2 className="text-2xl font-semibold mb-6">Galeria</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {imgs.map((src, i) => (
            <img key={i} src={src} alt={`Foto ${i+1}`} className="w-full h-60 object-cover rounded-lg border" />
          ))}
        </div>
      </div>
    </section>
  );
}
