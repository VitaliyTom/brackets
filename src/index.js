module.exports = function check(str, bracketsConfig) {
  
    let circleOpenBracket = 0;
    let circleCloseBracket = 0;
    let squareOpenBrackets = 0;
    let squareCloseBrackets = 0;
    let figureOpenBrackets = 0;
    let figureCloseBrackets = 0;
    let line = 0;

if(circleOpenBracket !== circleCloseBracket ||
  squareOpenBrackets !== squareCloseBrackets ||
  figureOpenBrackets !== figureCloseBrackets ||
  (line % 2 === 0 && line !== 0)){
      return false;
  }

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

        if(circleOpenBracket !== circleCloseBracket ||
         squareOpenBrackets !== squareCloseBrackets ||
         figureOpenBrackets !== figureCloseBrackets ||
         (line % 2 === 0 && line !== 0)){
             return false;
         }

         let strArr = str.split('');

         for (let i = 0; i < bracketsConfig.length; i++) {

          for (let j = 0; j < bracketsConfig[i].length; j++) {

                let idx = strArr.lastIndexOf(bracketsConfig[i][j]);
                let element = bracketsConfig[i][j];
                let nextElement = bracketsConfig[i][j+1];

                 if ( element === strArr[idx] && idx !== strArr.length-1){

                    if ( idx === strArr.indexOf(nextElement, idx) - 1 ){

                     if(strArr.indexOf(nextElement, idx) === -1){
                       return false;
                      }

                           if(strArr.length === 2){
                             return true;
                           }
                           strArr.splice(idx, 2);
                           j--;
                           continue;

                    }else if(idx === strArr.indexOf(nextElement, idx) - 2) {
                               return false;
                           }
                 }else if(idx !== -1 && strArr.indexOf(nextElement, idx) === -1 && nextElement !== undefined ){
                  return false;
                 }
          }
          if(strArr.length > 2 && i === strArr.length-1){
            i=0;
            j=0;
          }
        }
return  true;
}

