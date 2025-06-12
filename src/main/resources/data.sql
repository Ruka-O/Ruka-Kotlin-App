delete
from tag;

delete
from genre;

INSERT INTO genre (genre_name)
values ('TV'),
       ('Instagram'),
       ('Youtube'),
       ('Radio'),
       ('Live'),
       ('Release');

INSERT INTO tag (tag_name, color)
values ('yama', '#ff0000'),
       ('chine', '#ff3366'),
       ('yuto', '#66ccff'),
       ('ari', '#ed6d35'),
       ('ino', '#007bbb'),
       ('taka', '#9932cc'),
       ('hika', '#ffd900'),
       ('yabu', '#39cbb1c');
