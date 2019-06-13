

$(function(){
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
        // 表单字体颜色改变
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
})