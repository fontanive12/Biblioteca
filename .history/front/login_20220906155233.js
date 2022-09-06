const checkTable = () => {
    axios.get(`${ENDPOINT}/users`)
        .then((response) => {
            if (response.status === 200) {
                const data = response.data;

                const input1 = document.querySelector("#userLogin");
                const userLogin = input1.value;

                const input2 = document.querySelector("#passwordLogin");
                const passwordLogin = input2.value;

                if (userLogin === data.email && passwordLogin === data.password) {
                    // const ok = `<script src="initialPage.html"></script>`
                    alert('oi')
                } else {
                    alert('error')
                }
            }
        })
};


