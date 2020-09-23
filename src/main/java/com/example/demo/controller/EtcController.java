package com.example.demo.controller;

import com.example.demo.entity.*;
import com.example.demo.repository.StorageRepository;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Log
@RestController
@CrossOrigin(origins ="http://localhost:8080", allowedHeaders = "*")
public class EtcController {

    @Autowired
    StorageRepository storageRepository;

    @RequestMapping(value = "storage", method = RequestMethod.POST)
    public void setStorageData(@Validated @RequestBody Storage storage) throws Exception {
        log.info("setStorageData(): " );

        storageRepository.save(storage);
    }

    @GetMapping("storageUserNo/{userNo}")
    public List<Storage> getStorageData(@PathVariable String userNo) {
        log.info("getStorageData(): " );
        return storageRepository.findByUserNoLike(userNo);
    }

    @GetMapping("storage/{storageSeq}")
    public Storage getReadStorageData(@PathVariable Long storageSeq) {
        log.info("getReadStorageData(): " );

        Storage st = storageRepository.findByStorageSeq(storageSeq);
        log.info("readData: " + st);
        return storageRepository.findByStorageSeq(storageSeq);
    }

    @PostMapping("storage/search")
    @ResponseBody
    public List<Storage> searchStorageData(@RequestBody Map<String, String> requestParams) throws Exception {
        log.info("searchStorageData(): " + requestParams.get("userNo") + requestParams.get("searchMessage"));
        String userNo = requestParams.get("userNo");
        String searchMessage = requestParams.get("searchMessage");

        List<Storage> list = storageRepository.findByTitleContainingAndUserNoLike(searchMessage, userNo);
        log.info("searchList: " + list);
        return storageRepository.findByTitleContainingAndUserNoLike(searchMessage, userNo);
    }

    @PostMapping("delete")
    @ResponseBody
    public List<Storage> deleteReview(@RequestBody Map<String, String> requestParams) {
        Long storageSeq = Long.valueOf(requestParams.get("storageSeq"));
        String userNo = requestParams.get("userNo");
        log.info("deleteReview(): " + storageSeq );
        storageRepository.deleteByStorageSeq(storageSeq);
        log.info("deleteByStorageSeq(): ");
        return storageRepository.findByUserNoLike(userNo);
    }

    @PostMapping("modify")
    @ResponseBody
    public Storage modifyReview(@Validated @RequestBody Storage storage){
        log.info("modifyReview: " + storage);
        storageRepository.updateReview(storage.getStorageSeq(),storage.getTitle(), storage.getContents());
        return storageRepository.findByStorageSeq(storage.getStorageSeq());
    }

}
