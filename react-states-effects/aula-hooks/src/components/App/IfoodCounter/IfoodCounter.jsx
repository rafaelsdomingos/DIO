import React, {useState, useEffect} from 'react'
import '../IfoodCounter/IfoodCounter.css'




const IfoodCounter = () => {

    

    const [value, setValue] = useState(1);
    const [buttonstyle, setButtonStyle] = useState("counter-button-active");

    //executa a função sempre que o valor de value for modificado
    useEffect(() => {
        document.getElementById("moeda").innerHTML = `R$ ${(9.99 * value).toFixed(2)}`
    }, [value])

    
    function down(){

        if( value <= 1){
            //mudar o css
            setButtonStyle("counter-button-minus-desactive")

        }

        if( value > 0){
            setValue(value -1)
        }
    }

    function up(){
        setValue(value + 1)
        setButtonStyle("counter-button-active")
    }

    return (  
        <div>
            <div className="counter-wrapper">
                <button
                    onClick={down}
                    className={buttonstyle}
                >
                    -
                </button>
                <p>{value}</p>
                <button
                    className='counter-button-active'
                    onClick={up}
                >
                    +
                </button
            
                >
                
            </div>
            <p id="moeda">R$ 9.00</p>
        </div>
    );
}
 
export default IfoodCounter;