import img1 from './students1.jpg';
import img2 from './students2.jpg';
import img3 from './students3.jpg';
import img4 from './students4.jpg';
import img5 from './students5.jpg';

let student1 = {
    picture: img1,
    classification: "Photograph",
    dates: "date1/date2",
    people: "person1, person2, person3"
};

let student2 = {
    picture: img2,
    classification: "Photograph",
    dates: "date1/date2",
    people: "person1, person2, person3"
};

let student3 = {
    picture: img3,
    classification: "Photograph",
    dates: "date1/date2",
    people: "person1, person2, person3"
};

let student4 = {
    picture: img4,
    classification: "Photograph",
    dates: "date1/date2",
    people: "person1, person2, person3"
};

let student5 = {
    picture: img5,
    classification: "Photograph",
    dates: "date1/date2",
    people: "person1, person2, person3"
};

let set1 = {
    title: "Competitive Yodeling Team",
    years: "1972 - 1974",
    pictures: { student1, student2, student3, student4, student5 }
};

let set2 = {
    title: "Ultimate Yo-Yo Team",
    years: "1985 - 1989",
    pictures: { student2, student3, student4, student5 }
};

let set3 = {
    title: "National Lego Team",
    years: "1960 - 1962",
    pictures: { student3, student4, student5 }
};

let set4 = {
    title: "Coal Mining Team",
    years: "1930 - 1934",
    pictures: { student4, student5 }
};

let set5 = {
    title: "John Deere Tractor",
    years: "1972 - 1974",
    pictures: { student5 }
};

let DummyData = { set1, set2, set3, set4, set5 };

export { DummyData };