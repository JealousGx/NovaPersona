CREATE TABLE `auth_provider` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`provider` varchar(32) NOT NULL,
	`provider_user_id` varchar(255) NOT NULL,
	`provider_data` json,
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `auth_provider_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `experience` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`job_title` varchar(255) NOT NULL,
	`company` varchar(255),
	`start_date` timestamp,
	`end_date` timestamp,
	`currently_working` int DEFAULT 0,
	`description` text,
	`order_index` int DEFAULT 0,
	CONSTRAINT `experience_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `portfolio_setting` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`template_id` varchar(255) NOT NULL DEFAULT 'default',
	`primary_color` varchar(16) DEFAULT '#0ea5a4',
	`visible_sections` json,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()),
	CONSTRAINT `portfolio_setting_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `profile` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`resume_text` text,
	`linkedin_url` varchar(512),
	`public_bio` text,
	`updated_at` timestamp DEFAULT (now()),
	CONSTRAINT `profile_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `project` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`project_name` varchar(255) NOT NULL,
	`description` text,
	`project_url` varchar(512),
	`repo_url` varchar(512),
	`visible` int DEFAULT 1,
	`order_index` int DEFAULT 0,
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `project_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `resume_file` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`file_url` varchar(1024) NOT NULL,
	`file_name` varchar(255),
	`mime_type` varchar(64),
	`size_bytes` int,
	`extracted_text_id` int,
	`uploaded_at` timestamp DEFAULT (now()),
	CONSTRAINT `resume_file_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `skill` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`skill_name` varchar(255) NOT NULL,
	`proficiency` int DEFAULT 0,
	`order_index` int DEFAULT 0,
	CONSTRAINT `skill_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `account` (
	`id` varchar(36) NOT NULL,
	`account_id` text NOT NULL,
	`provider_id` text NOT NULL,
	`user_id` varchar(36) NOT NULL,
	`access_token` text,
	`refresh_token` text,
	`id_token` text,
	`access_token_expires_at` timestamp,
	`refresh_token_expires_at` timestamp,
	`scope` text,
	`password` text,
	`created_at` timestamp NOT NULL,
	`updated_at` timestamp NOT NULL,
	CONSTRAINT `account_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `session` (
	`id` varchar(36) NOT NULL,
	`expires_at` timestamp NOT NULL,
	`token` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL,
	`updated_at` timestamp NOT NULL,
	`ip_address` text,
	`user_agent` text,
	`user_id` varchar(36) NOT NULL,
	CONSTRAINT `session_id` PRIMARY KEY(`id`),
	CONSTRAINT `session_token_unique` UNIQUE(`token`)
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` varchar(36) NOT NULL,
	`name` text NOT NULL,
	`email` varchar(255) NOT NULL,
	`email_verified` boolean NOT NULL,
	`image` text,
	`created_at` timestamp NOT NULL,
	`updated_at` timestamp NOT NULL,
	`is_anonymous` boolean,
	`professional_title` varchar(255),
	`has_onboarded` int DEFAULT 0,
	CONSTRAINT `user_id` PRIMARY KEY(`id`),
	CONSTRAINT `user_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `verification` (
	`id` varchar(36) NOT NULL,
	`identifier` text NOT NULL,
	`value` text NOT NULL,
	`expires_at` timestamp NOT NULL,
	`created_at` timestamp,
	`updated_at` timestamp,
	CONSTRAINT `verification_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `auth_provider` ADD CONSTRAINT `auth_provider_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `experience` ADD CONSTRAINT `experience_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `portfolio_setting` ADD CONSTRAINT `portfolio_setting_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `profile` ADD CONSTRAINT `profile_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `project` ADD CONSTRAINT `project_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `resume_file` ADD CONSTRAINT `resume_file_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `skill` ADD CONSTRAINT `skill_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `account` ADD CONSTRAINT `account_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `session` ADD CONSTRAINT `session_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX `auth_providers_user_id_idx` ON `auth_provider` (`user_id`);--> statement-breakpoint
CREATE INDEX `experiences_user_id_idx` ON `experience` (`user_id`);--> statement-breakpoint
CREATE INDEX `portfolio_settings_user_id_idx` ON `portfolio_setting` (`user_id`);--> statement-breakpoint
CREATE INDEX `portfolio_settings_template_id_idx` ON `portfolio_setting` (`template_id`);--> statement-breakpoint
CREATE INDEX `profiles_user_id_idx` ON `profile` (`user_id`);--> statement-breakpoint
CREATE INDEX `projects_user_id_idx` ON `project` (`user_id`);--> statement-breakpoint
CREATE INDEX `projects_project_name_idx` ON `project` (`project_name`);--> statement-breakpoint
CREATE INDEX `resume_files_user_id_idx` ON `resume_file` (`user_id`);--> statement-breakpoint
CREATE INDEX `resume_files_extracted_text_id_idx` ON `resume_file` (`extracted_text_id`);--> statement-breakpoint
CREATE INDEX `skills_user_id_idx` ON `skill` (`user_id`);--> statement-breakpoint
CREATE INDEX `skills_skill_name_idx` ON `skill` (`skill_name`);--> statement-breakpoint
CREATE INDEX `user_email_idx` ON `user` (`email`);