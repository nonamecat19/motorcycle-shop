-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Янв 10 2023 г., 01:40
-- Версия сервера: 8.0.30
-- Версия PHP: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `MotoShop`
--

-- --------------------------------------------------------

--
-- Структура таблицы `cart`
--

CREATE TABLE `cart` (
  `id` int UNSIGNED NOT NULL,
  `idUser` int UNSIGNED NOT NULL,
  `data` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `motorcycles`
--

CREATE TABLE `motorcycles` (
  `id` int UNSIGNED NOT NULL,
  `model` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `brand` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` int DEFAULT NULL,
  `engineCapacity` int UNSIGNED DEFAULT NULL,
  `enginePower` int UNSIGNED DEFAULT NULL,
  `fuelConsumption` float UNSIGNED DEFAULT NULL,
  `fuelCapacity` int UNSIGNED DEFAULT NULL,
  `gears` int UNSIGNED DEFAULT NULL,
  `mass` int UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `motorcycles`
--

INSERT INTO `motorcycles` (`id`, `model`, `brand`, `price`, `engineCapacity`, `enginePower`, `fuelConsumption`, `fuelCapacity`, `gears`, `mass`) VALUES
(1, 'H2R', 'Kawasaki', 3280000, 998, 310, 5, 17, 6, 216),
(2, 'Z650', 'Kawasaki', 3751000, 649, 68, 4.3, 15, 6, 187),
(3, 'Ninja 650', 'Kawasaki', 410000, 649, 68, 4.5, 15, 6, 268),
(4, 'Ninja 650 Performance', 'Kawasaki', 283400, 649, 68, 4.5, 15, 6, 268),
(5, 'Ninja 650 Sport', 'Kawasaki', 410000, 649, 68, 4.5, 15, 6, 268),
(6, 'Ninja 650 Tourer', 'Kawasaki', 166000, 649, 68, 4.5, 15, 6, 268),
(7, 'Ninja 650 Urban', 'Kawasaki', 166000, 649, 68, 4.5, 15, 6, 268),
(8, 'Ninja 1000 SX', 'Kawasaki', 800000, 1043, 142, 5.8, 19, 6, 310),
(9, 'Ninja 1000 SX Tourer', 'Kawasaki', 190000, 1043, 142, 5.8, 19, 6, 310),
(10, 'Ninja H2 SX', 'Kawasaki', 1271000, 998, 200, 5.4, 19, 6, 266),
(11, 'Ninja H2 SX SE', 'Kawasaki', 1271000, 998, 200, 5.4, 19, 6, 267),
(12, 'Ninja ZX-10R', 'Kawasaki', 110000, 998, 203, 6, 17, 6, 207),
(13, 'Ninja ZX-10R Performance', 'Kawasaki', 120000, 998, 203, 6, 17, 6, 207),
(14, 'Ninja ZX-10RR', 'Kawasaki', 115000, 998, 204, 6.1, 17, 6, 207),
(15, 'Ninja ZX-10RR Performance', 'Kawasaki', 120000, 998, 204, 6.1, 17, 6, 207),
(16, 'Versys 1000 SE Grand Tourer', 'Kawasaki', 649000, 1043, 120, 5.5, 21, 6, 257),
(17, 'Versys 1000 SE', 'Kawasaki', 647000, 1043, 120, 5.5, 21, 6, 257),
(18, 'Vulcan S', 'Kawasaki', 92000, 649, 61, 4.5, 14, 6, 229),
(19, 'Z650 50th Anniversary Performance', 'Kawasaki', 210000, 649, 68, 4.3, 15, 6, 263),
(20, 'Z650 50th Anniversary', 'Kawasaki', 200000, 649, 68, 4.3, 15, 6, 263),
(21, 'Z900 50th Anniversary', 'Kawasaki', 300000, 948, 125, 5.7, 17, 6, 287),
(22, 'Z900 50th Anniversary Performance', 'Kawasaki', 310000, 948, 125, 5.7, 17, 6, 287),
(23, 'Z900', 'Kawasaki', 425000, 948, 125, 5.7, 17, 6, 287),
(24, 'Z900 SE', 'Kawasaki', 420000, 948, 125, 5.7, 17, 6, 213),
(67, '123', '123', 123, 0, 123, 123, 123, 123, 233),
(68, '123', '123', 123, 0, 123, 123, 123, 123, 233),
(69, '123', '123', 123, 0, 123, 123, 123, 123, 233),
(70, 'asdfasdf', 'asdf', 123, 0, 1234, 234, 345, 45, 345);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int UNSIGNED NOT NULL,
  `login` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstName` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lastName` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` enum('admin','moderator','user') COLLATE utf8mb4_unicode_ci NOT NULL,
  `dateOfBirth` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `firstName`, `lastName`, `role`, `dateOfBirth`) VALUES
(1, 'admin', 'admin', 'adminName', 'adminSurname', 'admin', '2013-12-31'),
(2, 'user', 'user', 'userName', 'userSurname', 'user', '2005-12-14'),
(3, 'moder', 'moder', 'moderName', 'moderSurname', 'moderator', '2006-12-06');

-- --------------------------------------------------------

--
-- Структура таблицы `variation`
--

CREATE TABLE `variation` (
  `id` int UNSIGNED NOT NULL,
  `idMotorcycle` int UNSIGNED NOT NULL,
  `colorName` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `colorHex` varchar(9) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `colorHex2` varchar(9) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `available` int UNSIGNED DEFAULT NULL,
  `photo` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `variation`
--

INSERT INTO `variation` (`id`, `idMotorcycle`, `colorName`, `colorHex`, `colorHex2`, `available`, `photo`) VALUES
(1, 1, 'Mirror Coated Matte Spark Black', '#141414', '#b60114', 10, 'b82215c4f2ba5fced5655fb03a8bb7a0.png'),
(4, 1, 'Mirror Coated Matte Spark Black', '#4e8752', '#ffffff', 10, '75f727630d367bdc4297fc0e273b84c3.png'),
(10, 3, 'Red', '#444444', '#ffffff', 14, '123123.png'),
(11, 12, '123', '#53a840', '#010000', 12, 'b82215c4f2ba5fced5655fb03a8bb7a0.png');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
-- Индексы таблицы `motorcycles`
--
ALTER TABLE `motorcycles`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `variation`
--
ALTER TABLE `variation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `variation_ibfk_1` (`idMotorcycle`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `motorcycles`
--
ALTER TABLE `motorcycles`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `variation`
--
ALTER TABLE `variation`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `variation`
--
ALTER TABLE `variation`
  ADD CONSTRAINT `variation_ibfk_1` FOREIGN KEY (`idMotorcycle`) REFERENCES `motorcycles` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
