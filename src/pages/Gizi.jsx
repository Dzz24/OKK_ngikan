import Newnavbar from "@/components/Newnavbar";
import gambar23 from "../assets/Images/Discuss Illustration.png";
import gambar24 from "../assets/Images/Development Illustration.png";
import gambar25 from "../assets/Images/Desain tanpa judul (13).png";
import PrepareBox from "@/components/PrepareBox";
import Footer from "@/components/Footer";
import fotoKelompok from "../assets/Images/Desain tanpa judul (9).png";
import fotoIsiPiringku from "../assets/Images/Gizi-seimbang-kemenkes.jpg";
import fotoBg from "../assets/Images/buddha-bowl-dish-with-vegetables-legumes-top-view.jpg";

function Gizi() {
  return (
    <>
      <Newnavbar />
      <div className="bg-[#F5F0E1]">
        {/* Section 1 */}
        <div
          className="bg-fixed bg-center bg-cover p-16 md:p-48 backdrop-blur-sm mb-20 text-center "
          style={{ backgroundImage: `url(${fotoBg})` }}
        >
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-30" />
          <p data-aos="fade-up" className="text-3xl md:text-6xl font-semibold text-white font-['Outfit']">
            Gizi Seimbang
          </p>
          <p data-aos="fade-up" className="text-white text-sm md:text-base font-medium mt-4 md:mt-10 leading-loose">
            Pernah kepikiran nggak, kenapa makan enak aja belum tentu bikin
            badan sehat? <br />
            Yuk, kenalan sama konsep gizi seimbang yang bikin tubuh kamu nggak
            cuma kenyang, tapi juga kuat dan bugar!
          </p>
        </div>

        {/* Section 2 */}
        <div data-aos="fade-left" className="flex flex-col md:flex-row items-center gap-10 md:gap-20 px-6 md:px-24 py-10">
          <img
            src={fotoKelompok}
            className="w-60 md:w-96 rounded-lg"
            alt="Foto Kelompok"
          />
          <div data-aos="fade-left">
            <p className="text-[#
            ] text-2xl md:text-4xl font-bold mt-4">
              Apa itu Gizi Seimbang?
            </p>
            <p className="text-[#1E3D59] text-opacity-40 text-sm md:text-base font-medium font-['Outfit'] leading-loose mt-4">
             <br /> Gizi Seimbang menurut Kemenkes RI 2014 merupakan susunan pangan
              sehari-hari yang mengandung zat gizi dalam jenis dan jumlah yang
              sesuai dengan kebutuhan tubuh, dengan memperhatikan prinsip
              keanekaragaman pangan, aktivitas fisik, perilaku hidup bersih, dan
              memantau berat badan secara teratur dalam rangka mempertahankan berat badan normal untuk mencegah masalah gizi dan mempertahankan sistem imun dalam tubuh
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 px-6 md:px-48 py-10">
          <div data-aos="fade-right">
            <p className="text-[#1E3D59] text-2xl md:text-4xl font-bold">
              Program Isi Piringku
            </p>
            <p className="text-black text-opacity-40 text-sm md:text-base font-medium font-['Outfit'] leading-loose mt-4">
            <br /> Pemerintah Indonesia sendiri memiliki program gizi yang diberi nama “Isi Piringku” , program ini menggantikan konsep makanan empat sehat lima sempurna yang selama ini sudah diketahui di kalangan masyarakat. Isi piringku memiliki tujuan untuk meningkatkan pemahaman masyarakat terkait gizi seimbang. Berikut penjelasan dari “Isi Piringku”:
                        <br /><br />1. 1/6 piring makan berupa buah berbagai jenis dan warna.
                        <br />2. 1/6 piring berupa lauk pauk protein baik hewani maupun nabati.
                        <br />3. 1/3 piring berupa makanan pokok yang terdiri dari karbohidrat kompleks (biji -bijian/beras), artinya membatasi karbohidrat simpleks (gula, tepung-tepungan dan produk turunan dari tepung).
                        <br />4. 1/3 piring makan berupa berbagai jenis sayur-sayuran. 
                        <br /><br />Anak indekos merupakan kalangan remaja menginjak dewasa yang juga membutuhkan zat gizi makro seperti karbohidrat, lemak, dan protein maupun zat gizi mikro seperti vitamin dan mineral yang tertuang dalam “Isi Piringku” dalam memenuhi kebutuhan energi untuk melakukan aktivitas fisik sehari-hari.

                        </p>
          </div>
          <img
            src={fotoIsiPiringku}
            className="w-40 h-40 md:w-80 md:h-80 rounded-lg"
            alt="Isi Piringku"
            data-aos="fade-right"
          />
        </div>

        {/* Section 4 */}
        <div data-aos="fade-left" className="flex flex-col md:flex-row items-center gap-10 md:gap-20 px-6 md:px-24 py-10">
          <img
            src={gambar25}
            className="lg:w-1/3 md:w-60"
            alt="Ilustrasi Gizi Seimbang"
          />
          <div>
            <p className="text-black text-opacity-40 text-sm md:text-base font-medium font-['Outfit'] leading-loose my-24">
            Tau nggak sih, tubuh kita itu kayak mesin yang butuh 'bahan bakar' biar tetap jalan? Nah, ternyata ada zat gizi utama yang wajib banget dipenuhi buat jaga energi dan kesehatan, penasaran apa aja?
                        
            <br />           Zat gizi utama yang dibutuhkan tubuh adalah : 
 <br />   Karbohidrat : Sumber energi utama bagi tubuh. Karbohidrat diubah menjadi glukosa yang menjadi bahan bakar untuk aktivitas sehari-hari.
 <br />   Protein : Membangun dan memperbaiki jaringan tubuh, termasuk otot, kulit, dan rambut. Juga berperan dalam pembentukan enzim dan hormon.
 <br />   Vitamin : Membantu tubuh menjalankan berbagai fungsi penting, seperti menjaga kesehatan mata, kulit, tulang, dan sistem kekebalan tubuh.
 <br />   Lemak : Sumber energi, membantu penyerapan vitamin larut lemak (A, D, E, K), melindungi organ vital, dan membantu menjaga suhu tubuh.
 <br />   Mineral : Membantu menjaga keseimbangan cairan tubuh, mengatur tekanan darah, dan memperkuat tulang.
 <br />   Serat : Membantu memperlancar buang air besar, menjaga kesehatan usus, membantu mengontrol kadar gula darah, menurunkan kolesterol, dan membuat kita merasa kenyang lebih lama.
    
 <br />   Prinsip utama dari gizi seimbang adalah beragam, seimbah, cukup, bersih, dan aman. Berikut merupakan beberapa referensi tempat makanan yang dapat kamu gunakan untuk mengkreasikan makanan seimbang dan beragam versi dirimu yang sudah kami susun berdasarkan letak tempatnya di Jatinangor.
    </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Gizi;
