
# Current Working Section of GAPS


::: info
Currently, with the application release version of 1.0.0 , all the features of the application may not work properly as intended. The application may throw some weird errors and present some unwanted flow. So, we will first clear out on what features the application currently supports and works as intended.
:::

## Current Flow of the Application that is working

::: details Click here to see the working features
- Inquiry Form
- Admission Form
  - Document Upload from Student to Admin (with notifications)
  - Document Upload from Admin side for Students
  - Accept/Reject Documents uploaded by the students
- University Form
- Admin/Instructor Addition
- Course Creation
- Fee Structure Addition and showcase to Students
- Event Addition
- Message Section (Admin to admin, admin to instructor, admin to student)
:::

### Admin Panel
- Inquiry
    - We can add new students via Inquiry form.
    - We can Accept/Reject the Student via the Inquiry Form.
    - We can Assign an Admin to the student after Inquiry is created. 
    - After Inquiry form is created and the applicant is accepted - the form will be redirected to Admission Form automatically.


- Admission
    - To create a successful Admission, we should create two things first.
        - [Student Group](/src/studentgroup) 
        - [Proficiency Test](/src/proficiency) 


::: warning
Note: To successfully create an Admission, you must create both Student Group and Proficiency Test first.
:::

### Steps to create a new Admission
- [Steps to create a new Admission](/src/newinquiry)
- [Adding Document of Students from Admin Side](/src/documentuploadadminstudent)
