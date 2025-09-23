CREATE DATABASE IF NOT EXISTS `insta-photo`;

USE `insta-photo`;

-- Users
CREATE TABLE `Users` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `email` VARCHAR(255) UNIQUE NOT NULL,
    `username` VARCHAR(100) UNIQUE NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `full_name` VARCHAR(255),
    `avatar` VARCHAR(255),
    `bio` TEXT,
    `is_admin` BOOLEAN DEFAULT FALSE,
    `followers_count` INT DEFAULT 0,
    `following_count` INT DEFAULT 0,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Photos/Posts
-- 1:M -- 1 user : many photo
CREATE TABLE `Photos` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `title` VARCHAR(255),
    `description` TEXT,
    `image_url` VARCHAR(500) NOT NULL,
    `likes_count` INT DEFAULT 0,
    `comments_count` INT DEFAULT 0,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE CASCADE
);

-- Comments
-- 1 : M -- 1 comment : M 
CREATE TABLE `Comments` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `photo_id` INT NOT NULL,
    `user_id` INT NOT NULL,
    `content` TEXT NOT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`photo_id`) REFERENCES `Photos`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE CASCADE
);

-- Likes
-- M : M -- 1 user : M photo & 1 photo : M likes (by many user)
CREATE TABLE `Photo_Likes` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `photo_id` INT NOT NULL,
    `user_id` INT NOT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY `unique_photo_like` (`photo_id`, `user_id`),
    FOREIGN KEY (`photo_id`) REFERENCES `Photos`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE CASCADE
);

-- Follows
-- M : M -- 1 user : M following & 1 user : M followers
CREATE TABLE `Follows` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `follower_id` INT NOT NULL,
    `following_id` INT NOT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY `unique_follow` (`follower_id`, `following_id`),
    FOREIGN KEY (`follower_id`) REFERENCES `Users`(`id`) ON DELETE CASCADE,
    FOREIGN KEY (`following_id`) REFERENCES `Users`(`id`) ON DELETE CASCADE
);

CREATE TABLE `User_Sessions` (
    `id` INT PRIMARY KEY AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `refresh_token` VARCHAR(500) NOT NULL,
    `expires_at` DATETIME NOT NULL,
    `created_at` DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE CASCADE
);

-- Update
RENAME TABLE `Photos` TO `Posts`;
ALTER TABLE `Comments` CHANGE `photo_id` `post_id` INT NOT NULL;
ALTER TABLE `Comments` DROP FOREIGN KEY Comments_ibfk_1, ADD FOREIGN KEY (`post_id`) REFERENCES `Posts`(id) ON DELETE CASCADE;
ALTER TABLE `Photo_Likes` RENAME TO `Post_Likes`;
ALTER TABLE `Post_Likes` CHANGE `photo_id` `post_id` INT NOT NULL;
-- Drop all foreign keys and recreate them to avoid constraint name issues
ALTER TABLE `Post_Likes` DROP FOREIGN KEY `post_likes_ibfk_1`;
ALTER TABLE `Post_Likes` DROP FOREIGN KEY `post_likes_ibfk_2`;
ALTER TABLE `Post_Likes` ADD FOREIGN KEY (`post_id`) REFERENCES `Posts`(id) ON DELETE CASCADE;
ALTER TABLE `Post_Likes` ADD FOREIGN KEY (`user_id`) REFERENCES `Users`(id) ON DELETE CASCADE;
-- Drop column
ALTER TABLE `Posts` DROP COLUMN `title`;
ALTER TABLE `Posts` DROP COLUMN `likes_count`;
ALTER TABLE `Posts` DROP COLUMN `comments_count`;


-- Mock data
INSERT INTO Users (email, username, password, full_name, avatar, bio, is_admin)
VALUES
('nguyenvan.a@gmail.com', 'nguyenvana', '123456', 'Nguyễn Văn A', 'avatar_a.jpg', 'Yêu thích nhiếp ảnh', FALSE),
('tranthi.b@gmail.com', 'tranthib', '123456', 'Trần Thị B', 'avatar_b.jpg', 'Du lịch khắp Việt Nam', FALSE),
('phamvan.c@gmail.com', 'phamvanc', '123456', 'Phạm Văn C', 'avatar_c.jpg', 'Chia sẻ món ăn ngon', TRUE),
('lethithu.d@gmail.com', 'lethithud', '123456', 'Lê Thị Thu D', 'avatar_d.jpg', 'Thích đọc sách', FALSE),
('dangquoc.e@gmail.com', 'dangquoce', '123456', 'Đặng Quốc E', 'avatar_e.jpg', 'Chạy bộ mỗi sáng', FALSE),
('buituan.f@gmail.com', 'buituanf', '123456', 'Bùi Tuấn F', 'avatar_f.jpg', 'Thích công nghệ', FALSE),
('ngothanh.g@gmail.com', 'ngothanhg', '123456', 'Ngô Thanh G', 'avatar_g.jpg', 'Yêu động vật', FALSE),
('hoangminh.h@gmail.com', 'hoangminhh', '123456', 'Hoàng Minh H', 'avatar_h.jpg', 'Thích vẽ tranh', FALSE),
('doanthi.i@gmail.com', 'doanthi.i', '123456', 'Đoàn Thị I', 'avatar_i.jpg', 'Thích cà phê', FALSE),
('nguyenthanh.j@gmail.com', 'nguyenthanhj', '123456', 'Nguyễn Thanh J', 'avatar_j.jpg', 'Du lịch miền Tây', FALSE);

INSERT INTO Posts (user_id, title, description, image_url)
VALUES
(1, 'Bình minh trên biển', 'Bình minh rực rỡ tại Nha Trang', 'binhminh1.jpg'),
(2, 'Cà phê phố cổ', 'Thưởng thức cà phê tại Hội An', 'cafehoian2.jpg'),
(3, 'Chợ nổi Cần Thơ', 'Khám phá chợ nổi miền Tây', 'chonoi3.jpg'),
(4, 'Đèo Hải Vân', 'Cảnh đẹp trên đèo Hải Vân', 'haivan4.jpg'),
(5, 'Bún bò Huế', 'Bún bò Huế thơm ngon', 'bunbohue5.jpg'),
(6, 'Hội hoa xuân', 'Hoa xuân rực rỡ ở Sài Gòn', 'hoaxuan6.jpg'),
(7, 'Thác Bản Giốc', 'Thác nước hùng vĩ ở Cao Bằng', 'banGioc7.jpg'),
(8, 'Phố đi bộ Nguyễn Huệ', 'Phố đi bộ đông vui ở TP.HCM', 'nguyenhue8.jpg'),
(9, 'Bánh mì Sài Gòn', 'Bánh mì giòn tan, thơm ngon', 'banhmi9.jpg'),
(10, 'Cầu Rồng Đà Nẵng', 'Cầu Rồng phun lửa về đêm', 'caurong10.jpg'),
(1, 'Chùa Một Cột', 'Kiến trúc độc đáo tại Hà Nội', 'motcot11.jpg'),
(2, 'Lăng Bác', 'Tham quan Lăng Chủ tịch Hồ Chí Minh', 'langbac12.jpg'),
(3, 'Bánh xèo miền Trung', 'Bánh xèo giòn rụm', 'banhxeo13.jpg'),
(4, 'Vịnh Hạ Long', 'Vịnh Hạ Long tuyệt đẹp', 'vinhhalong14.jpg'),
(5, 'Cơm tấm Sài Gòn', 'Cơm tấm sườn bì chả', 'comtam15.jpg'),
(6, 'Chợ Bến Thành', 'Chợ nổi tiếng ở Sài Gòn', 'benthanh16.jpg'),
(7, 'Bún chả Hà Nội', 'Bún chả thơm ngon', 'buncha17.jpg'),
(8, 'Tháp Bà Nha Trang', 'Tháp cổ nổi tiếng', 'thapba18.jpg'),
(9, 'Bánh cuốn Thanh Trì', 'Bánh cuốn mềm mịn', 'banhcuon19.jpg'),
(10, 'Cầu Long Biên', 'Cầu lịch sử ở Hà Nội', 'longbien20.jpg'),
(1, 'Hồ Gươm', 'Hồ Gươm xanh mát', 'hogum21.jpg'),
(2, 'Bánh đa cua Hải Phòng', 'Bánh đa cua đặc sản', 'banhdacua22.jpg'),
(3, 'Chùa Thiên Mụ', 'Chùa cổ ở Huế', 'thienmu23.jpg'),
(4, 'Bánh khọt Vũng Tàu', 'Bánh khọt giòn ngon', 'banhkhot24.jpg'),
(5, 'Đồi chè Mộc Châu', 'Đồi chè xanh mướt', 'doiche25.jpg'),
(6, 'Bánh tráng nướng Đà Lạt', 'Bánh tráng nướng đặc sản', 'banhtrang26.jpg'),
(7, 'Cầu Mỹ Thuận', 'Cầu nổi tiếng miền Tây', 'mythuan27.jpg'),
(8, 'Bánh bèo Huế', 'Bánh bèo mềm mịn', 'banhbeo28.jpg'),
(9, 'Chợ Đông Ba', 'Chợ lớn ở Huế', 'dongba29.jpg'),
(10, 'Bánh căn Phan Thiết', 'Bánh căn thơm ngon', 'banhcan30.jpg');

INSERT INTO Comments (post_id, user_id, content)
VALUES
(1,2,'Đẹp quá!'),(1,3,'Muốn đi Nha Trang quá!'),(2,4,'Cà phê Hội An ngon lắm!'),(2,5,'Phố cổ đẹp thật!'),(3,6,'Chợ nổi vui quá!'),(3,7,'Miền Tây tuyệt vời!'),(4,8,'Đèo Hải Vân hùng vĩ!'),(4,9,'Cảnh đẹp quá!'),(5,10,'Bún bò Huế ngon!'),(5,1,'Thèm quá!'),(6,2,'Hoa xuân rực rỡ!'),(6,3,'Sài Gòn đẹp!'),(7,4,'Thác Bản Giốc đẹp!'),(7,5,'Muốn đi Cao Bằng!'),(8,6,'Phố đi bộ vui!'),(8,7,'TP.HCM đông vui!'),(9,8,'Bánh mì ngon!'),(9,9,'Sài Gòn tuyệt!'),(10,10,'Cầu Rồng đẹp!'),(10,1,'Đà Nẵng tuyệt vời!'),(11,2,'Chùa Một Cột độc đáo!'),(11,3,'Kiến trúc đẹp!'),(12,4,'Lăng Bác trang nghiêm!'),(12,5,'Tham quan thú vị!'),(13,6,'Bánh xèo giòn!'),(13,7,'Miền Trung tuyệt!'),(14,8,'Vịnh Hạ Long đẹp!'),(14,9,'Muốn đi Hạ Long!'),(15,10,'Cơm tấm ngon!'),(15,1,'Sườn bì chả tuyệt!'),(16,2,'Chợ Bến Thành nổi tiếng!'),(16,3,'Sài Gòn vui!'),(17,4,'Bún chả Hà Nội ngon!'),(17,5,'Thèm quá!'),(18,6,'Tháp Bà cổ kính!'),(18,7,'Nha Trang đẹp!'),(19,8,'Bánh cuốn mềm!'),(19,9,'Thanh Trì đặc sản!'),(20,10,'Cầu Long Biên lịch sử!'),(20,1,'Hà Nội tuyệt!'),(21,2,'Hồ Gươm xanh!'),(21,3,'Muốn đi Hà Nội!'),(22,4,'Bánh đa cua ngon!'),(22,5,'Hải Phòng đặc sản!'),(23,6,'Chùa Thiên Mụ cổ!'),(23,7,'Huế đẹp!'),(24,8,'Bánh khọt giòn!'),(24,9,'Vũng Tàu tuyệt!'),(25,10,'Đồi chè xanh!'),(25,1,'Mộc Châu đẹp!'),(26,2,'Bánh tráng nướng ngon!'),(26,3,'Đà Lạt đặc sản!'),(27,4,'Cầu Mỹ Thuận đẹp!'),(27,5,'Miền Tây tuyệt!'),(28,6,'Bánh bèo mềm!'),(28,7,'Huế đặc sản!'),(29,8,'Chợ Đông Ba lớn!'),(29,9,'Huế vui!'),(30,10,'Bánh căn ngon!'),(30,1,'Phan Thiết tuyệt!');

INSERT INTO Post_Likes (post_id, user_id)
VALUES
(1,2),(1,3),(2,4),(2,5),(3,6),(3,7),(4,8),(4,9),(5,10),(5,1),(6,2),(6,3),(7,4),(7,5),(8,6),(8,7),(9,8),(9,9),(10,10),(10,1),(11,2),(11,3),(12,4),(12,5),(13,6),(13,7),(14,8),(14,9),(15,10),(15,1);

INSERT INTO Follows (follower_id, following_id)
VALUES
(1,2),(2,3),(3,4),(4,5),(5,6),(6,7),(7,8),(8,9),(9,10),(10,1),(2,1),(3,2),(4,3),(5,4),(6,5),(7,6),(8,7),(9,8),(10,9),(1,10);

-- Additional Comments (50 more entries)
INSERT INTO Comments (post_id, user_id, content)
VALUES
(1,4,'Ảnh đẹp lắm!'),(1,5,'Nha Trang thật tuyệt!'),(1,6,'Muốn đi du lịch quá!'),(1,7,'Bình minh thơ mộng!'),(1,8,'Biển đẹp như tranh vẽ!'),
(2,1,'Hội An cổ kính!'),(2,6,'Cà phê thơm ngon!'),(2,7,'Phố cổ làm tôi say mê!'),(2,8,'Kiến trúc độc đáo!'),(2,9,'Muốn quay lại Hội An!'),
(3,1,'Chợ nổi thú vị!'),(3,2,'Miền Tây hấp dẫn!'),(3,8,'Văn hóa đậm đà!'),(3,9,'Sông nước miền Tây!'),(3,10,'Cần Thơ đẹp quá!'),
(4,1,'Đèo nổi tiếng!'),(4,2,'Cảnh quan hùng vĩ!'),(4,3,'Đường đèo thơ mộng!'),(4,6,'Thiên nhiên tuyệt đẹp!'),(4,10,'Muốn chinh phục đèo này!'),
(5,2,'Bún bò Huế đặc sản!'),(5,3,'Món ăn ngon tuyệt!'),(5,4,'Hương vị khó quên!'),(5,6,'Huế có nhiều món ngon!'),(5,7,'Thèm bún bò quá!'),
(6,1,'Hoa xuân rực rỡ!'),(6,4,'Sài Gòn mùa xuân đẹp!'),(6,5,'Hội hoa tuyệt vời!'),(6,8,'Màu sắc rực rỡ!'),(6,9,'Xuân về trên phố!'),
(7,1,'Thác nước hùng vĩ!'),(7,2,'Cao Bằng đẹp quá!'),(7,3,'Thiên nhiên kỳ vĩ!'),(7,6,'Muốn khám phá Cao Bằng!'),(7,10,'Thác Bản Giốc nổi tiếng!'),
(8,1,'Phố đi bộ sôi động!'),(8,2,'TP.HCM năng động!'),(8,4,'Cuối tuần vui vẻ!'),(8,5,'Phố Nguyễn Huệ đẹp!'),(8,9,'Không khí rất vui!'),
(9,1,'Bánh mì Sài Gòn ngon!'),(9,2,'Món ăn đường phố tuyệt!'),(9,3,'Giá rẻ mà ngon!'),(9,6,'Bánh mì đặc sản!'),(9,10,'Sài Gòn có nhiều món ngon!'),
(10,2,'Cầu Rồng phun lửa đẹp!'),(10,3,'Đà Nẵng hiện đại!'),(10,4,'Kiến trúc ấn tượng!'),(10,5,'Cầu nổi tiếng thế giới!'),(10,6,'Đà Nẵng phát triển nhanh!');

-- Additional Post_Likes (50 more entries)
INSERT INTO Post_Likes (post_id, user_id)
VALUES
(1,4),(1,5),(1,6),(1,7),(1,8),(1,9),(1,10),
(2,1),(2,6),(2,7),(2,8),(2,9),(2,10),
(3,1),(3,2),(3,8),(3,9),(3,10),
(4,1),(4,2),(4,3),(4,6),(4,10),
(5,2),(5,3),(5,4),(5,6),(5,7),(5,8),(5,9),
(6,1),(6,4),(6,5),(6,7),(6,8),(6,9),(6,10),
(7,1),(7,2),(7,3),(7,6),(7,8),(7,9),(7,10),
(8,1),(8,2),(8,3),(8,4),(8,5),(8,9),(8,10),
(9,1),(9,2),(9,3),(9,4),(9,5),(9,6),(9,7),(9,10),
(10,2),(10,3),(10,4),(10,5),(10,6),(10,7),(10,8),(10,9);

INSERT INTO Post_Likes (post_id, user_id)
VALUES
(16,1),(16,2),(16,3),
(17,4),(17,5),(17,6),
(18,7),(18,8),(18,9),
(19,10),(19,1),(19,2),
(20,3),(20,4),(20,5),
(21,6),(21,7),(21,8),
(22,9),(22,10),(22,1),
(23,2),(23,3),(23,4),
(24,5),(24,6),(24,7),
(25,8),(25,9),(25,10),
(26,1),(26,2),(26,3),
(27,4),(27,5),(27,6),
(28,7),(28,8),(28,9),
(29,10),(29,1),(29,2),
(30,3),(30,4),(30,5),
(31,6),(31,7),(31,8),
(32,9),(32,10),(32,1);

INSERT INTO Post_Likes (post_id, user_id)
VALUES
(16,7),(16,9),
(17,2),
(18,1),(18,5),
(19,3),
(20,7),(20,8),
(21,2),
(22,3),(22,6),
(23,1),(23,7),
(24,2),(24,8),
(25,1),(25,6),
(26,4),(26,9),
(27,1),(27,3),(27,8),
(28,2),(28,5),(28,10),
(29,3),(29,7),
(30,1),(30,8),
(31,5),(31,9),
(32,7),(32,8);
