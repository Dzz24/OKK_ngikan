import Newnavbar from "@/components/Newnavbar";
import Footer from "@/components/Footer";
import MakananCard from "@/components/ui/MakananCard";
import fotoReview from "../../assets/Images/Group 112.png"

export default function WarungPageComponent({
  judul,
  subJudul,
  judulReview,
  detailReview,
  karbo,
  protein,
  lemak,
  vitamin,
  serat,
  harga,
  jamBuka,
  imgSrc,
  bgSrc,
  makanan1,
  makanan2,
  makanan3,
  makanan4,
  harga1,
  harga2,
  harga3,
  harga4,
}) {
  return (
    <>
      <Newnavbar />
      <div className="bg-[#faecdf]">
        {/* Header Section */}
        <div className="bg-[#faecdf] flex flex-col lg:flex-row items-center gap-8 lg:gap-20 relative bg-fixed bg-center bg-contain p-12 sm:p-20 lg:p-48 backdrop-blur-sm mb-20 "
        style={{ backgroundImage: `url(${bgSrc})` }}>
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30" />
          <div className="text-center lg:text-left">
            <p data-aos="fade-up" className="text-white text-[32px] sm:text-[48px] font-semibold font-['Outfit']">
              {judul}
            </p>
            <p data-aos="fade-up" className="text-[#ffffff] text-sm sm:text-base font-medium font-['Outfit'] leading-loose pt-4">
              {subJudul}
            </p>
            <p data-aos="fade-up" className="text-[#ffffff] text-sm sm:text-base font-medium font-['Outfit'] leading-loose pt-4">
              Harga : {harga}
            </p>
            <p data-aos="fade-up" className="text-[#ffffff] text-sm sm:text-base font-medium font-['Outfit'] leading-loose pt-4">
              Jam Buka : {jamBuka}
            </p>
          </div>
        </div>

        {/* Makanan Section */}
        <div className="bg-[#faecdf] p-8 sm:p-20 grid md:grid-cols-2 lg:grid-cols-4 gap-4 " >
          <MakananCard p={harga1} h1={makanan1} />
          <MakananCard p={harga2} h1={makanan2} />
          <MakananCard p={harga3} h1={makanan3} />
          <MakananCard p={harga4} h1={makanan4} />
        </div>

        {/* Review Section */}
        <div data-aos="fade-left" className="bg-[#E3EEDE] p-8 sm:p-20 lg:p-48 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-20">
          <div className="text-center lg:text-left">
            <p className="text-black text-[32px] sm:text-[48px] font-semibold font-['Outfit']">
              {judulReview}
            </p>
            <p className="text-[#1E3D59] text-opacity-40 text-sm sm:text-base font-medium font-['Outfit'] leading-loose pt-4 mb-6">
              {detailReview}
            </p>
            <p className="text-[#1E3D59] text-opacity-40 text-sm sm:text-base font-medium font-['Outfit'] leading-loose">
              {karbo}
            </p>
            <p className="text-[#1E3D59] text-opacity-40 text-sm sm:text-base font-medium font-['Outfit'] leading-loose mb-1">
              {protein}
            </p>
            <p className="text-[#1E3D59] text-opacity-40 text-sm sm:text-base font-medium font-['Outfit'] leading-loose mb-1">
              {lemak}
            </p>
            <p className="text-[#1E3D59] text-opacity-40 text-sm sm:text-base font-medium font-['Outfit'] leading-loose mb-1">
              {vitamin}
            </p>
            <p className="text-[#1E3D59] text-opacity-40 text-sm sm:text-base font-medium font-['Outfit'] leading-loose mb-1">
              {serat}
            </p>
            <a
              href=""
              className="inline-block bg-[#72B354] text-white text-sm sm:text-base font-semibold font-['Noto Sans'] leading-loose bg-300 px-6 py-4 rounded-lg mt-8"
            >
              Worth it
            </a>
          </div>
          <div className="w-full sm:w-1/2 lg:w-full">
            <img src={fotoReview} alt="Review Image" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
