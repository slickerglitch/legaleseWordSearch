let legalese = ["affidavit", "misconduct", "disbarment", "datbarment", "enre", "judge"];
let selWords = [];

const wordGrabber = (arr) => {
    if(selWords.length === 5) {
        return selWords;
    } else {
        let random = Math.floor(Math.random() * arr.length - 1);
        //spread operator adds strings only instead of arrays in arrays/remove if you want array of arrays
        selWords.push(...arr.splice(random, 1));
        return wordGrabber(arr);
    }
   
}
modules.export = {
    wordGrabber
}