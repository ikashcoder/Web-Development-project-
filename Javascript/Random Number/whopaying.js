var names = ["Akash","Sanket", "Jayesh", "Vinu", "Vishu", "Ravi"];

function whosPaying(collectionOfName) {
    var sizeOfArray = collectionOfName.length;
    var randNumber = Math.floor(Math.random() * sizeOfArray);
    var nameis = collectionOfName[randNumber];
    return nameis;
}

var nameispayer = whosPaying(names);

alert(nameispayer + " is going to pay now.");