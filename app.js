const ulTag = document.querySelector("ul");
let totalPages = 20;

function element(totalPages, page) {
    let liTag = "";
    
    // Clamp page within valid range
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;

    let beforePages = page - 1;
    let afterPages = page + 1;

    // Prev button
    if (page > 1) {
        liTag += `
        <li class="btn prev" onclick="element(${totalPages}, ${page - 1})">
            <span><i class="fas fa-angle-left"></i> Prev</span>
        </li>`;
    }

    // Show first page + dots
    if (page > 2) {
        liTag += `
        <li class="numb" onclick="element(${totalPages}, 1)">
            <span>1</span>
        </li>`;
    }
    if (page > 3) {
        liTag += `<li class="dots"><span>...</span></li>`;
    }

    // Adjust page window near the edges
    if (page === totalPages) beforePages -= 2;
    else if (page === totalPages - 1) beforePages -= 1;

    if (page === 1) afterPages += 2;
    else if (page === 2) afterPages += 1;

    // Clamp again
    if (beforePages < 1) beforePages = 1;
    if (afterPages > totalPages) afterPages = totalPages;

    // Middle numbered pages
    for (let i = beforePages; i <= afterPages; i++) {
        let active = i === page ? "active" : "";
        liTag += `
        <li class="numb ${active}" onclick="element(${totalPages}, ${i})">
            <span>${i}</span>
        </li>`;
    }

    // Dots + last page
    if (page < totalPages - 2) {
        liTag += `<li class="dots"><span>...</span></li>`;
    }
    if (page < totalPages - 1) {
        liTag += `
        <li class="numb" onclick="element(${totalPages}, ${totalPages})">
            <span>${totalPages}</span>
        </li>`;
    }

    // Next button
    if (page < totalPages) {
        liTag += `
        <li class="btn next" onclick="element(${totalPages}, ${page + 1})">
            <span>Next <i class="fas fa-angle-right"></i></span>
        </li>`;
    }

    ulTag.innerHTML = liTag;
}

// Initial call
element(totalPages, 5);
