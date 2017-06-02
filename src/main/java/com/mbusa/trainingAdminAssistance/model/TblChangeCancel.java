/**
 * 
 */
package com.mbusa.trainingAdminAssistance.model;

import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

/**
 * @author GKAKKAS
 *
 */
@Entity
@Table(name = "TBLCHANGECANCEL")
public class TblChangeCancel implements Serializable {

	/**
	  * 
	  */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", nullable = false)
	private Long id;
	@Column(name = "REQSTR_NAM")
	private String requesterName;
	@Column(name = "REQSTR_EML")
	private String reqEmailAddr;
	@Column(name = "CRSE_NAM")
	private String courseName;
	@Column(name = "CRSE_ID")
	private String courseId;
	@Column(name = "STRT_DTE_CLS")
	private Date classStartDt;
	@Column(name = "END_DTE_CLS")
	private Date classEndDt;
	@Column(name = "CLS_LOC")
	private String classLocation;
	@Column(name = "OTH_LOC")
	private String otherLocation;
	@Column(name = "REQ_TYP")
	private String requestType;
	@Column(name = "STRT_DTE_CHG")
	private Date newClassStartDt;
	@Column(name = "END_DTE_CHG")
	private Date newClassEndDt;
	@Column(name = "CHG_REAS")
	private String reasonForChange;
	@Column(name = "REQ_IMPCT")
	private String impactOfRequest;
	@Column(name = "MGR")
	private String managerOrSupervisorName;
	@Column(name = "NEW_STRT_DTE")
	private String newStartDate;
	@Column(name = "NEW_END_DTE")
	private String newEndDate;
	@Column(name = "LOC_CHG")
	private String newLocation;
	@Column(name = "ORIGNL_TME")
	private String originalClassStartTm;
	@Column(name = "ORIGNL_TME_END")
	private String originalClassEndTm;
	@Column(name = "NEW_TME")
	private String classNewStartTm;
	@Column(name = "NEW_TME_END")
	private String classNewEndTm;
	@Column(name = "EXISTING_CAPY")
	private String trainingClassInitialCapacity;
	@Column(name = "NEW_CAPY")
	private String newCapacity;
	@Column(name = "INSTR_NAM")
	private String trainingClassInstructorNm;
	@Column(name = "HTL_LOC")
	private String hotelLocation;
	@Column(name = "CLS_CAPY")
	private String initialCapacity;
	@Column(name = "APRV")
	private String approvedStatus;
	@Column(name = "APRV_BY")
	private String approvedBy;
	@Column(name = "COMPLETED")
	private String requestStatus;
	@Column(name = "REQDTE")
	private Date requestedDate;
	@Column(name = "INSTR_CHG")
	private String newInstructorName;
	@Column(name = "COMPLETED_DTE")
	private String requestCompletedDate;
	
	@OneToMany(targetEntity = TblChangeCancelStudents.class, mappedBy="changeCancel", cascade = CascadeType.ALL)
	@JsonManagedReference
	private Set<TblChangeCancelStudents> tblChangeCancelStudents;

	public String getRequesterName() {
		return requesterName;
	}

	public void setRequesterName(String requesterName) {
		this.requesterName = requesterName;
	}

	public String getReqEmailAddr() {
		return reqEmailAddr;
	}

	public void setReqEmailAddr(String reqEmailAddr) {
		this.reqEmailAddr = reqEmailAddr;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public String getCourseId() {
		return courseId;
	}

	public void setCourseId(String courseId) {
		this.courseId = courseId;
	}

	public Date getClassStartDt() {
		return classStartDt;
	}

	public void setClassStartDt(Date classStartDt) {
		this.classStartDt = classStartDt;
	}

	public Date getClassEndDt() {
		return classEndDt;
	}

	public void setClassEndDt(Date classEndDt) {
		this.classEndDt = classEndDt;
	}

	public String getClassLocation() {
		return classLocation;
	}

	public void setClassLocation(String classLocation) {
		this.classLocation = classLocation;
	}

	public String getOtherLocation() {
		return otherLocation;
	}

	public void setOtherLocation(String otherLocation) {
		this.otherLocation = otherLocation;
	}

	public String getRequestType() {
		return requestType;
	}

	public void setRequestType(String requestType) {
		this.requestType = requestType;
	}

	public Date getNewClassStartDt() {
		return newClassStartDt;
	}

	public void setNewClassStartDt(Date newClassStartDt) {
		this.newClassStartDt = newClassStartDt;
	}

	public Date getNewClassEndDt() {
		return newClassEndDt;
	}

	public void setNewClassEndDt(Date newClassEndDt) {
		this.newClassEndDt = newClassEndDt;
	}

	public String getReasonForChange() {
		return reasonForChange;
	}

	public void setReasonForChange(String reasonForChange) {
		this.reasonForChange = reasonForChange;
	}

	public String getImpactOfRequest() {
		return impactOfRequest;
	}

	public void setImpactOfRequest(String impactOfRequest) {
		this.impactOfRequest = impactOfRequest;
	}

	public String getManagerOrSupervisorName() {
		return managerOrSupervisorName;
	}

	public void setManagerOrSupervisorName(String managerOrSupervisorName) {
		this.managerOrSupervisorName = managerOrSupervisorName;
	}

	public String getNewStartDate() {
		return newStartDate;
	}

	public void setNewStartDate(String newStartDate) {
		this.newStartDate = newStartDate;
	}

	public String getNewEndDate() {
		return newEndDate;
	}

	public void setNewEndDate(String newEndDate) {
		this.newEndDate = newEndDate;
	}

	public String getNewLocation() {
		return newLocation;
	}

	public void setNewLocation(String newLocation) {
		this.newLocation = newLocation;
	}

	public String getOriginalClassStartTm() {
		return originalClassStartTm;
	}

	public void setOriginalClassStartTm(String originalClassStartTm) {
		this.originalClassStartTm = originalClassStartTm;
	}

	public String getOriginalClassEndTm() {
		return originalClassEndTm;
	}

	public void setOriginalClassEndTm(String originalClassEndTm) {
		this.originalClassEndTm = originalClassEndTm;
	}

	public String getClassNewStartTm() {
		return classNewStartTm;
	}

	public void setClassNewStartTm(String classNewStartTm) {
		this.classNewStartTm = classNewStartTm;
	}

	public String getClassNewEndTm() {
		return classNewEndTm;
	}

	public void setClassNewEndTm(String classNewEndTm) {
		this.classNewEndTm = classNewEndTm;
	}

	public String getTrainingClassInitialCapacity() {
		return trainingClassInitialCapacity;
	}

	public void setTrainingClassInitialCapacity(
			String trainingClassInitialCapacity) {
		this.trainingClassInitialCapacity = trainingClassInitialCapacity;
	}

	public String getNewCapacity() {
		return newCapacity;
	}

	public void setNewCapacity(String newCapacity) {
		this.newCapacity = newCapacity;
	}

	public String getTrainingClassInstructorNm() {
		return trainingClassInstructorNm;
	}

	public void setTrainingClassInstructorNm(String trainingClassInstructorNm) {
		this.trainingClassInstructorNm = trainingClassInstructorNm;
	}

	public String getHotelLocation() {
		return hotelLocation;
	}

	public void setHotelLocation(String hotelLocation) {
		this.hotelLocation = hotelLocation;
	}

	public String getInitialCapacity() {
		return initialCapacity;
	}

	public void setInitialCapacity(String initialCapacity) {
		this.initialCapacity = initialCapacity;
	}

	public String getApprovedStatus() {
		return approvedStatus;
	}

	public void setApprovedStatus(String approvedStatus) {
		this.approvedStatus = approvedStatus;
	}

	public String getApprovedBy() {
		return approvedBy;
	}

	public void setApprovedBy(String approvedBy) {
		this.approvedBy = approvedBy;
	}

	public String getRequestStatus() {
		return requestStatus;
	}

	public void setRequestStatus(String requestStatus) {
		this.requestStatus = requestStatus;
	}

	public Date getRequestedDate() {
		return requestedDate;
	}

	public void setRequestedDate(Date requestedDate) {
		this.requestedDate = requestedDate;
	}

	public String getNewInstructorName() {
		return newInstructorName;
	}

	public void setNewInstructorName(String newInstructorName) {
		this.newInstructorName = newInstructorName;
	}

	public String getRequestCompletedDate() {
		return requestCompletedDate;
	}

	public void setRequestCompletedDate(String requestCompletedDate) {
		this.requestCompletedDate = requestCompletedDate;
	}

	public Set<TblChangeCancelStudents> getTblChangeCancelStudents() {
		return tblChangeCancelStudents;
	}

	public void setTblChangeCancelStudents(
			Set<TblChangeCancelStudents> tblChangeCancelStudents) {
		this.tblChangeCancelStudents = tblChangeCancelStudents;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	public void addStudents(TblChangeCancelStudents cancelStudents) {
	    if (cancelStudents == null) {
	        return;
	    } else {
	        if (tblChangeCancelStudents == null) {
	        	tblChangeCancelStudents = new HashSet<TblChangeCancelStudents>();
	        }
	        tblChangeCancelStudents.add(cancelStudents);
	        cancelStudents.setChangeCancel(this);
	    }
	}
	

}
