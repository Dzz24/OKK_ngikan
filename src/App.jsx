import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useEffect } from 'react';
import Home from './pages/Home'
import Projects from './pages/Projects'
import ServiceDetail from './pages/ServiceDetail'
import About from './pages/About'
import ProjectDetail from './pages/ProjectDetail'
import HowWeWork from './pages/LatarBelakang'
import Janari from './pages/warung/Janari'
import NasiKulit from './pages/warung/NasiKulit'
import NasiNKRI from './pages/warung/NasiNKRI'
import RMPadangElok from './pages/warung/RMPadangElok'
import WartegPratama from './pages/warung/WartegPratama'
import WartegRidho from './pages/warung/WartegRidho'
import GriyaNangor from './pages/warung/GriyaNangor'
import Hipotesa from './pages/warung/Hipotesa'
import KantinJatinangor from './pages/warung/KantinJatinangor'
import KantinSayang from './pages/warung/KantinSayang'
import RMPadangPP from './pages/warung/RMPadangPP'
import SotoAyamHari from './pages/warung/SotoAyamHari'
import WaroengSS from './pages/warung/WaroengSS'
import WartegNabila from './pages/warung/WartegNabila'
import WartegSumberBerkah from './pages/warung/WartegSumberBerkah'
import WarungMakanUso from './pages/warung/WarungMakanUso'
import WartegSariRasa from './pages/warung/WartegSariRasa'
import KantinElthizy from './pages/warung/KantinElthizy'
import SeblakRegency from './pages/warung/SeblakRegency'
import WarungAzZahra from './pages/warung/WarungAzZahra'
import WarungHeni from './pages/warung/WarungHeni'
import WarungRestuMande from './pages/warung/WarungRestuMande'
import WarungNasiUmi from './pages/warung/WarungNasiUmi'
import KantinBalwil1 from './pages/warung/KantinBalwil1'
import KantinFH from './pages/warung/KantinFH'
import WarungPakAmir from './pages/warung/WarungPakAmir'
import Gizi from './pages/Gizi'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,    
    });

  }, []);
  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<Home />}  />
        <Route path = '/error' element = {<Error/>} />
        <Route path = '/list-warung' element = {<Projects/>} />
        <Route path = '/servicedetail' element = {<ServiceDetail/>} />
        <Route path = '/about' element = {<About/>} />
        <Route path = '/projectdetail' element = {<ProjectDetail/>} />
        <Route path = '/latar-belakang' element = {<HowWeWork/>} />
        <Route path = '/list-warung/janari' element = {<Janari/>} />
        <Route path = '/list-warung/nasi-kulit' element = {<NasiKulit/>} />
        <Route path = '/list-warung/nasi-nkri' element = {<NasiNKRI/>} />
        <Route path = '/list-warung/rm-padang-elok' element = {<RMPadangElok/>} />
        <Route path = '/list-warung/warteg-pratama' element = {<WartegPratama/>} />
        <Route path = '/list-warung/warteg-ridho' element = {<WartegRidho/>} />
        <Route path = '/list-warung/griya-nangor' element = {<GriyaNangor/>} />
        <Route path = '/list-warung/hipotesa' element = {<Hipotesa/>} />
        <Route path = '/list-warung/kantin-jatinangor' element = {<KantinJatinangor/>} />
        <Route path = '/list-warung/kantin-sayang' element = {<KantinSayang/>} />
        <Route path = '/list-warung/rm-padang-pp' element = {<RMPadangPP/>} />
        <Route path = '/list-warung/soto-ayam-hari' element = {<SotoAyamHari/>} />
        <Route path = '/list-warung/waroeng-ss' element = {<WaroengSS/>} />
         {/*  */}
        <Route path = '/list-warung/warteg-nabila' element = {<WartegNabila/>} />
        {/*  */}
        <Route path = '/list-warung/warteg-sumber-berkah' element = {<WartegSumberBerkah/>} />
        {/*  */}
        <Route path = '/list-warung/warteg-makan-uso' element = {<WarungMakanUso/>} />
        {/*  */}
        <Route path = '/list-warung/warteg-sari-rasa' element = {<WartegSariRasa/>} />
        {/*  */}
        <Route path = '/list-warung/kantin-elthizy' element = {<KantinElthizy/>} />
        <Route path = '/list-warung/seblak-regency' element = {<SeblakRegency/>} />
        <Route path = '/list-warung/warung-az-zahra' element = {<WarungAzZahra/>} />
        <Route path = '/list-warung/warung-heni' element = {<WarungHeni/>} />
        <Route path = '/list-warung/warung-restu-mande' element = {<WarungRestuMande/>} />
        <Route path = '/list-warung/warung-nasi-umi' element = {<WarungNasiUmi/>} />
        <Route path = '/list-warung/kantin-balwil1' element = {<KantinBalwil1/>} />
        <Route path = '/list-warung/kantin-fh' element = {<KantinFH/>} />
        <Route path = '/list-warung/warung-pak-amir' element = {<WarungPakAmir/>} />
        <Route path = '/gizi' element = {<Gizi/>} />
      </Routes>
    </Router>
  )
}

export default App;
