const ENDPOINT = "http://localhost:3000";

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
                    window.location.href="initialPage.html";
                    alert('oi')
                } else {
                    alert('error')
                    // window.location.href="initialPage.html";
                }

                console.log(data.email, data.password)
            }
        })
};


