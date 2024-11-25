import Newnavbar from "@/components/Newnavbar"
import gambar3 from "../assets/Images/Group 56.png"
import gambar5 from "../assets/Images/Rectangle 156.png"
import gambar6 from "../assets/Images/Rectangle 156-3.png"
import gambar7 from "../assets/Images/Rectangle 156-4.png"
import gambar8 from "../assets/Images/Rectangle 156sec.png"
import gambar9 from "../assets/Images/Rectangle 156-1.png"
import gambar10 from "../assets/Images/Rectangle 156-2.png"
import { Flag } from 'lucide-react';
import { DollarSign } from 'lucide-react';
import { UserRound } from 'lucide-react';
import TeamCard from "@/components/ui/TeamCard";
import PrepareBox from "@/components/PrepareBox"
import Footer from "@/components/Footer"
import buAnggun from "../assets/Images/Desain tanpa judul (11).png"

function About (){
    return (
        <>
        <Newnavbar/>
        <div className="bg-[#F5F0E1]">
        <div className=" justify-between items-center">
            <div className=" py-48">
                    <p className="justify-center text-center font-semibold font-['Outfit'] text-[#1E3D59] text-6xl">ABOUT US</p>
                    <p className="text-[#1E3D59] text-opacity-40 text-center text-base font-medium font-['Outfit'] leading-loose mt-10">Curious tentang siapa kami di balik website ini? <br /> Yuk, cari tahu lebih lanjut tentang tim kami dan apa yang jadi visi misi di balik semua yang kami lakukan!</p>
                </div>
        </div>
                <div className="my-12">
                    <p className="justify-center text-center font-semibold font-['Outfit'] text-[#1E3D59] text-6xl mt-4">We are ngikan from OKK<br />Kelompok 13</p>
                    <div className="flex justify-evenly my-16">
                    <img src={buAnggun} className="w-80 h-80" alt="" />
                    <p className="justify-center text-center font-semibold font-['Outfit'] text-[#1E3D59] text-3xl">Anggun Rafisa, drg.,M.KM.</p>
                    </div>
                </div>       
                <div className="">
                    <div className="flex justify-center gap-20">
                    <TeamCard
                    foto={gambar5}
                    judul = "Albert Flores"
                    alias = "Founder"
                    />
                    <TeamCard
                    foto={gambar6}
                    judul = "Devon Lane"
                    alias = "Chief Technology Officer"
                    />
                    <TeamCard
                    foto={gambar7}
                    judul = "Darrell Steward"
                    alias = "UI Designer"
                    />
                    </div>
                    <div className="flex justify-center gap-20 mt-12">
                    <TeamCard
                    foto={gambar8}
                    judul = "Marvin McKinney"
                    alias = "Software Engineer"
                    />
                    <TeamCard
                    foto={gambar9}
                    judul = "Floyd Miles"
                    alias = "System Analyst"
                    />
                    <TeamCard
                    foto={gambar10}
                    judul = "Arnette Black"
                    alias = "Project Manager"
                    />
                    </div>
                    <div className="flex justify-center gap-20 mt-12">
                    <TeamCard
                    foto={gambar8}
                    judul = "Marvin McKinney"
                    alias = "Software Engineer"
                    />
                    <TeamCard
                    foto={gambar9}
                    judul = "Floyd Miles"
                    alias = "System Analyst"
                    />
                    <TeamCard
                    foto={gambar10}
                    judul = "Arnette Black"
                    alias = "Project Manager"
                    />
                    </div>
                    <div className="flex justify-center gap-20 mt-12">
                    <TeamCard
                    foto={gambar8}
                    judul = "Marvin McKinney"
                    alias = "Software Engineer"
                    />
                    <TeamCard
                    foto={gambar9}
                    judul = "Floyd Miles"
                    alias = "System Analyst"
                    />
                    <TeamCard
                    foto={gambar10}
                    judul = "Arnette Black"
                    alias = "Project Manager"
                    />
                    </div>
                </div>
                    <PrepareBox/> 
                    <Footer/> 
        </div>
        </>
    )
}
export default About