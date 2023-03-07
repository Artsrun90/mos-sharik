const data = [
      {item: {
          id: 1,
          image: "assets/images/no-image.png",
          price: " 1300 р.",
          title: "ВОЗДУШНЫЕ ШАРЫ НА ДЕНЬ РОЖДЕНИЯ ВОЗДУШНЫЕ ШАРЫ"
        }
      },
      {item: {
          id: 2,
          image: "assets/images/no-image.png",
          price: " 4 090 р.",
          title: "КОМПОЗИЦИЯ ИЗ ВОЗДУШНЫХ ШАРОВ С ГЕЛИЕМ НА ДЕНЬ"
        }
      },
      {item: {
          id: 3,
          image: "assets/images/no-image.png",
          price: " 2 590 р.",
          title: "КОМПОЗИЦИЯ ИЗ ВОЗДУШНЫХ ШАРОВ НА 2 ГОДА"
        }
      }
    ]

function openMobileMenu() {
    openMenu("mobile-menu");
}

function closeMobileMenu() {
    closeMenu("mobile-menu");
}

function openMiddleMenu() {
    openMenu("middle-menu-section");
}

function closeMiddleMenu() {
    closeMenu("middle-menu-section");
}

function openMenu(element) {
    document.getElementById(element).style.display = "block";
}
function closeMenu(element) {
    document.getElementById(element).style.display = "none";
}

function search() {
    let windowSize = window.screen.width;
    let searchEl = document.getElementById("search-input");
    let width = window.getComputedStyle(searchEl).width;
    if (windowSize <= 640) {
        if (width == "0px") {
            document.getElementById("phone-info").style.display = "none";
            document.getElementById("header-search").style.width = "212px";
            searchEl.style.width = "158px";            
        } else {
            /*Do search call*/
        }
    }
}

function callAs() {
    document.getElementById("popup-head").style.display = "flex";
    
}

function closePopup() {
    let closeElCall = document.getElementById("popup-head");
    let closeElSuccess = document.getElementById("popup-head-success");
    if (window.getComputedStyle(closeElCall).display == "flex") {
        closeElCall.style.display = "none";
    }
    if (window.getComputedStyle(closeElSuccess).display == "flex") {
        closeElSuccess.style.display = "none";
    }
}

function autocomplate() {
    let value = document.getElementById("search-input").value.replace(/\s/g, '');
    let ul = document.getElementById("autocomplete-items-list");
    if (value) {
        items = getItems(value);
        if (items) {
            ul.innerHTML = '';
            let elements = '';
            for (let i = 0; i < items.length; i++) {
                elements += `<a href=""><li id="search-item-price-${items[i].item.id}"><div class="search-item-price">
                <img src="${items[i].item.image}" alt="">
                <p>${items[i].item.price}</p>
                </div>
                <p class="search-item-title">${items[i].item.title}</p>
                </li>
                </a>`
                
            }
            if (elements) {
                document.getElementById("autocomplete").style.display = "flex";
                ul.insertAdjacentHTML( 'beforeend', elements );                
            }
        }
    } else {
        ul.innerHTML = '';
        document.getElementById("autocomplete").style.display = "none";
    }
}

function getItems(query) {
    let searchedData = [];
    if (query) {
        searchedData = data.filter(item => item.item.title.replace(/\s/g, '').toLowerCase().includes(query.toLowerCase())); 
    }
    return searchedData;
}

function sendMessage() {
    if (true) {
        document.getElementById("popup-head").style.display = "none";
        document.getElementById("popup-head-success").style.display = "flex";
    }    
}

function closeCatalog() {
    let ul = document.getElementById("ctalog-list");
    let display = window.getComputedStyle(ul).display;
    if (display == "flex") {
        document.getElementById("arrow").style.transform = "rotate(-225deg)";
        document.getElementById("arrow").style.top = "0px";
        ul.style.display = "none";
    } else {
        document.getElementById("arrow").style.transform = "rotate(-45deg)";
        document.getElementById("arrow").style.top = "8px";
        ul.style.display = "flex";        
    }
}

document.onclick = function(e){
    let searchEl = document.getElementById("search-input");
    let width = window.getComputedStyle(searchEl).width;
    let autocompleteEl = document.getElementById("autocomplete");
    let autocompleteDisplay = window.getComputedStyle(autocompleteEl).display;
    if (width == "158px" && !["search-icon", "search", "search-input"].includes(e.target.id)) {
        searchEl.style.width = "0px"; 
        document.getElementById("header-search").style.width = "54px";
        setTimeout(() => {
            document.getElementById("phone-info").style.display = "flex";
            
        }, 300);
    }
    if (!["search-icon", "search", "search-input"].includes(e.target.id) && autocompleteDisplay == 'flex') {
        autocompleteEl.style.display = "none";
    }
    
}