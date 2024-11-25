export default function MakananCard({
  p,
  h1,
  btn = "Detail", // Default value jika `btn` tidak diberikan
  imgSrc,
}) {
  return (
    <div data-aos="fade-right" className="card card-compact bg-base-100 w-full sm:w-[12rem] md:w-[16rem] lg:w-[20rem] shadow-xl mx-auto">
      <figure className="h-48 sm:h-56 overflow-hidden">
        <img
          src={imgSrc}
          alt={h1}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg sm:text-xl">{h1}</h2>
        <p className="text-sm sm:text-base text-gray-700">{p}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-sm sm:btn-md">{btn}</button>
        </div>
      </div>
    </div>
  );
}
