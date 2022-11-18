export const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// export const getRandomWord = (arr: string[]) => {
//     return wordsForMovieGenerate[getRandomNumber(0, wordsForMovieGenerate.length - 1)];
// };