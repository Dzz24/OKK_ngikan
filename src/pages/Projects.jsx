import ProjectCard from "@/components/ui/ProjectCard";
import Newnavbar from "../components/Newnavbar";
import Footer from "@/components/Footer";
import gambarTes from "../assets/Images/Tak_berjudul60_20241024223843__1_-removebg-preview.png"
import janariFoto from "../assets/Images/WhatsApp Image 2024-11-15 at 11.13.13 (1).jpeg"
import kulitFoto from "../assets/Images/kulit.jpg"
import nkriFoto from "../assets/Images/nasinkri.jpg"
import pratamaFoto from "../assets/Images/pratama.jpg"
import rpelokFoto from "../assets/Images/rp_elok.jpg"
import Ridhobaharifoto from "../assets/Images/ridhobahari.jpg"
import griyaFoto from "../assets/Images/griya.png"
import fotoBg from "../assets/Images/modern-elegant-living-room-with-comfortable-sofa-chair-generated-by-artificial-intelligence.jpg"
import hipotesaFoto from "../assets/Images/hipotesa.jpg"
import kanjatFoto from "../assets/Images/20241108_150704.jpg"
import kansayFoto from "../assets/Images/Sayang.jpg"
import putrapalFoto from "../assets/Images/paliyang.jpg"
import restuFoto from "../assets/Images/restu.jpg"
import elthizyFoto from "../assets/Images/elthizy.jpg"
import regencyFoto from "../assets/Images/regency.jpg"
import zahrafoto from "../assets/Images/zahra.jpg"
import heniFoto from "../assets/Images/heni.jpg"
import umiFoto from "../assets/Images/nasiUmi.jpg"
import balwilfoto from "../assets/Images/balwil.jpg"
import fhfoto from "../assets/Images/hukum.jpg"
import herifoto from "../assets/Images/cakHeri.jpg"
function Projects() {
    return (
      <>
        <Newnavbar />
        <div className="bg-[#F5F0E1]">
          {/* Header Section */}
          <div className="bg-fixed bg-center bg-cover p-8 sm:p-40 text-center mb-12" style={{ backgroundImage: `url(${fotoBg})` }}>
            
            <p data-aos="fade-up" className="text-[#ffffff] text-3xl sm:text-6xl font-semibold font-['Outfit']">
              Informasi dan Rekomendasi
            </p>
            <p data-aos="fade-up" className="text-[#ffffff] mt-4 sm:mt-10 text-sm sm:text-base font-medium leading-loose">
              Penasaran apa aja sih informasi dan rekomendasi yang bisa bantu kamu lebih paham dan siap ambil keputusan?<br />
              Yuk, temuin berbagai tips dan saran yang udah disesuaikan buat kebutuhan kamu!
            </p>
          </div>
  
          {/* Area Timur */}
          <div className="px-4 sm:px-12">
            <SectionHeader title="Area Timur" description="rekomendasi Tempat makan area hegar dan sekitarnya" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 overflow-x-auto">
              <ProjectCard  h1="Janari" p="Tempat makan area barat worth it" btn="Detail" srcPage="/list-warung/janari" imgSrc={janariFoto} />
              <ProjectCard  h1="Nasi Kulit Hegarmanah" p="Tempat makan area barat worth it" srcPage="/list-warung/nasi-kulit" btn="Detail" imgSrc={kulitFoto} />
              <ProjectCard  h1="Nasi NKRI" p="Tempat makan area barat worth it" btn="Detail" srcPage="/list-warung/nasi-nkri" imgSrc={nkriFoto} />
              <ProjectCard  h1="Rumah Padang Elok" p="Tempat makan area barat worth it" srcPage="/list-warung/rm-padang-elok" btn="Detail" imgSrc={rpelokFoto} />
              <ProjectCard  h1="Warteg Pratama" p="Tempat makan area barat worth it" srcPage="/list-warung/warteg-pratama" btn="Detail" imgSrc={pratamaFoto} />
              <ProjectCard  h1="Warteg Ridhobahari" p="Tempat makan area barat worth it" srcPage="/list-warung/warteg-ridho" btn="Detail" imgSrc={Ridhobaharifoto} />
            </div>
          </div>
  
          {/* Area Tengah */}
          <div className="px-4 sm:px-12 mt-16">
            <SectionHeader title="Area Tengah" description="rekomendasi tempat makan daerah sayang dan sekitarnya" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 overflow-x-auto">
              <ProjectCard  h1="Griya Jatinangor" p="Tempat makan area tengah worth it" srcPage="/list-warung/griya-nangor" btn="Detail" imgSrc={griyaFoto} />
              <ProjectCard  h1="Hipotesa" p="Tempat makan area tengah worth it" srcPage="/list-warung/hipotesa" btn="Detail" imgSrc={hipotesaFoto} />
              <ProjectCard  h1="Kantin Jatinangor" p="Tempat makan area tengah worth it" srcPage="/list-warung/kantin-jatinangor" btn="Detail" imgSrc={kanjatFoto} />
              <ProjectCard  h1="Kantin Sayang" p="Tempat makan area tengah worth it" srcPage="/list-warung/kantin-sayang" btn="Detail" imgSrc={kansayFoto} />
              <ProjectCard  h1="Putra Paliyang" p="Tempat makan area tengah worth it" srcPage="/list-warung/rm-padang-pp" btn="Detail" imgSrc={putrapalFoto} />
              <ProjectCard  h1="Restu Mande" p="Tempat makan area tengah worth it" srcPage="/list-warung/warung-restu-mande" btn="Detail" imgSrc={restuFoto} />
              <ProjectCard  h1="Soto Ayam Cak Hari" p="Tempat makan area tengah worth it" srcPage="/list-warung/soto-ayam-hari" btn="Detail" imgSrc={herifoto} />
            </div>
          </div>
  
          {/* Area Barat */}
          <div className="px-4 sm:px-12 mt-16">
            <SectionHeader title="Area Barat" description="rekomendasi tempat makan daerah caringin dan sekitarny" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 overflow-x-auto">
              <ProjectCard  h1="Kantin Elthizy" p="Tempat makan area barat worth it" btn="Detail" srcPage="/list-warung/kantin-elthizy" imgSrc={elthizyFoto} />
              <ProjectCard  h1="Seblak Regency" p="Tempat makan area barat worth it" btn="Detail" srcPage="/list-warung/seblak-regency" imgSrc={regencyFoto} />
              <ProjectCard  h1="Warung Az Zahra Regency" p="Tempat makan area barat worth it" srcPage="/list-warung/warung-az-zahra" btn="Detail" imgSrc={zahrafoto} />
              <ProjectCard  h1="Warung Heni" p="Tempat makan area barat worth it" btn="Detail" srcPage="/list-warung/warung-heni" imgSrc={heniFoto} />
              <ProjectCard  h1="Warung Nasi Padang Restu Mande" p="Tempat makan area barat worth it" srcPage="/list-warung/warung-restu-mande" btn="Detail" imgSrc={restuFoto} />
              <ProjectCard  h1="Warung Nasi Umi" p="Tempat makan area barat worth it" btn="Detail" srcPage="/list-warung/warung-nasi-umi" imgSrc={umiFoto} />
            </div>
          </div>
  
          {/* Kantin Unpad */}
          <div className="px-4 sm:px-12 mt-16 pb-24">
            <SectionHeader title="Kantin Unpad" description="rekomendasi tempat makan di kampus unpad" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto">
              <ProjectCard  h1="Kantin Bale Wilasa 1" p="Tempat makan area unpad worth it" srcPage="/list-warung/kantin-balwil1" btn="Detail" imgSrc={balwilfoto} />
              <ProjectCard  h1="Kantin FH" p="Tempat makan area unpad worth it" srcPage="/list-warung/kantin-fh" btn="Detail" imgSrc={fhfoto} />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  function SectionHeader({ title, description }) {
    return (
      <div>
        <p className="text-[#1E3D59] text-2xl sm:text-[48px] font-['Outfit']">{title}</p>
        <p className="text-[#1E3D59] text-opacity-40 text-sm sm:text-lg font-['Outfit'] leading-loose mt-4 sm:mt-10">
          {description}
        </p>
      </div>
    );
  }
  
  export default Projects;
  