items = document.querySelectorAll('.item-picker-icon')
console.log(items)
textBox = document.createElement('textarea')
textBox.classList.add('textBox')
document.body.appendChild(textBox)


importLi = document.querySelectorAll('.dropdown-item')
//IF LI "addon" clicked, eventlistener for the baseJson
importLi.forEach(li => {
    li.addEventListener('click', function (e) {
        cible = e.target
        if (cible.innerHTML == "Addon") {
            let textAreaImport = document.querySelector('.importer-textarea')
            textAreaImport.addEventListener('input', function () {
                baseJson = textAreaImport.value;
            })
        }
    })
});



items.forEach(item => {
    addEventListener('click', addBox)
});


function addBox(e) {
    let target = e.target
    if (target.classList.contains('item-picker-icon')) {
        equipements = document.querySelectorAll('.selector-modal-list-label-cell')
        equipements.forEach(equipement => {
            let checkbox = document.createElement('button')
            checkbox.classList.add('addStuff')
            checkbox.addEventListener('click', function (e) {
                addItem(e, target);
            });
            equipement.appendChild(checkbox)
        });
    }
}
// arrays to stock the ids of each selected item
var helmet = [];
var neck = [];
var shoulder = [];
var cloak = [];
var chest = [];
var wrist = [];
var mainhand = [];
var offhand = [];
var idol = [];
var gloves = [];
var belt = [];
var leggings = [];
var bottes = [];
var ring1 = [];
var ring2 = [];
var trinket1 = [];
var trinket2 = [];

function addItem(e, targetedParent) {
    // switch to know if it's a helmet, gloves etc that is selected
    switch (targetedParent) {
        case items[0]:
            console.log('helmet')
            break;
        case items[1]:
            console.log('neck')
            break;
        case items[2]:
            console.log('shoulder')
            break;
        case items[3]:
            console.log('cloak')
            break;
        case items[4]:
            console.log('chest')
            break;
        case items[5]:
            console.log('wrist')
            break;
        case items[6]:
            console.log('mainhand')
            break;
        case items[7]:
            console.log('offhand')
            break;
        case items[8]:
            console.log('idol')
            break;
        case items[9]:
            console.log('gloves')
            break;
        case items[10]:
            console.log('belt')
            break;
        case items[11]:
            console.log('leggings')
            break;
        case items[12]:
            console.log('bottes')
            break;
        case items[13]:
            console.log('ring1')
            break;
        case items[14]:
            console.log('ring2')
            break;
        case items[15]:
            console.log('trinket1')
            break;
        case items[16]:
            console.log('trinket2')
            break;
        default:
            break;
    }

    cible = e.target
    cible.classList.toggle('checkBoxClose')
    wowhead = cible.previousSibling.previousSibling.href
    wowhead = wowhead.split("item=")[1];
    textBox.value = textBox.value + wowhead + "\n";
}
