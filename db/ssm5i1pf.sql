-- MySQL dump 10.13  Distrib 5.7.31, for Linux (x86_64)
--
-- Host: localhost    Database: ssm5i1pf
-- ------------------------------------------------------
-- Server version	5.7.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `banjixinxi`
--

DROP TABLE IF EXISTS `banjixinxi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `banjixinxi` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `zhuanyebanji` varchar(200) DEFAULT NULL COMMENT '专业班级',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8 COMMENT='班级信息';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banjixinxi`
--

LOCK TABLES `banjixinxi` WRITE;
/*!40000 ALTER TABLE `banjixinxi` DISABLE KEYS */;
INSERT INTO `banjixinxi` VALUES (61,'2021-03-12 04:05:54','专业班级1'),(62,'2021-03-12 04:05:54','专业班级2'),(63,'2021-03-12 04:05:54','专业班级3'),(64,'2021-03-12 04:05:54','专业班级4'),(65,'2021-03-12 04:05:54','专业班级5'),(66,'2021-03-12 04:05:54','专业班级6');
/*!40000 ALTER TABLE `banjixinxi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chat`
--

DROP TABLE IF EXISTS `chat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chat` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `adminid` bigint(20) DEFAULT NULL COMMENT '管理员id',
  `ask` longtext COMMENT '提问',
  `reply` longtext COMMENT '回复',
  `isreply` int(11) DEFAULT NULL COMMENT '是否回复',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1615537685704 DEFAULT CHARSET=utf8 COMMENT='在线聊天';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chat`
--

LOCK TABLES `chat` WRITE;
/*!40000 ALTER TABLE `chat` DISABLE KEYS */;
INSERT INTO `chat` VALUES (71,'2021-03-12 04:05:54',1,1,'提问1','回复1',0),(72,'2021-03-12 04:05:54',2,2,'提问2','回复2',2),(73,'2021-03-12 04:05:54',3,3,'提问3','回复3',3),(74,'2021-03-12 04:05:54',4,4,'提问4','回复4',4),(75,'2021-03-12 04:05:54',5,5,'提问5','回复5',5),(76,'2021-03-12 04:05:54',6,6,'提问6','回复6',6),(1615537477240,'2021-03-12 08:24:36',1615537415550,NULL,'asdfsfdsfdsf',NULL,0),(1615537512948,'2021-03-12 08:25:12',1615537415550,1,NULL,'回复回复回复回复',NULL),(1615537685703,'2021-03-12 08:28:05',1,1,NULL,'2312312',NULL);
/*!40000 ALTER TABLE `chat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `config`
--

DROP TABLE IF EXISTS `config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `config` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(100) NOT NULL COMMENT '配置参数名称',
  `value` varchar(100) DEFAULT NULL COMMENT '配置参数值',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COMMENT='配置文件';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `config`
--

LOCK TABLES `config` WRITE;
/*!40000 ALTER TABLE `config` DISABLE KEYS */;
INSERT INTO `config` VALUES (1,'picture1','http://localhost:8080/ssm5i1pf/upload/picture1.jpg'),(2,'picture2','http://localhost:8080/ssm5i1pf/upload/picture2.jpg'),(3,'picture3','http://localhost:8080/ssm5i1pf/upload/picture3.jpg'),(6,'homepage',NULL);
/*!40000 ALTER TABLE `config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discussxiaoyoufengcai`
--

DROP TABLE IF EXISTS `discussxiaoyoufengcai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `discussxiaoyoufengcai` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `refid` bigint(20) NOT NULL COMMENT '关联表id',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `nickname` varchar(200) DEFAULT NULL COMMENT '用户名',
  `content` longtext NOT NULL COMMENT '评论内容',
  `reply` longtext COMMENT '回复内容',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1615537554197 DEFAULT CHARSET=utf8 COMMENT='校友风采评论表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discussxiaoyoufengcai`
--

LOCK TABLES `discussxiaoyoufengcai` WRITE;
/*!40000 ALTER TABLE `discussxiaoyoufengcai` DISABLE KEYS */;
INSERT INTO `discussxiaoyoufengcai` VALUES (111,'2021-03-12 04:05:54',1,1,'用户名1','评论内容1','回复内容1'),(112,'2021-03-12 04:05:54',2,2,'用户名2','评论内容2','回复内容2'),(113,'2021-03-12 04:05:54',3,3,'用户名3','评论内容3','回复内容3'),(114,'2021-03-12 04:05:54',4,4,'用户名4','评论内容4','回复内容4'),(115,'2021-03-12 04:05:54',5,5,'用户名5','评论内容5','回复内容5'),(116,'2021-03-12 04:05:54',6,6,'用户名6','评论内容6','回复内容6'),(1615537554196,'2021-03-12 08:25:54',1615537450271,1615537424197,'2','是的范德萨范德萨','asdas');
/*!40000 ALTER TABLE `discussxiaoyoufengcai` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `discussxiaoyoushipin`
--

DROP TABLE IF EXISTS `discussxiaoyoushipin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `discussxiaoyoushipin` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `refid` bigint(20) NOT NULL COMMENT '关联表id',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `nickname` varchar(200) DEFAULT NULL COMMENT '用户名',
  `content` longtext NOT NULL COMMENT '评论内容',
  `reply` longtext COMMENT '回复内容',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=127 DEFAULT CHARSET=utf8 COMMENT='校友视频评论表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `discussxiaoyoushipin`
--

LOCK TABLES `discussxiaoyoushipin` WRITE;
/*!40000 ALTER TABLE `discussxiaoyoushipin` DISABLE KEYS */;
INSERT INTO `discussxiaoyoushipin` VALUES (121,'2021-03-12 04:05:54',1,1,'用户名1','评论内容1','回复内容1'),(122,'2021-03-12 04:05:54',2,2,'用户名2','评论内容2','回复内容2'),(123,'2021-03-12 04:05:54',3,3,'用户名3','评论内容3','回复内容3'),(124,'2021-03-12 04:05:54',4,4,'用户名4','评论内容4','回复内容4'),(125,'2021-03-12 04:05:54',5,5,'用户名5','评论内容5','回复内容5'),(126,'2021-03-12 04:05:54',6,6,'用户名6','评论内容6','回复内容6');
/*!40000 ALTER TABLE `discussxiaoyoushipin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `forum`
--

DROP TABLE IF EXISTS `forum`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `forum` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `title` varchar(200) DEFAULT NULL COMMENT '帖子标题',
  `content` longtext NOT NULL COMMENT '帖子内容',
  `parentid` bigint(20) DEFAULT NULL COMMENT '父节点id',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `username` varchar(200) DEFAULT NULL COMMENT '用户名',
  `isdone` varchar(200) DEFAULT NULL COMMENT '状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1615537579049 DEFAULT CHARSET=utf8 COMMENT='论坛交流';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `forum`
--

LOCK TABLES `forum` WRITE;
/*!40000 ALTER TABLE `forum` DISABLE KEYS */;
INSERT INTO `forum` VALUES (81,'2021-03-12 04:05:54','帖子标题1','帖子内容1',1,1,'用户名1','开放'),(82,'2021-03-12 04:05:54','帖子标题2','帖子内容2',2,2,'用户名2','开放'),(83,'2021-03-12 04:05:54','帖子标题3','帖子内容3',3,3,'用户名3','开放'),(84,'2021-03-12 04:05:54','帖子标题4','帖子内容4',4,4,'用户名4','开放'),(85,'2021-03-12 04:05:54','帖子标题5','帖子内容5',5,5,'用户名5','开放'),(86,'2021-03-12 04:05:54','帖子标题6','帖子内容6',6,6,'用户名6','开放'),(1615537526590,'2021-03-12 08:25:26','讨论讨论讨论','讨论讨论讨论讨论讨论讨论',0,1615537415550,'2','开放'),(1615537533929,'2021-03-12 08:25:33',NULL,'阿斯顿撒旦',1615537526590,1615537415550,'2',NULL),(1615537579048,'2021-03-12 08:26:18',NULL,'萨达萨达萨达',1615537526590,1615537424197,'2',NULL);
/*!40000 ALTER TABLE `forum` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `userid` bigint(20) NOT NULL COMMENT '留言人id',
  `username` varchar(200) DEFAULT NULL COMMENT '用户名',
  `content` longtext NOT NULL COMMENT '留言内容',
  `reply` longtext COMMENT '回复内容',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1615537593988 DEFAULT CHARSET=utf8 COMMENT='留言板';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (101,'2021-03-12 04:05:54',1,'用户名1','留言内容1','回复内容1'),(102,'2021-03-12 04:05:54',2,'用户名2','留言内容2','回复内容2'),(103,'2021-03-12 04:05:54',3,'用户名3','留言内容3','回复内容3'),(104,'2021-03-12 04:05:54',4,'用户名4','留言内容4','回复内容4'),(105,'2021-03-12 04:05:54',5,'用户名5','留言内容5','回复内容5'),(106,'2021-03-12 04:05:54',6,'用户名6','留言内容6','回复内容6'),(1615537593987,'2021-03-12 08:26:33',1615537424197,'2','留言留言留言留言留言','111');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shipinfenlei`
--

DROP TABLE IF EXISTS `shipinfenlei`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shipinfenlei` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `shipinfenlei` varchar(200) DEFAULT NULL COMMENT '视频分类',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8 COMMENT='视频分类';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shipinfenlei`
--

LOCK TABLES `shipinfenlei` WRITE;
/*!40000 ALTER TABLE `shipinfenlei` DISABLE KEYS */;
INSERT INTO `shipinfenlei` VALUES (51,'2021-03-12 04:05:54','新闻'),(52,'2021-03-12 04:05:54','视频分类2'),(53,'2021-03-12 04:05:54','视频分类3'),(54,'2021-03-12 04:05:54','视频分类4'),(55,'2021-03-12 04:05:54','视频分类5'),(56,'2021-03-12 04:05:54','视频分类6');
/*!40000 ALTER TABLE `shipinfenlei` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `storeup`
--

DROP TABLE IF EXISTS `storeup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `storeup` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `refid` bigint(20) DEFAULT NULL COMMENT '收藏id',
  `tablename` varchar(200) DEFAULT NULL COMMENT '表名',
  `name` varchar(200) NOT NULL COMMENT '收藏名称',
  `picture` varchar(200) NOT NULL COMMENT '收藏图片',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1615537572706 DEFAULT CHARSET=utf8 COMMENT='收藏表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `storeup`
--

LOCK TABLES `storeup` WRITE;
/*!40000 ALTER TABLE `storeup` DISABLE KEYS */;
INSERT INTO `storeup` VALUES (1615537572705,'2021-03-12 08:26:12',1615537424197,41,'xiaoyoushipin','标题1','http://localhost:8080/ssm5i1pf/upload/xiaoyoushipin_shipinfengmian1.jpg');
/*!40000 ALTER TABLE `storeup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token`
--

DROP TABLE IF EXISTS `token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `token` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `username` varchar(100) NOT NULL COMMENT '用户名',
  `tablename` varchar(100) DEFAULT NULL COMMENT '表名',
  `role` varchar(100) DEFAULT NULL COMMENT '角色',
  `token` varchar(200) NOT NULL COMMENT '密码',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '新增时间',
  `expiratedtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '过期时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='token表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token`
--

LOCK TABLES `token` WRITE;
/*!40000 ALTER TABLE `token` DISABLE KEYS */;
INSERT INTO `token` VALUES (1,1,'abo','users','管理员','vmi0ttjid6e57zcmkrag9e31le0q4hvs','2021-03-12 04:10:56','2021-03-12 09:27:14'),(2,21,'1','xiaoyou','校友','14evzvqn1b0grolsl1oo6wrs6y7njbq1','2021-03-12 04:11:09','2021-03-12 05:11:09'),(3,11,'1','yonghu','用户','8gw4lchwhf14swqza28mrrb46bvht0ek','2021-03-12 04:11:20','2021-03-12 05:11:20'),(4,1615537415550,'2','xiaoyou','校友','jn4mydl5tvx6ka2vr2qk3v59yxzpe0m1','2021-03-12 08:23:48','2021-03-12 09:28:13'),(5,1615537424197,'2','yonghu','用户','dybkd39hymj9mf09em2oei0m7qmmhta0','2021-03-12 08:25:42','2021-03-12 09:25:42');
/*!40000 ALTER TABLE `token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username` varchar(100) NOT NULL COMMENT '用户名',
  `password` varchar(100) NOT NULL COMMENT '密码',
  `role` varchar(100) DEFAULT '管理员' COMMENT '角色',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '新增时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='用户表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'abo','abo','管理员','2021-03-12 04:05:54');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `xiaoyou`
--

DROP TABLE IF EXISTS `xiaoyou`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `xiaoyou` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `xiaoyouzhanghao` varchar(200) NOT NULL COMMENT '校友账号',
  `mima` varchar(200) NOT NULL COMMENT '密码',
  `xiaoyouxingming` varchar(200) DEFAULT NULL COMMENT '校友姓名',
  `xingbie` varchar(200) DEFAULT NULL COMMENT '性别',
  `nianling` int(11) DEFAULT NULL COMMENT '年龄',
  `touxiang` varchar(200) DEFAULT NULL COMMENT '头像',
  `lianxifangshi` varchar(200) DEFAULT NULL COMMENT '联系方式',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1615537415551 DEFAULT CHARSET=utf8 COMMENT='校友';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xiaoyou`
--

LOCK TABLES `xiaoyou` WRITE;
/*!40000 ALTER TABLE `xiaoyou` DISABLE KEYS */;
INSERT INTO `xiaoyou` VALUES (21,'2021-03-12 04:05:54','1','1','校友姓名1','男',1,'http://localhost:8080/ssm5i1pf/upload/xiaoyou_touxiang1.jpg','13823888881'),(22,'2021-03-12 04:05:54','校友2','123456','校友姓名2','男',2,'http://localhost:8080/ssm5i1pf/upload/xiaoyou_touxiang2.jpg','13823888882'),(23,'2021-03-12 04:05:54','校友3','123456','校友姓名3','男',3,'http://localhost:8080/ssm5i1pf/upload/xiaoyou_touxiang3.jpg','13823888883'),(24,'2021-03-12 04:05:54','校友4','123456','校友姓名4','男',4,'http://localhost:8080/ssm5i1pf/upload/xiaoyou_touxiang4.jpg','13823888884'),(25,'2021-03-12 04:05:54','校友5','123456','校友姓名5','男',5,'http://localhost:8080/ssm5i1pf/upload/xiaoyou_touxiang5.jpg','13823888885'),(26,'2021-03-12 04:05:54','校友6','123456','校友姓名6','男',6,'http://localhost:8080/ssm5i1pf/upload/xiaoyou_touxiang6.jpg','13823888886'),(1615537415550,'2021-03-12 08:23:35','2','2','xxx校友','男',22,'http://localhost:8080/ssm5i1pf/upload/1615537439405.jpg','13245678910');
/*!40000 ALTER TABLE `xiaoyou` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `xiaoyoufengcai`
--

DROP TABLE IF EXISTS `xiaoyoufengcai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `xiaoyoufengcai` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `xiaoyouzhanghao` varchar(200) DEFAULT NULL COMMENT '校友账号',
  `xiaoyouxingming` varchar(200) DEFAULT NULL COMMENT '校友姓名',
  `xingbie` varchar(200) DEFAULT NULL COMMENT '性别',
  `nianling` varchar(200) DEFAULT NULL COMMENT '年龄',
  `touxiang` varchar(200) DEFAULT NULL COMMENT '头像',
  `lianxifangshi` varchar(200) DEFAULT NULL COMMENT '联系方式',
  `zhuanyebanji` varchar(200) DEFAULT NULL COMMENT '专业班级',
  `gerenjieshao` longtext COMMENT '个人介绍',
  `thumbsupnum` int(11) DEFAULT '0' COMMENT '赞',
  `crazilynum` int(11) DEFAULT '0' COMMENT '踩',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1615537450272 DEFAULT CHARSET=utf8 COMMENT='校友风采';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xiaoyoufengcai`
--

LOCK TABLES `xiaoyoufengcai` WRITE;
/*!40000 ALTER TABLE `xiaoyoufengcai` DISABLE KEYS */;
INSERT INTO `xiaoyoufengcai` VALUES (31,'2021-03-12 04:05:54','校友账号1','校友姓名1','性别1','年龄1','http://localhost:8080/ssm5i1pf/upload/xiaoyoufengcai_touxiang1.jpg','联系方式1','专业班级1','个人介绍1',1,1,1),(32,'2021-03-12 04:05:54','校友账号2','校友姓名2','性别2','年龄2','http://localhost:8080/ssm5i1pf/upload/xiaoyoufengcai_touxiang2.jpg','联系方式2','专业班级2','个人介绍2',2,2,2),(33,'2021-03-12 04:05:54','校友账号3','校友姓名3','性别3','年龄3','http://localhost:8080/ssm5i1pf/upload/xiaoyoufengcai_touxiang3.jpg','联系方式3','专业班级3','个人介绍3',3,3,3),(34,'2021-03-12 04:05:54','校友账号4','校友姓名4','性别4','年龄4','http://localhost:8080/ssm5i1pf/upload/xiaoyoufengcai_touxiang4.jpg','联系方式4','专业班级4','个人介绍4',4,4,4),(35,'2021-03-12 04:05:54','校友账号5','校友姓名5','性别5','年龄5','http://localhost:8080/ssm5i1pf/upload/xiaoyoufengcai_touxiang5.jpg','联系方式5','专业班级5','个人介绍5',5,5,5),(36,'2021-03-12 04:05:54','校友账号6','校友姓名6','性别6','年龄6','http://localhost:8080/ssm5i1pf/upload/xiaoyoufengcai_touxiang6.jpg','联系方式6','专业班级6','个人介绍6',6,6,6),(1615537450271,'2021-03-12 08:24:09','2','xxx校友','男','22','http://localhost:8080/ssm5i1pf/upload/1615537439405.jpg','13245678910','专业班级3','sdfdsfdsfdsf',1,0,1615537415550);
/*!40000 ALTER TABLE `xiaoyoufengcai` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `xiaoyoushipin`
--

DROP TABLE IF EXISTS `xiaoyoushipin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `xiaoyoushipin` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `biaoti` varchar(200) DEFAULT NULL COMMENT '标题',
  `shipinfenlei` varchar(200) DEFAULT NULL COMMENT '视频分类',
  `shipin` varchar(200) DEFAULT NULL COMMENT '视频',
  `shipinfengmian` varchar(200) DEFAULT NULL COMMENT '视频封面',
  `xiaoyouzhanghao` varchar(200) DEFAULT NULL COMMENT '校友账号',
  `xiaoyouxingming` varchar(200) DEFAULT NULL COMMENT '校友姓名',
  `fabushijian` datetime DEFAULT NULL COMMENT '发布时间',
  `shipinjianjie` longtext COMMENT '视频简介',
  `thumbsupnum` int(11) DEFAULT '0' COMMENT '赞',
  `crazilynum` int(11) DEFAULT '0' COMMENT '踩',
  `clicktime` datetime DEFAULT NULL COMMENT '最近点击时间',
  `clicknum` int(11) DEFAULT '0' COMMENT '点击次数',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8 COMMENT='校友视频';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `xiaoyoushipin`
--

LOCK TABLES `xiaoyoushipin` WRITE;
/*!40000 ALTER TABLE `xiaoyoushipin` DISABLE KEYS */;
INSERT INTO `xiaoyoushipin` VALUES (41,'2021-03-12 04:05:54','标题1','视频分类1','http://localhost:8080/ssm5i1pf/upload/1615537498572.mp4','http://localhost:8080/ssm5i1pf/upload/xiaoyoushipin_shipinfengmian1.jpg','校友账号1','校友姓名1','2021-03-12 12:05:54','<p>视频简介1</p>',1,1,'2021-03-12 16:27:38',6,1),(42,'2021-03-12 04:05:54','标题2','视频分类2','','http://localhost:8080/ssm5i1pf/upload/xiaoyoushipin_shipinfengmian2.jpg','校友账号2','校友姓名2','2021-03-12 12:05:54','视频简介2',2,2,'2021-03-12 12:05:54',2,2),(43,'2021-03-12 04:05:54','标题3','视频分类3','','http://localhost:8080/ssm5i1pf/upload/xiaoyoushipin_shipinfengmian3.jpg','校友账号3','校友姓名3','2021-03-12 12:05:54','视频简介3',3,3,'2021-03-12 12:05:54',3,3),(44,'2021-03-12 04:05:54','标题4','视频分类4','','http://localhost:8080/ssm5i1pf/upload/xiaoyoushipin_shipinfengmian4.jpg','校友账号4','校友姓名4','2021-03-12 12:05:54','视频简介4',4,4,'2021-03-12 12:05:54',4,4),(45,'2021-03-12 04:05:54','标题5','视频分类5','','http://localhost:8080/ssm5i1pf/upload/xiaoyoushipin_shipinfengmian5.jpg','校友账号5','校友姓名5','2021-03-12 12:05:54','视频简介5',5,5,'2021-03-12 12:05:54',5,5),(46,'2021-03-12 04:05:54','标题6','视频分类6','','http://localhost:8080/ssm5i1pf/upload/xiaoyoushipin_shipinfengmian6.jpg','校友账号6','校友姓名6','2021-03-12 12:05:54','视频简介6',6,6,'2021-03-12 12:05:54',6,6);
/*!40000 ALTER TABLE `xiaoyoushipin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `yonghu`
--

DROP TABLE IF EXISTS `yonghu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `yonghu` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `yonghuzhanghao` varchar(200) NOT NULL COMMENT '用户账号',
  `mima` varchar(200) NOT NULL COMMENT '密码',
  `yonghuxingming` varchar(200) DEFAULT NULL COMMENT '用户姓名',
  `xingbie` varchar(200) DEFAULT NULL COMMENT '性别',
  `nianling` int(11) DEFAULT NULL COMMENT '年龄',
  `touxiang` varchar(200) DEFAULT NULL COMMENT '头像',
  PRIMARY KEY (`id`),
  UNIQUE KEY `yonghuzhanghao` (`yonghuzhanghao`)
) ENGINE=InnoDB AUTO_INCREMENT=1615537424198 DEFAULT CHARSET=utf8 COMMENT='用户';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `yonghu`
--

LOCK TABLES `yonghu` WRITE;
/*!40000 ALTER TABLE `yonghu` DISABLE KEYS */;
INSERT INTO `yonghu` VALUES (11,'2021-03-12 04:05:54','1','1','用户姓名1','男',1,'http://localhost:8080/ssm5i1pf/upload/yonghu_touxiang1.jpg'),(12,'2021-03-12 04:05:54','用户2','123456','用户姓名2','男',2,'http://localhost:8080/ssm5i1pf/upload/yonghu_touxiang2.jpg'),(13,'2021-03-12 04:05:54','用户3','123456','用户姓名3','男',3,'http://localhost:8080/ssm5i1pf/upload/yonghu_touxiang3.jpg'),(14,'2021-03-12 04:05:54','用户4','123456','用户姓名4','男',4,'http://localhost:8080/ssm5i1pf/upload/yonghu_touxiang4.jpg'),(15,'2021-03-12 04:05:54','用户5','123456','用户姓名5','男',5,'http://localhost:8080/ssm5i1pf/upload/yonghu_touxiang5.jpg'),(16,'2021-03-12 04:05:54','用户6','123456','用户姓名6','男',6,'http://localhost:8080/ssm5i1pf/upload/yonghu_touxiang6.jpg'),(1615537424197,'2021-03-12 08:23:44','2','2','xxx用户','男',22,NULL);
/*!40000 ALTER TABLE `yonghu` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-18 18:04:20
