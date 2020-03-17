module.exports = function check(str, bracketsConfig) {
    console.log(str);
    console.log(bracketsConfig);

    let circleOpenBracket = 0;
    let circleCloseBracket = 0;
    let squareOpenBrackets = 0;
    let squareCloseBrackets = 0;
    let figureOpenBrackets = 0;
    let figureCloseBrackets = 0;
    let line = 0;
    // let stringArr = bracketsConfig.flat();

    // count(str);

    // for (let i = 0; i < bracketsConfig.length; i++) {
    //
    //     for (let j = 0; j < bracketsConfig.length; j++) {
    //
    //         if (bracketsConfig[i][j] == '(') {
    //             circleOpenBracket++;
    //         }
    //         if (bracketsConfig[i][j] == ')') {
    //             circleCloseBracket++;
    //         }
    //         if (bracketsConfig[i][j] == '[') {
    //             squareOpenBrackets++;
    //         }
    //         if (bracketsConfig[i][j] == ']') {
    //             squareCloseBrackets++;
    //         }
    //         if (bracketsConfig[i][j] == '{') {
    //             figureOpenBrackets++;
    //         }
    //         if (bracketsConfig[i][j] == '}') {
    //             figureCloseBrackets++;
    //         }
    //         if (line == '|') {
    //             line++;
    //         }
    //
    //     }
    //
    // }

    // function count(str) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] == '(') {
                circleOpenBracket++;
            }
            if (str[i] == ')') {
                circleCloseBracket++;
            }
            if (str[i] == '[') {
                squareOpenBrackets++;
            }
            if (str[i] == ']') {
                squareCloseBrackets++;
            }
            if (str[i] == '{') {
                figureOpenBrackets++;
            }
            if (str[i] == '}') {
                figureCloseBrackets++;
            }
            if (line == '|') {
                line++;
            }
        }
    // }

    return (circleOpenBracket === circleCloseBracket) && (squareOpenBrackets === squareCloseBrackets) && (figureOpenBrackets === figureCloseBrackets) && (line % 2 === 0) ? true : false;

}

