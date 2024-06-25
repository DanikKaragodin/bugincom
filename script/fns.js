// Навешиваем события на элементы
jQuery(document).ready(function($){
	$(".cat_item").hover(
		function(event)
		{
			$(this).find('.cat_item_up_box').css('display', 'table');
		},
		function(event)
		{
			$(this).find('.cat_item_up_box').hide();
		}
	);
	
	// Убирающее значение в input
	$('input, textarea').focus(function(){
		var alt = $(this).attr('alt');
		var val = $(this).attr('value');
		if (val == alt) $(this).attr('value', '');
	});

	$('input, textarea').blur(function(){
		var alt = $(this).attr('alt');
		var val = $(this).attr('value');
		val = $.trim(val);
		if (val == '') $(this).attr('value', alt);
	});

	$('.basic-usage-demo').fancySelect();
	   
})


// Функция для отправки формы
function submit_form(id)
{
  $("#"+id+'_form').find('div:first').html('<input type="hidden" name="action" value="'+id+'" />');
  document.getElementById(id+'_form').submit();
  return false;
}

// Ставит автоматом на все ссылки blur()
function externalLinks()
{
  if (!document.getElementsByTagName) return;
  var anchors = document.links;
  for (var i=0; i < anchors.length; i++)
  {
    anchors[i].onfocus = function(e){this.blur();}
  }
}

// Фильтрация ввода в поля
function check_key(obj)
{
	$(obj).keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;
		
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;	
		
	
		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==39 ) return true;
				
		keyChar=String.fromCharCode(key);
		
		if(!/\d/.test(keyChar))	return false;
	});
}

// функция отслеживания нажатие Enter
function check_enter(obj)
{
	$(obj).keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;
		
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;	
		
		if (key == 13)
		{
			id = $(this).parents('form').prop('id');
			id = str_replace(id, '_form', '');
			submit_form(id);
			return false;
		}
	});
}

// Делает красивыми цены
function good_price(obj)
{	
	$(obj).each(function(){
		$(this).text( divided_by_3( str_replace($(this).text(), ' ', '') ) );
	});
}

// Задает значение в Cookie
function setCookie (name, value, expires, path, domain, secure)
{
  document.cookie = name + "=" + escape(value) +
    ((expires) ? "; expires=" + expires : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
}

// Получает значение Cookie
function getCookie(name)
{
  var cookie = " " + document.cookie;
  var search = " " + name + "=";
  var setStr = null;
  var offset = 0;
  var end = 0;
  if (cookie.length > 0)
  {
    offset = cookie.indexOf(search);
    if (offset != -1)
    {
      offset += search.length;
      end = cookie.indexOf(";", offset)
      if (end == -1)
      {
        end = cookie.length;
      }
      setStr = unescape(cookie.substring(offset, end));
    }
  }
  return(setStr);
}

// Возвращает первую позицию элемента в строке
function strpos(haystack, needle, offset)
{
  var i = haystack.indexOf(needle, offset);
  return i >= 0 ? i : false;
}

// Standart string replace functionality
function str_replace(haystack, needle, replacement) {
	var temp = haystack.split(needle);
	return temp.join(replacement);
}

// Needle may be a regular expression
function str_replace_reg(haystack, needle, replacement) {
	var r = new RegExp(needle, 'g');
	return haystack.replace(r, replacement);
}

function show_message(title, text )
{
  $('#mess_text').html(text);
  $('#message').modal({overlayClose: true});
}

function show_object(id)
{
  $('#'+id).modal({overlayClose: true});
  return false;
}

// Делит цифру на 3 знака
function divided_by_3(num)
{
	result = '';
	d = num % 1000;
	num = num/1000 >> 0;
	while (num > 0)
	{
		result = d + result;
		if (d < 100) result = '0' + result;
		if (d < 10) result = '0' + result;
		result = " " + result;
		d = num % 1000;
		num = num / 1000 >> 0;
	}
	result = d + result;
	return result;
}


// Добавляем записи новостей
function news_add(category, page, btn_text)
{
	$.getJSON(
		'/ajax.php',
		{action:'news_add', category:category, page:page},
		function(data){

			var list = data['list'];
			var count = list.length;
			var position = '';
			var elem = document.getElementById('news_content');
			inner_text = elem.innerHTML; 
			     
			for (x=0; x<count; x++) {
				if (x%3 == 0) inner_text = inner_text + '<div class="clear"></div><div class="news_separator"></div>';
				if (x%3 == 1) inner_text = inner_text + '<div class="our_projects_one second_news">';
				else inner_text = inner_text + '<div class="our_projects_one">';
				inner_text = inner_text + '<a href="'+list[x]['url']+'" class="news_a"><img src="'+list[x]['picture']+'" alt="" /></a>	'
				inner_text = inner_text + '<div class="new_one new_one_2">';
				inner_text = inner_text + '<div class="new_data">';
				inner_text = inner_text + '<div class="top_new_data"><p>'+list[x]['day']+'</p></div>';
				inner_text = inner_text + '<span>'+list[x]['month']+' '+list[x]['year']+'</span>';
				inner_text = inner_text + '</div>';
				inner_text = inner_text + '<div class="new_text"><a href="'+list[x]['url']+'">'+list[x]['opis']+'</a></div><div class="clear"></div>';
				inner_text = inner_text + '</div><div class="clear"></div>';
				inner_text = inner_text + '<a href="'+list[x]['url']+'" class="podr">подробнее</a>';
				inner_text = inner_text + '</div>';
			}

			elem.innerHTML = inner_text;
			var add_btn_text = '<a href="#" onclick="return news_add('+data['category']+','+data['page']+');">показать еще</a>';
			var add_btn = document.getElementById('news_add_btn');
			if (data['page']) add_btn.innerHTML = add_btn_text;
			else $('#news_add_btn').hide();
			
		}
	);
	return false;
}


// Добавляем записи проектов
function projects_add(category, page, btn_text)
{
	$.getJSON(
		'/ajax.php',
		{action:'project_add', category:category, page:page},
		function(data){

			var list = data['list'];
			var count = list.length;
			var position = '';
			var elem = document.getElementById('projects_content');
			inner_text = elem.innerHTML; 

			for (x=0; x<count; x++) {
				if (x%2 == 0) inner_text = inner_text + '<div class="clear"></div>';
				if (x%2 == 1) inner_text = inner_text + '<div class="projects_one projects_one_right">';
				else inner_text = inner_text + '<div class="projects_one">';
					inner_text = inner_text + '<a class="po_pic_link"  href="'+list[x]['url']+'"><img src="'+list[x]['picture']+'" alt="" /></a>';
					inner_text = inner_text + '<a class="po_type_link" href="'+list[x]['url']+'">'+list[x]['nazv_build']+'</a>';
					inner_text = inner_text + '<a class="po_nazv_link" href="'+list[x]['url']+'">«'+list[x]['nazv']+'»</a>';
					inner_text = inner_text + '<p>'+list[x]['opis']+'</p>';
					inner_text = inner_text + '<a class="po_more_link" href="'+list[x]['url']+'">подробнее</a>';
				inner_text = inner_text + '</div>';
			}
			inner_text = inner_text + '<div class="clear"></div>';
			elem.innerHTML = inner_text;
			var add_btn_text = '<a href="#" onclick="return projects_add('+data['category']+','+data['page']+');">показать еще</a>';
			var add_btn = document.getElementById('projects_add_btn');
			if (data['page']) add_btn.innerHTML = add_btn_text;
			else $('#projects_add_btn').hide();
			
		}
	);
	return false;
}

function show_box(obj, id)
{
	if (!$(obj).hasClass('tabs_active'))
	{
		$('.tab-label').removeClass('tabs_active');
		$(obj).addClass('tabs_active');
	}
	
	$('div[id*=p_box_]').hide();
	$('#p_box_'+id).show();
	
}