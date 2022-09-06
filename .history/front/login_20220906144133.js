const checkTable = () => {
    axios.get(`${ENDPOINT}/users`)
        .then((response) => {
            if (response.status === 200) {
                const data = response.data;
                var trHTML = '';
                data.forEach(element => {
                    trHTML += '<tr>';
                    trHTML += '<td>' + element.id + '</td>';
                    trHTML += '<td>' + element.email + '</td>';
                    trHTML += '<td>' + element.password + '</td>';
                    trHTML += "</tr>";
                });
            }
        })
};





function login() {
    const input1 = document.querySelector("#userLogin");
    const userLogin = input1.value;

    const input2 = document.querySelector("#passwordLogin");
    const passwordLogin = input2.value;

    if (userLogin === user.email && passwordLogin === user.password) {
        const ok = `<script src="initialPage.html"></script>`
    } else {
        alert('error')
    }
}