const loadTable = () => {
    axios.get(`${ENDPOINT}/users`)
        .then((response) => {
            if (response.status === 200) {
                const data = response.data;
                var trHTML = '';
                data.forEach(element => {
                    trHTML += '<tr>';
                    trHTML += '<td>' + element.email + '</td>';
                    trHTML += '<td>' + element.password + '</td>';
                    trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showCityEditBox(' + element.id + ')">Edit</button>';
                    trHTML += '<button type="button" class="btn btn-outline-danger" onclick="cityDelete(' + element.id + ')">Del</button></td>';
                    trHTML += "</tr>";
                });
                document.getElementById("mytable").innerHTML = trHTML;
            }
        })
};

loadTable();



function login() {
    const input1 = document.querySelector("#userLogin");
    const userLogin = input1.value;

    const input2 = document.querySelector("#passwordLogin");
    const passwordLogin = input2.value;

    if(userLogin === user.email && passwordLogin === user.password) {
        const ok = `<script src="initialPage.html"></script>`
    }
}