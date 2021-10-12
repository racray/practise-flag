const countries = [
    {
        image: "https://flagpedia.net/data/flags/w580/de.png",
        country: "Germany",
        population: "81,770,900",
        region: "Europe",
        capital: "Berlin"
    },
    {
        image: "https://flagpedia.net/data/flags/w580/au.png",
        country: "Australia",
        population: "91,657,312",
        region: "Aus",
        capital: "Canberra"
    },
    {
        image: "https://flagpedia.net/data/flags/w580/in.png",
        country: "India",
        population: "1,3179,984,812",
        region: "Asia",
        capital: "New Delhi"
    },
    {
        image: "https://flagpedia.net/data/flags/w580/kr.png",
        country: "South Korea",
        population: "40,400,000",
        region: "Asia",
        capital: "Seoul"
    },
    {
        image: "https://flagpedia.net/data/flags/w580/us.png",
        country: "United States of America",
        population: "323,947,000",
        region: "North America",
        capital: "Washington,D.C"
    }
];

const sect = document.createElement("section");
sect.setAttribute("class", "sector");
document.body.append(sect);

const rowdiv = document.createElement("div");
rowdiv.setAttribute("class", "row");
document.querySelector(".sector").append(rowdiv);

countries.forEach((index) => {
    const divcol = document.createElement("div");
    divcol.setAttribute("class", "col-12 col-sm-6 col-md-3");
    document.querySelector(".row").append(divcol);

    const divcont = document.createElement("div");
    divcont.setAttribute("class", "flag-container");
    document.querySelector(".col-12").append(divcont);

    const image = document.createElement("img");
    image.setAttribute("class", "flag");
    image.setAttribute("src", index.image);
    document.querySelector(".flag-container").append(image);

    const divdet = document.createElement("div");
    divdet.setAttribute("class", "details");
    document.querySelector(".flag-container").append(divdet);

    const head = document.createElement("h5");
    head.innerHTML = index.country;
    document.querySelector(".flag-container").append(head);

    const para1 = document.createElement("p");
    para1.innerHTML = index.population;
    document.querySelector(".flag-container").append(para1);

    const para2 = document.createElement("p");
    para2.innerHTML = index.region;
    document.querySelector(".flag-container").append(para2);

    const para3 = document.createElement("p");
    para3.innerHTML = index.capital;
    document.querySelector(".flag-container").append(para3);




})