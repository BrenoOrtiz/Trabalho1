CREATE DATABASE crud_exp2;
USE crud_exp2;

CREATE TABLE `usuarios` (
  `idusuarios` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(45) DEFAULT NULL,
  `idade` int DEFAULT NULL,
  `cpf` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idusuarios`)
);

 INSERT INTO `usuarios` VALUES 
   (1,'João',30,'11111111111'),
   (2,'Maria',25,'22222222222'),
   (3,'Carlos',42,'33333333333'),
   (4,'Ana',29,'44444444444'),
   (5,'Pedro',35,'55555555555'),
   (6,'Juliana',31,'66666666666'),
   (7,'Lucas',22,'77777777777'),
   (8,'Marina',28,'88888888888'),
   (9,'Eduardo',40,'99999999999'),
   (10,'Luiza',33,'00000000000'),
   (11,'Roberto',45,'12345678901'),
   (12,'Fernanda',27,'23456789012'),
   (13,'Rafael',39,'34567890123'),
   (14,'Beatriz',26,'45678901234'),
   (15,'Gustavo',50,'56789012345'),
   (16,'Marcela',19,'67890123456'),
   (17,'Anderson',38,'78901234567'),
   (18,'Bianca',24,'89012345678'),
   (19,'Henrique',47,'90123456789'),
   (20,'Aline',34,'01234567891'),
   (21,'Igor',36,'11234567892'),
   (22,'Larissa',32,'21234567893'),
   (23,'Victor',29,'31234567894'),
   (24,'Carolina',23,'41234567895'),
   (25,'Diogo',43,'51234567896');