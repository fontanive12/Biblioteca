const ENDPOINT = "http://localhost:3000";

const loadTable = () => {
    axios.get(`${ENDPOINT}/states`)
        .then((response) => {
            if (response.status === 200) {
                const data = response.data;
                var trHTML = '';
                data.forEach(element => {
                    trHTML += '<tr>';
                    trHTML += '<td>' + element.id + '</td>';
                    trHTML += '<td>' + element.name + '</td>';
                    trHTML += '<td>' + element.province + '</td>';
                    trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox(' + element.id + ')">Edit</button>';
                    trHTML += '<button type="button" class="btn btn-outline-danger" onclick="stateDelete(' + element.id + ')">Del</button></td>';
                    trHTML += "</tr>";
                });
                document.getElementById("mytable").innerHTML = trHTML;
            }
        })
};

loadTable();

const stateCreate = () => {
    const name = document.getElementById("name").value;
    const province = document.getElementById("province").value;

    axios.post(`${ENDPOINT}/states`, {
        name: name,
        province: province,
    })
        .then((response) => {
            Swal.fire(`User ${response.data.name} created`);
            loadTable();
        }, (error) => {
            Swal.fire(`Error to create state: ${error.response.data.error} `)
                .then(() => {
                    showStateCreateBox();
                })
        });
}

const getUser = (id) => {
    return axios.get(`${ENDPOINT}/states/` + id);
}

const userEdit = () => {
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const province = document.getElementById("province").value;

    axios.put(`${ENDPOINT}/states/` + id, {
        name: name,
        province: province,
    })
        .then((response) => {
            Swal.fire(`User ${response.data.name} updated`);
            loadTable();
        }, (error) => {
            Swal.fire(`Error to update state: ${error.response.data.error} `)
                .then(() => {
                    showUserEditBox(id);
                })
        });
}

const stateDelete = async (id) => {
    const state = await getUser(id);
    const data = state.data;
    axios.delete(`${ENDPOINT}/states/` + id)
        .then((response) => {
            Swal.fire(`User ${data.name} deleted`);
            loadTable();
        }, (error) => {
            Swal.fire(`Error to delete state: ${error.response.data.error} `);
            loadTable();
        });
};

const showStateCreateBox = () => {
    Swal.fire({
        title: 'Create state',
        html:
            '<input id="id" type="hidden">' +
            '<input id="name" class="swal2-input" placeholder="Name">' +
            '<input id="province" class="swal2-input" placeholder="Province">',
        focusConfirm: false,
        showCancelButton: true,
        preConfirm: () => {
            stateCreate();
        }
    });
}

const showUserEditBox = async (id) => {
    const state = await getUser(id);
    const data = state.data;
    Swal.fire({
        title: 'Edit User',
        html:
            '<input id="id" type="hidden" value=' + data.id + '>' +
            '<input id="name" class="swal2-input" placeholder="Name" value="' + data.name + '">' +
            '<input id="province" class="swal2-input" placeholder="Province" value="' + data.province + '">',
        focusConfirm: false,
        showCancelButton: true,
        preConfirm: () => {
            userEdit();
        }
    });

}


// const ENDPOINT = "http://localhost:3000";

// const loadTable = () => {
//     axios.get(`${ENDPOINT}/states`)
//         .then((response) => {
//             if (response.status === 200) {
//                 const data = response.data;
//                 var trHTML = '';
//                 data.forEach(element => {
//                     trHTML += '<tr>';
//                     trHTML += '<td>' + element.id + '</td>';
//                     trHTML += '<td>' + element.name + '</td>';
//                     trHTML += '<td>' + element.province + '</td>';
//                     trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showCategoryEditBox(' + element.id + ')">Edit</button>';
//                     trHTML += '<button type="button" class="btn btn-outline-danger" onclick="categoryDelete(' + element.id + ')">Del</button></td>';
//                     trHTML += "</tr>";
//                 });
//                 document.getElementById("mytable").innerHTML = trHTML;
//             }
//         })
// };

// loadTable();

// const categoryCreate = () => {
//     const name = document.getElementById("name").value;
//     const province = document.getElementById("province").value;
//     axios.post(`${ENDPOINT}/states`, {
//         description: description,
//     })
//         .then((response) => {
//             Swal.fire(`Category ${response.data.description} created`);
//             loadTable();
//         }, (error) => {
//             Swal.fire(`Error to create category: ${error.response.data.error} `)
//                 .then(() => {
//                     showCategoryCreateBox();
//                 })
//         });
// }

// const getCategory = (id) => {
//     return axios.get(`${ENDPOINT}/categories/` + id);
// }

// const categoryEdit = () => {
//     const id = document.getElementById("id").value;
//     const description = document.getElementById("description").value;

//     axios.put(`${ENDPOINT}/categories/` + id, {
//         description: description,
//     })
//         .then((response) => {
//             Swal.fire(`Category ${response.data.description} updated`);
//             loadTable();
//         }, (error) => {
//             Swal.fire(`Error to update category: ${error.response.data.error} `)
//                 .then(() => {
//                     showCategoryEditBox(id);
//                 })
//         });
// }

// const categoryDelete = async (id) => {
//     const category = await getCategory(id);
//     const data = category.data;
//     axios.delete(`${ENDPOINT}/categories/` + id)
//         .then((response) => {
//             Swal.fire(`category ${data.description} deleted`);
//             loadTable();
//         }, (error) => {
//             Swal.fire(`Error to delete category: ${error.response.data.error} `);
//             loadTable();
//         });
// };

// const showCategoryCreateBox = () => {
//     Swal.fire({
//         title: 'Create category',
//         html:
//             '<input id="id" type="hidden">' +
//             '<input id="name" class="swal2-input" placeholder="name">' +
//             '<input id="province" class="swal2-input" placeholder="province">',
//         focusConfirm: false,
//         showCancelButton: true,
//         preConfirm: () => {
//             categoryCreate();
//         }
//     });
// }

// const showCategoryEditBox = async (id) => {
//     const category = await getCategory(id);
//     const data = category.data;
//     Swal.fire({
//         title: 'Edit category',
//         html:
//             '<input id="id" type="hidden" value=' + data.id + '>' +
//             '<input id="description" class="swal2-input" placeholder="description" value="' + data.description + '">',
//         focusConfirm: false,
//         showCancelButton: true,
//         preConfirm: () => {
//             categoryEdit();
//         }
//     });

// }