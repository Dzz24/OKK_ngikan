import WarungPageComponent from "@/components/ui/WarungPageComponent"
import foto from "../../assets/Images/hipotesa.jpg"
function Hipotesa(){
    return (
        <>
            <WarungPageComponent
            judul= "Hipotesa"
            subJudul= "Makanannya enak, tempatnya pun bersih dan nyaman. Cocok untuk mahasiswa yang sedang bingung ingin mkan apa, hipotesa menyediakan berbagai varian masakan yang dapat memenuhi kebutuhan asupan nutrisi mahasiawa"
            harga="3.000 - 18.000"
            jamBuka="24 Jam"
            judulReview= "Review Hipotesa"
            detailReview= "Makanannya enak, nasinya hangat, telurnya tebal, jamurnya pun segar. menyediakan tempat makan, tempatnya bersih, tempatnya aga tersembunyi  "
            karbo="Karbohidrat: nasi putih, nasi goreng, indomie, kentang balado"
            protein="Protein: ayam, telur, sarden"
            lemak="lemak: nasi goreng & indomie, telur kornet keju "
            vitamin="vitamin: tumis kangkung, tahu toge, buncis, es jeruk"
            serat="mineral : sayur, susu, teh"
            bgSrc={foto}
            makanan1="Nasi Goreng"
            makanan2="Indomie"
            makanan3="Kentang Balado"
            makanan4="Tumis Kangkung"
            harga1="Rp 12.000"
            harga2="Rp 10.000"
            harga3="Rp 10.000"
            harga4="Rp 8.000"
            />
        </>
    )
}
export default Hipotesa