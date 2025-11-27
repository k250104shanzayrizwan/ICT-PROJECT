/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav__menu'), // Corrected ID to nav__menu to match HTML
    navToggle = document.getElementById('nav-toggle'), // Corrected ID to nav-toggle to match HTML
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
// FIX: Corrected const assignment syntax
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    // FIX: Corrected typo 'navManu' to 'navMenu'
    const navMenu = document.getElementById('nav__menu'); 
    // when we click on each nav_link we remove the show manu class
    navMenu.classList.remove('show-menu');
}

// FIX: Corrected argument from 'n' to 'link'
navLink.forEach((link) => link.addEventListener('click', linkAction));


/*==================== REMOVE MENU MOBILE ====================*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// Note: Code for scroll sections active link is missing, only the title is present.

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const header = document.getElementById('header');

    // when the scroll is greater than the 80 view port height, add the scroll-header
    // class to header tag

    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/

function scrollUp() {
    const scrollUp = document.getElementById('scrollUp'); // Corrected ID to 'scrollUp'

    // when the scroll is greater than the 350 view port height, add the show-scroll
    // class to scroll-top class 

    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

/*==================== ABOUT TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tab__active')

        });

        target.classList.add('tab__active');

        tabs.forEach((tab) => {
            tab.classList.remove('tab__active');
        });

        tab.classList.add('tab__active');
    });
});

/*=============== CONTACT FORM =============== */
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactSubject = document.getElementById('contact-subject'),
    contactMessage = document.getElementById('contact-message'), // FIX: Corrected ID to 'contact-message'
    errorMessage = document.getElementById('error-message'); // FIX: Corrected ID to 'error-message'

const sendEmail = (e) => {
    e.preventDefault(); // FIX: Added to prevent default form submission/page reload

    // check if the field has a value
    // FIX: Corrected empty string check from ' ' to '' and consolidated logic
    if (
        contactName.value.trim() === '' ||
        contactEmail.value.trim() === '' ||
        contactSubject.value.trim() === '' ||
        contactMessage.value.trim() === ''
    ) {
        errorMessage.classList.remove('color-first'); // Ensure error color is used if defined
        errorMessage.textContent = 'Write all the input fields';

        // Clear previous timeout if any
        clearTimeout(errorMessage.timeout);

        // Set a new timeout to clear the error message after 3 seconds
        errorMessage.timeout = setTimeout(() => {
            errorMessage.textContent = '';
        }, 3000);
    } else {
        emailjs.sendForm(
            'service_ukexj52', // idher meri service wali id ayegi okayyy
            'template_jujoolwp', // idher nere templete ka name ayega
            '#contact-form',
            'vxDc4UI2jbOQBn6f'
        )
            .then(() => {
                // show message and add color
                errorMessage.classList.add('color-first');
                // FIX: Corrected typo 'Messege'
                errorMessage.textContent = 'Message Sent Successfully!';

                // remove time after 5 second 
                // Clear previous timeout if any
                clearTimeout(errorMessage.timeout);
                
                errorMessage.timeout = setTimeout(() => {
                    errorMessage.textContent = '';
                    errorMessage.classList.remove('color-first');
                }, 5000);
            },

                (error) => {
                    alert('OOPs! SOMETHING WENT WRONG....', error);
                }
            );

        // clear input fields
        contactName.value = '';
        contactEmail.value = '';
        contactSubject.value = '';
        contactMessage.value = ''; // FIX: Corrected ID
    }
};
contactForm.addEventListener('submit', sendEmail);