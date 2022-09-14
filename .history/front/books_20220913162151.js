
// const ENDPOINT = "http://177.44.248.42/bookstore";
const ENDPOINT = "http://localhost:3000";


const getCategories = () => {
    return axios.get(`${ENDPOINT}/categories`);
}

const getPublisher = () => {
    return axios.get(`${ENDPOINT}/publishers`);
}

const getFormat = () => {
    return axios.get(`${ENDPOINT}/formats`);
}

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
                    trHTML += '<td>' + element.value + '</td>';
                    trHTML += '<td>' + element.Publisher.name + '</td>';
                    trHTML += '<td>' + element.Category.description + '</td>';
                    trHTML += '<td>' + element.Format.description + '</td>';

                    trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showBookEditBox(' + element.id + ')"><img src="/images/edit.png"></button>';
                    trHTML += '<button type="button" class="btn btn-outline-danger" onclick="bookDelete(' + element.id + ')"><img src="/images/delete.png"></button></td>';
                    trHTML += "</tr>";
                });
                document.getElementById("mytable").innerHTML = trHTML;
            }
        })
};

loadTable();

const loadCategories = async (id) => {
    const categories = await getCategories();
    const data = categories.data;
    let select = '';

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        console.log(element)
        if (id === element.id) {
            select += `<option value="${element.id}" selected>${element.name}</option>`
        } else {
            select += `<option value ="${element.id}">${element.description}</option>`
        }
    }

    document.getElementById("loadCategories").innerHTML += select;
}


loadCategories();

const createCategoriesCombo = async (id) => {
    const categories = await getCategories();
    const data = categories.data;
    let select = '<select class="swal2-input" id="categories_id">';

    select += `<option value = "0" selected disabled>Select a category</option>`

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (id === element.id) {
            select += `<option value="${element.id}" selected>${element.name}</option>`
        } else {
            select += `<option value ="${element.id}">${element.description}</option>`
        }
    }
    select += '</select>';
    return select;
}

const createPublishersCombo = async (id) => {
    const states = await getPublisher();
    const data = states.data;
    let select = '<select class="swal2-input" id="publisher_id">';

    select += `<option value = "0" selected disabled>Select a publisher</option>`

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (id === element.id) {
            select += `<option value="${element.id}" selected>${element.name}</option>`
        } else {
            select += `<option value ="${element.id}">${element.name}</option>`
        }
    }
    select += '</select>';
    return select;
}

const createFormatsCombo = async (id) => {
    const states = await getFormat();
    const data = states.data;
    let select = '<select class="swal2-input" id="format_id">';

    select += `<option value = "0" selected disabled>Select a format</option>`

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        if (id === element.id) {
            select += `<option value="${element.id}" selected>${element.name}</option>`
        } else {
            select += `<option value ="${element.id}">${element.description}</option>`
        }
    }
    select += '</select>';
    return select;
}


// const listingUsers = () => {
//     const input1 = document.querySelector("#listingUsers");
//     const listingUsers = input1.value;

//     axios.get(`${ENDPOINT}/books?title=` + listingUsers)
//         .then((response) => {
//             if (response.status === 200) {
//                 const data = response.data;
//                 var trHTML = '';

//                 console.log(data);

//                     data.forEach(element => {
//                         trHTML += '<tr>';
//                         trHTML += '<td>' + element.id + '</td>';
//                         trHTML += '<td>' + element.title + '</td>';
//                         trHTML += '<td>' + element.author + '</td>';
//                         trHTML += '<td>' + element.publication_year + '</td>';
//                         trHTML += '<td>' + element.pages + '</td>';
//                         trHTML += '<td>' + element.Publisher.name + '</td>';
//                         trHTML += '<td>' + element.Category.description + '</td>';
//                         trHTML += '<td>' + element.Format.description + '</td>';

//                         trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showBookEditBox(' + element.id + ')"><img src="/images/edit.png"></button>';
//                         trHTML += '<button type="button" class="btn btn-outline-danger" onclick="bookDelete(' + element.id + ')"><img src="/images/delete.png"></button></td>';
//                         trHTML += "</tr>";
//                     });
//                     document.getElementById("mytable").innerHTML = trHTML;
//             }
//         })
// };


const listingTitle = () => {
    const input1 = document.querySelector("#listingTitle");
    const listingTitle = input1.value;

    axios.get(`${ENDPOINT}/books?title=` + listingTitle)
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
                    trHTML += '<td>' + element.value + '</td>';
                    trHTML += '<td>' + element.Publisher.name + '</td>';
                    trHTML += '<td>' + element.Category.description + '</td>';
                    trHTML += '<td>' + element.Format.description + '</td>';

                    trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showBookEditBox(' + element.id + ')"><img src="/images/edit.png"></button>';
                    trHTML += '<button type="button" class="btn btn-outline-danger" onclick="bookDelete(' + element.id + ')"><img src="/images/delete.png"></button></td>';
                    trHTML += "</tr>";
                });
                document.getElementById("mytable").innerHTML = trHTML;
            }
        })
};

const listingCategories = () => {
    const input1 = document.querySelector("#listingCategories");
    const listingCategories = input1.value;


    axios.get(`${ENDPOINT}/books?Categorydescription=` + listingCategories)
        .then((response) => {
            if (response.status === 200) {
                const data = response.data;
                var trHTML = '';


                console.log(data);

                data.forEach(element => {
                    trHTML += '<tr>';
                    trHTML += '<td>' + element.id + '</td>';
                    trHTML += '<td>' + element.title + '</td>';
                    trHTML += '<td>' + element.author + '</td>';
                    trHTML += '<td>' + element.publication_year + '</td>';
                    trHTML += '<td>' + element.pages + '</td>';
                    trHTML += '<td>' + element.Publisher.name + '</td>';
                    trHTML += '<td>' + element.Category.description + '</td>';
                    trHTML += '<td>' + element.Format.description + '</td>';

                    trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showBookEditBox(' + element.id + ')"><img src="/images/edit.png"></button>';
                    trHTML += '<button type="button" class="btn btn-outline-danger" onclick="bookDelete(' + element.id + ')"><img src="/images/delete.png"></button></td>';
                    trHTML += "</tr>";
                });
                document.getElementById("mytable").innerHTML = trHTML;
            }
        })
};






const getBookTitle = (id) => {
    return axios.get(`${ENDPOINT}/books/` + id);
}

const getBookCategory = (id) => {
    return axios.get(`${ENDPOINT}/books/` + id);
}


const bookCreate = () => {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const publication_year = document.getElementById("publication_year").value;
    const pages = document.getElementById("pages").value;
    const value = document.getElementById("value").value;
    const categories_id = document.getElementById("categories_id").value;
    const publisher_id = document.getElementById("publisher_id").value;
    const format_id = document.getElementById("format_id").value;

    axios.post(`${ENDPOINT}/books`, {
        title: title,
        author: author,
        publication_year: publication_year,
        pages: pages,
        value: value,
        CategoryId: categories_id,
        PublisherId: publisher_id,
        FormatId: format_id,
    })
        .then((response) => {
            Swal.fire(`Book ${response.data.title} created`);
            loadTable();
        }, (error) => {
            Swal.fire(`Error to create book: ${error.response.data.error} `)
                .then(() => {
                    showBookCreateBox();
                })
        });
}

const getBook = (id) => {
    return axios.get(`${ENDPOINT}/books/` + id);
}

const bookEdit = () => {
    const id = document.getElementById("id").value;
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const publication_year = document.getElementById("publication_year").value;
    const pages = document.getElementById("pages").value;
    const value = document.getElementById("value").value;
    const categories_id = document.getElementById("categories_id").value;
    const publisher_id = document.getElementById("publisher_id").value;
    const format_id = document.getElementById("format_id").value;

    axios.put(`${ENDPOINT}/books/` + id, {
        title: title,
        author: author,
        publication_year: publication_year,
        pages: pages,
        value: value,
        CategoryId: categories_id,
        PublisherId: publisher_id,
        FormatId: format_id,
    })
        .then((response) => {
            Swal.fire(`Book ${response.data.title} updated`);
            loadTable();
        }, (error) => {
            Swal.fire(`Error to update book: ${error.response.data.error} `)
                .then(() => {
                    showBookEditBox(id);
                })
        });
}

const bookDelete = async (id) => {
    const book = await getBook(id);
    const data = book.data;
    axios.delete(`${ENDPOINT}/books/` + id)
        .then((response) => {
            Swal.fire(`Book ${data.title} deleted`);
            loadTable();
        }, (error) => {
            Swal.fire(`Error to delete book: ${error.response.data.error} `);
            loadTable();
        });
};

const showBookCreateBox = async () => {
    const categories = await createCategoriesCombo();
    const publishers = await createPublishersCombo();
    const formats = await createFormatsCombo();
    Swal.fire({
        title: 'Create book',
        html:
            '<input id="id" type="hidden">' +
            '<input id="title" class="swal2-input" placeholder="Title">' +
            '<input id="author" class="swal2-input" placeholder="Author">' +
            '<input id="publication_year" class="swal2-input" placeholder="Publication year">' +
            '<input id="pages" class="swal2-input" placeholder="Pages">' +
            '<input id="value" class="swal2-input" placeholder="Value">' +
            categories + publishers + formats,
        focusConfirm: false,
        showCancelButton: true,
        preConfirm: () => {
            bookCreate();
        }
    });
}

const showBookEditBox = async (id) => {
    const categories = await createCategoriesCombo();
    const publishers = await createPublishersCombo();
    const formats = await createFormatsCombo();
    const book = await getBook(id);
    const data = book.data;
    Swal.fire({
        title: 'Edit book',
        html:
            '<input id="id" type="hidden" value=' + data.id + '>' +
            '<input id="title" class="swal2-input" placeholder="Title" value="' + data.title + '">' +
            '<input id="author" class="swal2-input" placeholder="Author" value="' + data.author + '">' +
            '<input id="publication_year" class="swal2-input" placeholder="Publication year" value="' + data.publication_year + '">' +
            '<input id="pages" class="swal2-input" placeholder="Pages" value="' + data.pages + '">' +
            '<input id="value" class="swal2-input" placeholder="Value" value="' + data.value + '">' +
            categories + publishers + formats,
        focusConfirm: false,
        showCancelButton: true,
        preConfirm: () => {
            bookEdit();
        }
    });

}