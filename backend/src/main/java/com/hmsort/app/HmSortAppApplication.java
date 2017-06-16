package com.hmsort.app;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.*;

@RestController
@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan({"com.hmsort"})
public class HmSortAppApplication {


    public static void main(String[] args) throws Exception {
        SpringApplication.run(HmSortAppApplication.class, args);
    }

}