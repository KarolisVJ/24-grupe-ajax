function ajax() {
    const xhttp = new XMLHttpRequest();
    console.log(xhttp);
    xhttp.onreadystatechange = function () {
        console.log(this.readyState);

        if (this.readyState === 4 && this.status === 200) {
            const response = this.responseText;
            console.log(this.responseText);
            const obj = JSON.parse(response);

            console.log(obj);
        }
    };
    xhttp.open("GET", '../api/response.json', true);
    xhttp.send();
}


ajax()