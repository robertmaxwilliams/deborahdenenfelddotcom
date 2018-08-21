
//--FUNCTIONS---------------------------------------------------------------------
	
//Smooth Scroll to internal links
$(function(){$("a[href*=#], a.smoothscroll").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=$(this.hash),a=a.length&&a||$("[name="+this.hash.slice(1)+"]");if(a.length)return a=a.offset().top,$("html,body").animate({scrollTop:a},1E3),!1}})});

//Clear Form Fields
jQuery.fn.cleardefault=function(){return this.focus(function(){if(this.value==this.defaultValue)this.value=""}).blur(function(){if(!this.value.length)this.value=this.defaultValue})};   $("input:not(input[type='submit'],input[type='button'], textarea)").cleardefault();

