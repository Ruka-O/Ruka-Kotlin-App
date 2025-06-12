package com.example.schedule

import org.assertj.core.api.Assertions.assertThat
import org.hamcrest.CoreMatchers.equalTo
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.client.TestRestTemplate
import org.springframework.boot.test.web.server.LocalServerPort
import org.springframework.http.HttpStatus

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ScheduleApplicationTests(
    @Autowired val restTemplate: TestRestTemplate,
    @LocalServerPort val port: Int,

    ) {

    @Autowired
    private lateinit var genreRepository: GenreRepository

    @Autowired
    private lateinit var tagRepository: TagRepository

    @Autowired
    private lateinit var detailRepository: DetailsRepository

    @Test
    fun `genre_GET`() {
        val response = restTemplate.getForEntity("http://localhost:$port/api/genre", Array<Genre>::class.java)
        val genreResponse = response.body!!
//        assertThat(genreResponse.size, equalTo(1))
        assertThat(response.statusCode, equalTo(HttpStatus.OK))
    }


    @Test
    fun `genreにpostする`() {
        val request = GenreRequest("yama")
        restTemplate.postForEntity("http://localhost:$port/api/genre", request, String::class.java)

        val response = restTemplate.getForEntity("http://localhost:$port/api/genre", Array<Genre>::class.java)
        val genreResponse = response.body!!
        assertThat(response.statusCode, equalTo(HttpStatus.OK))
//        assertThat(genreResponse.size, equalTo(10))
    }

    @Test
    fun `GETリクエストはOKステータスを返す`() {
        val response = restTemplate.getForEntity("http://localhost:$port/api/detail", String::class.java)
        assertThat(response.statusCode).isEqualTo(HttpStatus.OK)
    }

    @Test
    fun `POSTリクエストはOKステータスを返す`() {

        val request = DetailRequest(1, 1, "hello", "2025-06-22", "18:00")
        val response = restTemplate.postForEntity("http://localhost:$port/api/detail", request, String::class.java)
        assertThat(response.statusCode).isEqualTo(HttpStatus.OK)
    }

    @Test
    fun `指定した日付のdetailをGETできる`() {
        val response = restTemplate.getForEntity("http://localhost:$port/api/detail/20250613", String::class.java)
//        val detailResponse = response.body!!
        assertThat(response.statusCode).isEqualTo(HttpStatus.OK)
//        assertThat(detailResponse.size, equalTo(10))

    }


//    @BeforeEach
//    fun setup() {
//        detailRepository.deleteAll()
//    }
}
