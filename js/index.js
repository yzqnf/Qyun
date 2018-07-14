//提交留言到数据库
var uname=$('#uname'),
    em=$('#email'),
    p=$('#phone'),
    m=$('#msg');
uname.blur(function(){
    if(uname.val()==''){
        alert('姓名不能为空');
    }
});
//给按钮绑定事件，单机时发起ajax请求
$("#btn").click(function(e){
    e.preventDefault();
    var n=uname.val(),
        email=em.val(),
        phone=p.val(),
        msg=m.val();
    $.ajax({
        type:"post",
        url:"data/submit.php",
        data:{uname:n,email:email,phone:phone,msg:msg},
        success:function(data){
            if(data.code==1){
                alert('留言成功');
                //提交成功后将文本框清空
                uname.val('');
                em.val('');
                p.val('');
                m.val('');
            }
        },
        error:function(){
            alert('网络错误，请检查');
        }
    })
});
//滚动时导航条设置
$(window).scroll(function(){
    console.log(111);
    if($(window).scrollTop()>=10){
        $('#home').css('background',"#222");
    }else{
        $('#home').css('background',"transparent");
    }
});

//window.onscroll=function(){
//    var t=document.documentElement.scrollTop || document.body.scrollTop;
//    var top_div=document.getElementById('home');
//    if(t >= 10){
//        top_div.style.background='#222';
//    }else{
//        top_div.style.background='transparent';
//    }
//}
//点击汉堡包图标时，下拉菜单的背景颜色设置
$("#hhb").click(function(){
    $('#home').css("background",'#222');
});

