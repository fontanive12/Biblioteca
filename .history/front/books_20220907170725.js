// const ENDPOINT = "http://localhost:3000";

// const loadTable = () => {
//     axios.get(`${ENDPOINT}/books`)
//         .then((response) => {
//             if (response.status === 200) {
//                 const data = response.data;
//                 var trHTML = '';
//                 data.forEach(element => {
//                     trHTML += '<tr>';
//                     trHTML += '<td>' + element.id + '</td>';
//                     trHTML += '<td>' + element.title + '</td>';
//                     trHTML += '<td>' + element.author + '</td>';
//                     trHTML += '<td>' + element.publication_year + '</td>';
//                     trHTML += '<td>' + element.pages + '</td>';
//                     trHTML += '<td>' + element.Category.description + '</td>';
//                     trHTML += '<td>' + element.Publisher.name + '</td>';
//                     trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showBookEditBox(' + element.id + ')">Edit</button>';
//                     trHTML += '<button type="button" class="btn btn-outline-danger" onclick="bookDelete(' + element.id + ')">Del</button></td>';
//                     trHTML += "</tr>";
//                 });
//                 document.getElementById("mytable").innerHTML = trHTML;
//             }
//         })
// };

// loadTable();

// const bookCreate = () => {
//     const title = document.getElementById("title").value;
//     const author = document.getElementById("author").value;
//     const publication_year = document.getElementById("publication_year").value;
//     const pages = document.getElementById("pages").value;
//     const categories_id = document.getElementById("categories_id").value;
//     const publisher_id = document.getElementById("publisher_id").value;


//     axios.post(`${ENDPOINT}/books`, {
//         title: title,
//         author: author,
//         publication_year: publication_year,
//         pages: pages,
//         categories_id: categories_id,
//         publisher_id: publisher_id,
//         CategoryId: categories_id,
//         PublisherId: publisher_id,
//     })
//         .then((response) => {
//             Swal.fire(`Book ${response.data.title} created`);
//             loadTable();
//         }, (error) => {
//             Swal.fire(`Error to create book: ${error.response.data.error} `)
//                 .then(() => {
//                     showBookCreateBox();
//                 })
//         });
// }

// const getBook = (id) => {
//     return axios.get(`${ENDPOINT}/books/` + id);
// }

// const bookEdit = () => {
//     const title = document.getElementById("title").value;
//     const author = document.getElementById("author").value;
//     const publication_year = document.getElementById("publication_year").value;
//     const pages = document.getElementById("pages").value;
//     const categories_id = document.getElementById("categories_id").value;
//     const publisher_id = document.getElementById("publisher_id").value;

//     axios.put(`${ENDPOINT}/books/` + id, {
//         title: title,
//         author: author,
//         publication_year: publication_year,
//         pages: pages,
//         CategoryId: categories_id,
//         PublisherId: publisher_id,
//     })
//         .then((response) => {
//             Swal.fire(`Book ${response.data.name} updated`);
//             loadTable();
//         }, (error) => {
//             Swal.fire(`Error to update book: ${error.response.data.error} `)
//                 .then(() => {
//                     showBookEditBox(id);
//                 })
//         });
// }

// const bookDelete = async (id) => {
//     const book = await getBook(id);
//     const data = book.data;
//     axios.delete(`${ENDPOINT}/books/` + id)
//         .then((response) => {
//             Swal.fire(`Book ${data.name} deleted`);
//             loadTable();
//         }, (error) => {
//             Swal.fire(`Error to delete book: ${error.response.data.error} `);
//             loadTable();
//         });
// };

// const showBookCreateBox = () => {
//     Swal.fire({
//         title: 'Create book',
//         html:
//             '<input id="id" type="hidden">' +
//             '<input id="title" class="swal2-input" placeholder="Title">' +
//             '<input id="author" class="swal2-input" placeholder="Author">' + 
//             '<input id="publication_year" class="swal2-input" placeholder="Publication year">' + 
//             '<input id="pages" class="swal2-input" placeholder="Pages">' + 
//             '<input id="categories_id" class="swal2-input" placeholder="Category">' + 
//             '<input id="publisher_id" class="swal2-input" placeholder="Publisher">',
//         focusConfirm: false,
//         showCancelButton: true,
//         preConfirm: () => {
//             bookCreate();
//         }
//     });
// }

// const showBookEditBox = async (id) => {
//     const book = await getBook(id);
//     const data = book.data;
//     Swal.fire({
//         title: 'Edit book',
//         html:
//             '<input id="id" type="hidden" value=' + data.id + '>' +
//             '<input id="title" class="swal2-input" placeholder="Title" value="' + data.title + '">' +
//             '<input id="author" class="swal2-input" placeholder="Author" value="' + data.author + '">' + 
//             '<input id="publication_year" class="swal2-input" placeholder="Publication year" value="' + data.publication_year + '">' +
//             '<input id="pages" class="swal2-input" placeholder="Pages" value="' + data.pages + '">' +
//             '<input id="categories_id" class="swal2-input" placeholder="Categories" value="' + data.CategoryId + '">' +
//             '<input id="publisher_id" class="swal2-input" placeholder="Publisher" value="' + data.PublisherId + '">',
//         focusConfirm: false,
//         showCancelButton: true,
//         preConfirm: () => {
//             bookEdit();
//         }
//     });

// }

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
                    trHTML += '<td>' + element.Category.description + '</td>';
                    // trHTML += '<td>' + element.publisher_id + '</td>';
                    trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showBookEditBox(' + element.id + ')">Edit</button>';
                    trHTML += '<button type="button" class="btn btn-outline-danger" onclick="bookDelete(' + element.id + ')">Del</button></td>';
                    trHTML += "</tr>";
                });
                document.getElementById("mytable").innerHTML = trHTML;
            }
        })
};

loadTable();

const bookCreate = () => {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const publication_year = document.getElementById("publication_year").value;
    const pages = document.getElementById("pages").value;
    const categories_id = document.getElementById("categories_id").value;
    // const publisher_id = document.getElementById("publisher_id").value;


    axios.post(`${ENDPOINT}/books`, {
        title: title,
        author: author,
        publication_year: publication_year,
        pages: pages,
        CategoryId: categories_id,
        // publisher_id: publisher_id,
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
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const publication_year = document.getElementById("publication_year").value;
    const pages = document.getElementById("pages").value;
    const categories_id = document.getElementById("categories_id").value;
    // const publisher_id = document.getElementById("publisher_id").value;

    axios.put(`${ENDPOINT}/books/` + id, {
        title: title,
        author: author,
        publication_year: publication_year,
        pages: pages,
        CategoryId: categories_id,
        // publisher_id: publisher_id,
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

const showBookCreateBox = () => {
    Swal.fire({
        title: 'Create book',
        html:
            '<input id="id" type="hidden">' +
            '<input id="title" class="swal2-input" placeholder="Title">' +
            '<input id="author" class="swal2-input" placeholder="Author">' + 
            '<input id="publication_year" class="swal2-input" placeholder="Publication year">' + 
            '<input id="pages" class="swal2-input" placeholder="Pages">' + 
            '<input id="categories_id" class="swal2-input" placeholder="Category">' ,
            // '<input id="publisher_id" class="swal2-input" placeholder="Publisher">',
        focusConfirm: false,
        showCancelButton: true,
        preConfirm: () => {
            bookCreate();
        }
    });
}

const showBookEditBox = async (id) => {
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
            '<input id="categories_id" class="swal2-input" placeholder="Categories" value="' + data.CategoryId + '">' ,
            // '<input id="publisher_id" class="swal2-input" placeholder="Publisher" value="' + data.publisher_id + '">',
        focusConfirm: false,
        showCancelButton: true,
        preConfirm: () => {
            bookEdit();
        }
    });

}