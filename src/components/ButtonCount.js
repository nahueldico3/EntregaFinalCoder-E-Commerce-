import Button from 'react-bootstrap/Button';
import { useState } from 'react';


const ButtonCount = () => {

  const [b,setC] = useState(0);

  const sumar = () => {
    setC(b + 1)
  };

  const restar = () => {
    setC(b - 1)
  };

  return (
    <div className='botonCarrito'>
      {b}
      <div>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </div>
      <Button variant="outline-primary" className='pad1'>Agregar al carrito</Button>
    </div>
  )
}

export default ButtonCount;