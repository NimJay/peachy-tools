/**
 * Contains the MySQL schema for Peachy Tools.
 *
 * @author Nim <i.am.nim.jay@gmail.com>
 */


/*
CREATE DATABASE peachy_tools
	DEFAULT CHARACTER SET utf8mb4
	DEFAULT COLLATE utf8mb4_unicode_ci;
*/



/* ---------- S U G G E S T I O N ---------- */


CREATE TABLE suggestion (
    suggestion      TEXT NOT NULL,
    url             TEXT NOT NULL,
    time_created    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
