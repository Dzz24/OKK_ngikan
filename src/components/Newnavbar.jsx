import logo from '../assets/Images/Tak_berjudul60_20241024223843__1_-removebg-preview.png'
function Newnavbar(){
    return (
    <div className="navbar bg-[#F5F0E1]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a href='/'>Home</a></li>
              <li>
                <a>Informasi & Rekomendasi</a>
                <ul className="p-2">
                  <li><a href='/list-warung'>Area Timur</a></li>
                  <li><a href='/list-warung'>Area Tengah</a></li>
                  <li><a href="/list-warung">Area Barat</a></li>
                  <li><a href="/list-warung">Kantin Unpad</a></li>
                </ul>
              </li>
              <li><a href='/gizi'>Gizi</a></li>
              {/* <li><a href="">Item 4</a></li> */}
            </ul>
          </div>
          <div className='flex'>
            <img src={logo} className='h-6 w-6 mt-3 ml-2' alt="" />
            <a className="btn btn-ghost text-xl">Ngikan</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex dropdown-content">
          <ul className="menu menu-horizontal px-1 z-[10]">
            <li><a href='/'>Home</a></li>
            <li>
              <details>
                <summary>Informasi & Rekomendasi</summary>
                <ul className="p-2">
                    <li><a href='/list-warung'>Area Timur</a></li>
                    <li><a href='/list-warung'>Area Tengah</a></li>
                  <li><a href="/list-warung">Area Barat</a></li>
                  <li><a href="/list-warung">Kantin Unpad</a></li>
                </ul>
              </details>
            </li>
            <li><a href='/gizi'>Gizi</a></li>
            {/* <li><a href="/about">About Us</a></li> */}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">hiasan</a>
        </div>
      </div>
    )
}
export default Newnavbar