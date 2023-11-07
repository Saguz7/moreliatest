 


import React from 'react';
import Link from 'next/link'; 
import Header from '../../../public/components/Header';  
import Button from '../../../public/components/Button'; 
import Input from '../../../public/components/Input';
import Image from 'next/image';

 
import styles from './style.css';

const containerStyle = {
  height: '100vh',  // 100% de la altura del viewport
  overflow: 'hidden',  // Deshabilita el scroll
  backgroud: 'white'
};

function Login() {
  return (
    <div style={containerStyle}>
    <Header />

    <div className="bg-white min-h-screen  ">
      <div className="container">
      <div className="card justify-center">

      <div style={leftSectionStyle} className="row padding-elements">
          <Image
        src="/ruta/a/la/imagen.png" // Ruta a la imagen en tu proyecto
        alt="Logo" 
        style={logoStyle}
      />
      
      </div>
 

        <div className="row width-form-content">
          <div className="col-12">
            <div className="col-12">
              <label className="text_medium">Correo electrónico</label>
            </div>
            <div className="col-12">
                <Input />
            </div>
          </div> 
        </div>


        <div className="row width-form-content">
          <div className="col-12">
            <div className="col-12">
              <label className="text_medium">Contraseña</label>
            </div>
            <div className="col-12">
                <Input />
            </div>
          </div> 
        </div>
     
       
        <div className="row padding-elements">
        <Link href="/buzon">
          <Button text="Entrar" customStyle={{ width: '120px'}}></Button>
        </Link>
        </div>


         
         
      </div>
      <div>
 
       

      </div>

      </div>

    </div>
    </div>

  );
}

const leftSectionStyle = {
  flex: '0 0 25%', // 25% del ancho
};

const logoStyle = {
  //height: '85px',
  padding: '10px',
  width: '450px'

}; 

export default Login;



 