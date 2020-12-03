-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 03, 2020 at 11:29 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `imaginato`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id` int(11) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` longtext NOT NULL,
  `created_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id`, `nickname`, `title`, `content`, `created_date`) VALUES
(4, 'test', 'blog1', 'this is test blog', '2020-12-02 17:57:47'),
(5, 'Article One', 'Article', 'this is test article', '2020-12-02 17:57:47'),
(6, 'Article TWo', 'Article second', 'this is test article', '2020-12-02 17:57:47');

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `nickname` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `created_date` datetime NOT NULL,
  `id` int(10) NOT NULL,
  `blog_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='comment';

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`nickname`, `content`, `created_date`, `id`, `blog_id`) VALUES
('comment', 'comment', '2020-12-02 17:57:47', 1, 4),
('comment', 'comment', '2020-12-02 17:57:47', 2, 4),
('comment', 'comment', '2020-12-02 17:57:47', 3, 4),
('Nice', 'atricle', '2020-12-02 17:57:47', 4, 5);

-- --------------------------------------------------------

--
-- Table structure for table `commentreply`
--

CREATE TABLE `commentreply` (
  `nickname` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `created_date` datetime NOT NULL,
  `comment_id` int(10) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='commentReply';

--
-- Dumping data for table `commentreply`
--

INSERT INTO `commentreply` (`nickname`, `content`, `created_date`, `comment_id`, `id`) VALUES
('comment', 'comment', '2020-12-02 17:57:47', 1, 1),
('comment', 'comment', '2020-12-02 17:57:47', 4, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `commentreply`
--
ALTER TABLE `commentreply`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `commentreply`
--
ALTER TABLE `commentreply`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
