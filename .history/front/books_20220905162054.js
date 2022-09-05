const ENDPOINT = "http://localhost:3000";

const loadTable = () => {
    axios.get(`${ENDPOINT}/books`)
        .then((response) => {
            if (response.status === 200) {
                const data = response.data;
                var trHTML = '';
                data.forEach(element => {
                    trHTML += '<tr>';
                    trHTML += '<td>' + element.id + '</td>';
                    trHTML += '<td>' + element.title + '</td>';
                    trHTML += '<td>' + element.author + '</td>';
                    trHTML += '<td>' + element.publication_year + '</td>';
                    trHTML += '<td>' + element.pages + '</td>';
                    trHTML += '<td>' + element.categories_id + '</td>';
                    trHTML += '<td>' + element.publisher_id + '</td>';
                    trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showCityEditBox(' + element.id + ')">Edit</button>';
                    trHTML += '<button type="button" class="btn btn-outline-danger" onclick="cityDelete(' + element.id + ')">Del</button></td>';
                    trHTML += "</tr>";
                });
                document.getElementById("mytable").innerHTML = trHTML;
            }
        })
};

loadTable();

const cityCreate = () => {
    const name = document.getElementById("name").value;
    const states_id = document.getElementById("states_id").value;

    axios.post(`${ENDPOINT}/books`, {
        name: name,
        states_id: states_id,
    })
        .then((response) => {
            Swal.fire(`City ${response.data.name} created`);
            loadTable();
        }, (error) => {
            Swal.fire(`Error to create city: ${error.response.data.error} `)
                .then(() => {
                    showCityCreateBox();
                })
        });
}

const getCity = (id) => {
    return axios.get(`${ENDPOINT}/books/` + id);
}

const cityEdit = () => {
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const states_id = document.getElementById("states_id").value;

    axios.put(`${ENDPOINT}/books/` + id, {
        name: name,
        states_id: states_id,
    })
        .then((response) => {
            Swal.fire(`City ${response.data.name} updated`);
            loadTable();
        }, (error) => {
            Swal.fire(`Error to update book: ${error.response.data.error} `)
                .then(() => {
                    showCityEditBox(id);
                })
        });
}

const cityDelete = async (id) => {
    const book = await getCity(id);
    const data = book.data;
    axios.delete(`${ENDPOINT}/books/` + id)
        .then((response) => {
            Swal.fire(`City ${data.name} deleted`);
            loadTable();
        }, (error) => {
            Swal.fire(`Error to delete book: ${error.response.data.error} `);
            loadTable();
        });
};

const showCityCreateBox = () => {
    Swal.fire({
        title: 'Create book',
        html:
            '<input id="id" type="hidden">' +
            '<input id="name" class="swal2-input" placeholder="Name">' +
            '<input id="states_id" class="swal2-input" placeholder="states_id">',
        focusConfirm: false,
        showCancelButton: true,
        preConfirm: () => {
            cityCreate();
        }
    });
}

const showCityEditBox = async (id) => {
    const book = await getCity(id);
    const data = book.data;
    Swal.fire({
        title: 'Edit book',
        html:
            '<input id="id" type="hidden" value=' + data.id + '>' +
            '<input id="title" class="swal2-input" placeholder="Title" value="' + data.title + '">' +
            '<input id="author" class="swal2-input" placeholder="Author" value="' + data.author + '">' + 
            '<input id="publication_year" class="swal2-input" placeholder="Publication year" value="' + data.publication_year + '">' +
            '<input id="pages" class="swal2-input" placeholder="Pages" value="' + data.pages + '">' +
            '<input id="categories_id" class="swal2-input" placeholder="Categories" value="' + data.categories_id + '">' +
            '<input id="states_id" class="swal2-input" placeholder="states_id" value="' + data.author + '">' +
            '<input id="states_id" class="swal2-input" placeholder="states_id" value="' + data.author + '">' +,
        focusConfirm: false,
        showCancelButton: true,
        preConfirm: () => {
            cityEdit();
        }
    });

}