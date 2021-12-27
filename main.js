//Settings
const figuras = document.getElementById("figuras");
const evaluar = document.getElementById("evaluar");
const respuesta = document.getElementById("respuesta")
const ladoCuadrado = document.getElementById("ladoCuadrado");
const ladoA = document.getElementById("ladoA");
const ladoB = document.getElementById("ladoB");
const ladoC = document.getElementById("ladoC");
const radio = document.getElementById("radio");
let PI = Math.PI;


//Selector de campos
function seleccionarCampo ()
{
    let valor = figuras.value;
    if(valor == "triangulo")
    {
        ladoA.classList.add("show")
        ladoB.classList.add("show")
        ladoC.classList.add("show")
        ladoCuadrado.classList.remove("show")
        radio.classList.remove("show")
        respuesta.innerHTML = `ingrese los lados de un triangulo isoceles`;
    }
    else if(valor == "cuadrado")
    {
        ladoA.classList.remove("show")
        ladoB.classList.remove("show")
        ladoC.classList.remove("show")
        ladoCuadrado.classList.add("show")
        radio.classList.remove("show")
        respuesta.innerHTML = ``;
    }
    else if(valor == "circulo")
    {
        ladoA.classList.remove("show")
        ladoB.classList.remove("show")
        ladoC.classList.remove("show")
        ladoCuadrado.classList.remove("show")
        radio.classList.add("show")
        respuesta.innerHTML = ``;
    }
    else
    {
        ladoA.classList.remove("show")
        ladoB.classList.remove("show")
        ladoC.classList.remove("show")
        ladoCuadrado.classList.remove("show")
        radio.classList.remove("show")
        respuesta.innerHTML = `Por favor seleccione una figura`;
    }
}


//Código Cuadrado

const perimetroCuadrado = (a) => a*4;

const areaCuadrado = (a) => a*a;

const calcularCuadrado = (a) =>
{
    let perimetro = perimetroCuadrado(a);
    let area = areaCuadrado(a);
    respuesta.innerHTML = `El perimetro del cuadrado es: ${perimetro} cm
    <br>El area del cuadrado es: ${area} cm^2`;
}

//Circulo

const diametroCirculo = (a) => a*2;

const perimetroCirculo = (a) => diametroCirculo(a) * PI;

const areaCirculo = (a) => PI * a ** 2;

const calcularCirculo = (a) =>
{
    let diametro = diametroCirculo(a);
    let perimetro = perimetroCirculo(a);
    let area = areaCuadrado(a);
    respuesta.innerHTML = `
    El diametro del circulo es: ${diametro}
    <br>El perimetro del circulo es: ${perimetro.toFixed(2)} cm
    <br>El area del circulo es: ${area} cm^2`;
}

//Código Triangulo

const perimetroTriangulo = (a, b, c) => a + b + c;

const areaTriangulo = (a, b) => (a * b) / 2;

const alturaIsoceles = (a , b) => Math.sqrt(a**2 - ((b**2)/4)); 

const calcularTriangulo = (a, b, c) =>
{
    if(a == b || a == c || b == c)
    {
        let perimetro = perimetroTriangulo(a, b, c);
        let area = 0;
        let altura = 0;
        if(a == b)
        {
            altura = alturaIsoceles(a, c);
            area = areaTriangulo(a, altura);
            respuesta.innerHTML = 
            `
                El perimetro del triangulo es: ${perimetro} cm<br>
                La altura del triangulo es: ${altura.toFixed(2)} cm<br>
                El area del triangulo es: ${area.toFixed(2)} cm^2
            `
        }
        else if(b == c)
        {
            altura = alturaIsoceles(b, a);
            area = areaTriangulo(b, altura);
            respuesta.innerHTML = 
            `
                El perimetro del triangulo es: ${perimetro} cm<br>
                El altura del triangulo es: ${altura.toFixed(2)} cm<br>
                El area del triangulo es: ${area.toFixed(2)} cm^2
            `
        }
        else
        {
            altura = alturaIsoceles(a, b);
            area = areaTriangulo(c, altura);
            respuesta.innerHTML = 
            `
                El perimetro del triangulo es: ${perimetro} cm<br>
                El altura del triangulo es: ${altura.toFixed(2)} cm<br>
                El area del triangulo es: ${area.toFixed(2)} cm^2
            `
        }
    }
    else
    {
        respuesta.innerHTML = `No es un triangulo isoceles`;
    }
}

//  Funcion principal
function optionPicker(a)
{
    if(a == "triangulo")
    {
        let aa = parseFloat(ladoA.value);
        let bb = parseFloat(ladoB.value);
        let cc = parseFloat(ladoC.value);

        calcularTriangulo(aa, bb, cc)
    }
    else if (a == "cuadrado")
    {
        let cu = parseFloat(ladoCuadrado.value);
        calcularCuadrado(cu);
    }
    else if (a == "circulo")
    {
        let cir = parseFloat(radio.value);
        calcularCirculo(cir)
    }
}

//  Listeners

evaluar.addEventListener("click", () => {
    let valor = figuras.value;
    optionPicker(valor)
})
figuras.addEventListener("click", seleccionarCampo);