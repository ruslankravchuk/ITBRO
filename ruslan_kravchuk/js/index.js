/*class Template {
    constructor (h1, h2) {

                  this.h1 = h1;
                  this.h2 = h2;
             }

render(x) {
    let out = '';
    out += `<h1>${this.h1}</h1>`;
    out += `<h2>${this.h2}</h2>`;
    document.querySelector(x).innerHTML = out;
           }

}

const header_I = new Template('Hello', 'My_site');
header_I.render('.canvas');
console.log(header_I);
class Header_II extends Template {
    constructor (h1, h2, hero) {
        super(h1, h2)
        this._hero = hero;
                               }
         get hero() {
            return this._hero;
                                  }
         set hero(c) {

                      this._hero = 'error'
                     // () => {
                     //    if (c == 'yahooo') {
                     //        return "error"
                     //    }
                     // }

                  }
                                }
const Header_III = new Header_II('new_hello', 'new_site', 'gogogogogog')
Header_II.hero = 'yahooo'
console.log(Header_II.hero)*/

// let items_for_anim = document.querySelectorAll('.anim');
// document.querySelector('.frozen').addEventListener('click', remote_anim)



// function remote_anim () {

//     for (let i = 0; i<items_for_anim.length; i++)
//     {
//         if (items_for_anim[i].hasAttribute('style'))
//         {
//             items_for_anim[i].removeAttribute('style');
//             document.querySelector('.messadge').setAttribute('style', 'display: flex;')

//         }

//         else {
//             items_for_anim[i].setAttribute('style', 'animation-play-state: running');
//             document.querySelector('.messadge').removeAttribute('style')


//         }
//     }
// }


// function anim_boom () {

//    let control_style_anim = document.querySelector('.submarine')

// }

// setTimeout(() => {
//     let new_elem = document.createElement("div");
//     new_elem.innerText = "Як тобі таке Ілон Маск!!!";
//     new_elem.classList.add("popup");
//     document.querySelector('body').appendChild(new_elem);

// }, 2500 )