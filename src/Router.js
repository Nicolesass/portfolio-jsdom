import * as tools from './tools';
import { PageAbout } from './pages/PageAbout';
import { PageProjects } from './pages/PageProjects';
import { PageContact } from './pages/PageContact';
import { Page404 } from './pages/Page404';

const pageNames = ['About', 'Projects', 'Contact'];

const currentPageIdCode = getSmartCurrentPageId();

export const getCurrentPage = () => {
	switch (currentPageIdCode) {
		case 'about':
			return PageAbout();
		case 'projects':
			return PageProjects();
		case 'contact':
			return PageContact();
		default:
			return Page404();
	}
}

const getPageIdCode = (pageName) => {
	pageName = tools.cleanCharactersToAscii(pageName);
	return pageName.toLowerCase();
}

export const getMenu = () => {
	const getMenuClass = (pageName) => {
		const pageIdCode = tools.cleanCharactersToAscii(pageName.toLowerCase());
		if (pageIdCode === currentPageIdCode) {
			return ` class="active"`
		} else {
			return '';
		}
	}

	return /*html*/`
	
			${pageNames.map(pageName => `<li><a href="${getPageIdCode(pageName)}"${getMenuClass(pageName)}>${pageName}</a></li>`).join('')}
	
`;
}


function getSmartCurrentPageId() {
	let currentPageIdCode = tools.getCurrentPageIdCode();
	currentPageIdCode = currentPageIdCode === '' ? tools.cleanCharactersToAscii(pageNames[0].toLowerCase()) : currentPageIdCode;
	return currentPageIdCode;
}
