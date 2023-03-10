---
title: "Projects"
permalink: /projects/
header:
  overlay_image: header_1.jpg
  overlay_filter: 0.3
author_profile: true
---

## Capstone Project Title: Performance Evaluation Metrics
<br>
### Problem Statement: <br>
Historically, the customer care employees’ performance was assessed solely by the number of prescriptions they type. However their position is multifunctional where they are required to answer phone calls, return phone calls, solve customer service issues, follow-up with doctors’ offices and more. The issue is that the one metric is not enough to fairly assess their performance and rewards only that one job task. This in turn, creates less performance in all other areas except typing in prescriptions.
<br>
### Solution / Goal: <br>
Develop a matrix system of performance metrics for the customer care department at Valor Compounding Pharmacy.
<br>
### Impact of working on this Project: <br>
<br>
### Deliverables: <br>
A series of data metrics and dashboard visualizations in Qlik that report the following levels:<br>
- By overall department
- By role / position within the department
- By individual within the department<br>
<br>

## Discovery of Process and Considerations: <br>
<br>
### Customer Care is divided into 2 departments: <br>
- Central Fill (CF)
- Direct to Patient (DTP)
- Customer Care (All)
<br>
### Customer Care contains the following Roles / Positions: <br>
- Customer Care Specialists - Central Fill
- Customer Care Specialists - (DTP)
- Quality Assurance Pharmacists (DTP)
- Customer Care Specialists - Magic Team (All)
- Customer Care Pharmacists (All)
- Shipping (All)
- Sales (All)
<br>
## Brainstorm Metrics / Data sources: <br>
### Individual & Role Specific Dashboard Metrics: <br>
| Data Metrics                      | Affected Roles | Data Source    | Variable or Fixed | Goal of Metric (Based on 40 hours / week)           |
| --------------------------------- | -------------- | -------------- | ----------------- | -------------------------------------------------   |
| Number of Rx Typed                | 1, 2, 5        | PK             | Variable          | CCS CF: Goal: 60 / day (min) <br> CCS DTP Goal: 30 / day (min) <br> CCS DTP Goal: 30 / day (min) <br> Magic Goal: 0/ day <br> CCP: ? / Day <br> Shipping: 0 /Day <br> Sales: 0 /day |
| Number of Phone Calls Answered    | All            | Five9 (Excel)  | Variable          | Magic: 15 / day <br> CCS CF: <br> CCS DTP: <br> CCP:|
| Number of Phone Calls Returned    | All            | Five9 (Excel)  | Variable          | CCS CF: <br> CCS DTP: <br> Magic:                   |
| Number of Zendesk Tickets Worked on | All          | Zendesk        |                   |                                                     |
<br>

| Data Metrics | Affected Roles | Data Source | Data Tables | Variable or Fixed | Goal of Metric (Based on 40 hours/week) |
|:--------|:-------:|--------:|:--------|:-------:|--------:|
| Number of Rx Typed   | cell2   | cell3   | cell2   | cell3   | cell2   |
| Number of Phone Calls Answered   | cell5   | cell6   | cell2   | cell3   | cell2   |
| Number of Phone Calls Returned   | cell2   | cell3   | cell2   | cell3   | cell2   |
| Number of Zendesk Tickets Worked on   | cell5   | cell6   | cell2   | cell3   | cell2   |
| Number of Zendesk Tickets Solved   | cell2   | cell3   | cell2   | cell3   | cell2   |
| Average time to Solve Ticket   | cell2   | cell3   | cell2   | cell3   | cell2   |
| Number of work hours scheduled vs. worked   | cell2   | cell3   | cell2   | cell3   | cell2   |
| Percent On-time arrival   | cell2   | cell3   | cell2   | cell3   | cell2   |
| Hours of 'Other' or 'In Meeting' Agent Status   | cell2   | cell3   | cell2   | cell3   | cell2   |
| Number of Rx Verified   | cell2   | cell3   | cell2   | cell3   | cell2   |
| Number of Rx Shipped   | cell2   | cell3   | cell2   | cell3   | cell2   |
| Individual Name   | cell2   | cell3   | cell2   | cell3   | cell2   |
| Individual Title   | cell2   | cell3   | cell2   | cell3   | cell2   |
| Employment Type (FT / PT / Per Diem)   | cell2   | cell3   | cell2   | cell3   | cell2   |
| Role / Position   | cell2   | cell3   | cell2   | cell3   | cell2   |

<br>

### Data Timeframe Window: <br>
2019 to till-date<br>
<br>
