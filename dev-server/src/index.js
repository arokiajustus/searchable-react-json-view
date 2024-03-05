"use strict"

//import react and reactDom for browser rendering
import React, { ChangeEvent } from "react"
import ReactDom from "react-dom"

import Moment from "moment"

//import the react-json-view component (installed with npm)
import JsonViewer from "./../../src/js/index"

const App = () => {
    const [search, setSearch] = React.useState('')
    const [searchText, setSearchText] = React.useState('')
    const operationCallback = (editProps: InteractionProps): boolean => {
        return true;
    };

     const searchTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setSearch(event.target.value);
    };

    const searchTextKeypress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === 'Enter') {
            setSearchText(event.target.value);
        }
    };

    return <div>
        Search: <input onKeyDown={searchTextKeypress} />
        <JsonViewer
            highlightSearch={searchText}
            highlightSearchColor={"yellow"}
            style={{ padding: "30px", backgroundColor: "white" }}
            src={getExampleJson1()}
            onEdit={operationCallback}
            onAdd={operationCallback}
            onDelete={operationCallback}
            collapseStringsAfterLength={12}
            displayObjectSize={true}
            name={false}
            displayDataTypes={false}
            collapsed={1}
            defaultValue=""
            theme={{
                base00: 'rgba(0, 0, 0, 0)',
                base01: 'rgb(245, 245, 245)',
                base02: 'rgb(235, 235, 235)',
                base03: '#9e9e9e',
                base04: 'rgba(0, 0, 0, 0.3)',
                base05: '#616161',
                base06: '#424242',
                base07: '#212121',
                base08: '#880e4f', // No idea!!
                base09: '#304FFE', // String
                base0A: '#880e4f', // Null
                base0B: '#00A4D3', // float
                base0C: '#212121', // Array numbers
                base0D: '#616161', // Date and open
                base0E: '#c224ff',
                base0F: '#00A4D3',
            }}
        /></div>
}

//render 2 different examples of the react-json-view component
ReactDom.render(
    <App />,
    document.getElementById("app-container")
)

/*-------------------------------------------------------------------------*/
/*     the following functions just contain test json data for display     */
/*-------------------------------------------------------------------------*/

//just a function to get an example JSON object
function getExampleJson1() {
    return {
	"scrubId": "298ADC36-D479-11EE-B143-DFD6BD90BED4",
	"correlationId": "ECB7AC74-9929-11EE-A4AC-349A1489E5C6",
	"objectToScrub": {
		"networkId": null,
		"correlationId": "ECB7AC74-9929-11EE-A4AC-349A1489E5C6",
		"practiceHierarchy": [
			"1"
		],
		"isInstrumentationEnabled": "N",
		"claim": {
			"manualDropReasonId": "",
			"referralAuths": [],
			"siblingClaimId": [],
			"billingGroup": {
				"claimType": null
			},
			"surgeon": {
				"id": null
			},
			"anotherInsuranceFlag": "N",
			"additionalInfo": null,
			"referralAuthorization": {
				"patientInsuranceId": "",
				"visitsLeft": "",
				"insurance": {
					"insurancePackage": {
						"claimRuleCategoryId": [],
						"productTypeId": null,
						"id": null
					},
					"memberId": "W262245411",
					"id": ""
				},
				"noReferralRequiredFlag": null,
				"typeId": "",
				"authorizationNumber": "",
				"authorizationType": "",
				"notes": null,
				"procedureCodes": [],
				"id": "",
				"visitsApproved": "",
				"fromDate": "",
				"toDate": ""
			},
			"schedulingProviderId": "",
			"groupBillingYN": null,
			"batchSpecialHandling": null,
			"parentClaimId": "30887",
			"caserate": {
				"local7CaserateCodes": []
			},
			"patientReasonForVisitA": null,
			"chargeBundleInfo": [],
			"autoAccidentState": null,
			"appointment": {
				"date": "",
				"documents": null,
				"originalAppointmentId": null,
				"holidayYN": null,
				"copayAmount": null,
				"checkInTime": null,
				"isDistantSiteTelehealth": "N",
				"type": {
					"classId": null,
					"name": null,
					"id": null,
					"shortName": null
				},
				"id": "",
				"startTime": null,
				"cancelled": "",
				"teleHealthPlaceOfServiceIndicator": ""
			},
			"submissionOverrides": [
				{
					"formAttributes": [],
					"formName": "cms1500"
				},
				{
					"formAttributes": [],
					"formName": "ansi_837i"
				},
				{
					"formAttributes": [],
					"formName": "ub04"
				},
				{
					"formAttributes": [],
					"formName": "ansi_837"
				}
			],
			"charges": [
				{
					"provider": {
						"id": "13",
						"type": {
							"id": null
						}
					},
					"childYN": null,
					"claimPZDC": null,
					"payments": "0",
					"originalPUnits": null,
					"globalDays": "XXX",
					"foreignChargeIdentifier": null,
					"outstandingAmount": "60",
					"supervisingProviderId": null,
					"medicareStatusCode": "I",
					"taxRate": null,
					"emergencyService": null,
					"anesthesiaStartTime": null,
					"ndc": null,
					"referenceProcedureCode": "S9110",
					"isOrphan": null,
					"createdTimeStamp": "20231212150623",
					"printProcedureCode": "S9110",
					"formatAnesthesiaUnitsYN": null,
					"visit": {
						"levelOfCare": {
							"id": 5
						}
					},
					"submissionOverrides": [
						{
							"formAttributes": [],
							"formName": "cms1500"
						},
						{
							"formAttributes": [],
							"formName": "ansi_837i"
						},
						{
							"formAttributes": [],
							"formName": "ansi_837"
						}
					],
					"allowable": {
						"amount": null
					},
					"pxFeeAffectingMods": "S9110,05",
					"reasonCode": null,
					"primaryAdjudicationDate": null,
					"claimId": "30887",
					"newPage": null,
					"outsideFacilityCliaNumberRequiredYN": "N",
					"cliaYN": "N",
					"specialtyFieldGroup": {
						"diagnosticServices": {
							"purchasedServicesAmount": null,
							"hasPurchasedServices": null
						},
						"dme": {
							"feeScheduleCategoryCode": null
						}
					},
					"requireNocCodeDescriptionFlag": null,
					"transactions": [
						{
							"postingFlag": null,
							"patientInsuranceId": "8765",
							"createdBy": "INTF-114996",
							"imageFilePageNumber": null,
							"parentChargeId": "65358",
							"postDate": "12/12/2023",
							"voided": null,
							"id": 65358,
							"unitAmount": "60",
							"customTransactionCode": null,
							"procedureCode": "S9110,05",
							"transactionReasonId": null,
							"paymentBatchRouteClaimActionId": null,
							"transferType": "1",
							"days": "1",
							"created": "12/12/2023",
							"voidedby": null,
							"amount": "60",
							"postedBy": "INTF-114996",
							"chargeId": "65358",
							"type": "CHARGE"
						}
					],
					"transfers": "0",
					"transactionIds": [],
					"unitAmount": "60",
					"additionalAnesthesiaUnits": null,
					"procedureCode": "S9110",
					"originalBaseUnits": null,
					"printable": "Y",
					"anesthesiaYN": "N",
					"days": "1",
					"ruleFlags": {
						"gr12864SkipCharge": null
					},
					"mustShowPayorProcedureCodeYN": null,
					"amount": "60",
					"corporateBillingDestinationAddressFields": null,
					"originalAmount": "60",
					"overrideLegacyRuleIds": [],
					"auditInfo": [],
					"serviceDays": 1,
					"units": "1",
					"otherScrubSettings": [],
					"departmentId": "1",
					"overrideBizReqIds": [],
					"athenaCodeSourceAssistantSurgeonCode": "9",
					"createdBy": "INTF-114996",
					"anesthesiaTimeSheetData": {
						"anesthesiaTypeId": null,
						"procedureCode": null
					},
					"relativeValueUnit": "0",
					"procedureCodeGroup": {
						"name": null,
						"id": null
					},
					"primaryDenialEraKickCode": null,
					"id": "65358",
					"modifiers": [
						{
							"chargeable": "Y",
							"printable": "N",
							"id": "05"
						}
					],
					"drug": {
						"dosage": null,
						"name": null,
						"unitQualifier": null
					},
					"placeOfService": {
						"id": null
					},
					"toDate": "11/01/2023",
					"fromDate": "11/01/2023",
					"printZeroDollarCharge": null,
					"pqriReportingChargeType": null,
					"printableSequence": 1,
					"ambulanceTrip": {
						"referenceNumber": null
					},
					"clia": {
						"levelForRegistration": null,
						"levelForWaiver": null,
						"requiredYN": null,
						"validPxClia": "N",
						"levelForPPMP": null,
						"qwModifierAllowedYN": null
					},
					"createdDate": "12/12/2023",
					"percentOfOriginalChargeRoundUpYN": null,
					"anesthesiaEndTime": null,
					"sequenceNumber": 1,
					"revenueCode": null,
					"unlistedPxException": null,
					"status": {
						"primaryDenied": "N",
						"isFamilyPlan": null
					},
					"professionalTechnicalFlag": "9",
					"ncdDiagnosisCodeRanges": 0,
					"drugUnitPrice": null,
					"anesthesiaMinutes": null,
					"reference": {
						"procedureCode": "S9110",
						"subCategory": null,
						"physicianSupervisingFlag": null,
						"mfpIndicator": "0",
						"multipleprocedureflag": "9",
						"pctcIndicator": "9"
					},
					"mapNocCodeDescriptionFlag": null,
					"donotMapNote": "N",
					"baseUnits": null,
					"bilateralSurgeryFlag": "9",
					"epsdt": null,
					"purchasedServices": {
						"provider": {
							"firstName": null,
							"nameSuffix": null,
							"middleInitial": null,
							"address": {
								"zip": null,
								"city": null,
								"street1": null,
								"state": null
							},
							"lastName": null,
							"id": null
						},
						"providerNumber": {
							"npiReferringProviderNumber": null
						}
					},
					"adjustments": "0",
					"rolledUpCharges": [
						{
							"amount": null,
							"procedureCode": "S9110",
							"quantity": "1",
							"modifiers": [
								{
									"id": "05"
								}
							],
							"description": "PRE-DIABETES: MEMBERS ENGAGEMENT MONTHLY PPPM FEE (INCL DEVICES)",
							"toDate": "11/01/2023",
							"visitChargeid": "46428",
							"fromDate": "11/01/2023"
						}
					],
					"eraKick": [],
					"nonCoveredPxYN": null,
					"diagnosis": {
						"info": [
							{
								"claimRefNum": 1,
								"diagnosisCodeSetId": "21",
								"diagnosisCode": "Z719",
								"description": "Counseling, unspecified"
							}
						],
						"references": {
							"code3": "",
							"code2": "",
							"code4": "",
							"code1": 1
						}
					},
					"transferType": "1",
					"dmeYN": "N",
					"settings": {
						"taxAutomationYN": "N",
						"ambulanceVehicleType": [],
						"therapy": [],
						"telehealth": [],
						"ambulanceEmergency": [],
						"mentalHealth": [],
						"covid19VaccineChargeType": [],
						"familyPlanning": null,
						"formatting": {
							"xhc": [],
							"pbc": [],
							"rhc": [
								null
							],
							"fqhc": [
								null
							]
						},
						"pm160AssessmentCharge": [],
						"epsdt": null,
						"immunization": [],
						"encounterCode": {
							"xhc": [],
							"pbc": [],
							"uc": [],
							"rhc": [],
							"fqhc": []
						},
						"preventive": "",
						"profTech": null,
						"facilityType": {
							"asc": null
						},
						"covid19": [],
						"rhc": [],
						"emCharge": [],
						"dmeYN": "N",
						"ambulanceServiceType": [],
						"serviceType": {
							"xhc": [],
							"asc": [],
							"pbc": [],
							"uc": [],
							"rhc": [],
							"fqhc": []
						},
						"teleHealth": []
					},
					"note": null,
					"diagnosisCodes": [
						"Z719"
					],
					"anesthesiaProviders": [],
					"claimFormats": {
						"paMedicaid": {
							"paMedicaid538": {
								"reasonCode": null
							},
							"paMedicaid539": {
								"reasonCode": null
							}
						}
					},
					"originalAsACode": null,
					"cosurgeryFlag": "9",
					"parentId": "65358",
					"percentOfOriginalCharge": null,
					"corporateBillingPickUpAddressFields": null,
					"familyPlan": null
				}
			],
			"remittance": {
				"primaryDenied": ""
			},
			"providerNumbers": [],
			"physicianSignatureDate": "12/22/2023",
			"lastSeenDate": null,
			"visitBillId": "23469",
			"referenceLab": {
				"firstName": null,
				"npiReferringProviderNumber": null,
				"entityTypeId": null,
				"referringProviderNumber": null,
				"nameSuffix": null,
				"middleInitial": null,
				"id": null,
				"lastName": null,
				"address": {
					"zip": null,
					"city": null,
					"street2": null,
					"street1": null,
					"state": null
				}
			},
			"ruleFlags": {
				"localRule4": null,
				"ruleConfigurations": {
					"rfp": {
						"details": {
							"pbcFacadj": null,
							"formatS9088YN": null,
							"formatChargesEncounter": null,
							"formatCharges": null,
							"s9088SuppressPx": null,
							"nonZeroDollarPx": null,
							"eveningHours": null,
							"rule24HourYN": null,
							"s9088ZeroDollarPx": null,
							"hoursofOperation": null
						}
					}
				},
				"disintermediationYN": null,
				"initialSubmissionYN2": null,
				"initialSubmissionYNP": null,
				"wrapedaroundClaimsplit": null,
				"holdForNotDayOffYN": null,
				"localRule9": null,
				"initialSubmissionYN1": null,
				"localRule11": null,
				"cboSplitsSecondaries": [],
				"otherSourceIndicator": null,
				"overrideEnrollmentCategoryID": null
			},
			"epsdtReferral": {
				"given": null
			},
			"activeClaimStatus": "HOLD",
			"rtaEligibleYN1": null,
			"thirdPartyInsDetectionYN": "",
			"visitBillDiagnosis": [
				{
					"icdCodeAllId": 326779,
					"diagnosisTypeId": 2
				}
			],
			"fqhcCostReportingYN": "Y",
			"clinicalProviders": [
				"11289399",
				"11309144",
				"11309146"
			],
			"claimFormat": "ANSI837",
			"otherScrubSettings": [],
			"sterilization": null,
			"checkAcrossSpecialtiesYN": null,
			"reserved10D": "",
			"externalDropApprovalFlag1": null,
			"pecosDiff": {
				"link": null,
				"html": null,
				"pecosMismatch": "N"
			},
			"patientReasonForVisitC": null,
			"allowedCharactersClass": {
				"nameOnly": "",
				"nte": "",
				"name": null
			},
			"id": "30887",
			"principalProcedureDate": "",
			"feeSchedules": [
				{
					"name": "2021 FEE SCHEDULE",
					"type": "FEE",
					"id": "1"
				}
			],
			"patientReasonForVisitB": null,
			"serviceDate": "11/01/2023",
			"admittingDiagnosisCode": null,
			"isAuxiliaryBatch": null,
			"certificationRevisionDate": "",
			"status": {
				"previouslyBilled": "Y",
				"droppedToPaper": "N",
				"status2ClaimNoteID": "",
				"primaryDenied": null,
				"status1ClaimNoteID": "264766",
				"statuspClaimNoteID": ""
			},
			"primaryPreviouslyBilledFormat": "ANSI837",
			"claimFrequency": null,
			"hctHgbDate": "",
			"secondaryOutstandingAmount": "0",
			"denialClaimNote": {
				"createdDate": []
			},
			"context": {
				"contractTypeId": "COLLECTOR"
			},
			"mammoGraphyCertificationNumberFlag": null,
			"allSiblingClaimsHistoricalNotes": [],
			"attachments": [],
			"emergencyServicesDefinerCode": null,
			"anesthesiaSettings": {
				"primarySettings": {
					"claimType": null
				}
			},
			"medicalGroup": {
				"correspondenceName": "VIDA HEALTH",
				"defaultAddress": {
					"zip": "94104-4302",
					"city": "SAN FRANCISCO",
					"street1": "100 MONTGOMERY ST",
					"state": "CA"
				},
				"statementReturnInfo": {
					"name": "VIDA HEALTH",
					"address": {
						"city": null,
						"zip": null,
						"street2": null,
						"street1": null,
						"state": null
					}
				},
				"billingName": "VIDA MEDICAL, PC",
				"ansiSpecialtyAnsiCode": null,
				"correspondanceZip": "941044302",
				"defaultPhysicalAddressId": "1",
				"payToAddressId": "1",
				"ansiSpecialtyId": "",
				"fax": "(833) 9133224",
				"ansiSpecialtyDeletedDate": "",
				"address": {
					"zip": "049152054",
					"city": "BELFAST",
					"fax": "(833) 9133224",
					"street2": "",
					"street1": "PO BOX 30278",
					"phone": "(855) 5501288",
					"state": "ME"
				},
				"ownedByHospitalYN": "N",
				"id": "1",
				"billableOverride": null,
				"entityType": "2",
				"name": "VIDA MEDICAL P.C.",
				"physicalAddress": {
					"zip": "941044302",
					"city": "SAN FRANCISCO",
					"name": "VIDA MEDICAL P.C.",
					"street2": "STE 750",
					"id": "1",
					"street1": "100 MONTGOMERY ST",
					"state": "CA"
				},
				"individualBilling": null,
				"providerGroup": {
					"department": {
						"revisedId": "1",
						"billingName": "VIDA MEDICAL P.C.",
						"serviceDepartmentYN": "",
						"routingEntityId": null,
						"chartSharingGroupId": "1",
						"state": "CA",
						"departmentNumbers": [],
						"originalId": null,
						"fax": "(833) 9133224",
						"address": {
							"zip": "941044302",
							"city": "SAN FRANCISCO",
							"street2": "",
							"county": "SAN FRANCISCO",
							"street1": "100 MONTGOMERY ST STE 750",
							"state": "CA"
						},
						"id": "1",
						"entityIdentifier": "77",
						"placeOfService": {
							"name": "TELEHEALTH - OTHER",
							"id": "02"
						},
						"typeOfBill": {
							"id": "",
							"code": ""
						},
						"name": "GENERAL MOTORS",
						"departmentGroupId": "",
						"governmentDesignation": {
							"xhc": {
								"text": null
							},
							"claimType": ""
						},
						"specialtyId": "",
						"phone": "(855) 5501288",
						"recurringYN": "",
						"type": {
							"pbc": "N",
							"rhc": "N",
							"fqhc": "N"
						},
						"clia": {
							"number": "",
							"category": null
						},
						"deletedDate": null,
						"facilityId": ""
					},
					"providers": {
						"operatingProvider": {
							"signatureOnFileFlag": null,
							"billedName": null,
							"ansiSpecialtyAnsiCode": null,
							"providerGroupId": null,
							"ansiSpecialtyName": null,
							"upin": null,
							"ndctatNumber": null,
							"ansiSpecialtyId": null,
							"ssn": null,
							"lastNameUnstripped": null,
							"nameSuffix": null,
							"address": {
								"zip": null,
								"city": null,
								"street2": null,
								"phone": null,
								"street1": null,
								"state": null
							},
							"id": null,
							"lastName": null,
							"specialtyEnvoyCode": null,
							"firstName": null,
							"licenseNumber": null,
							"entityType": {
								"id": null
							},
							"name": null,
							"specialtyId": null,
							"billable": null,
							"middleInitial": null,
							"providerType": null,
							"type": {
								"id": null
							},
							"deletedDate": ""
						},
						"supervisingProvider": {
							"signatureOnFileFlag": "Y",
							"billedName": "VIDA HEALTH, HC",
							"ansiSpecialtyAnsiCode": "171400000X",
							"providerGroupId": "1",
							"ansiSpecialtyName": "OTHER SERVICE PROVIDERS: HEALTH & WELLNESS COACH",
							"upin": null,
							"originalId": "13",
							"ndctatNumber": "",
							"ansiSpecialtyId": "1071",
							"ssn": "",
							"nameSuffix": "",
							"lastNameUnstripped": "HEALTH",
							"ansiSpecialtyDeletedDate": "",
							"departmentids": [],
							"address": {
								"state": ""
							},
							"lastName": "HEALTH",
							"id": "13",
							"specialtyEnvoyCode": "",
							"licenseNumber": null,
							"firstName": "VIDA",
							"entityType": {
								"id": "1"
							},
							"name": "VIDAMEDICALPC",
							"specialtyId": "714",
							"entityTypeId": "1",
							"billable": "Y",
							"middleInitial": "",
							"type": {
								"id": "HC"
							},
							"deletedDate": null
						},
						"admittingProvider": {
							"ansiSpecialtyAnsiCode": null,
							"ansiSpecialtyName": null,
							"pecosMatchYN": null,
							"ansiSpecialtyId": null,
							"fax": null,
							"nameSuffix": null,
							"lastNameUnstripped": null,
							"address": {
								"zip": null,
								"city": null,
								"street2": null,
								"phone": null,
								"street1": null,
								"state": null
							},
							"id": null,
							"lastName": null,
							"firstName": null,
							"entityType": {
								"id": null
							},
							"name": null,
							"pecosEnrollmentYN": null,
							"middleInitial": null,
							"type": {
								"id": null
							},
							"SpecialtyId": null
						},
						"referringProvider": {
							"revisedId": null,
							"ansiSpecialtyAnsiCode": "",
							"ansiSpecialtyName": "",
							"state": "",
							"pecosMatchYN": "",
							"ansiSpecialtyId": "",
							"fax": "",
							"nameSuffix": "",
							"lastNameUnstripped": null,
							"ansiSpecialtyDeletedDate": "",
							"address": {
								"zip": "",
								"city": "",
								"validZipCodeYN": "N",
								"street2": "",
								"phone": "",
								"street1": "",
								"state": ""
							},
							"id": null,
							"lastName": "",
							"firstName": "",
							"entityType": {
								"id": ""
							},
							"name": "",
							"pecosEnrollmentYN": "",
							"specialtyId": "",
							"entityTypeId": "",
							"billable": null,
							"notes": null,
							"middleInitial": "",
							"type": {
								"id": null
							}
						},
						"orderingProvider": {
							"firstName": null,
							"entityType": {
								"id": null
							},
							"ansiSpecialtyAnsiCode": null,
							"name": null,
							"specialtyId": null,
							"ansiSpecialtyId": null,
							"nameSuffix": null,
							"middleInitial": null,
							"address": {
								"zip": null,
								"city": null,
								"street2": null,
								"phone": null,
								"street1": null,
								"state": null
							},
							"type": {
								"id": null
							},
							"id": null,
							"lastName": null
						},
						"purchasedServicesProvider": {
							"id": null
						},
						"attendingProvider": {
							"firstName": null,
							"entityType": {
								"id": null
							},
							"billedName": null,
							"ansiSpecialtyAnsiCode": null,
							"specialtyId": null,
							"billable": null,
							"ssn": null,
							"nameSuffix": null,
							"middleInitial": null,
							"address": {
								"zip": null,
								"city": null,
								"street1": null,
								"state": null
							},
							"lastName": null,
							"id": null
						},
						"billableOverride": null,
						"renderingProvider": {
							"signatureOnFileFlag": "Y",
							"billedName": "VIDA HEALTH, HC",
							"ansiSpecialtyAnsiCode": "171400000X",
							"providerGroupId": "1",
							"ansiSpecialtyName": "OTHER SERVICE PROVIDERS: HEALTH & WELLNESS COACH",
							"upin": "",
							"ndctatNumber": "",
							"ansiSpecialtyId": "1071",
							"ssn": "",
							"nameSuffix": "",
							"lastNameUnstripped": "HEALTH",
							"ansiSpecialtyDeletedDate": "",
							"address": {
								"state": null
							},
							"lastName": "HEALTH",
							"id": "13",
							"specialtyEnvoyCode": null,
							"licenseNumber": "",
							"firstName": "VIDA",
							"entityType": {
								"name": "Person",
								"id": "1"
							},
							"name": "VIDAMEDICALPC",
							"specialtyId": "714",
							"entityTypeId": "1",
							"billable": "Y",
							"middleInitial": "",
							"type": {
								"name": "HEALTH COACH (HC)",
								"id": "HC",
								"displayName": "Health Coach (HC)"
							},
							"deletedDate": null
						}
					}
				},
				"defaultPayToAddressId": "1",
				"taxId": "843894656"
			},
			"diagnosis": {
				"diagnosisCodeInfo": [
					{
						"diagnosisCode": "Z719",
						"description": "Counseling, unspecified"
					}
				],
				"icdCodeAll": [],
				"codeSetId": "21",
				"codes": [
					"Z719"
				],
				"details": [
					{
						"codeSetId": "21",
						"mappedClaimDiagnosisId": null,
						"diagnosisCode": "Z719",
						"manualMapYN": null,
						"description": "Counseling, unspecified",
						"presentOnAdmissionIndicator": null
					}
				],
				"requiredCodes": null
			},
			"dmeProcedureCodeReferences": [],
			"manualDropYN2": "",
			"status2": "CLOSED",
			"initialElectronicSubmission": null,
			"similarIllnessDate": "",
			"corporateBillingToLabel": null,
			"principalProcedureCode": null,
			"auxiliaryFormatId": "95",
			"facilityClaimCodes": {
				"orderedValueCodeKeys": null,
				"occurrenceSpanCodes": [],
				"claimOccurrenceCodes": []
			},
			"claimRecordNumbers": [],
			"wrappedYN": "N",
			"patientStatusCode": "",
			"patient": {
				"nameSuffixUnstripped": null,
				"department": {
					"departmentDesignation": {},
					"name": "General Motors",
					"id": "1"
				},
				"firstNameUnstripped": "QUOC",
				"realSecondaryInsuranceId": null,
				"guarantor": {
					"firstName": "QUOC",
					"nameSuffixUnstripped": null,
					"firstNameUnstripped": "QUOC",
					"birthDate": "02/10/1998",
					"middleInitialUnstripped": null,
					"lastNameUnstripped": "LE",
					"nameSuffix": "",
					"middleInitial": "",
					"address": {
						"country": "USA",
						"zip": "",
						"city": "",
						"street2": "",
						"street1": "",
						"countryId": "",
						"state": ""
					},
					"lastName": "LE"
				},
				"nameSuffix": "",
				"address": {
					"country": "USA",
					"street1": "3210 N 126TH DRIVE",
					"countryCode": "USA",
					"state": "AZ",
					"countryId": "1",
					"city": "AVONDALE",
					"zip": "85392",
					"countryCode2": "US",
					"street2": "",
					"county": "MARICOPA"
				},
				"id": "6687",
				"raceInfo": {
					"hierarchicalCode": null,
					"name": null,
					"deleted": null,
					"id": null
				},
				"recordNumbers": [
					{
						"clientRecordNumber": "55409f39-5f75-4f5b-9d39-2cfa3c9f1c66",
						"categoryId": "42",
						"categoryName": "VIDA_ELIGIBILITY_UUID",
						"clientRecordDate": null,
						"selectName": null,
						"selectId": null,
						"referringProviderGroupId": null
					},
					{
						"clientRecordNumber": "0F25CC3F-3BB3-4176-B897-92AAFFD22BEF",
						"categoryId": "1",
						"categoryName": "Vida ID",
						"clientRecordDate": null,
						"selectName": null,
						"selectId": null,
						"referringProviderGroupId": null
					},
					{
						"clientRecordNumber": "0f25cc3f-3bb3-4176-b897-92aaffd22bef",
						"categoryId": "61",
						"categoryName": "VIDA_MEMBER_UUID",
						"clientRecordDate": null,
						"selectName": null,
						"selectId": null,
						"referringProviderGroupId": null
					},
					{
						"clientRecordNumber": "518800",
						"categoryId": "41",
						"categoryName": "VIDA_MEMBER_ID",
						"clientRecordDate": null,
						"selectName": null,
						"selectId": null,
						"referringProviderGroupId": null
					}
				],
				"pcsRecordNumber": null,
				"firstName": "QUOC",
				"signatureSourceCode": "B",
				"prepayment": null,
				"primaryProviderId": null,
				"workPhone": null,
				"mobilePhone": null,
				"employer": {
					"name": "",
					"address": {
						"zip": ""
					}
				},
				"homeless": null,
				"middleInitialUnstripped": null,
				"insurances": [
					{
						"subscriber": {
							"nameSuffixUnstripped": null,
							"firstName": "QUOC",
							"entityType": {
								"id": "1",
								"displayName": "Person"
							},
							"firstNameUnstripped": "QUOC",
							"sex": "M",
							"employer": {
								"name": "",
								"address": {
									"zip": "",
									"city": "",
									"phone": "",
									"street1": "",
									"state": ""
								}
							},
							"middleInitialUnstripped": null,
							"birthDate": "02/10/1998",
							"lastNameUnstripped": "LE",
							"ssn": "",
							"nameSuffix": "",
							"middleInitial": "",
							"address": {
								"zip": "85392",
								"city": "AVONDALE",
								"street2": "",
								"county": "MARICOPA",
								"street1": "3210 N 126TH DRIVE",
								"countryId": "1",
								"state": "AZ"
							},
							"lastName": "LE",
							"homePhone": ""
						},
						"printZeroDollarCharges": "N",
						"injuryDate": "",
						"patientInsuranceAudr": [],
						"primaryCareProviderId": "",
						"id": "8765",
						"issueDate": "10/12/2020",
						"policyNoteUnstripped": null,
						"expirationDateLastUpdatedBy": null,
						"memberIdValidationResult": "N",
						"groupId": "086858001200001",
						"insurancePackage": {
							"surgeonNumber": {
								"id": null,
								"referringProviderNumber": null
							},
							"mspInsuranceTypeCode": null,
							"enrollmentPeriods": [],
							"contactPhone": null,
							"memberIdFormatExample": null,
							"invalidMemberIdFormat": null,
							"payerAddress": {
								"zip": "799981106",
								"city": "EL PASO",
								"street2": "",
								"countryCode2": "US",
								"street1": "PO BOX 981106",
								"phone": "(888) 6323862",
								"state": "TX"
							},
							"providerNonParYN": null,
							"fullName": "Aetna [1352]",
							"claimFilingIndicator": {
								"ansiCode": "CI",
								"id": "13"
							},
							"name": "AETNA",
							"pending": "",
							"adjudicationProgramId": "F",
							"emcCode": "60054",
							"referringProviderNumber": {
								"genericNpi": null,
								"providerNumber": "",
								"npiId": null,
								"npi": "",
								"providerNumberCategory": {
									"id": null
								},
								"npiGoVerifiedStatusId": null,
								"npiProviderNumber": null,
								"ansiSpecialtyId": null,
								"id": "",
								"npiVerifiedStatusId": null
							},
							"claimSubmissionCategory": {
								"usePatientAsSubscriber": null,
								"npiStatusId": "4",
								"name": "AETNA",
								"overrideId": "",
								"id": "8335",
								"billingTypeId": "1"
							},
							"operatingProviderNumber": {
								"npi": null,
								"providerNumber": null
							},
							"productTypeId": "5",
							"enrollmentCategory": {
								"name": "Aetna / US Healthcare - non HMO",
								"id": "7"
							},
							"eligibilityClass": "AETNA",
							"providerNumberCategoryName": "Aetna / US Healthcare",
							"attendingProviderNumber": {
								"npi": null,
								"providerNumber": null
							},
							"insuranceReportingCategory": {
								"groupId": 4,
								"name": "Aetna & Aetna/US Healthcare",
								"id": "121"
							},
							"standAloneCoordinatorYN": null,
							"invalidMemberIdFormatExample": null,
							"crossoverCode": {
								"payerCode": null,
								"id": null
							},
							"memberIdFormat": "[A-Z0-9]{1,20}",
							"cobaCode": null,
							"purchasedServicesProviderNumber": {
								"id": null,
								"referringProviderNumber": null
							},
							"renderingProviderNumber": {
								"legacyNumber": null,
								"providerNumber": "1265050595",
								"status": null,
								"verifiedStatusId": null,
								"createdBy": null,
								"ansiSpecialtyAnsiCode": null,
								"providerEnrollmentStatusId": null,
								"providerNumberCategoryId": null,
								"payerNpiVerified": null,
								"ansiSpecialtyId": null,
								"departmentIds": null,
								"overrides": {
									"genericNpi": null,
									"payerSpecificNpi": null
								},
								"ansiSpecialtyDeletedDate": "",
								"id": null,
								"insurancePackageId": null,
								"npiVerifiedStatusId": "COMPLETE",
								"npiId": "161",
								"expirationDate": null,
								"effectiveDate": null,
								"providerNumberCategory": {
									"id": null
								},
								"npi": "1265050595",
								"npiGoVerifiedStatusId": null,
								"notes": null,
								"providerId": null,
								"createdDate": null,
								"gNpiVerified": null
							},
							"casePolicyId": "",
							"packagePrograms": [
								{
									"entityRelationShipId": null,
									"programId": "3158",
									"id": "12710"
								},
								{
									"entityRelationShipId": null,
									"programId": "1297",
									"id": "14694"
								},
								{
									"entityRelationShipId": null,
									"programId": "974",
									"id": "5118"
								},
								{
									"entityRelationShipId": null,
									"programId": "676",
									"id": "7293"
								},
								{
									"entityRelationShipId": null,
									"programId": "600",
									"id": "7294"
								},
								{
									"entityRelationShipId": null,
									"programId": "1071",
									"id": "7810"
								},
								{
									"entityRelationShipId": null,
									"programId": "2177",
									"id": "8473"
								},
								{
									"entityRelationShipId": null,
									"programId": "2068",
									"id": "9101"
								},
								{
									"entityRelationShipId": null,
									"programId": "509",
									"id": "14452"
								},
								{
									"entityRelationShipId": null,
									"programId": "2176",
									"id": "19866"
								},
								{
									"entityRelationShipId": null,
									"programId": "2070",
									"id": "25666"
								},
								{
									"entityRelationShipId": null,
									"programId": "2849",
									"id": "26429"
								},
								{
									"entityRelationShipId": null,
									"programId": "736",
									"id": "26499"
								},
								{
									"entityRelationShipId": null,
									"programId": "3346",
									"id": "27423"
								},
								{
									"entityRelationShipId": null,
									"programId": "3171",
									"id": "27608"
								},
								{
									"entityRelationShipId": null,
									"programId": "6224",
									"id": "29745"
								},
								{
									"entityRelationShipId": null,
									"programId": "3752",
									"id": "42318"
								}
							],
							"invoiceNoteYN": "N",
							"expirationDate": "",
							"mspInsuranceTypeId": null,
							"allowableCategoryId": "2",
							"claimFormat": "ANSI837",
							"claimRuleCategory": {
								"name": "Aetna Non-HMO",
								"id": [
									"27",
									"1",
									"21",
									"0",
									"89"
								]
							},
							"admittingProviderNumber": {
								"providerNumber": null,
								"npi": null
							},
							"invoiceNoteDeliveryMethod": "",
							"id": "1352",
							"payToTaxId1": "843894656",
							"insuranceTypeId": "C1",
							"insPackageEntity": [
								{
									"entityRelationShipId": null,
									"entityId": "3143",
									"id": "260417"
								},
								{
									"entityRelationShipId": null,
									"entityId": "3459",
									"id": "262174"
								},
								{
									"entityRelationShipId": null,
									"entityId": "803",
									"id": "242762"
								},
								{
									"entityRelationShipId": "1",
									"entityId": "17",
									"id": "125478"
								},
								{
									"entityRelationShipId": "41",
									"entityId": "17",
									"id": "125479"
								},
								{
									"entityRelationShipId": "2",
									"entityId": "17",
									"id": "125477"
								},
								{
									"entityRelationShipId": "21",
									"entityId": "17",
									"id": "125480"
								},
								{
									"entityRelationShipId": null,
									"entityId": "5350",
									"id": "188839"
								},
								{
									"entityRelationShipId": null,
									"entityId": "5810",
									"id": "283942"
								},
								{
									"entityRelationShipId": null,
									"entityId": "6680",
									"id": "287957"
								},
								{
									"entityRelationShipId": null,
									"entityId": "3792",
									"id": "294374"
								}
							],
							"effectiveDate": "",
							"destinationOverrides": {
								"claimSubmissionCategoryId": null,
								"name": null,
								"attachmentFax": null,
								"emcCode": null,
								"street1": null,
								"state": null,
								"providerNumberCategoryId": null,
								"city": null,
								"zip": null,
								"street2": null,
								"emcReceiverId": null,
								"enrollmentCategoryId": null,
								"id": null,
								"insuranceReportingCategoryId": null
							},
							"customInsuranceGroup": {
								"id": ""
							},
							"supervisingProviderNumber": {
								"legacyNumber": null,
								"providerNumber": "1265050595",
								"verifiedStatusId": null,
								"status": null,
								"createdBy": null,
								"ansiSpecialtyAnsiCode": null,
								"providerEnrollmentStatusId": null,
								"payerNpiVerified": null,
								"npiStatus": null,
								"ansiSpecialtyId": null,
								"departmentIds": null,
								"overrides": {
									"genericNpi": null,
									"medicalGroupNumber": null,
									"ansiSpecialtyId": null,
									"payerSpecificNpi": null
								},
								"ansiSpecialtyDeletedDate": "",
								"id": null,
								"insurancePackageId": null,
								"npiVerifiedStatusId": "COMPLETE",
								"goVerified": null,
								"npiId": "161",
								"expirationDate": null,
								"effectiveDate": null,
								"providerNumberCategory": {
									"id": null
								},
								"npiGoVerifiedStatusId": null,
								"npi": "1265050595",
								"notes": null,
								"providerId": null,
								"createdDate": null,
								"gNpiVerified": null
							},
							"providerNumberCategory": {
								"name": "Aetna / US Healthcare",
								"id": "43"
							},
							"departmentNumber": {
								"verifiedStatusId": null,
								"status": null,
								"npiId": null,
								"legacyDepartmentNumber": null,
								"providerNumberCategoryId": null,
								"npi": null,
								"departmentNumber": null,
								"id": null,
								"npiVerifiedStatusId": null
							},
							"invoiceSendViaEmailYN": "",
							"supervisingProviderEnrollmentStatus": {
								"legacyNumber": null,
								"physAddressStatusId": "NOTREQUIRED",
								"verifiedStatusId": "NOTREQUIRED",
								"csiStatusId": "NOTREQUIRED",
								"medicalGroupId": null,
								"placeOfServiceId": null,
								"ordering": "1",
								"payToAddressId": null,
								"ansiSpecialtyId": null,
								"departmentIds": "",
								"enrollmentCategoryId": "7",
								"id": "161",
								"insurancePackageId": null,
								"typeOfBill": {
									"id": null,
									"code": null
								},
								"suppressEligibilityYN": null,
								"ediClearingHouseCategoryId": null,
								"ediStatusId": "NOTREQUIRED",
								"referenceName": null,
								"providerId": "13",
								"billingOkYN": "Y",
								"holdReason": null,
								"payerNpiNumber": null,
								"credentialingCompletionDate": "",
								"credentialingId": "501",
								"eftStatusId": "NOTREQUIRED",
								"payToStatusId": "NOTREQUIRED",
								"enrollmentInfoNotRequiredYN": null,
								"credentialingStatusId": "PAR",
								"locumYN": null,
								"npiOnFilesStatusId": "NOTREQUIRED",
								"federalIdNumber": null,
								"addressId": null,
								"individualBilling": null,
								"eraStatusId": "NOTREQUIRED",
								"notes": null,
								"individualBillingYN": null,
								"eligibilityStatusId": "NOTREQUIRED"
							},
							"governmentFundedTypeId": "",
							"countryId": "1",
							"standAloneClinicalsYN": null,
							"orderingProviderNumber": {
								"providerNumberCategory": {
									"id": null
								},
								"id": null,
								"referringProviderNumber": {
									"npi": null,
									"providerNumber": null
								}
							},
							"emcReceiverId": "82",
							"bcbsDestinations": [],
							"wrapToInsurancePackageId": null,
							"routingProgram": {
								"id": "41"
							},
							"medicalGroup": {
								"groupNumber": {
									"legacyNumber": "",
									"payerNpiNumber": "1265050595",
									"verifiedStatusId": "NOTREQUIRED",
									"status": "VERIFIED",
									"createdBy": "",
									"ansiSpecialtyAnsiCode": null,
									"medicalGroupId": "1",
									"providerNumberCategoryId": "43",
									"payerNpiVerified": "COMPLETE",
									"preOverrides": {
										"npi": "1265050595",
										"medicalGroupNumber": "",
										"verifiedStatusId": "NOTREQUIRED",
										"npiVerifiedStatusId": "COMPLETE"
									},
									"ansiSpecialtyId": "",
									"departmentIds": "",
									"ansiSpecialtyDeletedDate": "",
									"id": null,
									"federalIdNumber": null,
									"insurancePackageId": "1352",
									"npiVerifiedStatusId": "COMPLETE",
									"medicalGroupEnrollmentStatusId": "143",
									"npiId": "1",
									"expirationDate": null,
									"effectiveDate": null,
									"npi": "1265050595",
									"groupNumber": "1265050595",
									"notes": "",
									"providerId": null,
									"createdDate": null
								},
								"enrollmentStatus": {
									"legacyNumber": "",
									"physAddressStatusId": "COMPLETE",
									"verifiedStatusId": "NOTREQUIRED",
									"csiStatusId": "NOTREQUIRED",
									"medicalGroupId": "1",
									"placeOfServiceId": "",
									"ordering": "1",
									"payToAddressId": "",
									"ansiSpecialtyId": "",
									"departmentIds": "",
									"id": "143",
									"enrollmentCategoryId": "7",
									"insurancePackageId": "",
									"typeOfBill": {
										"id": "",
										"code": ""
									},
									"suppressEligibilityYN": "",
									"ediClearingHouseCategoryId": null,
									"ediStatusId": "NOTREQUIRED",
									"referenceName": "VIDA MEDICAL P.C.",
									"providerId": null,
									"billingOkYN": "Y",
									"holdReason": "",
									"payerNpiNumber": "1265050595",
									"credentialingCompletionDate": "",
									"credentialingId": "481",
									"eftStatusId": "COMPLETE",
									"enrollmentInfoNotRequiredYN": null,
									"payToStatusId": "COMPLETE",
									"credentialingStatusId": "PAR",
									"locumYN": null,
									"federalIdNumber": "",
									"npiOnFilesStatusId": "COMPLETE",
									"addressId": "",
									"eraStatusId": "CONFIRMED",
									"notes": "",
									"individualBillingYN": "N",
									"eligibilityStatusId": "NOTREQUIRED"
								}
							},
							"attachmentFax": "(860) 7541590",
							"settings": {
								"medicareReplacement": "N",
								"anesthesia": {
									"directionModifierYN": null,
									"claimType": null
								},
								"ansiVersionId": "3",
								"wrapBillingMCOYN": "N",
								"insuranceGroups": {
									"parent": null,
									"practice": null,
									"pbc": null,
									"rhc": null,
									"fqhc": null
								}
							},
							"renderingProviderEnrollmentStatus": {
								"legacyNumber": "",
								"physAddressStatusId": "NOTREQUIRED",
								"verifiedStatusId": "NOTREQUIRED",
								"csiStatusId": "NOTREQUIRED",
								"medicalGroupId": null,
								"placeOfServiceId": null,
								"ordering": "1",
								"payToAddressId": null,
								"ansiSpecialtyId": "",
								"departmentIds": "",
								"id": "161",
								"enrollmentCategoryId": "7",
								"insurancePackageId": "",
								"typeOfBill": {
									"id": null,
									"code": null
								},
								"suppressEligibilityYN": "",
								"ediClearingHouseCategoryId": null,
								"ediStatusId": "NOTREQUIRED",
								"referenceName": null,
								"providerId": "13",
								"billingOkYN": "Y",
								"isBillingOkYNExists": "Y",
								"holdReason": "",
								"payerNpiNumber": null,
								"credentialingCompletionDate": "",
								"credentialingId": "501",
								"eftStatusId": "NOTREQUIRED",
								"enrollmentInfoNotRequiredYN": null,
								"payToStatusId": "NOTREQUIRED",
								"credentialingStatusId": "PAR",
								"locumYN": "",
								"federalIdNumber": null,
								"npiOnFilesStatusId": "NOTREQUIRED",
								"addressId": "",
								"eraStatusId": "NOTREQUIRED",
								"notes": "",
								"individualBillingYN": null,
								"eligibilityStatusId": "NOTREQUIRED"
							},
							"nameUnstripped": "AETNA",
							"crossOverCode": null,
							"suppressAddressYN": "N"
						},
						"relationShipToInsured": {
							"ansiCode": "18",
							"hcfaCode": "1",
							"id": "1"
						},
						"eraRecords": [
							{
								"created": "12/26/2023",
								"payorControlNumber": "E5TX8GGLR0000"
							}
						],
						"memberId": "W262245411",
						"policyNote": "",
						"slidingFee": {
							"programId": ""
						},
						"eligible": "Y",
						"fullyWorkedReasonID": "",
						"diagnosisCodesICD10": null,
						"eligibility": {
							"benefits": [
								{
									"coverageLevel": null,
									"benefitInfoCode": "W",
									"quantity": null,
									"relatedEntity": [
										{
											"firstName": null,
											"idType": null,
											"entityType": "2",
											"name": "Aetna",
											"street1": "PO Box 14079",
											"identifier": "PR",
											"relatedEntityContactInformation": [],
											"identificationNumber": null,
											"street2": null,
											"lastName": "Aetna",
											"type": "2"
										}
									],
									"serviceTypeCode": null,
									"serviceType": "W",
									"planCoverageDescription": null,
									"mSeg": {
										"messages": []
									},
									"quantityType": null,
									"id": "4302252",
									"benefitType": null,
									"insuranceType": null
								},
								{
									"coverageLevel": null,
									"benefitInfoCode": "6",
									"quantity": null,
									"relatedEntity": [],
									"serviceTypeCode": "30",
									"serviceType": "6",
									"planCoverageDescription": "Aetna Choice POS II",
									"mSeg": {
										"messages": []
									},
									"quantityType": null,
									"id": "4302253",
									"benefitType": "30",
									"insuranceType": null
								}
							],
							"parser": {
								"eligibility": {
									"covered": "N"
								}
							},
							"groupId": "086858001200001",
							"serviceDate": "11/01/2023",
							"demographicsDetails": null,
							"diffText": [
								null
							],
							"class": "AETNA",
							"id": "55321",
							"demographics": [],
							"insurancePackageId": "1352"
						},
						"allEraRecords": [
							{
								"created": "12/26/2023",
								"payorControlNumber": "E5TX8GGLR0000",
								"allowable": null,
								"applied": "12/26/2023",
								"id": "44814"
							}
						],
						"eraRecordSourceId": "",
						"acceptsAssignment": "Y",
						"caseNumber": "",
						"eligibilityLastChecked": "12/21/2023",
						"overrideAddress": {
							"zip": ""
						},
						"auxiliaryFormat": {
							"attachments": "Y",
							"faxPhoneNumber": "",
							"transferType": "",
							"parentFormatId": "ANSI837",
							"submissionMethod": "ELECTRONIC",
							"notes": "AUX FORMAT FOR JOPARI275",
							"claimFormatId": "ANSI275",
							"processingType": "",
							"emcReceiverId": "1256",
							"id": "95",
							"daysOffset": ""
						},
						"cancelledDate": "",
						"workersCompensation": {
							"claimNumber": "",
							"countryId": null,
							"state": ""
						},
						"transferType": "1",
						"expirationDate": "",
						"verificationNote": "<b><font color=red>Member is ineligible.</font></b> Patient found on payor's files, but not covered on date of inquiry.<br><br>The provided information is not a guarantee of coverage. Actual benefits are determined only when the claim is received.",
						"recentEligibility": {
							"reuseEligibility": "Y"
						},
						"middleInitial": null
					},
					{
						"subscriber": {
							"nameSuffixUnstripped": null,
							"firstName": "",
							"entityType": {
								"id": ""
							},
							"firstNameUnstripped": null,
							"sex": "U",
							"employer": {
								"name": "",
								"address": {
									"zip": "",
									"city": "",
									"phone": "",
									"street1": "",
									"state": ""
								}
							},
							"middleInitialUnstripped": null,
							"birthDate": "",
							"lastNameUnstripped": null,
							"ssn": "",
							"nameSuffix": "",
							"middleInitial": "",
							"address": {
								"zip": "",
								"city": "",
								"street2": "",
								"county": null,
								"street1": "",
								"countryId": "",
								"state": ""
							},
							"lastName": "",
							"homePhone": ""
						},
						"printZeroDollarCharges": "N",
						"memberId": "",
						"policyNote": "",
						"slidingFee": {
							"programId": ""
						},
						"eligible": "",
						"injuryDate": "",
						"fullyWorkedReasonID": "",
						"diagnosisCodesICD10": "",
						"patientInsuranceAudr": [],
						"caseNumber": "",
						"primaryCareProviderId": "",
						"acceptsAssignment": "Y",
						"id": "",
						"eraRecordSourceId": "",
						"issueDate": "",
						"overrideAddress": {
							"zip": ""
						},
						"auxiliaryFormat": {
							"attachments": null,
							"faxPhoneNumber": null,
							"transferType": null,
							"parentFormatId": null,
							"submissionMethod": null,
							"notes": null,
							"claimFormatId": null,
							"processingType": null,
							"emcReceiverId": null,
							"id": null,
							"daysOffset": null
						},
						"cancelledDate": "",
						"workersCompensation": {
							"claimNumber": "",
							"countryId": null,
							"state": ""
						},
						"expirationDateLastUpdatedBy": null,
						"memberIdValidationResult": null,
						"groupId": "",
						"transferType": "2",
						"expirationDate": "",
						"verificationNote": "<b><font color=red>Member is ineligible.</font></b> Patient found on payor's files, but not covered on date of inquiry.<br><br>The provided information is not a guarantee of coverage. Actual benefits are determined only when the claim is received.",
						"insurancePackage": {
							"surgeonNumber": {
								"id": null,
								"referringProviderNumber": null
							},
							"mspInsuranceTypeCode": "",
							"enrollmentPeriods": [],
							"contactPhone": null,
							"memberIdFormatExample": null,
							"invalidMemberIdFormat": null,
							"payerAddress": {
								"zip": "",
								"city": "",
								"street2": "",
								"countryCode2": "",
								"street1": "",
								"phone": "",
								"state": ""
							},
							"providerNonParYN": null,
							"fullName": "Aetna [1352]",
							"claimFilingIndicator": {
								"ansiCode": "",
								"id": ""
							},
							"name": "",
							"pending": "",
							"adjudicationProgramId": "",
							"emcCode": "",
							"referringProviderNumber": {
								"genericNpi": null,
								"providerNumber": "",
								"npiId": null,
								"npi": "",
								"providerNumberCategory": {
									"id": null
								},
								"npiGoVerifiedStatusId": null,
								"npiProviderNumber": null,
								"ansiSpecialtyId": null,
								"id": "",
								"npiVerifiedStatusId": null
							},
							"claimSubmissionCategory": {
								"usePatientAsSubscriber": null,
								"npiStatusId": "4",
								"overrideId": "",
								"id": "",
								"billingTypeId": null
							},
							"operatingProviderNumber": {
								"npi": null,
								"providerNumber": null
							},
							"productTypeId": "",
							"enrollmentCategory": {
								"id": ""
							},
							"eligibilityClass": null,
							"providerNumberCategoryName": null,
							"attendingProviderNumber": {
								"npi": null,
								"providerNumber": null
							},
							"insuranceReportingCategory": {
								"id": ""
							},
							"standAloneCoordinatorYN": null,
							"invalidMemberIdFormatExample": null,
							"crossoverCode": {
								"payerCode": "",
								"id": ""
							},
							"memberIdFormat": null,
							"cobaCode": null,
							"purchasedServicesProviderNumber": {
								"id": null,
								"referringProviderNumber": null
							},
							"renderingProviderNumber": {
								"legacyNumber": null,
								"providerNumber": "1265050595",
								"status": null,
								"verifiedStatusId": null,
								"createdBy": null,
								"ansiSpecialtyAnsiCode": null,
								"providerEnrollmentStatusId": null,
								"providerNumberCategoryId": null,
								"payerNpiVerified": null,
								"ansiSpecialtyId": null,
								"departmentIds": null,
								"overrides": {
									"genericNpi": null,
									"payerSpecificNpi": null
								},
								"ansiSpecialtyDeletedDate": "",
								"id": null,
								"insurancePackageId": null,
								"npiVerifiedStatusId": "COMPLETE",
								"npiId": "161",
								"expirationDate": null,
								"effectiveDate": null,
								"providerNumberCategory": {
									"id": null
								},
								"npi": "1265050595",
								"npiGoVerifiedStatusId": null,
								"notes": null,
								"providerId": null,
								"createdDate": null,
								"gNpiVerified": null
							},
							"casePolicyId": "",
							"packagePrograms": [],
							"invoiceNoteYN": "N",
							"expirationDate": "",
							"mspInsuranceTypeId": "",
							"allowableCategoryId": "",
							"claimFormat": null,
							"claimRuleCategory": {
								"id": [
									0
								]
							},
							"admittingProviderNumber": {
								"providerNumber": null,
								"npi": null
							},
							"invoiceNoteDeliveryMethod": "",
							"id": null,
							"payToTaxId1": "843894656",
							"insuranceTypeId": "",
							"insPackageEntity": [],
							"effectiveDate": "",
							"destinationOverrides": {
								"claimSubmissionCategoryId": null,
								"name": null,
								"attachmentFax": null,
								"emcCode": null,
								"street1": null,
								"state": null,
								"providerNumberCategoryId": null,
								"city": null,
								"zip": null,
								"street2": null,
								"emcReceiverId": null,
								"enrollmentCategoryId": null,
								"id": null,
								"insuranceReportingCategoryId": null
							},
							"customInsuranceGroup": {
								"id": ""
							},
							"supervisingProviderNumber": {
								"legacyNumber": null,
								"providerNumber": "1265050595",
								"verifiedStatusId": null,
								"status": null,
								"createdBy": null,
								"ansiSpecialtyAnsiCode": null,
								"providerEnrollmentStatusId": null,
								"payerNpiVerified": null,
								"npiStatus": null,
								"ansiSpecialtyId": null,
								"departmentIds": null,
								"overrides": {
									"genericNpi": null,
									"medicalGroupNumber": null,
									"ansiSpecialtyId": null,
									"payerSpecificNpi": null
								},
								"ansiSpecialtyDeletedDate": "",
								"id": null,
								"insurancePackageId": null,
								"npiVerifiedStatusId": "COMPLETE",
								"goVerified": null,
								"npiId": "161",
								"expirationDate": null,
								"effectiveDate": null,
								"providerNumberCategory": {
									"id": null
								},
								"npiGoVerifiedStatusId": null,
								"npi": "1265050595",
								"notes": null,
								"providerId": null,
								"createdDate": null,
								"gNpiVerified": null
							},
							"providerNumberCategory": {
								"id": ""
							},
							"departmentNumber": {
								"verifiedStatusId": null,
								"status": null,
								"npiId": null,
								"legacyDepartmentNumber": null,
								"providerNumberCategoryId": null,
								"npi": null,
								"departmentNumber": null,
								"id": null,
								"npiVerifiedStatusId": null
							},
							"invoiceSendViaEmailYN": "",
							"supervisingProviderEnrollmentStatus": {
								"legacyNumber": null,
								"physAddressStatusId": null,
								"verifiedStatusId": null,
								"csiStatusId": null,
								"medicalGroupId": null,
								"placeOfServiceId": null,
								"ordering": null,
								"payToAddressId": null,
								"ansiSpecialtyId": null,
								"departmentIds": null,
								"enrollmentCategoryId": null,
								"id": null,
								"insurancePackageId": null,
								"typeOfBill": {
									"id": null,
									"code": null
								},
								"suppressEligibilityYN": null,
								"ediClearingHouseCategoryId": null,
								"ediStatusId": null,
								"referenceName": null,
								"providerId": null,
								"billingOkYN": null,
								"holdReason": null,
								"payerNpiNumber": null,
								"credentialingCompletionDate": "",
								"credentialingId": null,
								"eftStatusId": null,
								"payToStatusId": null,
								"enrollmentInfoNotRequiredYN": null,
								"credentialingStatusId": null,
								"locumYN": null,
								"npiOnFilesStatusId": null,
								"federalIdNumber": null,
								"addressId": null,
								"individualBilling": null,
								"eraStatusId": null,
								"notes": null,
								"individualBillingYN": null,
								"eligibilityStatusId": null
							},
							"governmentFundedTypeId": "",
							"countryId": "",
							"standAloneClinicalsYN": null,
							"orderingProviderNumber": {
								"providerNumberCategory": {
									"id": null
								},
								"id": null,
								"referringProviderNumber": {
									"npi": null,
									"providerNumber": null
								}
							},
							"emcReceiverId": null,
							"bcbsDestinations": [],
							"wrapToInsurancePackageId": null,
							"routingProgram": {
								"id": ""
							},
							"medicalGroup": {
								"groupNumber": {
									"legacyNumber": null,
									"payerNpiNumber": null,
									"verifiedStatusId": null,
									"status": null,
									"createdBy": null,
									"ansiSpecialtyAnsiCode": null,
									"medicalGroupId": null,
									"providerNumberCategoryId": null,
									"payerNpiVerified": null,
									"preOverrides": {
										"npi": "1265050595",
										"medicalGroupNumber": "",
										"verifiedStatusId": "",
										"npiVerifiedStatusId": "COMPLETE"
									},
									"ansiSpecialtyId": null,
									"departmentIds": null,
									"ansiSpecialtyDeletedDate": "",
									"id": null,
									"federalIdNumber": null,
									"insurancePackageId": null,
									"npiVerifiedStatusId": "COMPLETE",
									"medicalGroupEnrollmentStatusId": null,
									"npiId": "1",
									"expirationDate": null,
									"effectiveDate": null,
									"npi": "1265050595",
									"groupNumber": "1265050595",
									"notes": null,
									"providerId": null,
									"createdDate": null
								},
								"enrollmentStatus": {
									"legacyNumber": null,
									"physAddressStatusId": null,
									"verifiedStatusId": null,
									"csiStatusId": null,
									"medicalGroupId": null,
									"placeOfServiceId": null,
									"ordering": null,
									"payToAddressId": null,
									"ansiSpecialtyId": null,
									"departmentIds": null,
									"id": null,
									"enrollmentCategoryId": null,
									"insurancePackageId": null,
									"typeOfBill": {
										"id": null,
										"code": null
									},
									"suppressEligibilityYN": null,
									"ediClearingHouseCategoryId": null,
									"ediStatusId": null,
									"referenceName": null,
									"providerId": null,
									"billingOkYN": null,
									"holdReason": null,
									"payerNpiNumber": null,
									"credentialingCompletionDate": "",
									"credentialingId": null,
									"eftStatusId": null,
									"enrollmentInfoNotRequiredYN": null,
									"payToStatusId": null,
									"credentialingStatusId": null,
									"locumYN": null,
									"federalIdNumber": null,
									"npiOnFilesStatusId": null,
									"addressId": null,
									"eraStatusId": null,
									"notes": null,
									"individualBillingYN": null,
									"eligibilityStatusId": null
								}
							},
							"attachmentFax": "",
							"settings": {
								"medicareReplacement": "N",
								"anesthesia": {
									"directionModifierYN": null,
									"claimType": null
								},
								"ansiVersionId": null,
								"wrapBillingMCOYN": "N",
								"insuranceGroups": {
									"parent": null,
									"practice": null,
									"pbc": null,
									"rhc": null,
									"fqhc": null
								}
							},
							"renderingProviderEnrollmentStatus": {
								"legacyNumber": null,
								"physAddressStatusId": null,
								"verifiedStatusId": null,
								"csiStatusId": null,
								"medicalGroupId": null,
								"placeOfServiceId": null,
								"ordering": null,
								"payToAddressId": null,
								"ansiSpecialtyId": null,
								"departmentIds": null,
								"id": null,
								"enrollmentCategoryId": null,
								"insurancePackageId": null,
								"typeOfBill": {
									"id": null,
									"code": null
								},
								"suppressEligibilityYN": null,
								"ediClearingHouseCategoryId": null,
								"ediStatusId": null,
								"referenceName": null,
								"providerId": null,
								"billingOkYN": null,
								"isBillingOkYNExists": "N",
								"holdReason": null,
								"payerNpiNumber": null,
								"credentialingCompletionDate": "",
								"credentialingId": null,
								"eftStatusId": null,
								"enrollmentInfoNotRequiredYN": null,
								"payToStatusId": null,
								"credentialingStatusId": null,
								"locumYN": null,
								"federalIdNumber": null,
								"npiOnFilesStatusId": null,
								"addressId": null,
								"eraStatusId": null,
								"notes": null,
								"individualBillingYN": null,
								"eligibilityStatusId": null
							},
							"nameUnstripped": null,
							"crossOverCode": "",
							"suppressAddressYN": ""
						},
						"relationShipToInsured": {
							"ansiCode": "",
							"hcfaCode": "",
							"id": ""
						},
						"middleInitial": null
					},
					{
						"insurancePackage": {
							"cobaCode": null,
							"mspInsuranceTypeCode": null,
							"wrapToInsurancePackageId": null,
							"claimRuleCategory": {
								"id": [
									0
								]
							},
							"providerNumberCategoryName": null,
							"standAloneClinicalsYN": null,
							"contactPhone": null,
							"nameUnstripped": null,
							"standAloneCoordinatorYN": null,
							"crossoverCode": {
								"payerCode": null,
								"id": null
							},
							"suppressAddressYN": "",
							"payToTaxId1": "843894656"
						},
						"fullyWorkedReasonID": "",
						"diagnosisCodesICD10": "",
						"middleInitial": null,
						"patientInsuranceAudr": [],
						"transferType": "p",
						"verificationNote": "<b><font color=red>Member is ineligible.</font></b> Patient found on payor's files, but not covered on date of inquiry.<br><br>The provided information is not a guarantee of coverage. Actual benefits are determined only when the claim is received."
					}
				],
				"enrollmentCategory": [
					{
						"name": "Medicare A-AZ",
						"id": "7141"
					}
				],
				"relationshipToPatient": {
					"id": "1"
				},
				"maritalStatusId": "U",
				"lastNameUnstripped": "LE",
				"ssn": "",
				"lastName": "LE",
				"homePhone": "",
				"relationshipToInsured": {
					"id": "1"
				},
				"sex": "M",
				"client": {
					"firstName": "QUOC",
					"nameSuffix": null,
					"middleInitial": null,
					"guarantor": {
						"firstName": "QUOC",
						"nameSuffix": null,
						"middleInitial": null,
						"lastName": "LE"
					},
					"lastName": "LE"
				},
				"birthDate": "02/10/1998",
				"enterpriseId": "6687",
				"middleInitial": "",
				"deceasedDate": ""
			},
			"realSecondary": {
				"crossOverCode": null,
				"id": null
			},
			"specialHandling": {
				"supportingDocumentsOnly": null,
				"houseHoldByDocumentID": null,
				"documentHeader": null,
				"eobHeader": null
			},
			"typeOfBill": {
				"id": null,
				"extraClaimUb04Id": null,
				"code": null
			},
			"reserved19Note": "",
			"referralAuth": {
				"referralAuthType": {
					"name": null
				}
			},
			"lastAction": "ERA",
			"invoiceId": "30887V24342",
			"override24Hour": null,
			"source": "/home/goraja/gorajastreams/techops/coredev/bin/re.",
			"icdCodeAllInfo": [
				{
					"diagnosisCodeSetId": "21",
					"diagnosisCode": "Z719",
					"expirationDate": null,
					"gender": null,
					"effectiveDate": "10/01/2020"
				},
				{
					"diagnosisCodeSetId": "21",
					"diagnosisCode": "Z719",
					"expirationDate": "09/30/2020",
					"gender": null,
					"effectiveDate": "10/01/2017"
				},
				{
					"diagnosisCodeSetId": "21",
					"diagnosisCode": "Z719",
					"expirationDate": "09/30/2017",
					"gender": null,
					"effectiveDate": "10/01/2014"
				}
			],
			"batchClaimByKey": null,
			"claimFormatVersionId": null,
			"slidingFeePlan": {
				"patientInsuranceId": "",
				"name": null,
				"id": null
			},
			"specialtyFieldGroup": {
				"hospice": {
					"firstName": null,
					"providerHospiceEmployee": null,
					"homebound": null,
					"npiReferringProviderNumber": null,
					"hospiceOrHomeHealthAgencyID": null,
					"lastName": null,
					"referringProviderNumber": null
				},
				"anesthesia": {
					"originalClaimType": null
				},
				"healthSafetyNet": {
					"claimType": null,
					"applicationId": null
				},
				"maternity": {
					"lastMenstrualPeriodDate": "",
					"hsnTermDiscount": null,
					"pregnant": null,
					"estimatedDeliveryDate": null
				},
				"paperWork": {
					"paperWorkYN": null,
					"attachmentType": null,
					"attachmentTransmissionCode": null,
					"attachmentControlNumber": null
				},
				"postOperativeCare": {
					"relinquishedCareDate": "",
					"assumedCareDate": "",
					"relinquishedCareDateInvalidFlag": "No",
					"assumedCareDateInvalidFlag": "No"
				},
				"familyPlanning": {
					"ppmhcvrNumberOfPregnancies": null,
					"ppmhcvrNumberOfBirths": null,
					"ppmhcvrPregnancyTest": null,
					"ppmhcvrIfPositiveWasPregnancy": null
				},
				"occupationalTherapy": {
					"lastSeenDate": null
				},
				"miscellaneousFields": {
					"ecStatememt": null,
					"defaultTplCode": null,
					"serviceAuthExceptionCode": null,
					"specialProgramCode": null,
					"ideNumber": null,
					"ctrNumber": null,
					"delayReasonCode": null
				},
				"dialysis": {
					"creatinineDateInvalidFlag": "No",
					"patientWeight": null,
					"epoetinAmount": null,
					"hctHgbDate": null,
					"chemoDrugDateInvalidFlag": "No",
					"validFields": [],
					"chemoDrugDate": null,
					"chemoDrugName": null,
					"creatinineAmount": null,
					"creatinineDate": null,
					"hematocritAmount": null
				},
				"addons": [],
				"breastCare": {
					"tplDenialDate": null
				},
				"immunization": {
					"batchNumber": null
				},
				"hearingVision": {
					"prescriptionDate": null,
					"prescriptionDateInvalidFlag": "No"
				},
				"radiationTherapy": {
					"patientsServed": null
				},
				"covid19": {
					"suspectedYN": null,
					"testingYN": null
				},
				"noSurprisesActConsent": {
					"noSurprisesActConsentedAmount": null
				},
				"erTransport": {
					"ertPickupLocationName": null,
					"ertDropOffLocationName": null
				},
				"dme": {
					"lastCertificationDate": null,
					"o2FlowRate": null,
					"cmnQuantity": null,
					"certificationRevisionDate": null,
					"certificationRevisionDateInvalidFlag": "No",
					"o2SaturationTestDateInvalidFlag": "No",
					"abgQuantity": null,
					"certificationType": null,
					"cmnQuestionsSortByQuestionNumber": null,
					"abgTestDateInvalidFlag": "No",
					"o2CertificationRevisionDateInvalidFlag": "No",
					"o2CertificationType": null,
					"o2CertificationRevisionDate": null,
					"o2SaturationQuantity": null,
					"lastCertificationDateInvalidFlag": "No",
					"cmnFormIdentifier": null,
					"cmnQuestions": [],
					"o2SaturationTestDate": null,
					"therapyBeginDateInvalidFlag": "No",
					"o2TherapyBeginDate": null,
					"abgTestDate": null,
					"o2CmnQuantity": null,
					"rcConditionIndicatorCode": null,
					"therapyBeginDate": null,
					"o2TherapyBeginDateInvalidFlag": "No",
					"rcConditionsApplyYN": null,
					"rcConditionIndicatorType": null
				},
				"spinalManipulation": {
					"acuteManifestationDate": null,
					"initialTreatmentDate": null,
					"lastXrayDate": null,
					"condition": null
				},
				"medicaid": {
					"maReSubReasonId": null,
					"txBenefitCode": null,
					"wiMedicareDisclaimerCode": null,
					"maReSubReasonNote": null,
					"primaryPaidDate": null,
					"paIcn": null
				},
				"consultation": {
					"secondOpinionForSurgery": null
				},
				"wellChildCare": {
					"epsdtReferralReasons": [
						"",
						"",
						""
					],
					"epsdtCompleteScreen": null,
					"epsdtReferralGiven": null,
					"epsdtReferralResultYN": null
				}
			},
			"ruleAttributes": {
				"gr11021Hold": null,
				"gr4681Hold": null,
				"gr11811Hold": null,
				"gr13051Hold": null
			},
			"facilityCodes": {
				"valueCodes": {
					"80": null,
					"D4": null,
					"41": null,
					"12": null,
					"48": null,
					"47": null,
					"15": null,
					"14": null,
					"42": null,
					"49": null,
					"24": null,
					"16": null,
					"43": null,
					"44": null
				},
				"conditionCodes": {
					"D9": null,
					"28": null,
					"A6": null,
					"26": null,
					"A4": null,
					"04": null,
					"02": null,
					"07": null,
					"D7": null,
					"D8": null,
					"G0": null,
					"09": null,
					"29": null
				},
				"occurrenceCodes": {
					"25": null,
					"01": null,
					"A1": null,
					"21": null,
					"05": null,
					"A2": null,
					"04": null,
					"02": null,
					"03": null,
					"24": null,
					"B2": null
				}
			},
			"icdPCScode": [],
			"principalDiagnosis": null,
			"wrapClaimType": null,
			"corporateBillingSplitfields": null,
			"suppressClaimForm": null,
			"therapyBeginDate": "",
			"claimStatus": "HOLD",
			"lateTimeSheetNotes": [],
			"splitFromClaimId": null,
			"createdBy": "INTF-114996",
			"otherDiagnoses": "",
			"previouslyBilled": [
				{
					"patientInsuranceId": 8765,
					"claimSubmissionCategoryId": "8335",
					"transferType": "1",
					"billingInsurancePackageId": 1352,
					"claimId": 30887,
					"createdTimeStamp": "20231222024344",
					"id": 264515,
					"createdDate": "12/22/2023",
					"insuranceReportingCategoryId": 121
				}
			],
			"primaryOutstandingAmount": "60",
			"allAttachments": [],
			"statusp": "CLOSED",
			"hospitalization": {
				"toDate": "",
				"fromDate": ""
			},
			"revenueReorder": null,
			"visitAccommodationNames": [],
			"manualDropReasonId2": "",
			"ambulance": {
				"isAmbulance": "N",
				"serviceLocationDetails": [],
				"trips": []
			},
			"signature": {
				"releaseOfInformationYN": "Y",
				"assignmentOfBenefitsYN": "Y"
			},
			"hemoglobinAmount": null,
			"createdDate": "12/12/2023",
			"manualDropYN": "",
			"anesthesia": {
				"manualFormatting": "",
				"siblingClaims": [],
				"typeId": null,
				"settings": {
					"directionModifierYN": null,
					"claimType": null,
					"rounding": null,
					"unitOfMeasure": null,
					"firstLastLongest": null
				}
			},
			"medicaidResubmissionCode": "",
			"medicaidResubmissionOrigRefNo": "",
			"currentIllnessDate": "11/01/2023",
			"claimAuditDetails": [],
			"pxAutomated": null,
			"historicalNotes": [
				{
					"isAthenaUser": "N",
					"createdBy": "INTF-114996",
					"claimNoteOverrideDisabled": null,
					"bizReqId": null,
					"pendingFlag": null,
					"kickReasonAthenaKickCode": null,
					"otherKickReasonId": null,
					"billingBatchFormat": null,
					"id": 242010,
					"insuranceReportingCategoryId": "121",
					"claimReferenceNumber": null,
					"legacyRuleId": null,
					"athenaKickReasonId": null,
					"createdTimeStamp": "20231212150623",
					"otherAthenaKickReasonId": null,
					"networkClaimRuleId": null,
					"chargeId": null,
					"billingTransferType": null,
					"patientInsuranceId": "8765",
					"kickReasonId": null,
					"kickCode": null,
					"localClaimRuleYN": null,
					"billingBatchDeleted": null,
					"imageFilePageNumber": null,
					"serviceRestrictionId": null,
					"athenaKickCode": null,
					"claimId": 30887,
					"localClaimRuleId": null,
					"billingInsurancePackageId": null,
					"transferType": "1",
					"claimSubimissionCategoriId": "8335",
					"note": null,
					"insurancePackageID": "1352",
					"created": "12/12/2023",
					"claimNoteOverrideClaimnoteId": null,
					"paymentBatchId": null,
					"action": "CREATE",
					"claimStatus": "DROP"
				},
				{
					"isAthenaUser": "N",
					"createdBy": "Local BR-006005",
					"claimNoteOverrideDisabled": null,
					"bizReqId": null,
					"pendingFlag": null,
					"kickReasonAthenaKickCode": null,
					"otherKickReasonId": null,
					"billingBatchFormat": null,
					"id": 242011,
					"insuranceReportingCategoryId": "121",
					"claimReferenceNumber": null,
					"legacyRuleId": null,
					"athenaKickReasonId": null,
					"createdTimeStamp": "20231212150625",
					"otherAthenaKickReasonId": null,
					"networkClaimRuleId": null,
					"chargeId": null,
					"billingTransferType": null,
					"patientInsuranceId": "8765",
					"kickReasonId": null,
					"kickCode": null,
					"localClaimRuleYN": null,
					"billingBatchDeleted": null,
					"imageFilePageNumber": null,
					"serviceRestrictionId": null,
					"athenaKickCode": null,
					"claimId": 30887,
					"localClaimRuleId": null,
					"billingInsurancePackageId": null,
					"transferType": "1",
					"claimSubimissionCategoriId": "8335",
					"note": "Per practice, the description for the modifier has been mapped to the Service Line Description for procedure code S9110.",
					"insurancePackageID": "1352",
					"created": "12/12/2023",
					"claimNoteOverrideClaimnoteId": null,
					"paymentBatchId": null,
					"action": "NOTE",
					"claimStatus": "DROP"
				},
				{
					"isAthenaUser": "N",
					"createdBy": "AUTO",
					"claimNoteOverrideDisabled": null,
					"bizReqId": "27",
					"pendingFlag": null,
					"kickReasonAthenaKickCode": null,
					"otherKickReasonId": null,
					"billingBatchFormat": null,
					"id": 249725,
					"insuranceReportingCategoryId": "121",
					"claimReferenceNumber": null,
					"legacyRuleId": "351",
					"athenaKickReasonId": null,
					"createdTimeStamp": "20231213062039",
					"otherAthenaKickReasonId": null,
					"networkClaimRuleId": null,
					"chargeId": null,
					"billingTransferType": null,
					"patientInsuranceId": "8765",
					"kickReasonId": null,
					"kickCode": null,
					"localClaimRuleYN": null,
					"billingBatchDeleted": null,
					"imageFilePageNumber": null,
					"serviceRestrictionId": null,
					"athenaKickCode": null,
					"claimId": 30887,
					"localClaimRuleId": null,
					"billingInsurancePackageId": null,
					"transferType": "1",
					"claimSubimissionCategoriId": "8335",
					"note": null,
					"insurancePackageID": "1352",
					"created": "12/13/2023",
					"claimNoteOverrideClaimnoteId": null,
					"paymentBatchId": null,
					"action": "SCRUB",
					"claimStatus": "HOLD"
				},
				{
					"isAthenaUser": "N",
					"createdBy": "AUTO",
					"claimNoteOverrideDisabled": null,
					"bizReqId": null,
					"pendingFlag": null,
					"kickReasonAthenaKickCode": null,
					"otherKickReasonId": null,
					"billingBatchFormat": null,
					"id": 263407,
					"insuranceReportingCategoryId": "121",
					"claimReferenceNumber": null,
					"legacyRuleId": null,
					"athenaKickReasonId": null,
					"createdTimeStamp": "20231221100940",
					"otherAthenaKickReasonId": null,
					"networkClaimRuleId": null,
					"chargeId": null,
					"billingTransferType": null,
					"patientInsuranceId": "8765",
					"kickReasonId": null,
					"kickCode": null,
					"localClaimRuleYN": null,
					"billingBatchDeleted": null,
					"imageFilePageNumber": null,
					"serviceRestrictionId": null,
					"athenaKickCode": null,
					"claimId": 30887,
					"localClaimRuleId": null,
					"billingInsurancePackageId": null,
					"transferType": "1",
					"claimSubimissionCategoriId": "8335",
					"note": "Claim corrected.",
					"insurancePackageID": "1352",
					"created": "12/21/2023",
					"claimNoteOverrideClaimnoteId": null,
					"paymentBatchId": null,
					"action": "SCRUB",
					"claimStatus": "DROP"
				},
				{
					"isAthenaUser": "N",
					"createdBy": "BATCH",
					"claimNoteOverrideDisabled": null,
					"bizReqId": null,
					"pendingFlag": null,
					"kickReasonAthenaKickCode": null,
					"otherKickReasonId": null,
					"billingBatchFormat": "ANSI837",
					"id": 264515,
					"insuranceReportingCategoryId": "121",
					"claimReferenceNumber": null,
					"legacyRuleId": null,
					"athenaKickReasonId": null,
					"createdTimeStamp": "20231222024344",
					"otherAthenaKickReasonId": null,
					"networkClaimRuleId": null,
					"chargeId": null,
					"billingTransferType": "1",
					"patientInsuranceId": "8765",
					"kickReasonId": null,
					"kickCode": null,
					"localClaimRuleYN": null,
					"billingBatchDeleted": null,
					"imageFilePageNumber": null,
					"serviceRestrictionId": null,
					"athenaKickCode": null,
					"claimId": 30887,
					"localClaimRuleId": null,
					"billingInsurancePackageId": "1352",
					"transferType": "1",
					"claimSubimissionCategoriId": "8335",
					"note": null,
					"insurancePackageID": "1352",
					"created": "12/22/2023",
					"claimNoteOverrideClaimnoteId": null,
					"paymentBatchId": null,
					"action": "BILL",
					"claimStatus": "BILLED"
				},
				{
					"isAthenaUser": "N",
					"createdBy": "AUTO",
					"claimNoteOverrideDisabled": null,
					"bizReqId": null,
					"pendingFlag": null,
					"kickReasonAthenaKickCode": "PAYORRCVD",
					"otherKickReasonId": 10817,
					"billingBatchFormat": null,
					"id": 264595,
					"insuranceReportingCategoryId": "121",
					"claimReferenceNumber": null,
					"legacyRuleId": null,
					"athenaKickReasonId": "10817",
					"createdTimeStamp": "20231222092421",
					"otherAthenaKickReasonId": 10817,
					"networkClaimRuleId": null,
					"chargeId": null,
					"billingTransferType": null,
					"patientInsuranceId": "8765",
					"kickReasonId": "10817",
					"kickCode": "PAYORRCVD",
					"localClaimRuleYN": null,
					"billingBatchDeleted": null,
					"imageFilePageNumber": null,
					"serviceRestrictionId": null,
					"athenaKickCode": "PAYORRCVD",
					"claimId": 30887,
					"localClaimRuleId": null,
					"billingInsurancePackageId": null,
					"transferType": "1",
					"claimSubimissionCategoriId": "8335",
					"note": "PAYORRCVD",
					"insurancePackageID": "1352",
					"created": "12/22/2023",
					"claimNoteOverrideClaimnoteId": null,
					"paymentBatchId": null,
					"action": "ACK PAYOR BATCH",
					"claimStatus": "BILLED"
				},
				{
					"isAthenaUser": "N",
					"createdBy": "AUTO",
					"claimNoteOverrideDisabled": null,
					"bizReqId": null,
					"pendingFlag": null,
					"kickReasonAthenaKickCode": "PAYORRCVD",
					"otherKickReasonId": 100145,
					"billingBatchFormat": null,
					"id": 264596,
					"insuranceReportingCategoryId": "121",
					"claimReferenceNumber": "E5TX8GGLR00",
					"legacyRuleId": null,
					"athenaKickReasonId": "10817",
					"createdTimeStamp": "20231222092421",
					"otherAthenaKickReasonId": 10817,
					"networkClaimRuleId": null,
					"chargeId": "65358",
					"billingTransferType": null,
					"patientInsuranceId": "8765",
					"kickReasonId": "100145",
					"kickCode": "ANSI277-A2-19-PR",
					"localClaimRuleYN": null,
					"billingBatchDeleted": null,
					"imageFilePageNumber": null,
					"serviceRestrictionId": null,
					"athenaKickCode": "PAYORRCVD",
					"claimId": 30887,
					"localClaimRuleId": null,
					"billingInsurancePackageId": null,
					"transferType": "1",
					"claimSubimissionCategoriId": "8335",
					"note": "Acknowledgement/Acceptance into adjudication system -  Payer: Entity acknowledges receipt of claim/encounter.",
					"insurancePackageID": "1352",
					"created": "12/22/2023",
					"claimNoteOverrideClaimnoteId": null,
					"paymentBatchId": null,
					"action": "ACK PAYOR",
					"claimStatus": "BILLED"
				},
				{
					"isAthenaUser": "N",
					"createdBy": "ATHENA",
					"claimNoteOverrideDisabled": null,
					"bizReqId": null,
					"pendingFlag": "Y",
					"kickReasonAthenaKickCode": "NEREVIEW",
					"otherKickReasonId": 180336,
					"billingBatchFormat": null,
					"id": 264766,
					"insuranceReportingCategoryId": "121",
					"claimReferenceNumber": null,
					"legacyRuleId": null,
					"athenaKickReasonId": "23542",
					"createdTimeStamp": "20231226104553",
					"otherAthenaKickReasonId": 23542,
					"networkClaimRuleId": null,
					"chargeId": "65358",
					"billingTransferType": null,
					"patientInsuranceId": "8765",
					"kickReasonId": "180336",
					"kickCode": "PR27",
					"localClaimRuleYN": null,
					"billingBatchDeleted": null,
					"imageFilePageNumber": null,
					"serviceRestrictionId": null,
					"athenaKickCode": "NEREVIEW",
					"claimId": 30887,
					"localClaimRuleId": null,
					"billingInsurancePackageId": null,
					"transferType": "1",
					"claimSubimissionCategoriId": "8335",
					"note": null,
					"insurancePackageID": "1352",
					"created": "12/26/2023",
					"claimNoteOverrideClaimnoteId": null,
					"paymentBatchId": 2003,
					"action": "ERA",
					"claimStatus": "HOLD"
				},
				{
					"isAthenaUser": "N",
					"createdBy": "ATHENA",
					"claimNoteOverrideDisabled": null,
					"bizReqId": null,
					"pendingFlag": null,
					"kickReasonAthenaKickCode": "INELIG",
					"otherKickReasonId": 189316,
					"billingBatchFormat": null,
					"id": 264767,
					"insuranceReportingCategoryId": "121",
					"claimReferenceNumber": null,
					"legacyRuleId": null,
					"athenaKickReasonId": "54395",
					"createdTimeStamp": "20231226104553",
					"otherAthenaKickReasonId": 54395,
					"networkClaimRuleId": null,
					"chargeId": "65358",
					"billingTransferType": null,
					"patientInsuranceId": "8765",
					"kickReasonId": "189316",
					"kickCode": "N650",
					"localClaimRuleYN": null,
					"billingBatchDeleted": null,
					"imageFilePageNumber": null,
					"serviceRestrictionId": null,
					"athenaKickCode": "INELIG",
					"claimId": 30887,
					"localClaimRuleId": null,
					"billingInsurancePackageId": null,
					"transferType": "1",
					"claimSubimissionCategoriId": "8335",
					"note": null,
					"insurancePackageID": "1352",
					"created": "12/26/2023",
					"claimNoteOverrideClaimnoteId": null,
					"paymentBatchId": 2003,
					"action": "ERA",
					"claimStatus": "HOLD"
				}
			],
			"routing": {
				"bcbsDestination": {
					"entityName": null
				}
			},
			"workersCompensation": {
				"caForm": {
					"discharged": null,
					"needForReferral": null,
					"regularWorkYN": null,
					"natureOfBusiness": null,
					"changeInTreatmentPlan": null,
					"returnToModifiedWork": null,
					"xrayLabResults": null,
					"delayPatientsRecoveryYN": null,
					"remainOffWork": null,
					"periodicReport": null,
					"hourOfExam": null,
					"infoRequested": null,
					"lastWorkedDate": "",
					"consistentWithAccountYN": null,
					"changeInPatientCondition": null,
					"occupation": null,
					"needForSurgery": null,
					"objectiveFindings": null,
					"injuredAt": null,
					"otherReason": null,
					"previouslyTreatedPatient": null,
					"changeInWorkStatus": null,
					"chemicalToxicCompoundsYN": null,
					"howAccidentOccurred": null,
					"subjectiveComplaints": null,
					"returnToFullDuty": null
				},
				"nyForm": {
					"similarConditionYN": null,
					"injuryCity": null,
					"otherRelationship": null,
					"mcaidHcfa22G": null,
					"businessRelationship": null,
					"rehabilitationDescription": null,
					"dateOfPreviousReport": "",
					"dateOfFirstConsult": "",
					"injuryCircumstance": null,
					"fromUnableToWorkDate": "",
					"treatmentDescription": null,
					"disfigurementDescription": null,
					"returnToWorkOn": null,
					"rehabilitationYN": null,
					"solelyRelatedToAutoAccidentYN": null,
					"stillUnderCareYN": null,
					"notSolelyRelatedToAutoAccident": null,
					"toUnableToWorkDate": "",
					"similarConditionDescription": null,
					"disfigurementYN": null,
					"wcbRatingCode": null,
					"durationOfTreatement": null
				}
			},
			"settings": {
				"bundleModifiers": {
					"uc": []
				},
				"relatedToOtherAccident": "N",
				"hospitalClaim": null,
				"rhcDesignation": {
					"billAs": null
				},
				"secondarytinExpirationDate": "",
				"credentialed": {
					"xhc": null,
					"asc": null,
					"pbc": null,
					"uc": null,
					"rhc": null,
					"fqhc": null
				},
				"primarytinExpirationDate": "",
				"relatedToEmployment": "N",
				"rvuReorder": null,
				"enableWrapBilling": "N",
				"encounterCode": {
					"xhc": [],
					"uc": [],
					"rhc": [],
					"fqhc": []
				},
				"anotherPartyResponsibleYN": "N",
				"primarytinConfig": null,
				"secondarytinConfig": null,
				"canBeMixedRhcClaim": "N",
				"primarytinConversionDate": "",
				"canBeMixedRhcClaimDefinedYN": "N",
				"rhc": null,
				"autoFormatting": {
					"xhc": null,
					"pbc": null,
					"rhc": null,
					"fqhc": null
				},
				"wrapBillingMCO": null,
				"enable2WrapBilling": null,
				"secondarytinConversionDate": "",
				"relatedToAutoAccident": "N",
				"taxAutomation": "",
				"clia": {
					"requiredForProcedureCode": null,
					"requiredByPayer": "Y",
					"cliaLocation": "cms1500_23",
					"outsideFacilityFlag": "N",
					"sentOnElectronicClaims": null
				},
				"xhcCredentialed": null
			},
			"claimFormats": {
				"orForm": {
					"tprCode": null
				},
				"ilForm": {
					"datePaidByMedicare": null,
					"providerRoleCode": null,
					"medicareIcnCcn": null,
					"tplStatusCode": null
				},
				"selectedFormat2": null,
				"ubForm": {
					"dischargeHour": "",
					"internalControlNumber": null,
					"admissionSource": "",
					"admissionHour": "",
					"admissionType": "",
					"drgCode": null,
					"admissionSourceName": null,
					"otherOperatingProviderId": null,
					"lastRevCode": null,
					"admittingDiagnosisIcd9": null
				},
				"selectedFormat1": null,
				"palmetto": {
					"chiropracticCheckbox": null,
					"podiatryCheckbox": null,
					"ambulanceCheckbox": null,
					"labCheckbox": null,
					"anesthesiaCheckbox": null,
					"specialInstructions": null,
					"otherCheckbox": null,
					"radiologyCheckbox": null,
					"surgeryCheckbox": null
				},
				"selectedFormatp": null,
				"pm160": {
					"immunizations": [],
					"eligibility": {
						"chdp": null,
						"aid": null,
						"medical": null,
						"county": null
					},
					"otherTests": null
				},
				"occupationalTherapy": {
					"priorAuthTrackingNumber": null
				},
				"lakidmed": {
					"referral2AppointmentDate": null,
					"referral1AppointmentDate": null,
					"referral1SuspectedCondition": null,
					"outgoingReferrals": [
						{
							"notes": null,
							"id": null,
							"referringProvider": {
								"firstName": null,
								"lastName": null,
								"phone": null
							}
						},
						{
							"notes": null,
							"id": null,
							"referringProvider": {
								"firstName": null,
								"lastName": null,
								"phone": null
							}
						},
						{
							"notes": null,
							"id": null,
							"referringProvider": {
								"firstName": null,
								"lastName": null,
								"phone": null
							}
						}
					],
					"referral2SuspectedCondition": null,
					"referral3AppointmentDate": null,
					"immunizationsCompleteReason": null,
					"referral3SuspectedCondition": null,
					"suspectedCondition": {
						"vision": null,
						"psychsocial": null,
						"nutritional": null,
						"abuseneglect": null,
						"hearing": null,
						"medical": null,
						"speechlang": null,
						"suspectedConditionFlag": null,
						"development": null,
						"dental": null
					},
					"immunizationsCompleteYN": null
				},
				"ansi": {
					"identifier": "ABK",
					"primaryProviderNumber": null,
					"stripAll": null,
					"secondaryProviderNumber": null
				},
				"nyForm": {
					"c4PatientAbilityStanding": null,
					"c4DiscussPatientReturnPatient": null,
					"c4ExaminationDeformity": null,
					"c4PatientNeedTestOrReferralYN": null,
					"familyPlanning": null,
					"c4NeedTestMri": null,
					"reachedMaxImprovement": null,
					"c4InjuryTypeVision": null,
					"c4PatientAbilityGrasping": null,
					"c4ExaminationNeuromuscular": null,
					"c4PatientReturnToWorkNoTxt": null,
					"c4PreviouslyTreatPatientYN": null,
					"c4DiscussPatientReturnNa": null,
					"preexistingInjuryCondition": null,
					"c4LearnAboutInjuryPatient": null,
					"c4OtherMedicalConsiderations": null,
					"c4PreExistingConditionTxt": null,
					"c4InjuryTypeTear": null,
					"c4InjuryTypeContusion": null,
					"c4PatientVocationalRehabYN": null,
					"patientWorking": null,
					"c4PatientAbilityEnvironmental": null,
					"c4Prognosis": null,
					"emergencyRelatedYN": "N",
					"c4InjuryTypeBite": null,
					"c4PatientAbilityOverhead": null,
					"c4PatientAbilityEnvironmentalSpec": null,
					"c4ProposedTreatment": null,
					"c4InjuryTypeSpinal": null,
					"c4InjuryTypeAmputation": null,
					"ptDoAnyTypeOfWork": null,
					"c4NeedReferralInternist": null,
					"c4PerformWithRestrictionsYN": null,
					"c4ExaminationActiverom": null,
					"c4NeedReferralPt": null,
					"c4TreatmentPeriodTime": null,
					"c4ScheduleLoss": null,
					"c4PatientComplaintWeak": null,
					"c4ExaminationLaceration": null,
					"originalClaimRefNumber": null,
					"c4PatientReturnToWorkYes": null,
					"c4NeedTestLab": null,
					"c4InjuryTypePoisonning": null,
					"c4ExaminationGait": null,
					"c4InjuryTypeSprain": null,
					"c4ExaminationPassiverom": null,
					"c4PatientAbilityShoulderLevel": null,
					"c4PatientComplaintNumb": null,
					"c4InjuryTypeInhalation": null,
					"c4MaxMedicalImprovementTxt": null,
					"c4PatientNextAppointmentTime": null,
					"c4ExaminationWasting": null,
					"c4ExaminationScar": null,
					"c4ExaminationSpasm": null,
					"c4ExaminationAbnormalrom": null,
					"c4PatientAbilityWalking": null,
					"c4ExaminationOtherTxt": null,
					"c4InjuryTypeFracture": null,
					"c4LearnAboutInjuryOtherTxt": null,
					"c4TreatmentPeriodUnits": null,
					"c4ExaminationBurns": null,
					"c4PatientNextAppointmentYN": null,
					"c4MaxMedicalImprovementYN": null,
					"c4InjuryTypeHearing": null,
					"typeOfReport": null,
					"permanentRestriction": null,
					"c4AuthYN": null,
					"c4ExaminationPain": null,
					"c4PatientReturnToWorkYesDate": null,
					"c4AnotherProviderTreatYN": null,
					"c4PatientComplaintStiff": null,
					"c4PatientAbilityPulling": null,
					"c4NeedReferralChiropractor": null,
					"c4InjuryTypeBurn": null,
					"describeWorkCapacity": null,
					"c4DiagnosticTestRendered": null,
					"c4ExaminationReflexes": null,
					"c4ExaminationBruising": null,
					"c4NeedTestXray": null,
					"c4ExaminationCrepitation": null,
					"voidyn": null,
					"c4PatientAbilityMachinery": null,
					"c4InjuryTypeAvulsion": null,
					"disabilityIs": null,
					"c4PatientAbilityBending": null,
					"medicaidPayerCode": null,
					"c4PatientComplaintOther": null,
					"c4MedicationRestrictionYN": null,
					"c4ExaminationNone": null,
					"c4RecentExamInjuryChanges": null,
					"c4NeedReferralSpecialist": null,
					"c4NeedTestEmg": null,
					"c4Condition": null,
					"c4ExaminationHematoma": null,
					"c4ExaminationEffusion": null,
					"c4InjuryTypeHernia": null,
					"c4PatientAbilityLiftingLbs": null,
					"c4ExaminationEdema": null,
					"c4PerformWithRestrictionsSpec": null,
					"c4NeedTestCtScan": null,
					"c4NeedTestOther": null,
					"wasWorkInjuryCause": null,
					"c4InjuryTypePsychological": null,
					"c4TreatmentFrequency": null,
					"c4InjuryTypeAbrasion": null,
					"c4InjuryTypeLaceration": null,
					"c4LearnAboutInjuryMedrec": null,
					"c4InjuryTypeCrush": null,
					"c4InjuryTypePuncture": null,
					"c4PatientNextAppointmentUnits": null,
					"c4PatientComplaintOtherTxt": null,
					"c4DiscussPatientReturnEmployer": null,
					"c4PatientAbilitySitting": null,
					"c4InjuryTypeDislocation": null,
					"abortionCode": null,
					"c4OverCounterMedAdvised": null,
					"paymentSourceCodeOverride": null,
					"c4PatientMissedWorkYN": null,
					"c4PatientReturnToWorkLimitDate": null,
					"c4InjuryTypeStrain": null,
					"c4ExaminationStrength": null,
					"c4PatientCurrentlyWorkingYN": null,
					"c4ReferralReason": null,
					"c4NeedReferralOt": null,
					"c4InjuryTypeNeedle": null,
					"c4PatientAbilityLifting": null,
					"c4ReferringDiag": null,
					"c4PatientAbilityClimbing": null,
					"adjustmentVoidReasonCode": null,
					"c4PatientComplaintSwell": null,
					"c4TreatmentsRendered": null,
					"c4RecentExamPlanChanges": null,
					"c4PatientComplaintPain": null,
					"c4MedicationRestrictionTxt": null,
					"c4InjuryTypeOtherTxt": null,
					"c4PatientVocationalRehabTxt": null,
					"c4PatientAbilityDriving": null,
					"disabledFromRegularWork": null,
					"c4PatientExertionAbility": null,
					"c4InjuryTypeDisease": null,
					"c4PatientNextAppointmentMonths": null,
					"c4NeedReferralOtherTxt": null,
					"c4WhereHowInjuryHappen": null,
					"c4PatientAbilityPullingLbs": null,
					"c4ReferredBackYN": null,
					"c4PatientReturnToWorkNo": null,
					"c4PatientReturnToWorkLimit": null,
					"c4NeedReferralOther": null,
					"c4InjuryTypeDermatitis": null,
					"c4ExaminationOther": null,
					"c4PatientNextAppointment": null,
					"c4AdditionalBodyPartsAffected": null,
					"c4NeedTestOtherTxt": null,
					"c4PatientAbilityKneeling": null,
					"c4PreExistingConditionYN": null,
					"medicaidSpecialtyId": null,
					"c4Evaluation": null,
					"adjustmentyn": null,
					"c4ExaminationSensation": null,
					"c4InjuryTypeOther": null,
					"c4PatientAbilityManipulation": null,
					"c4MaxMedicalImprovementDate": null,
					"c4PatientAbilityTemp": null,
					"c4LearnAboutInjuryOther": null
				}
			},
			"patientClaimOutstandingAmount": "0",
			"status1": "HOLD"
		},
		"transferType": "1",
		"scrubId": "298ADC36-D479-11EE-B143-DFD6BD90BED4",
		"dataCenter": "BED",
		"dbStack": "29",
		"context": {
			"parentContextId": "1",
			"contractTypeId": "COLLECTOR"
		},
		"refData": {
			"entityNumber": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273546541E9,
				"data": [],
				"cacheable": "false"
			},
			"insuranceProductTypes": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273517801E9,
				"data": [
					{
						"name": "HMO",
						"id": "1"
					},
					{
						"name": "PPO",
						"id": "2"
					},
					{
						"name": "POS",
						"id": "3"
					},
					{
						"name": "INDEMNITY",
						"id": "4"
					},
					{
						"name": "OTHER",
						"id": "5"
					},
					{
						"name": "EPO",
						"id": "6"
					},
					{
						"name": "Vision",
						"id": "7"
					},
					{
						"name": "Behavioral health",
						"id": "8"
					},
					{
						"name": "Radiology",
						"id": "9"
					},
					{
						"name": "Medicaid HMO",
						"id": "10"
					},
					{
						"name": "Medicaid PCCM",
						"id": "11"
					},
					{
						"name": "Medicaid CHIP",
						"id": "12"
					},
					{
						"name": "Medicaid-Traditional",
						"id": "13"
					},
					{
						"name": "Medicare HMO",
						"id": "14"
					},
					{
						"name": "Medicare PPO",
						"id": "15"
					},
					{
						"name": "Medicare Supplemental Plan",
						"id": "16"
					},
					{
						"name": "Workers Comp",
						"id": "17"
					},
					{
						"name": "MVA",
						"id": "18"
					},
					{
						"name": "Contracts",
						"id": "19"
					},
					{
						"name": "Legal",
						"id": "20"
					},
					{
						"name": "Medicare B-Traditional",
						"id": "21"
					},
					{
						"name": "Medicare Private FFS",
						"id": "22"
					},
					{
						"name": "Medicare POS",
						"id": "23"
					}
				],
				"cacheable": "false"
			},
			"claimRecordNumbers": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273516633E9,
				"data": [],
				"cacheable": "false"
			},
			"referringProviderNumbers": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273487465E9,
				"data": [],
				"cacheable": "false"
			},
			"mspInsuranceType": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273568886E9,
				"data": [
					{
						"name": "Working aged beneficiary or spouse 65 or older with EGHP",
						"id": 1
					},
					{
						"name": "ESRD beneficiary in 30 month coordination period",
						"id": 2
					},
					{
						"name": "No fault insurance (including auto)",
						"id": 3
					},
					{
						"name": "Worker's comp",
						"id": 4
					},
					{
						"name": "Public health service or other federal agency",
						"id": 5
					},
					{
						"name": "Black lung",
						"id": 6
					},
					{
						"name": "Veteran's Administration",
						"id": 7
					},
					{
						"name": "Disabled beneficiary under 65 with LGHP",
						"id": 8
					},
					{
						"name": "Other liability insurance is primary",
						"id": 9
					}
				],
				"cacheable": "false"
			},
			"specialtyDetails": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273563068E9,
				"data": [
					{
						"name": "General Practice",
						"id": "001"
					},
					{
						"name": "General Surgery",
						"id": "002"
					},
					{
						"name": "Allergy/Immunology",
						"id": "003"
					},
					{
						"name": "Otolaryngology",
						"id": "004"
					},
					{
						"name": "Anesthesiology",
						"id": "005"
					},
					{
						"name": "Dermatology",
						"id": "007"
					},
					{
						"name": "Family Medicine",
						"id": "008"
					},
					{
						"name": "Interventional Pain Management",
						"id": "009"
					},
					{
						"name": "Gastroenterology",
						"id": "010"
					},
					{
						"name": "Internal Medicine",
						"id": "011"
					},
					{
						"name": "Physician Assistant",
						"id": "097"
					},
					{
						"name": "OB/GYN",
						"id": "016"
					},
					{
						"name": "Certified Nurse Midwife",
						"id": "042"
					},
					{
						"name": "Ophthalmology",
						"id": "018"
					},
					{
						"name": "Oral Surgery/Dentist",
						"id": "019"
					},
					{
						"name": "Palliative Care",
						"id": "101"
					},
					{
						"name": "Pathology",
						"id": "022"
					},
					{
						"name": "Peripheral V. D./Ost",
						"id": "023 "
					},
					{
						"name": "Plastic/Reconstructive Surg.",
						"id": "024"
					},
					{
						"name": "Phys. Med. & Rehab.",
						"id": "025"
					},
					{
						"name": "Colorectal Surgery",
						"id": "028"
					},
					{
						"name": "Pulmonary Disease",
						"id": "029"
					},
					{
						"name": "Diagnostic Radiology",
						"id": "030"
					},
					{
						"name": "Roentgenology/Radio",
						"id": "031"
					},
					{
						"name": "Anesthesiologist Assistant",
						"id": "032"
					},
					{
						"name": "Thoracic Surgery",
						"id": "033"
					},
					{
						"name": "Urology",
						"id": "034"
					},
					{
						"name": "Chiropractic",
						"id": "035"
					},
					{
						"name": "Nuclear Medicine",
						"id": "036"
					},
					{
						"name": "Pediatric Medicine",
						"id": "037"
					},
					{
						"name": "Geriatric Medicine",
						"id": "038"
					},
					{
						"name": "Nephrology",
						"id": "039"
					},
					{
						"name": "Orthopaedic Surgery - Hand",
						"id": "040"
					},
					{
						"name": "Optometry",
						"id": "041"
					},
					{
						"name": "Infectious Disease",
						"id": "044"
					},
					{
						"name": "Endocrinology",
						"id": "046"
					},
					{
						"name": "Podiatry",
						"id": "048"
					},
					{
						"name": "Nurse Practitioner- Specialist",
						"id": "050"
					},
					{
						"name": "Ambulance - Ground",
						"id": "059"
					},
					{
						"name": "Rheumatology",
						"id": "066"
					},
					{
						"name": "Peripheral Vas. Dis.",
						"id": "076"
					},
					{
						"name": "Vascular Surgery",
						"id": "077"
					},
					{
						"name": "Cardiac Surgery",
						"id": "078"
					},
					{
						"name": "Addiction Medicine",
						"id": "079"
					},
					{
						"name": "Critical Care: Intensive",
						"id": "081"
					},
					{
						"name": "Hematology/Oncology",
						"id": "083"
					},
					{
						"name": "Preventive Medicine",
						"id": "084"
					},
					{
						"name": "Maxillofacial Surgery",
						"id": "085"
					},
					{
						"name": "Neuropsychiatry",
						"id": "086"
					},
					{
						"name": "Medical Oncology",
						"id": "090"
					},
					{
						"name": "Surgical Oncology",
						"id": "091"
					},
					{
						"name": "Radiation Oncology",
						"id": "092"
					},
					{
						"name": "Interventional Radiology",
						"id": "094"
					},
					{
						"name": "Gynecological/Oncology",
						"id": "098"
					},
					{
						"name": "Neonatology",
						"id": "100"
					},
					{
						"name": "Occupational Medicine",
						"id": "074"
					},
					{
						"name": "Osteopathic Manipulative Medicine",
						"id": "012"
					},
					{
						"name": "Orthotics",
						"id": "055"
					},
					{
						"name": "Prosthetics",
						"id": "056"
					},
					{
						"name": "Orthotics-Prosthetics",
						"id": "057"
					},
					{
						"name": "Clinical Nurse Specialist",
						"id": "089"
					},
					{
						"name": "Audiology",
						"id": "064"
					},
					{
						"name": "Certified Registered Nurse Anesthetist",
						"id": "043"
					},
					{
						"name": "Clinical Psychology",
						"id": "068"
					},
					{
						"name": "Bariatric Surgery",
						"id": "102"
					},
					{
						"name": "Hospitalist",
						"id": "104"
					},
					{
						"name": "Nutritionist",
						"id": "107"
					},
					{
						"name": "OB/GYN Oncology",
						"id": "108"
					},
					{
						"name": "Sleep Medicine",
						"id": "111"
					},
					{
						"name": "Genetics",
						"id": "607"
					},
					{
						"name": "Perfusionist",
						"id": "609"
					},
					{
						"name": "Diabetes Education",
						"id": "611"
					},
					{
						"name": "Hematology/Oncology:Cell Therapy",
						"id": "9083"
					},
					{
						"name": "Pediatric Endocrinology",
						"id": "615"
					},
					{
						"name": "Indigent Care",
						"id": "617"
					},
					{
						"name": "Pediatric Neurology",
						"id": "619"
					},
					{
						"name": "EMT-Basic",
						"id": "624"
					},
					{
						"name": "Wheelchair Van",
						"id": "621"
					},
					{
						"name": "Ambulatory Surgical Center",
						"id": "625"
					},
					{
						"name": "Orthopedic Surgery-Spine",
						"id": "629"
					},
					{
						"name": "Orthopedic Surgery-Adult Reconstructive",
						"id": "628"
					},
					{
						"name": "Emergency Medicine",
						"id": "093"
					},
					{
						"name": "Unknown Provider",
						"id": "099"
					},
					{
						"name": "Pain Management",
						"id": "072"
					},
					{
						"name": "Clinical Cardiac Electrophysiology",
						"id": "606"
					},
					{
						"name": "Physical Therapy",
						"id": "065"
					},
					{
						"name": "Registered Dietitian Nutritionist",
						"id": "071"
					},
					{
						"name": "Community Health Worker",
						"id": "103"
					},
					{
						"name": "Hepatology",
						"id": "105"
					},
					{
						"name": "Fertility and Reproductive Endocrinology",
						"id": "106"
					},
					{
						"name": "Pediatric Dentist",
						"id": "109"
					},
					{
						"name": "Periodontics",
						"id": "110"
					},
					{
						"name": "Visiting Nurse",
						"id": "112"
					},
					{
						"name": "Developmental Pediatrics",
						"id": "608"
					},
					{
						"name": "Surgical Assistant",
						"id": "610"
					},
					{
						"name": "Gynecology",
						"id": "612"
					},
					{
						"name": "Perinatology",
						"id": "613"
					},
					{
						"name": "Retail Clinic",
						"id": "614"
					},
					{
						"name": "Sports Medicine",
						"id": "023"
					},
					{
						"name": "Advanced Diagnostic Imaging",
						"id": "095"
					},
					{
						"name": "Pediatric Surgery",
						"id": "618"
					},
					{
						"name": "Pediatric Genetics",
						"id": "620"
					},
					{
						"name": "EMT-Intermediate",
						"id": "623"
					},
					{
						"name": "EMT-Paramedic",
						"id": "622"
					},
					{
						"name": "Urgent Care",
						"id": "626"
					},
					{
						"name": "Urogynecology",
						"id": "627"
					},
					{
						"name": "Employee Health Center",
						"id": "630"
					},
					{
						"name": "Cardiology",
						"id": "006"
					},
					{
						"name": "Neurology",
						"id": "013"
					},
					{
						"name": "Orthopedic Surgery",
						"id": "020"
					},
					{
						"name": "EMT-Basic Advanced",
						"id": "631"
					},
					{
						"name": "Dentist",
						"id": "632"
					},
					{
						"name": "Pediatric Pulmonology",
						"id": "633"
					},
					{
						"name": "Breast Surgery",
						"id": "634"
					},
					{
						"name": "Adolescent Medicine",
						"id": "635"
					},
					{
						"name": "Bone Marrow Transplant",
						"id": "636"
					},
					{
						"name": "Liver Transplant",
						"id": "637"
					},
					{
						"name": "Cardio Thoracic Critical Care",
						"id": "638"
					},
					{
						"name": "Emergency Transport",
						"id": "639"
					},
					{
						"name": "Cardiovascular and Thoracic Surgery",
						"id": "640"
					},
					{
						"name": "Speech Language Pathology",
						"id": "015"
					},
					{
						"name": "Cardiology: Invasive/Interventional",
						"id": "641"
					},
					{
						"name": "Cardiology: Noninvasive",
						"id": "642"
					},
					{
						"name": "Cardiopulmonary Disease",
						"id": "643"
					},
					{
						"name": "Cardiovascular Disease",
						"id": "644"
					},
					{
						"name": "Transplant Surgery",
						"id": "645"
					},
					{
						"name": "Transplant Hepatology",
						"id": "646"
					},
					{
						"name": "Pulmonary Critical Care",
						"id": "647"
					},
					{
						"name": "Pediatric Emergency Medicine",
						"id": "648"
					},
					{
						"name": "Pediatric Intensivist",
						"id": "649"
					},
					{
						"name": "Pediatric Hospitalist",
						"id": "650"
					},
					{
						"name": "Procurement",
						"id": "651"
					},
					{
						"name": "Podiatric Surgery",
						"id": "652"
					},
					{
						"name": "Orthopedics",
						"id": "653"
					},
					{
						"name": "Pediatric Cardiology",
						"id": "654"
					},
					{
						"name": "Pediatric Gastroenterology",
						"id": "655"
					},
					{
						"name": "Acupuncture",
						"id": "660"
					},
					{
						"name": "Massage Therapy",
						"id": "656"
					},
					{
						"name": "Homeopathy",
						"id": "657"
					},
					{
						"name": "Pediatric Audiology",
						"id": "661"
					},
					{
						"name": "Dermatopathology",
						"id": "662"
					},
					{
						"name": "Pediatric Dermatology",
						"id": "663"
					},
					{
						"name": "Interventional Cardiology",
						"id": "664"
					},
					{
						"name": "Pediatric Otolaryngology",
						"id": "665"
					},
					{
						"name": "Pediatric Hematology/Oncology",
						"id": "666"
					},
					{
						"name": "Pediatric Infectious Disease",
						"id": "667"
					},
					{
						"name": "Pediatric Nephrology",
						"id": "668"
					},
					{
						"name": "Pediatric Rheumatology",
						"id": "669"
					},
					{
						"name": "Child and Adolescent Psychiatry",
						"id": "670"
					},
					{
						"name": "Pediatric Urology",
						"id": "671"
					},
					{
						"name": "Pediatric Orthopedic Surgery",
						"id": "672"
					},
					{
						"name": "Care Management",
						"id": "673"
					},
					{
						"name": "Pediatric Nutrition",
						"id": "674"
					},
					{
						"name": "Pediatric Pain Management",
						"id": "675"
					},
					{
						"name": "Maternal Fetal Medicine",
						"id": "676"
					},
					{
						"name": "Neurophysiology",
						"id": "677"
					},
					{
						"name": "Pediatric Physical Medicine and Rehabilitation",
						"id": "678"
					},
					{
						"name": "Pediatric Plastic/Reconstructive Surgery",
						"id": "679"
					},
					{
						"name": "Pediatric Palliative Care",
						"id": "680"
					},
					{
						"name": "Pediatric Allergy/Immunology",
						"id": "681"
					},
					{
						"name": "Pediatric Critical Care: Intensive",
						"id": "682"
					},
					{
						"name": "Pediatric Neuropsychiatry",
						"id": "683"
					},
					{
						"name": "Pediatric Neurosurgery",
						"id": "684"
					},
					{
						"name": "Pediatric Ophthalmology",
						"id": "685"
					},
					{
						"name": "Pediatric Sleep Medicine",
						"id": "686"
					},
					{
						"name": "Pediatric Psychology",
						"id": "687"
					},
					{
						"name": "Pediatric Psychiatry",
						"id": "688"
					},
					{
						"name": "Pediatric Sports Medicine",
						"id": "689"
					},
					{
						"name": "Licensed Clinical Social Worker",
						"id": "080"
					},
					{
						"name": "Social Worker",
						"id": "690"
					},
					{
						"name": "Neuropsychology",
						"id": "691"
					},
					{
						"name": "Pediatric Neuropsychology",
						"id": "692"
					},
					{
						"name": "Pediatric Bariatric Medicine",
						"id": "708"
					},
					{
						"name": "Plastic/Recons Surg.",
						"id": "9095"
					},
					{
						"name": "Unknown Physician",
						"id": "9085"
					},
					{
						"name": "Pulmonary Diseases",
						"id": "9087"
					},
					{
						"name": "Family Practice",
						"id": "9094"
					},
					{
						"name": "Primary Care",
						"id": "9089"
					},
					{
						"name": "Dermatology Surgery",
						"id": "710"
					},
					{
						"name": "Multispecialty (Primary Care Only)",
						"id": "9086"
					},
					{
						"name": "Multispecialty (Primary and Specialty Care)",
						"id": "9084"
					},
					{
						"name": "Dental Hygienist",
						"id": "711"
					},
					{
						"name": "Occupational Therapy",
						"id": "067"
					},
					{
						"name": "Psychology",
						"id": "062"
					},
					{
						"name": "Psychiatry",
						"id": "026"
					},
					{
						"name": "Critical Care(Inten)",
						"id": "9091"
					},
					{
						"name": "Nurse Practitioner",
						"id": "9097"
					},
					{
						"name": "Occupational Med",
						"id": "9098"
					},
					{
						"name": "Hematology",
						"id": "082"
					},
					{
						"name": "Multispecialty Clinic",
						"id": "070"
					},
					{
						"name": "Neurosurgery",
						"id": "014"
					},
					{
						"name": "Multispecialty Clini",
						"id": "9088"
					},
					{
						"name": "Certified Health Coach",
						"id": "709"
					},
					{
						"name": "Weight Management",
						"id": "707"
					},
					{
						"name": "Trauma Surgery",
						"id": "712"
					},
					{
						"name": "Pediatric Internal Medicine",
						"id": "713"
					},
					{
						"name": "Telehealth",
						"id": "714"
					},
					{
						"name": "Wound Care",
						"id": "715"
					},
					{
						"name": "Orthopedic Surgery Ankle/Foot",
						"id": "716"
					},
					{
						"name": "Orthopedic Surgery Total Joint",
						"id": "720"
					},
					{
						"name": "Orthopedic Surgery Shoulder and Elbow",
						"id": "717"
					},
					{
						"name": "Orthopedic Musculoskeletal Oncology",
						"id": "719"
					},
					{
						"name": "Orthopedic Sports Medicine",
						"id": "718"
					},
					{
						"name": "Occupational Therapy - Certified Hand Therapist",
						"id": "721"
					},
					{
						"name": "Hand Surgeon",
						"id": "722"
					},
					{
						"name": "Chaplain",
						"id": "723"
					},
					{
						"name": "Infusion Therapy",
						"id": "693"
					},
					{
						"name": "Pediatric Neonatal-Perinatal Medicine",
						"id": "694"
					},
					{
						"name": "Early Intervention",
						"id": "696"
					},
					{
						"name": "Applied Behavior Analyst",
						"id": "695"
					},
					{
						"name": "Naturopathic Medicine",
						"id": "697"
					},
					{
						"name": "Research",
						"id": "698"
					},
					{
						"name": "Osteoporosis",
						"id": "699"
					},
					{
						"name": "Orthopedic Trauma Surgery",
						"id": "700"
					},
					{
						"name": "Endocrine Surgery",
						"id": "701"
					},
					{
						"name": "Pharmacist",
						"id": "702"
					},
					{
						"name": "Nurse Practitioner- Generalist",
						"id": "703"
					},
					{
						"name": "Lactation Consultant",
						"id": "704"
					},
					{
						"name": "Obesity Medicine",
						"id": "705"
					},
					{
						"name": "Certified Lactation Counselor",
						"id": "706"
					},
					{
						"name": "Transplant Nephrologist",
						"id": "724"
					},
					{
						"name": "Retina Specialist",
						"id": "725"
					},
					{
						"name": "Behavioral Health",
						"id": "726"
					},
					{
						"name": "Cosmetic Surgeon",
						"id": "727"
					},
					{
						"name": "Otolaryngology-Head and Neck Surgery",
						"id": "728"
					},
					{
						"name": "RESPIRATORY THERAPY",
						"id": "729"
					},
					{
						"name": "Lifestyle Medicine",
						"id": "730"
					},
					{
						"name": "Home Health",
						"id": "731"
					},
					{
						"name": "Prosthodontic",
						"id": "734"
					},
					{
						"name": "Pedodontist",
						"id": "732"
					},
					{
						"name": "Endodontics",
						"id": "733"
					},
					{
						"name": "Exercise Physiology",
						"id": "735"
					},
					{
						"name": "Spine Surgery",
						"id": "736"
					},
					{
						"name": "Bariatric Medicine",
						"id": "737"
					},
					{
						"name": "Anticoagulation Medicine",
						"id": "738"
					},
					{
						"name": "Licensed Clinical Professional Counselor",
						"id": "739"
					},
					{
						"name": "Gynecological Surgery",
						"id": "740"
					},
					{
						"name": "Laboratory Studies",
						"id": "143"
					},
					{
						"name": "Otology",
						"id": "159"
					},
					{
						"name": "Neuro Ophthalmology",
						"id": "153"
					},
					{
						"name": "Mental Health Counselor",
						"id": "151"
					},
					{
						"name": "Care Coordination",
						"id": "152"
					},
					{
						"name": "Music Therapy",
						"id": "156"
					},
					{
						"name": "Family Therapy",
						"id": "157"
					},
					{
						"name": "GI Surgery",
						"id": "815"
					},
					{
						"name": "Hospice",
						"id": "987"
					},
					{
						"name": "Pediatric Radiology",
						"id": "777"
					},
					{
						"name": "Pharmacy Technician",
						"id": "888"
					},
					{
						"name": "Plastic Surgery - Hand",
						"id": "8765"
					},
					{
						"name": "Adult Gerontology",
						"id": "889"
					},
					{
						"name": "Functional Medicine",
						"id": "890"
					},
					{
						"name": "Developmental-Behavioral Pediatrics",
						"id": "891"
					},
					{
						"name": "Forensic Medicine",
						"id": "892"
					},
					{
						"name": "Clinical Social Worker",
						"id": "895"
					},
					{
						"name": "Child Life Profession",
						"id": "893"
					},
					{
						"name": "Certified Professional Midwife",
						"id": "894"
					},
					{
						"name": "Marriage and Family Therapist",
						"id": "896"
					},
					{
						"name": "Advanced Heart Failure and Transplant Cardiology",
						"id": "897"
					},
					{
						"name": "Clinical Pharmacist",
						"id": "898"
					},
					{
						"name": "Substance Use Disorder Treatment Provider",
						"id": "899"
					},
					{
						"name": "Maternity Infant Support Service Provider",
						"id": "900"
					},
					{
						"name": "Naturopathic Oncology",
						"id": "901"
					},
					{
						"name": "Transgender Medicine",
						"id": "902"
					},
					{
						"name": "HIV Specialist",
						"id": "906"
					},
					{
						"name": "Integrative Medicine",
						"id": "907"
					},
					{
						"name": "Family Medicine Obstetrics, EP",
						"id": "905"
					},
					{
						"name": "Family Medicine Obstetrics",
						"id": "904"
					},
					{
						"name": "Gender-affirmation Surgery",
						"id": "903"
					},
					{
						"name": "Pelvic Health Physical Therapy",
						"id": "908"
					},
					{
						"name": "School Based Health Center",
						"id": "909"
					},
					{
						"name": "Reproductive Urology and Andrology",
						"id": "910"
					},
					{
						"name": "Aesthetic Medicine",
						"id": "911"
					}
				],
				"cacheable": "false"
			},
			"changeDepartment": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273502273E9,
				"data": [],
				"cacheable": "false"
			},
			"extendedFields": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273606076E9,
				"data": [
					{
						"stao": "FamilyPlanning",
						"fields": [
							"PPMHCVRPURPOSEOFVISIT",
							"PPMHCVRINTERPRETERNEEDED",
							"PPMHCVRNUMBEROFPREGNANCIES",
							"PPMHCVRNUMBEROFBIRTHS",
							"PPMHCVRLASTPREGNANCYENDED",
							"PPMHCVRPRIORCONTRACEPTIVEMETHOD1",
							"PPMHCVRPRIORCONTRACEPTIVEMETHOD2",
							"PPMHCVRAFTERCONTRACEPTIVEMETHOD1",
							"PPMHCVRAFTERCONTRACEPTIVEMETHOD2",
							"PPMHCVRNOCONTRACEPTIVEREASON",
							"PPMHCVRPREGNANCYTEST",
							"PPMHCVRIFPOSITIVEWASPREGNANCY",
							"PPMHCVRROUTINEMEDICALSERVICES",
							"PPMHCVROTHERMEDICALSERVICES",
							"PPMHCVRLABSERVICES",
							"PPMHCVRREFERRINGFORNONFAMILYPLANNINGSVCS",
							"PPMHCVRSTDTESTSDIAGNOSES",
							"PPMHCVRSTDTREATMENTS",
							"PPMHCVRHIVPRETESTCOUNSELING",
							"PPMHCVRHIVTEST",
							"PPMHCVRHIVTESTRESULT",
							"PPMHCVRHIVPOSTTESTCOUNSELING",
							"PPMHCVRMEDICALPROVIDER",
							"PPMHCVRCOUNSELINGSERVICES",
							"PPMHCVRCOUNSELINGPROVIDER"
						],
						"title": "Family Planning"
					}
				],
				"cacheable": "false"
			},
			"providerNumberCategories": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.7089327355566E9,
				"data": [
					{
						"medicalGroupNumbers": [],
						"providerNumbers": []
					}
				],
				"cacheable": "false"
			},
			"supervisingProviderMedicalGroupEnrollmentStatus": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273501574E9,
				"data": [],
				"cacheable": "false"
			},
			"oppsAddendumbs": {
				"data": [],
				"cacheable": "false"
			},
			"typeOfBill": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273566817E9,
				"data": [
					{
						"name": "Hospital Inpatient (Inc. Part A)",
						"id": "1",
						"code": "11"
					},
					{
						"name": "Hospital Inpatient (Only Part B)",
						"id": "2",
						"code": "12"
					},
					{
						"name": "Hospital Outpatient",
						"id": "3",
						"code": "13"
					},
					{
						"name": "Rural Health Clinic",
						"id": "4",
						"code": "71"
					},
					{
						"name": "Renal Dialysis Center",
						"id": "5",
						"code": "72"
					},
					{
						"name": "Free-Standing",
						"id": "6",
						"code": "73"
					},
					{
						"name": "ORF",
						"id": "7",
						"code": "74"
					},
					{
						"name": "CORF",
						"id": "8",
						"code": "75"
					},
					{
						"name": "CMHC",
						"id": "9",
						"code": "76"
					},
					{
						"name": "Ambulatory Surgical Center",
						"id": "10",
						"code": "83"
					},
					{
						"name": "Freestanding Birthing Center",
						"id": "11",
						"code": "84"
					},
					{
						"name": "Critical Access Hospital",
						"id": "12",
						"code": "85"
					},
					{
						"name": "Other",
						"id": "13",
						"code": "79"
					},
					{
						"name": "Hospital Other",
						"id": "14",
						"code": "14"
					},
					{
						"name": "Special Facility Other",
						"id": "15",
						"code": "89"
					},
					{
						"name": "Federally Qualified Health Center",
						"id": "16",
						"code": "77"
					},
					{
						"name": "Home Health Services Under Plan of Treatment",
						"id": "22",
						"code": "32"
					},
					{
						"name": "Religious Nonmedical Health Care Institutions - Outpatient",
						"id": "25",
						"code": "43"
					},
					{
						"name": "Hospice (Hospital-Based)",
						"id": "30",
						"code": "82"
					},
					{
						"name": "Licensed Freestanding Emergency Medical Facility",
						"id": "28",
						"code": "78"
					},
					{
						"name": "Hospice (Non-Hospital-Based)",
						"id": "29",
						"code": "81"
					},
					{
						"name": "Skilled Nursing Outpatient",
						"id": "20",
						"code": "23"
					},
					{
						"name": "Skilled Nursing Swing Beds",
						"id": "21",
						"code": "28"
					},
					{
						"name": "Intermediate Care - Level I",
						"id": "26",
						"code": "65"
					},
					{
						"name": "Residential Facility",
						"id": "31",
						"code": "86"
					},
					{
						"name": "Religious Nonmedical Health Care Institutions - Inpatient (Inc. Part A)",
						"id": "24",
						"code": "41"
					},
					{
						"name": "Hospital Swing Beds",
						"id": "17",
						"code": "18"
					},
					{
						"name": "Home Health Services Not Under Plan of Treatment",
						"id": "23",
						"code": "34"
					},
					{
						"name": "Skilled Nursing Inpatient (Inc. Part A)",
						"id": "18",
						"code": "21"
					},
					{
						"name": "Intermediate Care - Level II",
						"id": "27",
						"code": "66"
					},
					{
						"name": "Skilled Nursing Inpatient (Only Part B)",
						"id": "19",
						"code": "22"
					},
					{
						"name": "Skilled Nursing Intermediate Care - Level I",
						"id": "37",
						"code": "25"
					},
					{
						"name": "Skilled Nursing Intermediate Care - Level II",
						"id": "38",
						"code": "26"
					},
					{
						"name": "Freestanding Non-residential Opiod Treatment Program",
						"id": "57",
						"code": "87"
					}
				],
				"cacheable": "false"
			},
			"splitIntoDepartmentDetails": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273546991E9,
				"data": [],
				"cacheable": "false"
			},
			"npiNumbers": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273503085E9,
				"data": [],
				"cacheable": "false"
			},
			"routeClaimDetails": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273530896E9,
				"data": [],
				"cacheable": "false"
			},
			"insurancePackage": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273547239E9,
				"data": [],
				"cacheable": "false"
			},
			"practiceSettings": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273495154E9,
				"data": [
					{
						"value": "ALL",
						"key": "Advice Rules"
					},
					{
						"value": "",
						"key": "Advice Rules Start Date"
					},
					{
						"value": "",
						"key": "Allowed Claim Formats"
					},
					{
						"value": "",
						"key": "Allow TIN Overrides"
					},
					{
						"value": "",
						"key": "Anesthesia: Default Incomplete Direction"
					},
					{
						"value": "",
						"key": "Fee Schedule Time Increment"
					},
					{
						"value": "",
						"key": "Claim Custom Fields"
					},
					{
						"value": "",
						"key": "Charge Creation Rounding"
					},
					{
						"value": "\tNDCCode\tPhysicalMedicine\tReferenceLab",
						"key": "Available Service Type Add-Ons"
					},
					{
						"value": "\tNDCCode\tPhysicalMedicine\tReferenceLab",
						"key": "Available Service Type Add-Ons Without Department ID"
					},
					{
						"value": "SIMPLE",
						"key": "Available Enrollment Parameters"
					},
					{
						"value": "10/01/2015",
						"key": "ICD-10 Switchover Date"
					},
					{
						"value": "10/01/2015",
						"key": "ICD-10 Switchover Date Without Department ID"
					},
					{
						"value": "",
						"key": "ICD-10 Downconversion Waiver Signed"
					},
					{
						"value": "",
						"key": "ICD-10 Downconversion Waiver Signed Default"
					},
					{
						"value": "",
						"key": "Courtesy Bill If Not Accepting Assignment"
					},
					{
						"value": "",
						"key": "Client Configurable Rules Engine"
					},
					{
						"value": "",
						"key": "Standard Hospital Configuration Setting"
					},
					{
						"value": "",
						"key": "Clinicals/CommEnt CCM Workflow"
					},
					{
						"value": "",
						"key": "24 Other Diagnosis Codes Beta"
					},
					{
						"value": "",
						"key": "athenaCollector Plus Customer"
					},
					{
						"value": "OFF",
						"key": "athenaOne Enhanced Claim Resolution"
					},
					{
						"value": "",
						"key": "Claim Custom Fields"
					},
					{
						"value": "ALL",
						"key": "Advice Rules"
					},
					{
						"value": "",
						"key": "Advice Rules Start Date"
					},
					{
						"value": "",
						"key": "Allow TIN Overrides"
					},
					{
						"value": "",
						"key": "Anesthesia: Default Incomplete Direction"
					},
					{
						"value": "",
						"key": "Fee Schedule Time Increment"
					},
					{
						"value": "NEAREST",
						"key": "Charge Creation Rounding"
					},
					{
						"value": "SIMPLE",
						"key": "Available Enrollment Parameters"
					}
				],
				"cacheable": "false"
			},
			"oppsAddendumes": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273508611E9,
				"data": [],
				"cacheable": "false"
			},
			"extraClaimFields": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273560761E9,
				"data": [
					{
						"claimId": "30887",
						"data": "ECB7AC74-9929-11EE-A4AC-349A1489E5C6",
						"fieldName": "RULES2CORRELATIONID"
					},
					{
						"claimId": "30887",
						"data": null,
						"fieldName": "SELECTEDFORMAT1"
					},
					{
						"claimId": "30887",
						"data": null,
						"fieldName": "SELECTEDFORMAT2"
					}
				],
				"cacheable": "false"
			},
			"localClaimWorklistCategories": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273542344E9,
				"data": [],
				"cacheable": "false"
			},
			"physicalAddresses": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273518356E9,
				"data": [],
				"cacheable": "false"
			},
			"governmentFundedTypes": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273488448E9,
				"data": [
					{
						"name": "Medicare Replacement/Advantage",
						"id": "1"
					},
					{
						"name": "Medicaid Replacement",
						"id": "2"
					},
					{
						"name": "Medicaid",
						"id": "3"
					},
					{
						"name": "Medicare",
						"id": "4"
					},
					{
						"name": "TRICARE",
						"id": "5"
					},
					{
						"name": "CHAMPVA",
						"id": "6"
					}
				],
				"cacheable": "false"
			},
			"claimDocumentDetails": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273502381E9,
				"data": [],
				"cacheable": "false"
			},
			"accessibleResources": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273535046E9,
				"data": [
					{
						"resources": []
					}
				],
				"cacheable": "false"
			},
			"routingBcbsDestinations": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.7089327351624E9,
				"data": [
					{
						"bcbsDestinations": []
					}
				],
				"cacheable": "false"
			},
			"siblingClaimSavedScrubDetails": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273516164E9,
				"data": [],
				"cacheable": "false"
			},
			"ansiClaimFillingIndicators": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273602249E9,
				"data": [
					{
						"ansiCode": "09",
						"id": 1
					},
					{
						"ansiCode": "10",
						"id": 2
					},
					{
						"ansiCode": "11",
						"id": 3
					},
					{
						"ansiCode": "12",
						"id": 4
					},
					{
						"ansiCode": "13",
						"id": 5
					},
					{
						"ansiCode": "14",
						"id": 6
					},
					{
						"ansiCode": "15",
						"id": 7
					},
					{
						"ansiCode": "16",
						"id": 8
					},
					{
						"ansiCode": "AM",
						"id": 9
					},
					{
						"ansiCode": "BL",
						"id": 10
					},
					{
						"ansiCode": "BL",
						"id": 11
					},
					{
						"ansiCode": "CH",
						"id": 12
					},
					{
						"ansiCode": "CI",
						"id": 13
					},
					{
						"ansiCode": "DS",
						"id": 14
					},
					{
						"ansiCode": "HM",
						"id": 15
					},
					{
						"ansiCode": "LI",
						"id": 16
					},
					{
						"ansiCode": "LM",
						"id": 17
					},
					{
						"ansiCode": "MA",
						"id": 18
					},
					{
						"ansiCode": "MB",
						"id": 19
					},
					{
						"ansiCode": "MC",
						"id": 20
					},
					{
						"ansiCode": "OF",
						"id": 21
					},
					{
						"ansiCode": "TV",
						"id": 22
					},
					{
						"ansiCode": "VA",
						"id": 23
					},
					{
						"ansiCode": "WC",
						"id": 24
					},
					{
						"ansiCode": "ZZ",
						"id": 25
					},
					{
						"ansiCode": "FI",
						"id": 26
					}
				],
				"cacheable": "false"
			},
			"providerNumbers": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273486206E9,
				"data": [],
				"cacheable": "false"
			},
			"modifierProcedureCode": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273563226E9,
				"data": [],
				"cacheable": "false"
			},
			"procedureCodeModifiers": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273581084E9,
				"data": [
					{
						"deleted": null,
						"id": "04",
						"description": "PRE-DIABETES: 1ST MONTH ACT FEE, MONTHLY PPPM, INCL DEVICES",
						"affectsFeeYN": "Y",
						"appearsOnClaimYN": "N"
					},
					{
						"deleted": null,
						"id": "15",
						"description": "PREVENTIVE, INITIAL VISIT, INCLUDES DEVICE",
						"affectsFeeYN": "Y",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "08",
						"description": "CHRONIC PATHWAYS: VISIT MONTH 5+ REOCCURRING",
						"affectsFeeYN": "Y",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "HO",
						"description": "MASTERS DEGREE LEVEL",
						"affectsFeeYN": "Y",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "12",
						"description": "CHRONIC PATHWAYS: ENGAGEMENT, MONTHLY PPPM FEE",
						"affectsFeeYN": "Y",
						"appearsOnClaimYN": "N"
					},
					{
						"deleted": null,
						"id": "13",
						"description": "CHRONIC PATHWAYS: INITIAL VISIT, INCLUDES DEVICE",
						"affectsFeeYN": "Y",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "16",
						"description": "PREVENTIVE, VISIT MONTH 4+, REOCCURRING",
						"affectsFeeYN": "Y",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "07",
						"description": "CHRONIC PATHWAYS: INITIAL VISIT, INCLUDES DEVICE",
						"affectsFeeYN": "Y",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "01",
						"description": "DIABETES: 1ST MONTH ACT FEE, MONTHLY PPPM, INCL DEVICES",
						"affectsFeeYN": "Y",
						"appearsOnClaimYN": "N"
					},
					{
						"deleted": null,
						"id": "03",
						"description": "DIABETES: ENGAGEMENT MAINTENANCE FEE",
						"affectsFeeYN": "Y",
						"appearsOnClaimYN": "N"
					},
					{
						"deleted": null,
						"id": "05",
						"description": "PRE-DIABETES: ENGAGEMENT MONTHLY PPPM, INCL DEVICES",
						"affectsFeeYN": "Y",
						"appearsOnClaimYN": "N"
					},
					{
						"deleted": null,
						"id": "14",
						"description": "CHRONIC PATHWAYS: VISIT MONTH 4+ REOCCURRING",
						"affectsFeeYN": "Y",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "68",
						"description": "OBESITY STEP THERAPY: VISIT MONTH 4+ REOCCURRING",
						"affectsFeeYN": "Y",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "10",
						"description": "PREVENTIVE, VISIT MONTH 5+, REOCCURRING",
						"affectsFeeYN": "Y",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "27",
						"description": "CH/RX: INITIAL VISIT, INCLUDES DEVICE",
						"affectsFeeYN": "Y",
						"appearsOnClaimYN": "N"
					},
					{
						"deleted": null,
						"id": "28",
						"description": "CH/RX: VISIT MONTH 5+ REOCCURRING",
						"affectsFeeYN": "Y",
						"appearsOnClaimYN": "N"
					},
					{
						"deleted": null,
						"id": "67",
						"description": "OBESITY STEP THERAPY: INITIAL VISIT, INCLUDES DEVICE",
						"affectsFeeYN": "Y",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "21",
						"description": "Prolonged Evaluation and Management Services",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "22",
						"description": "Unusual Procedural Services",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "24",
						"description": "Unrelated Evaluation and Management Service by the Same Physician During a Postoperative Period",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "25",
						"description": "LS: INITIAL VISIT, INCLUDES DEVICE",
						"affectsFeeYN": "Y",
						"appearsOnClaimYN": "N"
					},
					{
						"deleted": null,
						"id": "26",
						"description": "LS: VISIT MONTH 5+ REOCCURRING",
						"affectsFeeYN": "Y",
						"appearsOnClaimYN": "N"
					},
					{
						"deleted": null,
						"id": "32",
						"description": "Mandated Services",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "47",
						"description": "Anesthesia by Surgeon",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "50",
						"description": "Bilateral Procedure",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "51",
						"description": "Multiple Procedures",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "52",
						"description": "Reduced Services",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "53",
						"description": "Discontinued Procedure",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "54",
						"description": "Surgical Care Only",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "55",
						"description": "Postoperative Management Only",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "56",
						"description": "Preoperative Management Only",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "57",
						"description": "Decision for Surgery",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "58",
						"description": "Staged or Related Procedure or Service by the Same Physician during the Post Op Period",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "59",
						"description": "Distinct Procedural Service",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "60",
						"description": "Altered Surgical Field",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "62",
						"description": "Two Surgeons",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "63",
						"description": "Procedure Performed on Infants less than 4 kg",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "66",
						"description": "Surgical Team",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "76",
						"description": "Repeat Procedure by Same Physician",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "77",
						"description": "Repeat Procedure by Another Physician",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "78",
						"description": "Return to the OR for a Related Procedure During the Post Op Period",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "79",
						"description": "Unrelated Procedure or Service by the Same Physician During the Post Op Period",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "80",
						"description": "Assistant Surgeon",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "81",
						"description": "Minimum Assistant Surgeon",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "82",
						"description": "Assistant Surgeon (when qualified resident surgeon not available)",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "90",
						"description": "Reference (Outside) Laboratory",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "91",
						"description": "Repeat Clinical Diagnostic Laboratory Test",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "99",
						"description": "Multiple Modifiers",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "AF",
						"description": "Specialty physician",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "AG",
						"description": "Primary physician",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "AK",
						"description": "Non participating physician",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "AP",
						"description": "Determination of refractive state not performed with diagnostic ophthalmological exam",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "AS",
						"description": "PA, NP, CNS services for assistant at surgery",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "E1",
						"description": "Upper left, eyelid",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "E2",
						"description": "Lower left, eyelid",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "E3",
						"description": "Upper right, eyelid",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "E4",
						"description": "Lower right, eyelid",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "EJ",
						"description": "Subsequent claims for a defined course of therapy",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "EP",
						"description": "Service provided as part of Medicaid (EPSDT) program",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "F1",
						"description": "Left hand, second digit",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "F2",
						"description": "Left hand, third digit",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "F3",
						"description": "Left hand, fourth digit",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "F4",
						"description": "Left hand, fifth digit",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "F5",
						"description": "Right hand, thumb",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "F6",
						"description": "Right hand, second digit",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "F7",
						"description": "Right hand, third digit",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "F8",
						"description": "Right hand, fourth digit",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "F9",
						"description": "Right hand, fifth digit",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "FA",
						"description": "Left hand, thumb",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "GF",
						"description": "Non-physician",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "GO",
						"description": "Services delivered under an outpatient occupational therapy plan of care",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "GP",
						"description": "Services delivered under an outpatient physical therapy plan of care",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "GY",
						"description": "Item or service statutorily excluded or does not meet the definition of any Medicare benefit",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "GZ",
						"description": "Item or service expected to be denied as not reasonable and necessary",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "KX",
						"description": "Specific required documentation on file",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "LT",
						"description": "Left side",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "Q6",
						"description": "Service furnished by a locum tenens physician",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "QW",
						"description": "CLIA waived test",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "RT",
						"description": "Right side",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "SA",
						"description": "Nurse practitioner rendering service in collaboration with a physician",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "SB",
						"description": "Nurse midwife",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "SL",
						"description": "State supplied vaccine",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "T1",
						"description": "Left foot, second digit",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "T2",
						"description": "Left foot, third digit",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "T3",
						"description": "Left foot, fourth digit",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "T4",
						"description": "Left foot, fifth digit",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "T5",
						"description": "Right foot, great toe",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "T6",
						"description": "Right foot, second digit",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "T7",
						"description": "Right foot, third digit",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "T8",
						"description": "Right foot, fourth digit",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "T9",
						"description": "Right foot, fifth digit",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "TA",
						"description": "Left foot, great toe",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "TC",
						"description": "Technical component",
						"affectsFeeYN": "Y",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "02",
						"description": "DIABETES: ENGAGEMENT MONTHLY PPPM, INCL DEVICES",
						"affectsFeeYN": "Y",
						"appearsOnClaimYN": "N"
					},
					{
						"deleted": null,
						"id": "06",
						"description": "PRE-DIABETES: ENGAGEMENT MAINTENANCE FEE",
						"affectsFeeYN": "Y",
						"appearsOnClaimYN": "N"
					},
					{
						"deleted": null,
						"id": "95",
						"description": "SYNCHRONOUS TELEMEDICINE SERVICES RENDERED VIA REAL TIME AUDIO AND VIDEO TELECOMMUNICATIONS",
						"affectsFeeYN": "N",
						"appearsOnClaimYN": "Y"
					},
					{
						"deleted": null,
						"id": "11",
						"description": "CHRONIC PATHWAYS:  1ST MONTH ENROLLMENT + PPPM FEE",
						"affectsFeeYN": "Y",
						"appearsOnClaimYN": "N"
					},
					{
						"deleted": null,
						"id": "09",
						"description": "PREVENTIVE, INITIAL VISIT, INCLUDES DEVICE",
						"affectsFeeYN": "Y",
						"appearsOnClaimYN": "Y"
					}
				],
				"cacheable": "false"
			},
			"providerEnrollmentStatuses": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273529267E9,
				"data": [
					{
						"legacyNumber": null,
						"addressId": null,
						"credentialingStatusId": "PAR",
						"providerId": "13",
						"enrollmentCategoryId": "7",
						"insurancePackageId": "1352"
					}
				],
				"cacheable": "false"
			},
			"medicalGroupEnrollmentStatuses": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273501495E9,
				"data": [
					{
						"addressId": null,
						"legacyNumber": null,
						"typeOfBill": {
							"id": null,
							"code": null
						},
						"payerNpiNumber": "1265050595",
						"verifiedStatusId": "NOTREQUIRED",
						"referenceName": "VIDA MEDICAL P.C.",
						"placeOfServiceId": null,
						"payToStatusId": "COMPLETE",
						"ansiSpecialtyId": null,
						"claimType": null,
						"payToAddressId": null,
						"credentialingStatusId": "PAR",
						"departmentIds": [],
						"id": "143",
						"enrollmentCategoryId": "7"
					}
				],
				"cacheable": "false"
			},
			"visitDetails": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273507322E9,
				"data": [],
				"cacheable": "false"
			},
			"cptToIcd10PcsCrossWalk": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.7089327355917E9,
				"data": [],
				"cacheable": "false"
			},
			"relationshipToInsured": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273483646E9,
				"data": [
					{
						"ansiCode": "18",
						"name": "Self",
						"id": "1"
					},
					{
						"ansiCode": "01",
						"name": "Spouse",
						"id": "2"
					},
					{
						"ansiCode": "19",
						"name": "Child",
						"id": "3"
					},
					{
						"ansiCode": "G8",
						"name": "Other",
						"id": "4"
					},
					{
						"ansiCode": "04",
						"name": "Grandparent",
						"id": "5"
					},
					{
						"ansiCode": "05",
						"name": "Grandchild",
						"id": "6"
					},
					{
						"ansiCode": "07",
						"name": "Nephew or Niece",
						"id": "7"
					},
					{
						"ansiCode": "09",
						"name": "Adopted Child",
						"id": "8"
					},
					{
						"ansiCode": "10",
						"name": "Foster Child",
						"id": "9"
					},
					{
						"ansiCode": "15",
						"name": "Ward",
						"id": "10"
					},
					{
						"ansiCode": "17",
						"name": "Stepson or Stepdaughter",
						"id": "11"
					},
					{
						"ansiCode": "20",
						"name": "Employee",
						"id": "12"
					},
					{
						"ansiCode": "21",
						"name": "Unknown",
						"id": "13"
					},
					{
						"ansiCode": "22",
						"name": "Handicapped Dependent",
						"id": "14"
					},
					{
						"ansiCode": "23",
						"name": "Sponsored Dependent",
						"id": "15"
					},
					{
						"ansiCode": "24",
						"name": "Dependent of a Minor Dependent",
						"id": "16"
					},
					{
						"ansiCode": "29",
						"name": "Significant Other",
						"id": "17"
					},
					{
						"ansiCode": "32",
						"name": "Mother",
						"id": "18"
					},
					{
						"ansiCode": "33",
						"name": "Father",
						"id": "19"
					},
					{
						"ansiCode": "34",
						"name": "Other Adult",
						"id": "20"
					},
					{
						"ansiCode": "36",
						"name": "Emancipated Minor",
						"id": "21"
					},
					{
						"ansiCode": "39",
						"name": "Organ Donor",
						"id": "22"
					},
					{
						"ansiCode": "40",
						"name": "Cadaver Donor",
						"id": "23"
					},
					{
						"ansiCode": "41",
						"name": "Injured Plaintiff",
						"id": "24"
					},
					{
						"ansiCode": "43",
						"name": "Child (Ins. not Financially Respons.)",
						"id": "25"
					},
					{
						"ansiCode": "53",
						"name": "Life Partner",
						"id": "26"
					},
					{
						"ansiCode": "43",
						"name": "Child (Father's Ins., Ins. not Financially Respons.)",
						"id": "30"
					},
					{
						"ansiCode": "19",
						"name": "Child (Father's Insurance)",
						"id": "28"
					},
					{
						"ansiCode": "43",
						"name": "Child (Mother's Ins., Ins. not Financially Respons.)",
						"id": "29"
					},
					{
						"ansiCode": "17",
						"name": "Stepson or Stepdaughter (Stepmother's Insurance)",
						"id": "31"
					},
					{
						"ansiCode": "17",
						"name": "Stepson or Stepdaughter (Stepfather's Insurance)",
						"id": "32"
					},
					{
						"ansiCode": "19",
						"name": "Child (Mother's Insurance)",
						"id": "27"
					}
				],
				"cacheable": "false"
			},
			"departments": {
				"entityType": "CONTEXT",
				"entityName": "departments",
				"dataSource": "PAYLOAD",
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273503972E9,
				"data": [
					{
						"hospitalDepartmentYN": null,
						"communicatorDisplayName": null,
						"campusLocation": null,
						"providerGroupId": 1,
						"address": {
							"zip": "94104-4302",
							"city": "SAN FRANCISCO",
							"street2": null,
							"street1": "100 MONTGOMERY ST STE 750",
							"state": "CA"
						},
						"id": "1",
						"placeOfService": {
							"type": "02"
						}
					}
				],
				"cacheable": "false"
			},
			"insuranceBestResponseDetails": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.7089327350714E9,
				"data": [],
				"cacheable": "false"
			},
			"savedScrubDetails": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273514043E9,
				"data": [
					{
						"value": "1",
						"transactionId": null,
						"transferType": "1",
						"activeYN": "Y",
						"claimId": 18889,
						"created": "09/13/2023",
						"claimServiceDate": "08/01/2023",
						"billingBatchId": null,
						"fieldName": "HEALTHCARECLAIMTYPEID"
					},
					{
						"value": "1",
						"transactionId": null,
						"transferType": "1",
						"activeYN": "N",
						"claimId": 18889,
						"created": "09/19/2023",
						"claimServiceDate": "08/01/2023",
						"billingBatchId": 683,
						"fieldName": "HEALTHCARECLAIMTYPEID"
					},
					{
						"value": "1",
						"transactionId": null,
						"transferType": "1",
						"activeYN": "N",
						"claimId": 21373,
						"created": "10/12/2023",
						"claimServiceDate": "09/01/2023",
						"billingBatchId": 736,
						"fieldName": "HEALTHCARECLAIMTYPEID"
					},
					{
						"value": "1",
						"transactionId": null,
						"transferType": "1",
						"activeYN": "Y",
						"claimId": 21373,
						"created": "10/11/2023",
						"claimServiceDate": "09/01/2023",
						"billingBatchId": null,
						"fieldName": "HEALTHCARECLAIMTYPEID"
					},
					{
						"value": "1",
						"transactionId": null,
						"transferType": "1",
						"activeYN": "N",
						"claimId": 27867,
						"created": "11/15/2023",
						"claimServiceDate": "10/02/2023",
						"billingBatchId": 833,
						"fieldName": "HEALTHCARECLAIMTYPEID"
					},
					{
						"value": "1",
						"transactionId": null,
						"transferType": "1",
						"activeYN": "Y",
						"claimId": 27867,
						"created": "11/14/2023",
						"claimServiceDate": "10/02/2023",
						"billingBatchId": null,
						"fieldName": "HEALTHCARECLAIMTYPEID"
					},
					{
						"value": "1",
						"transactionId": null,
						"transferType": "1",
						"activeYN": "Y",
						"claimId": 30887,
						"created": "12/12/2023",
						"claimServiceDate": "11/01/2023",
						"billingBatchId": null,
						"fieldName": "HEALTHCARECLAIMTYPEID"
					},
					{
						"value": "1",
						"transactionId": null,
						"transferType": "1",
						"activeYN": "N",
						"claimId": 30887,
						"created": "12/22/2023",
						"claimServiceDate": "11/01/2023",
						"billingBatchId": 929,
						"fieldName": "HEALTHCARECLAIMTYPEID"
					},
					{
						"value": "1",
						"transactionId": null,
						"transferType": "1",
						"activeYN": "Y",
						"claimId": 25367,
						"created": "11/10/2023",
						"claimServiceDate": "10/01/2023",
						"billingBatchId": null,
						"fieldName": "HEALTHCARECLAIMTYPEID"
					}
				],
				"cacheable": "false"
			},
			"overrideLegacyRuleIds": {
				"data": [
					"1.11619",
					"1.17362",
					"1.17341",
					"1.17338",
					"1.17340",
					"1.17372",
					"1.17343",
					"1.17350",
					"1.5541",
					"1.10290",
					"1.17383",
					"1.9225",
					"1.17328",
					"1.11662",
					"1.17369",
					"1.11670",
					"1.16352",
					"1.17387",
					"1.17348",
					"1.12565",
					"1.1525",
					"1.4746",
					"1.17326",
					"1.17370",
					"1.17358",
					"1.17352",
					"1.2935",
					"1.12615",
					"1.17327",
					"1.11579",
					"1.11589",
					"1.17337",
					"1.195"
				],
				"cacheable": "false"
			},
			"payToAddresses": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273508777E9,
				"data": [],
				"cacheable": "false"
			},
			"historicalExtraClaimFields": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273546406E9,
				"data": [],
				"cacheable": "false"
			},
			"overrideBizReqIds": {
				"data": [
					"180",
					"6647",
					"2"
				],
				"cacheable": "false"
			},
			"providers": {
				"entityType": "CONTEXT",
				"rules2UpdatedTime": "",
				"entityName": "providers",
				"dataSource": "PAYLOAD",
				"updated_timestamp": 1.70893273488049E9,
				"data": null,
				"cacheable": "false"
			},
			"clientConfigurable": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273555853E9,
				"data": [
					{
						"matchingRuleIds": [],
						"customRuleCategoryId": "8"
					}
				],
				"cacheable": "false"
			},
			"state": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.7089327357873E9,
				"data": [
					{
						"name": "AL-Alabama",
						"id": "AL"
					},
					{
						"name": "AK-Alaska",
						"id": "AK"
					},
					{
						"name": "AZ-Arizona",
						"id": "AZ"
					},
					{
						"name": "AR-Arkansas",
						"id": "AR"
					},
					{
						"name": "CA-California",
						"id": "CA"
					},
					{
						"name": "CO-Colorado",
						"id": "CO"
					},
					{
						"name": "CT-Connecticut",
						"id": "CT"
					},
					{
						"name": "DE-Delaware",
						"id": "DE"
					},
					{
						"name": "FL-Florida",
						"id": "FL"
					},
					{
						"name": "GA-Georgia",
						"id": "GA"
					},
					{
						"name": "HI-Hawaii",
						"id": "HI"
					},
					{
						"name": "ID-Idaho",
						"id": "ID"
					},
					{
						"name": "IL-Illinois",
						"id": "IL"
					},
					{
						"name": "IN-Indiana",
						"id": "IN"
					},
					{
						"name": "IA-Iowa",
						"id": "IA"
					},
					{
						"name": "KS-Kansas",
						"id": "KS"
					},
					{
						"name": "KY-Kentucky",
						"id": "KY"
					},
					{
						"name": "LA-Louisiana",
						"id": "LA"
					},
					{
						"name": "ME-Maine",
						"id": "ME"
					},
					{
						"name": "MD-Maryland",
						"id": "MD"
					},
					{
						"name": "MA-Massachusetts",
						"id": "MA"
					},
					{
						"name": "MI-Michigan",
						"id": "MI"
					},
					{
						"name": "MN-Minnesota",
						"id": "MN"
					},
					{
						"name": "MS-Mississippi",
						"id": "MS"
					},
					{
						"name": "MO-Missouri",
						"id": "MO"
					},
					{
						"name": "MT-Montana",
						"id": "MT"
					},
					{
						"name": "NE-Nebraska",
						"id": "NE"
					},
					{
						"name": "NV-Nevada",
						"id": "NV"
					},
					{
						"name": "NH-New Hampshire",
						"id": "NH"
					},
					{
						"name": "NJ-New Jersey",
						"id": "NJ"
					},
					{
						"name": "NM-New Mexico",
						"id": "NM"
					},
					{
						"name": "NY-New York",
						"id": "NY"
					},
					{
						"name": "NC-North Carolina",
						"id": "NC"
					},
					{
						"name": "ND-North Dakota",
						"id": "ND"
					},
					{
						"name": "OH-Ohio",
						"id": "OH"
					},
					{
						"name": "OK-Oklahoma",
						"id": "OK"
					},
					{
						"name": "OR-Oregon",
						"id": "OR"
					},
					{
						"name": "PA-Pennsylvania",
						"id": "PA"
					},
					{
						"name": "RI-Rhode Island",
						"id": "RI"
					},
					{
						"name": "SC-South Carolina",
						"id": "SC"
					},
					{
						"name": "SD-South Dakota",
						"id": "SD"
					},
					{
						"name": "TN-Tennessee",
						"id": "TN"
					},
					{
						"name": "TX-Texas",
						"id": "TX"
					},
					{
						"name": "UT-Utah",
						"id": "UT"
					},
					{
						"name": "VT-Vermont",
						"id": "VT"
					},
					{
						"name": "VA-Virginia",
						"id": "VA"
					},
					{
						"name": "WA-Washington",
						"id": "WA"
					},
					{
						"name": "WV-West Virginia",
						"id": "WV"
					},
					{
						"name": "WI-Wisconsin",
						"id": "WI"
					},
					{
						"name": "WY-Wyoming",
						"id": "WY"
					},
					{
						"name": "AS-American Samoa",
						"id": "AS"
					},
					{
						"name": "DC-District of Columbia",
						"id": "DC"
					},
					{
						"name": "FM-Federated States of Micronesia",
						"id": "FM"
					},
					{
						"name": "GU-Guam",
						"id": "GU"
					},
					{
						"name": "MH-Marshall Islands",
						"id": "MH"
					},
					{
						"name": "MP-Northern Mariana Islands",
						"id": "MP"
					},
					{
						"name": "PW-Palau",
						"id": "PW"
					},
					{
						"name": "PR-Puerto Rico",
						"id": "PR"
					},
					{
						"name": "VI-Virgin Islands",
						"id": "VI"
					},
					{
						"name": "AE-Armed Forces Africa",
						"id": "AE"
					},
					{
						"name": "AA-Armed Forces Americas",
						"id": "AA"
					},
					{
						"name": "AP-Armed Forces Pacific",
						"id": "AP"
					}
				],
				"cacheable": "false"
			},
			"changeMedicalGroups": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273517141E9,
				"data": [],
				"cacheable": "false"
			},
			"ansiSpecialties": {
				"entityType": "ROOT",
				"entityName": "ansispecialties",
				"dataSource": "PAYLOAD",
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273508388E9,
				"data": [
					{
						"ansiCode": "101Y00000X",
						"name": "Behavioral Health & Social Service Providers : Counselor",
						"id": "1"
					},
					{
						"ansiCode": "101YA0400X",
						"name": "Behavioral Health & Social Service Providers : Counselor : Addiction (Substance Use Disorder)",
						"id": "2"
					},
					{
						"ansiCode": "101YM0800X",
						"name": "Behavioral Health & Social Service Providers : Counselor : Mental Health",
						"id": "3"
					},
					{
						"ansiCode": "101YP1600X",
						"name": "Behavioral Health & Social Service Providers : Counselor : Pastoral",
						"id": "4"
					},
					{
						"ansiCode": "101YP2500X",
						"name": "Behavioral Health & Social Service Providers : Counselor : Professional",
						"id": "5"
					},
					{
						"ansiCode": "101YS0200X",
						"name": "Behavioral Health & Social Service Providers : Counselor : School",
						"id": "6"
					},
					{
						"ansiCode": "103G00000X",
						"name": "Behavioral Health & Social Service Providers : Neuropsychologist",
						"id": "7"
					},
					{
						"ansiCode": "103T00000X",
						"name": "Behavioral Health & Social Service Providers : Psychologist",
						"id": "9"
					},
					{
						"ansiCode": "103TA0700X",
						"name": "Behavioral Health & Social Service Providers : Psychologist : Adult Development & Aging",
						"id": "11"
					},
					{
						"ansiCode": "103TC0700X",
						"name": "Behavioral Health & Social Service Providers : Psychologist : Clinical",
						"id": "13"
					},
					{
						"ansiCode": "103TC1900X",
						"name": "Behavioral Health & Social Service Providers : Psychologist : Counseling",
						"id": "14"
					},
					{
						"ansiCode": "103TF0000X",
						"name": "Behavioral Health & Social Service Providers : Psychologist : Family",
						"id": "18"
					},
					{
						"ansiCode": "103TH0100X",
						"name": "Behavioral Health & Social Service Providers : Psychologist : Health",
						"id": "20"
					},
					{
						"ansiCode": "103TM1800X",
						"name": "Behavioral Health & Social Service Providers : Psychologist : Mental Retardation & Developmental Disabilities",
						"id": "22"
					},
					{
						"ansiCode": "103TR0400X",
						"name": "Behavioral Health & Social Service Providers : Psychologist : Rehabilitation",
						"id": "26"
					},
					{
						"ansiCode": "1041C0700X",
						"name": "Behavioral Health & Social Service Providers : Social Worker : Clinical",
						"id": "30"
					},
					{
						"ansiCode": "106H00000X",
						"name": "Behavioral Health & Social Service Providers : Marriage & Family Therapist",
						"id": "32"
					},
					{
						"ansiCode": "111N00000X",
						"name": "Chiropractic Providers : Chiropractor",
						"id": "33"
					},
					{
						"ansiCode": "111NN0400X",
						"name": "Chiropractic Providers : Chiropractor : Neurology",
						"id": "35"
					},
					{
						"ansiCode": "111NR0200X",
						"name": "Chiropractic Providers : Chiropractor : Radiology",
						"id": "37"
					},
					{
						"ansiCode": "111NT0100X",
						"name": "Chiropractic Providers : Chiropractor : Thermography",
						"id": "39"
					},
					{
						"ansiCode": "111NX0800X",
						"name": "Chiropractic Providers : Chiropractor : Orthopedic",
						"id": "41"
					},
					{
						"ansiCode": "122300000X",
						"name": "Dental Providers : Dentist",
						"id": "42"
					},
					{
						"ansiCode": "1223E0200X",
						"name": "Dental Providers : Dentist : Endodontics",
						"id": "44"
					},
					{
						"ansiCode": "1223P0106X",
						"name": "Dental Providers : Dentist : Oral and Maxillofacial Pathology",
						"id": "46"
					},
					{
						"ansiCode": "1223P0300X",
						"name": "Dental Providers : Dentist : Periodontics",
						"id": "48"
					},
					{
						"ansiCode": "1223S0112X",
						"name": "Dental Providers : Dentist : Oral and Maxillofacial Surgery",
						"id": "50"
					},
					{
						"ansiCode": "1223X0400X",
						"name": "Dental Providers : Dentist : Orthodontics and Dentofacial Orthopedics",
						"id": "52"
					},
					{
						"ansiCode": "122400000X",
						"name": "Dental Providers : Denturist",
						"id": "53"
					},
					{
						"ansiCode": "126800000X",
						"name": "Dental Providers : Dental Assistant",
						"id": "55"
					},
					{
						"ansiCode": "132700000X",
						"name": "Dietary & Nutritional Service Providers : Dietary Manager",
						"id": "57"
					},
					{
						"ansiCode": "133NN1002X",
						"name": "Dietary & Nutritional Service Providers : Nutritionist : Nutrition, Education",
						"id": "59"
					},
					{
						"ansiCode": "133VN1005X",
						"name": "Dietary & Nutritional Service Providers : Dietitian, Registered : Nutrition, Renal",
						"id": "62"
					},
					{
						"ansiCode": "133VN1006X",
						"name": "Dietary & Nutritional Service Providers : Dietitian, Registered : Nutrition, Metabolic",
						"id": "63"
					},
					{
						"ansiCode": "146M00000X",
						"name": "Emergency Medical Service Providers : Emergency Medical Technician, Intermediate",
						"id": "67"
					},
					{
						"ansiCode": "146N00000X",
						"name": "Emergency Medical Service Providers : Emergency Medical Technician, Basic",
						"id": "68"
					},
					{
						"ansiCode": "152W00000X",
						"name": "Eye and Vision Services Providers : Optometrist",
						"id": "69"
					},
					{
						"ansiCode": "152WC0802X",
						"name": "Eye and Vision Services Providers : Optometrist : Corneal and Contact Management",
						"id": "70"
					},
					{
						"ansiCode": "152WL0500X",
						"name": "Eye and Vision Services Providers : Optometrist : Low Vision Rehabilitation",
						"id": "71"
					},
					{
						"ansiCode": "152WP0200X",
						"name": "Eye and Vision Services Providers : Optometrist : Pediatrics",
						"id": "72"
					},
					{
						"ansiCode": "152WS0006X",
						"name": "Eye and Vision Services Providers : Optometrist : Sports Vision",
						"id": "73"
					},
					{
						"ansiCode": "152WV0400X",
						"name": "Eye and Vision Services Providers : Optometrist : Vision Therapy",
						"id": "74"
					},
					{
						"ansiCode": "152WX0102X",
						"name": "Eye and Vision Services Providers : Optometrist : Occupational Vision",
						"id": "75"
					},
					{
						"ansiCode": "156FC0800X",
						"name": "Eye and Vision Services Providers : Technician/Technologist : Contact Lens",
						"id": "77"
					},
					{
						"ansiCode": "156FX1100X",
						"name": "Eye and Vision Services Providers : Technician/Technologist : Ophthalmic",
						"id": "79"
					},
					{
						"ansiCode": "156FX1201X",
						"name": "Eye and Vision Services Providers : Technician/Technologist : Optometric Assistant",
						"id": "81"
					},
					{
						"ansiCode": "156FX1900X",
						"name": "Eye and Vision Services Providers : Technician/Technologist : Orthoptist",
						"id": "85"
					},
					{
						"ansiCode": "163W00000X",
						"name": "Nursing Service Providers : Registered Nurse",
						"id": "86"
					},
					{
						"ansiCode": "163WA2000X",
						"name": "Nursing Service Providers : Registered Nurse : Administrator",
						"id": "88"
					},
					{
						"ansiCode": "163WC0400X",
						"name": "Nursing Service Providers : Registered Nurse : Case Management",
						"id": "90"
					},
					{
						"ansiCode": "163WC1500X",
						"name": "Nursing Service Providers : Registered Nurse : Community Health",
						"id": "92"
					},
					{
						"ansiCode": "163WC2100X",
						"name": "Nursing Service Providers : Registered Nurse : Continence Care",
						"id": "94"
					},
					{
						"ansiCode": "163WC3500X",
						"name": "Nursing Service Providers : Registered Nurse : Cardiac Rehabilitation",
						"id": "95"
					},
					{
						"ansiCode": "163WD1100X",
						"name": "Nursing Service Providers : Registered Nurse : Dialysis, Peritoneal",
						"id": "97"
					},
					{
						"ansiCode": "163WE0900X",
						"name": "Nursing Service Providers : Registered Nurse : Enterostomal Therapy",
						"id": "99"
					},
					{
						"ansiCode": "163WG0000X",
						"name": "Nursing Service Providers : Registered Nurse : General Practice",
						"id": "101"
					},
					{
						"ansiCode": "163WG0600X",
						"name": "Nursing Service Providers : Registered Nurse : Gerontology",
						"id": "103"
					},
					{
						"ansiCode": "163WH0500X",
						"name": "Nursing Service Providers : Registered Nurse : Hemodialysis",
						"id": "105"
					},
					{
						"ansiCode": "163WI0500X",
						"name": "Nursing Service Providers : Registered Nurse : Infusion Therapy",
						"id": "107"
					},
					{
						"ansiCode": "163WL0100X",
						"name": "Nursing Service Providers : Registered Nurse : Lactation Consultant",
						"id": "109"
					},
					{
						"ansiCode": "163WM0705X",
						"name": "Nursing Service Providers : Registered Nurse : Medical-Surgical",
						"id": "111"
					},
					{
						"ansiCode": "163WN0002X",
						"name": "Nursing Service Providers : Registered Nurse : Neonatal Intensive Care",
						"id": "113"
					},
					{
						"ansiCode": "163WN0003X",
						"name": "Nursing Service Providers : Registered Nurse : Neonatal, Low-Risk",
						"id": "114"
					},
					{
						"ansiCode": "163WN0800X",
						"name": "Nursing Service Providers : Registered Nurse : Neuroscience",
						"id": "116"
					},
					{
						"ansiCode": "163WP0000X",
						"name": "Nursing Service Providers : Registered Nurse : Pain Management",
						"id": "118"
					},
					{
						"ansiCode": "163WP0218X",
						"name": "Nursing Service Providers : Registered Nurse : Pediatric Oncology",
						"id": "120"
					},
					{
						"ansiCode": "163WP0808X",
						"name": "Nursing Service Providers : Registered Nurse : Psych/Mental Health",
						"id": "122"
					},
					{
						"ansiCode": "163WP1700X",
						"name": "Nursing Service Providers : Registered Nurse : Perinatal",
						"id": "124"
					},
					{
						"ansiCode": "163WP2201X",
						"name": "Nursing Service Providers : Registered Nurse : Ambulatory Care",
						"id": "125"
					},
					{
						"ansiCode": "163WR1000X",
						"name": "Nursing Service Providers : Registered Nurse : Reproductive Endocrinology/Infertility",
						"id": "127"
					},
					{
						"ansiCode": "163WS0200X",
						"name": "Nursing Service Providers : Registered Nurse : School",
						"id": "129"
					},
					{
						"ansiCode": "163WW0000X",
						"name": "Nursing Service Providers : Registered Nurse : Wound Care",
						"id": "131"
					},
					{
						"ansiCode": "163WW0101X",
						"name": "Nursing Service Providers : Registered Nurse : Women's Health Care, Ambulatory",
						"id": "132"
					},
					{
						"ansiCode": "163WX0002X",
						"name": "Nursing Service Providers : Registered Nurse : Obstetric, High-Risk",
						"id": "133"
					},
					{
						"ansiCode": "163WX0003X",
						"name": "Nursing Service Providers : Registered Nurse : Obstetric, Inpatient",
						"id": "134"
					},
					{
						"ansiCode": "163WX0106X",
						"name": "Nursing Service Providers : Registered Nurse : Occupational Health",
						"id": "135"
					},
					{
						"ansiCode": "163WX0200X",
						"name": "Nursing Service Providers : Registered Nurse : Oncology",
						"id": "136"
					},
					{
						"ansiCode": "163WX0601X",
						"name": "Nursing Service Providers : Registered Nurse : Otorhinolaryngology & Head-Neck",
						"id": "137"
					},
					{
						"ansiCode": "163WX0800X",
						"name": "Nursing Service Providers : Registered Nurse : Orthopedic",
						"id": "138"
					},
					{
						"ansiCode": "163WX1100X",
						"name": "Nursing Service Providers : Registered Nurse : Ophthalmic",
						"id": "139"
					},
					{
						"ansiCode": "163WX1500X",
						"name": "Nursing Service Providers : Registered Nurse : Ostomy Care",
						"id": "140"
					},
					{
						"ansiCode": "164X00000X",
						"name": "Nursing Service Providers : Licensed Vocational Nurse",
						"id": "142"
					},
					{
						"ansiCode": "170100000X",
						"name": "Other Service Providers : Medical Genetics, Ph.D. Medical Genetics",
						"id": "144"
					},
					{
						"ansiCode": "171W00000X",
						"name": "Other Service Providers : Contractor",
						"id": "146"
					},
					{
						"ansiCode": "171WV0202X",
						"name": "Other Service Providers : Contractor : Vehicle Modifications",
						"id": "148"
					},
					{
						"ansiCode": "172A00000X",
						"name": "Other Service Providers : Driver",
						"id": "149"
					},
					{
						"ansiCode": "174400000X",
						"name": "Other Service Providers : Specialist",
						"id": "151"
					},
					{
						"ansiCode": "1744P3200X",
						"name": "Other Service Providers : Specialist : Prosthetics Case Management",
						"id": "153"
					},
					{
						"ansiCode": "1744R1103X",
						"name": "Other Service Providers : Specialist : Research Data Abstracter/Coder",
						"id": "155"
					},
					{
						"ansiCode": "174MM1900X",
						"name": "Other Service Providers : Veterinarian : Medical Research",
						"id": "157"
					},
					{
						"ansiCode": "175L00000X",
						"name": "Other Service Providers : Homeopath",
						"id": "159"
					},
					{
						"ansiCode": "176B00000X",
						"name": "Other Service Providers : Midwife, Certified",
						"id": "161"
					},
					{
						"ansiCode": "1835N1003X",
						"name": "Pharmacy Service Providers : Pharmacist : Nutrition Support",
						"id": "167"
					},
					{
						"ansiCode": "1835P1300X",
						"name": "Pharmacy Service Providers : Pharmacist : Psychopharmacy",
						"id": "169"
					},
					{
						"ansiCode": "204C00000X",
						"name": "Allopathic & Osteopathic Physicians : Neuromusculoskeletal Medicine, Sports Medicine",
						"id": "171"
					},
					{
						"ansiCode": "204E00000X",
						"name": "Allopathic & Osteopathic Physicians : Oral & Maxillofacial Surgery",
						"id": "173"
					},
					{
						"ansiCode": "207K00000X",
						"name": "Allopathic & Osteopathic Physicians : Allergy & Immunology",
						"id": "175"
					},
					{
						"ansiCode": "207KI0005X",
						"name": "Allopathic & Osteopathic Physicians : Allergy & Immunology : Clinical & Laboratory Immunology",
						"id": "177"
					},
					{
						"ansiCode": "207LA0401X",
						"name": "Allopathic & Osteopathic Physicians : Anesthesiology : Addiction Medicine",
						"id": "179"
					},
					{
						"ansiCode": "207LP2900X",
						"name": "Allopathic & Osteopathic Physicians : Anesthesiology : Pain Medicine",
						"id": "181"
					},
					{
						"ansiCode": "207ND0101X",
						"name": "Allopathic & Osteopathic Physicians : Dermatology : MOHS-Micrographic Surgery",
						"id": "183"
					},
					{
						"ansiCode": "207NI0002X",
						"name": "Allopathic & Osteopathic Physicians : Dermatology : Clinical & Laboratory Dermatological Immunology",
						"id": "185"
					},
					{
						"ansiCode": "207NS0135X",
						"name": "Allopathic & Osteopathic Physicians : Dermatology : Dermatological Surgery",
						"id": "187"
					},
					{
						"ansiCode": "207PE0004X",
						"name": "Allopathic & Osteopathic Physicians : Emergency Medicine : Emergency Medical Services",
						"id": "189"
					},
					{
						"ansiCode": "207PP0204X",
						"name": "Allopathic & Osteopathic Physicians : Emergency Medicine : Pediatric Emergency Medicine",
						"id": "191"
					},
					{
						"ansiCode": "207PT0002X",
						"name": "Allopathic & Osteopathic Physicians : Emergency Medicine : Medical Toxicology",
						"id": "193"
					},
					{
						"ansiCode": "207QA0000X",
						"name": "Allopathic & Osteopathic Physicians : Family Practice : Adolescent Medicine",
						"id": "195"
					},
					{
						"ansiCode": "207QA0505X",
						"name": "Allopathic & Osteopathic Physicians : Family Practice : Adult Medicine",
						"id": "197"
					},
					{
						"ansiCode": "207QS0010X",
						"name": "Allopathic & Osteopathic Physicians : Family Practice : Sports Medicine",
						"id": "199"
					},
					{
						"ansiCode": "207R00000X",
						"name": "Allopathic & Osteopathic Physicians : Internal Medicine",
						"id": "200"
					},
					{
						"ansiCode": "207RA0000X",
						"name": "Allopathic & Osteopathic Physicians : Internal Medicine : Adolescent Medicine",
						"id": "201"
					},
					{
						"ansiCode": "207RA0201X",
						"name": "Allopathic & Osteopathic Physicians : Internal Medicine : Allergy & Immunology",
						"id": "202"
					},
					{
						"ansiCode": "207RA0401X",
						"name": "Allopathic & Osteopathic Physicians : Internal Medicine : Addiction Medicine",
						"id": "203"
					},
					{
						"ansiCode": "207RC0000X",
						"name": "Allopathic & Osteopathic Physicians : Internal Medicine : Cardiovascular Disease",
						"id": "204"
					},
					{
						"ansiCode": "207RC0001X",
						"name": "Allopathic & Osteopathic Physicians : Internal Medicine : Clinical Cardiac Electrophysiology",
						"id": "205"
					},
					{
						"ansiCode": "207RC0200X",
						"name": "Allopathic & Osteopathic Physicians : Internal Medicine : Critical Care Medicine",
						"id": "206"
					},
					{
						"ansiCode": "207RE0101X",
						"name": "Allopathic & Osteopathic Physicians : Internal Medicine : Endocrinology, Diabetes & Metabolism",
						"id": "207"
					},
					{
						"ansiCode": "207RG0300X",
						"name": "Allopathic & Osteopathic Physicians : Internal Medicine : Geriatric Medicine",
						"id": "209"
					},
					{
						"ansiCode": "207RH0003X",
						"name": "Allopathic & Osteopathic Physicians : Internal Medicine : Hematology & Oncology",
						"id": "211"
					},
					{
						"ansiCode": "207RI0008X",
						"name": "Allopathic & Osteopathic Physicians : Internal Medicine : Hepatology",
						"id": "213"
					},
					{
						"ansiCode": "207RI0200X",
						"name": "Allopathic & Osteopathic Physicians : Internal Medicine : Infectious Disease",
						"id": "215"
					},
					{
						"ansiCode": "207RN0300X",
						"name": "Allopathic & Osteopathic Physicians : Internal Medicine : Nephrology",
						"id": "217"
					},
					{
						"ansiCode": "207RP1001X",
						"name": "Allopathic & Osteopathic Physicians : Internal Medicine : Pulmonary Disease",
						"id": "218"
					},
					{
						"ansiCode": "207RS0010X",
						"name": "Allopathic & Osteopathic Physicians : Internal Medicine : Sports Medicine",
						"id": "220"
					},
					{
						"ansiCode": "207SC0300X",
						"name": "Allopathic & Osteopathic Physicians : Medical Genetics : Clinical Cytogenetic",
						"id": "222"
					},
					{
						"ansiCode": "207SG0202X",
						"name": "Allopathic & Osteopathic Physicians : Medical Genetics : Clinical Biochemical Genetics",
						"id": "224"
					},
					{
						"ansiCode": "207SG0205X",
						"name": "Allopathic & Osteopathic Physicians : Medical Genetics : Ph.D. Medical Genetics",
						"id": "226"
					},
					{
						"ansiCode": "207T00000X",
						"name": "Allopathic & Osteopathic Physicians : Neurological Surgery",
						"id": "228"
					},
					{
						"ansiCode": "207U00000X",
						"name": "Allopathic & Osteopathic Physicians : Nuclear Medicine",
						"id": "229"
					},
					{
						"ansiCode": "207UN0902X",
						"name": "Allopathic & Osteopathic Physicians : Nuclear Medicine : Nuclear Imaging & Therapy",
						"id": "231"
					},
					{
						"ansiCode": "207V00000X",
						"name": "Allopathic & Osteopathic Physicians : Obstetrics & Gynecology",
						"id": "233"
					},
					{
						"ansiCode": "207VE0102X",
						"name": "Allopathic & Osteopathic Physicians : Obstetrics & Gynecology : Reproductive Endocrinology",
						"id": "235"
					},
					{
						"ansiCode": "207VM0101X",
						"name": "Allopathic & Osteopathic Physicians : Obstetrics & Gynecology : Maternal & Fetal Medicine",
						"id": "237"
					},
					{
						"ansiCode": "207VX0201X",
						"name": "Allopathic & Osteopathic Physicians : Obstetrics & Gynecology : Gynecologic Oncology",
						"id": "239"
					},
					{
						"ansiCode": "207W00000X",
						"name": "Allopathic & Osteopathic Physicians : Ophthalmology",
						"id": "240"
					},
					{
						"ansiCode": "207XS0106X",
						"name": "Allopathic & Osteopathic Physicians : Orthopaedic Surgery : Hand Surgery",
						"id": "242"
					},
					{
						"ansiCode": "207XS0117X",
						"name": "Allopathic & Osteopathic Physicians : Orthopaedic Surgery : Orthopaedic Surgery of the Spine",
						"id": "244"
					},
					{
						"ansiCode": "207XX0005X",
						"name": "Allopathic & Osteopathic Physicians : Orthopaedic Surgery : Sports Medicine",
						"id": "246"
					},
					{
						"ansiCode": "207Y00000X",
						"name": "Allopathic & Osteopathic Physicians : Otolaryngology",
						"id": "248"
					},
					{
						"ansiCode": "207YS0123X",
						"name": "Allopathic & Osteopathic Physicians : Otolaryngology : Facial Plastic Surgery",
						"id": "250"
					},
					{
						"ansiCode": "207YX0602X",
						"name": "Allopathic & Osteopathic Physicians : Otolaryngology : Otolaryngic Allergy",
						"id": "252"
					},
					{
						"ansiCode": "207YX0901X",
						"name": "Allopathic & Osteopathic Physicians : Otolaryngology : Otology & Neurotology",
						"id": "253"
					},
					{
						"ansiCode": "207ZB0001X",
						"name": "Allopathic & Osteopathic Physicians : Pathology : Blood Banking & Transfusion Medicine",
						"id": "255"
					},
					{
						"ansiCode": "207ZD0900X",
						"name": "Allopathic & Osteopathic Physicians : Pathology : Dermatopathology",
						"id": "257"
					},
					{
						"ansiCode": "207ZH0000X",
						"name": "Allopathic & Osteopathic Physicians : Pathology : Hematology",
						"id": "259"
					},
					{
						"ansiCode": "207ZI0100X",
						"name": "Allopathic & Osteopathic Physicians : Pathology : Immunopathology",
						"id": "260"
					},
					{
						"ansiCode": "207ZM0300X",
						"name": "Allopathic & Osteopathic Physicians : Pathology : Medical Microbiology",
						"id": "261"
					},
					{
						"ansiCode": "207ZN0500X",
						"name": "Allopathic & Osteopathic Physicians : Pathology : Neuropathology",
						"id": "262"
					},
					{
						"ansiCode": "207ZP0007X",
						"name": "Allopathic & Osteopathic Physicians : Pathology : Molecular Genetic Pathology",
						"id": "263"
					},
					{
						"ansiCode": "207ZP0101X",
						"name": "Allopathic & Osteopathic Physicians : Pathology : Anatomic Pathology",
						"id": "264"
					},
					{
						"ansiCode": "207ZP0102X",
						"name": "Allopathic & Osteopathic Physicians : Pathology : Anatomic Pathology & Clinical Pathology",
						"id": "265"
					},
					{
						"ansiCode": "207ZP0104X",
						"name": "Allopathic & Osteopathic Physicians : Pathology : Chemical Pathology",
						"id": "266"
					},
					{
						"ansiCode": "207ZP0213X",
						"name": "Allopathic & Osteopathic Physicians : Pathology : Pediatric Pathology",
						"id": "268"
					},
					{
						"ansiCode": "208000000X",
						"name": "Allopathic & Osteopathic Physicians : Pediatrics",
						"id": "269"
					},
					{
						"ansiCode": "2080I0007X",
						"name": "Allopathic & Osteopathic Physicians : Pediatrics : Clinical & Laboratory Immunology",
						"id": "271"
					},
					{
						"ansiCode": "2080P0006X",
						"name": "Allopathic & Osteopathic Physicians : Pediatrics : Developmental  Behavioral Pediatrics",
						"id": "273"
					},
					{
						"ansiCode": "2080P0201X",
						"name": "Allopathic & Osteopathic Physicians : Pediatrics : Pediatric Allergy & Immunology",
						"id": "275"
					},
					{
						"ansiCode": "2080P0203X",
						"name": "Allopathic & Osteopathic Physicians : Pediatrics : Pediatric Critical Care Medicine",
						"id": "277"
					},
					{
						"ansiCode": "2080P0205X",
						"name": "Allopathic & Osteopathic Physicians : Pediatrics : Pediatric Endocrinology",
						"id": "279"
					},
					{
						"ansiCode": "2080P0207X",
						"name": "Allopathic & Osteopathic Physicians : Pediatrics : Pediatric Hematology-Oncology",
						"id": "281"
					},
					{
						"ansiCode": "2080P0210X",
						"name": "Allopathic & Osteopathic Physicians : Pediatrics : Pediatric Nephrology",
						"id": "283"
					},
					{
						"ansiCode": "2080P0214X",
						"name": "Allopathic & Osteopathic Physicians : Pediatrics : Pediatric Pulmonology",
						"id": "284"
					},
					{
						"ansiCode": "2080S0010X",
						"name": "Allopathic & Osteopathic Physicians : Pediatrics : Sports Medicine",
						"id": "286"
					},
					{
						"ansiCode": "208100000X",
						"name": "Allopathic & Osteopathic Physicians : Physical Medicine & Rehabilitation",
						"id": "288"
					},
					{
						"ansiCode": "2081P0010X",
						"name": "Allopathic & Osteopathic Physicians : Physical Medicine & Rehabilitation : Pediatric Rehabilitation Medicine",
						"id": "290"
					},
					{
						"ansiCode": "2081S0010X",
						"name": "Allopathic & Osteopathic Physicians : Physical Medicine & Rehabilitation : Sports Medicine",
						"id": "292"
					},
					{
						"ansiCode": "2082S0099X",
						"name": "Allopathic & Osteopathic Physicians : Plastic Surgery : Plastic Surgery Within the Head and Neck",
						"id": "294"
					},
					{
						"ansiCode": "2083A0100X",
						"name": "Allopathic & Osteopathic Physicians : Preventive Medicine : Aerospace Medicine",
						"id": "296"
					},
					{
						"ansiCode": "2083P0500X",
						"name": "Allopathic & Osteopathic Physicians : Preventive Medicine : Preventive Medicine/Occupational Environmental Medicine",
						"id": "298"
					},
					{
						"ansiCode": "2083S0010X",
						"name": "Allopathic & Osteopathic Physicians : Preventive Medicine : Sports Medicine",
						"id": "300"
					},
					{
						"ansiCode": "2083X0100X",
						"name": "Allopathic & Osteopathic Physicians : Preventive Medicine : Occupational Medicine",
						"id": "302"
					},
					{
						"ansiCode": "2084F0202X",
						"name": "Allopathic & Osteopathic Physicians : Psychiatry & Neurology : Forensic Psychiatry",
						"id": "304"
					},
					{
						"ansiCode": "2084N0402X",
						"name": "Allopathic & Osteopathic Physicians : Psychiatry & Neurology : Neurology with Special Qualifications in Child Neurology",
						"id": "306"
					},
					{
						"ansiCode": "2084P0005X",
						"name": "Allopathic & Osteopathic Physicians : Psychiatry & Neurology : Neurodevelopmental Disabilities",
						"id": "308"
					},
					{
						"ansiCode": "2084P0802X",
						"name": "Allopathic & Osteopathic Physicians : Psychiatry & Neurology : Addiction Psychiatry",
						"id": "310"
					},
					{
						"ansiCode": "2084P0805X",
						"name": "Allopathic & Osteopathic Physicians : Psychiatry & Neurology : Geriatric Psychiatry",
						"id": "312"
					},
					{
						"ansiCode": "2084S0010X",
						"name": "Allopathic & Osteopathic Physicians : Psychiatry & Neurology : Sports Medicine",
						"id": "314"
					},
					{
						"ansiCode": "2085B0100X",
						"name": "Allopathic & Osteopathic Physicians : Radiology : Body Imaging",
						"id": "316"
					},
					{
						"ansiCode": "2085N0700X",
						"name": "Allopathic & Osteopathic Physicians : Radiology : Neuroradiology",
						"id": "317"
					},
					{
						"ansiCode": "2085N0904X",
						"name": "Allopathic & Osteopathic Physicians : Radiology : Nuclear Radiology",
						"id": "318"
					},
					{
						"ansiCode": "2085P0229X",
						"name": "Allopathic & Osteopathic Physicians : Radiology : Pediatric Radiology",
						"id": "319"
					},
					{
						"ansiCode": "2085R0001X",
						"name": "Allopathic & Osteopathic Physicians : Radiology : Radiation Oncology",
						"id": "320"
					},
					{
						"ansiCode": "2085R0202X",
						"name": "Allopathic & Osteopathic Physicians : Radiology : Diagnostic Radiology",
						"id": "321"
					},
					{
						"ansiCode": "2085R0203X",
						"name": "Allopathic & Osteopathic Physicians : Radiology : Therapeutic Radiology",
						"id": "322"
					},
					{
						"ansiCode": "2085R0204X",
						"name": "Allopathic & Osteopathic Physicians : Radiology : Vascular & Interventional Radiology",
						"id": "323"
					},
					{
						"ansiCode": "2085R0205X",
						"name": "Allopathic & Osteopathic Physicians : Radiology : Radiological Physics",
						"id": "324"
					},
					{
						"ansiCode": "2085U0001X",
						"name": "Allopathic & Osteopathic Physicians : Radiology : Diagnostic Ultrasound",
						"id": "325"
					},
					{
						"ansiCode": "2086S0102X",
						"name": "Allopathic & Osteopathic Physicians : Surgery : Surgical Critical Care",
						"id": "327"
					},
					{
						"ansiCode": "2086S0120X",
						"name": "Allopathic & Osteopathic Physicians : Surgery : Pediatric Surgery",
						"id": "329"
					},
					{
						"ansiCode": "2086S0127X",
						"name": "Allopathic & Osteopathic Physicians : Surgery : Trauma Surgery",
						"id": "331"
					},
					{
						"ansiCode": "2086S0129X",
						"name": "Allopathic & Osteopathic Physicians : Surgery : Vascular Surgery",
						"id": "332"
					},
					{
						"ansiCode": "208800000X",
						"name": "Allopathic & Osteopathic Physicians : Urology",
						"id": "334"
					},
					{
						"ansiCode": "208D00000X",
						"name": "Allopathic & Osteopathic Physicians : General Practice",
						"id": "336"
					},
					{
						"ansiCode": "208M00000X",
						"name": "Allopathic & Osteopathic Physicians : Hospitalist",
						"id": "338"
					},
					{
						"ansiCode": "208VP0000X",
						"name": "Allopathic & Osteopathic Physicians : Pain Management",
						"id": "341"
					},
					{
						"ansiCode": "209800000X",
						"name": "Allopathic & Osteopathic Physicians : Legal Medicine",
						"id": "343"
					},
					{
						"ansiCode": "213EP1101X",
						"name": "Podiatric Medicine & Surgery Service Providers : Podiatrist : Primary Podiatric Medicine",
						"id": "347"
					},
					{
						"ansiCode": "213ES0000X",
						"name": "Podiatric Medicine & Surgery Service Providers : Podiatrist : Sports Medicine",
						"id": "349"
					},
					{
						"ansiCode": "213ES0131X",
						"name": "Podiatric Medicine & Surgery Service Providers : Podiatrist : Foot Surgery",
						"id": "351"
					},
					{
						"ansiCode": "222Z00000X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Orthotist",
						"id": "353"
					},
					{
						"ansiCode": "224P00000X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Prosthetist",
						"id": "354"
					},
					{
						"ansiCode": "225000000X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Orthotics/Prosthetics Fitter",
						"id": "356"
					},
					{
						"ansiCode": "2251C2600X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Physical Therapist : Cardiopulmonary",
						"id": "358"
					},
					{
						"ansiCode": "2251E1300X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Physical Therapist : Electrophysiology, Clinical",
						"id": "360"
					},
					{
						"ansiCode": "2251H1200X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Physical Therapist : Hand",
						"id": "362"
					},
					{
						"ansiCode": "2251N0400X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Physical Therapist : Neurology",
						"id": "364"
					},
					{
						"ansiCode": "2251S0007X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Physical Therapist : Sports",
						"id": "366"
					},
					{
						"ansiCode": "225200000X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Physical Therapy Assistant",
						"id": "368"
					},
					{
						"ansiCode": "225500000X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Specialist/Technologist",
						"id": "370"
					},
					{
						"ansiCode": "2255R0406X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Specialist/Technologist : Rehabilitation, Blind",
						"id": "372"
					},
					{
						"ansiCode": "225700000X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Massage Therapist",
						"id": "374"
					},
					{
						"ansiCode": "225A00000X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Music Therapist",
						"id": "376"
					},
					{
						"ansiCode": "225B00000X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Pulmonary Function Technologist",
						"id": "377"
					},
					{
						"ansiCode": "225C00000X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Rehabilitation Counselor",
						"id": "378"
					},
					{
						"ansiCode": "225CA2400X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Rehabilitation Counselor : Assistive Technology Practitioner",
						"id": "379"
					},
					{
						"ansiCode": "225CA2500X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Rehabilitation Counselor : Assistive Technology Supplier",
						"id": "380"
					},
					{
						"ansiCode": "225X00000X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Occupational Therapist",
						"id": "381"
					},
					{
						"ansiCode": "225XE1200X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Occupational Therapist : Ergonomics",
						"id": "382"
					},
					{
						"ansiCode": "225XH1300X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Occupational Therapist : Human Factors",
						"id": "384"
					},
					{
						"ansiCode": "225XP0200X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Occupational Therapist : Pediatrics",
						"id": "386"
					},
					{
						"ansiCode": "226300000X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Kinesiotherapist",
						"id": "388"
					},
					{
						"ansiCode": "2278C0205X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Respiratory Therapist, Certified : Critical Care",
						"id": "390"
					},
					{
						"ansiCode": "2278E1000X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Respiratory Therapist, Certified : Educational",
						"id": "392"
					},
					{
						"ansiCode": "2278G1100X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Respiratory Therapist, Certified : General Care",
						"id": "394"
					},
					{
						"ansiCode": "2278P1004X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Respiratory Therapist, Certified : Pulmonary Diagnostics",
						"id": "396"
					},
					{
						"ansiCode": "2278P1006X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Respiratory Therapist, Certified : Pulmonary Function Technologist",
						"id": "398"
					},
					{
						"ansiCode": "2278P3900X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Respiratory Therapist, Certified : Neonatal/Pediatrics",
						"id": "400"
					},
					{
						"ansiCode": "2278P4000X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Respiratory Therapist, Certified : Patient Transport",
						"id": "401"
					},
					{
						"ansiCode": "227900000X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Respiratory Therapist, Registered",
						"id": "403"
					},
					{
						"ansiCode": "2279E0002X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Respiratory Therapist, Registered : Emergency Care",
						"id": "405"
					},
					{
						"ansiCode": "2279G0305X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Respiratory Therapist, Registered : Geriatric Care",
						"id": "407"
					},
					{
						"ansiCode": "2279H0200X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Respiratory Therapist, Registered : Home Health",
						"id": "409"
					},
					{
						"ansiCode": "2279P1005X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Respiratory Therapist, Registered : Pulmonary Rehabilitation",
						"id": "411"
					},
					{
						"ansiCode": "2279P3800X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Respiratory Therapist, Registered : Palliative/Hospice",
						"id": "413"
					},
					{
						"ansiCode": "2279P4000X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Respiratory Therapist, Registered : Patient Transport",
						"id": "415"
					},
					{
						"ansiCode": "231H00000X",
						"name": "Speech, Language and Hearing Service Providers : Audiologist",
						"id": "417"
					},
					{
						"ansiCode": "231HA2400X",
						"name": "Speech, Language and Hearing Service Providers : Audiologist : Assistive Technology Practitioner",
						"id": "418"
					},
					{
						"ansiCode": "235500000X",
						"name": "Speech, Language and Hearing Service Providers : Specialist/Technologist",
						"id": "420"
					},
					{
						"ansiCode": "2355S0801X",
						"name": "Speech, Language and Hearing Service Providers : Specialist/Technologist : Speech-Language Assistant",
						"id": "422"
					},
					{
						"ansiCode": "237600000X",
						"name": "Speech, Language and Hearing Service Providers : Audiologist-Hearing Aid Fitter",
						"id": "424"
					},
					{
						"ansiCode": "237700000X",
						"name": "Speech, Language and Hearing Service Providers : Hearing Instrument Specialist",
						"id": "425"
					},
					{
						"ansiCode": "246Q00000X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Spec/Tech, Pathology",
						"id": "426"
					},
					{
						"ansiCode": "246QB0000X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Spec/Tech, Pathology : Blood Banking",
						"id": "427"
					},
					{
						"ansiCode": "246QC1000X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Spec/Tech, Pathology : Chemistry",
						"id": "428"
					},
					{
						"ansiCode": "246QC2700X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Spec/Tech, Pathology : Cytotechnology",
						"id": "429"
					},
					{
						"ansiCode": "246QH0000X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Spec/Tech, Pathology : Hematology",
						"id": "430"
					},
					{
						"ansiCode": "246QH0401X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Spec/Tech, Pathology : Hemapheresis Practitioner",
						"id": "431"
					},
					{
						"ansiCode": "246QI0000X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Spec/Tech, Pathology : Immunology",
						"id": "433"
					},
					{
						"ansiCode": "246QL0901X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Spec/Tech, Pathology : Laboratory Management, Diplomate",
						"id": "435"
					},
					{
						"ansiCode": "246QM0900X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Spec/Tech, Pathology : Microbiology",
						"id": "437"
					},
					{
						"ansiCode": "246RH0600X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Technician, Pathology : Histology",
						"id": "439"
					},
					{
						"ansiCode": "246RP1900X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Technician, Pathology : Phlebotomy",
						"id": "441"
					},
					{
						"ansiCode": "246X00000X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Spec/Tech, Cardiovascular",
						"id": "443"
					},
					{
						"ansiCode": "246XC2903X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Spec/Tech, Cardiovascular : Vascular Specialist",
						"id": "445"
					},
					{
						"ansiCode": "246Y00000X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Spec/Tech, Health Info",
						"id": "447"
					},
					{
						"ansiCode": "246YC3302X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Spec/Tech, Health Info : Coding Specialist, Physician Office Based",
						"id": "449"
					},
					{
						"ansiCode": "246Z00000X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Specialist/Technologist, Other",
						"id": "451"
					},
					{
						"ansiCode": "246ZA2600X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Specialist/Technologist, Other : Art, Medical",
						"id": "452"
					},
					{
						"ansiCode": "246ZB0302X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Specialist/Technologist, Other : Biomedical Photographer",
						"id": "454"
					},
					{
						"ansiCode": "246ZB0600X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Specialist/Technologist, Other : Biostatistician",
						"id": "456"
					},
					{
						"ansiCode": "246ZE0600X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Specialist/Technologist, Other : Electroneurodiagnostic",
						"id": "458"
					},
					{
						"ansiCode": "246ZG1000X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Specialist/Technologist, Other : Geneticist, Medical (PhD)",
						"id": "460"
					},
					{
						"ansiCode": "246ZN0300X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Specialist/Technologist, Other : Nephrology",
						"id": "462"
					},
					{
						"ansiCode": "247000000X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Technician, Health Information",
						"id": "464"
					},
					{
						"ansiCode": "247100000X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Radiologic Technologist",
						"id": "466"
					},
					{
						"ansiCode": "2471C1101X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Radiologic Technologist : Cardiovascular-Interventional Technology",
						"id": "468"
					},
					{
						"ansiCode": "2471C3401X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Radiologic Technologist : Computed Tomography",
						"id": "470"
					},
					{
						"ansiCode": "2471C3402X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Radiologic Technologist : Radiography",
						"id": "471"
					},
					{
						"ansiCode": "2471M1202X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Radiologic Technologist : Magnetic Resonance Imaging",
						"id": "472"
					},
					{
						"ansiCode": "2471M2300X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Radiologic Technologist : Mammography",
						"id": "473"
					},
					{
						"ansiCode": "2471N0900X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Radiologic Technologist : Nuclear Medicine Technology",
						"id": "474"
					},
					{
						"ansiCode": "2471Q0001X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Radiologic Technologist : Quality Management",
						"id": "475"
					},
					{
						"ansiCode": "2471R0002X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Radiologic Technologist : Radiation Therapy",
						"id": "476"
					},
					{
						"ansiCode": "2471V0105X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Radiologic Technologist : Vascular Sonography",
						"id": "478"
					},
					{
						"ansiCode": "247200000X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Technician, Other",
						"id": "480"
					},
					{
						"ansiCode": "2472D0500X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Technician, Other : Darkroom",
						"id": "482"
					},
					{
						"ansiCode": "2472E0500X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Technician, Other : EEG",
						"id": "483"
					},
					{
						"ansiCode": "2472V0600X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Technician, Other : Veterinary",
						"id": "485"
					},
					{
						"ansiCode": "251C00000X",
						"name": "Agencies : Day Training, Developmentally Disabled Services",
						"id": "487"
					},
					{
						"ansiCode": "251F00000X",
						"name": "Agencies : Home Infusion",
						"id": "489"
					},
					{
						"ansiCode": "251J00000X",
						"name": "Agencies : Nursing Care",
						"id": "491"
					},
					{
						"ansiCode": "251V00000X",
						"name": "Agencies : Voluntary or Charitable",
						"id": "493"
					},
					{
						"ansiCode": "261QA0005X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Ambulatory Family Planning Facility",
						"id": "495"
					},
					{
						"ansiCode": "261QA0600X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Adult Day Care",
						"id": "497"
					},
					{
						"ansiCode": "261QB0400X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Birthing",
						"id": "499"
					},
					{
						"ansiCode": "261QC1800X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Corporate Health",
						"id": "501"
					},
					{
						"ansiCode": "261QD0000X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Dental",
						"id": "502"
					},
					{
						"ansiCode": "261QE0700X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : End-Stage Renal Disease (ESRD) Treatment",
						"id": "504"
					},
					{
						"ansiCode": "261QH0100X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Health",
						"id": "507"
					},
					{
						"ansiCode": "261QI0500X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Infusion Therapy",
						"id": "508"
					},
					{
						"ansiCode": "261QM0801X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Mental Health (Including Community Mental Health Center)",
						"id": "510"
					},
					{
						"ansiCode": "261QM1100X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Military",
						"id": "512"
					},
					{
						"ansiCode": "261QM1102X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Military Operational Component",
						"id": "514"
					},
					{
						"ansiCode": "261QM1300X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Multi-Specialty",
						"id": "516"
					},
					{
						"ansiCode": "261QP0905X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Public Health, State or Local",
						"id": "518"
					},
					{
						"ansiCode": "261QP2000X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Physical Therapy",
						"id": "520"
					},
					{
						"ansiCode": "261QP2400X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Prison Health",
						"id": "522"
					},
					{
						"ansiCode": "261QP3300X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Pain",
						"id": "523"
					},
					{
						"ansiCode": "261QR0206X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Radiology, Mammography",
						"id": "525"
					},
					{
						"ansiCode": "261QR0208X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Radiology, Mobile",
						"id": "527"
					},
					{
						"ansiCode": "261QR0404X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Rehabilitation, Cardiac Facilities",
						"id": "530"
					},
					{
						"ansiCode": "261QR0405X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Rehabilitation, Substance Use Disorder",
						"id": "531"
					},
					{
						"ansiCode": "261QR0800X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Recovery Care",
						"id": "532"
					},
					{
						"ansiCode": "261QR1100X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Research",
						"id": "533"
					},
					{
						"ansiCode": "261QR1300X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Rural Health",
						"id": "534"
					},
					{
						"ansiCode": "261QS0112X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Oral and Maxillofacial Surgery",
						"id": "535"
					},
					{
						"ansiCode": "261QS0132X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Ophthalmologic Surgery",
						"id": "536"
					},
					{
						"ansiCode": "261QS1000X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Student Health",
						"id": "537"
					},
					{
						"ansiCode": "261QS1200X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Sleep Disorder Diagnostic",
						"id": "538"
					},
					{
						"ansiCode": "261QV0200X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : VA",
						"id": "540"
					},
					{
						"ansiCode": "261QX0100X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Occupational Medicine",
						"id": "541"
					},
					{
						"ansiCode": "273R00000X",
						"name": "Hospital Units : Psychiatric Unit",
						"id": "543"
					},
					{
						"ansiCode": "275N00000X",
						"name": "Hospital Units : Medicare Defined Swing Bed Unit",
						"id": "545"
					},
					{
						"ansiCode": "281P00000X",
						"name": "Hospitals : Chronic Disease Hospital",
						"id": "547"
					},
					{
						"ansiCode": "281PC2000X",
						"name": "Hospitals : Chronic Disease Hospital : Children",
						"id": "548"
					},
					{
						"ansiCode": "282NC2000X",
						"name": "Hospitals : General Acute Care Hospital : Children",
						"id": "550"
					},
					{
						"ansiCode": "282NW0100X",
						"name": "Hospitals : General Acute Care Hospital : Women",
						"id": "552"
					},
					{
						"ansiCode": "284300000X",
						"name": "Hospitals : Special Hospital",
						"id": "556"
					},
					{
						"ansiCode": "286500000X",
						"name": "Hospitals : Military Hospital",
						"id": "557"
					},
					{
						"ansiCode": "2865M2000X",
						"name": "Hospitals : Military Hospital : Medical Center",
						"id": "559"
					},
					{
						"ansiCode": "292200000X",
						"name": "Laboratories : Dental Laboratory",
						"id": "563"
					},
					{
						"ansiCode": "293D00000X",
						"name": "Laboratories : Physiological Laboratory",
						"id": "564"
					},
					{
						"ansiCode": "302R00000X",
						"name": "Managed Care Organizations : Health Maintenance Organization",
						"id": "566"
					},
					{
						"ansiCode": "305S00000X",
						"name": "Managed Care Organizations : Point of Service",
						"id": "568"
					},
					{
						"ansiCode": "311Z00000X",
						"name": "Nursing & Custodial Care Facilities : Custodial Care Facility",
						"id": "570"
					},
					{
						"ansiCode": "314000000X",
						"name": "Nursing & Custodial Care Facilities : Skilled Nursing Facility",
						"id": "572"
					},
					{
						"ansiCode": "315D00000X",
						"name": "Nursing & Custodial Care Facilities : Hospice, Inpatient",
						"id": "573"
					},
					{
						"ansiCode": "323P00000X",
						"name": "Residential Treatment Facilities : Psychiatric Residential Treatment Facility",
						"id": "577"
					},
					{
						"ansiCode": "331L00000X",
						"name": "Suppliers : Blood Bank",
						"id": "579"
					},
					{
						"ansiCode": "332B00000X",
						"name": "Suppliers : Durable Medical Equipment & Medical Supplies",
						"id": "580"
					},
					{
						"ansiCode": "332BD1200X",
						"name": "Suppliers : Durable Medical Equipment & Medical Supplies : Dialysis Equipment & Supplies",
						"id": "582"
					},
					{
						"ansiCode": "332BP3500X",
						"name": "Suppliers : Durable Medical Equipment & Medical Supplies : Parenteral & Enteral Nutrition",
						"id": "584"
					},
					{
						"ansiCode": "332G00000X",
						"name": "Suppliers : Eye Bank",
						"id": "586"
					},
					{
						"ansiCode": "332H00000X",
						"name": "Suppliers : Eyewear Supplier (Equipment, not the service)",
						"id": "587"
					},
					{
						"ansiCode": "332U00000X",
						"name": "Suppliers : Home Delivered Meals",
						"id": "589"
					},
					{
						"ansiCode": "333600000X",
						"name": "Suppliers : Pharmacy",
						"id": "590"
					},
					{
						"ansiCode": "335U00000X",
						"name": "Suppliers : Organ Procurement Organization",
						"id": "592"
					},
					{
						"ansiCode": "341600000X",
						"name": "Transportation Services : Ambulance",
						"id": "594"
					},
					{
						"ansiCode": "3416L0300X",
						"name": "Transportation Services : Ambulance : Land",
						"id": "596"
					},
					{
						"ansiCode": "343800000X",
						"name": "Transportation Services : Secured Medical Transport (VAN)",
						"id": "598"
					},
					{
						"ansiCode": "344600000X",
						"name": "Transportation Services : Taxi",
						"id": "600"
					},
					{
						"ansiCode": "347B00000X",
						"name": "Transportation Services : Bus",
						"id": "601"
					},
					{
						"ansiCode": "347D00000X",
						"name": "Transportation Services : Train",
						"id": "603"
					},
					{
						"ansiCode": "347E00000X",
						"name": "Transportation Services : Transportation Broker",
						"id": "604"
					},
					{
						"ansiCode": "363A00000X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Physician Assistant",
						"id": "605"
					},
					{
						"ansiCode": "363AM0700X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Physician Assistant : Medical",
						"id": "606"
					},
					{
						"ansiCode": "363AS0400X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Physician Assistant : Surgical",
						"id": "607"
					},
					{
						"ansiCode": "363L00000X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Nurse Practitioner",
						"id": "608"
					},
					{
						"ansiCode": "363LA2100X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Nurse Practitioner : Acute Care",
						"id": "609"
					},
					{
						"ansiCode": "363LA2200X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Nurse Practitioner : Adult Health",
						"id": "610"
					},
					{
						"ansiCode": "363LC1500X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Nurse Practitioner : Community Health",
						"id": "612"
					},
					{
						"ansiCode": "363LG0600X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Nurse Practitioner : Gerontology",
						"id": "614"
					},
					{
						"ansiCode": "363LN0005X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Nurse Practitioner : Neonatal, Critical Care",
						"id": "616"
					},
					{
						"ansiCode": "363LP0222X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Nurse Practitioner : Pediatrics, Critical Care",
						"id": "618"
					},
					{
						"ansiCode": "363LP1700X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Nurse Practitioner : Perinatal",
						"id": "620"
					},
					{
						"ansiCode": "363LS0200X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Nurse Practitioner : School",
						"id": "622"
					},
					{
						"ansiCode": "363LW0102X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Nurse Practitioner : Women's Health",
						"id": "623"
					},
					{
						"ansiCode": "363LX0106X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Nurse Practitioner : Occupational Health",
						"id": "625"
					},
					{
						"ansiCode": "364SA2100X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Acute Care",
						"id": "627"
					},
					{
						"ansiCode": "364SC0200X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Critical Care Medicine",
						"id": "629"
					},
					{
						"ansiCode": "364SC2300X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Chronic Care",
						"id": "631"
					},
					{
						"ansiCode": "364SE1400X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Ethics",
						"id": "633"
					},
					{
						"ansiCode": "364SG0600X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Gerontology",
						"id": "635"
					},
					{
						"ansiCode": "364SH1100X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Holistic",
						"id": "637"
					},
					{
						"ansiCode": "364SL0600X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Long-Term Care",
						"id": "639"
					},
					{
						"ansiCode": "364SN0000X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Neonatal",
						"id": "641"
					},
					{
						"ansiCode": "364SN0800X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Neuroscience",
						"id": "642"
					},
					{
						"ansiCode": "364SP0808X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Psych/Mental Health",
						"id": "645"
					},
					{
						"ansiCode": "364SP0809X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Psych/Mental Health, Adult",
						"id": "646"
					},
					{
						"ansiCode": "364SP0811X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Psych/Mental Health, Chronically Ill",
						"id": "648"
					},
					{
						"ansiCode": "364SP0813X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Psych/Mental Health, Geropsychiatric",
						"id": "650"
					},
					{
						"ansiCode": "364SP2800X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Perioperative",
						"id": "652"
					},
					{
						"ansiCode": "364SS0200X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : School",
						"id": "654"
					},
					{
						"ansiCode": "364ST0500X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Transplantation",
						"id": "655"
					},
					{
						"ansiCode": "364SW0102X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Women's Health",
						"id": "656"
					},
					{
						"ansiCode": "364SX0106X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Occupational Health",
						"id": "657"
					},
					{
						"ansiCode": "364SX0204X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Oncology, Pediatrics",
						"id": "659"
					},
					{
						"ansiCode": "367A00000X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Advanced Practice Midwife",
						"id": "661"
					},
					{
						"ansiCode": "367H00000X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Anesthesiologist Assistant",
						"id": "662"
					},
					{
						"ansiCode": "374700000X",
						"name": "Nursing Service Related Providers : Technician",
						"id": "664"
					},
					{
						"ansiCode": "374T00000X",
						"name": "Nursing Service Related Providers : Christian Science Practitioner/Nurse",
						"id": "666"
					},
					{
						"ansiCode": "376G00000X",
						"name": "Nursing Service Related Providers : Nursing Home Administrator",
						"id": "668"
					},
					{
						"ansiCode": "376K00000X",
						"name": "Nursing Service Related Providers : Nurse's Aide",
						"id": "670"
					},
					{
						"ansiCode": "385H00000X",
						"name": "Respite Care Facility : Respite Care",
						"id": "671"
					},
					{
						"ansiCode": "103TA0400X",
						"name": "Behavioral Health & Social Service Providers : Psychologist : Addiction (Substance Use Disorder)",
						"id": "10"
					},
					{
						"ansiCode": "103TB0200X",
						"name": "Behavioral Health & Social Service Providers : Psychologist : Behavioral",
						"id": "12"
					},
					{
						"ansiCode": "103TC2200X",
						"name": "Behavioral Health & Social Service Providers : Psychologist : Child, Youth & Family",
						"id": "15"
					},
					{
						"ansiCode": "103TE1100X",
						"name": "Behavioral Health & Social Service Providers : Psychologist : Exercise & Sports",
						"id": "17"
					},
					{
						"ansiCode": "103TF0200X",
						"name": "Behavioral Health & Social Service Providers : Psychologist : Forensic",
						"id": "19"
					},
					{
						"ansiCode": "103TP0814X",
						"name": "Behavioral Health & Social Service Providers : Psychologist : Psychoanalysis",
						"id": "23"
					},
					{
						"ansiCode": "103TP2701X",
						"name": "Behavioral Health & Social Service Providers : Psychologist : Psychotherapy, Group",
						"id": "25"
					},
					{
						"ansiCode": "103TS0200X",
						"name": "Behavioral Health & Social Service Providers : Psychologist : School",
						"id": "27"
					},
					{
						"ansiCode": "104100000X",
						"name": "Behavioral Health & Social Service Providers : Social Worker",
						"id": "29"
					},
					{
						"ansiCode": "1041S0200X",
						"name": "Behavioral Health & Social Service Providers : Social Worker : School",
						"id": "31"
					},
					{
						"ansiCode": "111NI0900X",
						"name": "Chiropractic Providers : Chiropractor : Internist",
						"id": "34"
					},
					{
						"ansiCode": "111NN1001X",
						"name": "Chiropractic Providers : Chiropractor : Nutrition",
						"id": "36"
					},
					{
						"ansiCode": "111NS0005X",
						"name": "Chiropractic Providers : Chiropractor : Sports Physician",
						"id": "38"
					},
					{
						"ansiCode": "111NX0100X",
						"name": "Chiropractic Providers : Chiropractor : Occupational Medicine",
						"id": "40"
					},
					{
						"ansiCode": "1223D0001X",
						"name": "Dental Providers : Dentist : Dental Public Health",
						"id": "43"
					},
					{
						"ansiCode": "1223G0001X",
						"name": "Dental Providers : Dentist : General Practice",
						"id": "45"
					},
					{
						"ansiCode": "1223P0221X",
						"name": "Dental Providers : Dentist : Pediatric Dentistry",
						"id": "47"
					},
					{
						"ansiCode": "1223P0700X",
						"name": "Dental Providers : Dentist : Prosthodontics",
						"id": "49"
					},
					{
						"ansiCode": "1223X0008X",
						"name": "Dental Providers : Dentist : Oral and Maxillofacial Radiology",
						"id": "51"
					},
					{
						"ansiCode": "124Q00000X",
						"name": "Dental Providers : Dental Hygienist",
						"id": "54"
					},
					{
						"ansiCode": "126900000X",
						"name": "Dental Providers : Dental Laboratory Technician",
						"id": "56"
					},
					{
						"ansiCode": "133N00000X",
						"name": "Dietary & Nutritional Service Providers : Nutritionist",
						"id": "58"
					},
					{
						"ansiCode": "133V00000X",
						"name": "Dietary & Nutritional Service Providers : Dietitian, Registered",
						"id": "60"
					},
					{
						"ansiCode": "133VN1004X",
						"name": "Dietary & Nutritional Service Providers : Dietitian, Registered : Nutrition, Pediatric",
						"id": "61"
					},
					{
						"ansiCode": "136A00000X",
						"name": "Dietary & Nutritional Service Providers : Dietetic Technician, Registered",
						"id": "64"
					},
					{
						"ansiCode": "146L00000X",
						"name": "Emergency Medical Service Providers : Emergency Medical Technician, Paramedic",
						"id": "66"
					},
					{
						"ansiCode": "156F00000X",
						"name": "Eye and Vision Services Providers : Technician/Technologist",
						"id": "76"
					},
					{
						"ansiCode": "156FC0801X",
						"name": "Eye and Vision Services Providers : Technician/Technologist : Contact Lens Fitter",
						"id": "78"
					},
					{
						"ansiCode": "156FX1101X",
						"name": "Eye and Vision Services Providers : Technician/Technologist : Ophthalmic Assistant",
						"id": "80"
					},
					{
						"ansiCode": "156FX1202X",
						"name": "Eye and Vision Services Providers : Technician/Technologist : Optometric Technician",
						"id": "82"
					},
					{
						"ansiCode": "156FX1800X",
						"name": "Eye and Vision Services Providers : Technician/Technologist : Optician",
						"id": "84"
					},
					{
						"ansiCode": "163WA0400X",
						"name": "Nursing Service Providers : Registered Nurse : Addiction (Substance Use Disorder)",
						"id": "87"
					},
					{
						"ansiCode": "163WC0200X",
						"name": "Nursing Service Providers : Registered Nurse : Critical Care Medicine",
						"id": "89"
					},
					{
						"ansiCode": "163WC1400X",
						"name": "Nursing Service Providers : Registered Nurse : College Health",
						"id": "91"
					},
					{
						"ansiCode": "163WC1600X",
						"name": "Nursing Service Providers : Registered Nurse : Continuing Education/Staff Development",
						"id": "93"
					},
					{
						"ansiCode": "163WD0400X",
						"name": "Nursing Service Providers : Registered Nurse : Diabetes Educator",
						"id": "96"
					},
					{
						"ansiCode": "163WE0003X",
						"name": "Nursing Service Providers : Registered Nurse : Emergency",
						"id": "98"
					},
					{
						"ansiCode": "163WF0300X",
						"name": "Nursing Service Providers : Registered Nurse : Flight",
						"id": "100"
					},
					{
						"ansiCode": "163WG0100X",
						"name": "Nursing Service Providers : Registered Nurse : Gastroenterology",
						"id": "102"
					},
					{
						"ansiCode": "163WH0200X",
						"name": "Nursing Service Providers : Registered Nurse : Home Health",
						"id": "104"
					},
					{
						"ansiCode": "163WH1000X",
						"name": "Nursing Service Providers : Registered Nurse : Hospice",
						"id": "106"
					},
					{
						"ansiCode": "163WI0600X",
						"name": "Nursing Service Providers : Registered Nurse : Infection Control",
						"id": "108"
					},
					{
						"ansiCode": "163WM0102X",
						"name": "Nursing Service Providers : Registered Nurse : Maternal Newborn",
						"id": "110"
					},
					{
						"ansiCode": "163WM1400X",
						"name": "Nursing Service Providers : Registered Nurse : Nurse Massage Therapist (NMT)",
						"id": "112"
					},
					{
						"ansiCode": "163WN0300X",
						"name": "Nursing Service Providers : Registered Nurse : Nephrology",
						"id": "115"
					},
					{
						"ansiCode": "163WN1003X",
						"name": "Nursing Service Providers : Registered Nurse : Nutrition Support",
						"id": "117"
					},
					{
						"ansiCode": "163WP0200X",
						"name": "Nursing Service Providers : Registered Nurse : Pediatrics",
						"id": "119"
					},
					{
						"ansiCode": "163WP0807X",
						"name": "Nursing Service Providers : Registered Nurse : Psych/Mental Health, Child & Adolescent",
						"id": "121"
					},
					{
						"ansiCode": "163WP0809X",
						"name": "Nursing Service Providers : Registered Nurse : Psych/Mental Health, Adult",
						"id": "123"
					},
					{
						"ansiCode": "163WR0400X",
						"name": "Nursing Service Providers : Registered Nurse : Rehabilitation",
						"id": "126"
					},
					{
						"ansiCode": "163WS0121X",
						"name": "Nursing Service Providers : Registered Nurse : Plastic Surgery",
						"id": "128"
					},
					{
						"ansiCode": "163WU0100X",
						"name": "Nursing Service Providers : Registered Nurse : Urology",
						"id": "130"
					},
					{
						"ansiCode": "164W00000X",
						"name": "Nursing Service Providers : Licensed Practical Nurse",
						"id": "141"
					},
					{
						"ansiCode": "167G00000X",
						"name": "Nursing Service Providers : Licensed Psychiatric Technician",
						"id": "143"
					},
					{
						"ansiCode": "171100000X",
						"name": "Other Service Providers : Acupuncturist",
						"id": "145"
					},
					{
						"ansiCode": "171WH0202X",
						"name": "Other Service Providers : Contractor : Home Modifications",
						"id": "147"
					},
					{
						"ansiCode": "173000000X",
						"name": "Other Service Providers : Legal Medicine",
						"id": "150"
					},
					{
						"ansiCode": "1744G0900X",
						"name": "Other Service Providers : Specialist : Graphics Designer",
						"id": "152"
					},
					{
						"ansiCode": "1744R1102X",
						"name": "Other Service Providers : Specialist : Research Study",
						"id": "154"
					},
					{
						"ansiCode": "174M00000X",
						"name": "Other Service Providers : Veterinarian",
						"id": "156"
					},
					{
						"ansiCode": "175F00000X",
						"name": "Other Service Providers : Naturopath",
						"id": "158"
					},
					{
						"ansiCode": "175M00000X",
						"name": "Other Service Providers : Midwife, Lay",
						"id": "160"
					},
					{
						"ansiCode": "176P00000X",
						"name": "Other Service Providers : Funeral Director",
						"id": "162"
					},
					{
						"ansiCode": "183500000X",
						"name": "Pharmacy Service Providers : Pharmacist",
						"id": "164"
					},
					{
						"ansiCode": "1835N0905X",
						"name": "Pharmacy Service Providers : Pharmacist : Nuclear Pharmacy",
						"id": "166"
					},
					{
						"ansiCode": "1835P1200X",
						"name": "Pharmacy Service Providers : Pharmacist : Pharmacotherapy",
						"id": "168"
					},
					{
						"ansiCode": "183700000X",
						"name": "Pharmacy Service Providers : Pharmacy Technician",
						"id": "170"
					},
					{
						"ansiCode": "204D00000X",
						"name": "Allopathic & Osteopathic Physicians : Neuromusculoskeletal Medicine & OMM",
						"id": "172"
					},
					{
						"ansiCode": "204F00000X",
						"name": "Allopathic & Osteopathic Physicians : Transplant Surgery",
						"id": "174"
					},
					{
						"ansiCode": "207KA0200X",
						"name": "Allopathic & Osteopathic Physicians : Allergy & Immunology : Allergy",
						"id": "176"
					},
					{
						"ansiCode": "207L00000X",
						"name": "Allopathic & Osteopathic Physicians : Anesthesiology",
						"id": "178"
					},
					{
						"ansiCode": "207LC0200X",
						"name": "Allopathic & Osteopathic Physicians : Anesthesiology : Critical Care Medicine",
						"id": "180"
					},
					{
						"ansiCode": "207N00000X",
						"name": "Allopathic & Osteopathic Physicians : Dermatology",
						"id": "182"
					},
					{
						"ansiCode": "207ND0900X",
						"name": "Allopathic & Osteopathic Physicians : Dermatology : Dermatopathology",
						"id": "184"
					},
					{
						"ansiCode": "207NP0225X",
						"name": "Allopathic & Osteopathic Physicians : Dermatology : Pediatric Dermatology",
						"id": "186"
					},
					{
						"ansiCode": "207P00000X",
						"name": "Allopathic & Osteopathic Physicians : Emergency Medicine",
						"id": "188"
					},
					{
						"ansiCode": "207PE0005X",
						"name": "Allopathic & Osteopathic Physicians : Emergency Medicine : Undersea and Hyperbaric Medicine",
						"id": "190"
					},
					{
						"ansiCode": "207PS0010X",
						"name": "Allopathic & Osteopathic Physicians : Emergency Medicine : Sports Medicine",
						"id": "192"
					},
					{
						"ansiCode": "207Q00000X",
						"name": "Allopathic & Osteopathic Physicians : Family Practice",
						"id": "194"
					},
					{
						"ansiCode": "207QA0401X",
						"name": "Allopathic & Osteopathic Physicians : Family Practice : Addiction Medicine",
						"id": "196"
					},
					{
						"ansiCode": "207QG0300X",
						"name": "Allopathic & Osteopathic Physicians : Family Practice : Geriatric Medicine",
						"id": "198"
					},
					{
						"ansiCode": "207RG0100X",
						"name": "Allopathic & Osteopathic Physicians : Internal Medicine : Gastroenterology",
						"id": "208"
					},
					{
						"ansiCode": "207RH0000X",
						"name": "Allopathic & Osteopathic Physicians : Internal Medicine : Hematology",
						"id": "210"
					},
					{
						"ansiCode": "207RI0001X",
						"name": "Allopathic & Osteopathic Physicians : Internal Medicine : Clinical & Laboratory Immunology",
						"id": "212"
					},
					{
						"ansiCode": "207RI0011X",
						"name": "Allopathic & Osteopathic Physicians : Internal Medicine : Interventional Cardiology",
						"id": "214"
					},
					{
						"ansiCode": "207RM1200X",
						"name": "Allopathic & Osteopathic Physicians : Internal Medicine : Magnetic Resonance Imaging (MRI)",
						"id": "216"
					},
					{
						"ansiCode": "207RR0500X",
						"name": "Allopathic & Osteopathic Physicians : Internal Medicine : Rheumatology",
						"id": "219"
					},
					{
						"ansiCode": "207RX0202X",
						"name": "Allopathic & Osteopathic Physicians : Internal Medicine : Medical Oncology",
						"id": "221"
					},
					{
						"ansiCode": "207SG0201X",
						"name": "Allopathic & Osteopathic Physicians : Medical Genetics : Clinical Genetics (M.D.)",
						"id": "223"
					},
					{
						"ansiCode": "207SG0203X",
						"name": "Allopathic & Osteopathic Physicians : Medical Genetics : Clinical Molecular Genetics",
						"id": "225"
					},
					{
						"ansiCode": "207SM0001X",
						"name": "Allopathic & Osteopathic Physicians : Medical Genetics : Molecular Genetic Pathology",
						"id": "227"
					},
					{
						"ansiCode": "207UN0901X",
						"name": "Allopathic & Osteopathic Physicians : Nuclear Medicine : Nuclear Cardiology",
						"id": "230"
					},
					{
						"ansiCode": "207UN0903X",
						"name": "Allopathic & Osteopathic Physicians : Nuclear Medicine : In Vivo & In Vitro Nuclear Medicine",
						"id": "232"
					},
					{
						"ansiCode": "207VC0200X",
						"name": "Allopathic & Osteopathic Physicians : Obstetrics & Gynecology : Critical Care Medicine",
						"id": "234"
					},
					{
						"ansiCode": "207VG0400X",
						"name": "Allopathic & Osteopathic Physicians : Obstetrics & Gynecology : Gynecology",
						"id": "236"
					},
					{
						"ansiCode": "207VX0000X",
						"name": "Allopathic & Osteopathic Physicians : Obstetrics & Gynecology : Obstetrics",
						"id": "238"
					},
					{
						"ansiCode": "207X00000X",
						"name": "Allopathic & Osteopathic Physicians : Orthopaedic Surgery",
						"id": "241"
					},
					{
						"ansiCode": "207XS0114X",
						"name": "Allopathic & Osteopathic Physicians : Orthopaedic Surgery : Adult Reconstructive Orthopaedic Surgery",
						"id": "243"
					},
					{
						"ansiCode": "207XX0004X",
						"name": "Allopathic & Osteopathic Physicians : Orthopaedic Surgery : Foot and Ankle Orthopaedics",
						"id": "245"
					},
					{
						"ansiCode": "207XX0801X",
						"name": "Allopathic & Osteopathic Physicians : Orthopaedic Surgery : Orthopaedic Trauma",
						"id": "247"
					},
					{
						"ansiCode": "207YP0228X",
						"name": "Allopathic & Osteopathic Physicians : Otolaryngology : Pediatric Otolaryngology",
						"id": "249"
					},
					{
						"ansiCode": "207YX0007X",
						"name": "Allopathic & Osteopathic Physicians : Otolaryngology : Plastic Surgery within the Head & Neck",
						"id": "251"
					},
					{
						"ansiCode": "207YX0905X",
						"name": "Allopathic & Osteopathic Physicians : Otolaryngology : Otolaryngology/Facial Plastic Surgery",
						"id": "254"
					},
					{
						"ansiCode": "207ZC0500X",
						"name": "Allopathic & Osteopathic Physicians : Pathology : Cytopathology",
						"id": "256"
					},
					{
						"ansiCode": "207ZF0201X",
						"name": "Allopathic & Osteopathic Physicians : Pathology : Forensic Pathology",
						"id": "258"
					},
					{
						"ansiCode": "207ZP0105X",
						"name": "Allopathic & Osteopathic Physicians : Pathology : Clinical Pathology/Laboratory Medicine",
						"id": "267"
					},
					{
						"ansiCode": "2080A0000X",
						"name": "Allopathic & Osteopathic Physicians : Pediatrics : Adolescent Medicine",
						"id": "270"
					},
					{
						"ansiCode": "2080N0001X",
						"name": "Allopathic & Osteopathic Physicians : Pediatrics : Neonatal-Perinatal Medicine",
						"id": "272"
					},
					{
						"ansiCode": "2080P0008X",
						"name": "Allopathic & Osteopathic Physicians : Pediatrics : Neurodevelopmental Disabilities",
						"id": "274"
					},
					{
						"ansiCode": "2080P0202X",
						"name": "Allopathic & Osteopathic Physicians : Pediatrics : Pediatric Cardiology",
						"id": "276"
					},
					{
						"ansiCode": "2080P0204X",
						"name": "Allopathic & Osteopathic Physicians : Pediatrics : Pediatric Emergency Medicine",
						"id": "278"
					},
					{
						"ansiCode": "2080P0206X",
						"name": "Allopathic & Osteopathic Physicians : Pediatrics : Pediatric Gastroenterology",
						"id": "280"
					},
					{
						"ansiCode": "2080P0208X",
						"name": "Allopathic & Osteopathic Physicians : Pediatrics : Pediatric Infectious Diseases",
						"id": "282"
					},
					{
						"ansiCode": "2080P0216X",
						"name": "Allopathic & Osteopathic Physicians : Pediatrics : Pediatric Rheumatology",
						"id": "285"
					},
					{
						"ansiCode": "2080T0002X",
						"name": "Allopathic & Osteopathic Physicians : Pediatrics : Medical Toxicology",
						"id": "287"
					},
					{
						"ansiCode": "2081P0004X",
						"name": "Allopathic & Osteopathic Physicians : Physical Medicine & Rehabilitation : Spinal Cord Injury Medicine",
						"id": "289"
					},
					{
						"ansiCode": "2081P2900X",
						"name": "Allopathic & Osteopathic Physicians : Physical Medicine & Rehabilitation : Pain Medicine",
						"id": "291"
					},
					{
						"ansiCode": "208200000X",
						"name": "Allopathic & Osteopathic Physicians : Plastic Surgery",
						"id": "293"
					},
					{
						"ansiCode": "2082S0105X",
						"name": "Allopathic & Osteopathic Physicians : Plastic Surgery : Surgery of the Hand",
						"id": "295"
					},
					{
						"ansiCode": "2083P0011X",
						"name": "Allopathic & Osteopathic Physicians : Preventive Medicine : Undersea and Hyperbaric Medicine",
						"id": "297"
					},
					{
						"ansiCode": "2083P0901X",
						"name": "Allopathic & Osteopathic Physicians : Preventive Medicine : Public Health & General Preventive Medicine",
						"id": "299"
					},
					{
						"ansiCode": "2083T0002X",
						"name": "Allopathic & Osteopathic Physicians : Preventive Medicine : Medical Toxicology",
						"id": "301"
					},
					{
						"ansiCode": "2084A0401X",
						"name": "Allopathic & Osteopathic Physicians : Psychiatry & Neurology : Addiction Medicine",
						"id": "303"
					},
					{
						"ansiCode": "2084N0400X",
						"name": "Allopathic & Osteopathic Physicians : Psychiatry & Neurology : Neurology",
						"id": "305"
					},
					{
						"ansiCode": "2084N0600X",
						"name": "Allopathic & Osteopathic Physicians : Psychiatry & Neurology : Clinical Neurophysiology",
						"id": "307"
					},
					{
						"ansiCode": "2084P0800X",
						"name": "Allopathic & Osteopathic Physicians : Psychiatry & Neurology : Psychiatry",
						"id": "309"
					},
					{
						"ansiCode": "2084P0804X",
						"name": "Allopathic & Osteopathic Physicians : Psychiatry & Neurology : Child & Adolescent Psychiatry",
						"id": "311"
					},
					{
						"ansiCode": "2084P2900X",
						"name": "Allopathic & Osteopathic Physicians : Psychiatry & Neurology : Pain Medicine",
						"id": "313"
					},
					{
						"ansiCode": "2084V0102X",
						"name": "Allopathic & Osteopathic Physicians : Psychiatry & Neurology : Vascular Neurology",
						"id": "315"
					},
					{
						"ansiCode": "208600000X",
						"name": "Allopathic & Osteopathic Physicians : Surgery",
						"id": "326"
					},
					{
						"ansiCode": "2086S0105X",
						"name": "Allopathic & Osteopathic Physicians : Surgery : Surgery of the Hand",
						"id": "328"
					},
					{
						"ansiCode": "2086S0122X",
						"name": "Allopathic & Osteopathic Physicians : Surgery : Plastic and Reconstructive Surgery",
						"id": "330"
					},
					{
						"ansiCode": "2086X0206X",
						"name": "Allopathic & Osteopathic Physicians : Surgery : Surgical Oncology",
						"id": "333"
					},
					{
						"ansiCode": "208C00000X",
						"name": "Allopathic & Osteopathic Physicians : Colon & Rectal Surgery",
						"id": "335"
					},
					{
						"ansiCode": "208G00000X",
						"name": "Allopathic & Osteopathic Physicians : Thoracic Surgery",
						"id": "337"
					},
					{
						"ansiCode": "208U00000X",
						"name": "Allopathic & Osteopathic Physicians : Clinical Pharmacology",
						"id": "339"
					},
					{
						"ansiCode": "208VP0014X",
						"name": "Allopathic & Osteopathic Physicians : Pain Medicine : Interventional Pain Medicine",
						"id": "342"
					},
					{
						"ansiCode": "213E00000X",
						"name": "Podiatric Medicine & Surgery Service Providers : Podiatrist",
						"id": "344"
					},
					{
						"ansiCode": "213EP0504X",
						"name": "Podiatric Medicine & Surgery Service Providers : Podiatrist : Public Medicine",
						"id": "346"
					},
					{
						"ansiCode": "213ER0200X",
						"name": "Podiatric Medicine & Surgery Service Providers : Podiatrist : Radiology",
						"id": "348"
					},
					{
						"ansiCode": "213ES0103X",
						"name": "Podiatric Medicine & Surgery Service Providers : Podiatrist : Foot & Ankle Surgery",
						"id": "350"
					},
					{
						"ansiCode": "221700000X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Art Therapist",
						"id": "352"
					},
					{
						"ansiCode": "224Z00000X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Occupational Therapy Assistant",
						"id": "355"
					},
					{
						"ansiCode": "225100000X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Physical Therapist",
						"id": "357"
					},
					{
						"ansiCode": "2251E1200X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Physical Therapist : Ergonomics",
						"id": "359"
					},
					{
						"ansiCode": "2251G0304X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Physical Therapist : Geriatrics",
						"id": "361"
					},
					{
						"ansiCode": "2251H1300X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Physical Therapist : Human Factors",
						"id": "363"
					},
					{
						"ansiCode": "2251P0200X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Physical Therapist : Pediatrics",
						"id": "365"
					},
					{
						"ansiCode": "2251X0800X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Physical Therapist : Orthopedic",
						"id": "367"
					},
					{
						"ansiCode": "225400000X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Rehabilitation Practitioner",
						"id": "369"
					},
					{
						"ansiCode": "2255A2300X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Specialist/Technologist : Athletic Trainer",
						"id": "371"
					},
					{
						"ansiCode": "225600000X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Dance Therapist",
						"id": "373"
					},
					{
						"ansiCode": "225800000X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Recreation Therapist",
						"id": "375"
					},
					{
						"ansiCode": "225XH1200X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Occupational Therapist : Hand",
						"id": "383"
					},
					{
						"ansiCode": "225XN1300X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Occupational Therapist : Neurorehabilitation",
						"id": "385"
					},
					{
						"ansiCode": "225XR0403X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Occupational Therapist : Rehabilitation, Driver",
						"id": "387"
					},
					{
						"ansiCode": "227800000X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Respiratory Therapist, Certified",
						"id": "389"
					},
					{
						"ansiCode": "2278E0002X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Respiratory Therapist, Certified : Emergency Care",
						"id": "391"
					},
					{
						"ansiCode": "2278G0305X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Respiratory Therapist, Certified : Geriatric Care",
						"id": "393"
					},
					{
						"ansiCode": "2278H0200X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Respiratory Therapist, Certified : Home Health",
						"id": "395"
					},
					{
						"ansiCode": "2278P1005X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Respiratory Therapist, Certified : Pulmonary Rehabilitation",
						"id": "397"
					},
					{
						"ansiCode": "2278P3800X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Respiratory Therapist, Certified : Palliative/Hospice",
						"id": "399"
					},
					{
						"ansiCode": "2278S1500X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Respiratory Therapist, Certified : SNF/Subacute Care",
						"id": "402"
					},
					{
						"ansiCode": "2279C0205X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Respiratory Therapist, Registered : Critical Care",
						"id": "404"
					},
					{
						"ansiCode": "2279E1000X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Respiratory Therapist, Registered : Educational",
						"id": "406"
					},
					{
						"ansiCode": "2279G1100X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Respiratory Therapist, Registered : General Care",
						"id": "408"
					},
					{
						"ansiCode": "2279P1004X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Respiratory Therapist, Registered : Pulmonary Diagnostics",
						"id": "410"
					},
					{
						"ansiCode": "2279P1006X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Respiratory Therapist, Registered : Pulmonary Function Technologist",
						"id": "412"
					},
					{
						"ansiCode": "2279P3900X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Respiratory Therapist, Registered : Neonatal/Pediatrics",
						"id": "414"
					},
					{
						"ansiCode": "2279S1500X",
						"name": "Respiratory, Rehabilitative & Restorative Service Providers : Respiratory Therapist, Registered : SNF/Subacute Care",
						"id": "416"
					},
					{
						"ansiCode": "231HA2500X",
						"name": "Speech, Language and Hearing Service Providers : Audiologist : Assistive Technology Supplier",
						"id": "419"
					},
					{
						"ansiCode": "2355A2700X",
						"name": "Speech, Language and Hearing Service Providers : Specialist/Technologist : Audiology Assistant",
						"id": "421"
					},
					{
						"ansiCode": "235Z00000X",
						"name": "Speech, Language and Hearing Service Providers : Speech-Language Pathologist",
						"id": "423"
					},
					{
						"ansiCode": "246QH0600X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Spec/Tech, Pathology : Histology",
						"id": "432"
					},
					{
						"ansiCode": "246QL0900X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Spec/Tech, Pathology : Laboratory Management",
						"id": "434"
					},
					{
						"ansiCode": "246QM0706X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Spec/Tech, Pathology : Medical Technologist",
						"id": "436"
					},
					{
						"ansiCode": "246R00000X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Technician, Pathology",
						"id": "438"
					},
					{
						"ansiCode": "246RM2200X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Technician, Pathology : Medical Laboratory",
						"id": "440"
					},
					{
						"ansiCode": "246W00000X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Technician, Cardiology",
						"id": "442"
					},
					{
						"ansiCode": "246XC2901X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Spec/Tech, Cardiovascular : Cardiovascular Invasive Specialist",
						"id": "444"
					},
					{
						"ansiCode": "246XS1301X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Spec/Tech, Cardiovascular : Sonography",
						"id": "446"
					},
					{
						"ansiCode": "246YC3301X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Spec/Tech, Health Info : Coding Specialist, Hospital Based",
						"id": "448"
					},
					{
						"ansiCode": "246YR1600X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Spec/Tech, Health Info : Registered Record Administrator",
						"id": "450"
					},
					{
						"ansiCode": "246ZB0301X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Specialist/Technologist, Other : Biomedical Engineering",
						"id": "453"
					},
					{
						"ansiCode": "246ZB0500X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Specialist/Technologist, Other : Biochemist",
						"id": "455"
					},
					{
						"ansiCode": "246ZE0500X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Specialist/Technologist, Other : EEG",
						"id": "457"
					},
					{
						"ansiCode": "246ZG0701X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Specialist/Technologist, Other : Graphics Methods",
						"id": "459"
					},
					{
						"ansiCode": "246ZI1000X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Specialist/Technologist, Other : Illustration, Medical",
						"id": "461"
					},
					{
						"ansiCode": "246ZS0400X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Specialist/Technologist, Other : Surgical",
						"id": "463"
					},
					{
						"ansiCode": "2470A2800X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Technician, Health Information : Assistant Record Technician",
						"id": "465"
					},
					{
						"ansiCode": "2471B0102X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Radiologic Technologist : Bone Densitometry",
						"id": "467"
					},
					{
						"ansiCode": "2471C1106X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Radiologic Technologist : Cardiac-Interventional Technology",
						"id": "469"
					},
					{
						"ansiCode": "2471S1302X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Radiologic Technologist : Sonography",
						"id": "477"
					},
					{
						"ansiCode": "2471V0106X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Radiologic Technologist : Vascular-Interventional Technology",
						"id": "479"
					},
					{
						"ansiCode": "2472B0301X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Technician, Other : Biomedical Engineering",
						"id": "481"
					},
					{
						"ansiCode": "2472R0900X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Technician, Other : Renal Dialysis",
						"id": "484"
					},
					{
						"ansiCode": "251B00000X",
						"name": "Agencies : Case Management",
						"id": "486"
					},
					{
						"ansiCode": "251E00000X",
						"name": "Agencies : Home Health",
						"id": "488"
					},
					{
						"ansiCode": "251G00000X",
						"name": "Agencies : Hospice Care, Community Based",
						"id": "490"
					},
					{
						"ansiCode": "251K00000X",
						"name": "Agencies : Public Health or Welfare",
						"id": "492"
					},
					{
						"ansiCode": "261Q00000X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center",
						"id": "494"
					},
					{
						"ansiCode": "261QA0006X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Ambulatory Fertility Facility",
						"id": "496"
					},
					{
						"ansiCode": "261QA1903X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Ambulatory Surgical",
						"id": "498"
					},
					{
						"ansiCode": "261QC1500X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Community Health",
						"id": "500"
					},
					{
						"ansiCode": "261QE0002X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Emergency Care",
						"id": "503"
					},
					{
						"ansiCode": "261QE0800X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Endoscopy",
						"id": "505"
					},
					{
						"ansiCode": "261QF0400X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Federally Qualified Health Center (FQHC)",
						"id": "506"
					},
					{
						"ansiCode": "261QL0400X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Lithotripsy",
						"id": "509"
					},
					{
						"ansiCode": "261QM1000X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Migrant Health",
						"id": "511"
					},
					{
						"ansiCode": "261QM1101X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Military Expanded Services",
						"id": "513"
					},
					{
						"ansiCode": "261QM1200X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Magnetic Resonance Imaging (MRI)",
						"id": "515"
					},
					{
						"ansiCode": "261QP0904X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Public Health, Federal",
						"id": "517"
					},
					{
						"ansiCode": "261QP1100X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Podiatric",
						"id": "519"
					},
					{
						"ansiCode": "261QP2300X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Primary Care",
						"id": "521"
					},
					{
						"ansiCode": "261QR0200X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Radiology",
						"id": "524"
					},
					{
						"ansiCode": "261QR0207X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Radiology, Mobile Mammography",
						"id": "526"
					},
					{
						"ansiCode": "261QR0400X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Rehabilitation",
						"id": "528"
					},
					{
						"ansiCode": "261QR0401X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Rehabilitation, Comprehensive Outpatient Rehabilitation Facility (CORF)",
						"id": "529"
					},
					{
						"ansiCode": "261QU0200X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Urgent Care",
						"id": "539"
					},
					{
						"ansiCode": "261QX0203X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Oncology, Radiation",
						"id": "542"
					},
					{
						"ansiCode": "273Y00000X",
						"name": "Hospital Units : Rehabilitation Unit",
						"id": "544"
					},
					{
						"ansiCode": "276400000X",
						"name": "Hospital Units : Rehabilitation, Substance Use Disorder Unit",
						"id": "546"
					},
					{
						"ansiCode": "282N00000X",
						"name": "Hospitals : General Acute Care Hospital",
						"id": "549"
					},
					{
						"ansiCode": "282NR1301X",
						"name": "Hospitals : General Acute Care Hospital : Rural",
						"id": "551"
					},
					{
						"ansiCode": "283Q00000X",
						"name": "Hospitals : Psychiatric Hospital",
						"id": "553"
					},
					{
						"ansiCode": "283XC2000X",
						"name": "Hospitals : Rehabilitation Hospital : Children",
						"id": "555"
					},
					{
						"ansiCode": "2865X1600X",
						"name": "Hospitals : Military Hospital : Operational Component Facility",
						"id": "560"
					},
					{
						"ansiCode": "291U00000X",
						"name": "Laboratories : Clinical Medical Laboratory",
						"id": "562"
					},
					{
						"ansiCode": "302F00000X",
						"name": "Managed Care Organizations : Exclusive Provider Organization",
						"id": "565"
					},
					{
						"ansiCode": "305R00000X",
						"name": "Managed Care Organizations : Preferred Provider Organization",
						"id": "567"
					},
					{
						"ansiCode": "311500000X",
						"name": "Nursing & Custodial Care Facilities : Alzheimer Center (Dementia Center)",
						"id": "569"
					},
					{
						"ansiCode": "313M00000X",
						"name": "Nursing & Custodial Care Facilities : Nursing Facility/Intermediate Care Facility",
						"id": "571"
					},
					{
						"ansiCode": "315P00000X",
						"name": "Nursing & Custodial Care Facilities : Intermediate Care Facility, Mentally Retarded",
						"id": "574"
					},
					{
						"ansiCode": "322D00000X",
						"name": "Residential Treatment Facilities : Residential Treatment Facility for Emotionally Disturbed Children",
						"id": "576"
					},
					{
						"ansiCode": "324500000X",
						"name": "Residential Treatment Facilities : Substance Use Rehabilitation Facility",
						"id": "578"
					},
					{
						"ansiCode": "332BC3200X",
						"name": "Suppliers : Durable Medical Equipment & Medical Supplies : Customized Equipment",
						"id": "581"
					},
					{
						"ansiCode": "332BN1400X",
						"name": "Suppliers : Durable Medical Equipment & Medical Supplies : Nursing Facility Supplies",
						"id": "583"
					},
					{
						"ansiCode": "332BX2000X",
						"name": "Suppliers : Durable Medical Equipment & Medical Supplies : Oxygen Equipment & Supplies",
						"id": "585"
					},
					{
						"ansiCode": "332S00000X",
						"name": "Suppliers : Hearing Aid Equipment",
						"id": "588"
					},
					{
						"ansiCode": "335E00000X",
						"name": "Suppliers : Prosthetic/Orthotic Supplier",
						"id": "591"
					},
					{
						"ansiCode": "335V00000X",
						"name": "Suppliers : Portable X-Ray Supplier",
						"id": "593"
					},
					{
						"ansiCode": "3416A0800X",
						"name": "Transportation Services : Ambulance : Air",
						"id": "595"
					},
					{
						"ansiCode": "3416S0300X",
						"name": "Transportation Services : Ambulance : Sea",
						"id": "597"
					},
					{
						"ansiCode": "343900000X",
						"name": "Transportation Services : Non-emergency Medical Transport (VAN)",
						"id": "599"
					},
					{
						"ansiCode": "347C00000X",
						"name": "Transportation Services : Private Vehicle",
						"id": "602"
					},
					{
						"ansiCode": "363LC0200X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Nurse Practitioner : Critical Care Medicine",
						"id": "611"
					},
					{
						"ansiCode": "363LF0000X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Nurse Practitioner : Family",
						"id": "613"
					},
					{
						"ansiCode": "363LN0000X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Nurse Practitioner : Neonatal",
						"id": "615"
					},
					{
						"ansiCode": "363LP0200X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Nurse Practitioner : Pediatrics",
						"id": "617"
					},
					{
						"ansiCode": "363LP0808X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Nurse Practitioner : Psych/Mental Health",
						"id": "619"
					},
					{
						"ansiCode": "363LP2300X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Nurse Practitioner : Primary Care",
						"id": "621"
					},
					{
						"ansiCode": "363LX0001X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Nurse Practitioner : Obstetrics & Gynecology",
						"id": "624"
					},
					{
						"ansiCode": "364S00000X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist",
						"id": "626"
					},
					{
						"ansiCode": "364SA2200X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Adult Health",
						"id": "628"
					},
					{
						"ansiCode": "364SC1501X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Community Health/Public Health",
						"id": "630"
					},
					{
						"ansiCode": "364SE0003X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Emergency",
						"id": "632"
					},
					{
						"ansiCode": "364SF0001X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Family Health",
						"id": "634"
					},
					{
						"ansiCode": "364SH0200X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Home Health",
						"id": "636"
					},
					{
						"ansiCode": "364SI0800X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Informatics",
						"id": "638"
					},
					{
						"ansiCode": "364SM0705X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Medical-Surgical",
						"id": "640"
					},
					{
						"ansiCode": "364SP0200X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Pediatrics",
						"id": "643"
					},
					{
						"ansiCode": "364SP0807X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Psych/Mental Health, Child & Adolescent",
						"id": "644"
					},
					{
						"ansiCode": "364SP0810X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Psych/Mental Health, Child & Family",
						"id": "647"
					},
					{
						"ansiCode": "364SP0812X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Psych/Mental Health, Community",
						"id": "649"
					},
					{
						"ansiCode": "364SP1700X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Perinatal",
						"id": "651"
					},
					{
						"ansiCode": "364SR0400X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Rehabilitation",
						"id": "653"
					},
					{
						"ansiCode": "367500000X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Nurse Anesthetist, Certified Registered",
						"id": "660"
					},
					{
						"ansiCode": "373H00000X",
						"name": "Nursing Service Related Providers : Day Training/Habilitation Specialist",
						"id": "663"
					},
					{
						"ansiCode": "3747P1801X",
						"name": "Nursing Service Related Providers : Technician : Personal Care Attendant",
						"id": "665"
					},
					{
						"ansiCode": "374U00000X",
						"name": "Nursing Service Related Providers : Home Health Aide",
						"id": "667"
					},
					{
						"ansiCode": "376J00000X",
						"name": "Nursing Service Related Providers : Homemaker",
						"id": "669"
					},
					{
						"ansiCode": "146D00000X",
						"name": "Emergency Medical Service Providers : Personal Emergency Response Attendant",
						"id": "65"
					},
					{
						"ansiCode": "156FX1700X",
						"name": "Eye and Vision Services Providers : Technician/Technologist : Ocularist",
						"id": "83"
					},
					{
						"ansiCode": "177F00000X",
						"name": "Other Service Providers : Lodging",
						"id": "163"
					},
					{
						"ansiCode": "283X00000X",
						"name": "Hospitals : Rehabilitation Hospital",
						"id": "554"
					},
					{
						"ansiCode": "364SX0200X",
						"name": "Physician Assistants & Advanced Practice Nursing Providers : Clinical Nurse Specialist : Oncology",
						"id": "658"
					},
					{
						"ansiCode": "282E00000X",
						"name": "Hospitals : Long Term Care Hospital",
						"id": "672"
					},
					{
						"ansiCode": "282NC0060X",
						"name": "Hospitals : General Acute Care Hospital : Critical Access",
						"id": "673"
					},
					{
						"ansiCode": "102L00000X",
						"name": "Behavioral Health & Social Service Providers : Psychoanalyst",
						"id": "674"
					},
					{
						"ansiCode": "103TH0004X",
						"name": "Behavioral Health & Social Service Providers : Psychologist : Health",
						"id": "675"
					},
					{
						"ansiCode": "103TP0016X",
						"name": "Behavioral Health & Social Service Providers : Psychologist : Prescribing (Medical)",
						"id": "676"
					},
					{
						"ansiCode": "111NI0013X",
						"name": "Chiropractic Providers : Chiropractor : Independent Medical Examiner",
						"id": "677"
					},
					{
						"ansiCode": "111NR0400X",
						"name": "Chiropractic Providers : Chiropractor : Rehabilitation",
						"id": "678"
					},
					{
						"ansiCode": "163WR0006X",
						"name": "Nursing Service Providers : Registered Nurse : Registered Nurse First Assistant",
						"id": "679"
					},
					{
						"ansiCode": "170300000X",
						"name": "Other Service Providers : Genetic Counselor, MS",
						"id": "680"
					},
					{
						"ansiCode": "171000000X",
						"name": "Other Service Providers : Military Health Care Provider",
						"id": "681"
					},
					{
						"ansiCode": "1710I1002X",
						"name": "Other Service Providers : Military Health Care Provider : Independent Duty Corpsman",
						"id": "682"
					},
					{
						"ansiCode": "1710I1003X",
						"name": "Other Service Providers : Military Health Care Provider : Independent Duty Medical Technicians",
						"id": "683"
					},
					{
						"ansiCode": "171M00000X",
						"name": "Other Service Providers : Case Manager/Care Coordinator",
						"id": "684"
					},
					{
						"ansiCode": "171R00000X",
						"name": "Other Service Providers : Interpreter",
						"id": "685"
					},
					{
						"ansiCode": "172M00000X",
						"name": "Other Service Providers : Mechanotherapist",
						"id": "686"
					},
					{
						"ansiCode": "172P00000X",
						"name": "Other Service Providers : Naprapath",
						"id": "687"
					},
					{
						"ansiCode": "1835G0303X",
						"name": "Pharmacy Service Providers : Pharmacist : Geriatric",
						"id": "688"
					},
					{
						"ansiCode": "1835X0200X",
						"name": "Pharmacy Service Providers : Pharmacist : Oncology",
						"id": "689"
					},
					{
						"ansiCode": "193200000X",
						"name": "Group : Multi-Specialty",
						"id": "690"
					},
					{
						"ansiCode": "193400000X",
						"name": "Group : Single Specialty",
						"id": "691"
					},
					{
						"ansiCode": "202C00000X",
						"name": "Allopathic & Osteopathic Physicians : Independent Medical Examiner",
						"id": "692"
					},
					{
						"ansiCode": "202K00000X",
						"name": "Allopathic & Osteopathic Physicians : Phlebology",
						"id": "693"
					},
					{
						"ansiCode": "207LH0002X",
						"name": "Allopathic & Osteopathic Physicians : Anesthesiology : Hospice and Palliative Medicine",
						"id": "694"
					},
					{
						"ansiCode": "207LP3000X",
						"name": "Allopathic & Osteopathic Physicians : Anesthesiology : Pediatric Anesthesiology",
						"id": "695"
					},
					{
						"ansiCode": "207PH0002X",
						"name": "Allopathic & Osteopathic Physicians : Emergency Medicine : Hospice and Palliative Medicine",
						"id": "696"
					},
					{
						"ansiCode": "207QH0002X",
						"name": "Allopathic & Osteopathic Physicians : Family Medicine : Hospice and Palliative Medicine",
						"id": "697"
					},
					{
						"ansiCode": "207RH0002X",
						"name": "Allopathic & Osteopathic Physicians : Internal Medicine : Hospice and Palliative Medicine",
						"id": "698"
					},
					{
						"ansiCode": "207RS0012X",
						"name": "Allopathic & Osteopathic Physicians : Internal Medicine : Sleep Medicine",
						"id": "699"
					},
					{
						"ansiCode": "207VH0002X",
						"name": "Allopathic & Osteopathic Physicians : Obstetrics & Gynecology : Hospice and Palliative Medicine",
						"id": "700"
					},
					{
						"ansiCode": "207XP3100X",
						"name": "Allopathic & Osteopathic Physicians : Orthopaedic Surgery : Pediatric Orthopaedic Surgery",
						"id": "701"
					},
					{
						"ansiCode": "207YS0012X",
						"name": "Allopathic & Osteopathic Physicians : Otolaryngology : Sleep Medicine",
						"id": "702"
					},
					{
						"ansiCode": "2080H0002X",
						"name": "Allopathic & Osteopathic Physicians : Pediatrics : Hospice and Palliative Medicine",
						"id": "703"
					},
					{
						"ansiCode": "2080S0012X",
						"name": "Allopathic & Osteopathic Physicians : Pediatrics : Sleep Medicine",
						"id": "704"
					},
					{
						"ansiCode": "2081H0002X",
						"name": "Allopathic & Osteopathic Physicians : Physical Medicine & Rehabilitation : Hospice and Palliative Medicine",
						"id": "705"
					},
					{
						"ansiCode": "2084D0003X",
						"name": "Allopathic & Osteopathic Physicians : Psychiatry & Neurology : Diagnostic Neuroimaging",
						"id": "706"
					},
					{
						"ansiCode": "2084H0002X",
						"name": "Allopathic & Osteopathic Physicians : Psychiatry & Neurology : Hospice and Palliative Medicine",
						"id": "707"
					},
					{
						"ansiCode": "2084P0015X",
						"name": "Allopathic & Osteopathic Physicians : Psychiatry & Neurology : Psychosomatic Medicine",
						"id": "708"
					},
					{
						"ansiCode": "2084S0012X",
						"name": "Allopathic & Osteopathic Physicians : Psychiatry & Neurology : Sleep Medicine",
						"id": "709"
					},
					{
						"ansiCode": "2085D0003X",
						"name": "Allopathic & Osteopathic Physicians : Radiology : Diagnostic Neuroimaging",
						"id": "710"
					},
					{
						"ansiCode": "2085H0002X",
						"name": "Allopathic & Osteopathic Physicians : Radiology : Hospice and Palliative Medicine",
						"id": "711"
					},
					{
						"ansiCode": "2086H0002X",
						"name": "Allopathic & Osteopathic Physicians : Surgery : Hospice and Palliative Medicine",
						"id": "712"
					},
					{
						"ansiCode": "2088P0231X",
						"name": "Allopathic & Osteopathic Physicians : Urology : Pediatric Urology",
						"id": "713"
					},
					{
						"ansiCode": "211D00000X",
						"name": "Podiatric Medicine & Surgery Service Providers : Assistant, Podiatric",
						"id": "714"
					},
					{
						"ansiCode": "222Q00000X",
						"name": "Respiratory, Developmental, Rehabilitative and Restorative Service Providers : Developmental Therapist",
						"id": "715"
					},
					{
						"ansiCode": "225CX0006X",
						"name": "Respiratory, Developmental, Rehabilitative and Restorative Service Providers : Rehabilitation Counselor : Orientation and Mobility Training Provider",
						"id": "716"
					},
					{
						"ansiCode": "229N00000X",
						"name": "Respiratory, Developmental, Rehabilitative and Restorative Service Providers : Anaplastologist",
						"id": "717"
					},
					{
						"ansiCode": "242T00000X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Perfusionist",
						"id": "718"
					},
					{
						"ansiCode": "247ZC0005X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Pathology : Clinical Laboratory Director, Non-physician",
						"id": "719"
					},
					{
						"ansiCode": "251300000X",
						"name": "Agencies : Local Education Agency (LEA)",
						"id": "720"
					},
					{
						"ansiCode": "251S00000X",
						"name": "Agencies : Community/Behavioral Health",
						"id": "721"
					},
					{
						"ansiCode": "251T00000X",
						"name": "Agencies : PACE Provider Organization",
						"id": "722"
					},
					{
						"ansiCode": "251X00000X",
						"name": "Agencies : Supports Brokerage",
						"id": "723"
					},
					{
						"ansiCode": "261QA0900X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Amputee",
						"id": "724"
					},
					{
						"ansiCode": "261QA3000X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Augmentative Communication",
						"id": "725"
					},
					{
						"ansiCode": "261QC0050X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Critical Access Hospital",
						"id": "726"
					},
					{
						"ansiCode": "261QD1600X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Developmental Disabilities",
						"id": "727"
					},
					{
						"ansiCode": "261QF0050X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Family Planning, Non-Surgical",
						"id": "728"
					},
					{
						"ansiCode": "261QG0250X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Genetics",
						"id": "729"
					},
					{
						"ansiCode": "261QH0700X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Hearing and Speech",
						"id": "730"
					},
					{
						"ansiCode": "261QM0850X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Adult Mental Health",
						"id": "731"
					},
					{
						"ansiCode": "261QM0855X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Adolescent and Children Mental Health",
						"id": "732"
					},
					{
						"ansiCode": "261QM1103X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Military Ambulatory Procedure Visits Operational (Transportable)",
						"id": "733"
					},
					{
						"ansiCode": "261QM2500X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Medical Specialty",
						"id": "734"
					},
					{
						"ansiCode": "261QM2800X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Methadone Clinic",
						"id": "735"
					},
					{
						"ansiCode": "261QM3000X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Medically Fragile Intants and Children Day Care",
						"id": "736"
					},
					{
						"ansiCode": "261QX0200X",
						"name": "Ambulatory Health Care Facilities : Clinic/Center : Oncology",
						"id": "737"
					},
					{
						"ansiCode": "282J00000X",
						"name": "Hospitals : Religious Nonmedical Health Care Institution",
						"id": "738"
					},
					{
						"ansiCode": "291900000X",
						"name": "Laboratories : Military Clinical Medical Laboratory",
						"id": "739"
					},
					{
						"ansiCode": "310400000X",
						"name": "Nursing & Custodial Care Facilities : Assisted Living Facility",
						"id": "740"
					},
					{
						"ansiCode": "3104A0625X",
						"name": "Nursing & Custodial Care Facilities : Assisted Living Facility : Assisted Living, Mental Illness",
						"id": "741"
					},
					{
						"ansiCode": "3104A0630X",
						"name": "Nursing & Custodial Care Facilities : Assisted Living Facility : Assisted Living, Behavioral Disturbances",
						"id": "742"
					},
					{
						"ansiCode": "310500000X",
						"name": "Nursing & Custodial Care Facilities : Intermediate Care Facility, Mental Illness",
						"id": "743"
					},
					{
						"ansiCode": "311ZA0620X",
						"name": "Nursing & Custodial Care Facilities : Custodial Care Facility : Adult Care Home",
						"id": "744"
					},
					{
						"ansiCode": "3140N1450X",
						"name": "Nursing & Custodial Care Facilities : Skilled Nursing Facility : Nursing Care, Pediatric",
						"id": "745"
					},
					{
						"ansiCode": "320600000X",
						"name": "Residential Treatment Facilities : Residential Treatment Facility, Mental Retardation and/or Developmental Disabilities",
						"id": "746"
					},
					{
						"ansiCode": "320700000X",
						"name": "Residential Treatment Facilities : Residential Treatment Facility, Physical Disabilities",
						"id": "747"
					},
					{
						"ansiCode": "320800000X",
						"name": "Residential Treatment Facilities : Community Based Residential Treatment Facility, Mental Illness",
						"id": "748"
					},
					{
						"ansiCode": "320900000X",
						"name": "Residential Treatment Facilities : Community Based Residential Treatment, Mental Retardation and/or Developmental Disabilities",
						"id": "749"
					},
					{
						"ansiCode": "3245S0500X",
						"name": "Residential Treatment Facilities : Substance Abuse Rehabilitation Facility : Substance Abuse Treatment, Children",
						"id": "750"
					},
					{
						"ansiCode": "332000000X",
						"name": "Suppliers : Military/U.S. Coast Guard Pharmacy",
						"id": "751"
					},
					{
						"ansiCode": "332100000X",
						"name": "Suppliers : Department of Veterans Affairs (VA) Pharmacy",
						"id": "752"
					},
					{
						"ansiCode": "332800000X",
						"name": "Suppliers : Indian Health Service/Tribal/Urban Indian Health (I/T/U) Pharmacy",
						"id": "753"
					},
					{
						"ansiCode": "332900000X",
						"name": "Suppliers : Non-Pharmacy Dispensing Site",
						"id": "754"
					},
					{
						"ansiCode": "3336C0002X",
						"name": "Suppliers : Pharmacy : Clinic Pharmacy",
						"id": "755"
					},
					{
						"ansiCode": "3336C0003X",
						"name": "Suppliers : Pharmacy : Community/Retail Pharmacy",
						"id": "756"
					},
					{
						"ansiCode": "3336C0004X",
						"name": "Suppliers : Pharmacy : Compounding Pharmacy",
						"id": "757"
					},
					{
						"ansiCode": "3336H0001X",
						"name": "Suppliers : Pharmacy : Home Infusion Therapy Pharmacy",
						"id": "758"
					},
					{
						"ansiCode": "3336I0012X",
						"name": "Suppliers : Pharmacy : Institutional Pharmacy",
						"id": "759"
					},
					{
						"ansiCode": "3336L0003X",
						"name": "Suppliers : Pharmacy : Long Term Care Pharmacy",
						"id": "760"
					},
					{
						"ansiCode": "3336M0002X",
						"name": "Suppliers : Pharmacy : Mail Order Pharmacy",
						"id": "761"
					},
					{
						"ansiCode": "3336M0003X",
						"name": "Suppliers : Pharmacy : Managed Care Organization Pharmacy",
						"id": "762"
					},
					{
						"ansiCode": "3336N0007X",
						"name": "Suppliers : Pharmacy : Nuclear Pharmacy",
						"id": "763"
					},
					{
						"ansiCode": "3336S0011X",
						"name": "Suppliers : Pharmacy : Specialty Pharmacy",
						"id": "764"
					},
					{
						"ansiCode": "341800000X",
						"name": "Transportation Services : Military/U.S. Coast Guard Transport",
						"id": "765"
					},
					{
						"ansiCode": "3418M1110X",
						"name": "Transportation Services : Military/U.S. Coast Guard Transport : Military or U.S. Coast Guard Ambulance, Ground Transport",
						"id": "766"
					},
					{
						"ansiCode": "3418M1120X",
						"name": "Transportation Services : Military/U.S. Coast Guard Transport : Military or U.S. Coast Guard Ambulance, Air Transport",
						"id": "767"
					},
					{
						"ansiCode": "3418M1130X",
						"name": "Transportation Services : Military/U.S. Coast Guard Transport : Military or U.S. Coast Guard Ambulance, Water Transport",
						"id": "768"
					},
					{
						"ansiCode": "372500000X",
						"name": "Nursing Service Related Providers : Chore Provider",
						"id": "769"
					},
					{
						"ansiCode": "372600000X",
						"name": "Nursing Service Related Providers : Adult Companion",
						"id": "770"
					},
					{
						"ansiCode": "3747A0650X",
						"name": "Nursing Service Related Providers : Technician : Attendant Care Provider",
						"id": "771"
					},
					{
						"ansiCode": "385HR2050X",
						"name": "Respite Care Facility : Respite Care : Respite Care Camp",
						"id": "772"
					},
					{
						"ansiCode": "385HR2055X",
						"name": "Respite Care Facility : Respite Care : Respite Care, Mental Illness, Child",
						"id": "773"
					},
					{
						"ansiCode": "385HR2060X",
						"name": "Respite Care Facility : Respite Care : Respite Care, Mental Retardation and/or Developmental Disabilities, Child",
						"id": "774"
					},
					{
						"ansiCode": "385HR2065X",
						"name": "Respite Care Facility : Respite Care : Respite Care, Physical Disabilities, Child",
						"id": "775"
					},
					{
						"ansiCode": "390200000X",
						"name": "Student, Health Care : Student in an Organized Health Care Education/Training Program",
						"id": "776"
					},
					{
						"ansiCode": "102X00000X",
						"name": "Behavioral Health & Social Service Providers : Poetry Therapist",
						"id": "777"
					},
					{
						"ansiCode": "172V00000X",
						"name": "Other Service Providers : Community Health Worker",
						"id": "778"
					},
					{
						"ansiCode": "207QB0002X",
						"name": "Allopathic & Osteopathic Physicians : Family Medicine : Bariatric Medicine",
						"id": "779"
					},
					{
						"ansiCode": "207RB0002X",
						"name": "Allopathic & Osteopathic Physicians : Internal Medicine : Bariatric Medicine",
						"id": "780"
					},
					{
						"ansiCode": "207RT0003X",
						"name": "Allopathic & Osteopathic Physicians : Internal Medicine : Transplant Hepatology",
						"id": "781"
					},
					{
						"ansiCode": "207VB0002X",
						"name": "Allopathic & Osteopathic Physicians : Obstetrics & Gynecology : Bariatric Medicine",
						"id": "782"
					},
					{
						"ansiCode": "207ZC0006X",
						"name": "Allopathic & Osteopathic Physicians : Pathology : Clinical Pathology",
						"id": "783"
					},
					{
						"ansiCode": "2080T0004X",
						"name": "Allopathic & Osteopathic Physicians : Pediatrics : Pediatric Transplant Hepatology",
						"id": "784"
					},
					{
						"ansiCode": "2081N0008X",
						"name": "Allopathic & Osteopathic Physicians : Physical Medicine & Rehabilitation : Neuromuscular Medicine",
						"id": "785"
					},
					{
						"ansiCode": "2084B0002X",
						"name": "Allopathic & Osteopathic Physicians : Psychiatry & Neurology : Bariatric Medicine",
						"id": "786"
					},
					{
						"ansiCode": "2084N0008X",
						"name": "Allopathic & Osteopathic Physicians : Psychiatry & Neurology : Neuromuscular Medicine",
						"id": "787"
					},
					{
						"ansiCode": "246ZC0007X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Specialist/Technologist, Other : Certified First Assistant",
						"id": "788"
					},
					{
						"ansiCode": "252Y00000X",
						"name": "Agencies : Early Intervention Provider Agency",
						"id": "789"
					},
					{
						"ansiCode": "273100000X",
						"name": "Hospital Units : Epilepsy Unit",
						"id": "790"
					},
					{
						"ansiCode": "333300000X",
						"name": "Suppliers : Emergency Response System Companies",
						"id": "791"
					},
					{
						"ansiCode": "111NP0017X",
						"name": "Chiropractic Providers : Chiropractor : Pediatric Chiropractor",
						"id": "792"
					},
					{
						"ansiCode": "173C00000X",
						"name": "Other Service Providers : Reflexologist",
						"id": "793"
					},
					{
						"ansiCode": "173F00000X",
						"name": "Other Service Providers : Sleep Specialist, PhD",
						"id": "794"
					},
					{
						"ansiCode": "1835P0018X",
						"name": "Pharmacy Service Providers : Pharmacist : Pharmacist Clinician (PhC)/ Clinical Pharmacy Specialist",
						"id": "795"
					},
					{
						"ansiCode": "253J00000X",
						"name": "Agencies : Foster Care Agency",
						"id": "796"
					},
					{
						"ansiCode": "103K00000X",
						"name": "Behavioral Health & Social Service Providers : Behavioral Analyst",
						"id": "797"
					},
					{
						"ansiCode": "207QS1201X",
						"name": "Allopathic & Osteopathic Physicians : Family Medicine : Sleep Medicine",
						"id": "798"
					},
					{
						"ansiCode": "224ZE0001X",
						"name": "Respiratory, Developmental, Rehabilitative and Restorative Service Providers : Occupational Therapy Assistant : Environmental Modification",
						"id": "799"
					},
					{
						"ansiCode": "224ZF0002X",
						"name": "Respiratory, Developmental, Rehabilitative and Restorative Service Providers : Occupational Therapy Assistant : Feeding, Eating & Swallowing",
						"id": "800"
					},
					{
						"ansiCode": "224ZL0004X",
						"name": "Respiratory, Developmental, Rehabilitative and Restorative Service Providers : Occupational Therapy Assistant : Low Vision",
						"id": "801"
					},
					{
						"ansiCode": "224ZR0403X",
						"name": "Respiratory, Developmental, Rehabilitative and Restorative Service Providers : Occupational Therapy Assistant : Driving and Community Mobility",
						"id": "802"
					},
					{
						"ansiCode": "225XE0001X",
						"name": "Respiratory, Developmental, Rehabilitative and Restorative Service Providers : Occupational Therapist : Environmental Modification",
						"id": "803"
					},
					{
						"ansiCode": "225XF0002X",
						"name": "Respiratory, Developmental, Rehabilitative and Restorative Service Providers : Occupational Therapist : Feeding, Eating & Swallowing",
						"id": "804"
					},
					{
						"ansiCode": "225XG0600X",
						"name": "Respiratory, Developmental, Rehabilitative and Restorative Service Providers : Occupational Therapist : Gerontology",
						"id": "805"
					},
					{
						"ansiCode": "225XL0004X",
						"name": "Respiratory, Developmental, Rehabilitative and Restorative Service Providers : Occupational Therapist : Low Vision",
						"id": "806"
					},
					{
						"ansiCode": "225XM0800X",
						"name": "Respiratory, Developmental, Rehabilitative and Restorative Service Providers : Occupational Therapist : Mental Health",
						"id": "807"
					},
					{
						"ansiCode": "225XP0019X",
						"name": "Respiratory, Developmental, Rehabilitative and Restorative Service Providers : Occupational Therapist : Physical Rehabilitation",
						"id": "808"
					},
					{
						"ansiCode": "243U00000X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Radiology Practitioner Assistant",
						"id": "809"
					},
					{
						"ansiCode": "253Z00000X",
						"name": "Agencies : In Home Supportive Care",
						"id": "810"
					},
					{
						"ansiCode": "125J00000X",
						"name": "Dental Providers : Dental Therapist",
						"id": "811"
					},
					{
						"ansiCode": "2088F0040X",
						"name": "Allopathic & Osteopathic Physicians : Urology : Female Pelvic Medicine and Reconstructive Surgery",
						"id": "815"
					},
					{
						"ansiCode": "2084B0040X",
						"name": "Allopathic & Osteopathic Physicians : Psychiatry & Neurology : Behavioral Neurology & Neuropsychiatry",
						"id": "814"
					},
					{
						"ansiCode": "207VF0040X",
						"name": "Allopathic & Osteopathic Physicians : Obstetrics & Gynecology : Female Pelvic Medicine and Reconstructive Surgery",
						"id": "813"
					},
					{
						"ansiCode": "125K00000X",
						"name": "Dental Providers : Advanced Practice Dental Therapist",
						"id": "812"
					},
					{
						"ansiCode": "374J00000X",
						"name": "Nursing Service Related Providers : Doula",
						"id": "831"
					},
					{
						"ansiCode": "174H00000X",
						"name": "Other Service Providers : Health Educator",
						"id": "832"
					},
					{
						"ansiCode": "207ZC0008X",
						"name": "Allopathic & Osteopathic Physicians : Pathology : Clinical Informatics",
						"id": "851"
					},
					{
						"ansiCode": "2083C0008X",
						"name": "Allopathic & Osteopathic Physicians : Preventive Medicine : Clinical Informatics",
						"id": "852"
					},
					{
						"ansiCode": "1223D0004X",
						"name": "Dental Providers: Dentist: Dentist Anesthesiologist",
						"id": "871"
					},
					{
						"ansiCode": "174N00000X",
						"name": "Other Service Provider : Lactation Consultant, Non-RN",
						"id": "891"
					},
					{
						"ansiCode": "207WX0200X",
						"name": "Allopathic & Osteopathic Physicians : Ophthalmology : Ophthalmic Plastic and Reconstructive Surgery",
						"id": "911"
					},
					{
						"ansiCode": "204R00000X",
						"name": "Allopathic & Osteopathic Physicians : Electrodiagnostic Medicine",
						"id": "931"
					},
					{
						"ansiCode": "2081P0301X",
						"name": "Allopathic & Osteopathic Physicians : Physical Medicine & Rehabilitation : Brain Injury Medicine",
						"id": "934"
					},
					{
						"ansiCode": "2083B0002X",
						"name": "Allopathic & Osteopathic Physicians : Preventive Medicine : Obesity Medicine",
						"id": "935"
					},
					{
						"ansiCode": "2084A2900X",
						"name": "Allopathic & Osteopathic Physicians : Psychiatry & Neurology : Neurocritical Care",
						"id": "937"
					},
					{
						"ansiCode": "2080B0002X",
						"name": "Allopathic & Osteopathic Physicians : Pediatrics : Obesity Medicine",
						"id": "933"
					},
					{
						"ansiCode": "207RH0005X",
						"name": "Allopathic & Osteopathic Physicians : Internal Medicine : Hypertension Specialist",
						"id": "932"
					},
					{
						"ansiCode": "2084P0301X",
						"name": "Allopathic & Osteopathic Physicians : Psychiatry & Neurology : Brain Injury Medicine",
						"id": "936"
					},
					{
						"ansiCode": "106S00000X",
						"name": "Behavioral Health & Social Service Providers : Behavior Technician",
						"id": "954"
					},
					{
						"ansiCode": "207WX0107X",
						"name": "Allopathic & Osteopathic Physicians : Ophthalmology : Retina Specialist",
						"id": "952"
					},
					{
						"ansiCode": "207WX0009X",
						"name": "Allopathic & Osteopathic Physicians : Ophthalmology : Glaucoma Specialist",
						"id": "951"
					},
					{
						"ansiCode": "207WX0108X",
						"name": "Allopathic & Osteopathic Physicians : Ophthalmology : Uveitis and Ocular Inflammatory Disease",
						"id": "953"
					},
					{
						"ansiCode": "106E00000X",
						"name": "Behavioral Health & Social Service Providers : Assistant Behavioral Analyst",
						"id": "955"
					},
					{
						"ansiCode": "207RA0001X",
						"name": "Allopathic & Osteopathic Physicians : Internal Medicine : Advanced Heart Failure and Transplant Cardiology",
						"id": "971"
					},
					{
						"ansiCode": "1835P2201X",
						"name": "Pharmacy Service Providers : Pharmacist : Ambulatory Care",
						"id": "991"
					},
					{
						"ansiCode": "1835C0205X",
						"name": "Pharmacy Service Providers : Pharmacist : Critical Care",
						"id": "1011"
					},
					{
						"ansiCode": "207WX0120X",
						"name": "Allopathic & Osteopathic Physicians : Ophthalmology : Cornea and External Diseases Specialist",
						"id": "1013"
					},
					{
						"ansiCode": "226000000X",
						"name": "Respiratory, Developmental, Rehabilitative and Restorative Service Providers : Recreational Therapist Assistant",
						"id": "1016"
					},
					{
						"ansiCode": "374K00000X",
						"name": "Nursing Service Related Providers : Religious Nonmedical Practitioner",
						"id": "1024"
					},
					{
						"ansiCode": "405300000X",
						"name": "Other Service Providers : Prevention Professional",
						"id": "1030"
					},
					{
						"ansiCode": "174200000X",
						"name": "Other Service Providers : Meals",
						"id": "1017"
					},
					{
						"ansiCode": "175T00000X",
						"name": "Other Service Providers : Peer Specialist",
						"id": "1029"
					},
					{
						"ansiCode": "2080C0008X",
						"name": "Allopathic & Osteopathic Physicians : Pediatrics : Child Abuse Pediatrics",
						"id": "1022"
					},
					{
						"ansiCode": "224L00000X",
						"name": "Respiratory, Developmental, Rehabilitative and Restorative Service Providers : Pedorthist",
						"id": "1028"
					},
					{
						"ansiCode": "246ZS0410X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Specialist/Technologist, Other : Surgical Technologist",
						"id": "1015"
					},
					{
						"ansiCode": "207WX0110X",
						"name": "Allopathic & Osteopathic Physicians : Ophthalmology : Pediatric Ophthalmology and Strabismus Specialist",
						"id": "1021"
					},
					{
						"ansiCode": "174V00000X",
						"name": "Other Service Providers : Clinical Ethicist",
						"id": "1025"
					},
					{
						"ansiCode": "224900000X",
						"name": "Respiratory, Developmental, Rehabilitative and Restorative Service Providers : Mastectomy Fitter",
						"id": "1027"
					},
					{
						"ansiCode": "246ZX2200X",
						"name": "Technologists, Technicians & Other Technical Service Providers : Specialist/Technologist, Other : Orthopedic Assistant",
						"id": "1014"
					},
					{
						"ansiCode": "1835P0200X",
						"name": "Pharmacy Service Providers : Pharmacist : Pediatrics",
						"id": "1012"
					},
					{
						"ansiCode": "335G00000X",
						"name": "Suppliers : Medical Foods Supplier",
						"id": "1018"
					},
					{
						"ansiCode": "224Y00000X",
						"name": "Respiratory, Developmental, Rehabilitative and Restorative Service Providers : Clinical Exercise Physiologist",
						"id": "1019"
					},
					{
						"ansiCode": "207WX0109X",
						"name": "Allopathic & Osteopathic Physicians : Ophthalmology : Clinical Exercise Physiologist",
						"id": "1020"
					},
					{
						"ansiCode": "344800000X",
						"name": "Transportation Services : Air Carrier",
						"id": "1023"
					},
					{
						"ansiCode": "125Q00000X",
						"name": "Dental Providers : Oral Medicinist",
						"id": "1026"
					},
					{
						"ansiCode": "133VN1501X",
						"name": "Dietary & Nutritional Service Providers: Dietitian, Registered: Nutrition, Sports Dietetics",
						"id": "1036"
					},
					{
						"ansiCode": "133VN1101X",
						"name": "Dietary & Nutritional Service Providers: Dietitian, Registered: Nutrition, Gerontological",
						"id": "1032"
					},
					{
						"ansiCode": "133VN1201X",
						"name": "Dietary & Nutritional Service Providers: Dietitian, Registered: Nutrition, Obesity and Weight Management",
						"id": "1033"
					},
					{
						"ansiCode": "133VN1301X",
						"name": "Dietary & Nutritional Service Providers: Dietitian, Registered: Nutrition, Oncology",
						"id": "1034"
					},
					{
						"ansiCode": "133VN1401X",
						"name": "Dietary & Nutritional Service Providers: Dietitian, Registered: Nutrition, Pediatric Critical Care",
						"id": "1035"
					},
					{
						"ansiCode": "1223X2210X",
						"name": "Dental Providers: Dentist: Orofacial Pain",
						"id": "1031"
					},
					{
						"ansiCode": "2083A0300X",
						"name": "Allopathic & Osteopathic Physicians: Preventative Medicine: Addiction Medicine",
						"id": "1051"
					},
					{
						"ansiCode": "2084E0001X",
						"name": "Allopathic & Osteopathic Physicians: Psychiatry & Neurology: Epilepsy",
						"id": "1074"
					},
					{
						"ansiCode": "342000000X",
						"name": "Transportation Services: Transportation Network Company",
						"id": "1073"
					},
					{
						"ansiCode": "171400000X",
						"name": "Other Service Providers: Health & Wellness Coach",
						"id": "1071"
					},
					{
						"ansiCode": "101200000X",
						"name": "Behavioral Health & Social Service Providers: Drama Therapist",
						"id": "1072"
					},
					{
						"ansiCode": "202D00000X",
						"name": "Allopathic & Osteopathic Physicians: Integrative Medicine",
						"id": "1091"
					},
					{
						"ansiCode": "207VC0300X",
						"name": "Allopathic & Osteopathic Physicians: Obstetrics & Gynecology: Complex Family Planning",
						"id": "1092"
					}
				],
				"cacheable": "false"
			},
			"departmentNumbers": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273530412E9,
				"data": [],
				"cacheable": "false"
			},
			"findRulesForCharge": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273538802E9,
				"data": [],
				"cacheable": "false"
			},
			"changeSupervisingProviders": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273518091E9,
				"data": [],
				"cacheable": "false"
			},
			"cptMods": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273601227E9,
				"data": [],
				"cacheable": "false"
			},
			"placeOfService": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273570171E9,
				"data": [
					{
						"name": "TELEHEALTH - OTHER",
						"id": "02"
					},
					{
						"name": "TRIBAL 638 PROVIDER-BASED FACILITY",
						"id": "08"
					},
					{
						"name": "TRIBAL 638 FREE-STANDING FACILITY",
						"id": "07"
					},
					{
						"name": "PHARMACY",
						"id": "01"
					},
					{
						"name": "OFFICE",
						"id": "11"
					},
					{
						"name": "PATIENTS HOME",
						"id": "12"
					},
					{
						"name": "INPATIENT HOSPITAL",
						"id": "21"
					},
					{
						"name": "ON CAMPUS-OUTPATIENT HOSPITAL",
						"id": "22"
					},
					{
						"name": "EMERGENCY ROOM",
						"id": "23"
					},
					{
						"name": "AMBULATORY SURGICAL CENTER",
						"id": "24"
					},
					{
						"name": "BIRTHING CENTER",
						"id": "25"
					},
					{
						"name": "MILITARY TREATMENT FACILITY",
						"id": "26"
					},
					{
						"name": "SKILLED NURSING FACILITY",
						"id": "31"
					},
					{
						"name": "NURSING FACILITY",
						"id": "32"
					},
					{
						"name": "CUSTODIAL CARE FACILITY",
						"id": "33"
					},
					{
						"name": "HOSPICE",
						"id": "34"
					},
					{
						"name": "AMBULANCE - LAND",
						"id": "41"
					},
					{
						"name": "AMBULANCE - AIR OR WATER",
						"id": "42"
					},
					{
						"name": "PSYCHIATRIC FACILITY - INPATIENT",
						"id": "51"
					},
					{
						"name": "PSYCHIATRIC FACILITY - OUTPATIENT",
						"id": "52"
					},
					{
						"name": "COMMUNITY MENTAL HEALTH CENTER",
						"id": "53"
					},
					{
						"name": "INTERMEDIATE CARE FACILITY/INDIVIDUALS WITH INTELLECTUAL DISABILITIES",
						"id": "54"
					},
					{
						"name": "RESIDENTIAL SUBSTANCE ABUSE TREATMENT FACILITY",
						"id": "55"
					},
					{
						"name": "PSYCHIATRIC FACILITY - RESIDENTIAL TREATMENT CENTER",
						"id": "56"
					},
					{
						"name": "COMPREHENSIVE INPATIENT REHABILITATION FACILITY",
						"id": "61"
					},
					{
						"name": "COMPREHENSIVE OUTPATIENT REHABILITATION FACILITY",
						"id": "62"
					},
					{
						"name": "END STAGE RENAL DISEASE TREATMENT FACILITY",
						"id": "65"
					},
					{
						"name": "STATE OR LOCAL PUBLIC HEALTH CLINIC",
						"id": "71"
					},
					{
						"name": "RURAL HEALTH CLINIC",
						"id": "72"
					},
					{
						"name": "INDEPENDENT LABORATORY",
						"id": "81"
					},
					{
						"name": "OTHER UNLISTED FACILITY",
						"id": "99"
					},
					{
						"name": "URGENT CARE FACILITY",
						"id": "20"
					},
					{
						"name": "ASSISTED LIVING",
						"id": "13"
					},
					{
						"name": "GROUP HOME",
						"id": "14"
					},
					{
						"name": "MOBILE UNIT",
						"id": "15"
					},
					{
						"name": "NON-RESIDENTIAL SUBSTANCE ABUSE TREATMENT FACILITY",
						"id": "57"
					},
					{
						"name": "MASS IMMUNIZATION CENTER",
						"id": "60"
					},
					{
						"name": "HOMELESS SHELTER",
						"id": "04"
					},
					{
						"name": "PRISON - CORRECTIONAL FACILITY",
						"id": "09"
					},
					{
						"name": "INDEPENDENT CLINIC",
						"id": "49"
					},
					{
						"name": "SCHOOL",
						"id": "03"
					},
					{
						"name": "WALK-IN RETAIL HEALTH CLINIC",
						"id": "17"
					},
					{
						"name": "FEDERALLY QUALIFIED HEALTH CENTER",
						"id": "50"
					},
					{
						"name": "PLACE OF EMPLOYMENT-WORKSITE",
						"id": "18"
					},
					{
						"name": "UNASSIGNED",
						"id": "46"
					},
					{
						"name": "OFF CAMPUS-OUTPATIENT HOSPITAL",
						"id": "19"
					},
					{
						"name": "INDIAN HEALTH SERVICE FREE-STANDING FACILITY",
						"id": "05"
					},
					{
						"name": "INDIAN HEALTH SERVICE PROVIDER-BASED FACILITY",
						"id": "06"
					},
					{
						"name": "TEMPORARY LODGING",
						"id": "16"
					},
					{
						"name": "NON-RESIDENTIAL OPIOID TREATMENT FACILITY",
						"id": "58"
					},
					{
						"name": "TELEHEALTH - PATIENTS HOME",
						"id": "10"
					},
					{
						"name": "OUTREACH SITE/STREET",
						"id": "27"
					}
				],
				"cacheable": "false"
			},
			"providerNumberCategoryDetails": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273556171E9,
				"data": [
					{
						"payerSpecificYN": "N",
						"id": "1"
					},
					{
						"payerSpecificYN": "Y",
						"id": "43"
					},
					{
						"payerSpecificYN": "N",
						"id": "294"
					},
					{
						"payerSpecificYN": "N",
						"id": "454"
					},
					{
						"payerSpecificYN": "Y",
						"id": "474"
					},
					{
						"payerSpecificYN": "N",
						"id": "621"
					}
				],
				"cacheable": "false"
			},
			"patientInsurances": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273492757E9,
				"data": [
					{
						"slidingFeeProgramName": null,
						"subscriber": {
							"firstName": "QUOC",
							"nameSuffix": null,
							"middleInitial": null,
							"lastName": "LE"
						},
						"insPackageRestriction": {
							"contextId": null,
							"deleted": null,
							"id": null
						},
						"sequenceNumber": "1",
						"cancelledBy": null,
						"createdBy": "API-1276",
						"claimSubmissionCategoryId": "8335",
						"copayamount": null,
						"governmentFundedTypeId": null,
						"referringProvider": {
							"firstName": null,
							"entityType": {
								"id": null
							},
							"name": null,
							"specialtyId": null,
							"providerNumbers": [
								{
									"providerNumberCategory": {
										"id": null
									},
									"providerNumber": null
								}
							],
							"nameSuffix": null,
							"middleInitial": null,
							"id": null,
							"lastName": null,
							"address": {
								"zip": null,
								"city": null,
								"street1": null,
								"state": null
							}
						},
						"slidingFeeProgramPovertyBasedYN": null,
						"nonInsuranceTypeId": null,
						"claimFilingIndicatorId": "13",
						"caseNumber": null,
						"primaryCareProviderId": null,
						"issueDate": "10/12/2020",
						"id": 8765,
						"insuranceProductTypeId": "5",
						"insuranceReportingCategoryId": "121",
						"cancelledDate": null,
						"slidingFeeProgramDeletedDate": null,
						"activeCasePolicy": "N",
						"slidingFeePlanId": null,
						"sourceEraRecordId": null,
						"expirationDate": null,
						"slidingFeeProgramId": null,
						"nonInsuranceTypeName": null,
						"insurancePackage": {
							"name": "AETNA",
							"deleted": null,
							"adjudicationProgramId": "F",
							"expirationDate": null,
							"effectiveDate": null,
							"customInsuranceGroup": {
								"id": null
							},
							"allowableCategoryId": "2",
							"id": "1352"
						},
						"notes": null,
						"idNumber": "W262245411",
						"deletedDate": null
					}
				],
				"cacheable": "false"
			},
			"historicalTransactions": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273542231E9,
				"data": [],
				"cacheable": "false"
			},
			"childCrc": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273562363E9,
				"data": [
					{
						"crc": "133",
						"childCrcs": [
							"133"
						]
					},
					{
						"crc": "257",
						"childCrcs": [
							"257"
						]
					},
					{
						"crc": "13",
						"childCrcs": [
							"6",
							"9",
							"10",
							"13",
							"20",
							"25",
							"31",
							"44",
							"54",
							"57",
							"58",
							"62",
							"73",
							"74",
							"75",
							"77",
							"79",
							"90",
							"92",
							"97",
							"98",
							"101",
							"103",
							"115",
							"116",
							"117",
							"118",
							"119",
							"127",
							"128",
							"129",
							"130",
							"134",
							"140",
							"146",
							"147",
							"151",
							"155",
							"172",
							"179",
							"182",
							"183",
							"184",
							"185",
							"201",
							"204",
							"208",
							"216",
							"224",
							"226",
							"231",
							"235",
							"237",
							"242",
							"247",
							"256",
							"260",
							"267",
							"271",
							"272",
							"277",
							"278",
							"279",
							"284",
							"285",
							"289",
							"291",
							"293",
							"297",
							"302",
							"304",
							"324",
							"344",
							"346",
							"348",
							"349",
							"352",
							"363"
						]
					},
					{
						"crc": "91",
						"childCrcs": [
							"91"
						]
					},
					{
						"crc": "218",
						"childCrcs": [
							"218"
						]
					},
					{
						"crc": "238",
						"childCrcs": [
							"238"
						]
					},
					{
						"crc": "248",
						"childCrcs": [
							"248"
						]
					},
					{
						"crc": "4",
						"childCrcs": [
							"4"
						]
					},
					{
						"crc": "59",
						"childCrcs": [
							"59"
						]
					},
					{
						"crc": "7",
						"childCrcs": [
							"7",
							"40",
							"53",
							"60",
							"66",
							"68",
							"72",
							"78",
							"81",
							"82",
							"84",
							"88",
							"93",
							"95",
							"105",
							"106",
							"120",
							"123",
							"143",
							"144",
							"152",
							"156",
							"157",
							"161",
							"166",
							"177",
							"180",
							"191",
							"199",
							"207",
							"215",
							"217",
							"225",
							"227",
							"230",
							"236",
							"243",
							"246",
							"249",
							"250",
							"252",
							"258",
							"261",
							"268",
							"270",
							"274",
							"275",
							"281",
							"282",
							"283",
							"288",
							"290",
							"292",
							"294",
							"298",
							"300",
							"303",
							"323",
							"347",
							"350",
							"463",
							"483",
							"484",
							"485",
							"486",
							"487",
							"488",
							"489",
							"490",
							"492",
							"493",
							"494",
							"495",
							"496",
							"497",
							"498",
							"499",
							"500",
							"501",
							"502",
							"503",
							"504",
							"505",
							"643",
							"663"
						]
					},
					{
						"crc": "89",
						"childCrcs": [
							"1",
							"4",
							"5",
							"6",
							"7",
							"8",
							"9",
							"10",
							"11",
							"13",
							"14",
							"15",
							"16",
							"17",
							"19",
							"20",
							"21",
							"22",
							"24",
							"25",
							"26",
							"27",
							"28",
							"29",
							"30",
							"31",
							"32",
							"35",
							"37",
							"38",
							"39",
							"40",
							"41",
							"42",
							"43",
							"44",
							"45",
							"46",
							"47",
							"48",
							"49",
							"50",
							"51",
							"52",
							"53",
							"54",
							"55",
							"56",
							"57",
							"58",
							"59",
							"60",
							"61",
							"62",
							"64",
							"65",
							"66",
							"68",
							"69",
							"71",
							"72",
							"73",
							"74",
							"75",
							"77",
							"78",
							"79",
							"80",
							"81",
							"82",
							"83",
							"84",
							"85",
							"86",
							"87",
							"88",
							"89",
							"90",
							"91",
							"92",
							"93",
							"94",
							"95",
							"96",
							"97",
							"98",
							"99",
							"100",
							"101",
							"102",
							"103",
							"104",
							"105",
							"106",
							"107",
							"108",
							"109",
							"110",
							"111",
							"112",
							"113",
							"114",
							"115",
							"116",
							"117",
							"118",
							"119",
							"120",
							"121",
							"123",
							"124",
							"125",
							"126",
							"127",
							"128",
							"129",
							"130",
							"131",
							"132",
							"133",
							"134",
							"136",
							"137",
							"138",
							"139",
							"140",
							"141",
							"142",
							"143",
							"144",
							"145",
							"146",
							"147",
							"148",
							"149",
							"150",
							"151",
							"152",
							"153",
							"154",
							"155",
							"156",
							"157",
							"158",
							"159",
							"160",
							"161",
							"162",
							"163",
							"164",
							"165",
							"166",
							"167",
							"169",
							"170",
							"171",
							"172",
							"173",
							"174",
							"175",
							"176",
							"177",
							"178",
							"179",
							"180",
							"181",
							"182",
							"183",
							"184",
							"185",
							"189",
							"190",
							"191",
							"192",
							"193",
							"194",
							"195",
							"196",
							"197",
							"198",
							"199",
							"201",
							"202",
							"203",
							"204",
							"205",
							"206",
							"207",
							"208",
							"209",
							"213",
							"214",
							"215",
							"216",
							"217",
							"218",
							"219",
							"220",
							"221",
							"222",
							"223",
							"224",
							"225",
							"226",
							"227",
							"228",
							"229",
							"230",
							"231",
							"232",
							"234",
							"235",
							"236",
							"237",
							"238",
							"240",
							"241",
							"242",
							"243",
							"246",
							"247",
							"248",
							"249",
							"250",
							"251",
							"252",
							"253",
							"254",
							"255",
							"256",
							"257",
							"258",
							"259",
							"260",
							"261",
							"262",
							"263",
							"264",
							"265",
							"266",
							"267",
							"268",
							"269",
							"270",
							"271",
							"272",
							"273",
							"274",
							"275",
							"276",
							"277",
							"278",
							"279",
							"280",
							"281",
							"282",
							"283",
							"284",
							"285",
							"286",
							"287",
							"288",
							"289",
							"290",
							"291",
							"292",
							"293",
							"294",
							"295",
							"296",
							"297",
							"298",
							"299",
							"300",
							"301",
							"302",
							"303",
							"304",
							"323",
							"324",
							"343",
							"344",
							"345",
							"346",
							"347",
							"348",
							"349",
							"350",
							"351",
							"352",
							"363",
							"403",
							"443",
							"463",
							"483",
							"484",
							"485",
							"486",
							"487",
							"488",
							"489",
							"490",
							"492",
							"493",
							"494",
							"495",
							"496",
							"497",
							"498",
							"499",
							"500",
							"501",
							"502",
							"503",
							"504",
							"505",
							"643",
							"663"
						]
					}
				],
				"cacheable": "false"
			},
			"insurancePackages": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273558594E9,
				"data": [
					{
						"name": "MEDICAID-CO: HEALTH FIRST COLORADO - INSTITUTIONAL HP",
						"id": "197077",
						"expirationDate": null
					}
				],
				"cacheable": "false"
			},
			"departmentDesignation": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273546961E9,
				"data": [],
				"cacheable": "false"
			},
			"claimSubmissionCategoryDetails": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273534165E9,
				"data": [
					{
						"sendPatientAsSubscriberYN": null,
						"refAuxiliaryFormat": null,
						"Id": "9482",
						"npiStatusId": "4",
						"claimFormat": [
							{
								"ansiVersionId": "3",
								"emcReceiverid": null,
								"claimFormatVersionId": "2",
								"manualDropYn": "A",
								"healthcareClaimTypeId": "1",
								"diagnosisCodeSetId": 21,
								"medium": "PAPER",
								"claimFormat": "CMS1500"
							},
							{
								"ansiVersionId": "3",
								"emcReceiverid": null,
								"claimFormatVersionId": "2",
								"manualDropYn": "Y",
								"healthcareClaimTypeId": "1",
								"diagnosisCodeSetId": 21,
								"medium": "PAPER",
								"claimFormat": "CMS1500"
							},
							{
								"ansiVersionId": "3",
								"emcReceiverid": "68",
								"claimFormatVersionId": null,
								"manualDropYn": "N",
								"healthcareClaimTypeId": "1",
								"diagnosisCodeSetId": 21,
								"medium": "ELECTRONIC",
								"claimFormat": "ANSI837"
							}
						]
					}
				],
				"cacheable": "false"
			},
			"clia": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.7089327355719E9,
				"data": [],
				"cacheable": "false"
			},
			"patientVisitDetails": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273504106E9,
				"data": [],
				"cacheable": "false"
			},
			"purchasedServicesReferringProviderNumbers": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273495424E9,
				"data": null,
				"cacheable": "false"
			},
			"holidays": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273530575E9,
				"data": [
					{
						"date": "05/25/2015"
					},
					{
						"date": "12/25/2020"
					},
					{
						"date": "07/04/2013"
					},
					{
						"date": "11/26/2009"
					},
					{
						"date": "10/10/2005"
					},
					{
						"date": "01/01/2014"
					},
					{
						"date": "10/08/2018"
					},
					{
						"date": "09/04/2006"
					},
					{
						"date": "01/15/2018"
					},
					{
						"date": "02/16/2009"
					},
					{
						"date": "10/13/2003"
					},
					{
						"date": "11/23/2017"
					},
					{
						"date": "10/12/2026"
					},
					{
						"date": "10/12/2020"
					},
					{
						"date": "01/01/2003"
					},
					{
						"date": "01/02/2017"
					},
					{
						"date": "05/31/2027"
					},
					{
						"date": "11/10/2017"
					},
					{
						"date": "11/11/2011"
					},
					{
						"date": "07/04/2002"
					},
					{
						"date": "01/01/2025"
					},
					{
						"date": "09/02/2013"
					},
					{
						"date": "12/25/2023"
					},
					{
						"date": "05/29/2023"
					},
					{
						"date": "01/20/2014"
					},
					{
						"date": "11/24/2011"
					},
					{
						"date": "05/25/2020"
					},
					{
						"date": "05/28/2018"
					},
					{
						"date": "01/15/2007"
					},
					{
						"date": "09/03/2012"
					},
					{
						"date": "09/05/2011"
					},
					{
						"date": "02/16/2004"
					},
					{
						"date": "11/11/2027"
					},
					{
						"date": "01/20/2025"
					},
					{
						"date": "11/11/2004"
					},
					{
						"date": "12/31/2010"
					},
					{
						"date": "07/05/2027"
					},
					{
						"date": "05/30/2016"
					},
					{
						"date": "12/25/2015"
					},
					{
						"date": "11/28/2013"
					},
					{
						"date": "05/31/2021"
					},
					{
						"date": "10/13/2014"
					},
					{
						"date": "11/11/2015"
					},
					{
						"date": "02/20/2012"
					},
					{
						"date": "01/02/2012"
					},
					{
						"date": "10/11/2010"
					},
					{
						"date": "07/04/2014"
					},
					{
						"date": "02/19/2024"
					},
					{
						"date": "09/03/2018"
					},
					{
						"date": "11/11/2022"
					},
					{
						"date": "01/01/2009"
					},
					{
						"date": "09/02/2024"
					},
					{
						"date": "09/02/2019"
					},
					{
						"date": "07/04/2007"
					},
					{
						"date": "07/03/2009"
					},
					{
						"date": "01/17/2005"
					},
					{
						"date": "10/14/2024"
					},
					{
						"date": "02/15/2016"
					},
					{
						"date": "11/24/2016"
					},
					{
						"date": "12/24/2004"
					},
					{
						"date": "12/25/2008"
					},
					{
						"date": "09/07/2009"
					},
					{
						"date": "07/05/2021"
					},
					{
						"date": "02/15/2027"
					},
					{
						"date": "05/31/2010"
					},
					{
						"date": "12/25/2025"
					},
					{
						"date": "01/17/2022"
					},
					{
						"date": "12/31/2004"
					},
					{
						"date": "01/16/2006"
					},
					{
						"date": "01/21/2013"
					},
					{
						"date": "02/16/2015"
					},
					{
						"date": "12/24/2021"
					},
					{
						"date": "11/10/2006"
					},
					{
						"date": "01/18/2027"
					},
					{
						"date": "10/09/2006"
					},
					{
						"date": "09/03/2007"
					},
					{
						"date": "09/07/2026"
					},
					{
						"date": "02/18/2008"
					},
					{
						"date": "10/08/2007"
					},
					{
						"date": "12/25/2024"
					},
					{
						"date": "02/20/2017"
					},
					{
						"date": "05/26/2003"
					},
					{
						"date": "07/03/2020"
					},
					{
						"date": "12/25/2018"
					},
					{
						"date": "10/10/2016"
					},
					{
						"date": "12/26/2022"
					},
					{
						"date": "01/01/2004"
					},
					{
						"date": "11/26/2026"
					},
					{
						"date": "01/18/2016"
					},
					{
						"date": "02/17/2003"
					},
					{
						"date": "07/04/2008"
					},
					{
						"date": "07/04/2003"
					},
					{
						"date": "11/28/2002"
					},
					{
						"date": "05/30/2005"
					},
					{
						"date": "01/21/2008"
					},
					{
						"date": "10/08/2012"
					},
					{
						"date": "12/25/2009"
					},
					{
						"date": "01/18/2010"
					},
					{
						"date": "11/11/2014"
					},
					{
						"date": "01/01/2026"
					},
					{
						"date": "01/01/2016"
					},
					{
						"date": "10/14/2002"
					},
					{
						"date": "11/12/2012"
					},
					{
						"date": "09/01/2025"
					},
					{
						"date": "02/18/2019"
					},
					{
						"date": "11/24/2005"
					},
					{
						"date": "11/25/2004"
					},
					{
						"date": "11/28/2019"
					},
					{
						"date": "05/27/2024"
					},
					{
						"date": "10/11/2021"
					},
					{
						"date": "05/29/2017"
					},
					{
						"date": "01/01/2013"
					},
					{
						"date": "09/02/2002"
					},
					{
						"date": "06/19/2024"
					},
					{
						"date": "11/27/2008"
					},
					{
						"date": "09/07/2015"
					},
					{
						"date": "01/19/2026"
					},
					{
						"date": "11/12/2018"
					},
					{
						"date": "09/06/2021"
					},
					{
						"date": "05/28/2007"
					},
					{
						"date": "11/26/2015"
					},
					{
						"date": "11/11/2008"
					},
					{
						"date": "01/01/2020"
					},
					{
						"date": "05/25/2009"
					},
					{
						"date": "11/11/2013"
					},
					{
						"date": "01/01/2002"
					},
					{
						"date": "01/21/2002"
					},
					{
						"date": "01/01/2021"
					},
					{
						"date": "05/28/2012"
					},
					{
						"date": "12/26/2016"
					},
					{
						"date": "10/13/2008"
					},
					{
						"date": "07/04/2011"
					},
					{
						"date": "02/21/2011"
					},
					{
						"date": "01/20/2020"
					},
					{
						"date": "01/16/2023"
					},
					{
						"date": "11/11/2021"
					},
					{
						"date": "11/22/2018"
					},
					{
						"date": "11/27/2003"
					},
					{
						"date": "12/25/2014"
					},
					{
						"date": "11/11/2026"
					},
					{
						"date": "11/11/2002"
					},
					{
						"date": "11/12/2007"
					},
					{
						"date": "11/25/2010"
					},
					{
						"date": "09/06/2004"
					},
					{
						"date": "11/25/2027"
					},
					{
						"date": "01/01/2019"
					},
					{
						"date": "01/01/2007"
					},
					{
						"date": "01/18/2021"
					},
					{
						"date": "10/10/2022"
					},
					{
						"date": "12/25/2017"
					},
					{
						"date": "01/16/2012"
					},
					{
						"date": "05/27/2002"
					},
					{
						"date": "01/17/2011"
					},
					{
						"date": "11/11/2024"
					},
					{
						"date": "11/22/2012"
					},
					{
						"date": "01/01/2015"
					},
					{
						"date": "09/05/2022"
					},
					{
						"date": "05/26/2008"
					},
					{
						"date": "01/21/2019"
					},
					{
						"date": "10/12/2015"
					},
					{
						"date": "05/27/2019"
					},
					{
						"date": "06/18/2027"
					},
					{
						"date": "01/19/2015"
					},
					{
						"date": "07/04/2005"
					},
					{
						"date": "11/11/2005"
					},
					{
						"date": "01/20/2003"
					},
					{
						"date": "09/06/2027"
					},
					{
						"date": "12/24/2027"
					},
					{
						"date": "12/26/2005"
					},
					{
						"date": "07/04/2025"
					},
					{
						"date": "10/10/2011"
					},
					{
						"date": "07/03/2015"
					},
					{
						"date": "01/01/2027"
					},
					{
						"date": "06/20/2022"
					},
					{
						"date": "02/15/2010"
					},
					{
						"date": "07/04/2019"
					},
					{
						"date": "09/04/2017"
					},
					{
						"date": "11/24/2022"
					},
					{
						"date": "11/25/2021"
					},
					{
						"date": "11/10/2023"
					},
					{
						"date": "02/20/2023"
					},
					{
						"date": "11/22/2007"
					},
					{
						"date": "12/25/2006"
					},
					{
						"date": "02/19/2018"
					},
					{
						"date": "06/19/2026"
					},
					{
						"date": "12/26/2011"
					},
					{
						"date": "09/01/2008"
					},
					{
						"date": "02/18/2013"
					},
					{
						"date": "07/04/2012"
					},
					{
						"date": "12/25/2002"
					},
					{
						"date": "09/05/2016"
					},
					{
						"date": "11/11/2009"
					},
					{
						"date": "07/04/2016"
					},
					{
						"date": "10/14/2013"
					},
					{
						"date": "12/25/2013"
					},
					{
						"date": "01/01/2008"
					},
					{
						"date": "11/27/2025"
					},
					{
						"date": "05/30/2011"
					},
					{
						"date": "10/13/2025"
					},
					{
						"date": "09/07/2020"
					},
					{
						"date": "01/16/2017"
					},
					{
						"date": "01/15/2024"
					},
					{
						"date": "02/20/2006"
					},
					{
						"date": "02/17/2014"
					},
					{
						"date": "11/11/2020"
					},
					{
						"date": "02/21/2005"
					},
					{
						"date": "02/16/2026"
					},
					{
						"date": "11/28/2024"
					},
					{
						"date": "07/04/2023"
					},
					{
						"date": "05/31/2004"
					},
					{
						"date": "05/25/2026"
					},
					{
						"date": "12/24/2010"
					},
					{
						"date": "07/05/2010"
					},
					{
						"date": "05/30/2022"
					},
					{
						"date": "07/03/2026"
					},
					{
						"date": "02/19/2007"
					},
					{
						"date": "06/19/2023"
					},
					{
						"date": "10/12/2009"
					},
					{
						"date": "12/25/2003"
					},
					{
						"date": "09/05/2005"
					},
					{
						"date": "11/23/2006"
					},
					{
						"date": "07/05/2004"
					},
					{
						"date": "11/27/2014"
					},
					{
						"date": "01/19/2009"
					},
					{
						"date": "09/04/2023"
					},
					{
						"date": "02/17/2020"
					},
					{
						"date": "02/15/2021"
					},
					{
						"date": "11/11/2025"
					},
					{
						"date": "11/26/2020"
					},
					{
						"date": "07/04/2006"
					},
					{
						"date": "11/11/2019"
					},
					{
						"date": "10/14/2019"
					},
					{
						"date": "01/02/2006"
					},
					{
						"date": "07/04/2022"
					},
					{
						"date": "02/17/2025"
					},
					{
						"date": "10/09/2023"
					},
					{
						"date": "05/26/2025"
					},
					{
						"date": "12/25/2019"
					},
					{
						"date": "11/11/2016"
					},
					{
						"date": "05/26/2014"
					},
					{
						"date": "10/09/2017"
					},
					{
						"date": "11/11/2010"
					},
					{
						"date": "09/01/2014"
					},
					{
						"date": "01/01/2010"
					},
					{
						"date": "05/29/2006"
					},
					{
						"date": "11/11/2003"
					},
					{
						"date": "02/21/2022"
					},
					{
						"date": "01/02/2023"
					},
					{
						"date": "09/01/2003"
					},
					{
						"date": "07/04/2024"
					},
					{
						"date": "10/11/2027"
					},
					{
						"date": "01/01/2024"
					},
					{
						"date": "12/31/2021"
					},
					{
						"date": "05/27/2013"
					},
					{
						"date": "07/04/2018"
					},
					{
						"date": "01/01/2018"
					},
					{
						"date": "09/06/2010"
					},
					{
						"date": "12/25/2026"
					},
					{
						"date": "12/25/2012"
					},
					{
						"date": "10/11/2004"
					},
					{
						"date": "12/25/2007"
					},
					{
						"date": "11/23/2023"
					},
					{
						"date": "06/19/2025"
					},
					{
						"date": "07/04/2017"
					}
				],
				"cacheable": "false"
			},
			"claimFrequency": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273556788E9,
				"data": [
					{
						"name": "Nonpayment/Zero Claim",
						"code": "0"
					},
					{
						"name": "Admit-Through-Discharge Claim",
						"code": "1"
					},
					{
						"name": "Interim - First Claim",
						"code": "2"
					},
					{
						"name": "Interim - Continuing Claim",
						"code": "3"
					},
					{
						"name": "Interim - Last Claim",
						"code": "4"
					},
					{
						"name": "Late Charges Only Claim",
						"code": "5"
					},
					{
						"name": "Reserved",
						"code": "6"
					},
					{
						"name": "Replacement of a Prior Claim",
						"code": "7"
					},
					{
						"name": "Void/Cancel of a Prior Claim",
						"code": "8"
					},
					{
						"name": "Final Claim for Home Health PPS Episode",
						"code": "9"
					},
					{
						"name": "MSP Initiated Adjustment Claim",
						"code": "M"
					},
					{
						"name": "Claim Submitted for Reconsideration Outside of Timely Limits",
						"code": "Q"
					},
					{
						"name": "Hospice benefit period initial election notice",
						"code": "A"
					},
					{
						"name": "Change of provider",
						"code": "C"
					},
					{
						"name": "New Abbreviated Encounter Submission",
						"code": "Z"
					},
					{
						"name": "Void/cancel hospice election",
						"code": "D"
					},
					{
						"name": "Initiated Adjustment Claim",
						"code": "J"
					},
					{
						"name": "OIG Initiated Adjustment Claim",
						"code": "K"
					},
					{
						"name": "Void/Cancel a Prior Abbreviated Encounter Submission",
						"code": "X"
					},
					{
						"name": "Nonpayment/Zero Claims",
						"code": "O"
					},
					{
						"name": "CWF Initiated Adjustment Claim",
						"code": "G"
					},
					{
						"name": "QIO Adjustment Claim",
						"code": "P"
					},
					{
						"name": "CMS Initiated Adjustment Claim",
						"code": "H"
					},
					{
						"name": "Replacement of a Previous Abbreviated Encounter Submission",
						"code": "Y"
					},
					{
						"name": "Termination/revocation notice for previously posted hospice election",
						"code": "B"
					},
					{
						"name": "Hospice change of ownership",
						"code": "E"
					},
					{
						"name": "Beneficiary Initiated Adjustment Claim",
						"code": "F"
					},
					{
						"name": "Intermediary Adjustment Claim",
						"code": "I"
					}
				],
				"cacheable": "false"
			},
			"recordNumberCategory": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273556832E9,
				"data": [],
				"cacheable": "false"
			},
			"slidingFeePlans": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273502171E9,
				"data": null,
				"cacheable": "false"
			},
			"claimAuditDetails": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273520143E9,
				"data": [
					{
						"oldValue": "BILLED",
						"newValue": "HOLD",
						"createdBy": "ATHENA",
						"createdDate": "12/26/2023",
						"fieldName": "STATUS1"
					},
					{
						"oldValue": "DROP",
						"newValue": "BILLED",
						"createdBy": "BATCH",
						"createdDate": "12/22/2023",
						"fieldName": "STATUS1"
					},
					{
						"oldValue": null,
						"newValue": "12/22/2023",
						"createdBy": "BATCH",
						"createdDate": "12/22/2023",
						"fieldName": "PHYSICIANSIGNATUREDATE"
					},
					{
						"oldValue": "HOLD",
						"newValue": "DROP",
						"createdBy": "AUTO",
						"createdDate": "12/21/2023",
						"fieldName": "STATUS1"
					},
					{
						"oldValue": "DROP",
						"newValue": "HOLD",
						"createdBy": "AUTO",
						"createdDate": "12/13/2023",
						"fieldName": "STATUS1"
					},
					{
						"oldValue": null,
						"newValue": "13",
						"createdBy": "AUTO",
						"createdDate": "12/12/2023",
						"fieldName": "PRIMARYBILLINGPROVIDERID"
					},
					{
						"oldValue": null,
						"newValue": "1265050595",
						"createdBy": "AUTO",
						"createdDate": "12/12/2023",
						"fieldName": "PAYTONPI1"
					},
					{
						"oldValue": null,
						"newValue": "843894656",
						"createdBy": "AUTO",
						"createdDate": "12/12/2023",
						"fieldName": "PAYTOTAXID1"
					},
					{
						"oldValue": "CLOSED",
						"newValue": "DROP",
						"createdBy": "INTF-114996",
						"createdDate": "12/12/2023",
						"fieldName": "STATUS1"
					},
					{
						"oldValue": null,
						"newValue": null,
						"createdBy": "INTF-114996",
						"createdDate": "12/12/2023",
						"fieldName": "SELECTEDFORMAT2"
					},
					{
						"oldValue": null,
						"newValue": "30887",
						"createdBy": "INTF-114996",
						"createdDate": "12/12/2023",
						"fieldName": "PARENTCLAIMID"
					},
					{
						"oldValue": null,
						"newValue": null,
						"createdBy": "INTF-114996",
						"createdDate": "12/12/2023",
						"fieldName": "SELECTEDFORMAT1"
					}
				],
				"cacheable": "false"
			},
			"validEnrollmentStatuses": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273483351E9,
				"data": [
					{
						"npi": [
							"COMPLETE",
							"NOINFO",
							"WAIVED",
							"NONPAR",
							"NOTREQUIRED"
						]
					},
					{
						"verify": [
							"COMPLETE",
							"NOINFO",
							"WAIVED",
							"NOTREQUIRED"
						]
					},
					{
						"edi": [
							"COMPLETE",
							"NOINFO",
							"MASSIGNED",
							"MCLIENT",
							"MPAYER",
							"MOVERDUECLIENT",
							"MOVERDUEPAYER",
							"NOTREQUIRED",
							"CONFIRMED"
						]
					}
				],
				"cacheable": "false"
			},
			"historicalClaimNotesInfo": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273557248E9,
				"data": [],
				"cacheable": "false"
			},
			"patientRoundingDetails": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273583265E9,
				"data": [],
				"cacheable": "false"
			},
			"localHolidays": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273541164E9,
				"data": [
					{
						"name": "New Year's Day",
						"day": "01/01/2021",
						"dayOffYN": "Y"
					},
					{
						"name": "New Year's Day",
						"day": "01/01/2024",
						"dayOffYN": "Y"
					},
					{
						"name": "New Year's Day",
						"day": "01/01/2025",
						"dayOffYN": "Y"
					},
					{
						"name": "New Year's Day",
						"day": "01/01/2026",
						"dayOffYN": "Y"
					},
					{
						"name": "New Year's Day",
						"day": "01/01/2027",
						"dayOffYN": "Y"
					},
					{
						"name": "New Year's Day",
						"day": "01/02/2023",
						"dayOffYN": "Y"
					},
					{
						"name": "Martin Luther King's Birthday",
						"day": "01/15/2024",
						"dayOffYN": "Y"
					},
					{
						"name": "Martin Luther King's Birthday",
						"day": "01/16/2023",
						"dayOffYN": "Y"
					},
					{
						"name": "Martin Luther King's Birthday",
						"day": "01/17/2022",
						"dayOffYN": "Y"
					},
					{
						"name": "Martin Luther King's Birthday",
						"day": "01/18/2021",
						"dayOffYN": "Y"
					},
					{
						"name": "Martin Luther King's Birthday",
						"day": "01/18/2027",
						"dayOffYN": "Y"
					},
					{
						"name": "Martin Luther King's Birthday",
						"day": "01/19/2026",
						"dayOffYN": "Y"
					},
					{
						"name": "Martin Luther King's Birthday",
						"day": "01/20/2025",
						"dayOffYN": "Y"
					},
					{
						"name": "President's Day",
						"day": "02/15/2021",
						"dayOffYN": "Y"
					},
					{
						"name": "President's Day",
						"day": "02/15/2027",
						"dayOffYN": "Y"
					},
					{
						"name": "President's Day",
						"day": "02/16/2026",
						"dayOffYN": "Y"
					},
					{
						"name": "President's Day",
						"day": "02/17/2025",
						"dayOffYN": "Y"
					},
					{
						"name": "President's Day",
						"day": "02/19/2024",
						"dayOffYN": "Y"
					},
					{
						"name": "President's Day",
						"day": "02/20/2023",
						"dayOffYN": "Y"
					},
					{
						"name": "President's Day",
						"day": "02/21/2022",
						"dayOffYN": "Y"
					},
					{
						"name": "Memorial Day",
						"day": "05/25/2026",
						"dayOffYN": "Y"
					},
					{
						"name": "Memorial Day",
						"day": "05/26/2025",
						"dayOffYN": "Y"
					},
					{
						"name": "Memorial Day",
						"day": "05/27/2024",
						"dayOffYN": "Y"
					},
					{
						"name": "Memorial Day",
						"day": "05/29/2023",
						"dayOffYN": "Y"
					},
					{
						"name": "Memorial Day",
						"day": "05/30/2022",
						"dayOffYN": "Y"
					},
					{
						"name": "Memorial Day",
						"day": "05/31/2021",
						"dayOffYN": "Y"
					},
					{
						"name": "Memorial Day",
						"day": "05/31/2027",
						"dayOffYN": "Y"
					},
					{
						"name": "Independence Day",
						"day": "07/03/2026",
						"dayOffYN": "Y"
					},
					{
						"name": "Independence Day",
						"day": "07/04/2022",
						"dayOffYN": "Y"
					},
					{
						"name": "Independence Day",
						"day": "07/04/2023",
						"dayOffYN": "Y"
					},
					{
						"name": "Independence Day",
						"day": "07/04/2024",
						"dayOffYN": "Y"
					},
					{
						"name": "Independence Day",
						"day": "07/04/2025",
						"dayOffYN": "Y"
					},
					{
						"name": "Independence Day",
						"day": "07/05/2021",
						"dayOffYN": "Y"
					},
					{
						"name": "Independence Day",
						"day": "07/05/2027",
						"dayOffYN": "Y"
					},
					{
						"name": "Labor Day",
						"day": "09/01/2025",
						"dayOffYN": "Y"
					},
					{
						"name": "Labor Day",
						"day": "09/02/2024",
						"dayOffYN": "Y"
					},
					{
						"name": "Labor Day",
						"day": "09/04/2023",
						"dayOffYN": "Y"
					},
					{
						"name": "Labor Day",
						"day": "09/05/2022",
						"dayOffYN": "Y"
					},
					{
						"name": "Labor Day",
						"day": "09/06/2021",
						"dayOffYN": "Y"
					},
					{
						"name": "Labor Day",
						"day": "09/06/2027",
						"dayOffYN": "Y"
					},
					{
						"name": "Labor Day",
						"day": "09/07/2026",
						"dayOffYN": "Y"
					},
					{
						"name": "Columbus Day",
						"day": "10/09/2023",
						"dayOffYN": "Y"
					},
					{
						"name": "Columbus Day",
						"day": "10/10/2022",
						"dayOffYN": "Y"
					},
					{
						"name": "Columbus Day",
						"day": "10/11/2027",
						"dayOffYN": "Y"
					},
					{
						"name": "Columbus Day",
						"day": "10/12/2026",
						"dayOffYN": "Y"
					},
					{
						"name": "Columbus Day",
						"day": "10/13/2025",
						"dayOffYN": "Y"
					},
					{
						"name": "Columbus Day",
						"day": "10/14/2024",
						"dayOffYN": "Y"
					},
					{
						"name": "Veterans Day",
						"day": "11/10/2023",
						"dayOffYN": "Y"
					},
					{
						"name": "Veterans Day",
						"day": "11/11/2021",
						"dayOffYN": "Y"
					},
					{
						"name": "Veterans Day",
						"day": "11/11/2022",
						"dayOffYN": "Y"
					},
					{
						"name": "Veterans Day",
						"day": "11/11/2024",
						"dayOffYN": "Y"
					},
					{
						"name": "Veterans Day",
						"day": "11/11/2025",
						"dayOffYN": "Y"
					},
					{
						"name": "Veterans Day",
						"day": "11/11/2026",
						"dayOffYN": "Y"
					},
					{
						"name": "Veterans Day",
						"day": "11/11/2027",
						"dayOffYN": "Y"
					},
					{
						"name": "Thanksgiving Day",
						"day": "11/23/2023",
						"dayOffYN": "Y"
					},
					{
						"name": "Thanksgiving Day",
						"day": "11/24/2022",
						"dayOffYN": "Y"
					},
					{
						"name": "Thanksgiving Day",
						"day": "11/25/2021",
						"dayOffYN": "Y"
					},
					{
						"name": "Thanksgiving Day",
						"day": "11/25/2027",
						"dayOffYN": "Y"
					},
					{
						"name": "Thanksgiving Day",
						"day": "11/26/2026",
						"dayOffYN": "Y"
					},
					{
						"name": "Thanksgiving Day",
						"day": "11/27/2025",
						"dayOffYN": "Y"
					},
					{
						"name": "Thanksgiving Day",
						"day": "11/28/2024",
						"dayOffYN": "Y"
					},
					{
						"name": "Christmas Day (Observed)",
						"day": "12/24/2021",
						"dayOffYN": "Y"
					},
					{
						"name": "Christmas Day (Observed)",
						"day": "12/24/2027",
						"dayOffYN": "Y"
					},
					{
						"name": "Christmas Day",
						"day": "12/25/2023",
						"dayOffYN": "Y"
					},
					{
						"name": "Christmas Day",
						"day": "12/25/2024",
						"dayOffYN": "Y"
					},
					{
						"name": "Christmas Day",
						"day": "12/25/2025",
						"dayOffYN": "Y"
					},
					{
						"name": "Christmas Day",
						"day": "12/25/2026",
						"dayOffYN": "Y"
					},
					{
						"name": "Christmas Day",
						"day": "12/26/2022",
						"dayOffYN": "Y"
					},
					{
						"name": "New Year's Day (Observed)",
						"day": "12/31/2021",
						"dayOffYN": "Y"
					},
					{
						"name": "Juneteenth National Independence Day (Observed)",
						"day": "06/18/2027",
						"dayOffYN": "Y"
					},
					{
						"name": "Juneteenth National Independence Day",
						"day": "06/19/2023",
						"dayOffYN": "Y"
					},
					{
						"name": "Juneteenth National Independence Day",
						"day": "06/19/2024",
						"dayOffYN": "Y"
					},
					{
						"name": "Juneteenth National Independence Day",
						"day": "06/19/2025",
						"dayOffYN": "Y"
					},
					{
						"name": "Juneteenth National Independence Day",
						"day": "06/19/2026",
						"dayOffYN": "Y"
					},
					{
						"name": "Juneteenth National Independence Day (Observed)",
						"day": "06/20/2022",
						"dayOffYN": "Y"
					}
				],
				"cacheable": "false"
			},
			"rules2EnabledBizReq": {
				"data": [
					"7021",
					"6773",
					"7254",
					"6999",
					"6970",
					"7225",
					"7056",
					"6951",
					"6315",
					"7086",
					"6958",
					"7262",
					"7103",
					"6800",
					"7323",
					"7204",
					"7646",
					"7200",
					"7699",
					"7795",
					"7521",
					"7710",
					"8146",
					"8148",
					"8149",
					"8169",
					"6775",
					"6120",
					"6118",
					"6065",
					"6059",
					"6044",
					"6109",
					"6072",
					"6226",
					"6363",
					"7950",
					"7971",
					"8053",
					"8066",
					"8068",
					"8071",
					"8086",
					"8103",
					"8133",
					"8147",
					"8151",
					"8157",
					"8168",
					"8174",
					"7214",
					"7013",
					"6316",
					"6194",
					"7062",
					"6521",
					"7091",
					"6438",
					"6442",
					"6722",
					"113",
					"120",
					"168",
					"171",
					"175",
					"178",
					"366",
					"321",
					"6866",
					"6228",
					"81",
					"96",
					"7108",
					"6799",
					"7299",
					"7077",
					"6923",
					"6903",
					"6836",
					"6972",
					"7280",
					"6367",
					"6326",
					"427",
					"428",
					"429",
					"436",
					"395",
					"399",
					"403",
					"422",
					"426",
					"269",
					"283",
					"311",
					"27",
					"31",
					"38",
					"8124",
					"8127",
					"6279",
					"6377",
					"6034",
					"363",
					"317",
					"318",
					"319",
					"320",
					"6808",
					"6445",
					"6832",
					"6661",
					"6807",
					"6450",
					"6908",
					"6254",
					"6479",
					"6828",
					"6823",
					"205",
					"315",
					"419",
					"6174",
					"6070",
					"207",
					"214",
					"255",
					"264",
					"274",
					"195",
					"306",
					"313",
					"316",
					"57",
					"73",
					"90",
					"9226",
					"8941",
					"8857",
					"8774",
					"8295",
					"6648",
					"8503",
					"6576",
					"8719",
					"8859",
					"6402",
					"6522",
					"8672",
					"7009",
					"7662",
					"7669",
					"7726",
					"7915",
					"7925",
					"8472",
					"8473",
					"8482",
					"8483",
					"8497",
					"8511",
					"8674",
					"7042",
					"7391",
					"7450",
					"7705",
					"7738",
					"7824",
					"7922",
					"7939",
					"7962",
					"8000",
					"8023",
					"8682",
					"8405",
					"8407",
					"7206",
					"7386",
					"7570",
					"7668",
					"7755",
					"7933",
					"7935",
					"8004",
					"8069",
					"8085",
					"8095",
					"8154",
					"8207",
					"8444",
					"8463",
					"8495",
					"8548",
					"8552",
					"8554",
					"8627",
					"8636",
					"8639",
					"8664",
					"8671",
					"8738",
					"7510",
					"7637",
					"7639",
					"7649",
					"7336",
					"7556",
					"7615",
					"7618",
					"7674",
					"7686",
					"7697",
					"7717",
					"7730",
					"7793",
					"7946",
					"8007",
					"8008",
					"8028",
					"8050",
					"2",
					"3",
					"5",
					"6",
					"7",
					"8",
					"9",
					"10",
					"11",
					"12",
					"13",
					"7602",
					"7641",
					"7792",
					"7760",
					"7110",
					"7737",
					"7469",
					"7248",
					"6276",
					"7479",
					"7807",
					"7571",
					"7235",
					"6353",
					"8280",
					"8307",
					"8364",
					"8420",
					"8424",
					"8183",
					"8438",
					"8451",
					"8457",
					"14",
					"15",
					"16",
					"17",
					"18",
					"19",
					"22",
					"29",
					"30",
					"33",
					"7177",
					"6949",
					"6941",
					"6820",
					"6983",
					"6486",
					"6468",
					"6240",
					"7492",
					"7087",
					"7782",
					"8033",
					"6419",
					"7784",
					"7727",
					"7942",
					"7740",
					"7651",
					"7694",
					"6991",
					"7993",
					"7518",
					"7523",
					"6214",
					"6371",
					"6499",
					"6433",
					"6473",
					"6322",
					"6736",
					"6308",
					"6277",
					"6654",
					"6166",
					"6573",
					"6485",
					"6379",
					"6036",
					"6723",
					"6634",
					"6168",
					"6338",
					"6453",
					"6733",
					"6609",
					"6732",
					"6346",
					"6224",
					"6526",
					"6302",
					"6283",
					"6106",
					"6405",
					"6541",
					"6483",
					"6038",
					"6725",
					"6480",
					"6033",
					"6649",
					"6505",
					"6179",
					"6812",
					"6292",
					"6425",
					"6055",
					"6416",
					"6660",
					"6269",
					"6375",
					"6411",
					"6328",
					"6421",
					"6588",
					"6516",
					"6253",
					"6686",
					"6355",
					"6432",
					"6548",
					"6533",
					"6528",
					"6491",
					"6886",
					"6681",
					"6239",
					"6298",
					"6278",
					"6136",
					"6108",
					"6064",
					"6329",
					"6378",
					"6100",
					"6335",
					"6183",
					"6467",
					"6490",
					"6484",
					"6458",
					"6610",
					"6531",
					"6076",
					"6182",
					"6241",
					"6339",
					"6265",
					"6272",
					"6305",
					"6268",
					"6139",
					"6349",
					"6695",
					"6436",
					"6502",
					"6417",
					"6579",
					"6890",
					"6813",
					"6862",
					"6764",
					"6504",
					"6222",
					"6701",
					"6770",
					"6858",
					"8770",
					"8792",
					"8795",
					"8856",
					"8864",
					"8873",
					"8932",
					"6286",
					"6882",
					"7234",
					"7451",
					"7447",
					"7201",
					"7661",
					"7814",
					"7579",
					"7692",
					"8014",
					"6519",
					"6877",
					"7722",
					"7628",
					"8001",
					"8052",
					"7830",
					"7988",
					"7729",
					"7543",
					"8779",
					"8783",
					"6984",
					"7049",
					"6849",
					"6847",
					"7114",
					"7300",
					"7007",
					"6953",
					"7213",
					"8216",
					"8233",
					"8243",
					"8245",
					"8262",
					"8278",
					"8285",
					"8289",
					"8304",
					"8518",
					"8884",
					"8409",
					"8030",
					"8090",
					"8120",
					"8140",
					"8162",
					"6512",
					"8194",
					"8203",
					"8210",
					"8235",
					"121",
					"7482",
					"6821",
					"7623",
					"6333",
					"7541",
					"7074",
					"7704",
					"7713",
					"7428",
					"6939",
					"7831",
					"7636",
					"7617",
					"7614",
					"7107",
					"7605",
					"6498",
					"6879",
					"6860",
					"6463",
					"6435",
					"8250",
					"8268",
					"8271",
					"8281",
					"8282",
					"8302",
					"6130",
					"6340",
					"6597",
					"6927",
					"6968",
					"6105",
					"7292",
					"6273",
					"7325",
					"7403",
					"7630",
					"7667",
					"377",
					"383",
					"385",
					"387",
					"391",
					"392",
					"393",
					"394",
					"396",
					"397",
					"398",
					"400",
					"401",
					"402",
					"404",
					"405",
					"409",
					"412",
					"413",
					"325",
					"326",
					"328",
					"329",
					"330",
					"334",
					"337",
					"338",
					"341",
					"343",
					"348",
					"352",
					"354",
					"356",
					"8177",
					"8197",
					"8220",
					"8221",
					"8222",
					"8226",
					"8227",
					"8230",
					"8301",
					"8303",
					"8700",
					"8703",
					"8706",
					"8715",
					"8722",
					"8741",
					"6840",
					"368",
					"369",
					"151",
					"152",
					"153",
					"155",
					"166",
					"169",
					"170",
					"172",
					"173",
					"174",
					"179",
					"180",
					"9216",
					"7340",
					"7181",
					"7281",
					"7409",
					"7422",
					"7435",
					"7542",
					"7671",
					"8065",
					"8164",
					"6917",
					"6647",
					"6805",
					"6628",
					"6948",
					"7101",
					"6816",
					"7132",
					"7320",
					"7301",
					"7059",
					"145",
					"146",
					"147",
					"148",
					"150",
					"7503",
					"6960",
					"6752",
					"7575",
					"7319",
					"7194",
					"6256",
					"6784",
					"6084",
					"7407",
					"7673",
					"7783",
					"7066",
					"7837",
					"6682",
					"6053",
					"6223",
					"6922",
					"6727",
					"7313",
					"7028",
					"7076",
					"417",
					"421",
					"424",
					"6929",
					"7474",
					"6580",
					"7838",
					"7666",
					"7210",
					"7728",
					"7514",
					"7781",
					"7601",
					"7799",
					"7405",
					"7257",
					"7238",
					"7014",
					"7753",
					"7445",
					"7545",
					"6946",
					"7344",
					"7322",
					"7505",
					"7241",
					"7389",
					"7517",
					"7551",
					"7577",
					"94",
					"95",
					"97",
					"98",
					"99",
					"114",
					"9509",
					"7981",
					"8587",
					"8727",
					"8865",
					"8947",
					"8951",
					"9153",
					"6227",
					"8040",
					"8093",
					"8308",
					"8419",
					"8485",
					"8694",
					"8734",
					"8782",
					"9229",
					"9517",
					"9502",
					"8017",
					"8569",
					"8667",
					"8695",
					"8866",
					"8930",
					"8945",
					"9041",
					"7739",
					"8758",
					"9031",
					"9133",
					"9353",
					"8665",
					"8696",
					"8742",
					"8753",
					"8785",
					"8912",
					"8936",
					"9648",
					"9056",
					"9062",
					"9106",
					"7789",
					"8442",
					"8594",
					"8895",
					"8897",
					"8906",
					"8922",
					"8998",
					"9139",
					"6986",
					"7283",
					"8562",
					"8746",
					"8801",
					"8850",
					"8972",
					"9110",
					"9115",
					"9135",
					"9172",
					"9176",
					"7681",
					"8898",
					"6145",
					"6796",
					"7700",
					"8781",
					"6351",
					"7715",
					"7487",
					"6751",
					"6312",
					"5232",
					"6233",
					"8246",
					"7640",
					"8076",
					"149",
					"6601",
					"6251",
					"9146",
					"7430",
					"6092",
					"7444",
					"6574",
					"7048",
					"6282",
					"8791",
					"6867",
					"7718",
					"8290",
					"8496",
					"7658",
					"8737",
					"7488",
					"6757",
					"7413",
					"6814",
					"6494",
					"6420",
					"6887",
					"7486",
					"7919",
					"7411",
					"7652",
					"6837",
					"8711",
					"154",
					"7643",
					"8266",
					"7034",
					"8433",
					"6760",
					"9089",
					"9335",
					"8692",
					"8576",
					"9324",
					"9417",
					"9374",
					"9346",
					"9088",
					"9177",
					"9058",
					"8799",
					"9156",
					"6925",
					"8985",
					"8973",
					"9311",
					"8717",
					"9348",
					"7983",
					"9262",
					"9325",
					"6225",
					"9121",
					"9285",
					"9304",
					"8919",
					"9341",
					"9653",
					"10395",
					"10390",
					"7818",
					"8460",
					"8300",
					"8132",
					"7532",
					"9444",
					"9478",
					"9552",
					"9034",
					"9329",
					"9273",
					"9380",
					"9300",
					"9474",
					"9570",
					"9400",
					"9426",
					"8900",
					"9396",
					"9267",
					"9384",
					"9294",
					"9142",
					"9389",
					"9279",
					"9449",
					"9330",
					"9387",
					"9429",
					"9363",
					"9292",
					"9604",
					"9293",
					"9383",
					"9435",
					"9442",
					"9455",
					"9482",
					"9401",
					"10364",
					"10391",
					"10608",
					"9771",
					"9107",
					"9779",
					"9385",
					"9766",
					"8992",
					"9332",
					"8192",
					"9472",
					"9256",
					"9733",
					"8631",
					"9919",
					"9414",
					"9695",
					"9590",
					"9269",
					"9149",
					"9811",
					"9395",
					"9475",
					"9580",
					"9537",
					"9075",
					"9470",
					"9314",
					"9679",
					"9808",
					"9132",
					"8084",
					"9765",
					"7483",
					"9012",
					"9397",
					"9848",
					"9750",
					"9768",
					"9420",
					"9422",
					"9410",
					"10377",
					"10358",
					"10378",
					"10323",
					"8549",
					"9732",
					"9461",
					"9588",
					"9691",
					"9565",
					"9696",
					"9326",
					"9683",
					"9694",
					"9258",
					"9701",
					"9715",
					"9746",
					"9169",
					"8540",
					"9689",
					"9699",
					"9381",
					"9706",
					"8960",
					"9547",
					"7803",
					"9723",
					"8072",
					"8224",
					"9403",
					"9288",
					"9469",
					"9459",
					"9535",
					"9711",
					"9312",
					"9483",
					"9804",
					"9920",
					"9800",
					"9960",
					"10024",
					"9936",
					"10093",
					"10036",
					"9976",
					"9826",
					"9986",
					"10076",
					"10012",
					"9802",
					"9918",
					"9850",
					"9777",
					"9807",
					"9775",
					"9833",
					"10222",
					"9942",
					"10153",
					"9806",
					"9966",
					"10211",
					"10723",
					"10598",
					"10163",
					"8257",
					"9534",
					"9959",
					"9467",
					"10075",
					"10091",
					"10174",
					"9933",
					"9485",
					"9453",
					"8926",
					"9911",
					"10131",
					"8871",
					"9955",
					"9829",
					"10082",
					"10144",
					"10092",
					"10010",
					"10151",
					"9939",
					"10124",
					"10078",
					"10097",
					"6545",
					"9224",
					"9067",
					"9178",
					"9415",
					"8877",
					"10089",
					"10183",
					"10463",
					"10580",
					"10746",
					"10742",
					"6920",
					"10227",
					"6005"
				],
				"cacheable": "false"
			},
			"referralAuthorizations": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273492758E9,
				"data": [
					{
						"patientInsuranceId": null,
						"visitsLeft": null,
						"number": null,
						"deleted": null,
						"specialtyId": null,
						"typeId": null,
						"expirationDate": null,
						"visitsApproved": null,
						"startDate": null
					}
				],
				"cacheable": "false"
			},
			"attachmentTypeDetails": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.7089327350273E9,
				"data": [
					{
						"name": "Visit Note",
						"id": "VISITNOTE"
					},
					{
						"name": "Work Status Report",
						"id": "WORKSTATUSREPORT"
					},
					{
						"name": "Privacy Notice",
						"id": "PRIVACYNOTICE"
					},
					{
						"name": "Radiology Report",
						"id": "RADIOLOGYREPORT"
					},
					{
						"name": "Worker's Comp First Report",
						"id": "WORKERSCOMPFIRSTREPORT"
					},
					{
						"name": "Product Invoice",
						"id": "PRODUCTINVOICE"
					},
					{
						"name": "Surgery Note",
						"id": "SURGERYNOTE"
					},
					{
						"name": "Abortion Certification",
						"id": "ABORTIONCERTIFICATION"
					},
					{
						"name": "Authorization",
						"id": "AUTHORIZATION"
					},
					{
						"name": "Consent Form",
						"id": "CONSENTFORM"
					},
					{
						"name": "Discharge Summary/Consult Report",
						"id": "DISCHARGESUMMARY"
					},
					{
						"name": "Drug Description",
						"id": "DRUGDESCRIPTION"
					},
					{
						"name": "Fee Attachment",
						"id": "FEEATTACHMENT"
					},
					{
						"name": "Letter Of Appeal",
						"id": "LETTEROFAPPEAL"
					},
					{
						"name": "Maternity Risk Screening",
						"id": "MATERNITYRISK"
					},
					{
						"name": "Certificate Of Medical Necessity",
						"id": "MEDICALNECESSITY"
					},
					{
						"name": "Medical Record",
						"id": "MEDICALRECORD"
					},
					{
						"name": "Operative Note",
						"id": "OPERATIVENOTE"
					},
					{
						"name": "Other Documentation",
						"id": "OTHERDOCUMENTATION"
					},
					{
						"name": "Payment Application",
						"id": "PAYMENTAPPLICATION"
					},
					{
						"name": "Physician Order",
						"id": "PHYSICIANORDER"
					},
					{
						"name": "Referral",
						"id": "REFERRAL"
					},
					{
						"name": "Treatment Plan",
						"id": "TREATMENTPLAN"
					},
					{
						"name": "Voucher",
						"id": "VOUCHER"
					},
					{
						"name": "Waiver",
						"id": "WAIVER"
					},
					{
						"name": "Temporary Detaining Order",
						"id": "TEMPDETAIN"
					},
					{
						"name": "Physical Therapy Note",
						"id": "PTNOTE"
					},
					{
						"name": "Explanation of Benefits Copy",
						"id": "EOBATTACHMENT"
					},
					{
						"name": "Consult Notes",
						"id": "CONSULTNOTES"
					},
					{
						"name": "Additional Supporting Documentation",
						"id": "ADDITIONALDOC"
					},
					{
						"name": "Letter of Protection",
						"id": "LETTEROFPROTECTION"
					},
					{
						"name": "Payer Reconsideration Form",
						"id": "LETTEROFRECONSIDERTAION"
					},
					{
						"name": "Proof of Submission",
						"id": "PROOFOFSUBMISSION"
					},
					{
						"name": "Anesthesia Report",
						"id": "ANESTHESIAREPORT"
					},
					{
						"name": "Signed Workers' Comp Form & Documentation",
						"id": "SIGNEDWORKERSCOMP"
					},
					{
						"name": "MVA PIP Exhaustion Letter",
						"id": "MVAPIPEXHAUSTED"
					},
					{
						"name": "Patient Care Report",
						"id": "PATIENTCARERPT"
					},
					{
						"name": "WC Visit Note",
						"id": "WCVISITNOTE"
					},
					{
						"name": "MVA Visit Notes",
						"id": "MVAVISITNOTE"
					},
					{
						"name": "Receipts",
						"id": "RECEIPTS"
					},
					{
						"name": "Drug Screening Results",
						"id": "DRUGSCREEN"
					},
					{
						"name": "Letter from Payer",
						"id": "PAYERLETTER"
					},
					{
						"name": "No Surprises Act Consent",
						"id": "NOSURPISESACTCONSENT"
					},
					{
						"name": "FL PIP Disclosure & Ack Form",
						"id": "FLPIPDISCLOSUREACK"
					}
				],
				"cacheable": "false"
			},
			"referringProviders": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273502433E9,
				"data": [],
				"cacheable": "false"
			},
			"chargeAmounts": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273568133E9,
				"data": [],
				"cacheable": "false"
			},
			"employers": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273517503E9,
				"data": [],
				"cacheable": "false"
			},
			"enrollmentCategories": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273534623E9,
				"data": [],
				"cacheable": "false"
			},
			"interfaceVendors": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273495583E9,
				"data": [],
				"cacheable": "false"
			},
			"admissionTypes": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273556539E9,
				"data": [
					{
						"name": "Emergency",
						"code": "1"
					},
					{
						"name": "Urgent",
						"code": "2"
					},
					{
						"name": "Elective",
						"code": "3"
					},
					{
						"name": "Newborn",
						"code": "4"
					},
					{
						"name": "Trauma Center",
						"code": "5"
					},
					{
						"name": "Information Not Available",
						"code": "9"
					}
				],
				"cacheable": "false"
			},
			"providerRecordNumbers": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.7089327349572E9,
				"data": [],
				"cacheable": "false"
			},
			"pharmacy": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.7089327348863E9,
				"data": [],
				"cacheable": "false"
			},
			"reportMaps": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273506857E9,
				"data": [
					{
						"reportData": [],
						"name": "Medicaid-OK Provider Specific Zip+4",
						"id": 0
					},
					{
						"reportData": [],
						"name": "FQHC Off-Site Services",
						"id": 0
					}
				],
				"cacheable": "false"
			},
			"procedureCodeParentChild": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273534766E9,
				"data": null,
				"cacheable": "false"
			},
			"prepayments": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273569606E9,
				"data": [],
				"cacheable": "false"
			},
			"providerTypes": {
				"rules2UpdatedTime": "",
				"updated_timestamp": 1.70893273494288E9,
				"data": [
					{
						"name": "BEHAVIORAL HEALTH CERTIFICATION",
						"category": "Staff",
						"id": "BH",
						"displayName": "Behavioral Health Certification (BH)"
					},
					{
						"name": "Certified Nurse Midwife (CNM)",
						"category": "Mid-level",
						"id": "CNM",
						"displayName": "Certified Nurse Midwife (CNM)"
					},
					{
						"name": "DOCTOR OF OSTEOPATHY (DO)",
						"category": "MD",
						"id": "DO",
						"displayName": "Doctor of Osteopathy (DO)"
					},
					{
						"name": "CLINICAL PSYCHOLOGIST (EDD)",
						"category": "MD",
						"id": "EDD",
						"displayName": "Clinical Psychologist (EDD)"
					},
					{
						"name": "EQUIPMENT",
						"category": "Staff",
						"id": "EQUIP",
						"displayName": "Equipment (EQUIP)"
					},
					{
						"name": "LICENSED CLINICAL SOCIAL WORKER (LCSW)",
						"category": "Mid-level",
						"id": "LCSW",
						"displayName": "Licensed Clinical Social Worker (LCSW)"
					},
					{
						"name": "LICENSED PRACTICAL NURSE",
						"category": "Staff",
						"id": "LPN",
						"displayName": "Licensed Practical Nurse (LPN)"
					},
					{
						"name": "LOCUM TENENS",
						"category": "MD",
						"id": "LT",
						"displayName": "Locum Tenens (LT)"
					},
					{
						"name": "Medical Assistant (MA)",
						"category": "Staff",
						"id": "MA",
						"displayName": "Medical Assistant (MA)"
					},
					{
						"name": "MD",
						"category": "MD",
						"id": "MD",
						"displayName": "Medical Doctor (MD)"
					},
					{
						"name": "MS/RD",
						"category": "Staff",
						"id": "MS/RD",
						"displayName": "Masters of Science/Registered Dietician (MS/RD)"
					},
					{
						"name": "Master Social Worker (MSW)",
						"category": "Mid-level",
						"id": "MSW",
						"displayName": "Master Social Worker (MSW)"
					},
					{
						"name": "Nurse Practitioner (NP)",
						"category": "Mid-level",
						"id": "NP",
						"displayName": "Nurse Practitioner (NP)"
					},
					{
						"name": "NURSE PRACTITIONER, SUPERVISING(NP,S)",
						"category": "Mid-level",
						"id": "NP, S",
						"displayName": "Nurse Practitioner, Supervising (NP, S)"
					},
					{
						"name": "Nutritionist (NUTR)",
						"category": "Staff",
						"id": "NUTR",
						"displayName": "Nutritionist (NUTR)"
					},
					{
						"name": "PHYSICAL THERAPIST (OTR)",
						"category": "Mid-level",
						"id": "OTR",
						"displayName": "Physical Therapist (OTR)"
					},
					{
						"name": "CLINICAL PSYCHOLOGIST (PHD)",
						"category": "MD",
						"id": "PHD",
						"displayName": "Clinical Psychologist (PHD)"
					},
					{
						"name": "Perinatal Coordinator (PNC)",
						"category": "Staff",
						"id": "PNC",
						"displayName": "Perinatal Coordinator (PNC)"
					},
					{
						"name": "RESIDENT",
						"category": "MD",
						"id": "RES",
						"displayName": "Resident (RES)"
					},
					{
						"name": "Registered Nurse (RN)",
						"category": "Staff",
						"id": "RN",
						"displayName": "Registered Nurse (RN)"
					},
					{
						"name": "TECHNICAL",
						"category": "Staff",
						"id": "TECH",
						"displayName": "Technical (TECH)"
					},
					{
						"name": "LICENSED PROFESSIONAL COUNSELOR (LPC)",
						"category": "Staff",
						"id": "LPC",
						"displayName": "Licensed Professional Counselor (LPC)"
					},
					{
						"name": "PHYSICIAN ASSISTANT, SUPERVISING",
						"category": "Mid-level",
						"id": "PASUP",
						"displayName": "Physician Assistant, Supervising (PASUP)"
					},
					{
						"name": "CERTIFIED CLINICAL AUDIOLOGIST",
						"category": "Staff",
						"id": "CCCA",
						"displayName": "Certified Clinical Audiologist (CCCA)"
					},
					{
						"name": "NUTRITIONIST, SUPERVISING",
						"category": "Staff",
						"id": "NUTRSUP",
						"displayName": "Nutritionist, Supervising (NUTRSUP)"
					},
					{
						"name": "CERTIFIED FIRST ASSISTANT",
						"category": "Mid-level",
						"id": "CFA",
						"displayName": "Certified First Assistant (CFA)"
					},
					{
						"name": "DOCTOR OF CHIROPRACTIC",
						"category": "MD",
						"id": "DC",
						"displayName": "Doctor of Chiropractic (DC)"
					},
					{
						"name": "CERTIFIED ORTHOTIST",
						"category": "Staff",
						"id": "CO",
						"displayName": "Certified Orthotist (CO)"
					},
					{
						"name": "CERTIFIED PROSTHETIST/ORTHOTIST",
						"category": "Staff",
						"id": "CPO",
						"displayName": "Certified Prosthetist/Orthotist (CPO)"
					},
					{
						"name": "CERTIFIED REGISTERED NURSE ANESTHESIOLOGIST",
						"category": "Mid-level",
						"id": "CRNA",
						"displayName": "Certified Registered Nurse Anesthesiologist (CRNA)"
					},
					{
						"name": "CRNA,SUPERVISING",
						"category": "Mid-level",
						"id": "CRNASUP",
						"displayName": "Certified Registered Nurse Anesthesiologist, Supervising (CRNASUP)"
					},
					{
						"name": "REGISTERED NURSE FIRST ASSISTANT",
						"category": "Staff",
						"id": "RNFA",
						"displayName": "Registered Nurse First Assistant (RNFA)"
					},
					{
						"name": "CLINICAL NURSE SPECIALIST",
						"category": "Mid-level",
						"id": "CNS",
						"displayName": "Clinical Nurse Specialist (CNS)"
					},
					{
						"name": "DOCTOR OF NATUROPATHY",
						"category": "MD",
						"id": "ND",
						"displayName": "Doctor of Naturopathy (ND)"
					},
					{
						"name": "STUDENT NURSE ANESTHETIST",
						"category": "Staff",
						"id": "SRNA",
						"displayName": "Student Nurse Anesthetist (SRNA)"
					},
					{
						"name": "SPEECH AND LANGUAGE PATHOLOGIST",
						"category": "Staff",
						"id": "SLP",
						"displayName": "Speech and Language Pathologist (SLP)"
					},
					{
						"name": "CERTIFIED PHYSICIAN ASSISTANT",
						"category": "Mid-level",
						"id": "PA-C",
						"displayName": "Certified Physician Assistant (PA-C)"
					},
					{
						"name": "CERTIFIED SURGICAL ASSISTANT",
						"category": "Unknown",
						"id": "CSA",
						"displayName": "Certified Surgical Assistant (CSA)"
					},
					{
						"name": "LICENSED SURGICAL ASSISTANT",
						"category": "Staff",
						"id": "LSA",
						"displayName": "Licensed Surgical Assistant (LSA)"
					},
					{
						"name": "LICENSED PHYSICAL THERAPIST,SUPERVISING",
						"category": "Mid-level",
						"id": "LPTSUP",
						"displayName": "Licensed Physical Therapist, Supervising (LPTSUP)"
					},
					{
						"name": "LICENSED ACUPUNCTURIST",
						"category": "Staff",
						"id": "AP",
						"displayName": "Licensed Acupuncturist (AP)"
					},
					{
						"name": "DOCTOR OF AUDIOLOGY",
						"category": "MD",
						"id": "AU.D",
						"displayName": "Doctor of Audiology (AU.D)"
					},
					{
						"name": "CERTIFIED REGISTERED NURSE PRACTITIONER",
						"category": "Mid-level",
						"id": "CRNP",
						"displayName": "Certified Registered Nurse Practitioner (CRNP)"
					},
					{
						"name": "CNA, ALLERGY TECH",
						"category": "Staff",
						"id": "CNA,TECH",
						"displayName": "Certified Nurse Anesthesiologist, Allergy Tech (CNA,TECH)"
					},
					{
						"name": "LICENSED PERFUSIONIST",
						"category": "Unknown",
						"id": "LP",
						"displayName": "Licensed Perfusionist (LP)"
					},
					{
						"name": "CERTIFIED CLINICAL PERFUSIONIST",
						"category": "Unknown",
						"id": "CCP",
						"displayName": "Certified Clinical Perfusionist (CCP)"
					},
					{
						"name": "RESPIRATORY THERAPIST",
						"category": "Staff",
						"id": "RT",
						"displayName": "Respiratory Therapist (RT)"
					},
					{
						"name": "CHILD LIFE SPECIALIST",
						"category": "Staff",
						"id": "CLS",
						"displayName": "Child Life Specialist (CLS)"
					},
					{
						"name": "CERTIFIED PROSTHETIST",
						"category": "Staff",
						"id": "CP",
						"displayName": "Certified Prosthetist (CP)"
					},
					{
						"name": "CERTIFIED FITTER - ORTHOTICS",
						"category": "Unknown",
						"id": "CFO",
						"displayName": "Certified Fitter - Orthotics (CFO)"
					},
					{
						"name": "CERTIFIED ADULT NURSE PRACTITIONER",
						"category": "Mid-level",
						"id": "ANP-C",
						"displayName": "Certified Adult Nurse Practitioner (ANP-C)"
					},
					{
						"name": "CERTIFIED REHABILITATION COUNSELOR",
						"category": "Staff",
						"id": "CRC",
						"displayName": "Certified Rehabilitation Counselor (CRC)"
					},
					{
						"name": "MASTERS OF COUNSELING AND PSYCHOLOGY",
						"category": "Staff",
						"id": "MCP",
						"displayName": "Masters of Counseling and Psychology (MCP)"
					},
					{
						"name": "MASTERS NURSING SCIENCE",
						"category": "Mid-level",
						"id": "MSN",
						"displayName": "Masters Nursing Science (MSN)"
					},
					{
						"name": "ANESTHESIOLOGIST ASSISTANT",
						"category": "Mid-level",
						"id": "AA",
						"displayName": "Anesthesiologist Assistant (AA)"
					},
					{
						"name": "CERTIFIED ADDICTION COUNSELOR I",
						"category": "Staff",
						"id": "CAC I",
						"displayName": "Certified Addiction Counselor I (CAC I)"
					},
					{
						"name": "ADVANCED PRACTICE NURSE",
						"category": "Mid-level",
						"id": "APN",
						"displayName": "Advanced Practice Nurse (APN)"
					},
					{
						"name": "REGISTERED VASCULAR TECHNOLOGIST",
						"category": "Staff",
						"id": "RVT",
						"displayName": "Registered Vascular Technologist (RVT)"
					},
					{
						"name": "REGISTERED RADIOLOGY TECHNICIAN",
						"category": "Staff",
						"id": "RRT",
						"displayName": "Registered Radiology Technician (RRT)"
					},
					{
						"name": "CERTIFIED ORTHOPEDIC TECHNICIAN",
						"category": "Staff",
						"id": "OTC",
						"displayName": "Certified Orthopedic Technician (OTC)"
					},
					{
						"name": "CERTIFIED ATHLETIC TRAINER",
						"category": "Staff",
						"id": "ATC",
						"displayName": "Certified Athletic Trainer (ATC)"
					},
					{
						"name": "ADVANCED PRACTICE REGISTERED NURSE",
						"category": "Mid-level",
						"id": "APRN",
						"displayName": "Advanced Practice Registered Nurse (APRN)"
					},
					{
						"name": "EMERGENCY MEDICAL TECHNICIAN, SUPERVISING",
						"category": "Staff",
						"id": "EMTSUP",
						"displayName": "Emergency Medical Technician, Supervising (EMTSUP)"
					},
					{
						"name": "EMERGENCY MEDICAL TECHNICIAN",
						"category": "Staff",
						"id": "EMT",
						"displayName": "Emergency Medical Technician (EMT)"
					},
					{
						"name": "ZZ",
						"category": "Staff",
						"id": "DTP",
						"displayName": "ZZ"
					},
					{
						"name": "DOCTORATE OF PHYSICAL THERAPY",
						"category": "Mid-level",
						"id": "DPT",
						"displayName": "Doctorate of Physical Therapy (DPT)"
					},
					{
						"name": "DRIVER",
						"category": "Staff",
						"id": "DRIVER",
						"displayName": "Driver (DRIVER)"
					},
					{
						"name": "MASTERS OF PHYSICAL THERAPY",
						"category": "Mid-level",
						"id": "MPT",
						"displayName": "Masters of Physical Therapy (MPT)"
					},
					{
						"name": "LICENSED MIDWIFE",
						"category": "Mid-level",
						"id": "LM",
						"displayName": "Licensed Midwife (LM)"
					},
					{
						"name": "STUDENT OF PHYSICAL THERAPY",
						"category": "Mid-level",
						"id": "SPT",
						"displayName": "Student of Physical Therapy (SPT)"
					},
					{
						"name": "STUDENT OF PHYSICAL THERAPY (ASSISTANT)",
						"category": "Mid-level",
						"id": "SPTA",
						"displayName": "Student of Physical Therapy Assistant (SPTA)"
					},
					{
						"name": "DOCTOR OF PHARMACY (PHARMD)",
						"category": "Mid-level",
						"id": "PHARMD",
						"displayName": "Doctor of Pharmacy (PHARMD)"
					},
					{
						"name": "CERTIFIED PASTORAL COUNSELOR",
						"category": "Mid-level",
						"id": "CPASTC",
						"displayName": "Certified Pastoral Counselor (CPASTC)"
					},
					{
						"name": "DOCTOR OF DENTAL MEDICINE",
						"category": "MD",
						"id": "DMD",
						"displayName": "Doctor of Dental Medicine (DMD)"
					},
					{
						"name": "REGISTERED DENTAL HYGIENIST",
						"category": "Staff",
						"id": "RDH",
						"displayName": "Registered Dental Hygienist (RDH)"
					},
					{
						"name": "PUBLIC HEALTH DENTAL HYGIENIST",
						"category": "Staff",
						"id": "PHDH",
						"displayName": "Public Health Dental Hygienist (PHDH)"
					},
					{
						"name": "LICENSED PSYCHOLOGICAL ASSOCIATE",
						"category": "Mid-level",
						"id": "LPA",
						"displayName": "Licensed Psychological Associate (LPA)"
					},
					{
						"name": "LICENSED CLINICAL ADDICTION SPECIALIST",
						"category": "Mid-level",
						"id": "LCAS",
						"displayName": "Licensed Clinical Addiction Specialist (LCAS)"
					},
					{
						"name": "CLINICAL PSYCHOLOGIST (MA)",
						"category": "Mid-level",
						"id": "PSYMA",
						"displayName": "Clinical Psychologist (PSYMA)"
					},
					{
						"name": "CERTIFIED DISABILITY CASE MANAGER (CDMS)",
						"category": "Mid-level",
						"id": "CDMS",
						"displayName": "Certified Disability Case Manager (CDMS)"
					},
					{
						"name": "INTERNATIONAL BOARD CERTIFIED LACTATION CONSULTANT",
						"category": "Mid-level",
						"id": "IBCLC",
						"displayName": "International Board Certified Lactation Consultant (IBCLC)"
					},
					{
						"name": "ADULT NURSE PRACTITIONER-BOARD CERTIFIED",
						"category": "Mid-level",
						"id": "ANP-BC",
						"displayName": "Adult Nurse practitioner-Board Certified (ANP-BC)"
					},
					{
						"name": "MASTER OF SCIENCE OF PHYSICAL THERAPY",
						"category": "Mid-level",
						"id": "MSPT",
						"displayName": "Master of Science of Physical Therapy (MSPT)"
					},
					{
						"name": "PHYSICAL THERAPY ASSISTANT",
						"category": "Mid-level",
						"id": "PTA",
						"displayName": "Physical Therapy Assistant (PTA)"
					},
					{
						"name": "HIGH-LEVEL APPLIED BEHAVIOR ANALYST",
						"category": "Mid-level",
						"id": "ABA-H",
						"displayName": "High-level Applied Behavior Analyst (ABA-H)"
					},
					{
						"name": "BEHAVIOR INTERVENTIONIST",
						"category": "Mid-level",
						"id": "BI",
						"displayName": "Behavior Interventionist (BI)"
					},
					{
						"name": "EARLY INTERVENTIONIST",
						"category": "Mid-level",
						"id": "EI",
						"displayName": "Early Interventionist (EI)"
					},
					{
						"name": "MID-LEVEL APPLIED BEHAVIOR ANALYST",
						"category": "Mid-level",
						"id": "ABA-M",
						"displayName": "Mid-level Applied Behavior Analyst (ABA)"
					},
					{
						"name": "REGISTERED MEDICAL ASSISTANT",
						"category": "Staff",
						"id": "RMA",
						"displayName": "Registered Medical Assistant (RMA)"
					},
					{
						"name": "CERTIFIED MEDICAL ASSISTANT",
						"category": "Staff",
						"id": "CMA",
						"displayName": "Certified Medical Assistant (CMA)"
					},
					{
						"name": "CLINICAL SOCIAL WORKER",
						"category": "Mid-level",
						"id": "CSW",
						"displayName": "Clinical Social Worker (CSW)"
					},
					{
						"name": "REGISTERED DIETITIAN",
						"category": "Mid-level",
						"id": "RD",
						"displayName": "Registered Dietitian (RD)"
					},
					{
						"name": "LICENSED DIETITIAN",
						"category": "Mid-level",
						"id": "LD",
						"displayName": "Licensed Dietitian (LD)"
					},
					{
						"name": "LICENSED AESTHETICIAN",
						"category": "Mid-level",
						"id": "LA",
						"displayName": "Licensed Aesthetician (LA)"
					},
					{
						"name": "DOCTOR OF ORIENTAL MEDICINE",
						"category": "MD",
						"id": "DOM",
						"displayName": "Doctor of Oriental Medicine (DOM)"
					},
					{
						"name": "GRADUATE OF PHYSICAL THERAPY",
						"category": "Mid-level",
						"id": "GPT",
						"displayName": "Graduate of Physical Therapy (GPT)"
					},
					{
						"name": "CASE MANAGER",
						"category": "Mid-level",
						"id": "CM",
						"displayName": "Case Manager (CM)"
					},
					{
						"name": "CERTIFIED LACTATION CONSULTANT",
						"category": "Mid-level",
						"id": "CLC",
						"displayName": "Certified Lactation Consultant (CLC)"
					},
					{
						"name": "PSYCHIATRIC-MENTAL HEALTH NURSE PRACTITIONER",
						"category": "Mid-level",
						"id": "PMHNP",
						"displayName": "Psychiatric-mental health nurse practitioner (PMHNP)"
					},
					{
						"name": "TRANSCRIPTIONIST",
						"category": "Staff",
						"id": "MT",
						"displayName": "Transcriptionist (MT)"
					},
					{
						"name": "CERTIFIED NURSING ASSISTANT",
						"category": "Staff",
						"id": "CNA",
						"displayName": "Certified Nursing Assistant (CNA)"
					},
					{
						"name": "ACUTE CARE - NURSE PRACTITIONER",
						"category": "Mid-level",
						"id": "ACNP",
						"displayName": "Acute Care - Nurse Practitioner (ACNP)"
					},
					{
						"name": "COMMUNITY HEALTH OUTREACH WORKER",
						"category": "Staff",
						"id": "CHW",
						"displayName": "Community Health Outreach Worker (CHW)"
					},
					{
						"name": "MEDICAL STUDENT",
						"category": "Staff",
						"id": "MS",
						"displayName": "Medical Student (MS)"
					},
					{
						"name": "MASTERS, GENETIC COUNSELING",
						"category": "Staff",
						"id": "MS, CGC",
						"displayName": "Masters, Genetic Counseling (MS, CGC)"
					},
					{
						"name": "PSYCHOMETRICIAN",
						"category": "Mid-level",
						"id": "PSM",
						"displayName": "Psychometrician (PSM)"
					},
					{
						"name": "BRAIN COACH",
						"category": "Staff",
						"id": "BC",
						"displayName": "Brain Coach (BC)"
					},
					{
						"name": "STUDENT OCCUPATIONAL THERAPY",
						"category": "Mid-level",
						"id": "SOT",
						"displayName": "Student Occupational Therapy (SOT)"
					},
					{
						"name": "STUDENT SPEECH THERAPY",
						"category": "Mid-level",
						"id": "SST",
						"displayName": "Student Speech Therapy (SST)"
					},
					{
						"name": "ASSOCIATE LICENSED CLINICAL SOCIAL WORKER (LCSW-A)",
						"category": "Mid-level",
						"id": "LCSW-A",
						"displayName": "Associate Licensed Clinical Social Worker (LCSW-A)"
					},
					{
						"name": "LICENSED PROFESSIONAL COUNSELOR (LPC-A)",
						"category": "Mid-level",
						"id": "LPC-A",
						"displayName": "Licensed Professional Counselor (LPC-A)"
					},
					{
						"name": "STUDENT NURSE PRACTITIONER",
						"category": "Mid-level",
						"id": "SNP",
						"displayName": "Student Nurse Practitioner (SNP)"
					},
					{
						"name": "RADIOLOGIST SPECIALIST ASSISTANT",
						"category": "Staff",
						"id": "RSA",
						"displayName": "Radiologist Specialist Assistant (RSA)"
					},
					{
						"name": "CHEMICAL DEPENDENCY PROFESSIONAL (CDP)",
						"category": "Mid-level",
						"id": "CDP",
						"displayName": "Chemical Dependency Professional (CDP)"
					},
					{
						"name": "DOCTOR OF SCIENCE IN PHYSICAL THERAPY",
						"category": "Mid-level",
						"id": "DSCPT",
						"displayName": "Doctor of Science in Physical Therapy (DSCPT)"
					},
					{
						"name": "NURSE EDUCATOR",
						"category": "Staff",
						"id": "NE",
						"displayName": "Nurse Educator"
					},
					{
						"name": "HEALTH EDUCATOR",
						"category": "Staff",
						"id": "HE",
						"displayName": "Health Educator"
					},
					{
						"name": "JOB COACH",
						"category": "Staff",
						"id": "JC",
						"displayName": "JOB COACH"
					},
					{
						"name": "LICENSED CLINICAL PROFESSIONAL COUNSELOR",
						"category": "Staff",
						"id": "LCPC",
						"displayName": "Licensed Clinical Professional Counselor (LCPC)"
					},
					{
						"name": "CERTIFIED PROFESSIONAL MIDWIFE (CPM)",
						"category": "Mid-level",
						"id": "CPM",
						"displayName": "Certified Professional Midwife (CPM)"
					},
					{
						"name": "CERTIFIED ALCOHOL AND DRUG COUNSELOR II",
						"category": "Mid-level",
						"id": "CADC II",
						"displayName": "Certified Alcohol and Drug Counselor II (CADC II)"
					},
					{
						"name": "CERTIFIED ALCOHOL AND DRUG COUNSELOR III",
						"category": "Staff",
						"id": "CADCIII",
						"displayName": "Certified Alcohol and Drug Counselor III (CADCIII)"
					},
					{
						"name": "COMMUNITY HEALTH AIDE, LEVEL 1",
						"category": "Staff",
						"id": "CHA1",
						"displayName": "Community Health Aide, Level 1"
					},
					{
						"name": "COMMUNITY HEALTH PRACTITIONER",
						"category": "Mid-level",
						"id": "CHP",
						"displayName": "Community Health Practitioner (CHP)"
					},
					{
						"name": "COMMUNITY HEALTH AIDE, LEVEL 3",
						"category": "Staff",
						"id": "CHA3",
						"displayName": "Community Health Aide, Level 3"
					},
					{
						"name": "DO NOT USE",
						"category": "Staff",
						"id": "CH3",
						"displayName": "do not use"
					},
					{
						"name": "COMMUNITY HEALTH AIDE, LEVEL 2",
						"category": "Staff",
						"id": "CHA2",
						"displayName": "Community Health Aide, Level 2"
					},
					{
						"name": "COMMUNITY HEALTH AIDE, LEVEL 4",
						"category": "Staff",
						"id": "CHA4",
						"displayName": "Community Health Aide, Level 4"
					},
					{
						"name": "GRADUATE PHYSICAL THERAPIST ASSISTANT (GPTA)",
						"category": "Mid-level",
						"id": "GPTA",
						"displayName": "Graduate Physical Therapist Assistant (GPTA)"
					},
					{
						"name": "CERTIFIED DIABETIC EDUCATOR",
						"category": "Unknown",
						"id": "CDE",
						"displayName": "Certified Diabetic Educator (CDE)"
					},
					{
						"name": "CERTIFIED ADDICTION COUNSELOR II",
						"category": "Staff",
						"id": "CAC II",
						"displayName": "Certified Addiction Counselor II (CAC II)"
					},
					{
						"name": "LICENSED MARRIAGE AND FAMILY THERAPIST",
						"category": "Mid-level",
						"id": "LMFT",
						"displayName": "Licensed Marriage and Family Therapist (LMFT)"
					},
					{
						"name": "TRANSPORTATION",
						"category": "Staff",
						"id": "TRAN",
						"displayName": "Transportation (TRAN)"
					},
					{
						"name": "OPTOMETRIST (OD)",
						"category": "MD",
						"id": "OD",
						"displayName": "Optometrist (OD)"
					},
					{
						"name": "LICENSED PHYSICAL THERAPIST (LPT)",
						"category": "Mid-level",
						"id": "LPT",
						"displayName": "Licensed Physical Therapist (LPT)"
					},
					{
						"name": "FAMILY NURSE PRACTITIONER, BOARD CERTIFIED",
						"category": "Mid-level",
						"id": "FNP-BC",
						"displayName": "Family Nurse Practitioner, Board Certified (FNP-BC)"
					},
					{
						"name": "CERTIFIED SURGICAL TECHNICIAN",
						"category": "Mid-level",
						"id": "CST",
						"displayName": "Certified Surgical Technician (CST)"
					},
					{
						"name": "MASTERS, GENETIC COUNSELING",
						"category": "Staff",
						"id": "MGC",
						"displayName": "Masters, Genetic Counseling (MGC)"
					},
					{
						"name": "REGISTERED DIAGNOSTIC MEDICAL SONOGRAPHER",
						"category": "Staff",
						"id": "RDMS",
						"displayName": "Registered Diagnostic Medical Sonographer (RDMS)"
					},
					{
						"name": "DOCTOR OF PODIATRIC MEDICINE",
						"category": "MD",
						"id": "DPM",
						"displayName": "Doctor of Podiatric Medicine (DPM)"
					},
					{
						"name": "LICENSED MASSAGE THERAPIST",
						"category": "Staff",
						"id": "LMT",
						"displayName": "Licensed Massage Therapist (LMT)"
					},
					{
						"name": "SURGICAL ASSISTANT",
						"category": "Staff",
						"id": "SA",
						"displayName": "Surgical Assistant (SA)"
					},
					{
						"name": "PHYSICIAN ASSISTANT (PA)",
						"category": "Mid-level",
						"id": "PA",
						"displayName": "Physician Assistant (PA)"
					},
					{
						"name": "LICENSED PHYSICAL THERAPY ASSISTANT",
						"category": "Mid-level",
						"id": "LPTA",
						"displayName": "Licensed Physical Therapy Assistant (LPTA)"
					},
					{
						"name": "LICENSED AUDIOLOGIST",
						"category": "Staff",
						"id": "AUD",
						"displayName": "Licensed Audiologist (AUD)"
					},
					{
						"name": "ADVANCED REGISTERED NURSE PRACTITIONER",
						"category": "Mid-level",
						"id": "ARNP",
						"displayName": "Advanced Registered Nurse Practitioner (ARNP)"
					},
					{
						"name": "CERTIFIED ADDICTION COUNSELOR III",
						"category": "Staff",
						"id": "CAC III",
						"displayName": "Certified Addiction Counselor III (CAC III)"
					},
					{
						"name": "OCCUPATIONAL THERAPIST",
						"category": "Mid-level",
						"id": "OT",
						"displayName": "Occupational Therapist (OT)"
					},
					{
						"name": "RETAIL STORE",
						"category": "Staff",
						"id": "RETAIL",
						"displayName": "Retail Store (RETAIL)"
					},
					{
						"name": "DENTIST",
						"category": "Staff",
						"id": "DMS",
						"displayName": "Dentist (DMS)"
					},
					{
						"name": "DOCTOR OF DENTAL SURGERY",
						"category": "MD",
						"id": "DDS",
						"displayName": "Doctor of Dental Surgery (DDS)"
					},
					{
						"name": "FAMILY NURSE PRACTITIONER",
						"category": "Mid-level",
						"id": "FNP",
						"displayName": "Family Nurse Practitioner (FNP)"
					},
					{
						"name": "CERTIFIED NURSE PRACTITIONER",
						"category": "Mid-level",
						"id": "CNP",
						"displayName": "Certified Nurse Practitioner (CNP)"
					},
					{
						"name": "LICENSED DISPENSING OPTICIAN",
						"category": "Staff",
						"id": "LDO",
						"displayName": "Licensed Dispensing Optician (LDO)"
					},
					{
						"name": "BOARD CERTIFIED OCULARIST",
						"category": "Staff",
						"id": "BCO",
						"displayName": "Board Certified Ocularist (BCO)"
					},
					{
						"name": "SPEECH AND LANGUAGE PATHOLOGIST ASSISTANT",
						"category": "Staff",
						"id": "SLPA",
						"displayName": "Speech And Language Pathologist Assistant (SLPA)"
					},
					{
						"name": "OCCUPATIONAL THERAPIST ASSISTANT",
						"category": "Staff",
						"id": "OTA",
						"displayName": "Occupational Therpaist Assistant (OTA)"
					},
					{
						"name": "LICENSED SUBSTANCE ABUSE ASSOCIATE",
						"category": "Staff",
						"id": "LSAA",
						"displayName": "Licensed Substance Abuse Associate (LSAA)"
					},
					{
						"name": "LICENSED MASTER SOCIAL WORKER",
						"category": "Mid-level",
						"id": "LMSW",
						"displayName": "Licensed Master Social Worker (LMSW)"
					},
					{
						"name": "LICENSED PROFESSIONAL CLINICAL COUNSELOR",
						"category": "Staff",
						"id": "LPCC",
						"displayName": "Licensed Professional Clinical Counselor (LPCC)"
					},
					{
						"name": "LICENSED ALCOHOL AND DRUG ABUSE COUNSELOR",
						"category": "Staff",
						"id": "LADAC",
						"displayName": "Licensed Alcohol and Drug Abuse Counselor (LADAC)"
					},
					{
						"name": "LICENSED MENTAL HEALTH COUNSELOR",
						"category": "Staff",
						"id": "LMHC",
						"displayName": "Licensed Mental Health Counselor (LMHC)"
					},
					{
						"name": "LICENSED INDEPENDENT SOCIAL WORKER",
						"category": "Mid-level",
						"id": "LISW",
						"displayName": "Licensed Independent Social Worker (LISW)"
					},
					{
						"name": "CERTIFIED CLINICAL SUPERVISOR",
						"category": "Staff",
						"id": "CCS",
						"displayName": "Certified Clinical Supervisor (CCS)"
					},
					{
						"name": "BACHELOR OF SOCIAL WORK",
						"category": "Staff",
						"id": "BSW",
						"displayName": "Bachelor of Social Work (BSW)"
					},
					{
						"name": "DOCTOR OF NURSING PRACTICE",
						"category": "Mid-level",
						"id": "DNP",
						"displayName": "Doctor of Nursing Practice (DNP)"
					},
					{
						"name": "NON-CERTIFIED RADIOLOGY TECHNICIAN",
						"category": "Staff",
						"id": "NCT",
						"displayName": "Non-Certified Radiology Technician (NCT)"
					},
					{
						"name": "ORTHOPAEDIC PHYSICIAN ASSISTANT",
						"category": "Mid-level",
						"id": "OPA",
						"displayName": "Orthopaedic Physician Assistant (OPA)"
					},
					{
						"name": "LICENSED SOCIAL WORKER",
						"category": "Mid-level",
						"id": "LSW",
						"displayName": "Licensed Social Worker (LSW)"
					},
					{
						"name": "CERTIFIED CLASSICAL HOMEOPATH",
						"category": "Mid-level",
						"id": "CCH",
						"displayName": "Certified Classical Homeopath (CCH)"
					},
					{
						"name": "BOARD CERTIFIED BEHAVIOR ANALYST (BCBA)",
						"category": "Mid-level",
						"id": "BCBA",
						"displayName": "Board Certified Behavior Analyst (BCBA)"
					},
					{
						"name": "CERTIFIED NEUROPHYSIOLOGIC INTRAOPERATIVE MONITORING TECHNICIAN",
						"category": "Mid-level",
						"id": "CNIM",
						"displayName": "Certified Neurophysiologic Intraoperative Monitoring Technician (CNIM)"
					},
					{
						"name": "INTRAOPERATIVE MONITORING TECHNICIAN",
						"category": "Staff",
						"id": "IOMT",
						"displayName": "Intraoperative Monitoring Technician (IOMT)."
					},
					{
						"name": "CERTIFIED ORTHOTIC ASSISTANT",
						"category": "Staff",
						"id": "COA",
						"displayName": "Certified Orthotic Assistant (COA)"
					},
					{
						"name": "FAMILY NURSE PRACTITIONER,CERTIFIED",
						"category": "Mid-level",
						"id": "FNP-C",
						"displayName": "Family Nurse Practitioner, Certified (FNP-C)"
					},
					{
						"name": "BACHELOR OF MEDICINE AND BACHELOR OF SURGERY",
						"category": "MD",
						"id": "MBBS",
						"displayName": "Bachelor of Medicine and Bachelor of Surgery (MBBS)"
					},
					{
						"name": "CLINICAL PSYCHOLOGIST",
						"category": "MD",
						"id": "PSYD",
						"displayName": "Clinical Psychologist (PSYD)"
					},
					{
						"name": "PHYSICAL THERAPIST (PT)",
						"category": "Mid-level",
						"id": "PT",
						"displayName": "Physical Therapist (PT)"
					},
					{
						"name": "WOMEN'S HEALTH CARE NURSE PRACTITIONER, BOARD CERTIFIED",
						"category": "Mid-level",
						"id": "WHNP-BC",
						"displayName": "Women's Health Care Nurse Practitioner, Board Certified (WHNP-BC)"
					},
					{
						"name": "CERTIFIED PEDIATRIC NURSE PRACTITIONER",
						"category": "Mid-level",
						"id": "CPNP",
						"displayName": "Certified Pediatric Nurse Practitioner (CPNP)"
					},
					{
						"name": "LICENSED PSYCHOLOGIST M.ED.",
						"category": "Mid-level",
						"id": "LP-MED",
						"displayName": "Licensed Psychologist (LP-MED)"
					},
					{
						"name": "NURSE PRACTITIONER-CERTIFIED",
						"category": "Mid-level",
						"id": "NP-C",
						"displayName": "Nurse Practitioner-Certified (NP-C)"
					},
					{
						"name": "REGISTERED YOGA TEACHER",
						"category": "Staff",
						"id": "RYT",
						"displayName": "Registered Yoga Teacher (RYT)"
					},
					{
						"name": "LICENSED INDEPENDENT CLINICAL SOCIAL WORKER",
						"category": "Mid-level",
						"id": "LICSW",
						"displayName": "Licensed Independent Clinical Social Worker (LICSW)"
					},
					{
						"name": "PEDIATRIC NURSE PRACTITIONER, BOARD CERTIFIED",
						"category": "Mid-level",
						"id": "PNP-BC",
						"displayName": "Pediatric Nurse Practitioner, Board Certified (PNP-BC)"
					},
					{
						"name": "CERTIFIED PEDIATRIC NURSE PRACTITIONER: PRIMARY CARE & ACUTE CARE",
						"category": "Mid-level",
						"id": "CPNP-AC/PC",
						"displayName": "Certified Pediatric Nurse Practitioner: Primary Care & Acute Care (CPNP-AC/PC)"
					},
					{
						"name": "COMMUNITY HEALTH AIDE TRAINEE",
						"category": "Staff",
						"id": "CHA-T",
						"displayName": "Community Health Aide Trainee (CHA-T)"
					},
					{
						"name": "LICENSED DIRECT ENTRY MIDWIFE",
						"category": "Mid-level",
						"id": "LDEM",
						"displayName": "Licensed Direct Entry Midwife (LDEM)"
					},
					{
						"name": "TEMPORARY LIMITED LICENSE PSYCHOLOGY",
						"category": "Mid-level",
						"id": "TLLP",
						"displayName": "Temporary Limited License Psychology (TLLP)"
					},
					{
						"name": "LIMITED LICENSE PSYCHOLOGIST",
						"category": "Mid-level",
						"id": "LLP",
						"displayName": "Limited License Psychologist (LLP)"
					},
					{
						"name": "LIMITED LICENSE MARRIAGE AND FAMILY THERAPIST",
						"category": "Mid-level",
						"id": "LLMFT",
						"displayName": "Limited License Marriage and Family Therapist (LLMFT)"
					},
					{
						"name": "LIMITED LICENSE SOCIAL WORKER",
						"category": "Mid-level",
						"id": "LLMSW",
						"displayName": "Limited License Social Worker (LLMSW)"
					},
					{
						"name": "LIMITED LICENSE PROFESSIONAL COUNSELOR",
						"category": "Mid-level",
						"id": "LLPC",
						"displayName": "Limited License Professional Counselor (LLPC)"
					},
					{
						"name": "INDEPENDENT DUTY CORPSMAN",
						"category": "Mid-level",
						"id": "IDC",
						"displayName": "Independent Duty Corpsman (IDC)"
					},
					{
						"name": "HEALTHCARE NAVIGATOR",
						"category": "Staff",
						"id": "HNAV",
						"displayName": "Healthcare Navigator"
					},
					{
						"name": "CLINICAL SOCIAL WORKER INTERN",
						"category": "Mid-level",
						"id": "CSWI",
						"displayName": "CLINICAL SOCIAL WORKER INTERN"
					},
					{
						"name": "LICENSED GRADUATE SOCIAL WORKER",
						"category": "Mid-level",
						"id": "LGSW",
						"displayName": "Licensed Graduate Social Worker(LGSW)"
					},
					{
						"name": "PATIENT CARE",
						"category": "Staff",
						"id": "PC",
						"displayName": "Patient Care"
					},
					{
						"name": "DO NOT USE",
						"category": "Mid-level",
						"id": "LSW-I",
						"displayName": "Do not use"
					},
					{
						"name": "SOCIAL WORKER INTERN",
						"category": "Mid-level",
						"id": "SW-I",
						"displayName": "SOCIAL WORKER INTERN"
					},
					{
						"name": "ASSOCIATE CLINICAL SOCIAL WORKER",
						"category": "Mid-level",
						"id": "ASW",
						"displayName": "Associate Clinical Social Worker (ASW)"
					},
					{
						"name": "REGISTERED MENTAL HEALTH COUNSELOR INTERN",
						"category": "Mid-level",
						"id": "RMHC-I",
						"displayName": "REGISTERED MENTAL HEALTH COUNSELOR INTERN"
					},
					{
						"name": "REGISTERED CLINICAL SOCIAL WORKER INTERN",
						"category": "Mid-level",
						"id": "RCSW-I",
						"displayName": "Registered Clinical Social Worker Intern"
					},
					{
						"name": "REGISTERED DENTAL HYGIENIST, SUPERVISING",
						"category": "Staff",
						"id": "RDHSUP",
						"displayName": "Registered Dental Hygienist, Supervising (RDHSUP)"
					},
					{
						"name": "HEARING AID DISPENSER",
						"category": "Staff",
						"id": "HAD",
						"displayName": "Hearing Aid Dispenser (HAD)"
					},
					{
						"name": "LICENSED PSYCHOLOGICAL EXAMINER INDEPENDENT",
						"category": "Mid-level",
						"id": "LPE-I",
						"displayName": "Licensed Psychological Examiner Independent (LPE-I)"
					},
					{
						"name": "CERTIFIED BIRTH DOULA",
						"category": "Mid-level",
						"id": "CD",
						"displayName": "Certified Birth Doula (CD)"
					},
					{
						"name": "LICENSED MENTAL HEALTH COUNSELOR ASSOCIATE",
						"category": "Mid-level",
						"id": "LMHC-A",
						"displayName": "Licensed Mental Health Counselor Associate(LMHC-A)"
					},
					{
						"name": "MEDICAL PSYCHOLOGIST",
						"category": "MD",
						"id": "PHDMP",
						"displayName": "Medical Psychologist (PHD-MP)"
					},
					{
						"name": "CERTIFIED SLEEP HEALTH CLINICIAN",
						"category": "Mid-level",
						"id": "CCSH",
						"displayName": "Certified Sleep Health Clinician (CCSH)"
					},
					{
						"name": "LICENSED CHEMICAL DEPENDENCY COUNSELOR II",
						"category": "Mid-level",
						"id": "LCDC II",
						"displayName": "Licensed Chemical Dependency Counselor II (LCDC II)"
					},
					{
						"name": "LICENSED CHEMICAL DEPENDENCY COUNSELOR III",
						"category": "Mid-level",
						"id": "LCDC III",
						"displayName": "Licensed Chemical Dependency Counselor III (LCDC III)"
					},
					{
						"name": "LICENSED CHEMICAL DEPENDENCY COUNSELOR I",
						"category": "Mid-level",
						"id": "LCDC",
						"displayName": "Licensed Chemical Dependency Counselor I (LCDC)"
					},
					{
						"name": "LICENSED ALCOHOL AND DRUG ABUSE COUNSELOR",
						"category": "Staff",
						"id": "LADC",
						"displayName": "LICENSED ALCOHOL AND DRUG ABUSE COUNSELOR (LADC)"
					},
					{
						"name": "LICENSED INDEPENDENT CHEMICAL DEPENDENCY COUNSELOR, CLINICAL SUPERVISOR",
						"category": "Mid-level",
						"id": "LICDC-CS",
						"displayName": "Licensed Independent Chemical Dependency Counselor, Clinical Supervisor (LICDC-CS)"
					},
					{
						"name": "MASTERS OF COUNSELING (MAC)",
						"category": "Mid-level",
						"id": "MAC",
						"displayName": "Masters of Counseling (MAC)"
					},
					{
						"name": "CERTIFIED EXERCISE PHYSIOLOGIST",
						"category": "Staff",
						"id": "CEP",
						"displayName": "Certified Exercise Physiologist (CEP)"
					},
					{
						"name": "CERTIFIED CLINICAL EXERCISE PHYSIOLOGIST",
						"category": "Staff",
						"id": "CCEP",
						"displayName": "Certified Clinical Exercise Physiologist (CCEP)"
					},
					{
						"name": "CERTIFIED PEER RECOVERY COACH",
						"category": "Mid-level",
						"id": "CPRC",
						"displayName": "Certified Peer Recovery Coach (CPRC)"
					},
					{
						"name": "CERTIFIED ORTHOPTIST",
						"category": "Mid-level",
						"id": "COPT",
						"displayName": "Certified Orthoptist (COPT)"
					},
					{
						"name": "ADVANCED PRACTICE REGISTERED NURSE - NURSE PRACTITIONER - CERTIFIED",
						"category": "Mid-level",
						"id": "APRN-NP-C",
						"displayName": "Advanced Practice Registered Nurse - Nurse Practitioner - Certified (APRN-NP-C)"
					},
					{
						"name": "LICENSED INDEPENDENT CHEMICAL DEPENDENCY COUNSELOR",
						"category": "Mid-level",
						"id": "LICDC",
						"displayName": "Licensed Independent Chemical Dependency Counselor"
					},
					{
						"name": "LICENSED VOCATIONAL NURSE",
						"category": "Mid-level",
						"id": "LVN",
						"displayName": "Licensed Vocational Nurse (LVN)"
					},
					{
						"name": "REGISTERED BEHAVIOR TECHNICIAN",
						"category": "Mid-level",
						"id": "RBT",
						"displayName": "Registered Behavior Technician (RBT)"
					},
					{
						"name": "OTHER MEDICAL PERSONNEL",
						"category": "Staff",
						"id": "OMP",
						"displayName": "Other Medical Personnel (OMP)"
					},
					{
						"name": "CERTIFIED SUBSTANCE ABUSE COUNSELOR (CSAC)",
						"category": "Staff",
						"id": "CSAC",
						"displayName": "Certified Substance Abuse Counselor (CSAC)"
					},
					{
						"name": "LICENSED PARAMEDIC",
						"category": "Mid-level",
						"id": "LPM",
						"displayName": "Licensed Paramedic (LPM)"
					},
					{
						"name": "CERTIFIED PHLEBOTOMY TECHNICIAN",
						"category": "Mid-level",
						"id": "CPT",
						"displayName": "Certified Phlebotomy Technician (CPT)"
					},
					{
						"name": "LICENSED CERTIFIED SOCIAL WORKER",
						"category": "Mid-level",
						"id": "C-LCSW",
						"displayName": "Licensed Certified Social Worker (C-LCSW)"
					},
					{
						"name": "PSYCHIATRIST",
						"category": "MD",
						"id": "P-MD",
						"displayName": "Psychiatrist (MD)"
					},
					{
						"name": "REGISTERED DIETITIAN NUTRITIONIST",
						"category": "Mid-level",
						"id": "RDN",
						"displayName": "Registered Dietitian Nutritionist (RDN)"
					},
					{
						"name": "PHARMACIST",
						"category": "Mid-level",
						"id": "PHARM",
						"displayName": "Pharmacist"
					},
					{
						"name": "CERTIFIED DIABETES CARE AND EDUCATION SPECIALIST",
						"category": "Mid-level",
						"id": "CDCES",
						"displayName": "Certified Diabetes Care and Education Specialist (CDCES)"
					},
					{
						"name": "PROVISIONAL LICENSED PROFESSIONAL COUNSELOR",
						"category": "Mid-level",
						"id": "P-LPC",
						"displayName": "Provisional Licensed Professional Counselor (P-LPC)"
					},
					{
						"name": "BEHAVIORAL HEALTH INTERN",
						"category": "Mid-level",
						"id": "BHI",
						"displayName": "Behavioral Health Intern (BHI)"
					},
					{
						"name": "CERTIFIED OCCUPATIONAL THERAPY ASSISTANT-LICENSED",
						"category": "Mid-level",
						"id": "COTA/L",
						"displayName": "Certified Occupational Therapy Assistant-Licensed (COTA/L)"
					},
					{
						"name": "LICENSED CLINICAL MENTAL HEALTH COUNSELOR",
						"category": "Mid-level",
						"id": "LCMHC",
						"displayName": "LICENSED CLINICAL MENTAL HEALTH COUNSELOR (LCMHC)"
					},
					{
						"name": "LICENSED INDEPENDENT SUBSTANCE ABUSE COUNSELOR",
						"category": "Mid-level",
						"id": "LISAC",
						"displayName": "Licensed Independent Substance Abuse Counselor (LISAC)"
					},
					{
						"name": "EMERGENCY MEDICAL TECHNICIAN, INTERMEDIATE",
						"category": "Staff",
						"id": "EMTI",
						"displayName": "Emergency Medical Technician, Intermediate (EMTI)"
					},
					{
						"name": "PARAMEDIC",
						"category": "Mid-level",
						"id": "PARA",
						"displayName": "Paramedic"
					},
					{
						"name": "ADVANCED PRACTICE REGISTERED NURSE - CERTIFIED NURSE PRACTITIONER",
						"category": "Mid-level",
						"id": "APRN-CNP",
						"displayName": "ADVANCED PRACTICE REGISTERED NURSE - CERTIFIED NURSE PRACTITIONER"
					},
					{
						"name": "CHEMICAL DEPENDENCY PROFESSIONAL - TRAINEE",
						"category": "Staff",
						"id": "CDP-T",
						"displayName": "CHEMICAL DEPENDENCY PROFESSIONAL - TRAINEE (CDP-T)"
					},
					{
						"name": "LICENSED MARRIAGE AND FAMILY THERAPIST - ASSOCIATE",
						"category": "Mid-level",
						"id": "LMFT-A",
						"displayName": "LICENSED MARRIAGE AND FAMILY THERAPIST - ASSOCIATE (LMFT-A)"
					},
					{
						"name": "DOCTOR OF GENERAL SURGERY",
						"category": "MD",
						"id": "DGS",
						"displayName": "DOCTOR OF GENERAL SURGERY (DGS)"
					},
					{
						"name": "DOCTOR OF SOCIAL WORK",
						"category": "MD",
						"id": "DSW",
						"displayName": "Doctor of Social Work (DSW)"
					},
					{
						"name": "REGISTERED PSYCHOLOGICAL ASSISTANT",
						"category": "Mid-level",
						"id": "RPA",
						"displayName": "REGISTERED PSYCHOLOGICAL ASSISTANT (RPA)"
					},
					{
						"name": "LICENSED CLINICAL MENTAL HEALTH COUNSELOR ASSOCIATE",
						"category": "Mid-level",
						"id": "LCMHC-A",
						"displayName": "LICENSED CLINICAL MENTAL HEALTH COUNSELOR ASSOCIATE (LCMHC-A)"
					},
					{
						"name": "LICENSED CLINICAL ADDICTION SPECIALIST ASSOCIATE",
						"category": "Mid-level",
						"id": "LCAS-A",
						"displayName": "LICENSED CLINICAL ADDICTION SPECIALIST ASSOCIATE (LCAS-A)"
					},
					{
						"name": "BACHELOR DEGREE OF DENTISTRY",
						"category": "Mid-level",
						"id": "BDS",
						"displayName": "Bachelor Degree of Dentistry (BDS)"
					},
					{
						"name": "REGISTERED DIETITIAN STUDENT",
						"category": "Staff",
						"id": "RD-S",
						"displayName": "Registered Dietitian Student (RD-S)"
					},
					{
						"name": "ADVANCED PRACTICE NURSE PRACTITIONER",
						"category": "Mid-level",
						"id": "APNP",
						"displayName": "Advanced Practice Nurse Practitioner (APNP)"
					},
					{
						"name": "EXERCISE PHYSIOLOGIST",
						"category": "Mid-level",
						"id": "EP",
						"displayName": "Exercise Physiologist (EP)"
					},
					{
						"name": "ADVANCED PRACTICE REGISTERED NURSE - FAMILY NURSE PRACTITIONER - CERTIFIED",
						"category": "Mid-level",
						"id": "APRN-FNP-C",
						"displayName": "ADVANCED PRACTICE REGISTERED NURSE - FAMILY NURSE PRACTITIONER - CERTIFIED (APRN-FNP-C)"
					},
					{
						"name": "LICENSED ADVANCED PRACTITIONER SOCIAL WORKER (LAPSW)",
						"category": "Mid-level",
						"id": "LAPSW",
						"displayName": "Licensed Advanced Practitioner Social Worker (LAPSW)"
					},
					{
						"name": "ORTHOPAEDIC PHYSICIAN'S ASSISTANT",
						"category": "Staff",
						"id": "OPA-C",
						"displayName": "Orthopaedic Physician's Assistant"
					},
					{
						"name": "CERTIFIED PHARMACY TECHNICIAN",
						"category": "Staff",
						"id": "CRXT",
						"displayName": "Certified Pharmacy Technician (CRXT)"
					},
					{
						"name": "ORTHOPAEDIC  PHYSICIAN ASSISTANT, SUPERVISING",
						"category": "Mid-level",
						"id": "OPASUP",
						"displayName": "Orthopaedic Physician Assistant, Supervising (OPASUP)"
					},
					{
						"name": "LICENSED SOCIAL WORK ASSOCIATE AND INDEPENDENT CLINICAL (LSWAIC)",
						"category": "Mid-level",
						"id": "LSWAIC",
						"displayName": "Licensed Social Work Associate and Independent Clinical (LSWAIC)"
					},
					{
						"name": "LICENSED CLINICAL SOCIAL WORKER PSYCHOTHERAPY (LCSW-R)",
						"category": "Mid-level",
						"id": "LCSW-R",
						"displayName": "LICENSED CLINICAL SOCIAL WORKER PSYCHOTHERAPY (LCSW-R)"
					},
					{
						"name": "RADIOLOGIST - SUPERVISING",
						"category": "Mid-level",
						"id": "RAD",
						"displayName": "Radiologist - Supervising"
					},
					{
						"name": "RADIOLOGIST - SUPERVISING",
						"category": "Mid-level",
						"id": "RAD-S",
						"displayName": "Radiologist - Supervising"
					},
					{
						"name": "PEER SUPPORT SPECIALIST",
						"category": "Mid-level",
						"id": "PSS",
						"displayName": "Peer Support Specialist"
					},
					{
						"name": "LCP CANDIDATE",
						"category": "Mid-level",
						"id": "LPC-CAN",
						"displayName": "LCP Candidate"
					},
					{
						"name": "PEDIATRIC CLINICAL NURSE SPECIALIST",
						"category": "Mid-level",
						"id": "PCNS",
						"displayName": "Pediatric Clinical Nurse Specialist (PCNS)"
					},
					{
						"name": "REGISTERED NURSE CLINICAL SPECIALIST",
						"category": "Mid-level",
						"id": "RNCS",
						"displayName": "REGISTERED NURSE CLINICAL SPECIALIST (RNCS)"
					},
					{
						"name": "ADVANCED PRACTICE REGISTERED NURSE FAMILY NURSE PRACTITIONER BOARD CERTIFIED",
						"category": "Mid-level",
						"id": "APRN-FNPBC",
						"displayName": "ADVANCED PRACTICE REGISTERED NURSE FAMILY NURSE PRACTITIONER BOARD CERTIFIED"
					},
					{
						"name": "MASTER CERTIFIED WELLNESS COACH",
						"category": "Mid-level",
						"id": "MCWC",
						"displayName": "Master Certified Wellness Coach (MCWC)"
					},
					{
						"name": "REGISTERED MARRIAGE AND FAMILY THERAPIST",
						"category": "Staff",
						"id": "RMFT",
						"displayName": "Registered Marriage and Family Therapist"
					},
					{
						"name": "LICENSED CLINICAL ALCOHOL AND DRUG COUNSELOR (LCADC)",
						"category": "Mid-level",
						"id": "LCADC",
						"displayName": "LICENSED CLINICAL ALCOHOL AND DRUG COUNSELOR (LCADC)"
					},
					{
						"name": "HEALTH COACH (HC)",
						"category": "Mid-level",
						"id": "HC",
						"displayName": "Health Coach (HC)"
					},
					{
						"name": "THERAPY COACH (TC)",
						"category": "Mid-level",
						"id": "TC",
						"displayName": "Therapy coach (TC)"
					},
					{
						"name": "REGISTERED MENTAL HEALTH COUNSELOR (RMHC)",
						"category": "Mid-level",
						"id": "RMHC",
						"displayName": "Registered MENTAL HEALTH COUNSELOR (RMHC)"
					},
					{
						"name": "MASTER'S OF SCIENCE IN COUNSELOR EDUCATION",
						"category": "Mid-level",
						"id": "MHP",
						"displayName": "Master's of Science in Counselor Education"
					},
					{
						"name": "LICENSED GRADUATE PROFESSIONAL COUNSELOR (LGPC)",
						"category": "Mid-level",
						"id": "LGPC",
						"displayName": "Licensed Graduate Professional Counselor (LGPC)"
					},
					{
						"name": "LICENSED CERTIFIED SOCIAL WORKER/CLINICAL (LCSW-C)",
						"category": "Mid-level",
						"id": "LCSW-C",
						"displayName": "Licensed Certified Social Worker/Clinical (LCSW-C)"
					},
					{
						"name": "LICENSED GRADUATE ALCOHOL AND DRUG COUNSELOR (LGADC)",
						"category": "Mid-level",
						"id": "LGADC",
						"displayName": "LICENSED GRADUATE ALCOHOL AND DRUG COUNSELOR (LGADC)"
					},
					{
						"name": "LICENSED &#8203;GRADUATE MARRIAGE AND FAMILY THERAPY",
						"category": "Mid-level",
						"id": "LGMFT",
						"displayName": "Licensed &#8203;Graduate Marriage and Family Therapy"
					},
					{
						"name": "CERTIFIED RECOVERY PEER ADVOCATE (CRPA)",
						"category": "Mid-level",
						"id": "CRPA",
						"displayName": "Certified Recovery Peer Advocate (CRPA)"
					},
					{
						"name": "MARRIAGE AND FAMILY THERAPIST INTERN (LMFT)",
						"category": "Mid-level",
						"id": "LMFT-I",
						"displayName": "MARRIAGE AND FAMILY THERAPIST Intern (LMFT)"
					},
					{
						"name": "DOCTOR OF MENTAL HEALTH (DMH)",
						"category": "MD",
						"id": "(DMH)",
						"displayName": "Doctor of Mental Health (DMH)"
					},
					{
						"name": "LICENSE ASSOCIATE COUNSELOR (LAPC)",
						"category": "Mid-level",
						"id": "LAPC",
						"displayName": "LICENSE ASSOCIATE COUNSELOR (LAPC)"
					},
					{
						"name": "CLINICAL PROFESSIONAL COUNSELOR INTERN (LCPC-I)",
						"category": "Mid-level",
						"id": "LCPC-I",
						"displayName": "Clinical Professional Counselor Intern (LCPC-I)"
					},
					{
						"name": "DOCTOR OF MENTAL HEALTH (DMH)",
						"category": "MD",
						"id": "DMH",
						"displayName": "DOCTOR OF MENTAL HEALTH (DMH)"
					},
					{
						"name": "REGISTERED BEHAVIORAL THERAPIST",
						"category": "Mid-level",
						"id": "RB-T",
						"displayName": "REGISTERED BEHAVIORAL THERAPIST (RBT)"
					},
					{
						"name": "CLINICAL NURSE SPECIALIST BOARD CERTIFIED (CNS-BC)",
						"category": "Mid-level",
						"id": "CNS-BC",
						"displayName": "CLINICAL NURSE SPECIALIST BOARD CERTIFIED (CNS-BC)"
					},
					{
						"name": "ACUTE CLINICAL NURSE SPECIALIST BOARD CERTIFIED (ACNS-BC)",
						"category": "Mid-level",
						"id": "ACNS-BC",
						"displayName": "ACUTE CLINICAL NURSE SPECIALIST BOARD CERTIFIED (ACNS-BC)"
					},
					{
						"name": "ADULT GERONTOLOGY CLINICAL NURSE SPECIALIST BOARD CERTIFIED (AGCNS-BC)",
						"category": "Mid-level",
						"id": "AGCNS-BC",
						"displayName": "ADULT GERONTOLOGY CLINICAL NURSE SPECIALIST BOARD CERTIFIED (AGCNS-BC)"
					},
					{
						"name": "ADULT GERONTOLOGY ACUTE CLINICAL NURSE PRACTITIONER CERTIFIED (AGANP-C)",
						"category": "Mid-level",
						"id": "AGANP-C",
						"displayName": "ADULT GERONTOLOGY ACUTE CLINICAL NURSE PRACTITIONER CERTIFIED (AGANP-C)"
					},
					{
						"name": "ADULT GERONTOLOGY ACUTE CLINICAL NURSE PRACTITIONER BOARD CERTIFIED (AGACNP-BC)",
						"category": "Mid-level",
						"id": "AGACNP-BC",
						"displayName": "ADULT GERONTOLOGY ACUTE CLINICAL NURSE PRACTITIONER BOARD CERTIFIED (AGACNP-BC)"
					},
					{
						"name": "ADULT GERONTOLOGY CLINICAL NURSE SPECIALIST (AGCNS)",
						"category": "Mid-level",
						"id": "AGCNS",
						"displayName": "ADULT GERONTOLOGY CLINICAL NURSE SPECIALIST (AGCNS)"
					},
					{
						"name": "GERONTOLOGY NURSE PRACTITIONER (GNP)",
						"category": "Mid-level",
						"id": "GNP",
						"displayName": "GERONTOLOGY NURSE PRACTITIONER (GNP)"
					},
					{
						"name": "ADULT GERONTOLOGY ACUTE CLINICAL NURSE PRACTITIONER BOARD CERTIFIED (ACNPC-AG)",
						"category": "Mid-level",
						"id": "ACNPC-AG",
						"displayName": "ADULT GERONTOLOGY ACUTE CLINICAL NURSE PRACTITIONER BOARD CERTIFIED (ACNPC-AG)"
					},
					{
						"name": "MASTER OF SCIENCE IN SOCIAL WORK (MSSW)",
						"category": "Mid-level",
						"id": "MSSW",
						"displayName": "MASTER OF SCIENCE IN SOCIAL WORK (MSSW)"
					},
					{
						"name": "LICENSED CLINICAL MARRIAGE AND FAMILY THERAPIST (LCMFT)",
						"category": "Mid-level",
						"id": "LCMFT",
						"displayName": "LICENSED CLINICAL MARRIAGE AND FAMILY THERAPIST (LCMFT)"
					},
					{
						"name": "ADVANCED PRACTICE REGISTERED NURSE - FULL PRACTICE AUTHORITY (APRN-FPA)",
						"category": "Mid-level",
						"id": "APRN-FPA",
						"displayName": "ADVANCED PRACTICE REGISTERED NURSE - FULL PRACTICE AUTHORITY (APRN-FPA)"
					},
					{
						"name": "REGISTERED PHARMACIST",
						"category": "Mid-level",
						"id": "RPH",
						"displayName": "registered pharmacist (RPH)"
					},
					{
						"name": "DENTAL HEALTH AIDE THERAPIST",
						"category": "Mid-level",
						"id": "DHAT",
						"displayName": "Dental Health Aide Therapist (DHAT)"
					},
					{
						"name": "MASTERS OF SCIENCE IN CLINICAL MENTAL HEALTH COUNSELING",
						"category": "Mid-level",
						"id": "MS-CMHC",
						"displayName": "MASTERS OF SCIENCE IN CLINICAL MENTAL HEALTH COUNSELING (MS-CMHC)"
					},
					{
						"name": "MASTERS IN DIVINITY-BOARD CERTIFIED CHAPLAIN",
						"category": "Mid-level",
						"id": "MDBCC",
						"displayName": "MASTERS IN DIVINITY-BOARD CERTIFIED CHAPLAIN"
					},
					{
						"name": "BACHELOR OF SCIENCE IN NURSING (BSN)",
						"category": "Mid-level",
						"id": "BSN",
						"displayName": "BACHELOR OF SCIENCE IN NURSING (BSN)"
					},
					{
						"name": "MASTERS IN DIVINITY-BOARD CERTIFIED CHAPLAIN",
						"category": "Mid-level",
						"id": "MDIVBCC",
						"displayName": "MASTERS IN DIVINITY-BOARD CERTIFIED CHAPLAIN"
					},
					{
						"name": "CHILD LIFE PROFESSIONAL",
						"category": "Mid-level",
						"id": "CLP",
						"displayName": "child life professional"
					},
					{
						"name": "LICENSED SPECIALIST CLINICAL SOCIAL WORKER",
						"category": "Mid-level",
						"id": "LSCSW",
						"displayName": "Licensed Specialist Clinical Social Worker (LSCSW)"
					},
					{
						"name": "CARE COORDINATOR",
						"category": "Mid-level",
						"id": "CC",
						"displayName": "Care Coordinator (CC)"
					},
					{
						"name": "DOCTOR OF OSTEOPATHIC MEDICINE FELLOW OF AMERICAN COLLEGE OF OSTEOPATHIC INTERNIST",
						"category": "MD",
						"id": "DO-FACO",
						"displayName": "DOCTOR OF OSTEOPATHIC MEDICINE FELLOW OF AMERICAN COLLEGE OF OSTEOPATHIC INTERNIST"
					},
					{
						"name": "SPORTS PERFORMANCE COACH",
						"category": "Mid-level",
						"id": "SPC",
						"displayName": "Sports Performance Coach (SPC)"
					},
					{
						"name": "REIKI PRACTITIONER",
						"category": "Mid-level",
						"id": "RP",
						"displayName": "Reiki Practitioner (RP)"
					},
					{
						"name": "MEDICAL SOCIAL WORKER (MSWR)",
						"category": "Mid-level",
						"id": "MSWR",
						"displayName": "MEDICAL SOCIAL WORKER (MSWR)"
					},
					{
						"name": "FUNCTIONAL NUTRITION COUNSELORS",
						"category": "Mid-level",
						"id": "FNC",
						"displayName": "FUNCTIONAL NUTRITION COUNSELORS (FNC)"
					},
					{
						"name": "ASSOCIATE MARRIAGE AND FAMILY THERAPIST",
						"category": "Mid-level",
						"id": "AMFT",
						"displayName": "Associate Marriage and Family Therapist (AMFT)"
					},
					{
						"name": "DOCTORATE OF PHYSICIAN ASSISTANT PHYSICIANS ASSISTANT CERTIFIED",
						"category": "MD",
						"id": "DPA, PA-C",
						"displayName": "DOCTORATE OF PHYSICIAN ASSISTANT PHYSICIANS ASSISTANT CERTIFIED (DPA, PA-C)"
					},
					{
						"name": "LICENSED CLINICAL PSYCHOTHERAPIST",
						"category": "Mid-level",
						"id": "LCP",
						"displayName": "Licensed Clinical Psychotherapist (LCP)"
					},
					{
						"name": "ORTHOPAEDIC NURSE PRACTITIONER - CERTIFIED",
						"category": "Mid-level",
						"id": "ONP-C",
						"displayName": "Certified Orthopaedic Nurse Practitioner"
					},
					{
						"name": "STUDENT FELLOW",
						"category": "Mid-level",
						"id": "SF",
						"displayName": "Student Fellow"
					},
					{
						"name": "PHYSICIANS ASSISTANT STUDENT",
						"category": "Staff",
						"id": "PA-S",
						"displayName": "Physicians Assistant Student"
					},
					{
						"name": "PERSONAL NAVIGATOR",
						"category": "Staff",
						"id": "PN",
						"displayName": "Personal Navigator"
					},
					{
						"name": "COUNTY HEALTH DEPARTMENT",
						"category": "Mid-level",
						"id": "HD",
						"displayName": "County Health Department"
					},
					{
						"name": "ALCOHOL AND DRUG COUNSELOR - TEMPORARY PERMIT (ADC-TP)",
						"category": "Mid-level",
						"id": "ADC-TP",
						"displayName": "Alcohol and Drug Counselor - Temporary Permit (ADC-TP)"
					},
					{
						"name": "MENTAL HEALTH INTERN",
						"category": "Mid-level",
						"id": "MHI",
						"displayName": "Mental Health Intern (MHI)"
					},
					{
						"name": "LICENSED MENTAL HEALTH PRACTITIONER",
						"category": "Mid-level",
						"id": "LMHP",
						"displayName": "Licensed Mental Health Practitioner (LMHP"
					},
					{
						"name": "LICENSED INDEPENDENT MENTAL HEALTH PRACTITIONER",
						"category": "Mid-level",
						"id": "LIMHP",
						"displayName": "LICENSED INDEPENDENT MENTAL HEALTH PRACTITIONER (LIMHP)"
					},
					{
						"name": "PROVISIONAL LICENSED MENTAL HEALTH PRACTITIONER",
						"category": "Mid-level",
						"id": "PLMHP",
						"displayName": "PROVISIONAL LICENSED MENTAL HEALTH PRACTITIONER (PLMHP)"
					},
					{
						"name": "HOSPITALIST",
						"category": "MD",
						"id": "H",
						"displayName": "Hospitalist (H)"
					},
					{
						"name": "LIFE ADVISOR (LADV)",
						"category": "Mid-level",
						"id": "LADV",
						"displayName": "LIFE ADVISOR (LADV)"
					},
					{
						"name": "LIFE MANAGER (LMGR)",
						"category": "Mid-level",
						"id": "LMGR",
						"displayName": "LIFE MANAGER (LMGR)"
					},
					{
						"name": "PHARMACY TECHNICIAN (PHT)",
						"category": "Mid-level",
						"id": "PHT",
						"displayName": "PHARMACY TECHNICIAN (PHT)"
					},
					{
						"name": "CAREER COUNSELOR (CCR)",
						"category": "Mid-level",
						"id": "CCR",
						"displayName": "Career Counselor (CCR)"
					},
					{
						"name": "CHEMICAL DEPENDENCY COUNSELOR (CDC I)",
						"category": "Mid-level",
						"id": "CDC I",
						"displayName": "Chemical Dependency Counselor (CDC I)"
					},
					{
						"name": "QUALIFIED MENTAL HEALTH PROFESSIONALS (QMHPS)",
						"category": "Mid-level",
						"id": "QMHPS",
						"displayName": "Qualified Mental Health Professionals (QMHPs)"
					},
					{
						"name": "ADULT-GERONTOLOGY PRIMARY CARE NURSE PRACTITIONER-BOARD CERTIFIED (AGPCNP-BC)",
						"category": "Mid-level",
						"id": "AGPCNP-BC",
						"displayName": "Adult-Gerontology Primary Care Nurse Practitioner-Board Certified (AGPCNP-BC)"
					},
					{
						"name": "MENTAL HEALTH COUNSELOR WITH LIMITED PERMIT (MHC-LP)",
						"category": "Mid-level",
						"id": "MHC-LP",
						"displayName": "Mental health counselor with limited permit (MHC-LP)"
					},
					{
						"name": "BEHAVIORAL HEALTH TECHNICIAN (BHT)",
						"category": "Mid-level",
						"id": "BHT",
						"displayName": "Behavioral Health Technician (BHT)"
					},
					{
						"name": "CERTIFIED PEDIATRIC NURSE PRACTITIONER - PRIMARY CARE (CPNP-PC)",
						"category": "Mid-level",
						"id": "CPNP-PC",
						"displayName": "Certified Pediatric Nurse Practitioner - Primary Care (CPNP-PC)"
					},
					{
						"name": "PEDIATRIC PRIMARY CARE NURSE PRACTITIONER-BOARD CERTIFIED (PPCNP-BC)",
						"category": "Mid-level",
						"id": "PPCNP-BC",
						"displayName": "Pediatric Primary Care Nurse Practitioner-Board Certified (PPCNP-BC)"
					},
					{
						"name": null,
						"category": "MD",
						"id": "PODIATRY",
						"displayName": null
					},
					{
						"name": "PATIENT NAVIGATOR (PTN)",
						"category": "Mid-level",
						"id": "PTN",
						"displayName": "PATIENT NAVIGATOR (PTN)"
					},
					{
						"name": "CERTIFIED PEER RECOVERY SPECIALIST RECIPROCAL (CPRSR)",
						"category": "Mid-level",
						"id": "CPRSR",
						"displayName": "CERTIFIED PEER RECOVERY SPECIALIST RECIPROCAL (CPRSR)"
					},
					{
						"name": "REGISTERED MARRIAGE AND FAMILY THERAPIST INTERN (RMFTI)",
						"category": "Mid-level",
						"id": "RMFTI",
						"displayName": "REGISTERED MARRIAGE AND FAMILY THERAPIST INTERN (RMFTI)"
					},
					{
						"name": "DOCTOR OF ACUPUNCTURE AND ORIENTAL MEDICINE (DAOM)",
						"category": "Mid-level",
						"id": "DAOM",
						"displayName": "Doctor of Acupuncture and Oriental Medicine (DAOM)"
					},
					{
						"name": "BACHELOR OF PSYCHOLOGY (BPSYCH)",
						"category": "Mid-level",
						"id": "BPSYCH",
						"displayName": "BACHELOR OF PSYCHOLOGY (BPSYCH)"
					},
					{
						"name": "DOCTOR OF PSYCHOLOGY (DPSYCH)",
						"category": "Mid-level",
						"id": "DPSYCH",
						"displayName": "DOCTOR OF PSYCHOLOGY (DPSYCH)"
					},
					{
						"name": "CERTIFIED PEDORTHIST (CPED)",
						"category": "Mid-level",
						"id": "CPED",
						"displayName": "Certified Pedorthist (CPED)"
					},
					{
						"name": "SUBSTANCE USE DISORDER PROFESSIONAL",
						"category": "Mid-level",
						"id": "SUDP",
						"displayName": "Substance Use Disorder Professional (SUDP)"
					},
					{
						"name": "SUBSTANCE USE DISORDER PROFESSIONAL TRAINEE",
						"category": "Mid-level",
						"id": "SUDPT",
						"displayName": "Substance Use Disorder Professional Trainee (SUDPT)"
					},
					{
						"name": "PHARMACIST, SUPERVISING",
						"category": "Staff",
						"id": "PS",
						"displayName": "Pharmacist, Supervising (PS)"
					},
					{
						"name": "REGISTERED POLYSOMNOGRAPHIC TECHNOLOGIST (RPSGT)",
						"category": "Mid-level",
						"id": "RPSGT",
						"displayName": "Registered Polysomnographic Technologist (RPSGT)"
					},
					{
						"name": "DOCTORATE OF MEDICAL SCIENCES (DMSC)",
						"category": "Mid-level",
						"id": "DMSC",
						"displayName": "Doctorate of Medical Sciences (DMSc)"
					},
					{
						"name": "PSYCHIATRIC/MENTAL HEALTH REGISTERED NURSE (PSYCH RN)",
						"category": "Mid-level",
						"id": "PSYCH RN",
						"displayName": "Psychiatric/Mental Health Registered Nurse (Psych RN)"
					},
					{
						"name": "PSYCHIATRIC PHYSICIAN ASSISTANT (PA-C, CAQ-PSYCH)",
						"category": "Mid-level",
						"id": "PA-C, CAQ-",
						"displayName": "Psychiatric Physician Assistant (PA-C, CAQ-Psych)"
					},
					{
						"name": "ADULT GERONTOLOGY NURSE PRACTITIONER (AGNP)",
						"category": "Mid-level",
						"id": "AGNP",
						"displayName": "Adult Gerontology Nurse Practitioner (AGNP)"
					},
					{
						"name": "CERTIFIED ALCOHOL & DRUG COUNSELOR I (CADC I)",
						"category": "Mid-level",
						"id": "CADC I",
						"displayName": "Certified Alcohol & Drug Counselor I (CADC I)"
					},
					{
						"name": "DOCTORATE OF MEDICAL SCIENCES, CERTIFIED PHYSICIAN ASSISTANT (DMSC, PA-C)",
						"category": "Mid-level",
						"id": "DMSC, PA-C",
						"displayName": "Doctorate of Medical Sciences, Certified Physician Assistant (DMSc, PA-C)"
					},
					{
						"name": "EDUCATION CONSULTANT (ED.COUSNS.)",
						"category": "Mid-level",
						"id": "ED.COUSNS.",
						"displayName": "Education Consultant (Ed.Couns.)"
					},
					{
						"name": "STUDENT OCCUPATIONAL THERAPY ASSISTANT (SOTA)",
						"category": "Mid-level",
						"id": "SOTA",
						"displayName": "STUDENT OCCUPATIONAL THERAPY ASSISTANT (SOTA)"
					},
					{
						"name": "ASSOCIATE PROFESSIONAL CLINICAL COUNSELOR (APCC)",
						"category": "Mid-level",
						"id": "APCC",
						"displayName": "Associate Professional Clinical Counselor (APCC)"
					},
					{
						"name": "SOCIAL WORKER (SW)",
						"category": "Mid-level",
						"id": "SW",
						"displayName": "SOCIAL WORKER (SW)"
					},
					{
						"name": "NEUROPSYCHOLOGIST (NPSY)",
						"category": "Mid-level",
						"id": "NPSY",
						"displayName": "NEUROPSYCHOLOGIST (NPSY)"
					},
					{
						"name": "PROVIDER ASSOCIATE (P-A)",
						"category": "Mid-level",
						"id": "P-A",
						"displayName": "PROVIDER ASSOCIATE (P-A)"
					},
					{
						"name": "ADULT GERONTOLOGY PRIMARY CARE NURSE PRACTITIONER (AGNP-C)",
						"category": "Mid-level",
						"id": "AGNP-C",
						"displayName": "Adult Gerontology Primary Care Nurse Practitioner (AGNP-C)"
					},
					{
						"name": "CERTIFIED ANESTHESIOLOGIST ASSISTANT (CAA)",
						"category": "Mid-level",
						"id": "CAA",
						"displayName": "Certified Anesthesiologist Assistant (CAA)"
					},
					{
						"name": "ADULT-GERONTOLOGY ACUTE CARE NURSE PRACTITIONER (AG-ACNP-BC)",
						"category": "Mid-level",
						"id": "AG-ACNP-BC",
						"displayName": "ADULT-GERONTOLOGY ACUTE CARE NURSE PRACTITIONER (AG-ACNP-BC)"
					},
					{
						"name": "OCCUPATIONAL THERAPIST REGISTERED (OTR)",
						"category": "Mid-level",
						"id": "OT-R",
						"displayName": "Occupational Therapist Registered (OTR)"
					},
					{
						"name": "ASSISTANT PHYSICIAN (A.P.)",
						"category": "Mid-level",
						"id": "A.P.",
						"displayName": "ASSISTANT PHYSICIAN (A.P.)"
					},
					{
						"name": "LICENSED PSYCHOLOGIST (LP-MS)",
						"category": "Mid-level",
						"id": "LP-MS",
						"displayName": "LICENSED PSYCHOLOGIST (LP-MS)"
					},
					{
						"name": "LICENSED PSYCHOLOGIST (LP-PSYD)",
						"category": "Mid-level",
						"id": "LP-PSYD",
						"displayName": "Licensed Psychologist (LP-PSYD)"
					},
					{
						"name": "LICENSED PSYCHOLOGIST (LP-PHD)",
						"category": "MD",
						"id": "LP-PHD",
						"displayName": "Licensed Psychologist (LP-PHD)"
					},
					{
						"name": "LICENSED PSYCHOLOGIST (LP-MA)",
						"category": "Mid-level",
						"id": "LP-MA",
						"displayName": "Licensed Psychologist (LP-MA)"
					},
					{
						"name": "LICENSED PSYCHOLOGIST (LP-EDD)",
						"category": "Mid-level",
						"id": "LP-EDD",
						"displayName": "Licensed Psychologist (LP-EDD)"
					},
					{
						"name": "CLINICAL PHARMACIST (CLIN. PHARM.)",
						"category": "Mid-level",
						"id": "CLIN.PHARM",
						"displayName": "CLINICAL PHARMACIST (CLIN. PHARM.)"
					},
					{
						"name": "DIABETIC EDUCATOR (DIABETES EDUC)",
						"category": "Mid-level",
						"id": "D.EDUC",
						"displayName": "DIABETIC EDUCATOR (Diabetes Educ)"
					}
				],
				"cacheable": "false"
			}
		},
		"practiceId": "24342",
		"currentDate": {
			"consumer": "02/26/2024",
			"practice": "02/25/2024"
		},
		"activeInsurancePrefix": "PRIMARY",
		"explain": "N"
	},
	"explainBKMs": null,
	"explainDecisions": "N",
	"ruleEngine": "Billing",
	"scrubType": "ClaimScrub",
	"decisionTraceMode": null
}
}