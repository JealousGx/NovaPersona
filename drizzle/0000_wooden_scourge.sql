CREATE TABLE `auth_providers` (
	`id` serial AUTO_INCREMENT,
	`user_id` int NOT NULL,
	`provider` varchar(32) NOT NULL,
	`provider_user_id` varchar(255) NOT NULL,
	`provider_data` json,
	`created_at` timestamp DEFAULT (now())
);
--> statement-breakpoint
CREATE TABLE `experiences` (
	`id` serial AUTO_INCREMENT,
	`user_id` int NOT NULL,
	`job_title` varchar(255) NOT NULL,
	`company` varchar(255),
	`start_date` timestamp,
	`end_date` timestamp,
	`currently_working` int DEFAULT 0,
	`description` text,
	`order_index` int DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `portfolio_settings` (
	`id` serial AUTO_INCREMENT,
	`user_id` int NOT NULL,
	`template_id` varchar(255) NOT NULL DEFAULT 'default',
	`primary_color` varchar(16) DEFAULT '#0ea5a4',
	`visible_sections` json,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now())
);
--> statement-breakpoint
CREATE TABLE `profiles` (
	`id` serial AUTO_INCREMENT,
	`user_id` int NOT NULL,
	`resume_text` text,
	`linkedin_url` varchar(512),
	`public_bio` text,
	`updated_at` timestamp DEFAULT (now())
);
--> statement-breakpoint
CREATE TABLE `projects` (
	`id` serial AUTO_INCREMENT,
	`user_id` int NOT NULL,
	`project_name` varchar(255) NOT NULL,
	`description` text,
	`project_url` varchar(512),
	`repo_url` varchar(512),
	`visible` int DEFAULT 1,
	`order_index` int DEFAULT 0,
	`created_at` timestamp DEFAULT (now())
);
--> statement-breakpoint
CREATE TABLE `resume_files` (
	`id` serial AUTO_INCREMENT,
	`user_id` int NOT NULL,
	`file_url` varchar(1024) NOT NULL,
	`file_name` varchar(255),
	`mime_type` varchar(64),
	`size_bytes` int,
	`extracted_text_id` int,
	`uploaded_at` timestamp DEFAULT (now())
);
--> statement-breakpoint
CREATE TABLE `skills` (
	`id` serial AUTO_INCREMENT,
	`user_id` int NOT NULL,
	`skill_name` varchar(255) NOT NULL,
	`proficiency` int DEFAULT 0,
	`order_index` int DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT,
	`email` varchar(255) NOT NULL,
	`password_hash` varchar(512),
	`full_name` varchar(255),
	`professional_title` varchar(255),
	`has_onboarded` int DEFAULT 0,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `auth_providers` ADD CONSTRAINT `auth_providers_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `experiences` ADD CONSTRAINT `experiences_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `portfolio_settings` ADD CONSTRAINT `portfolio_settings_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `profiles` ADD CONSTRAINT `profiles_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `projects` ADD CONSTRAINT `projects_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `resume_files` ADD CONSTRAINT `resume_files_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `skills` ADD CONSTRAINT `skills_user_id_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX `auth_providers_user_id_idx` ON `auth_providers` (`user_id`);--> statement-breakpoint
CREATE INDEX `experiences_user_id_idx` ON `experiences` (`user_id`);--> statement-breakpoint
CREATE INDEX `portfolio_settings_user_id_idx` ON `portfolio_settings` (`user_id`);--> statement-breakpoint
CREATE INDEX `portfolio_settings_template_id_idx` ON `portfolio_settings` (`template_id`);--> statement-breakpoint
CREATE INDEX `profiles_user_id_idx` ON `profiles` (`user_id`);--> statement-breakpoint
CREATE INDEX `projects_user_id_idx` ON `projects` (`user_id`);--> statement-breakpoint
CREATE INDEX `projects_project_name_idx` ON `projects` (`project_name`);--> statement-breakpoint
CREATE INDEX `resume_files_user_id_idx` ON `resume_files` (`user_id`);--> statement-breakpoint
CREATE INDEX `resume_files_extracted_text_id_idx` ON `resume_files` (`extracted_text_id`);--> statement-breakpoint
CREATE INDEX `skills_user_id_idx` ON `skills` (`user_id`);--> statement-breakpoint
CREATE INDEX `skills_skill_name_idx` ON `skills` (`skill_name`);--> statement-breakpoint
CREATE INDEX `user_email_idx` ON `users` (`email`);