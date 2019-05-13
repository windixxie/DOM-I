const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//////////////nav/////////////
const allNavItems = document.querySelectorAll('nav a');
for(let i=0; i < allNavItems.length; i++) {
  allNavItems[i].textContent = siteContent['nav'][`nav-item-${i + 1}`]
  allNavItems[i].style.color = "green"
}

const navAll = document.querySelector('nav a')

const nav = document.querySelector('nav')
const backItem = document.createElement('a')
backItem.textContent = "Hi THERE"
nav.appendChild(backItem)
backItem.style.color = "green"

const frontItem = document.createElement('a')
frontItem.textContent = "HI LOL"
nav.prepend(frontItem)
frontItem.style.color = "green"

///////////////img/////////////////
const jumboImg = document.getElementById('cta-img');
jumboImg.setAttribute('src', siteContent["cta"]["img-src"])

const middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

////////////main content//////////////////
const headText = document.querySelector('.cta-text h1');
headText.innerHTML = siteContent["cta"]["h1"]

const headTextButton = document.querySelector('.cta-text h1 + button');
headTextButton.textContent = siteContent["cta"]["button"]

const featuresTitle = document.querySelector('.text-content:nth-child(1) h4');
featuresTitle.textContent = siteContent["main-content"]["features-h4"]

const featuresContent = document.querySelector('.text-content:nth-child(1) p');
featuresContent.textContent = siteContent["main-content"]["features-content"]

const aboutTitle = document.querySelector('.text-content:nth-child(2) h4');
aboutTitle.textContent = siteContent["main-content"]["about-h4"]

const aboutContent = document.querySelector('.text-content:nth-child(2) p');
aboutContent.textContent = siteContent["main-content"]["about-content"]

const bottomContent = document.querySelector('.bottom-content');

const servicesTitle = document.querySelector('.text-content:nth-child(3) h4');
servicesTitle.textContent = siteContent["main-content"]["services-h4"]

const servicesContent = document.querySelector('.text-content:nth-child(3) p');
servicesContent.textContent = siteContent["main-content"]["services-content"]

const productDiv = document.createElement('div')
productDiv.className = "text-content"
bottomContent.appendChild(productDiv)

const newProduct = document.createElement('h4')
newProduct.textContent = siteContent["main-content"]["product-h4"]

productDiv.appendChild(newProduct)

const newProductContent = document.createElement('p');
newProductContent.textContent = siteContent["main-content"]["product-content"]

productDiv.appendChild(newProductContent)

const visionDiv = document.createElement('div')
visionDiv.className = "text-content"
bottomContent.appendChild(visionDiv)

const newVision = document.createElement('h4')
newVision.textContent = siteContent["main-content"]["vision-h4"]

visionDiv.appendChild(newVision)

const newVisionContent = document.createElement('p');
newVisionContent.textContent = siteContent["main-content"]["vision-content"]

visionDiv.appendChild(newVisionContent)

const contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = siteContent["contact"]["contact-h4"]

const contacta1 = document.querySelector('.contact p:nth-child(2)');
contacta1.textContent = siteContent["contact"]["address"]

const contacta2 = document.querySelector('.contact p:nth-child(3)');
contacta2.textContent = siteContent["contact"]["phone"]

const contacta3 = document.querySelector('.contact p:nth-child(4)');
contacta3.textContent = siteContent["contact"]["email"]

////////////////footer///////////////////////
const footer = document.querySelector('footer p');
footer.textContent = siteContent["footer"]["copyright"]