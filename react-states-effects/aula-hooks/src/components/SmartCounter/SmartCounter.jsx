import {useState} from 'react';


const SmartCounter = () => {
    //useState retorna um vetor
    //1. Variável Statefull
    //2. função atrelada a variável que está atrelada ao estado

    const [quantity, setQuantity] = useState(0);

    return (  
        <div>
            <h1>{quantity}</h1>
            <button onClick={()=> setQuantity(quantity + 1)}>aumentar</button>
            <button onClick={()=> setQuantity(quantity -1)}>diminuir</button>
        </div>
    );
}
 
export default SmartCounter;