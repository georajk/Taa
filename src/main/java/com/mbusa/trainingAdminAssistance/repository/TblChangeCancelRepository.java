package com.mbusa.trainingAdminAssistance.repository;


import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.mbusa.trainingAdminAssistance.model.TblChangeCancel;


@Transactional
public interface TblChangeCancelRepository extends JpaRepository<TblChangeCancel, Long> {

}
