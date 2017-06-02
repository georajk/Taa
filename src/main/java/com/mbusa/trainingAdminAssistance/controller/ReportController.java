package com.mbusa.trainingAdminAssistance.controller;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestControllerAdvice;



import com.mbusa.trainingAdminAssistance.model.TblChangeCancel;
import com.mbusa.trainingAdminAssistance.model.TblChangeCancelStudents;
import com.mbusa.trainingAdminAssistance.repository.TblChangeCancelRepository;
import com.mbusa.trainingAdminAssistance.repository.TblChangeCancelStudentsRepository;

@RestControllerAdvice
@RequestMapping("/report")
public class ReportController {
	

	@Autowired
	TblChangeCancelRepository changeCancelRepository;

	@RequestMapping("/fetch")
	public List<TblChangeCancel> fetch() {


		List<TblChangeCancel> tblChangeCancellist = changeCancelRepository
				.findAll();
		return tblChangeCancellist;
	}

	@RequestMapping("/fetchOne")
	public TblChangeCancel fetch(@RequestBody Long id) {


		TblChangeCancel tblChangeCancel = changeCancelRepository
				.findOne(id);
		return tblChangeCancel;
	}

}
