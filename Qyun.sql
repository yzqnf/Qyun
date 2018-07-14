create database QYun charset=utf8;
use QYun;
create table QYmsg(uid INT PRIMARY KEY AUTO_INCREMENT,
           uname VARCHAR(16),
           email VARCHAR(16),
           phone VARCHAR(16),
           msg VARCHAR(128));
insert  into QYmsg values(null,'tom','123456@qq.com','15026666666','123123123');