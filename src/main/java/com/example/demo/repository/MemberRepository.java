package com.example.demo.repository;

import com.example.demo.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
    public List<Member> findByUserId(String userId);
    public Member findByUserNo(Long userNo);

    @Query("select m.userNo, m.userPw, m.userName, m.regDate, m.email, m.phone from Member m")
    public List<Object[]> listAllMember();
}