const street = [
    "Street",
    "St",
    "Stret",
    "Steet",
    "Strt",
    "treet",
    "Str",
    "Sreet",
    "Srtet",
    "Srteet",
    "Steert",
    "Stree",
    "Strett"
  ],
  road = [
    "Road",
    "Rd",
    "Rod",
    "Rad",
    "Roa",
    "Raod",
    "Roda",
    "Rooad",
    "Roaad",
    "Roadd"
  ],
  place = [
    "Place",
    "Pl",
    "Plce",
    "Plac",
    "Plae",
    "Pla",
    "PPlace",
    "Pace",
    "Plaace",
    "Pllace"
  ],
  avenue = [
    "Avenue",
    "Ave",
    "Av",
    "Avn",
    "Avene",
    "Avenu",
    "Aven",
    "Avnue",
    "Avne",
    "Aveneu"
  ],
  drive = [
    "Drive",
    "Dr",
    "Driv",
    "Drv",
    "Drve",
    "Driive",
    "Dive",
    "Ddrive",
    "Drivee",
    "Drrive"
  ],
  court = [
    "Court",
    "Crt",
    "Cort",
    "Cuort",
    "Curt",
    "Ct",
    "Courrt",
    "Coouurt",
    "Cuourt",
    "Cout"
  ],
  lane = [
    "Lane",
    "Lne",
    "Lnae",
    "Ln",
    "Lena",
    "Lanne",
    "Laane",
    "Lanee",
    "Llane",
    "Lan"
  ],
  way = ["Way", "Waay", "Wy", "Wayy", "Wway"];

exports.street = () => {
  return randomArrElement(street);
};

exports.road = () => {
  return randomArrElement(road);
};

exports.place = () => {
  return randomArrElement(place);
};

exports.avenue = () => {
  return randomArrElement(avenue);
};

exports.drive = () => {
  return randomArrElement(drive);
};

exports.court = () => {
  return randomArrElement(court);
};

exports.lane = () => {
  return randomArrElement(lane);
};

exports.way = () => {
  return randomArrElement(way);
};

let randomArrElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
