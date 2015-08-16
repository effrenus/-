import local from './local_config';

const defaultConfig = {
	mail: {
		// учетка для пересылки тестовых экземпляров
		user: 'mail@ya.ru',
		pass: 'password',
		// кто будет получать письма
		to: 'test@email.com'
	},
	images: {
		//адрес картинок на уделенном сервере, если не планируется внедрять в письмо
		remoteURL: 'https://dl.dropboxusercontent.com/'
	},
	paths: {
		images: './dist/images',
		styles: './dist/styles'
	}
}

export default Object.assign({}, defaultConfig, local);
