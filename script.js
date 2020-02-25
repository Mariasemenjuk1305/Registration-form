let getId = x => document.getElementById(x);

getId('signInNow').onclick = () => {
  getId('box2').style.display = 'flex';
  getId('box1').style.display = 'none';
}

getId('signUpNow').onclick = () => {
  getId('box1').style.display = 'flex';
  getId('box2').style.display = 'none';
  getId('err1').style.visibility = 'hidden';
  getId('err2').style.visibility = 'hidden';
}

let userInfo = [];

getId('singUp').onclick = () => {
  if (/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(getId('emailUp').value) == true) {
    userInfo = [getId('firstName').value,
      getId('lastName').value,
      getId('emailUp').value,
      getId('passUp').value
    ];
    console.log(userInfo);
    let userJson = JSON.stringify(userInfo);
    localStorage.setItem('User', userJson);
    f1.reset();
  } else if (localStorage.getItem('User[2]') == getId('emailUp').value) {
    getId('err3').style.visibility = 'visible';
    getId('emailUp').style.borderColor = 'red';
  } else {
    getId('firstName').style.borderColor = 'red';
    getId('lastName').style.borderColor = 'red';
    getId('emailUp').style.borderColor = 'red';
    getId('passUp').style.borderColor = 'red';
  }
}

getId('singIn').onclick = () => {
  if (localStorage.length == 0 || localStorage.getItem('User') == 'undefined') {
    getId('err2').style.visibility = 'visible';
  } else {
    let [name,
      sename,
      mail,
      password
    ] = JSON.parse(localStorage.getItem('User'))

    if (mail == getId('emailIn').value &&
      password == getId('passIn').value) {
      getId('box3').style.display = 'flex';
      getId('box2').style.display = 'none';
      getId('addName').innerHTML = name;
      getId('addSeName').innerHTML = sename;
      getId('addEmail').innerHTML = mail;
    } else {
      getId('err1').style.visibility = 'visible';
    }
  }
  f2.reset();
}