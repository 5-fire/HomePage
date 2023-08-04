const data = {
    "fullName": 'Minh D. Vu',
    "jobName": 'Software Executive',
    "birthYear": 1990,
    "address": 'Ho Chi Minh City, Viet Nam',
    "email": 'vd.minh@outlook.com',
    "phone": '0906 792 790',
    "homePage": 'https://vudumi.com',
    "dotnetFromYear": 2020,
    "retailFromYear": 2015,
    "retailOpsFromYear": 2018,
    "helpdeskFromYear": 2012,
}

const hostname = window.location.hostname;
const currentYear = new Date().getFullYear();

$(document).ready(function () {
    $('.fullname').html(data.fullName);
    $('.jobname').html(data.jobName);
    $('.linkedin-link').attr('href', 'https://www.linkedin.com/in/hnimvu');
    $('.instagram-link').attr('href', 'https://www.instagram.com/hnim.uv/');
    $('.github-link').attr('href', 'https://github.com/mizuvu');

    $('.donet-years').html(currentYear - data.dotnetFromYear + 1);
    $('.retail-years').html(currentYear - data.retailFromYear);
    $('.retail-ops-years').html(currentYear - data.retailOpsFromYear + 1);
    $('.helpdesk-years').html(data.helpdeskFromYear);

    $('.address').html(data.address);
    $('.email').html(data.email);
    $('.phone').html(data.phone);
    $('.website').html(data.homePage);
});
