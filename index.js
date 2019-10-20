function hello(){
    console.log("hello");
}

const saudacao = () => {
    var data  = new Date();   
    return data.getHours() <= 12 ? "Bom dia" : data.getHours() <= 18? "Boa tarde": "Boa noite";
}

//saudação
console.log(saudacao());