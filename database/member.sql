CREATE TABLE `member` (
	`no` INT(10) NOT NULL AUTO_INCREMENT, /*자동으로 1씩 증가하는 no*/
	`id` VARCHAR(12) NOT NULL COLLATE 'utf8mb4_general_ci',
	PRIMARY KEY (`no`) USING BTREE
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1
;

CREATE TABLE `member_card` (
	`name` VARCHAR(25) NOT NULL COLLATE 'utf8mb4_general_ci',
	`studentId` VARCHAR(10) NOT NULL COLLATE 'utf8mb4_general_ci',
	`no` INT(10) NOT NULL,
	PRIMARY KEY (`studentId`) USING BTREE,
	INDEX `FK_member_card_member` (`no`) USING BTREE,
	CONSTRAINT `FK_member_card_member` FOREIGN KEY (`no`) REFERENCES `member` (`no`) ON UPDATE CASCADE ON DELETE CASCADE
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
;

CREATE TABLE `member_info` (
	`id` VARCHAR(12) NOT NULL COLLATE 'utf8mb4_general_ci',
	`nickName` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_general_ci',
	`password` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_general_ci',
	`employment` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_general_ci',
	`category` VARCHAR(50) NOT NULL COLLATE 'utf8mb4_general_ci',
	`id_card` MEDIUMBLOB NOT NULL,
	`no` INT(10) NOT NULL,
	PRIMARY KEY (`id`) USING BTREE,
	INDEX `member_memberInfo_FK` (`no`) USING BTREE,
	CONSTRAINT `member_memberInfo_FK` FOREIGN KEY (`no`) REFERENCES `member` (`no`) ON UPDATE NO ACTION ON DELETE NO ACTION
)
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
;
