/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


// Define Global Variables

// select all sections by tag name
const section_list = document.querySelectorAll('section');

// select navbar__list by ID
const navbar__list = document.getElementById('navbar__list');


// end Global Variables



/**
 * Begin Main Functions
 * 
*/

// build the nav

// create document Fragment
const doc_fragment = document.createDocumentFragment();

// make loop to create elements at NAV Bar dynamic
for (let i=1; i<=section_list.length; i++){
    // create element (li) and a link and add class and create event listener
    let element_li =document.createElement('li');
    element_li.innerHTML = "<a href="+'#section'+i+">section "+i+"</a>";
    element_li.setAttribute('id','sectionLink'+i);
    element_li.classList.add('menu__link');

    const section_block = document.getElementById('section'+i);
    element_li.addEventListener('click',function (){
        section_block.scrollIntoView({behavior:'smooth'});
    })
    // add element li to document Fragment
    doc_fragment.appendChild(element_li);
}

// add document fragment to navigation Bar
navbar__list.appendChild(doc_fragment);

// select all sections by tag name
const element_li_list = document.querySelectorAll('li');

// create event to document
// check if section on viewport
document.addEventListener('scroll',function (){

    for (let i=0; i<section_list.length; i++){
        // get dimensions of section
        const section_list_top     = section_list[i].getBoundingClientRect().top;
        const section_list_left    = section_list[i].getBoundingClientRect().left;
        const section_list_bottom  = section_list[i].getBoundingClientRect().bottom;
        const section_list_right   = section_list[i].getBoundingClientRect().right;
        // get window width
        const window_innerWidth = window.innerWidth;
        // check window-width
        if (window_innerWidth <= 768){
            if ( 1> section_list_top > 0 ){
                // remove class 'your-active-class' from all elements
                let active_elements = document.querySelectorAll('.your-active-class');
                for (let active_element of active_elements) {
                    active_element.classList.remove('your-active-class');
                    active_element.style.backgroundColor = '';
                }
                // put class 'your-active-class' from all elements at Link and section
                element_li_list[i].classList.add('your-active-class');
                section_list[i].classList.add('your-active-class');

                // change background color to link and section
                active_elements = document.querySelectorAll('.your-active-class');
                for (let active_element of active_elements) { active_element.style.backgroundColor = 'rgb(0, 0, 0)'; }
            }

        }else {

            if (section_list_top >= 0 && section_list_left >= 0 &&
                section_list_bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                section_list_right <= (window.innerWidth || document.documentElement.clientWidth)) {
                // remove class 'your-active-class' from all elements
                let active_elements = document.querySelectorAll('.your-active-class');
                for (let active_element of active_elements) {
                    active_element.classList.remove('your-active-class');
                    active_element.style.backgroundColor = '';
                }
                // put class 'your-active-class' from all elements at Link and section
                element_li_list[i].classList.add('your-active-class');
                section_list[i].classList.add('your-active-class');
                // change background color to link and section
                active_elements = document.querySelectorAll('.your-active-class');
                for (let active_element of active_elements) { active_element.style.backgroundColor = 'rgb(0, 0, 0)'; }
            }
        }
    }
})

// end main functions