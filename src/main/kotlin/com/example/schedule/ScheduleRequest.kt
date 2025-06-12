package com.example.schedule

import org.yaml.snakeyaml.events.Event
import java.awt.Color


data class GenreRequest(var genreName: String)
data class TagRequest(var tagName: String, var color: String)
data class DetailRequest(var tagId: Long, var genreId: Long, var detail: String, var date: String, var time: String)