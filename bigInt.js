<script>

function sumStrings(a,b) { 
  
  let result = res(a.toString().split(""), b.toString().split(""), "","",10).toString();
  while(result[0] == 0){
	result =  nullDel(result); 
  } 
  return result;
} 

function res(a, b, result, carry, base) {
  if(a.length == 0 && b.length == 0 && !carry)
    return result;

  //берем младшие разряды
  var left = parseInt(a.pop() || '0', 10);
  var right = parseInt(b.pop() || '0', 10);

  //складываем и добавляем перебор с прошлой итерации
  var l = left + right + (carry || 0);

  //вызываем для следующих разрядов, правильно вычисляя добавленную цифру и цифру переноса
  return res(a, b, l % base + (result || ""), Math.floor(l/base), base);
  
}

function nullDel(a){
	a = a.slice(1);
	return a;
}


console.log(sumStrings('0025', '00257'))
</script>