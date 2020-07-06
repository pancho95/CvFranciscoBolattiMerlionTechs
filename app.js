//content of web

var data = {
	'en':{
		'profesion':'Junior Developer',
		'contact':'Contact',
		'objective':'Objective',
		'bio':
		'I am a person passionate about the development of web applications, wanting to pour all my knowledge into a company in order to continue training as a programmer.',
		'skills':'Skills',
		'education':'Academic Formation',
		'title1':'Mobile software development',
		'time1':'July 2019 - October 2019',
		'description-edu1':'Development of mobile applications using technologies such as: HTML5, CSS3, Javascript, Jquery, Framework 7, Firebase, Apache Cordova, Phonegap, design UX/UI.',
		'place2':'TERCIARY URQUIZA',
		'title2':'Software Development Technician',
		'time2':'April 2019 - Present',
		'description-edu2':'2nd year student of the degree',
		'work-exp':'Work Experience',
		'title-work1':'FREELANCE DEVELOPER',
		'place3':'Freelance',
		'time3':'December 2019 - Present',
		'des-work1':'Updating and maintenance of websites:',
		'title-work2':'INTERN',
		'place4':'Courts',
		'time4':'April 2016 - April 2020',
		'des-work2':'Attention to the public and management of files in Labor Court No. 5 of the Provincial Courts of Rosario.'
	},
	'es':{
		'profesion':'Desarrollador Junior',
		'contact':'Contacto',
		'objective':'Objetivo',
		'bio':
		'Soy una persona apasionada por el desarrollo de aplicaciones web, con ganas de volcar todos mis conocimientos en una empresa para poder seguir formándome como programador.',
		'skills':'Habilidades',
		'education':'Formación Académica',
		'title1':'Desarrollo de aplicaciones móviles',
		'time1':'Julio 2019 - Octubre 2019',
		'description-edu1':'Desarrollo de aplicaciones móviles usando tecnologías como: HTML5, CSS3, Javascript, Jquery, Framework 7, Firebase, Apache Cordova, Phonegap, diseño UX/UI.',
		'place2':'TERCIARIO URQUIZA',
		'title2':'Técnico en desarrollo de software',
		'time2':'Abril 2019 - Actualidad',
		'description-edu2':'Estudiante de 2° año de la carrera',
		'work-exp':'Experiencia Laboral',
		'title-work1':'DESARROLLADOR FREELANCE',
		'place3':'Autónomo',
		'time3':'Diciembre 2019 - Actualidad',
		'des-work1':'Actualización y mantenimiento de los sitios web:',
		'title-work2':'PASANTE',
		'place4':'Poder Judicial',
		'time4':'Abril 2016 - Abril 2020',
		'des-work2':'Atención al público y gestión de expedientes en el Juzgado Laboral N°5 de los Tribunales Provinciales de Rosario.'

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



// function to change to dark mode

	function darkmode(){
		var body = document.body;

		var header = document.querySelector('.header');

		var work = document.querySelector('.border-work');

		var edu = document.querySelector('.border-edu');

		var web1 = document.querySelector('.web1');
		var web2 = document.querySelector('.web2');
		
		// body and header color change
		body.classList.toggle('bg-dark');
		body.classList.toggle('text-white');
		header.classList.toggle('bg-image');
		header.classList.toggle('bg-secondary');
		
		// border color change

		work.classList.toggle('border-work1');

		edu.classList.toggle('border-edu1');

		// change color links
		if (web1.classList.contains('text-dark') && web2.classList.contains('text-dark') ) {

			web1.classList.remove('text-dark')
			web1.classList.add('text-white')

			web2.classList.remove('text-dark')
			web2.classList.add('text-white')


		  } else {

			web1.classList.remove('text-white')
			web1.classList.add('text-dark')

			web2.classList.remove('text-white')
			web2.classList.add('text-dark')


		  }
		

		
	}


