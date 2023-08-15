

let input = document.querySelector('input');
let btn = document.querySelector('button');

let ul =document.querySelector('ul');

btn.addEventListener('click',async() => {
    let country = input.value;
    let data = await getColleges(country);

     ul.innerText = "";
     
    for(collage of data){
        // console.log(collge.name);
        let li = document.createElement('li');
        li.textContent = collage.name;
        ul.append(li);
    }
    
})

async function getColleges(country){
    const url = `http://universities.hipolabs.com/search?name=${country}`;

    try{

        const config = {
            headers:{
                "Accept":"applicatoin/json"
            }
        }
       let res = await axios.get(url);
    //    console.log(res.data);
       return res.data;

    }catch(err){
        console.log(err);
        return [];
    }
}