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
@RequestMapping("/request/form")
public class RequestFormController {
	@Autowired
	TblChangeCancelStudentsRepository changeCancelStudentsRepository;

	@Autowired
	TblChangeCancelRepository changeCancelRepository;

	@RequestMapping("/create")
	public TblChangeCancel create(@RequestBody TblChangeCancel tblChangeCancel) {
//		BeanUtils.
//		for (Iterator iterator = tblChangeCancel.getTblChangeCancelStudents().iterator(); iterator.hasNext();) {
//			TblChangeCancelStudents type = (TblChangeCancelStudents) iterator.next();
//			type.setChangeCancel(tblChangeCancel);
//		}
		tblChangeCancel = changeCancelRepository.save(tblChangeCancel);
		return tblChangeCancel;
	}

	@RequestMapping("/read")
	public List<TblChangeCancel> read(TblChangeCancel tblChangeCancel) {

		List<TblChangeCancel> tblChangeCancellist = changeCancelRepository
				.findAll();
		for (Iterator iterator = tblChangeCancellist.iterator(); iterator
				.hasNext();) {
			TblChangeCancel tblChangeCancelLoop = (TblChangeCancel) iterator
					.next();
			System.out.println("tblChangeCancelStudents :"
					+ tblChangeCancelLoop.getId());
		}
		return tblChangeCancellist;
	}

	@RequestMapping("/readStudents")
	public List<TblChangeCancelStudents> read() {

		List<TblChangeCancelStudents> tblChangeCancellist = changeCancelStudentsRepository
				.findAll();

		return tblChangeCancellist;
	}

}
