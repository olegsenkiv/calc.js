const link = DocumentFragment.querySelector('a');



function plus() {
    let num1, num2, result;

    num1 = document.getElementById('n1').value;
    //  num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    //  num2 = parseInt(num2);

    result = num1 + num2;

    document.getElementById('out').innerHTML = result;
}

function minus() {
    let num1, num2, result;

    num1 = document.getElementById('n1').value;

    num2 = document.getElementById('n2').value;

    result = num1 - num2;

    document.getElementById('out').innerHTML = result;
}
function multiply() {
    let num1, num2, result;

    num1 = document.getElementById('n1').value;

    num2 = document.getElementById('n2').value;

    result = num1 * num2;

    document.getElementById('out').innerHTML = result;
}
function del() {
    let num1, num2, result;

    num1 = document.getElementById('n1').value;

    num2 = document.getElementById('n2').value;

    result = num1 / num2;

    document.getElementById('out').innerHTML = result;
}



//function GetResult(oper)
{
  let n1 = 0;
  let n2 = 0;

  n1 = eval(calcform.num_01.value);
  n2 = eval(calcform.num_02.value);

  switch (oper)
  {
    case 1:
    {
      calcform.res.value = n1 + n2;
      break;
    }
    case 2:
    {
      calcform.res.value = n1 - n2;
      break;
    }
    case 3:
    {
      calcform.res.value = n1 * n2;
      break;
    }
    case 4:
    {
      calcform.res.value = n1 / n2;
      break;
    }
  }
}//