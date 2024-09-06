let valur ;

valur = document;
valur = document.all;
valur = document.all[-1];// html içerisindeki verileri gösterir

const element = document.all;
for( let i = 0; i< element.length;i++){
    console.log(element[i])
}

const collections = Array.from(document.all);

collections.forEach(function(collection){
    console.log(collection.length);
})
console.log(valur);