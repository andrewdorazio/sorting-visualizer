//Function returns random integer between min and max
export const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


