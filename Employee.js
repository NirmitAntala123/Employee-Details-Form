function myfunction() {
    let emailv = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let character = /^[A-Za-z ]+$/;
    let character1 = /^[A-Za-z0-9]+$/;
    let name = document.getElementById("name").value;
    flag = true;
    if (name == "") {
        document.getElementById("n1").innerHTML = "<br><b>** Please Enter Name</b>";
        flag = false;
    } else if (!character.test(name)) {
        document.getElementById("n1").innerHTML = "<br><b>** Please Enter Charactors only</b>";
        flag = false;
    } else {
        document.getElementById("n1").innerHTML = "";
    }

    let email = document.getElementById("email").value;
    if (email == "") {
        document.getElementById("e1").innerHTML = "<br><b>** Please Enter Email</b>";
        flag = false;
    } else if (!email.match(emailv)) {
        document.getElementById("e1").innerHTML = "<br><b>** Please Enter valid Email</b>";
        flag = false;
    } else {
        document.getElementById("e1").innerHTML = "";
    }
    let mobile = document.getElementById("mobile").value;
    if (mobile == "") {
        document.getElementById("m1").innerHTML = "<br><b>** Please Enter Mobile number</b>";
        flag = false;
    } else if (mobile.length < 10 || mobile.length > 10) {
        document.getElementById("m1").innerHTML = "<br><b>**Mobile number Must Be 10 digits</b>";
        flag = false;
    } else {
        document.getElementById("m1").innerHTML = "";
    }

    let code = document.getElementById("code").value;
    //  let data121 = JSON.parse(localStorage.getItem("obj"));
    if (code == "") {
        document.getElementById("em112").innerHTML = "<br><b>** Please Enter Emp Code</b>";
        flag = false;

    } else if (!character1.test(code)) {
        document.getElementById("em112").innerHTML = "<br><b>** Please Enter Charactors and Number only</b>";
        flag = false;
    } else {
        document.getElementById("em112").innerHTML = "";
    }

    if (code) {
        let data = JSON.parse(localStorage.getItem("obj"));
        if (data != null) {
            for (let i = 0; i < data.length; i++) {
                var v = Object.values(data[i]);
                if (code == v[3]) {
                    document.getElementById('em112').innerHTML = "<br><b>**This Code is alrady exist";
                    flag = false;
                    break;
                } else {
                    document.getElementById('em112').innerHTML = "";
                }
            }
        }
    }

    let gender = document.getElementById("gender").value;
    if (gender == "/") {
        document.getElementById("g1").innerHTML = " <br><b>** Please select gender</b>";
        flag = false;
    } else {
        document.getElementById("g1").innerHTML = "";
    }


    let country = document.getElementById("country").value;
    if (country == "") {
        document.getElementById("c1").innerHTML = " <br><b>** Please Enter country</b>";
        flag = false;
    } else if (country != "india" & country != "India") {
        document.getElementById("c1").innerHTML = " <br><b>** Please Enter India</b>";
        flag = false;
    } else {
        document.getElementById("c1").innerHTML = "";
    }

    let state = document.getElementById("state").value;
    if (state == "/") {
        document.getElementById("s1").innerHTML = " <br><b>** Please select State</b>";
        flag = false;
    } else {
        document.getElementById("s1").innerHTML = "";
    }

    let city = document.getElementById("city").value;
    if (city == "/") {
        document.getElementById("c11").innerHTML = " <br><b>** Please select city</b>";
        flag = false;
    } else {
        document.getElementById("c11").innerHTML = "";


    }
    return flag;
}

function storedata() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let code = document.getElementById("code").value;
    let gender = document.getElementById("gender").value;
    let country = document.getElementById("country").value;
    let state = document.getElementById("state").value;
    let city = document.getElementById("city").value;
    if (myfunction()) {
        let object = {
            "name": name,
            "email": email,
            "mobile": mobile,
            "code": code,
            "gender": gender,
            "country": country,
            "state": state,
            "city": city

        };

        let data = localStorage.getItem("obj") ? JSON.parse(localStorage.getItem("obj")) : [];
        data.push(object);
        localStorage.setItem("obj", JSON.stringify(data));

    } else {
        return false;
    }


}

function search() {
    let name = document.getElementById("name1").value;
    let name1 = document.getElementsByName("se");
    let data = JSON.parse(localStorage.getItem("obj"));
    // let array = [name];

    if (name == "") {
        alert("Please Enter Name");
    } else {
        for (let i = 0; i < data.length; i++) {
            console.log(data);
            let values = Object.values(data[i]);
            for (let j = 0; j < values.length; j++) {
                if (values[j] == name) {
                    for (let a = 0; a < values.length; a++) {
                        name1[a].value = values[a];
                    }
                }
            }
        }
    }
}

var citiesByState = {

    Madhyapradesh: ["Mandsaur", "Indore", "Ratlam"],
    Rajsthan: ["Pratapghar", "Udaipur", "Jaipure"],
    Gujarat: ["Rajkot", "Surat", "Ahmedabad"]
}

function select(value) {
    if (value.length == 0) document.getElementById("city").innerHTML = "<option></option>";
    else {
        var citiesOptions = "";
        for (cityId in citiesByState[value]) {
            citiesOptions += "<option>" + citiesByState[value][cityId] + "</option>";
        }
        document.getElementById("city").innerHTML = citiesOptions;
    }
}