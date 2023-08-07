const inputName = document.getElementById("name");
const email = document.getElementById("email");
const desc = document.getElementById("desc");
const age = document.getElementById("age");
const hobby = document.getElementById("hobby");
const img = document.getElementById("imagesource");
const imgProfile = document.getElementById("changeimage");
const userName = document.getElementById("val_name");
const userDescription = document.getElementById("descrip");
const defaultUserName = "John Doe";
const defaultDescripton = "Software Engineer Student";
const defaultImageSrc = "pp2.png"


let formData = {}

// Add onchange event listeners
inputName.addEventListener(`change`, (event) => handleChange(event, `name`))
email.addEventListener(`change`, (event) => handleChange(event, `email`))
desc.addEventListener(`change`, (event) => handleChange(event, `desc`))
age.addEventListener(`change`, (event) => handleChange(event, `age`))
hobby.addEventListener(`change`, (event) => handleChange(event, `hobby`))
img.addEventListener(`change`, (event) => handleChange(event, `image`))

// mdn javascript ---> FileReader
// asynchronous functions in javascript - mdn or w3schools
// Promises javascripts

const getImageUrl = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result) //succesfull
        reader.onerror = () => reject(reader.error) //error
    })
}

async function handleChange (event, name) {
    if(name === `image`){
        formData[name] = event.target.files[0]
        const imgPreview = await getImageUrl(event.target.files[0])
        imgProfile.src = imgPreview;
    }else{
        formData[name] = event.target.value
    }
    // 
    // console.log(formData)
}
function onSubmit(){
    console.log(formData);
    userName.innerText = formData.name;
    userDescription.innerText = formData.desc;
    
}
function clearingForm(){
    document.getElementById("myContents").reset();
    document.getElementById("val_name").innerText = defaultUserName;
    document.getElementById("descrip").innerText = defaultDescripton;
    document.getElementById("changeimage").src = defaultImageSrc;
    formData = {}
    

}






// function myFunction() {
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let desc = document.getElementById("desc").value;
//     let age = document.getElementById("age").value;
//     let hobby = document.getElementById("hobby").value;
//     let img = document.getElementById("imagesource").value;
//     let userData = {
//         name: name,
//         email: email,
//         desc: desc,
//         age: age,
//         hobby: hobby,
//         img: img
//     };
//     console.log(userData);
//     document.getElementById("val_name").innerHTML = name;
//     document.getElementById("descrip").innerHTML = desc;
//     document.getElementById("changeimage").src = img;
//     console.log(img);
// }




