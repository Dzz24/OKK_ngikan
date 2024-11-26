import Newnavbar from "@/components/Newnavbar";
import Footer from "@/components/Footer";
import MakananCard from "@/components/ui/MakananCard";
import gambar from "../../assets/Images/Rectangle 180.png";
import bgSrc from "../../assets/Images/WhatsApp Image 2024-11-15 at 11.13.13.jpeg";
import WarungPageComponent from "@/components/ui/WarungPageComponent";

function Janari() {
  return (
    <>
    <WarungPageComponent
    judul= "Janari"
    subJudul= "Janari cocok untuk kamu yang mencari makanan ringan atau sekedar ingin ngemil dengan suasana tempat yang nyaman dan harga yang bersahabat. Takoyaki dan saladnya lezat, dengan suasana tempat makan yang mendukung pengalaman makan jadi lebih menyenangkan."
    harga="10.000-35.000"
    jamBuka="11.00-22.0024 Jam"
    judulReview= "Review Janari"
    detailReview= "Takoyakinya memiliki tekstur yang lembut dengan isian gurita yang terasa segar. Bumbunya pas, memberikan rasa gurih yang lezat. Saladnya juga segar dengan dressing yang tidak terlalu kuat, sehingga tidak menutupi rasa sayurannya. Cocok untuk kamu yang ingin makanan ringan dengan cita rasa yang unik. Tempatnya bersih dan memiliki suasana yang nyaman, dengan dekorasi minimalis yang membuatnya terasa modern. Tersedia beberapa pilihan tempat duduk, baik untuk makan sendiri maupun bersama teman. Pelayanan cepat dan ramah, sehingga pengalaman makan jadi lebih menyenangkan.  "
    karbo="Karbohidrat: Tepung takoyaki"
    protein="Protein: Guritaa, Katsu"
    lemak="lemak: Mayonnaise "
    vitamin="vitamin: Salad"
    bgSrc={bgSrc}
    makanan1="Nasi Goreng "
    makanan2="Indomie"
    makanan3="Kentang Balado"
    makanan4="Tumis Kangkung"
    harga1="Rp 12.000"
    harga2="Rp 10.000"
    harga3="Rp 10.000"
    harga4="Rp 8.000"
    />
</>
  );
}

export default Janari;
