/*  
Codifique en JavaScript un algoritmo que tome tres números y si el primero es positivo 
calcule el producto de los otros dos, y en otro caso calcule la suma y muestre el resultado 
en la pantalla.
*/

const premerEjercicio = () => {
    // Obtener los valores de los inputs
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const numero3 = parseFloat(document.getElementById('numero3').value);

    // Inicializar la variable resultado
    let resultado;

    // Calcular el resultado según la condición
    if (numero1 > 0) {
        resultado = numero2 * numero3;
    } else {
        resultado = numero2 + numero3;
    }

    // Mostrar el resultado en el div con id "respuestaEl"
    document.getElementById('respuestaEl').innerHTML = `Resultado: ${resultado}`;
}

/* 
Codifique en JavaScript un algoritmo que tome tres números enteros y decida si uno de ellos 
coincide con la suma de los otros dos.
*/

const segundoEjercicio = () => {
    // Obtener los valores de los inputs
    const numero1 = parseInt(document.getElementById('e2numero1').value);
    const numero2 = parseInt(document.getElementById('e2numero2').value);
    const numero3 = parseInt(document.getElementById('e2numero3').value);

    // Inicializar la variable resultado
    let resultado;

    // Calcular el resultado según la condición
    if (numero1 === numero2 + numero3 || numero2 === numero1 + numero3 || numero3 === numero1 + numero2) {
        resultado = 'Uno de los números coincide con la suma de los otros dos';
    } else {
        resultado = 'Ninguno de los números coincide con la suma de los otros dos';
    }

    // Mostrar el resultado en el div con id "respuestaEl"
    document.getElementById('respuestaE2').innerHTML = `Resultado: ${resultado}`;
}

/* 
Codifique en JavaScript un algoritmo que imprima y sume la serie de números múltiplos de 
3 hasta 100, es decir, 3, 6, 9, 12, ... 99 (usar ciclos). Realizar la traza para las primeras 5 
iteraciones.
*/

const tercerEjercicio = () => {
    // Inicializar la variable suma
    let suma = 0;

    // Inicializar la variable serie
    let serie = '';

    // Iterar sobre los números del 3 al 100
    for (let i = 3; i <= 100; i += 3) {
        // Sumar el número a la variable suma
        suma += i;

        // Agregar el número a la variable serie
        serie += `${i}, `;
    }

    // Mostrar la serie en el div con id "respuestaEl"
    document.getElementById('respuestaE3').innerHTML = `Serie: ${serie.slice(0, -2)}`;
    document.getElementById('respuestaE3').innerHTML += `<br>Suma: ${suma}`;
}

tercerEjercicio();

/* 
Codifique en JavaScript un algoritmo que presenta en pantalla todas las potencias enteras 
de 2 que sean menores o iguales que 100 (usar ciclos). Realizar la traza para las primeras 
cinco iteraciones. 
*/

const cuartoEjercicio = () => {
    // Inicializar la variable potencia
    let potencia = 1;

    // Inicializar la variable serie
    let serie = '';

    // Iterar sobre las potencias de 2 menores o iguales a 100
    while (potencia <= 100) {
        // Agregar la potencia a la variable serie
        serie += `${potencia}, `;

        // Calcular la siguiente potencia
        potencia *= 2;
    }

    // Mostrar la serie en el div con id "respuestaEl"
    document.getElementById('respuestaE4').innerHTML = `Serie: ${serie.slice(0, -2)}`;
}

cuartoEjercicio();

/* 
Codifique en JavaScript un algoritmo que sume los números pares comprendidos entre 50 y 
200, inclusive
*/

const quintoEjercicio = () => {
   let suma = 0;
    for (let i = 50; i <= 200; i++) {
        if (i % 2 === 0) {
            suma += i;
        }
    }    
    document.getElementById('respuestaE5').innerHTML = `Suma: ${suma}`;
}
quintoEjercicio();

/* 
Una temperatura Celsius (centígrados) puede ser convertida a una temperatura equivalente 
Fahrenheit de acuerdo con la siguiente fórmula:
𝐹 = (9/5) 𝐶 + 32
*/

const sextoEjercicio = () => {
    // Obtener el valor del input
    const celsius = parseFloat(document.getElementById('celsius').value);

    // Calcular la temperatura en Fahrenheit
    const fahrenheit = (9 / 5) * celsius + 32;

    // Mostrar la temperatura en el div con id "respuestaEl"
    document.getElementById('respuestaE6').innerHTML = `Temperatura en Fahrenheit: ${fahrenheit}`;
}

/* 
Codifique en JavaScript un algoritmo que lea la hora de un día de notación de 24 horas y la 
respuesta en notación de 12 horas, por ejemplo, si la entrada es 13, la salida será 1 p.m. 
*/

const septimoEjercicio = () => {
    // Obtener el valor del input
    const hora = parseInt(document.getElementById('hora').value);

    // Calcular la hora en notación de 12 horas
    let hora12 = hora % 12;
    if (hora12 === 0) {
        hora12 = 12;
    }

    // Determinar si es a.m. o p.m.
    const periodo = hora < 12 ? 'a.m.' : 'p.m.';

    // Mostrar la hora en notación de 12 horas en el div con id "respuestaEl"
    document.getElementById('respuestaE7').innerHTML = `Hora en notación de 12 horas: ${hora12} ${periodo}`;
}

const actualizarHora = () => {
    // Obtener la fecha y hora actual
    const fechaActual = new Date();

    // Obtener la hora y los minutos actuales
    const hora = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds();

    // Calcular la hora en notación de 12 horas
    let hora12 = hora % 12;
    if (hora12 === 0) {
        hora12 = 12;
    }

    // Determinar si es a.m. o p.m.
    const periodo = hora < 12 ? 'a.m.' : 'p.m.';

    // Formatear minutos y segundos a dos dígitos
    const minutosFormateados = minutos < 10 ? '0' + minutos : minutos;
    const segundosFormateados = segundos < 10 ? '0' + segundos : segundos;

    document.getElementById('extra7').innerHTML = `Hora actual en notación de 12 horas: ${hora12}:${minutosFormateados}:${segundosFormateados} ${periodo}`;
}
actualizarHora();

setInterval(actualizarHora, 1000);


/* 
Codifique en JavaScript un algoritmo para crear un vector de cinco elementos de cadenas 
de caracteres, inicializa el vector con datos leídos por el teclado, copie los elementos del 
vector en otro vector, pero en orden inverso, y muéstrelo en la pantalla.
*/

const octavoEjercicio = () => {
 
    let vectorOriginal = [];

    // Leer cinco cadenas desde el teclado e insertarlas en el vector
    for (let i = 0; i < 5; i++) {
        const cadena = prompt(`Introduce la cadena ${i + 1}:`);
        vectorOriginal.push(cadena);
    }

    // Copiar los elementos en otro vector, pero en orden inverso
    const vectorInvertido = [...vectorOriginal].reverse();

    document.getElementById('respuestaE8').innerHTML = `Vector invertido: ${vectorInvertido.join(', ')}`;
}

/* octavoEjercicio(); */

/* 
Codifique en JavaScript un algoritmo que dado un vector con cinco notas obtenidas por un 
alumno (comprendidas entre 0 y 10). A continuación, debe mostrar todas las notas, la nota 
promedio, la nota más alta que ha sacado y la menor
*/

// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el botón por su ID
    const calcularButton = document.getElementById('calcularButton');

    // Añade un event listener para el evento 'click'
    calcularButton.addEventListener('click', calcularNotas);
});

const calcularNotas = () => {
    // Obtener los valores del formulario
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);
    const nota5 = parseFloat(document.getElementById('nota5').value);

    // Verifica que todas las entradas son válidas
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) || isNaN(nota5)) {
        document.getElementById('respuestaE9').innerHTML = `<p style="color: red;">Por favor, ingrese todas las notas correctamente.</p>`;
        return;
    }

    // Crear un array con las notas
    const notas = [nota1, nota2, nota3, nota4, nota5];

    // Calcular el promedio de notas
    const suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    const promedio = suma / notas.length;

    // Obtener la nota más alta y la más baja
    const notaMaxima = Math.max(...notas);
    const notaMinima = Math.min(...notas);

    // Mostrar los resultados en el DOM
    document.getElementById('respuestaE9').innerHTML = `
        <p>Notas del alumno: ${notas.join(', ')}</p>
        <p>Promedio de notas: ${promedio.toFixed(2)}</p>
        <p>Nota más alta: ${notaMaxima}</p>
        <p>Nota más baja: ${notaMinima}</p>
    `;
}




document.getElementById('matrixForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtenemos todos los inputs del formulario
    const inputs = document.querySelectorAll('input[type="number"]');
    
    // Inicializamos la matriz 3x4
    const matrix = [[], [], []];

    // Recorremos los inputs y los asignamos a la matriz
    inputs.forEach((input, index) => {
        const row = Math.floor(index / 4); // Determinamos la fila
        const col = index % 4; // Determinamos la columna
        // Aseguramos que la fila existe y la columna está inicializada
        if (matrix[row] === undefined) {
            matrix[row] = [];
        }
        matrix[row][col] = parseFloat(input.value) || 0; // Aseguramos que el valor sea un número
    });

    // Calculamos la suma de cada fila
    const rowSums = matrix.map(row => row.reduce((sum, value) => sum + value, 0));

    // Calculamos la suma de cada columna
    const columnSums = [0, 0, 0, 0]; // Inicializamos un array para sumar las columnas
    for (let col = 0; col < 4; col++) {
        for (let row = 0; row < 3; row++) {
            columnSums[col] += matrix[row][col] || 0;
        }
    }

    // Mostramos los resultados en pantalla
    document.getElementById('rowSums').innerHTML = `<strong>Suma de filas:</strong> ${rowSums.join(', ')}`;
    document.getElementById('columnSums').innerHTML = `<strong>Suma de columnas:</strong> ${columnSums.join(', ')}`;
});
