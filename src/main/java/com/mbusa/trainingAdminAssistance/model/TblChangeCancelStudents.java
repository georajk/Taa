/**
 * 
 */
package com.mbusa.trainingAdminAssistance.model;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

/**
 * @author GKAKKAS
 *
 */
@Entity
@Table(name = "TBLCHANGECANCELSTUDENTS")
public class TblChangeCancelStudents implements Serializable {
	
	/**
	  * 
	  */
	 private static final long serialVersionUID = 1L;
	 @Id
	 @GeneratedValue(strategy = GenerationType.AUTO)
	 @Column(name="id", nullable=false)
	 private Long id;
	 
	 @Column(name="STUD_NAM")
	 private String studentName;
	 
	 @Column(name="DLR")
	 private String dealerInfo;
	 
//	 @Column(name="REQ_ID")
//	 private String requestNumber;

	 
	 @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	    @JoinColumn(name = "REQ_ID",nullable = false, updatable = false, insertable = true)
	 @JsonBackReference
	 private TblChangeCancel changeCancel;
	 
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public String getDealerInfo() {
		return dealerInfo;
	}

	public void setDealerInfo(String dealerInfo) {
		this.dealerInfo = dealerInfo;
	}

//	public String getRequestNumber() {
//		return requestNumber;
//	}
//
//	public void setRequestNumber(String requestNumber) {
//		this.requestNumber = requestNumber;
//	}

	
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	 public TblChangeCancel getChangeCancel() {
		return changeCancel;
	}

	public void setChangeCancel(TblChangeCancel changeCancel) {
		this.changeCancel = changeCancel;
	}

	public String toString(){
		 return "id:"+this.id+", studentName:"+this.studentName;
		 
	 } 

}
