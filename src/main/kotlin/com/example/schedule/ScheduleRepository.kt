package com.example.schedule

import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface DetailsRepository : CrudRepository<Details, Long>

@Repository
interface GenreRepository : CrudRepository<Genre, Long>

@Repository
interface TagRepository : CrudRepository<Tag, Long>


