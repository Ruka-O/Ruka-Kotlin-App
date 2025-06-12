package com.example.schedule

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import jakarta.persistence.JoinColumn
import jakarta.persistence.ManyToOne
import java.io.Serial

@Entity
data class Tag(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long = 0,
    var tagName: String,
    var color: String,
)

@Entity
data class Genre(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long = 0,
    var genreName: String,
)

@Entity
data class Details(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long = 0,
    @ManyToOne
    @JoinColumn(name = "tagId", referencedColumnName = "id")
    var tag: Tag,

//    var tag_id: Long,
//    @JoinColumn(name = "genre_id")
    @ManyToOne
    @JoinColumn(name = "genreId", referencedColumnName = "id")
    var genre: Genre,
    var detail: String,
    var date: String,
    var time: String? = null,
)