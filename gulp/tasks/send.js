import fs from 'fs';
import gulp from 'gulp';
import nodemailer from 'nodemailer';
import config from '../config';

gulp.task('send', () => {
		let {user, pass, to} = config.mail;
		let transporter = nodemailer.createTransport({
			service: 'Yandex',
			auth: {user, pass}
		});

		let mailOptions = {
			from: user,
			subject: 'Gulp tesm mail',
			html: fs.readFileSync('./dist/index.html').toString(),
			to
		};

		transporter.sendMail(mailOptions, error, info => {
			if (error) {
				return console.log(error);
			}
			console.log(`Message sent: ${info.response}`);
		});
})
