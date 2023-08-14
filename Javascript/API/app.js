

const anime = document.querySelector('#anime')

const name = document.querySelector('#name')
const character = document.querySelector('#character')
const quotespan = document.querySelector('#quote')


const btn = document.querySelector('button');

btn.addEventListener('click', async() => {
  let ani = await getData();
  // quotespan.textContent = getData['quote']
})


async function getData(){
 try{
  let res = await axios.get("https://animechan.xyz/api/random/anime?title=naruto");
  return res.data;

 } 
 catch(e){
  console.log(e);
 }
}


getData();


// async function getData(){
//   const res = await fetch('https://animechan.xyz/api/random');
//   const data = await res.json();
//   console.log(data);
// }
// getData();

// fetch("")
//           .then((response) => response.json())
//           .then((quote) =>  quote).then((result) => {
            
//             console.log(result);
//             anime.innerHTML = `<p>Anime: <span>${result['anime']}</span></p>`;
//             character.textContent = result['character'];
//             quotespan.textContent = result['quote'];
//           }).catch((err) => {
//             console.log("Error",err);
//           })

   
