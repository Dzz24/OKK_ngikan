export default function TeamCard({
    foto,
    judul,
    alias
}){
    return (
        <div>
            <img src={foto} alt=""className=""/>
            <div className="bg-white bg-opacity-5 rounded-sm p-8 ">
            <p className="text-white text-lg font-bold font-['Noto Sans']">{judul}</p>
            <p className="text-white text-opacity-60 text-sm font-medium font-['Noto Sans']">{alias}</p>
            </div>
        </div>
    )
}