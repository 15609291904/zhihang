$(function(){
	
	
            
    // 点击注册横线划到指定位置
    $(".loginRegisTag p").each(function(){
        $(this).click(function(){
            $(this).css({
                color:"#f39200"
            });
//          let left1 = $(this).offset().left-10;
			let left1 = $(this).offset().left;
            console.log(left1);
            $(".loginLine").animate({left:left1},200);
            $(this).siblings().css({
                color:"#c0c0c0"
            });
        });
    });
    // 分别点击登录注册显示不同内容
    $(".loginP").click(function(){
        $(".LLBox").css({
            display:"block"
        });
        $(".RBox").css({
            display:"none"
        });
        $(".loginCardCenter").css({
            paddingBottom:"0"
        });
    });
    $(".regisP").click(function(){
        $(".LLBox").css({
            display:"none"
        });
        $(".RBox").css({
            display:"block"
        });
        $(".loginCardCenter").css({
            paddingBottom:".5rem"
        });
    });

    // 表单聚焦
    $(".LBox1").find("input").focus(function(){

        //获取当前文本框的值
        var curValue=$(this).val();
        if(curValue==this.defaultValue){
            $(this).val("");
        }
        // 小图标颜色改变
        $(this).parent().find("i").css({
            color:"#f59e00"
        });
        $(this).parents(".LBox1").find("i").css({
        	display:"block"
        });
        // 框框出现边框、背景颜色改变
        $(this).parents(".LBox1").css({
            border:".02rem solid #f59e00",
            background:"white"
        });
        // 表单字体颜色改变
        $(this).css({
            color:"#f59e00"
        })
    });

    //失去焦点
    $(".LBox1").find("input").blur(function(){
        var curValue=$(this).val();
        // 如果表单中值为空
        if(curValue==""){
            $(this).val(this.defaultValue);
            // 框框边框消失、背景恢复
            $(this).parents(".LBox1").css({
                border:"0",
                background:"#f8f8f8"
            });
            $(this).parents(".LBox1").find(".rightIcon").css({
                display:"none"
            });
            // 表单字体颜色恢复
            $(this).css({
                color:"#cfcfcf"
            });
            // 小图标颜色恢复
            $(this).parent().find("i").css({
                color:"#cfcfcf"
            });
            // 登陆、注册按钮颜色恢复
            $(".loginButton").css({
                background:"#e3e3e3",
                color:"#8f8f8f"
            })
        }else{//表单中值不为空
            // 框框边框消失、背景颜色改变
            $(this).parents(".LBox1").css({
                border:"0",
                background:"#f8f8f8"
            });
            // 表单字体颜色改变
            $(this).css({
                color:"#f59e00"
            });
            // 登陆、注册按钮颜色改变
            $(".loginButton").css({
                background:"#f6a702",
                color:"white"
            });
        }

    });
//  点击小眼睛密码隐藏显示
	
	$(".icon-yanjing-bi").click(function(){
		$(this).siblings().find("input").focus();
		$(this).addClass("icon-yanjing");
		$(this).removeClass("icon-yanjing-bi");
		$(this).siblings().find("input").attr("type","text");
		parent.location.reload();
	});
	$(".icon-yanjing").click(function(){
		$(this).siblings().find("input").focus();
		$(this).addClass("icon-yanjing-bi");
		$(this).removeClass("icon-yanjing");
		$(this).siblings().find("input").attr("type","password");
	});
//  点击叉叉删除表单内容
	$(".icon-guanbi2").click(function(){
		$(this).siblings().find("input").val("");
		$(this).siblings().find("input").focus();
	})
});