# Check ins (11/18/2021)

## Albert
    Yesterday: Implemented registration, used bootstrap to set up login and registration forms

    Today: Set up auth and login

    Blockers: None

## Kendrick
    Yesterday: Added javelin to backend, added some JS. Added log4j and did some tests. 

    Today: Try to add login and add some methods. Fix file structure. Review notes from today’s lesson.

    Blockers: none.

## Bezza
    Yesterday: I reviewed the day’s lesson, refined the dao layer of my project.

    Today: I will create the end-point with auth and login.

    Blockers: No obstacles.

/reimbursements

	GET - return all reimbursements
	POST  - 
        JSON representation of reimbursement
			- field with employee-id
	/{id}/manager

    PUT (Update)

        update a pending reimbursement (must be a manager)

/employees

	GET - return all employees

	 /?manager-id=[value]

		GET - return all employees with a specific manager (based on id)

	 /?username=[value]

		GET - return all employees with a specific username (in this case, just one)

    /{id}
	    GET - returning employee with id specified
	    PUT - update employee with that id
			- FTAL(for this application's logic): this is just for basic information
				- username, password, name
		

/auth

	POST - login 
		- send username/password
		- retrieve Authorization Header if login was successful
	PUT - logout
		- reset header