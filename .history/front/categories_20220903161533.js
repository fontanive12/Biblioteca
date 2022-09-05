const ENDPOINT = "http://localhost:3000";

const loadTable = () => {
    axios.get(`${ENDPOINT}/categories`)
        .then((response) => {
            if (response.status === 200) {
                const data = response.data;
                var trHTML = '';
                data.forEach(element => {
                    trHTML += '<tr>';
                    trHTML += '<td>' + element.id + '</td>';
                    trHTML += '<td>' + element.description + '</td>';
                    trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showCategoryEditBox(' + element.id + ')">Edit</button>';
                    trHTML += '<button type="button" class="btn btn-outline-danger" onclick="userDelete(' + element.id + ')">Del</button></td>';
                    trHTML += "</tr>";
                });
                document.getElementById("mytable").innerHTML = trHTML;
            }
        })
};

loadTable();

const userCreate = () => {
    const description = document.getElementById("description").value;

    axios.post(`${ENDPOINT}/description`, {
        description: description
    })
        .then((response) => {
            Swal.fire(`Category ${response.data.description} created`);
            loadTable();
        }, (error) => {
            Swal.fire(`Error to create user: ${error.response.data.error} `)
                .then(() => {
                    showCategoryCreateBox();
                })
        });
}

const getCategory = (id) => {
    return axios.get(`${ENDPOINT}/description/` + id);
}

const userEdit = () => {
    const id = document.getElementById("id").value;
    const description = document.getElementById("description").value;

    axios.put(`${ENDPOINT}/description/` + id, {
        description: description
    })
        .then((response) => {
            Swal.fire(`Category ${response.data.description} updated`);
            loadTable();
        }, (error) => {
            Swal.fire(`Error to update category: ${error.response.data.error} `)
                .then(() => {
                    showUserEditBox(id);
                })
        });
}

const userDelete = async (id) => {
    const category = await getUser(id);
    const data = user.data;
    axios.delete(`${ENDPOINT}/users/` + id)
        .then((response) => {
            Swal.fire(`User ${data.description} deleted`);
            loadTable();
        }, (error) => {
            Swal.fire(`Error to delete user: ${error.response.data.error} `);
            loadTable();
        });
};

const showUserCreateBox = () => {
    Swal.fire({
        title: 'Create user',
        html:
            '<input id="id" type="hidden">' +
            '<input id="description" class="swal2-input" placeholder="description">',
        focusConfirm: false,
        showCancelButton: true,
        preConfirm: () => {
            userCreate();
        }
    });
}

const showUserEditBox = async (id) => {
    const user = await getUser(id);
    const data = user.data;
    Swal.fire({
        title: 'Edit User',
        html:
            '<input id="id" type="hidden" value=' + data.id + '>' +
            '<input id="description" class="swal2-input" placeholder="Description" value="' + data.description + '">',
        focusConfirm: false,
        showCancelButton: true,
        preConfirm: () => {
            userEdit();
        }
    });

}