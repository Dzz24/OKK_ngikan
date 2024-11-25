import Newnavbar from "@/components/Newnavbar";
import Footer from "@/components/Footer";
import MakananCard from "@/components/ui/MakananCard";
import gambar from "../../assets/Images/Rectangle 180.png";
import janari from "../../assets/Images/WhatsApp Image 2024-11-15 at 11.13.13.jpeg";

function Janari() {
  return (
    <>
      <Newnavbar />
      <div>
        {/* Header Section */}
        <div className="bg-[#F5F0E1] p-8 sm:p-20 lg:p-48 flex flex-col lg:flex-row items-center lg:justify-evenly gap-8 lg:gap-0">
          <div className="text-center lg:text-left">
            <p className="text-black text-[32px] sm:text-[48px] font-semibold font-['Outfit']">Janari</p>
            <p className="text-black text-[16px] sm:text-[20px] font-normal font-['Outfit'] pt-4 sm:pt-6 pb-12 lg:pb-48">
              Lorem Ipsum Bla bla Lorem Ipsum Bla bla Lorem Ipsum Bla bla <br /> Bla bla Lorem Ipsum Bla bla
            </p>
          </div>
          <div>
            {/* Foto Warung */}
            <img src={janari} className="w-full sm:w-72 lg:w-96" alt="Janari" />
          </div>
        </div>

        {/* Makanan Section */}
        <div className="bg-[#F5F0E1] p-8 sm:p-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
          <MakananCard h1="Nasi Goreng" p="15000" />
          <MakananCard h1="Nasi Goreng" p="15000" />
          <MakananCard h1="Nasi Goreng" p="15000" />
          <MakananCard h1="Nasi Goreng" p="15000" />
          <MakananCard h1="Nasi Goreng" p="15000" />
        </div>

        {/* Detail Section */}
        <div className="bg-[#E3EEDE] p-8 sm:p-20 lg:p-48 flex flex-col-reverse lg:flex-row items-center lg:justify-between gap-8 lg:gap-20">
          <div className="text-center lg:text-left">
            <p className="text-black text-[32px] sm:text-[48px] font-semibold font-['Outfit']">Janari</p>
            <p className="text-black text-[16px] sm:text-[20px] font-normal font-['Outfit'] pt-4 sm:pt-6 mb-6 lg:mb-12">
              Takoyakinya memiliki tekstur yang lembut dengan isian gurita yang terasa segar. Bumbunya pas, memberikan rasa
              gurih yang lezat. Saladnya juga segar dengan dressing yang tidak terlalu kuat, sehingga tidak menutupi rasa
              sayurannya. Cocok untuk kamu yang ingin makanan ringan dengan cita rasa yang unik.
              <br />
              Tempatnya bersih dan memiliki suasana yang nyaman, dengan dekorasi minimalis yang membuatnya terasa modern.
              Tersedia beberapa pilihan tempat duduk, baik untuk makan sendiri maupun bersama teman. Pelayanan cepat dan
              ramah, sehingga pengalaman makan jadi lebih menyenangkan.
            </p>
            <a
              href=""
              className="text-white text-base font-semibold font-['Noto Sans'] leading-loose bg-300 px-6 py-4 rounded-lg inline-block"
            >
              Service Detail
            </a>
          </div>
          <img src={gambar} className="w-full sm:w-72 lg:w-96" alt="Detail Janari" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Janari;
