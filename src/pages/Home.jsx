import Layout from "@/components/Layout";
import Button from "@/components/ui/Button";
import FeatureCard from "@/components/ui/FeatureCard";
import ProjectCard from "@/components/ui/ProjectCard";
import logo from "../assets/Images/Tak_berjudul60_20241024223843__1_-removebg-preview.png";
import panganPic from "../assets/Images/HomePangan.png";
import logoLB from "../assets/Images/1.png";
import fotoBg from "../assets/Images/top-view-table-full-food.jpg";
import janariFoto from "../assets/Images/WhatsApp Image 2024-11-15 at 11.13.13.jpeg"
function Home() {
    return (
        <Layout>
            <div className="bg-[#F5F0E1]">
                <div
                    className="relative bg-fixed bg-center bg-contain p-12 sm:p-20 lg:p-48 backdrop-blur-sm mb-20"
                    style={{ backgroundImage: `url(${fotoBg})` }}
                >
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30" />
                    <p data-aos="fade-up" className="justify-center text-center font-semibold font-['Outfit'] text-[#ffffff] text-3xl sm:text-4xl lg:text-6xl">
                        Welcome to Ngikan
                    </p>
                    <p data-aos="fade-up" className="text-[#ffffff] text-center text-sm sm:text-base font-medium font-['Outfit'] leading-loose mt-6 sm:mt-10">
                        Pernah nggak sih bingung mau makan apa yang fresh, bergizi dan enak tanpa ribet? <br /> Coba deh pantau website kami ini,
                        tempat seru buat nemuin makanan makanan pilihan yang langsung bikin ngiler!
                    </p>
                </div>

                {/* Section Latar Belakang */}
                <div className="pb-20 sm:pb-40 pt-10 sm:pt-20">
                    <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-40 mx-6 lg:mx-40">
                        <div data-aos="fade-right" className="lg:w-full h-auto md:w-64 sm:w-64">
                            <img src={logoLB} alt="" />
                        </div>
                        <div>
                            <p data-aos="fade-left" className="text-[24px] sm:text-[32px] lg:text-[48px] font-semibold font-['Outfit'] text-[#1E3D59]">
                                Kenapa Kami Mengangkat Topik Ini??
                            </p>
                            <p data-aos="fade-left" className="text-[#1E3D59] text-opacity-40 text-sm sm:text-base font-medium font-['Outfit'] leading-loose my-4 sm:my-10">
                            Mahasiswa yang tinggal di indekos sering kali menghadapi tantangan dalam menjaga pola 
                                makan sehat akibat keterbatasan anggaran, waktu, dan jadwal yang padat, yang sering mendorong mereka memilih makanan cepat saji atau instan yang rendah 
                                nutrisi. Hal ini dapat berdampak buruk pada kesehatan jangka panjang, termasuk risiko kekurangan gizi...
                            </p>
                            <a
                                href="/latar-belakang"
                                className="px-6 bg-[#1E3D59] py-2 rounded-lg text-white text-sm sm:text-base"
                                data-aos="fade-left"
                            >
                                View More
                            </a>
                        </div>
                    </div>
                </div>

                {/* Section Ketahanan Pangan */}
                <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-40 mx-6 lg:mx-20 my-32" >
                    <div data-aos="fade-right" className="lg:ml-28">
                        <p  className="text-[24px] sm:text-[32px] lg:text-[48px] font-semibold font-['Outfit'] text-[#1E3D59]">
                            Mengapa Ketahanan Pangan itu Penting ???
                        </p>
                        <p className="text-[#1E3D59] text-opacity-40 text-sm sm:text-base font-medium font-['Outfit'] leading-loose mt-4 sm:mt-10 mb-8">
                        Mahasiswa yang tinggal di indekos sering kali menghadapi tantangan dalam menjaga pola 
                            makan sehat akibat keterbatasan anggaran, waktu, dan jadwal yang padat, yang sering mendorong mereka memilih makanan cepat saji atau instan yang rendah 
                            nutrisi. Hal ini dapat berdampak buruk pada kesehatan jangka panjang, termasuk risiko kekurangan gizi. Untuk mengatasi masalah ini, sebuah website panduan 
                            gizi khusus dirancang untuk memberikan informasi praktis mengenai pilihan makanan sehat dan terjangkau. Website ini menyediakan panduan lengkap tentang kebutuhan 
                            gizi harian dan tips memilih bahan pangan yang bergizi namun ramah di kantong.
                        </p>
                    </div>
                        <img src={panganPic} className="lg:w-96 "data-aos="fade-left" alt="" />
                </div>

                {/* Section Gizi Seimbang */}
                <div className="pb-20 sm:pb-40 pt-10 sm:pt-20">
                    <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-40 mx-6 lg:mx-40 " data-aos="fade-right">
                            <img src={panganPic} className="lg:w-1/3 md:" alt="" />
                        <div >
                            <p data-aos="fade-left" className="text-[24px] sm:text-[32px] lg:text-[48px] font-semibold font-['Outfit'] text-[#1E3D59]">
                                Apa sih Gizi Seimbang itu??
                            </p>
                            <p data-aos="fade-left" className="text-[#1E3D59] text-opacity-40 text-sm sm:text-base font-medium font-['Outfit'] leading-loose my-4 sm:my-10">
                            Gizi Seimbang menurut Kemenkes 
                                RI 2014 merupakan susunan pangan sehari-hari yang mengandung zat gizi dalam jenis dan jumlah yang sesuai dengan kebutuhan tubuh, dengan 
                                memperhatikan prinsip keanekaragaman pangan,  aktivitas  fisik,  perilaku  hidup  bersih  dan  memantau  berat  badan  secara  teratur  dalam 
                                rangka mempertahankan berat badan normal untuk mencegah masalah gizi dan mempertahankan sistem imun dalam tubuh...</p>
                            <a
                                href="/gizi"
                                className="px-6 bg-[#1E3D59] py-2 rounded-lg text-white text-sm sm:text-base"
                                data-aos="fade-left"
                            >
                                View More
                            </a>
                        </div>
                    </div>
                </div>

                {/* Section Warung Makan */}
                <div
                    className="relative bg-fixed bg-center bg-cover p-12 sm:p-20 lg:p-48 backdrop-blur-sm"
                    style={{ backgroundImage: `url(${fotoBg})` }}
                >
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30" />
                    <div className="relative text-center">
                        <p data-aos="fade-up" className="text-[#ffffff] text-[24px] sm:text-[32px] lg:text-[48px] font-semibold font-['Outfit']">
                            Warung Makan Rekomendasi
                        </p>
                        <p className="text-[#ffffff] text-[24px] sm:text-[32px] lg:text-[48px] font-semibold font-['Outfit']" data-aos="fade-up">Ngikan</p>
                    </div>
                    <div data-aos="fade-up" className="relative flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-20 py-12 sm:py-36">
                        <a href="/list-warung">
                            <ProjectCard
                                img = {janariFoto}
                                h1="Area Barat"
                                p="Rekomendasi warung / tempat makan GKPN, caringin dan sekitarnya"
                                btn="Lihat Detail"
                            />
                        </a>
                        <a href="/list-warung">
                            <ProjectCard
                                h1="Area Tengah"
                                p="Rekomendasi warung / tempat makan jalan sayang, dan sekitarnya"
                                btn="Lihat Detail"
                            />
                        </a>
                        <a href="/list-warung">
                            <ProjectCard
                                h1="Area Timur"
                                p="Rekomendasi warung / tempat makan hegarmanah dan ciseke"
                                btn="Lihat Detail"
                            />
                        </a>
                        <a href="/list-warung">
                            <ProjectCard
                                h1="Area Unpad"
                                p="Rekomendasi warung / tempat makan area kampus unpad"
                                btn="Lihat Detail"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Home;
