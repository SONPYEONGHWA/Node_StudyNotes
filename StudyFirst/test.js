const nodemailer = require('nodemailer');
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "fedf69afff008f",
      pass: "edaa9f754e0483"
    }
};

const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if(error) {
            console.log(error);
        } else {
            console.log(info);
            return info.response;
        }
    });
};

let email_data = {
    from: "ssrsph@naver.com",
    to: "thsvudghk@gmail.com",
    subject: "hello i'm pyeong hwa son",
    text: "Came here to kill node js"
}

send(email_data);