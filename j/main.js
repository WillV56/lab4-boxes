document.addEventListener('DOMContentLoaded', init);

function init () {
    const button = document.querySelector('button');
    button.addEventListener('click', makeBoxes);
}

    function makeBoxes () {
        const container = document.querySelector('.container');

        for (let i=0; i < 100; i++) {
            //make a box and add it to the container
            const newBox = document.createElement('DIV');
                newBox.classList.add('box');
                container.append(newBox);

                //make box clickable
                newBox.addEventListener('click', toggleClass);
                container.append(newBox);
        }
    }
//make box spin once clicked
function toggleClass (e) {
    console.log(e.target)
    e.target.classList.toggle('spin');
}
