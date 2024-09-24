export const characterType = [
    'Gazorpazorp',
    'Alphabetrian',
    'Time God',
    'Parasite',
    'Cromulon',
    'Bird-Person',
    'Korblock',
    'Elephant-Person',
    'Gromflomite',
    'Light bulb-Alien',
    'Cone-nippled alien',
    'Interdimensional gaseous being',
];

export const genders = [
    'Male',
    'Female',
    'Genderless',
    'Unknown',
];

export const species = [
    'Human',
    'Alien',
    'Unknown',
];

export const characterStatus = [
    'Alive',
    'Dead',
    'Unknown',
];

export const filtersList = [
    {
        name: 'status',
        options: characterStatus,
    },
    {
        name: 'species',
        options: species,
    },
    {
        name: 'gender',
        options: genders,
    },
    {
        name: 'type',
        options: characterType,
    },
];

export const filterNames = filtersList.map((item) => item.name);
