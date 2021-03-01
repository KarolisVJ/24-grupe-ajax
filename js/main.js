function ajax() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log(this.readyState);

        if (this.readyState === 4 && this.status === 200) {
            const response = this.responseText;

            const obj = JSON.parse(response);

            console.log(obj);
        }
    };
    xhttp.open("GET", "https://front-end-by-rimantas.github.io/24-grupe-ajax/api/rikis.json", true);
    xhttp.send();
}


ajax()