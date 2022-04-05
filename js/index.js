const url = "https://api.adviceslip.com/advice"

let onlineData;


const apiCall = () => {
    axios.get(url).then(res => {
        // console.log(res.data.slip)
        onlineData = res.data;
        writes();
    })
}

// apiCall();

const writes = () => {
    wholeDiv.innerHTML = `<p class="colors text-center h5 my-3"> ADVICE #${onlineData.slip.id} </p>`;
    wholeDiv.innerHTML += `<div class="text-center text-white m-2"><p class="font-28">"${onlineData.slip.advice}"</p></div>`;
    // wholeDiv.innerHTML += `<img src="../images/pattern-divider-desktop.svg" className="foot"/> <br/>`;
}


window.onload = () => {
    apiCall();
    // writes();
}


// writes();