import React from "react";
import Luna from "../../assets/luna.png";
import Bruja from '../../assets/bruja.png';
import Logoambulatorio from '../../assets/logo_ambulatorio.png';
const Header = () => {
  return (
    <>
      <div className="w-full flex justify-center  flex-col items-center sm:w-1/2 md:w-auto bg-cover header_bg">
        <div className="w-1/2 justify-center flex flex-col items-center absolute">
          <img src={Luna} alt="" className="md:-mt-80 -mt-4" />
          <div className="logo absolute top-0 md:-top-60">
            <img src={Logoambulatorio} alt=""  className="milogo"/>
          </div>
        </div>
<div className="bruja">
    <img src={Bruja} alt={Bruja} className="w-40 md:w-96"/>
</div>
        <h1 className="text-orange-700 font-bold md:text-8xl text text-2xl">
          Concurso Halloween
        </h1>
      </div>
    </>
  );
};

export default Header;
