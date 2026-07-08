const cryptoInput = document.getElementById("cryptoInput");
const cryptoInputSubmit = document.getElementById("cryptoInputSubmit");
let cryptoResult = document.getElementById("cryptoResult");

cryptoInputSubmit.addEventListener("click", async () => {

    let input = cryptoInput.value.toLowerCase();

    cryptoInput.value = "";

    if (input == "" || !isNaN(input)) {
        alert("Invalid Input !");
        return;
    }

    try {

        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${input}&vs_currencies=inr`);

        if (!response.ok) {
            throw new Error("Could Not Fetch Data");
        }

        let data = await response.json();

        let price = data[input].inr;

        let Currency = input.charAt().toUpperCase() + input.slice(1).toLowerCase();

        cryptoResult.textContent = `${Currency} prise Is = ₹ ${price.toLocaleString("hi-IN")}`;

    }

    catch (error) {
        console.error(error);
        alert("Not Found !");
        return;
    }

})