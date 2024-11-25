import Newnavbar from "@/components/Newnavbar"
import gambar23 from "../assets/Images/Discuss Illustration.png"
import gambar24 from "../assets/Images/Development Illustration.png"
import gambar25 from "../assets/Images/Group 46.png"
import PrepareBox from "@/components/PrepareBox"
import Footer from "@/components/Footer"
import fotoKelompok from "../assets/Images/Desain tanpa judul (9).png"
function LatarBelakang() {
    return (
        <>
            <Newnavbar />
            <div className="bg-[#F5F0E1]">
                {/* Section 1 */}
                <div className="bg-[#F5F0E1] p-12 md:p-24">
                    <p className="text-center font-semibold font-['Outfit'] text-[#1E3D59] text-4xl md:text-6xl">Latar Belakang</p>
                    <p className="text-[#1E3D59] text-opacity-40 text-center text-sm md:text-base font-medium font-['Outfit'] leading-relaxed mt-4 md:mt-10">
                        Pernah nggak sih penasaran, kenapa website ini dibuat? <br />
                        Ternyata ada cerita menarik di baliknya yang bakal bikin kamu makin paham tujuan besar di balik setiap fitur di sini!
                    </p>
                </div>

                {/* Section 2 */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 px-6 md:px-24 py-12 md:py-24">
                    <img src={fotoKelompok} className="w-64 md:w-96" alt="" />
                    <div>
                        <p className="text-[#1E3D59] text-2xl md:text-4xl font-bold mt-4">Welcome to Ngikan</p>
                        <p className="text-[#1E3D59] text-opacity-40 text-sm md:text-base font-medium font-['Outfit'] leading-relaxed mt-4">
                        Sebelum lanjut untuk membaca di pertemuan pertama kita.. selamat datang didunia NGIKAN dengan isi berupa macam macam tempat makan yang diharapkan sesuai degan 
                        selera kita semua. website ini tercipta demi memenuhi tugas projek okk dengan tema ketahanan pangan dan bertujuan untuk mendukung keragaman pangan serta ketahanan pangan mahasiswa terutama mahasiswa yang memilih untuk tinggal di kos. Barangkali konten dalam website 
                        ini terkadang tidak sesuai dengan harapan dan tidak luput dari kesalahan. Walaupun begitu, selamat menjelajahi jatinangor dengan keberagaman makanannya yang diharapkan dapat memenuhi nutrisi kalian semuaa.
                        </p>
                    </div>
                </div>

                {/* Section 3 */}
                <div className="bg-[#F5F0E1]">
                    <div className="flex flex-col md:flex-row items-start justify-center gap-10 px-6 md:px-24 py-12 md:py-24">
                        <div>
                            <p className="text-[#1E3D59] text-2xl md:text-4xl font-bold mt-4">REGULATION AND DISCLAIMER!</p>
                            <p className="text-[#1E3D59] text-opacity-40 text-sm md:text-base font-medium font-['Outfit'] leading-relaxed mt-4">
                                {/* Text content */}
                        <br />1. Informasi yang disajikan di website ini hanya untuk tujuan informasi umum dan tidak dapat menggantikan saran dari ahli gizi atau dokter. Kami tidak bertanggung jawab atas segala kerugian yang timbul akibat penggunaan informasi ini. Maka dari itu pengguna wajib menggunakan informasi ini dengan bijak dan bertanggung jawab.
                        <br />2. Konten dalam website ini dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya. Kami tidak menjamin keakuratan, kelengkapan, atau keandalan informasi yang disajikan.
                        <br />3. Pengelola website tidak bertanggung jawab atas segala reaksi alergi, penyakit, atau kondisi kesehatan lainnya yang mungkin timbul akibat konsumsi makanan atau minuman berdasarkan informasi yang diperoleh dari website ini.
                        <br />4. Informasi mengenai tempat makan yang tercantum di website ini diperoleh dari hasil survey tim RK OKK 13A (NGIKAN) dan berbagai sumber dan mungkin berubah sewaktu-waktu. Pengelola website berusaha menyediakan informasi yang akurat dan terkini, namun tidak menjamin keakuratan, kelengkapan, atau keandalan informasi tersebut.
                        <br />5. Ulasan yang ditampilkan di website ini merupakan hasil pendapat tim RK OKK 13A (NGIKAN) yang general dan tidak mencerminkan pendapat seluruh orang. Pengelola website tidak bertanggung jawab atas ketidakakuratan, ketidaklengkapan, atau ketidakbenaran ulasan tersebut.
                        <br />6. Pengguna disarankan untuk melakukan konfirmasi langsung ke tempat makan yang bersangkutan sebelum melakukan kunjungan.
                        <br />7. Pengguna tidak diperkenankan menyalin, mengubah, atau menyebarkan informasi tidak benar dari website ini tanpa izin tertulis dari pengelola website.
                        <br />8. Pengguna dilarang menggunakan website ini untuk tujuan yang melanggar hukum, merusak, atau mengganggu pihak lain.
                            </p>
                        </div>
                        <img src={gambar24} alt="" className="w-48 md:w-auto" />
                    </div>
                </div>

                {/* Section 4 */}
                <div className="bg-[#F5F0E1]">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-24 py-12 md:py-24">
                        <img src={gambar25} alt="" className="w-48 md:w-auto" />
                        <div>
                            <p className="text-[#1E3D59] text-opacity-40 text-sm md:text-base font-medium font-['Outfit'] leading-relaxed">
                                {/* Content text */}
                                Sesuai dengan judul aksi OKK kami “ Optimalisasi Ketahanan Pangan Anak Indekos Melalui Situs Website Panduan Gizi untuk Pemilihan Pangan Sehari - Hari “. Website ini kami buat dengan kesadaran penuh dengan tujuan untuk mengoptimalisasi ketahanan pangan anak indekos. Optimalisasi ketahanan pangan melalui keberadaan website ini diharapkan dapat membantu teman - teman semua untuk mendapatkan keberagaman pangan yang sesuai dengan kebutuhan pangan dan gizi kalian. Pada website ini tertera tempat - tempat makan yang telah dibagi menjadi 4 bagian untuk memudahkan teman - teman dalam memilih tempat makan : 
                        <br /> <br />1. TEMPAT MAKAN DI TIMUR ( Ciseke, Hegarmanah)
                        <br />Daerah ini merupakan daerah bagian dimana banyak indekos yang berjejer sebagai tempat tinggal mahasiswa jatinangor. Dimana sebagai daerah yang banyak mahasiswa tinggal dipastikan daearah ini dapat menyediakan banyak tempat makan. Selain itu, daerah ini juga merupakan tempat para warga lokal jatinangor tinggal.
                        <br /> <br />2. TEMPAT MAKAN DI PUSAT (Jalan Raya Jatinangor)
                        <br />Daerah ini merupakan tempat pusat dari daerah Jatinangor ini di mana menjadi tempat banyaknya orang berlalu - lalang dan beraktivitas. Mayoritas kendaraan yang berpindah dari satu kota ke kota lain juga banyak melewati tempat ini, sehingga menjadikan daerah ini cocok untuk adanya tempat makan. Dengan adanya Universitas seperti Unpad dan ITB yang ada di daerah ini juga menjadikan daerah ini sebagai pusat kegiatan mahasiswa. 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#F5F0E1]">
                    <div className="flex flex-col md:flex-row items-start justify-center gap-10 px-6 md:px-24 py-12 md:py-24">
                        <div>
                            <p className="text-[#1E3D59] text-opacity-40 text-sm md:text-base font-medium font-['Outfit'] leading-relaxed mt-4">
                                {/* Text content */}
                                <br />3. TEMPAT MAKAN BARAT(Caringin, GKPN)
                        <br />Daerah ini merupakan tempat dimana indekos dengan kualitas tinggi berada, namun tidak dipungkiri orang-orang yang tinggal di tempat tersebut juga masih membutuhkan nutrisi. Di daerah ini mayoritas tempat makan menyediakan beragam makanan dengan harga yang tetap murah dan berkualitas.
                        <br /><br />4. TEMPAT BELI BAHAN MAKAN ( Griya, Tempat sayur sayang, dan Superindo). <br /> Tidak hanya memberi rekomendasi tempat makan, kami juga menyediakan beberapa referensi tempat membeli bahan makanan bagi mahasiswa yang ingin berkreasi menciptakan makanan yang penuh nutrisi sendiri. Beberapa tempat belanja ini menyediakan berbagai bahan pokok yang lengkap untuk memenuhi kebutuhan pangan.
                        <br /> <br /> <br />Kecamatan Jatinangor merupakan salah satu pusat pendidikan di Provinsi Jawa Barat dengan adanya beberapa tempat menimba pendidikan khususnya universitas di tempat ini menjadikan daerah ini semakin berkembang. Banyaknya tempat pendidikan di sini khususnya universitas berpengaruh terhadap kondisi fisik dari Jatinangor itu sendiri. Perubahan dapat dilihat dari cara beradaptasi masyarakat seperti semakin bertambahnya sarana dan prasarana yang lebih berorientasi terhadap mahasiswa dan kebutuhannya. Seperti tempat kos, tempat makan, dan lain-lain. Khususnya tempat makan menjadi poin penting yang perlu diperhatikan karena makanan merupakan kebutuhan sehari-hari dan tentunya gizi dari makanan yang disajikan menjadi poin utama dari keberadaan website ini. 
                    </p>
                        </div>
                        <img src={gambar24} alt="" className="w-48 md:w-auto" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default LatarBelakang;
