package com.example.demo.repository;

import com.example.demo.entity.Storage;
import org.hibernate.annotations.SQLDelete;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface StorageRepository extends JpaRepository<Storage, Long> {
    public Storage findByStorageSeq(Long storageSeq);
    public List<Storage> findByUserNoLike(String userNo);
    public List<Storage> findByTitleContainingAndUserNoLike(String title, String userNo);

    @Transactional
    public void deleteByStorageSeq(Long storageSeq);

    @Transactional
    @Modifying
    @Query("UPDATE Storage s set s.title = :title, s.contents = :contents where s.storageSeq = :seq")
    void updateReview(@Param("seq") Long seq,@Param("title") String title,@Param("contents") String contents);
}