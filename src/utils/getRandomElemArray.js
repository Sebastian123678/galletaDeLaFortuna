const getRandomElemArray = (arr) => {
    // Math.random() devuelve de 0 a 0,999999999
    // Math.floor() Aproximar hacia abajo
    const indexRandom = Math.floor( Math.random() * arr.length )
    // Devolver un elemento random del arreglo
    return arr[indexRandom]
}

export default getRandomElemArray