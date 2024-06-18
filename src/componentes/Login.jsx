import React, { useState } from "react";
import imageLog from "../assets/officina.jpg";
import imagePorf from "../assets/perfil.jpg";

import appFirebase from "../credenciales";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(appFirebase);

const Login = () => {
    const [registrando, setRegistrando]= useState(false)

    const functAutenticacion = async (e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const password = e.target.password.value;
        
        if (registrando){
            try{
                await createUserWithEmailAndPassword(auth, correo, password);
            }catch (error){
                alert("asegurate que la contraseña tenga al menos 8 caracteres");
            }
        } else {
            try{
            await signInWithEmailAndPassword(auth, correo, password);
            }catch (error){
                alert("Usuario o contraseña incorrectos");
            }
        }
    }
    
    return (
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="padre">
                    <div className="card card-body shadow">
                        <img src={imagePorf} alt="" className="estilos-porfile shadow" />
                        <form onSubmit={functAutenticacion}>
                            <input type="email" className="cajatexto" placeholder="Correo" id="email" />
                            <input type="password" className="cajatexto" placeholder="Contraseña" id="password"/>
                            <button className="btnform">{registrando ? "Registrarse": "Inicia Sesion"}</button>
                    
                        </form>
                        <h4 >{registrando ? "ya tienes cuenta":"no tienes cuenta "}<button className="btnswitch" onClick= {()=>setRegistrando(!registrando)}>{registrando ? "inicia sesion" : "registrate"}</button></h4>
                    </div>
                </div>

            </div>
            
            <div className="col-md-8">
                <img src={imageLog} alt="" className="tamaño-imagen" />
                
            </div>
            
        </div>
    </div>
  );
};

export default Login;