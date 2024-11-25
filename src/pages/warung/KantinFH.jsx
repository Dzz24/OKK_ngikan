import WarungPageComponent from "@/components/ui/WarungPageComponent"
import foto from "../../assets/Images/hukum.jpg"
function KantinFH(){
    return (
        <>
            <WarungPageComponent
            judul= "Kantin Fakultas Hukum"
            subJudul= "Salah satu kantin di Unpad yang memiliki tempat yang nyaman untuk sekedar bersantai beristirahat dan memiliki banyak menu-menu makanan dan minuman yang bervariasi"
            harga="3.000 - 35.000"
            jamBuka="07.30 - 16.00"
            judulReview= "Review Kantin Fakultas Hukum"
            detailReview= "makanannya enak, nasi yang masih hangat, ayam bakar dengan tingkat kematangan yang pas, sambal yang enak dan memiliki sayuran yang membuatnya menjadi paket makanan yang sempurna. tempatnya asri, nyaman, para penjualnya juga ramah, memiliki banyak tempat duduk, dan memiliki banyak warung yang bermacam-macam sehingga banyak pilihan makanan yang bisa dibeli. karbohidrat : nasi putih, jagung. protein : ayam bakar, tempe, tahu, jagung. lemak : ayam bakar, kol goreng. vitamin : sayur kol, jagung, wortel. mineral :jagung, wortel. serat : sayur kol, jagung"
            bgSrc={foto}
            makanan1="Nasi Gila"
            makanan2="Nasi Gila Keju"
            makanan3="Sate Ayam"
            makanan4="Sate Maranggi"
            harga1="Rp. 15000"
            harga2="Rp. 17000"
            harga3="Rp. 22000"
            harga4="Rp. 25000"
            />
        </>
    )
}
export default KantinFH