

$(function(){
    // new Mdate("timeDate");
// capitalInfo.html页面
// realName.html页面
// loanee.html页面
// loaner.html页面
// broker.html页面
// 中所有表单的js

    // 点击发布弹出发布审核框
    $(".fabuButton").click(function(){
        $(".checkBox").fadeIn(200);
    })
    // 点击返回和closeicon弹窗关闭
    $(".closeCheckBox").click(function(){
        $(".checkBox").fadeOut(200);
    });
    $(".checkCard p").click(function(){
        $(".checkBox").fadeOut(200);
    })
    //本金、年化利率表单聚焦效果改变
    $(".messCard").find("input").focus(function(){

        //获取当前文本框的值
        var curValue=$(this).val();
        if(curValue==this.defaultValue){
            $(this).val("");
        }
//		表单字体颜色改变
        $(this).css({
            color:"#f59e00"
        })
    });

    //本金、年化利率表单失去焦点
    $(".messCard").find("input").blur(function(){
        var curValue=$(this).val();
        // 如果表单中值为空
        if(curValue==""){
            $(this).val(this.defaultValue);
            // 表单字体颜色恢复
            $(this).css({
                color:"#7a7a7a"
            });
            // 发布按钮颜色恢复
            $(".fabuButton").css({
                background:"#e3e3e3",
                color:"#aeaeae"
            })
            // 发布按钮禁用
            // $(".fabuButton").attr("disabled","true");

        }else{//表单中值不为空
            // 表单字体颜色改变
            $(this).css({
                color:"#f59e00"
            });
            // 发布按钮颜色改变
            $(".fabuButton").css({
                background:"#f6a702",
                color:"white"
            });
            // 发布按钮禁用
            // $(".fabuButton").attr("disabled","false");
        }
    });
    // 文本框聚焦效果
    $(".messCard").find("textarea").focus(function(){
        //获取当前文本框的值
        var curValue=$(this).val();
        if(curValue==this.defaultValue){
            $(this).val("");
        }
    });
    // 文本框失去焦点效果
    $(".messCard").find("textarea").blur(function(){
        var curValue=$(this).val();
        // 如果表单中值为空
        if(curValue==""){
            $(this).val(this.defaultValue);
            // 发布按钮颜色恢复
            $(".fabuButton").css({
                background:"#e3e3e3",
                color:"#aeaeae"
            });
        }else{
            // 发布按钮颜色改变
            $(".fabuButton").css({
                background:"#f6a702",
                color:"white"
            });
        }
    });

// loanee.html页面
// loaner.html页面
// broker.html页面
// 中所有标签tag的js
    $(".tagButtonCard p").each(function(){
        $(this).click(function(){
            $(this).css({
                color:"white",
                background:"#f6a702"
            });
            $(this).siblings().css({
                color:"#d0d0d0",
                background:"#f8f8f8"
            });
        });
    });

//loanDetial.html页面
    //中点击卡片展开收起js
     $(".deicon1").click(function(){
            // 点击卡片右侧小图标卡片收起，再次点击卡片展开
            $(this).parents().children(".showDetialBox").stop().slideToggle(400);
            // 判断，如果小图标朝下点击朝上,并且卡片标签下方出现圆角
            // 否则小图标朝下,并且卡片标签下方圆角消失
            if(($(this).attr("class"))=="iconfont icon-jiantou-copy-copy-copy deicon1"){
                $(this).attr("class","iconfont icon-jiantou-copy-copy deicon1");
                $(this).parent(".loanDetialHead").css({
                    "border-bottom-left-radius":".06rem",
                    "border-bottom-right-radius":".06rem",
                });
            }else{
                $(this).attr("class","iconfont icon-jiantou-copy-copy-copy deicon1");
                $(this).parent(".loanDetialHead").css({
                    "border-bottom-left-radius":"0",
                    "border-bottom-right-radius":"0",
                });
            }
     });
     
    //诉求多选
    $(".tagButtonCard3 p").click(function(){  
		$(this).toggleClass('tag3Highlight');
	});

});