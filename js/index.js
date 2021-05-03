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

//Create selectors to point your data into elements
const header = document.querySelector('header');
const links = document.querySelectorAll('nav a');
const logoImage = document.querySelector('#logo-img');
const ctaText = document.querySelector('h1');
const ctaButton = document.querySelector('button');
const ctaImage = document.querySelector('.cta-img');
const servicesLink = document.createElement('a');
const productLink = document.createElement('a');
const visionLink = document.createElement('a');
const featuresLink = document.createElement('a');
const aboutLink = document.createElement('a');
const contactLink = document.createElement('a');


//Using your selectors, update the content to match the example file.
ctaText.textContent = `DOM Is Awesome`;
ctaText.style = 'black';
ctaButton.textContent = "Get Started";
servicesLink.textContent = 'Services';
servicesLink.href = '#';
document.querySelector('nav').appendChild(servicesLink);
console.log(servicesLink);
productLink.textContent = 'Product';
productLink.href = '#';
document.querySelector('nav').appendChild(productLink);
visionLink.textContent = 'Vision';
visionLink.href = '#';
document.querySelector('nav').appendChild(visionLink);
featuresLink.textContent = 'Features';
featuresLink.href = '#';
document.querySelector('nav').appendChild(featuresLink);
aboutLink.textContent = 'About';
aboutLink.href = '#';
document.querySelector('nav').appendChild(aboutLink);
contactLink.textContent = 'Contact';
contactLink.href = '#';
document.querySelector('nav').appendChild(contactLink);


//Remember to update the src attributes on images
ctaImage.src = 'img/header-img.png';

//Change the color of the navigation text to be green.
links.style.fontColor = 'green'
//Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.