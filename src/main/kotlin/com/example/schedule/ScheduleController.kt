package com.example.schedule

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.DeleteMapping
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import kotlin.jvm.optionals.toList


@RestController
class ScheduleController(
    @Autowired private val detailRepository: DetailsRepository,
    @Autowired private val tagRepository: TagRepository,
    @Autowired private val genreRepository: GenreRepository
) {
    @GetMapping("/api/genre")
    fun getGenreList(): List<Genre> {
        val genre = genreRepository.findAll()
        return genre.toList()
    }

    @PostMapping("/api/genre")
    fun postGenre(@RequestBody request: GenreRequest) {
        val entity = Genre(genreName = request.genreName)
        genreRepository.save(entity)
    }

    @GetMapping("/api/tag")
    fun getTagList(): List<Tag> {
        val tags = tagRepository.findAll()
        return tags.toList()
    }

    @PostMapping("/api/tag")
    fun postTag(@RequestBody request: TagRequest) {
        val entity = Tag(tagName = request.tagName, color = request.color)
        tagRepository.save(entity)
    }


    @GetMapping("/api/detail")
    fun getDetail(): List<Details> {
        val details = detailRepository.findAll()
        return details.toList()
    }

    @GetMapping("/api/detail/{date}")
    fun getDetail(@PathVariable date: String): List<Details> {
        val detail =
            detailRepository.findAll().filter { it.date == date }.sortedBy { it.time?.substringBefore(":")?.toInt() }
        return detail.toList()
    }

    @PostMapping("/api/detail")
    fun postDetail(@RequestBody request: DetailRequest) {
        val tag = tagRepository.findById(request.tagId).get()
        val genre = genreRepository.findById(request.genreId).get()
        val entity =
            Details(tag = tag, genre = genre, detail = request.detail, date = request.date, time = request.time)
        detailRepository.save(entity)
    }

    @DeleteMapping("/api/detail/{id}")
    fun deleteDetail(@PathVariable id: Long) {
        detailRepository.deleteById(id)
    }
}