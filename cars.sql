-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 27, 2024 at 04:30 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cars`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `name`) VALUES
(1, 'admin@gmail.com', '2023-09-05 01:28:51', '$2y$10$CLbnFfXcODHXu08uM2DOeuXUl8cUv38Epv/QuBiIW6.3Is5on8OJi', NULL, '2023-09-05 01:28:51', '2023-09-05 01:28:51', 'admin'),
(2, 'abeeraly239@gmail.com', '2023-10-17 20:31:38', '$2y$10$aSAkYGfe.CxS46qUA75HAOmdeDx8.xODthG2kCYMXGFpsRBuIAzPS', NULL, NULL, '2024-01-27 00:28:38', 'Abeer Aly');

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `model` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_release` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price_rent` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `governorate` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `num_rent` int(11) NOT NULL DEFAULT 0,
  `disable` tinyint(1) NOT NULL DEFAULT 0,
  `approved` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`id`, `model`, `type`, `first_release`, `price_rent`, `governorate`, `city`, `address`, `phone`, `status`, `user_id`, `created_at`, `updated_at`, `num_rent`, `disable`, `approved`) VALUES
(1, '911 Cabriolet_2', 'Porsche', '2020', '80', 'California', 'Los Angeles', '123 Main St', '01012345678', 1, 7, '2023-09-18 00:48:44', '2024-01-26 03:04:36', 3, 0, 1),
(2, 'CR-V', 'Honda', '2019', '60.00', 'California', 'San Francisco', '456 Elm St', '01012345678', 1, 2, '2023-09-18 00:49:26', '2023-10-21 08:00:25', 1, 0, 1),
(3, 'Golf', 'Volkswagen', '2018', '40.00', 'New York', 'New York City', '789 Oak St', '01012345678', 1, 2, '2023-09-18 00:49:47', '2023-10-21 08:00:29', 0, 0, 1),
(4, 'F-150', 'Ford', '2022', '70.00', 'Texas', 'Houston', '321 Maple Ave', '01012345678', 1, 7, '2023-09-18 00:50:10', '2024-01-26 02:14:37', 0, 0, 1),
(5, 'Camaro', 'Chevrolet', '2021', '80.00', 'Florida', 'Miami', '987 Pine St', '01012345678', 0, 2, '2023-09-18 00:50:31', '2023-10-21 07:55:08', 0, 0, 1),
(6, '3 Series', 'BMW', '2019', '70', 'California', 'San Diego', '654 Cedar St', '01012345678', 1, 1, '2023-09-18 00:50:57', '2024-01-23 22:50:03', 0, 0, 1),
(7, 'Q5', 'Audi', '2020', '65.00', 'California', 'Sacramento', '321 Elm St', '01012345678', 1, 4, '2023-09-18 00:51:25', '2023-11-30 18:31:53', 0, 0, 1),
(8, 'Focus', 'Ford', '2017', '35.00', 'New York', 'Buffalo', '789 Oak St', '1012345671', 1, 1, NULL, '2023-12-11 23:01:35', 2, 0, 1),
(9, 'Silverado', 'Chevrolet', '2023', '75.00', 'Texas', 'Dallas', '987 Maple Ave', '01012345678', 1, 1, NULL, '2023-12-10 01:02:55', 0, 0, 1),
(10, 'E-Class', 'Toyota', '2022', '85.00', 'Florida', 'Orlando', '654 Pine St', '01012345678', 1, 7, NULL, '2024-01-26 03:04:09', 0, 0, 1),
(11, 'Accord', 'Honda', '2021', '50.00', 'California', 'Los Angeles', '123 Main St', '01012345678', 1, 1, NULL, NULL, 0, 0, 1),
(12, 'RAV4', 'Toyota', '2019', '60.00', 'California', 'San Francisco', '456 Elm St', '01012345678', 1, 1, NULL, '2023-09-04 22:37:39', 0, 0, 1),
(13, '3', 'Mazda', '2019', '40.00', 'New York', 'Buffalo', '789 Oak St', '01012345678 ', 1, 7, NULL, '2023-12-11 00:58:46', 0, 0, 1),
(14, '1500', 'RAM', '2022', '70.00', 'Texas', 'Houston', '321 Maple Ave', '01012345678', 0, 2, NULL, NULL, 0, 0, 1),
(15, 'Mustang', 'Ford', '2021', '80.00', 'Florida', 'Miami', '987 Pine St', '01012345678', 1, 2, NULL, '2023-10-21 23:41:33', 0, 0, 1),
(16, 'A4', 'Audi', '2019', '55.00', 'California', 'San Diego', '654 Cedar St', '01012345678', 1, 2, NULL, NULL, 0, 0, 1),
(17, 'Grand Cherokee', 'Jeep', '2020', '65.00', 'California', 'Sacramento', '321 Elm St', '01012345678', 0, 1, NULL, NULL, 0, 0, 0),
(18, 'Elantra', 'Hyundai', '2018', '35.00', 'New York', 'Buffalo', '789 Oak St', '01012345678', 0, 2, NULL, NULL, 0, 0, 0),
(19, 'Sierra 1500', 'GMC', '2023', '75.00', 'Texas', 'Dallas', '987 Maple Ave', '01012345678', 1, 7, NULL, NULL, 0, 0, 1),
(20, '4 Series', 'BMW', '2022', '85.00', 'Florida', 'Orlando', '654 Pine St', '01012345678', 0, 2, '0000-00-00 00:00:00', NULL, 0, 0, 0),
(21, 'Camry', 'Toyota', '2020', '60', 'California', 'Los Angeles', '654 Pine St', '01012345678', 0, 1, '2023-08-08 18:31:51', '2023-08-08 18:31:51', 0, 0, 0),
(22, 'Camry', 'Toyota', '2018', '60', 'Florida', 'Orlando', 'Los Angeles', '01012345678', 0, 2, '2023-08-08 18:31:55', '2023-12-12 22:18:15', 0, 0, 1),
(37, 'Focus', 'Ford', '2030', '70', 'Texas', 'Houston', '789 Oak St', '1012121215', 0, 1, '2023-10-26 18:18:32', '2023-10-26 18:32:42', 0, 0, 0),
(38, 'Three', 'Mazda', '2020', '100', 'Calefornia', '654 Cedar St', 'San Diego', '1023232390', 0, 8, '2024-01-26 02:09:05', '2024-01-26 03:02:05', 0, 0, 0),
(39, 'Camry', 'Toyota', '2004', '70', 'Florida', 'florida', 'florida', '1023232390', 0, 8, '2024-01-26 02:11:05', '2024-01-26 02:11:22', 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `date_of_rents`
--

CREATE TABLE `date_of_rents` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `car_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `price` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `Subscription_period` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `date_of_rents`
--

INSERT INTO `date_of_rents` (`id`, `start_date`, `end_date`, `car_id`, `created_at`, `updated_at`, `price`, `Subscription_period`) VALUES
(1, '2023-09-07', '2023-12-06', 1, '2023-09-07 18:11:16', '2023-09-07 18:11:16', '200', '90'),
(2, '2023-10-08', '2024-10-06', 2, '2023-10-08 18:13:05', '2023-10-08 18:13:05', '900', '365'),
(3, '2023-10-01', '2023-10-31', 3, '2023-10-11 18:13:05', '2023-10-11 18:13:05', '100', '30'),
(4, '2023-10-03', '2023-11-02', 4, '2023-10-11 18:15:08', '2023-10-11 18:15:08', '100', '30'),
(5, '2024-01-26', '2024-02-25', 38, '2024-01-26 02:57:46', '2024-01-26 02:57:46', '200', '30'),
(6, '2024-01-26', '2024-02-25', 38, '2024-01-26 03:00:51', '2024-01-26 03:00:51', '200', '30');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_05_11_000000_create_otps_table', 1),
(4, '2019_08_19_000000_create_failed_jobs_table', 1),
(5, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(6, '2023_07_16_172657_create_permission_tables', 1),
(7, '2023_07_21_211137_create_cars_table', 1),
(8, '2023_07_21_211155_create_photos_table', 1),
(9, '2023_08_08_015923_add_num_o_frent_column_to_cars_table', 1),
(10, '2023_08_19_091144_create_rents_table', 2),
(12, '2023_08_20_195826_add_phone_column_to_waiting_rents_table', 3),
(13, '2023_08_20_211420_add_disable_column_to_cars_table', 3),
(14, '2023_08_23_053748_create_date_of_rents_table', 3),
(15, '2023_08_24_222725_create_admins_table', 4),
(16, '2023_08_28_084700_add_approved_column_to_cars_table', 4),
(17, '2023_08_31_100253_add_data_column_to_date_of_rents_table', 5),
(18, '2023_08_19_231943_create_waiting_rents_table', 6),
(19, '2024_01_27_021235_add_name_to_admins_table', 7);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_permissions`
--

INSERT INTO `model_has_permissions` (`permission_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\User', 1),
(1, 'App\\Models\\User', 2),
(1, 'App\\Models\\User', 3),
(1, 'App\\Models\\User', 4),
(1, 'App\\Models\\User', 5),
(1, 'App\\Models\\User\r\n', 6),
(1, 'App\\Models\\User', 8),
(2, 'App\\Models\\User', 7);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\User', 1),
(1, 'App\\Models\\User', 2),
(1, 'App\\Models\\User', 3),
(1, 'App\\Models\\User', 4),
(1, 'App\\Models\\User\r\n', 5),
(1, 'App\\Models\\User\r\n', 6),
(1, 'App\\Models\\User', 8),
(2, 'App\\Models\\User', 7);

-- --------------------------------------------------------

--
-- Table structure for table `otps`
--

CREATE TABLE `otps` (
  `id` int(10) UNSIGNED NOT NULL,
  `identifier` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `validity` int(11) NOT NULL,
  `valid` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `otps`
--

INSERT INTO `otps` (`id`, `identifier`, `token`, `validity`, `valid`, `created_at`, `updated_at`) VALUES
(1, 'olafawzii80@gmail.com', '024288', 2, 0, '2023-08-16 19:23:51', '2023-08-16 19:24:56'),
(2, 'abeeraly239@gmail.com', '266234', 2, 0, '2023-08-28 20:34:59', '2023-08-28 20:35:49'),
(4, 'abeerali25678@gmail.com', '730029', 2, 0, '2023-08-31 23:04:05', '2023-08-31 23:07:37'),
(6, 'dohisa1269@ikuromi.com', '257514', 2, 0, '2024-01-26 01:56:37', '2024-01-26 01:57:11'),
(8, 'olafawzi111@gmail.com', '789144', 2, 0, '2024-01-26 02:04:36', '2024-01-26 02:05:19');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'cars.book', 'api', '2023-08-16 19:23:00', '2023-08-16 19:23:00'),
(2, 'docs.add', 'api', '2023-08-16 19:23:00', '2023-08-16 19:23:00');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `photos`
--

CREATE TABLE `photos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `car_id` bigint(20) UNSIGNED NOT NULL,
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `photos`
--

INSERT INTO `photos` (`id`, `car_id`, `photo`, `created_at`, `updated_at`) VALUES
(1, 21, 'cars/Toyota Camry.png', '2023-08-08 18:31:51', '2023-08-08 18:31:51'),
(4, 2, 'cars/Honda CR-V.png', '2023-08-08 18:31:55', '2023-08-08 18:31:55'),
(5, 3, 'cars/Volkswagen Golf.png', '2023-08-08 18:31:55', '2023-08-08 18:31:55'),
(6, 4, 'cars/Ford F-150.png', '2023-08-08 18:31:55', '2023-08-08 18:31:55'),
(7, 5, 'cars/Chevrolet Camaro.png', '2023-08-08 18:31:55', '2023-08-08 18:31:55'),
(9, 7, 'cars/Audi Q5.png', '2023-08-08 18:31:55', '2023-08-08 18:31:55'),
(10, 8, 'cars/Ford Focus.png', '2023-08-08 18:31:55', '2023-08-08 18:31:55'),
(11, 9, 'cars/Chevrolet Silverado.png', '2023-08-08 18:31:55', '2023-08-08 18:31:55'),
(12, 10, 'cars/Mercedes-Benz E-Class.png', '2023-08-08 18:31:55', '2023-08-08 18:31:55'),
(13, 11, 'cars/Honda Accord.png', '2023-08-08 18:31:55', '2023-08-08 18:31:55'),
(14, 12, 'cars/Toyota RAV4.png', '2023-08-08 18:31:55', '2023-08-08 18:31:55'),
(15, 13, 'cars/Mazda3.png', '2023-08-08 18:31:55', '2023-08-08 18:31:55'),
(16, 14, 'cars/Ram 1500.png', '2023-08-08 18:31:55', '2023-08-08 18:31:55'),
(17, 15, 'cars/Ford Mustang.png', '2023-08-08 18:31:55', '2023-08-08 18:31:55'),
(18, 16, 'cars/Audi A4.png', '2023-08-08 18:31:55', '2023-08-08 18:31:55'),
(19, 17, 'cars/Jeep Grand Cherokee.png', '2023-08-08 18:31:55', '2023-08-08 18:31:55'),
(20, 18, 'cars/Hyundai Elantra.png', '2023-08-08 18:31:55', '2023-08-08 18:31:55'),
(21, 19, 'cars/GMC Sierra 1500.png', '2023-08-08 18:31:55', '2023-08-08 18:31:55'),
(22, 20, 'cars/BMW 4 Series.png', '2023-08-08 18:31:55', '2023-08-08 18:31:55'),
(23, 1, 'cars/Porsche 911 Cabriolet_1.png', '2023-08-12 19:47:03', '2023-08-12 19:47:03'),
(39, 37, 'cars/Ford Focus.png', '2023-10-26 18:18:32', '2023-10-26 18:18:32'),
(74, 22, 'cars/Toyota Camry.png', '2023-12-12 22:18:15', '2023-12-12 22:18:15'),
(75, 6, 'cars/BMW 3 Series.png', '2023-12-12 22:23:44', '2023-12-12 22:23:44'),
(76, 1, 'cars/Porsche 911 Cabriolet_2.png', '2023-12-12 22:32:08', '2023-12-12 22:32:08'),
(78, 38, 'cars/Mazda3.png', '2024-01-26 02:09:36', '2024-01-26 02:09:36'),
(80, 39, 'cars/Toyota Camry.png', '2024-01-26 02:11:22', '2024-01-26 02:11:22');

-- --------------------------------------------------------

--
-- Table structure for table `rents`
--

CREATE TABLE `rents` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `car_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `total_price` int(11) NOT NULL,
  `num_days` int(11) NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `rents`
--

INSERT INTO `rents` (`id`, `start_date`, `end_date`, `car_id`, `created_at`, `updated_at`, `user_id`, `total_price`, `num_days`, `phone`) VALUES
(1, '2023-09-20', '2023-09-22', 1, '2023-09-04 19:03:50', '2023-09-04 19:03:50', 4, 100, 2, '01066341085'),
(2, '2023-10-20', '2023-10-22', 2, '2023-09-04 19:04:47', '2023-09-04 19:04:47', 4, 100, 2, '01066341085'),
(3, '2023-12-08', '2023-12-09', 8, '2023-12-07 22:12:47', '2023-12-07 22:12:47', 2, 35, 1, '1012323323'),
(4, '2023-12-16', '2023-12-22', 8, '2023-12-08 23:08:01', '2023-12-08 23:08:01', 2, 210, 6, '1012323323');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'user', 'api', '2023-08-16 19:23:00', '2023-08-16 19:23:00'),
(2, 'company', 'api', '2023-08-16 19:23:00', '2023-08-16 19:23:00');

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_has_permissions`
--

INSERT INTO `role_has_permissions` (`permission_id`, `role_id`) VALUES
(1, 1),
(2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'ola', 'olafawzii80@gmail.com', '2023-08-16 19:24:56', '$2y$10$Wj2L.icbS7N88M.Mn/LwZ.dGD0656vWLmX9KYH0gTo0Yr6R8XxwuG', NULL, '2023-08-16 19:23:51', '2023-08-16 19:24:56'),
(2, 'Abeer', 'abeeraly239@gmail.com', '2023-08-28 20:35:49', '$2y$10$6eLFhZqaVDxHrUqEfpgE8ON8NhdIzcnhlbAr7AZSWJaWRaYUzY2Qa', NULL, '2023-08-28 20:34:56', '2023-11-17 16:08:09'),
(4, 'Abeer', 'abeerali25678@gmail.com', NULL, '$2y$10$xqfY24FO53GbnxxGWounluOrVZdoKP7a0WPCz2vTMPrX1.ZG7uJnq', NULL, '2023-08-31 23:04:05', '2023-08-31 23:04:05'),
(5, 'ahmed', 'ahmed@gmail.com', '2023-09-05 01:49:42', '$2y$10$CLbnFfXcODHXu08uM2DOeuXUl8cUv38Epv/QuBiIW6.3Is5on8OJi', NULL, '2023-09-05 01:49:42', '2023-09-05 01:49:42'),
(6, 'ali', 'ali@gmail.com', '2023-09-17 17:45:07', '$2y$10$CLbnFfXcODHXu08uM2DOeuXUl8cUv38Epv/QuBiIW6.3Is5on8OJi', NULL, '2023-06-09 23:41:39', '2023-03-07 01:31:19'),
(7, 'Ahmed Mohamed', 'dohisa1269@ikuromi.com', '2024-01-26 01:57:12', '$2y$10$gBJLPxeATbnde3BTQhnDueEegDXgdyFLeY5lYh3fBe1tpA7wJ/liK', NULL, '2024-01-26 01:56:37', '2024-01-26 01:57:12'),
(8, 'ola fawzi', 'olafawzi111@gmail.com', '2024-01-26 02:04:21', '$2y$10$aSAkYGfe.CxS46qUA75HAOmdeDx8.xODthG2kCYMXGFpsRBuIAzPS', NULL, '2024-01-26 02:03:54', '2024-01-26 02:08:23');

-- --------------------------------------------------------

--
-- Table structure for table `waiting_rents`
--

CREATE TABLE `waiting_rents` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `car_id` bigint(20) UNSIGNED NOT NULL,
  `total_price` int(11) NOT NULL,
  `num_days` int(11) NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admins_email_unique` (`email`);

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cars_user_id_foreign` (`user_id`);

--
-- Indexes for table `date_of_rents`
--
ALTER TABLE `date_of_rents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `date_of_rents_car_id_foreign` (`car_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `otps`
--
ALTER TABLE `otps`
  ADD PRIMARY KEY (`id`),
  ADD KEY `otps_id_index` (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `photos_car_id_foreign` (`car_id`);

--
-- Indexes for table `rents`
--
ALTER TABLE `rents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rents_car_id_foreign` (`car_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `waiting_rents`
--
ALTER TABLE `waiting_rents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `waiting_rents_user_id_foreign` (`user_id`),
  ADD KEY `waiting_rents_car_id_foreign` (`car_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `cars`
--
ALTER TABLE `cars`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `date_of_rents`
--
ALTER TABLE `date_of_rents`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `otps`
--
ALTER TABLE `otps`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `photos`
--
ALTER TABLE `photos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT for table `rents`
--
ALTER TABLE `rents`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `waiting_rents`
--
ALTER TABLE `waiting_rents`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cars`
--
ALTER TABLE `cars`
  ADD CONSTRAINT `cars_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `date_of_rents`
--
ALTER TABLE `date_of_rents`
  ADD CONSTRAINT `date_of_rents_car_id_foreign` FOREIGN KEY (`car_id`) REFERENCES `cars` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `photos`
--
ALTER TABLE `photos`
  ADD CONSTRAINT `photos_car_id_foreign` FOREIGN KEY (`car_id`) REFERENCES `cars` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `rents`
--
ALTER TABLE `rents`
  ADD CONSTRAINT `rents_car_id_foreign` FOREIGN KEY (`car_id`) REFERENCES `cars` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `rents_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `waiting_rents`
--
ALTER TABLE `waiting_rents`
  ADD CONSTRAINT `waiting_rents_car_id_foreign` FOREIGN KEY (`car_id`) REFERENCES `cars` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `waiting_rents_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
