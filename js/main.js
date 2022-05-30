document.querySelector('.clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const res = await fetch(`/api`)
  const data = await res.json()

  console.log(data);

  document.querySelector(".triangle").style = 'display: block';
  document.querySelector(".textbox").textContent = data.answer;
}