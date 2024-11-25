export default function ProjectCard({ 
  p,
  h1,
  btn,
  imgSrc,
  srcPage,
}) {
  return (
    <div data-aos="fade-up" className="card bg-white w-64 h-80 shadow-md rounded-lg overflow-hidden">
      {/* Bagian Gambar */}
      <figure className="w-full h-40">
        <img
          src={imgSrc}
          alt={h1}
          className="w-full h-full object-cover"
        />
      </figure>
      {/* Konten Kartu */}
      <div className="card-body p-4 flex flex-col justify-between">
        <h2 className="card-title text-lg font-semibold text-[#1E3D59]">{h1}</h2>
        <p className="text-sm text-gray-600 mt-2">{p}</p>
        <div className="card-actions mt-4">
          <a href={srcPage}>
          <button className="btn btn-primary w-full text-sm py-2 bg-[#1E3D59] text-white rounded-md hover:bg-[#123947] transition">
            {btn}
          </button>
          </a>
        </div>
      </div>
    </div>
  );
}
