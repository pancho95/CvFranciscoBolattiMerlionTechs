//content of web

var data = {
	'en':{
		'profesion':'Junior Developer',
		'contact':'Contact',
		'objective':'Objective',
		'bio':
		'I am a person passionate about the development of mobile applications, wanting to pour all my knowledge into a company in order to continue training as a programmer.',
		'skills':'Skills',
		'education':'Academic Formation',
		'title1':'Mobile software development',
		'time1':'July 2019 - October 2019',
		'description-edu1':'Development of mobile applications using technologies such as: HMTL5, CSS3, Javascript, Jquery, Framework 7, Firebase, Apache Cordova, Phonegap, design UX/UI.',
		'place2':'Terciary Urquiza',
		'title2':'Software Development Technician',
		'time2':'April 2019 - Present',
		'description-edu2':'2nd year student of the degree',
		'work-exp':'Work Experience',
		'title-work1':'INTERN',
		'place3':'Courts',
		'time3':'April 2016 - April 2020',
		'des-work1':'Attention to the public and management of files in Labor Court No. 5 of the Provincial Courts of Rosario.',
		'title-work2':'ADMINISTRATIVE',
		'time4':'March 2013 - March 2016',
		'des-work2':'Carrying out administrative procedures, telephone assistance and receiving visits, correspondence management, organization and filing of documentation.'
	},
	'es':{
		'profesion':'Desarrollador Junior',
		'contact':'Contacto',
		'objective':'Objetivo',
		'bio':
		'Soy una persona apasionada por el desarrollo de aplicaciones móviles, con ganas de volcar todos mis conocimientos en una empresa para poder seguir formándome como programador.',
		'skills':'Habilidades',
		'education':'Formación Académica',
		'title1':'Desarrollo de aplicaciones móviles',
		'time1':'Julio 2019 - Octubre 2019',
		'description-edu1':'Desarrollo de aplicaciones móviles usando tecnologías como: HMTL5, CSS3, Javascript, Jquery, Framework 7, Firebase, Apache Cordova, Phonegap, diseño UX/UI.',
		'place2':'TERCIARIO URQUIZA',
		'title2':'Técnico en desarrollo de software',
		'time2':'Abril 2019 - Actualidad',
		'description-edu2':'Estudiante de 2° año de la carrera',
		'work-exp':'Experiencia Laboral',
		'title-work1':'PASANTE',
		'place3':'Poder Judicial',
		'time3':'Abril 2016 - Abril 2020',
		'des-work1':'Atención al público y gestión de expedientes en el Juzgado Laboral N°5 de los Tribunales Provinciales de Rosario.',
		'title-work2':'ADMINISTRATIVO',
		'time4':'Marzo 2013 - Marzo 2016',
		'des-work2':'Realización de trámites administrativos, atención telefónica y recepción de visitas, gestión de correspondencia, organización y archivo de la documentación.'

	}
}



//function to change language
function language(){
	$(function(){
		$('.translate').click(function(){
			var lang = $(this).attr('id');

			$('.lang').each(function(index, element){
				$(this).text(data[lang][$(this).attr('key')]);
			});
		});
	});
}










