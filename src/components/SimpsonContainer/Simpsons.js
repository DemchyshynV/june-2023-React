import {Simpson} from "./Simpson";

const Simpsons = () => {
    const simpsons = [
        {
            id: 1,
            name: 'Homer',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ--C5b1qSiO4NgZ32m9khrofquxurYQgRDE9RLZSsl&s'
        },
        {
            id: 2,
            name: 'Marge',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbiyMrOqhZdiT6HSbbXJEBW1I5QoWqXAhcgCDof47V&s'
        },
        {
            id: 3,
            name: 'Lisa',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQU8-f9ATzZ2qmsx1-vRN0GBqlDtvuTEM75m3BTP3&s'
        },
        {id: 4, name: 'Bart', img: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'},
        {
            id: 5,
            name: 'Maggie',
            img: 'https://w7.pngwing.com/pngs/892/38/png-transparent-maggie-simpson-lisa-simpson-marge-simpson-bart-simpson-homer-simpson-bart-simpson.png'
        },

    ]
    return (
        <div>
            {simpsons.map(simpson => <Simpson key={simpson.id} simpson={simpson}/>)}
        </div>
    );
};

export {Simpsons};