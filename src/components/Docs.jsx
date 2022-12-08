import { useEffect, useState } from "react";

function Docs() {

  /* reglas de los hooks */
  /* 
   1. deben estar dentro del componente
   2. no deben estar dentro de un scope (sondicionales, ciclos y funciones)
   */
  const [number, setNumber] = useState(0);
  const [isView, setIsView] = useState(true);

  const sumar = () =>{
    setNumber(0)
  }

  /*1. esto se ejecuta en cada cambio de estado */
  // useEffect(()=>{
    //   sumar()
    //   console.log('useEffect');
    // })
    
    /*2. solo se ejecuta la primera vez */
    /* useEffect(()=>{
      sumar()
      console.log('useEffect');
  },[]) */
  
  /* 3. cada que cambia el estado de las dependencias */
  /* useEffect(()=>{
    sumar()
    console.log('useEffect');
},[isView]) */

/* 4. cuando se desmonta el componente */
useEffect(()=>{
  return() =>{
    console.log('Desmontar');    
  }
},[])
    
  return (
    <div className='app text-white'>
      <h1 className='text-danger'>Consumo de APIs</h1>
      <h2>{number}</h2>
      <button
        onClick={() => setNumber(number + 1)}
        className='d-block btn btn-primary'>
        Sumar
      </button>
      <button
        onClick={() => setIsView(!isView)}
        className='d-block btn btn-info'>
        Visible
      </button>
      {isView && <p>Visible</p>}
    </div>
  )
}

export default Docs
