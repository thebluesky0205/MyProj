package com.example.demo.entity;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Data
@NoArgsConstructor
@Entity
public class Storage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long storageSeq;

    @Column(length = 20, nullable = false)
    private String userNo;

    @Column(length = 500, nullable = false)
    private String title;

    @Column(length = 2000, nullable = false)
    private String contents;

    @Builder
    public Storage(String userNo, String title, String contents){
        this.userNo = userNo;
        this.title = title;
        this.contents = contents;
    }
}