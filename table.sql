create table user(
    id int primary key AUTO_INCREMENT,
    firstname varchar(250),
    lastname varchar(250),
    email varchar(50),
    password varchar(20),
    UNIQUE(email)
);

insert into user(firstname,lastname,email,password) values('Admin','boss','admin@gmail.com','1234');