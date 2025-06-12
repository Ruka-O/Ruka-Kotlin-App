delete
from details;

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
       ('chine', '#ff66b8'),
       ('yuto', '#66ccff'),
       ('ari', '#ff8c1a'),
       ('ino', '#007bbb'),
       ('taka', '#9932cc'),
       ('hika', '#ffd900'),
       ('yabu', '#9cbb1c');
