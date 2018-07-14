<?php
header("Content-Type:application/json;charset=utf-8");
$conn=mysqli_connect('127.0.0.1','root','','QYun',3306);
mysqli_query($conn,'SET NAMES UTF8');
@$uname=$_REQUEST['uname'] or die('姓名不能为空');
@$email=$_REQUEST['email'];
@$phone=$_REQUEST['phone'];
@$msg=$_REQUEST['msg'];
$sql="insert into QYmsg(uname,email,phone,msg) values('$uname','$email','$phone','$msg')";
$result=mysqli_query($conn,$sql);
if($result===true){
    echo  '{"code":1,"msg":"success"}';
}else{
    echo '{"code":-1,","msg":"error"}';
}
