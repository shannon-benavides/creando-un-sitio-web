$(document).ready(function(){
				//ponemos codigo javascript que utiliza jquery
				configurarInicio();
				$('.myicono').click(function(e){
					$('#navbar ul').toggleClass('lista-sm')
				})

				function configurarInicio(){
					var urlpath = window.location.pathname;
					console.log(urlpath);
					$('nav a').each(function(){
						var href = $(this).attr('href');
						console.log(href);
						var indice = urlpath.length - href.length;
						console.log(urlpath.substring(indice));
						if(urlpath.substring(indice) === href){
							console.log('match');
							$(this).closest('li').addClass('active');
						}
					})

				}
			})