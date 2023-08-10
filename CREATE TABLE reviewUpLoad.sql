CREATE TABLE reviewUpLoad_info (
  `pageNumber` INT(10) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`pageNumber`),
  `nickName` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_general_ci',
  `title` VARCHAR(45) NOT NULL COLLATE 'utf8mb4_general_ci',
  `content` VARCHAR(200) NOT NULL COLLATE 'utf8mb4_general_ci',
  `file` MEDIUMBLOB,
  CONSTRAINT `FK_NICK_NAME` FOREIGN KEY (`nickName`) REFERENCES `member_info` (`nickName`) ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB COLLATE='utf8mb4_general_ci';
