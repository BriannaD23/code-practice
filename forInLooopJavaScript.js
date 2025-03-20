let alien ={
    name: 'Alien',
    tech: 'JS',
    laptop: {
        cpu: 'i7',
        ram: '16GB',
        brand: 'Apple',
    }
}

for(let key in alien){
    console.log(key, alien[key])
}

for( let key in alien.laptop){
    console.log(key, alien.laptop[key])
}

