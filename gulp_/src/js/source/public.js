$(function(){
	/*获取地址栏参数*/
	function GetQueryString(name)
	{
	     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	     var r = window.location.search.substr(1).match(reg);
	     if(r!=null)return  unescape(r[2]); return null;
	}

    (function(){ //处理导航
        var index = GetQueryString("id");
        var type = GetQueryString("type");
        if(type == 4){
        	$("li[data_id='"+type+"']").addClass('active').siblings().removeClass('active')
        }
        if(type == 2){
        	$("li[data_id='"+type+"']").addClass('active').siblings().removeClass('active')
        }
        
        //处理导航链接type参数为11，22，33时，显示对应的内容----产品中心
        if(type == 11){ 
        	$(".section2_header.Product_header li").eq(1).addClass('active').siblings().removeClass('active');
        	$('.Game.Game3').eq(1).show().siblings().hide()
        }
        if(type == 22){ 
        	$(".section2_header.Product_header li").eq(3).addClass('active').siblings().removeClass('active');
        	$('.Game.Game3').eq(3).show().siblings().hide()
        }
        if(type == 33){ 
        	$(".section2_header.Product_header li").eq(4).addClass('active').siblings().removeClass('active');
        	$('.Game.Game3').eq(4).show().siblings().hide()
        }
         if(type == 44){ 
        	$(".section2_header.Product_header li").eq(5).addClass('active').siblings().removeClass('active');
        	$('.Game.Game3').eq(5).show().siblings().hide()
        }

         //处理底部导航链接type参数为55，66，77，88时，显示对应的内容----企业文化
        if(type == 55){ 
        	$(".Culturebth span").eq(1).addClass('active').siblings().removeClass('active');
        	$('.Cultureswitch').eq(1).show().siblings().hide();
        	$('.Culturebth').show();
        }
        if(type == 66){ 
        	$(".Culturebth span").eq(2).addClass('active').siblings().removeClass('active');
        	$('.Cultureswitch').eq(2).show().siblings().hide();
        	$('.Culturebth').show();
        }
        if(type == 77){ 
        	$(".Culturebth span").eq(3).addClass('active').siblings().removeClass('active');
        	$('.Cultureswitch').eq(3).show().siblings().hide();
        	$('.Culturebth').show();
        }
        if(type == 88){ 
        	$(".Culturebth span").eq(4).addClass('active').siblings().removeClass('active');
        	$('.Cultureswitch').eq(4).show().siblings().hide();
        	$('.Culturebth').show();
        }
         
         
        $("li[data_id='"+index+"']").addClass('active').siblings().removeClass('active')
    })();

	/*判断导航栏 下拉菜单的显示隐藏*/
	if(GetQueryString("id") == 2 || GetQueryString("id") == 3 || GetQueryString("id") == 4 || GetQueryString("id") == 5 || GetQueryString("id") == 6 || GetQueryString("type") == 4 || GetQueryString("type") == 2){
		$('.nav_child').hide();
		$('.nav>li').mouseenter(function(){
			if($(this).hasClass('pic')){
				$('.nav_child').show();
			}else{
				$('.nav_child').hide();
			}
		})
		$('.header').mouseleave (function(){
				$('.nav_child').hide();
		})
	}

	
});

/*切换的方法*/
	function swh(name,name2){
		name.mouseenter(function(){
			var index = $(this).index();
			$(this).addClass('active').siblings().removeClass('active');
			(name2 || '').eq(index).show().siblings().hide();
		})
	}
	
