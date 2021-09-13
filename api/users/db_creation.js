/*

vagrant ssh data
sudo mysql --user=root
create database test;
GRANT ALL PRIVILEGES ON test.* TO wimi;

CREATE TABLE `er_users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `firstName` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `lastName` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `userName` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `avatar` varchar(250) COLLATE latin1_general_ci DEFAULT NULL,
  `gender` varchar(1) COLLATE latin1_general_ci DEFAULT NULL,
  `email` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `password` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `number` int(10) DEFAULT NULL,
  `uid` varchar(64) COLLATE latin1_general_ci DEFAULT NULL,
  `role` varchar(32) COLLATE latin1_general_ci DEFAULT NULL,
  `refreshToken` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  `verToken` varchar(255) COLLATE latin1_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO `er_users` (`id`, `firstName`, `lastName`, `username`, `avatar`, `gender`, `email`, `password`, `number`, `uid`, `role`, `refreshToken`, `verToken`)
VALUES
	(5, 'Juan', 'Perezadmin', 'username1', 'https://pickaface.net/gallery/avatar/unr_leogeneric_170107_0513_qytgjea.png', 'm', 'a', '$2b$10$71jWL8vRI.3v91ntU.sza.ivMhtmz1TIFMSn6Nia4wnty/R/Bjscm', 1, '9d434b0f-7d0f-4489-8071-2d2054f15855', 'ADMIN', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'),
	(6, 'Nombre2', 'Apellido2', 'username2', 'https://pickaface.net/gallery/avatar/64431738_161013_0015_3fnpl.png', 'm', '2@example.com', '$2b$10$71jWL8vRI.3v91ntU.sza.ivMhtmz1TIFMSn6Nia4wnty/R/Bjscm', 1, '80083186-4a53-423a-9a51-5fe405988ad7', 'USER', NULL, NULL),
	(7, 'Nombre3', 'Apellido3', 'username3', 'https://pickaface.net/gallery/avatar/richardwhiteway56f7c6bc7e276.png', 'm', '3@example.com', '$2b$10$71jWL8vRI.3v91ntU.sza.ivMhtmz1TIFMSn6Nia4wnty/R/Bjscm', 1, 'a4d47931-78eb-449b-80d3-a0afca46c70a', 'USER', 'weyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c', 'weyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'),
	(8, 'Nombre3', 'Apellido3', 'username4', 'https://pickaface.net/gallery/avatar/richardwhiteway56f7c6bc7e276.png', 'm', '3@example.com', '$2b$10$71jWL8vRI.3v91ntU.sza.ivMhtmz1TIFMSn6Nia4wnty/R/Bjscm', 1, '09a7bf51-4829-484e-aafc-703555c7fbef', 'USER', 'weyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c', 'weyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'),
	(9, 'Nombre3', 'Apellido3', 'username5', 'https://pickaface.net/gallery/avatar/richardwhiteway56f7c6bc7e276.png', 'm', '3@example.com', '$2b$10$71jWL8vRI.3v91ntU.sza.ivMhtmz1TIFMSn6Nia4wnty/R/Bjscm', 1, '9db22061-6cd7-4522-90aa-44c21a73bf1d', 'USER', 'weyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c', 'weyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'),
	(10, 'Nombre3', 'Apellido3', 'username6', 'https://pickaface.net/gallery/avatar/richardwhiteway56f7c6bc7e276.png', 'm', '3@example.com', '$2b$10$71jWL8vRI.3v91ntU.sza.ivMhtmz1TIFMSn6Nia4wnty/R/Bjscm', 1, 'a6d3db80-cbab-4a88-aa22-0a5f55c91a77', 'USER', 'weyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c', 'weyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'),
	(11, 'Nombre3', 'Apellido3', 'username7', 'https://pickaface.net/gallery/avatar/richardwhiteway56f7c6bc7e276.png', 'm', '3@example.com', '$2b$10$71jWL8vRI.3v91ntU.sza.ivMhtmz1TIFMSn6Nia4wnty/R/Bjscm', 1, '3f7c833a-0ff9-4380-916f-559f043a9564', 'USER', 'weyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c', 'weyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'),
	(12, 'Nombre3', 'Apellido3', 'username8', 'https://pickaface.net/gallery/avatar/richardwhiteway56f7c6bc7e276.png', 'm', '3@example.com', '$2b$10$71jWL8vRI.3v91ntU.sza.ivMhtmz1TIFMSn6Nia4wnty/R/Bjscm', 1, '2a359906-5d97-400b-81fa-7b5fd82a46e0', 'USER', 'weyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c', 'weyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'),
	(13, 'Nombre3', 'Apellido3', 'username9', 'https://pickaface.net/gallery/avatar/richardwhiteway56f7c6bc7e276.png', 'm', '3@example.com', '$2b$10$71jWL8vRI.3v91ntU.sza.ivMhtmz1TIFMSn6Nia4wnty/R/Bjscm', 1, 'f1438ade-89f6-4e26-9a2c-2d39fb50bdff', 'USER', 'weyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c', 'weyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'),
	(14, 'Nombre3', 'Apellido3', 'username10', 'https://pickaface.net/gallery/avatar/richardwhiteway56f7c6bc7e276.png', 'm', '3@example.com', '$2b$10$71jWL8vRI.3v91ntU.sza.ivMhtmz1TIFMSn6Nia4wnty/R/Bjscm', 1, 'bf562502-774b-4652-8649-abdb22f16a25', 'USER', 'weyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c', 'weyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');


CREATE TABLE `er_rooms` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE latin1_general_ci DEFAULT NULL,
  `enabled` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO `er_rooms` (`id`, `name`, `enabled`)
VALUES
	(1, 'Astartea', 1),
	(2, 'Hab2', 0);






CREATE TABLE `er_rooms_users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `roomId` int(10) unsigned NOT NULL,
  `userId` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

INSERT INTO `er_rooms_users` (`id`, `roomId`, `userId`)
VALUES
	(1, 1, 5),
	(2, 1, 6),
	(3, 1, 7),
	(4, 1, 8),
	(5, 2, 9),
	(6, 2, 10);

    

*/

