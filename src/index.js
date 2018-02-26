module.exports = function solveEquation(equation) {
  var tempNumb = '';
  var i = 0, tempa = '', tempb = '', tempc =''; 
  while (equation[i] != ' ')
  {
    tempa += equation[i];
    i++;
  }
  var a = +tempa;

  var Index = equation.indexOf("^") + 3;
  if (equation[Index] == '-')
  {
    tempb += equation[Index];
    Index += 2;
    while (equation[Index] != ' ')
    {
      tempb += equation[Index];
      Index++;
    }
  }
  else
  {
    Index += 2;
    while (equation[Index] != ' ')
    {
      tempb += equation[Index];
      Index++;
    }
  }
  var b = +tempb;

  Index += 5;
  if (equation[Index] == '-')
  {
    tempc += equation[Index];
    Index += 2;
    while (Index != equation.length)
    {
      tempc += equation[Index];
      Index++;
    }
  }
  else
  {
    Index += 2;
    while (Index != equation.length)
    {
      tempc += equation[Index];
      Index++;
    }
  }
  var c = +tempc;
  
  var D = (Math.pow(b,2)) - (4 * a * c);
  b = -b;
  var x1 = Math.round(b + (Math.sqrt(D)))/(2 * a);
  var x2 = Math.round(b - (Math.sqrt(D)))/(2 * a);
  
  var myArr = [];
  if( x1 > x2)
  {
    myArr.push(x2);
    myArr.push(x1);
  }
  else
  {
    myArr.push(x1);
    myArr.push(x2);
  }

  return myArr;
}
