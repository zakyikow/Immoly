// BOUTON HAMBURGER
// Sélectionnez l'élément du bouton hamburger
const mobileMenuButton = document.querySelector('[data-collapse-toggle="mobile-menu"]');

// Sélectionnez l'élément du menu mobile
const mobileMenu = document.getElementById('mobile-menu');

// Écoutez l'événement de clic sur le bouton hamburger
mobileMenuButton.addEventListener('click', () => {
  // Basculez la classe 'hidden' du menu mobile pour le montrer ou le cacher
  mobileMenu.classList.toggle('hidden');

  // Mettez à jour l'attribut 'aria-expanded' en fonction de l'état du menu mobile
  const isMobileMenuHidden = mobileMenu.classList.contains('hidden');
  mobileMenuButton.setAttribute('aria-expanded', isMobileMenuHidden ? 'false' : 'true');
});




// TABLEAU DATA IMAP
const search = document.querySelector('.input-group input'),
    table_rows = document.querySelectorAll('tbody tr'),
    table_headings = document.querySelectorAll('thead th');

// 1. Searching for specific data of HTML table
search.addEventListener('input', searchTable);

function searchTable() {
    table_rows.forEach((row, i) => {
        let table_data = row.textContent.toLowerCase(),
            search_data = search.value.toLowerCase();

        row.classList.toggle('hide', table_data.indexOf(search_data) < 0);
        row.style.setProperty('--delay', i / 25 + 's');
    })

    document.querySelectorAll('tbody tr:not(.hide)').forEach((visible_row, i) => {
        visible_row.style.backgroundColor = (i % 2 == 0) ? 'transparent' : '#0000000b';
    });
}

// 2. Sorting | Ordering data of HTML table
table_headings.forEach((head, i) => {
    let sort_asc = true;
    head.onclick = () => {
        table_headings.forEach(head => head.classList.remove('active'));
        head.classList.add('active');

        document.querySelectorAll('td').forEach(td => td.classList.remove('active'));
        table_rows.forEach(row => {
            row.querySelectorAll('td')[i].classList.add('active');
        })

        head.classList.toggle('asc', sort_asc);
        sort_asc = head.classList.contains('asc') ? false : true;

        sortTable(i, sort_asc);
    }
})

function sortTable(column, sort_asc) {
    [...table_rows].sort((a, b) => {
        let first_row = a.querySelectorAll('td')[column].textContent.toLowerCase(),
            second_row = b.querySelectorAll('td')[column].textContent.toLowerCase();

        // Convertir les valeurs en nombres si possible
        const num1 = parseFloat(first_row);
        const num2 = parseFloat(second_row);

        // Vérifier si les valeurs sont des nombres et les comparer
        if (!isNaN(num1) && !isNaN(num2)) {
            return sort_asc ? num1 - num2 : num2 - num1;
        } else {
            // Si ce ne sont pas des nombres, comparer comme des chaînes de caractères
            return sort_asc ? (first_row < second_row ? -1 : 1) : (first_row < second_row ? 1 : -1);
        }
    })
        .map(sorted_row => document.querySelector('tbody').appendChild(sorted_row));
}


