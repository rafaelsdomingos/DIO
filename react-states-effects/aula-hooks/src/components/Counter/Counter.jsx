function Counter(){

    let quantity = 0;

    function upQuantity(){
        quantity += 1;
        document.getElementById("counter-box").innerHTML = quantity;
        console.log(quantity)
    }

    function downQuantity(){
        quantity -= 1;
        document.getElementById("counter-box").innerHTML = quantity;
        console.log(quantity)
    }

    return(
        <>
            <h1 id="counter-box">{quantity}</h1>
            <button onClick={upQuantity}>aumentar</button>
            <button onClick={downQuantity}>diminuir</button>
        </>
       
    )
}
export default Counter;