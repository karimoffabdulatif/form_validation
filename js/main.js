const handleChange =()=>{
    let text = document.getElementById("text").value
    let result = document.getElementById("result")

    if(text.length === 0){
        result.innerText = "Parolni kiriting..."
        result.classList.add("enter_password")
        result.classList.remove("perfect_password")
        result.classList.remove("succsess_password")
        result.classList.remove("error_password")
    }else if(text.length < 4){
        result.innerText = "Parol ishochisz. Operatsiya muvaffaqiyatsiz "
        result.classList.add("error_password")
        result.classList.remove("perfect_password")
        result.classList.remove("succsess_password")
        result.classList.remove("enter_password")
    }else if(text.length > 4 && text.length < 8 ){
        result.innerText = "Ishonchli parol. Opratsiya muvaffaqiyatli"
        result.classList.add("succsess_password")
        result.classList.remove("perfect_password")
        result.classList.remove("enter_password")
        result.classList.remove("error_password")
    }else if(text.length > 8){
        result.innerText = "Yuqori darajadagi ishonchli parol"
        result.classList.add("perfect_password")
        result.classList.remove("enter_password")
        result.classList.remove("succsess_password")
        result.classList.remove("error_password")
    }
}


