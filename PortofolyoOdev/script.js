// tema değiştirme butonu
const themeToggle = document.getElementById('mode-button');
// temayı saklayan değişken
var theme = "light";

const displaytoggle = document.getElementById('display-button');

const loginButton = document.getElementById('login-button');

var displaymode = "desktop";

// tema tuşu tıklanınca
themeToggle.onclick = () => {
    // temayı çevir
    let _theme;
    if (theme == "light"){_theme="dark"; themeToggle.src = "moon.png";}
    else{_theme="light"; themeToggle.src = "contrast.png";}
    theme = _theme;
    // uygula
    document.documentElement.setAttribute('data-theme', _theme);
}

// display tuşu tıklanınca
displaytoggle.onclick = () => {
    // temayı çevir
    let _displaymode;
    if (displaymode == "desktop"){
        _displaymode="mobile";
        displaytoggle.src = "smartphone.png";
        document.getElementById("main-section").style = "display: none;";
        document.getElementById("root-aside").style = "width: 100vw;";
        let articles = document.getElementsByClassName("aside-article");
        for (let i = 0; i < articles.length; i++) {
            articles[i].style = "max-width: 100vw";
        }
    }
    else{
        _displaymode="desktop";
        displaytoggle.src = "laptop.png";
        document.getElementById("main-section").style -= "display: none;";
        document.getElementById("root-aside").style -="width: 100vw;";
        let articles = document.getElementsByClassName("aside-article");
        for (let i = 0; i < articles.length; i++) {
            articles[i].style -= "max-width: 100vw";
        }
    }
    displaymode = _displaymode;

}

loginButton.onclick = () => {
    document.forms["girisformu"]["mail"].value = "";
    document.forms["girisformu"]["pass"].value = "";
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closePopup(i) {
    if (i == 1)
    {
        // iptal
        closeForm();
    }else
    {
        // kontrol et.
        let mail = document.forms["girisformu"]["mail"].value;
        let pass = document.forms["girisformu"]["pass"].value;
        if (mail == "" || pass == "") {
            alert("Formu Boş Bırakamazsınız.");
            closeForm();
            return;
        }
        if(!mail.includes("@"))
        {
            alert("Mail adresi hatalı.");
            closeForm();
            return;
        }
        if(pass.length < 8)
        {
            alert("Şifre en az 8 karakter olmalı");
            closeForm();
            return;
        }

        alert("Giriş Başarılı");
        loginButton.style = "background-color: green;";
        closeForm();
    }
}

function closeForm()
{
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}