function translatex(txt) {
    if (txt == null || txt.length == 0) return txt;
    var firstLetter = txt.substr(0, 1);
    var firstLetterLower = firstLetter.toLowerCase()
    if ('bcdfghjklmnpqrstvwxz'.includes(firstLetterLower)) {
        firstLetter = firstLetter + 'o' + firstLetterLower;
    }
    var restOfText = txt.substr(1);
    return firstLetter + translatex(restOfText);
}