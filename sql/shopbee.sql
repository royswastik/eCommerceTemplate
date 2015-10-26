-- MySQL dump 10.13  Distrib 5.6.24, for linux-glibc2.5 (x86_64)
--
-- Host: localhost    Database: login_db
-- ------------------------------------------------------
-- Server version	5.5.44-0ubuntu0.14.04.1

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
-- Table structure for table `USER_DETAILS`
--

DROP TABLE IF EXISTS `USER_DETAILS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `USER_DETAILS` (
  `userID` int(11) NOT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `USER_DETAILS`
--

LOCK TABLES `USER_DETAILS` WRITE;
/*!40000 ALTER TABLE `USER_DETAILS` DISABLE KEYS */;
INSERT INTO `USER_DETAILS` VALUES (2,'Swastik Roy 3');
/*!40000 ALTER TABLE `USER_DETAILS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UserDetails`
--

DROP TABLE IF EXISTS `UserDetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `UserDetails` (
  `userID` int(11) NOT NULL,
  `userName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UserDetails`
--

LOCK TABLES `UserDetails` WRITE;
/*!40000 ALTER TABLE `UserDetails` DISABLE KEYS */;
INSERT INTO `UserDetails` VALUES (0,'Swastik Roy 2'),(1,'Swastik Roy 2'),(2,'Swastik Roy 3');
/*!40000 ALTER TABLE `UserDetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book_tb`
--

DROP TABLE IF EXISTS `book_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `book_tb` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `author` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `discount` varchar(255) DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `in_cart` bit(1) DEFAULT NULL,
  `mrp` int(11) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `outOfStock` bit(1) DEFAULT NULL,
  `publisher` varchar(255) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `reviews` int(11) DEFAULT NULL,
  `search_option` bit(1) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_c2w8tyi5yv0di0uhaow8hoe5m` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book_tb`
--

LOCK TABLES `book_tb` WRITE;
/*!40000 ALTER TABLE `book_tb` DISABLE KEYS */;
INSERT INTO `book_tb` VALUES (11,'J K Rowling','One of the best book','20','comedy','../img/item_id_1.png','\0',2000,'Harrry Potter','\0','Publisher 1',4,12,'','/static/img/products/thumbnail/harry.jpg'),(12,'Sydney Sheldon','One of the best smartphones','20','thriller','../img/item_id_1.png','\0',280,'Master of the game','\0','Publisher 1',4,12,'','/static/img/products/thumbnail/moftg.jpg'),(13,'Satyajit Ray','One of the best smartphones','20','drama','../img/item_id_1.png','\0',150,'Pather Panchali','\0','Publisher 2',4,12,'','/static/img/products/thumbnail/patherpanchali.jpg'),(14,'Stephen hawking','One of the best smartphones','20','science','../img/item_id_1.png','\0',300,'Brief History of time','\0','Publisher 3',4,12,'','/static/img/products/thumbnail/bhot.jpg'),(15,'Chetan Bhagat','One of the best smartphones','20','romance','../img/item_id_1.png','\0',120,'Two states','\0','Publisher 3',4,12,'','/static/img/products/thumbnail/2states.jpg');
/*!40000 ALTER TABLE `book_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart_tb`
--

DROP TABLE IF EXISTS `cart_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cart_tb` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `category_id` bigint(20) DEFAULT NULL,
  `item_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_tb`
--

LOCK TABLES `cart_tb` WRITE;
/*!40000 ALTER TABLE `cart_tb` DISABLE KEYS */;
INSERT INTO `cart_tb` VALUES (16,1,2,1),(29,1,1,1),(31,2,11,1),(32,2,11,1);
/*!40000 ALTER TABLE `cart_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories_tb`
--

DROP TABLE IF EXISTS `categories_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories_tb` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories_tb`
--

LOCK TABLES `categories_tb` WRITE;
/*!40000 ALTER TABLE `categories_tb` DISABLE KEYS */;
INSERT INTO `categories_tb` VALUES (1,'electronics'),(2,'books'),(3,'clothing'),(4,'music'),(5,'furniture'),(6,'sports');
/*!40000 ALTER TABLE `categories_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clothing_tb`
--

DROP TABLE IF EXISTS `clothing_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clothing_tb` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `discount` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `in_cart` bit(1) DEFAULT NULL,
  `mrp` int(11) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `outOfStock` bit(1) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `reviews` int(11) DEFAULT NULL,
  `search_option` bit(1) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_hn476ogwqifpm6m72pt29t3xw` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clothing_tb`
--

LOCK TABLES `clothing_tb` WRITE;
/*!40000 ALTER TABLE `clothing_tb` DISABLE KEYS */;
INSERT INTO `clothing_tb` VALUES (41,NULL,'Finest quality t-shirt','20',NULL,'../img/item_id_1.png','\0',8099,'Blazer 1','\0',NULL,4,12,'','/static/img/products/thumbnail/blazer1.jpg'),(42,NULL,'Finest quality t-shirt','20',NULL,'../img/item_id_1.png','\0',3099,'Trouser','\0',NULL,4,12,'','/static/img/products/thumbnail/jeans1.jpg'),(45,NULL,'Finest quality t-shirt','20',NULL,'../img/item_id_1.png','\0',259,'kidshirt','\0',NULL,4,12,'','/static/img/products/thumbnail/kidshirt.jpg'),(46,NULL,'Finest quality t-shirt','20',NULL,'../img/item_id_1.png','\0',5899,'Hiking shoe','\0',NULL,4,12,'','/static/img/products/thumbnail/shoes1.jpg'),(47,NULL,'Finest quality t-shirt','20',NULL,'../img/item_id_1.png','\0',3899,'Women shoe 2','\0',NULL,4,12,'','/static/img/products/thumbnail/shoes3.jpg'),(48,NULL,'Finest quality t-shirt','20',NULL,'../img/item_id_1.png','\0',2699,'Women shoe 1','\0',NULL,4,12,'','/static/img/products/thumbnail/shoes2.jpg'),(49,NULL,'Finest quality t-shirt','20',NULL,'../img/item_id_1.png','\0',699,'Women shirt 1','\0',NULL,4,12,'','/static/img/products/thumbnail/womenshirt.jpg'),(410,NULL,'Finest quality t-shirt','20',NULL,'../img/item_id_1.png','\0',545,'Formal shirt','\0',NULL,4,12,'','/static/img/products/thumbnail/formalshirt1.jpg'),(411,NULL,'Finest quality t-shirt','20',NULL,'../img/item_id_1.png','\0',970,'Casual t-shirt','\0',NULL,4,12,'','/static/img/products/thumbnail/shirt2.jpg'),(412,NULL,'Finest quality t-shirt','20',NULL,'../img/item_id_1.png','\0',470,'Summer T-shirt','\0',NULL,4,12,'','/static/img/products/thumbnail/shirt1.jpg');
/*!40000 ALTER TABLE `clothing_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `electronic_tb`
--

DROP TABLE IF EXISTS `electronic_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `electronic_tb` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `brand` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `description` varchar(300) DEFAULT NULL,
  `discount` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `in_cart` bit(1) DEFAULT NULL,
  `internal_storage` int(11) DEFAULT NULL,
  `mrp` int(11) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `os` varchar(255) DEFAULT NULL,
  `outOfStock` bit(1) DEFAULT NULL,
  `ram` varchar(255) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `reviews` int(11) DEFAULT NULL,
  `search_option` int(11) DEFAULT NULL,
  `shop` varchar(255) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_ew8exxx19emd413g1lb09mcpd` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `electronic_tb`
--

LOCK TABLES `electronic_tb` WRITE;
/*!40000 ALTER TABLE `electronic_tb` DISABLE KEYS */;
INSERT INTO `electronic_tb` VALUES (1,'Lumia 11502','blue','One of the best smartphones','20','[\"../img/products/iphone1.jpg\",\"../img/products/iphone2.jpg\",\"../img/products/iphone3.jpg\"]','\0',32,4000,'Lumia 11502','Windows','\0','2',4,12,0,'Microsoft Store','/static/img/products/thumbnail/lumia1.jpg'),(2,'Apple','blue','One of the best smartphones','20','[\"../img/products/iphone1.jpg\",\"../img/products/iphone2.jpg\",\"../img/products/iphone3.jpg\"]','\0',32,60000,'Iphone 7s','Windows','\0','2',4,12,0,'eWorld','/static/img/products/thumbnail/iphone1.png'),(3,'Google','blue',NULL,'20','ghd','\0',32,17000,'Nexus 10','Windows','\0','2',4,12,1,'eWorld','/static/img/products/thumbnail/nexus1.png'),(4,'Apple','blue',NULL,'20','','\0',32,7000,'Iphone 5','Other','\0','2',4,12,1,'Other','/static/img/products/thumbnail/iphone1.png'),(5,'Google','blue','One of the best smartphones','20','','\0',32,47000,'Nexus 5','Windows','\0','2',4,12,1,'Other','/static/img/products/thumbnail/nexus1.png');
/*!40000 ALTER TABLE `electronic_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `furniture_tb`
--

DROP TABLE IF EXISTS `furniture_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `furniture_tb` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `built` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `discount` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `in_cart` bit(1) DEFAULT NULL,
  `mrp` int(11) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `outOfStock` bit(1) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `reviews` int(11) DEFAULT NULL,
  `search_option` bit(1) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_2xm7aay1lojtc025ahcxu483d` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `furniture_tb`
--

LOCK TABLES `furniture_tb` WRITE;
/*!40000 ALTER TABLE `furniture_tb` DISABLE KEYS */;
INSERT INTO `furniture_tb` VALUES (51,NULL,'Best quality furniture','20',NULL,'../img/item_id_1.png','\0',12299,'Bed 3','\0',4,12,'','/static/img/products/thumbnail/furniture5.jpg'),(52,NULL,'Best quality furniture','20',NULL,'../img/item_id_1.png','\0',12299,'Bed 1','\0',4,12,'','/static/img/products/thumbnail/furniture4.jpg'),(53,NULL,'Best quality furniture','20',NULL,'../img/item_id_1.png','\0',18299,'Recliner','\0',4,12,'','/static/img/products/thumbnail/furniture3.jpg'),(54,NULL,'Best quality furniture','20',NULL,'../img/item_id_1.png','\0',12299,'Sofa 2','\0',4,12,'','/static/img/products/thumbnail/furniture2.jpg'),(55,NULL,'Best quality furniture','20',NULL,'../img/item_id_1.png','\0',12299,'Sofa 1','\0',4,12,'','/static/img/products/thumbnail/furniture1.jpg');
/*!40000 ALTER TABLE `furniture_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items_electronics_tb`
--

DROP TABLE IF EXISTS `items_electronics_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `items_electronics_tb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `mrp` varchar(45) DEFAULT NULL,
  `discount` varchar(45) DEFAULT NULL,
  `outOfStock` varchar(45) DEFAULT NULL,
  `rating` varchar(45) DEFAULT NULL,
  `reviews` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `image_url` varchar(45) DEFAULT NULL,
  `thumbnail` varchar(45) DEFAULT NULL,
  `in_cart` varchar(45) DEFAULT NULL,
  `brand` varchar(45) DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL,
  `shop` varchar(45) DEFAULT NULL,
  `os` varchar(45) DEFAULT NULL,
  `ram` varchar(45) DEFAULT NULL,
  `internal_storage` varchar(45) DEFAULT NULL,
  `search_option` varchar(45) DEFAULT NULL,
  `category` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items_electronics_tb`
--

LOCK TABLES `items_electronics_tb` WRITE;
/*!40000 ALTER TABLE `items_electronics_tb` DISABLE KEYS */;
INSERT INTO `items_electronics_tb` VALUES (1,'Lumia 1150','4000','20','0','4','12','One of the best smartphones','[\"../img/products/iphone1.jpg\",\"../img/produc','../img/products/thumbnail/lumia1.jpg','0','Microsoft','blue','Microsoft Store','Windows','2','32','1','electronics'),(2,'Iphone 7s','60000','20','0','4','12','One of the best smartphones','[\"../img/products/iphone1.jpg\",\"../img/produc','../img/products/thumbnail/iphone1.png','0','Apple','blue','eWorld','Windows','2','32','1','electronics');
/*!40000 ALTER TABLE `items_electronics_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login_tb`
--

DROP TABLE IF EXISTS `login_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `login_tb` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `uname` varchar(60) NOT NULL,
  `pass` varchar(60) NOT NULL,
  `email` varchar(75) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `desc` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login_tb`
--

LOCK TABLES `login_tb` WRITE;
/*!40000 ALTER TABLE `login_tb` DISABLE KEYS */;
INSERT INTO `login_tb` VALUES (1,'swastik','beehyv123','',NULL,NULL),(2,'swastikroy','beehyv123','',NULL,NULL),(3,'swastik2','asdfghjkl','asd@gmail.com','null','asdasd');
/*!40000 ALTER TABLE `login_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `music_tb`
--

DROP TABLE IF EXISTS `music_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `music_tb` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `artist` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `discount` varchar(255) DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `in_cart` bit(1) DEFAULT NULL,
  `mrp` int(11) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `outOfStock` bit(1) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `reviews` int(11) DEFAULT NULL,
  `search_option` bit(1) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_ldobau6xaydtsvlv66c9u5onk` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `music_tb`
--

LOCK TABLES `music_tb` WRITE;
/*!40000 ALTER TABLE `music_tb` DISABLE KEYS */;
INSERT INTO `music_tb` VALUES (21,NULL,'She is buying a stairway to heaven','20','Classic','../img/item_id_1.png','\0',299,'Led Zeppelin','\0',4,12,'','/static/img/products/thumbnail/music4.gif'),(22,NULL,'Viva la vida','20','Alternative Rock','../img/item_id_1.png','\0',699,'Coldplay','\0',4,12,'','/static/img/products/thumbnail/music5.jpg'),(23,NULL,'Mr. tambourine man play a song for me','20','Classic','../img/item_id_1.png','\0',299,'Bob Dylan','\0',4,12,'','/static/img/products/thumbnail/music6.jpg'),(24,NULL,'Pull me under','20','Alternative Rock','../img/item_id_1.png','\0',299,'Dream Theater','\0',4,12,'','/static/img/products/thumbnail/music7.jpg'),(25,NULL,'Imagine all the people','20','Classic','../img/item_id_1.png','\0',299,'John Lenon - Imagine','\0',4,12,'','/static/img/products/thumbnail/music3.jpg'),(26,NULL,'Dark Side of the Moon','20','Soft Rock','../img/item_id_1.png','\0',299,'Pink floyd','\0',4,12,'','/static/img/products/thumbnail/music2.jpg'),(27,NULL,'Hey You, Comfortably Numb','20','Soft Rock','../img/item_id_1.png','\0',299,'Pink floyd- The Wall','\0',4,12,'','/static/img/products/thumbnail/music1.jpg');
/*!40000 ALTER TABLE `music_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sport_tb`
--

DROP TABLE IF EXISTS `sport_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sport_tb` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `sport` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `discount` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `in_cart` bit(1) DEFAULT NULL,
  `mrp` int(11) DEFAULT NULL,
  `name` varchar(50) NOT NULL,
  `outOfStock` bit(1) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `reviews` int(11) DEFAULT NULL,
  `search_option` bit(1) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_mogbgdy9kl2j80ppm3wh8gqut` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sport_tb`
--

LOCK TABLES `sport_tb` WRITE;
/*!40000 ALTER TABLE `sport_tb` DISABLE KEYS */;
INSERT INTO `sport_tb` VALUES (6,NULL,'Best quality product','20',NULL,'../img/item_id_1.png','\0',2899,'Boxing Headgear','\0',4,12,'','/static/img/products/thumbnail/sports2.jpg'),(7,NULL,'Best quality product','20',NULL,'../img/item_id_1.png','\0',2299,'Boxing Gloves','\0',4,12,'','/static/img/products/thumbnail/sports1.jpg'),(61,NULL,'Best quality product','20',NULL,'../img/item_id_1.png','\0',600,'Skateboard','\0',4,12,'','/static/img/products/thumbnail/sports6.png'),(62,NULL,'Best quality product','20',NULL,'../img/item_id_1.png','\0',6600,'Cricket kit','\0',4,12,'','/static/img/products/thumbnail/sports7.jpg'),(63,NULL,'Best quality product','20',NULL,'../img/item_id_1.png','\0',2099,'Tennis racket','\0',4,12,'','/static/img/products/thumbnail/sports5.jpg'),(64,NULL,'Best quality product','20',NULL,'../img/item_id_1.png','\0',1099,'TT racket','\0',4,12,'','/static/img/products/thumbnail/sports4.jpeg'),(65,NULL,'Best quality product','20',NULL,'../img/item_id_1.png','\0',2899,'Ice axe','\0',4,12,'','/static/img/products/thumbnail/sports3.jpg');
/*!40000 ALTER TABLE `sport_tb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock`
--

DROP TABLE IF EXISTS `stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stock` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `desc` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
INSERT INTO `stock` VALUES (1,'asldk','asd'),(2,'asd','asdasd');
/*!40000 ALTER TABLE `stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_tb`
--

DROP TABLE IF EXISTS `user_tb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_tb` (
  `user_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_tb`
--

LOCK TABLES `user_tb` WRITE;
/*!40000 ALTER TABLE `user_tb` DISABLE KEYS */;
INSERT INTO `user_tb` VALUES (1,'asdasddf','swastikroy1993@gmail.com','swastik','beehyv123','9502037930');
/*!40000 ALTER TABLE `user_tb` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-10-26 18:05:14
