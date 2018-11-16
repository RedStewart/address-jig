street = ['Street', 'St', 'Stret', 'Steet', 'Strt', 'treet', 'Str', 'Sreet',
    'Srtet', 'Srteet', 'Steert', 'Stree', 'Strett'];

road = ['Road', 'Rd', 'Rod', 'Rad', 'Roa', 'Raod', 'Roda', 'Rooad', 'Roaad',
    'Roadd'];

place = ['Place', 'Pl', 'Plce', 'Plac', 'Plae', 'Pla', 'PPlace'];

avenue = ['Avenue', 'Ave', 'Av', 'Avn', 'Avene', 'Avenu', 'Aven', 'Avnue'];

drive = ['Drive', 'Dr', 'Driv', 'Drv'];


exports.street = function () {
    return street[Math.floor(Math.random() * street.length)];
}

exports.road = function () {
    return road[Math.floor(Math.random() * road.length)];
}

exports.place = function () {
    return place[Math.floor(Math.random() * place.length)];
}

exports.avenue = function () {
    return avenue[Math.floor(Math.random() * avenue.length)];
}

exports.drive = function () {
    return drive[Math.floor(Math.random() * drive.length)];
}