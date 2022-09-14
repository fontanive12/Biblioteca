const ENDPOINT = "http://177.44.248.42/bookstore";


const checkTable = () => {
    axios.get(`${ENDPOINT}/users`)
        .then((response) => {
            if (response.status === 200) {
                const data = response.data;

                const input1 = document.querySelector("#userLogin");
                const userLogin = input1.value;

                const input2 = document.querySelector("#passwordLogin");
                let passwordLogin = md5(input2.value);

                let validation = false;

                for (let i = 0; i < data.length; i++) {

                    if (userLogin === data[i].email && passwordLogin === data[i].password) {
                        validation = true;
                    }
                }

                if (validation === true) {
                    window.location.href = "initialPage.html";

                } else {
                    alert('error')
                }

                // console.log(data)
            }
        })
};


