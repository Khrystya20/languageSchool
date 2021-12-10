const randomUserMock = [
  {
    gender: 'Male',
    title: 'Mr',
    full_name: 'Norbert Weishaupt',
    b_date: '1956-12-23T19:09:19.602Z',
    age: 65,
    email: 'norbert.weishaupt@example.com',
    phone: '0079-8291509',
    picture_large: './images/1.png',
    picture_thumbnail: './images/1.png',
    experience: 30,
    rating: 9,
    id: 1,
    subject: 'English',
    lesson_type: 'Group',
  },
  {
    gender: 'Male',
    title: 'Mr',
    full_name: 'Claude Payne',
    b_date: '1976-07-31T21:57:32.876Z',
    age: 45,
    email: 'claude.payne@example.com',
    phone: '071-558-2972',
    picture_large: './images/2.png',
    picture_thumbnail: './images/2.png',
    experience: 20,
    rating: 4,
    id: 2,
    subject: 'English',
    lesson_type: 'Group',
  },
  {
    gender: 'Male',
    title: 'Mr',
    full_name: 'Curtis Mendoza',
    b_date: '1985-04-02T02:31:00.130Z',
    age: 36,
    email: 'curtis.mendoza@example.com',
    phone: '02-6397-0344',
    picture_large: './images/3.png',
    picture_thumbnail: './images/3.png',
    experience: 13,
    rating: 10,
    id: 3,
    subject: 'Spanish',
    lesson_type: 'Group',
  },
  {
    gender: 'Female',
    title: 'Ms',
    full_name: 'Anna Alva',
    b_date: '1974-11-15T10:40:20.306Z',
    age: 47,
    email: 'Anna.Alva@example.com',
    phone: '(120)-134-1014',
    picture_large: './images/4.png',
    picture_thumbnail: './images/4.png',
    experience: 20,
    rating: 6,
    id: 4,
    subject: 'English',
    lesson_type: 'Group',
  },
  {
    gender: 'Female',
    title: 'Ms',
    full_name: 'Olivia Cher',
    b_date: '1945-09-28T12:59:41.244Z',
    age: 76,
    email: 'Olivia.Cher@example.com',
    phone: '124-341-159',
    picture_large: './images/5.png',
    picture_thumbnail: './images/5.png',
    experience: 45,
    rating: 8,
    id: 5,
    subject: 'German',
    lesson_type: 'Group',
  },
  {
    gender: 'Female',
    title: 'Ms',
    full_name: 'Tessa Möllmann',
    b_date: '1986-05-08T09:19:12.021Z',
    age: 35,
    email: 'tessa.mollmann@example.com',
    phone: '0358-7950096',
    picture_large: './images/6.png',
    picture_thumbnail: './images/6.png',
    experience: 10,
    rating: 7,
    id: 6,
    subject: 'English',
    lesson_type: 'Group',
  },
  {
    gender: 'Female',
    title: 'Ms',
    full_name: 'Emma James',
    b_date: '1984-08-10T01:12:04.592Z',
    age: 37,
    email: 'emma.james@example.com',
    phone: '02-7976-3904',
    picture_large: './images/7.png',
    picture_thumbnail: './images/7.png',
    experience: 12,
    rating: 6,
    id: 7,
    subject: 'French',
    lesson_type: 'Group',
  },
  {
    gender: 'Female',
    title: 'Ms',
    full_name: 'Hannah Pektemek',
    b_date: '1975-08-20T23:05:13.239Z',
    age: 46,
    email: 'Hannah.pektemek@example.com',
    phone: '02-6397-0344',
    picture_large: './images/8.png',
    picture_thumbnail: './images/8.png',
    experience: 19,
    rating: 9,
    id: 8,
    subject: 'English',
    lesson_type: 'Group',
  },
  {
    gender: 'Male',
    title: 'Mr',
    full_name: 'Viktor Legrand',
    b_date: '1984-07-04T12:08:05.427Z',
    age: 37,
    email: 'viktor.legrand@example.com',
    phone: '077 863 38 70',
    picture_large: './images/9.png',
    picture_thumbnail: './images/9.png',
    experience: 15,
    rating: 5,
    id: 9,
    subject: 'English',
    lesson_type: 'Group',
  },
  {
    gender: 'Male',
    title: 'Mr',
    full_name: 'Deniz Yıldırım',
    b_date: '1961-12-12T17:49:30.416Z',
    age: 60,
    email: 'deniz.yildirim@example.com',
    phone: '(602)-541-0650',
    picture_large: './images/10.png',
    picture_thumbnail: './images/10.png',
    experience: 13,
    rating: 6,
    id: 10,
    subject: 'German',
    lesson_type: 'Group',
  },
  {
    gender: 'Male',
    title: 'Mr',
    full_name: 'Boris Joy',
    b_date: '1976-12-12T17:49:30.416Z',
    age: 45,
    email: 'Boris.Joy@example.com',
    phone: '(602)-541-0650',
    picture_large: './images/11.png',
    picture_thumbnail: './images/11.png',
    experience: 13,
    rating: 6,
    id: 11,
    subject: 'English',
    lesson_type: 'Group',
  },
  {
    gender: 'Female',
    title: 'Ms',
    full_name: 'Matilda Aalto',
    b_date: '1995-05-15T20:08:25.350Z',
    age: 26,
    email: 'matilda.aalto@example.com',
    phone: '06-843-874',
    picture_large: './images/12.png',
    picture_thumbnail: './images/12.png',
    experience: 8,
    rating: 8,
    id: 12,
    subject: 'German',
    lesson_type: 'Group',
  },
  {
    gender: 'Male',
    title: 'Mr',
    full_name: 'Mathew Raven',
    b_date: '1995-06-12T20:08:25.350Z',
    age: 26,
    email: 'Mathew.Raven@example.com',
    phone: '06-843-874',
    picture_large: './images/13.png',
    picture_thumbnail: './images/13.png',
    experience: 3,
    rating: 1,
    id: 13,
    subject: 'English',
    lesson_type: 'Group',
  },
  {
    gender: 'Male',
    title: 'Mr',
    full_name: 'Robert Rooney',
    b_date: '1985-01-12T20:08:25.350Z',
    age: 36,
    email: 'Robert.Rooney@example.com',
    phone: '1206-8433-4',
    picture_large: './images/14.png',
    picture_thumbnail: './images/14.png',
    experience: 13,
    rating: 7,
    id: 14,
    subject: 'German',
    lesson_type: 'Group',
  },
  {
    gender: 'Male',
    title: 'Mr',
    full_name: 'Albert Vanda',
    b_date: '1975-02-12T20:08:25.350Z',
    age: 46,
    email: 'Albert.Vanda@example.com',
    phone: '1122-6-83-54',
    picture_large: './images/15.png',
    picture_thumbnail: './images/15.png',
    experience: 11,
    rating: 4,
    id: 15,
    subject: 'German',
    lesson_type: 'Group',
  },
  {
    gender: 'Male',
    title: 'Mr',
    full_name: 'Andrew York',
    b_date: '1975-01-11T20:08:25.350Z',
    age: 44,
    email: 'Andrew.York@example.com',
    phone: '1122-6-83-54',
    picture_large: './images/16.png',
    picture_thumbnail: './images/16.png',
    experience: 23,
    rating: 5,
    id: 16,
    subject: 'German',
    lesson_type: 'Group',
  },
  {
    gender: 'Female',
    title: 'Ms',
    full_name: 'Sarah Rose',
    b_date: '1985-01-11T20:08:25.350Z',
    age: 34,
    email: 'Sarah.Rose@example.com',
    phone: '1122-6-83-54',
    picture_large: './images/17.png',
    picture_thumbnail: './images/17.png',
    experience: 8,
    rating: 10,
    id: 17,
    subject: 'German',
    lesson_type: 'Group',
  },
  {
    gender: 'Male',
    title: 'Mr',
    full_name: 'Ihor Loyko',
    b_date: '1983-01-11T20:08:25.350Z',
    age: 38,
    email: 'Ihor.Loyko@example.com',
    phone: '1122-6-83-54',
    picture_large: './images/18.png',
    picture_thumbnail: './images/18.png',
    experience: 14,
    rating: 9,
    id: 18,
    subject: 'German',
    lesson_type: 'Group',
  },
  {
    gender: 'Male',
    title: 'Mr',
    full_name: 'Elon Mask',
    b_date: '1971-06-28T20:08:25.350Z',
    age: 50,
    email: 'Elon.Mask@example.com',
    phone: '123-456-789',
    picture_large: './images/19.png',
    picture_thumbnail: './images/19.png',
    experience: 35,
    rating: 10,
    id: 19,
    subject: 'French',
    lesson_type: 'Group',
  },
  {
    gender: 'Female',
    title: 'Ms',
    full_name: 'Sofia Bale',
    b_date: '1980-08-12T20:08:25.350Z',
    age: 41,
    email: 'Sofia.Bale@example.com',
    phone: '1122-6-83-54',
    picture_large: './images/20.png',
    picture_thumbnail: './images/20.png',
    experience: 18,
    rating: 10,
    id: 20,
    subject: 'French',
    lesson_type: 'Group',
  },
  {
    gender: 'Female',
    title: 'Ms',
    full_name: 'Anna Fang',
    b_date: '1990-08-12T20:08:25.350Z',
    age: 31,
    email: 'Anna.Fang@example.com',
    phone: '1122-6-83-54',
    picture_large: './images/21.png',
    picture_thumbnail: './images/21.png',
    experience: 8,
    rating: 3,
    id: 21,
    subject: 'Spanish',
    lesson_type: 'Group',
  },
  {
    gender: 'Male',
    title: 'Mr',
    full_name: 'Ivan Chub',
    b_date: '1976-01-11T20:08:25.350Z',
    age: 45,
    email: 'Ivan.Chub@example.com',
    phone: '923-476-789',
    picture_large: './images/22.png',
    picture_thumbnail: './images/22.png',
    experience: 15,
    rating: 8,
    id: 22,
    subject: 'Spanish',
    lesson_type: 'Group',
  },
  {
    gender: 'Male',
    title: 'Mr',
    full_name: 'Elvis Chin',
    b_date: '1984-01-11T20:08:25.350Z',
    age: 37,
    email: 'Elvis.Chin@example.com',
    phone: '222-476-789',
    picture_large: './images/23.png',
    picture_thumbnail: './images/23.png',
    experience: 9,
    rating: 8,
    id: 23,
    subject: 'French',
    lesson_type: 'Group',
  },
  {
    gender: 'Male',
    title: 'Mr',
    full_name: 'Ted Cruse',
    b_date: '1964-01-11T20:08:25.350Z',
    age: 57,
    email: 'Ted Cruse@example.com',
    phone: '333-444-555',
    picture_large: './images/24.png',
    picture_thumbnail: './images/24.png',
    experience: 29,
    rating: 7,
    id: 24,
    subject: 'French',
    lesson_type: 'Group',
  },
  {
    gender: 'Female',
    title: 'Ms',
    full_name: 'Susan Bloom',
    b_date: '1988-08-08T20:08:25.350Z',
    age: 33,
    email: 'Susan.Bloom@example.com',
    phone: '8811-4383-12',
    picture_large: './images/25.png',
    picture_thumbnail: './images/25.png',
    experience: 10,
    rating: 6,
    id: 25,
    subject: 'Spanish',
    lesson_type: 'Group',
  }
  
];

/*
function addMissingKeys(array) {
  const result = [];
  array.forEach((user) => {
    const obj = user;
    if (!('gender' in user)) {
      obj.gender = null;
    }
    if (!('title' in user)) {
      obj.title = null;
    }
    if (!('full_name' in user)) {
      obj.full_name = null;
    }
    if (!('city' in user)) {
      obj.city = null;
    }
    if (!('state' in user)) {
      obj.state = null;
    }
    if (!('country' in user)) {
      obj.country = null;
    }
    if (!('coordinates' in user)) {
      obj.coordinates = {};
      obj.coordinates.latitude = null;
      obj.coordinates.longitude = null;
    }
    if (!('timezone' in user)) {
      obj.timezone = {};
      obj.timezone.offset = null;
      obj.timezone.description = null;
    }
    if (!('email' in user)) {
      obj.email = null;
    }
    if (!('b_date' in user)) {
      obj.b_date = null;
    }
    if (!('age' in user)) {
      obj.age = 0;
    }
    if (!('phone' in user)) {
      obj.phone = 0;
    }
    if (!('picture_large' in user)) {
      obj.picture_large = null;
    }
    if (!('picture_thumbnail' in user)) {
      obj.picture_thumbnail = null;
    }

    if (!('favorite' in user)) {
      obj.favorite = false;
    }
    if (!('course' in user)) {
      obj.course = null;
    }
    if (!('bg_color' in user)) {
      obj.bg_color = null;
    }
    if (!('note' in user)) {
      obj.note = 'none';
    }
    result.push(obj);
  });
  return result;
}

function createUserArray(array1, array2) {
  let res = [];
  const additionalNames = [];
  array2.forEach((user) => {
    additionalNames.push(user.full_name);
  });
  const array = array1;
  const alreadyHasKey = [
    'gender',
    'title',
    'full_name',
    'city',
    'state',
    'country',
    'postcode',
    'coordinates',
    'timezone',
    'email',
    'b_date',
    'age',
    'phone',
    'picture_large',
    'picture_thumbnail',
  ];
  array.forEach((user) => {
    const obj = {};
    Object.keys(user).forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(user, key)) {
        if (alreadyHasKey.includes(key)) {
          obj[key] = user[key];
        }
        if (key === 'name') {
          obj.title = user[key].title;
          obj.full_name = `${user[key].first} ${user[key].last}`;
        }
        if (key === 'location') {
          obj.city = user[key].city;
          obj.state = user[key].state;
          obj.country = user[key].country;
          obj.postcode = user[key].postcode;
          obj.coordinates = user[key].coordinates;
          obj.timezone = user[key].timezone;
        }

        if (key === 'dob') {
          obj.b_date = user[key].date;
          obj.age = user[key].age;
        }
        if (key === 'picture') {
          obj.picture_large = user[key].large;
          obj.picture_thumbnail = user[key].thumbnail;
        }
        if (key === 'favorite') {
          obj.favorite = user[key];
        }
      }
    });
    res.push(obj);
  });

  const result = [];

  res = addMissingKeys(res);
  res.forEach((user1) => {
    let notFound = true;
    array2.forEach((user) => {
      if (user1.full_name === user.full_name) {
        const obj = user;
        if ('gender' in user) {
          obj.gender = user.gender;
        } else {
          obj.gender = user1.gender;
        }
        if ('title' in user) {
          obj.title = user.title;
        } else {
          obj.title = user1.title;
        }
        if ('full_name' in user) {
          obj.full_name = user.full_name;
        } else {
          obj.full_name = user1.full_name;
        }
        if ('city' in user) {
          obj.city = user.city;
        } else {
          obj.city = user1.city;
        }
        if ('state' in user) {
          obj.state = user.state;
        } else {
          obj.state = user1.state;
        }
        if ('country' in user) {
          obj.country = user.country;
        } else {
          obj.country = user1.country;
        }
        if ('coordinates' in user) {
          obj.coordinates = {};
          obj.coordinates.latitude = user.coordinates.latitude;
          obj.coordinates.longitude = user.coordinates.longitude;
        } else {
          obj.coordinates = {};
          obj.coordinates.latitude = user1.coordinates.latitude;
          obj.coordinates.longitude = user1.coordinates.longitude;
        }
        if ('timezone' in user) {
          obj.timezone = {};
          obj.timezone.offset = user.timezone.offset;
          obj.timezone.description = user.timezone.description;
        } else {
          obj.timezone = {};
          obj.timezone.offset = user1.timezone.offset;
          obj.timezone.description = user1.timezone.description;
        }

        if ('email' in user) {
          obj.email = user.email;
        } else {
          obj.email = user1.email;
        }
        if ('b_date' in user) {
          obj.b_date = user.b_date;
        } else {
          obj.b_date = user1.b_date;
        }
        if ('age' in user) {
          obj.age = user.age;
        } else {
          obj.age = user1.age;
        }
        if ('phone' in user) {
          obj.phone = user.phone;
        } else {
          obj.phone = user1.phone;
        }
        if ('picture_large' in user) {
          obj.picture_large = user.picture_large;
        } else {
          obj.picture_large = user1.picture_large;
        }
        if ('picture_thumbnail' in user) {
          obj.picture_thumbnail = user.picture_thumbnail;
        } else {
          obj.picture_thumbnail = user1.picture_thumbnail;
        }
        if ('favorite' in user) {
          obj.favorite = user.favorite;
        } else {
          obj.favorite = user1.favorite;
        }
        if ('course' in user) {
          obj.course = user.course;
        } else {
          obj.course = user1.course;
        }
        if ('bg_color' in user) {
          obj.bg_color = user.bg_color;
        } else {
          obj.bg_color = user1.bg_color;
        }
        if ('note' in user) {
          obj.note = user.note;
        } else {
          obj.note = user1.note;
        }
        result.push(obj);
        notFound = false;
      }
    });
    if (notFound) {
      result.push(user1);
    }
  });
  let id = 0;
  const resultFinal = [];
  result.forEach((user) => {
    const userFinal = user;
    userFinal.id = id;
    id += 1;
    userFinal.gender = user.gender.charAt(0).toUpperCase() + user.gender.slice(1);
    resultFinal.push(userFinal);
  });
  return resultFinal;
}
*/

function validation(user) {
  const arrayStrings = ['full_name', 'gender'];
  let checkValue = true;
  arrayStrings.forEach((check) => {
    if (!(typeof user[check] === 'string')) {
      checkValue = false;
      return;
    }
    const str = user[check];
    if (!(str[0] === str[0].toUpperCase())) {
      checkValue = false;
    }
  });
  const myArr = user.full_name.split(' ');
  checkValue = checkValue && myArr[1][0] === myArr[1][0].toUpperCase();

  const rePhone = new RegExp(/[+]?[(]?[0-9]+[)]?[-\s.]?[0-9]+[-\s.]?[0-9]+/);
  const reEmail = new RegExp(/([\w-.]+@([\w-]+.)+[\w-]{2,4})?/);
  return (
    checkValue && typeof user.age === 'number' && rePhone.test(user.phone) && reEmail.test(user.email)
  );
}

function filtration(object, array) {
  const result = array.filter((user) => {
    let res = true;
    Object.keys(object).forEach((key) => {
      if (
        'age_min' in object
        && 'age_max' in object
        && (user.age < object.age_min || user.age > object.age_max)
      ) {
        res = false;
      }
      if('rate_min' in object && (user.rating < object.rate_min)){
        res = false;
      }
      if('exp_min' in object && (user.experience < object.exp_min)){
        res = false;
      }
      if (Object.prototype.hasOwnProperty.call(user, key)) {
        if (!(object[key] === user[key])) {
          res = false;
        }
      }
    });
    return res;
  });
  return result;
}

function sorting(param, order, array) {
  return array.sort((a, b) => {
    if (order) {
      return a[param] > b[param] ? 1 : -1;
    }
    return a[param] < b[param] ? 1 : -1;
  });
}

function search(param, value, array) {
  if (param === 'age' || param === 'rating') {
    const result = array.filter((user) => user[param] !== null && user[param] === value);
    return result;
  }
  const result = array.filter((user) => user[param] !== null && user[param].includes(value));
  return result;
}

function task6(object, array) {
  const found = filtration(object, array);

  return (100 * found.length) / array.length;
}

function userArray(arr){
  let id = 0;
  const resultFinal = [];
  arr.forEach((user) => {
    const userFinal = user;
    userFinal.id = id;
    id += 1;
    userFinal.gender = user.gender.charAt(0).toUpperCase() + user.gender.slice(1);
    resultFinal.push(userFinal);
  });
  return resultFinal;
}

let lastPage = 1;
const users = userArray(randomUserMock);

const obj = {};
const topTeacher = document.querySelector('.grid-5-teachers');
const favTeacher = document.querySelector('.grid-5-teachers-fav');
const teacherTable = document.querySelector('tbody');
let filtered = users;
let addTop;
let addFav;
function teacherPopUp(e) {
  const popUpInfo = document.querySelector('#teacher-info');
  const id = e.target.closest('.image-column').getAttribute('data-id');
  window.location.href = '#teacher-info';
  const user = users[id];
 
  popUpInfo.querySelector('h2').textContent = user.full_name;

  document.getElementById('pop-age-gend').textContent = `${user.age},  ${user.gender[0]}`;
  document.getElementById('teach-pic').setAttribute('src', user.picture_large);

  document.getElementById('pop-subject').textContent = `${user.subject}`;
  document.getElementById('pop-exp').textContent = `${user.experience}`;
  document.getElementById('pop-rating').textContent = `${user.rating}`;

  document.getElementById('pop-email').textContent = `${user.email}`;
  document.getElementById('pop-tel').textContent = `${user.phone}`;

  /*if (user.rating > 6) {
    document.getElementById('check-fav').style.color = '#eed70e';
    document.getElementById('check-fav').style.textShadow = '1px 2px 1px #000';
  } else {
    document.getElementById('check-fav').style.color = 'white';
    document.getElementById('check-fav').style.textShadow = '0 0 0 #000';
  }*/
  /*
  document.getElementById('check-fav').onclick = function popUpFunc() {
    if (user.rating > 6) {
      document.getElementById('check-fav').style.color = 'black';
      document.getElementById('check-fav').style.textShadow = '0 0 0 #000';
      addTop();
      addFav();
    } else {
      document.getElementById('check-fav').style.color = '#eed70e';
      document.getElementById('check-fav').style.textShadow = '1px 2px 1px #000';
      addTop();
      addFav();
    }
  };*/
}

function getInitials(name) {
  const splitted = name.trim().split(' ');
  return `${splitted[0].charAt(0)}.${
    splitted[1] ? `${splitted[1].charAt(0)}.` : ''
  }`;
}

function addTeachersTop() {
  topTeacher.innerHTML = '';
  
  filtered.forEach((user) => {
    const newTeacher = document.createElement('div');
    newTeacher.addEventListener('click', teacherPopUp, false);
    newTeacher.className = 'image-column';
    newTeacher.setAttribute('data-id', user.id);
    const name = user.full_name.split(' ', 2);
    let str = '<div class="avatar">';
    if (user.rating > 6) {
      str += '<span class="star">&#9733;</span>';
    } else {
      str += '<span class="star" hidden>&#9733;</span>';
    }
    if (user.picture_large) {
      str += `<img src="${user.picture_large}" alt="Teachers picture" /></div></div>`;
    } else {
      str += `<span class="letters">${getInitials(user.full_name)}</span></div></div>`;
    }
    str += `<span class="name">${name[0]}</span><span class="name">${name[1]}</span></div>`; /*<span class="country">${user.country}</span> */
    newTeacher.innerHTML = str;
    topTeacher.append(newTeacher);
  });
}
addTop = addTeachersTop;
const maxRows = 3;
let currentPage = 1;

let addTeachers;



function setPage(page) {
  currentPage = page;
  addTeachers();
}

function displayPages() {
  document.getElementById('pagination').innerHTML = '';
  if (lastPage > 1) {
    const navElem = document.getElementById('pagination');
    if (currentPage > 1) {
      const elemPrev = document.createElement('span');
      elemPrev.id = 'prevButton';
      elemPrev.textContent = 'Prev';
      elemPrev.onclick = () => {
        if (currentPage > 1) currentPage -= 1;
        addTeachers();
        displayPages();
      };
      navElem.appendChild(elemPrev);
    }
    for (let i = 1; i <= lastPage; i += 1) {
      const spElem = document.createElement('span');
      if (i === currentPage) {
        spElem.setAttribute('class', 'current');
      }
      spElem.onclick = () => setPage(i);
      spElem.textContent = i;
      navElem.appendChild(spElem);
    }
    if (currentPage < lastPage) {
      const elemNext = document.createElement('span');
      elemNext.id = 'nextButton';
      elemNext.textContent = 'Next';
      elemNext.onclick = () => {
        if (currentPage <= lastPage) currentPage += 1;
        addTeachers();
        displayPages();
      };
      navElem.appendChild(elemNext);
    }
  } else document.getElementById('pagination').innerHTML = '';
}

function addTeachersTable() {
  teacherTable.innerHTML = '';
  for (
    let i = maxRows * (currentPage - 1);
    filtered[i] && i < maxRows * (currentPage - 1) + maxRows;
    i += 1
  ) {
    const user = filtered[i];
    let strTable = teacherTable.innerHTML;
    /*let bdate = 'unknown';
    if (user.b_date !== null) {
      bdate = user.b_date.substr(0, 10);
    }*/
    strTable += `<tr><td>${user.full_name}</td><td>${user.age}</td><td>${user.gender}</td><td>${user.experience}</td><td>${user.rating}</td></tr>`; /**<td>${user.country}</td> <td>${bdate}</td>*/
    teacherTable.innerHTML = strTable;
  }
  displayPages();
}

addTeachers = addTeachersTable;

function addTeachersFav() {
  favTeacher.innerHTML = '';
  users.forEach((user) => {
    if (user.rating > 6) {
      const newTeacher = document.createElement('div');
      newTeacher.addEventListener('click', teacherPopUp, false);
      newTeacher.className = 'image-column';
      newTeacher.setAttribute('data-id', user.id);
      const name = user.full_name.split(' ', 2);
      let str = '<div class="avatar">';
      if (user.rating > 6) {
        str += '<span class="star">&#9733;</span>';
      } else {
        str += '<span class="star" hidden>&#9733;</span>';
      }
      if (user.picture_large) {
        str += `<img src="${user.picture_large}" alt="Teachers picture" /></div></div>`;
      } else {
        str += `<span class="letters">${getInitials(user.full_name)}</span></div></div>`;
      }
      str += `<span class="name">${name[0]}</span><span class="name">${name[1]}</span></div>`; /**<span class="country">${user.country}</span> */
      newTeacher.innerHTML = str;
      favTeacher.append(newTeacher);
    }
  });
}
addFav = addTeachersFav;
const filterGender = document.querySelector('#gender-filter');
filterGender.onchange = function filtGenderFunc() {
  const gender = this.options[this.selectedIndex].text;
  if (gender !== 'All') {
    obj.gender = gender;
  } else {
    delete obj.gender;
  }
  filtered = filtration(obj, users);
  lastPage = Math.ceil(filtered.length / maxRows);
  addTeachersTop();
  addTeachersTable();
};



function filtSubject(subject) {
  if(subject){
    obj.subject = subject;
  } else {
    delete obj.subject;
  }
  filtered = filtration(obj, users);
  lastPage = Math.ceil(filtered.length / maxRows);
  addTeachersTop();
  addTeachersTable();
};

/*
const filterCountry = document.querySelector('#country-filter');
filterCountry.onchange = function filtCountryFunc() {
  const country = this.options[this.selectedIndex].text;
  if (country !== 'All') {
    obj.country = country;
  } else {
    delete obj.country;
  }
  filtered = filtration(obj, users);
  addTeachersTop();
  addTeachersTable();
};
*/

/*
const filterFav = document.querySelector('#fav-filter');
filterFav.onclick = function filtFavFunc() {
  if (this.checked) {
    obj.rating = this.checked;
  } else {
    delete obj.favorite;
  }
  filtered = filtration(obj, users);
  addTeachersTop();
  addTeachersTable();
};
*/


const searchField = document.querySelector('#search-field');

const ageSearch = document.querySelector('#search-age');
ageSearch.onclick = function searchAgeFunc() {
  searchField.innerHTML = '';
  const str = '<input type="number" id="search" name="search" step="1" value="18" min="18" max="100" /><button class="btn-search">Search</button>';
  searchField.innerHTML = str;
};

const nameSearch = document.querySelector('#search-name');
nameSearch.onclick = function searchNameFunc() {
  searchField.innerHTML = '';
  const str = '<input type="search" id="search" name="search" placeholder="Введіть дані для пошуку" aria-label="Search through site content" /><button class="btn-search">Search</button>';
  searchField.innerHTML = str;
};

const noteSearch = document.querySelector('#search-rating');
noteSearch.onclick = function searchNoteFunc() {
  searchField.innerHTML = '';
  /*const str = '<input type="search" id="search" name="search" placeholder="Enter note to search" aria-label="Search through site content" /><button class="btn-search">Search</button>';*/
  const str = '<input type="number" id="search" name="search" step="1" value="1" min="1" max="10" /><button class="btn-search">Search</button>';
  searchField.innerHTML = str;
};

let tsubject;

const searchTeacher = document.querySelector('#search-field');
searchTeacher.onsubmit = function searchTeacherFunc() {
  const { value } = document.querySelector('#search');
  
  let teacherSubject;
  if(filtered){
    teacherSubject = filtered[0].subject;
    tsubject = teacherSubject;
  }

  if (document.querySelector('#search-age').checked) {
    const age = parseInt(value, 10);

    const teacherSubj = search('subject', tsubject, users);

    filtered = search('age', age, teacherSubj);

  } else if (document.querySelector('#search-rating').checked) {
    const rating = parseInt(value, 10);

    const teacherSubj = search('subject', tsubject, users);

    filtered = search('rating', rating, teacherSubj);

  } else {
    if(value !== ''){

      const teacherSubj = search('subject', tsubject, users);

      filtered = search('full_name', value, teacherSubj);
    } else {
      /*filtered = search('subject', tsubject, users);*/
    }
  }
  addTeachersTable();
  addTeachersTop();
  return false;
};
/*
const addTeacher = document.querySelector('#add-teacher-form');
addTeacher.onsubmit = function addTeacherFunc() {
  const objct = {};
  objct.full_name = `${this.querySelector('#add-name').value} ${
    this.querySelector('#add-last-name').value
  }`;
  objct.age = parseInt(this.querySelector('#add-age').value, 10);
  const countrySelect = this.querySelector('#add-country');
  objct.country = countrySelect.options[countrySelect.selectedIndex].text;
  objct.city = this.querySelector('#add-city').value;
  objct.email = this.querySelector('#add-email').value;
  objct.phone = this.querySelector('#add-phone').value;
  objct.bg_color = this.querySelector('#add-color').value;
  const gender = document.getElementsByName('gender-add');
  for (let i = 0; i < gender.length; i += 1) {
    if (gender[i].type === 'radio' && gender[i].checked) {
      objct.gender = gender[i].value;
    }
  }
  const arr = [objct];
  const objComplete = addMissingKeys(arr)[0];
  if (validation(objComplete)) {
    alert('Teacher added!');
    objct.id = users.length;
    users.push(objct);
    filtered.push(objct);
    addTeachersTop();
    addTeachersTable();
  } else {
    alert('Wrong values entered!');
  }
  return false;
};
*/
function sortName() {
  const orderCheck = document.querySelector('#sort-dir');
  if (orderCheck.checked) {
    orderCheck.checked = false;
  } else {
    orderCheck.checked = true;
  }
  if (orderCheck.checked) {
    filtered = sorting('full_name', true, filtered);
  } else {
    filtered = sorting('full_name', false, filtered);
  }
  addTeachersTable();
  addTeachersTop();
}

function sortAge() {
  const orderCheck = document.querySelector('#sort-dir');
  if (orderCheck.checked) {
    orderCheck.checked = false;
  } else {
    orderCheck.checked = true;
  }
  if (orderCheck.checked) {
    filtered = sorting('age', true, filtered);
  } else {
    filtered = sorting('age', false, filtered);
  }
  addTeachersTable();
  addTeachersTop();
}

function sortGender() {
  const orderCheck = document.querySelector('#sort-dir');
  if (orderCheck.checked) {
    orderCheck.checked = false;
  } else {
    orderCheck.checked = true;
  }
  if (orderCheck.checked) {
    filtered = sorting('gender', true, filtered);
  } else {
    filtered = sorting('gender', false, filtered);
  }
  addTeachersTable();
  addTeachersTop();
}

function sortExperience() {
  const orderCheck = document.querySelector('#sort-dir');
  if (orderCheck.checked) {
    orderCheck.checked = false;
  } else {
    orderCheck.checked = true;
  }
  if (orderCheck.checked) {
    filtered = sorting('experience', true, filtered);
  } else {
    filtered = sorting('experience', false, filtered);
  }
  addTeachersTable();
  addTeachersTop();
}

function sortRating() {
  const orderCheck = document.querySelector('#sort-dir');
  if (orderCheck.checked) {
    orderCheck.checked = false;
  } else {
    orderCheck.checked = true;
  }
  if (orderCheck.checked) {
    filtered = sorting('rating', true, filtered);
  } else {
    filtered = sorting('rating', false, filtered);
  }
  addTeachersTable();
  addTeachersTop();
}

/*
function sortCountry() {
  const orderCheck = document.querySelector('#sort-dir');
  if (orderCheck.checked) {
    orderCheck.checked = false;
  } else {
    orderCheck.checked = true;
  }
  if (orderCheck.checked) {
    filtered = sorting('country', true, filtered);
  } else {
    filtered = sorting('country', false, filtered);
  }
  addTeachersTable();
}*/

/*
function sortBDay() {
  const orderCheck = document.querySelector('#sort-dir');
  if (orderCheck.checked) {
    orderCheck.checked = false;
  } else {
    orderCheck.checked = true;
  }
  if (orderCheck.checked) {
    filtered = sorting('b_date', true, filtered);
  } else {
    filtered = sorting('b_date', false, filtered);
  }
  addTeachersTable();
}*/

document.getElementById('table-name').onclick = sortName;
document.getElementById('table-age').onclick = sortAge;
document.getElementById('table-gender').onclick = sortGender;
document.getElementById('table-experience').onclick = sortExperience; 
document.getElementById('table-rating').onclick = sortRating;


/*document.getElementById('table-country').onclick = sortCountry;*/
/*document.getElementById('table-bday').onclick = sortBDay;*/

const filterAgeMin = document.querySelector('#age-min-filter');
const filterAgeMax = document.querySelector('#age-max-filter');
function ageChange() {
  const ageMin = filterAgeMin.value;
  const ageMax = filterAgeMax.value;
  obj.age_min = ageMin;
  obj.age_max = ageMax;
  filtered = filtration(obj, users);
  lastPage = Math.ceil(filtered.length / maxRows);
  addTeachersTop();
  addTeachersTable();
}
filterAgeMin.addEventListener('change', ageChange);
filterAgeMax.addEventListener('change', ageChange);

const filterRatingMin = document.querySelector('#rating-filter');
function ratingChange() {
  const rateMin = filterRatingMin.value;
  obj.rate_min = rateMin;
  filtered = filtration(obj, users);
  lastPage = Math.ceil(filtered.length / maxRows);
  addTeachersTop();
  addTeachersTable();
}
filterRatingMin.addEventListener('change', ratingChange);

const filterExperienceMin = document.querySelector('#experience-filter');
function experienceChange() {
  const experienceMin = filterExperienceMin.value;
  obj.exp_min = experienceMin;
  filtered = filtration(obj, users);
  lastPage = Math.ceil(filtered.length / maxRows);
  addTeachersTop();
  addTeachersTable();
}
filterExperienceMin.addEventListener('change', experienceChange);

task6(obj, users);
/*
function addCountry(all) {
  const countryList = [
    'Afghanistan',
    'Åland Islands',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antarctica',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bonaire, Sint Eustatius and Saba',
    'Bosnia and Herzegovina',
    'Botswana',
    'Bouvet Island',
    'Brazil',
    'British Indian Ocean Territory',
    'Brunei Darussalam',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cayman Islands',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Christmas Island',
    'Cocos (Keeling) Islands',
    'Colombia',
    'Comoros',
    'Congo',
    'Congo',
    'Cook Islands',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Curaçao',
    'Cyprus',
    'Czechia',
    "Côte d'Ivoire",
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini',
    'Ethiopia',
    'Falkland Islands',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Guiana',
    'French Polynesia',
    'French Southern Territories',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guadeloupe',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Heard Island and McDonald Islands',
    'Holy See',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea',
    'Kuwait',
    'Kyrgyzstan',
    "Lao People's Democratic Republic",
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macao',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    'Northern Mariana Islands',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine, State of',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Pitcairn',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Republic of North Macedonia',
    'Romania',
    'Russian Federation',
    'Rwanda',
    'Réunion',
    'Saint Barthélemy',
    'Saint Helena, Ascension and Tristan da Cunha',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Martin',
    'Saint Pierre and Miquelon',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Sint Maarten',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Georgia and the South Sandwich Islands',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Svalbard and Jan Mayen',
    'Sweden',
    'Switzerland',
    'Syrian Arab Republic',
    'Taiwan',
    'Tajikistan',
    'Tanzania, United Republic of',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tokelau',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks and Caicos Islands',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom of Great Britain and Northern Ireland',
    'United States Minor Outlying Islands',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Venezuela',
    'Viet Nam',
    'Virgin Islands',
    'Virgin Islands (U.S.)',
    'Wallis and Futuna',
    'Western Sahara',
    'Yemen',
    'Zambia',
    'Zimbabwe',
  ];*/
  /*
  if (all) {
    countryList.splice(0, 0, 'All');
  }
  let str = '';
  countryList.forEach((country) => {
    str += `<option value="${country}">${country}</option>`;
  });
  return str;
}
const countryFilter = document.querySelectorAll('.country');
countryFilter[0].innerHTML = addCountry(true);
countryFilter[1].innerHTML = addCountry(false);*/
addTeachersTop();
addTeachersFav();
addTeachersTable();
