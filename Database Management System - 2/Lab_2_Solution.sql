
--1. Display all the employees whose name starts with “m” and 4 th character is “h”.
	SELECT Ename FROM Employee 
	WHERE Ename LIKE 'm__h%';
--2. Find the value of 3 raised to 5. Label the column as output.
	SELECT POWER(3,5) as OUTPUT;
--3. Write a query to subtract 20 days from the current date.
	SELECT GETDATE()-20;
--4. Write a query to display name of employees whose name starts with “j” and contains “n” in their name.
	SELECT Ename FROM Employee 
	WHERE Ename LIKE 'j%n%';
--5. Display 2nd to 9th character of the given string “SQL Programming”.
	SELECT SUBSTRING('SQL Programming',2,9);
--6. Display name of the employees whose city name ends with “ney” &contains six characters.
	SELECT * FROM Employee 
	WHERE City LIKE '___ney';
--7. Write a query to convert value 15 to string.
	SELECT CONVERT (varchar(10),15) as Using_CONVERT;
--8. Add department column with varchar (20) to Employee table.
	Alter TABLE Employee ADD Department varchar(20);
--9. Set the value of department to Marketing who belongs to London city.
	UPDATE Employee Set Department='Marketing'
	WHERE City='London';
--10. Display all the employees whose name ends with either “n” or “y”.
	SELECT * FROM Employee 
	WHERE Ename LIKE '%n' or Ename LIKE '%y';
--11. Find smallest integer value that is greater than or equal to 63.1, 63.8 and -63.2.
	SELECT CEILING (63.1), CEILING (63.8), CEILING (-63.2);
--12. Display all employees whose joining date is not available.
	SELECT * FROM Employee 
	WHERE JoiningDate IS NULL;
--13. Display name of the employees in capital letters and city in small letters.
	SELECT UPPER (Ename), LOWER (City) FROM Employee;
--14. Change the data type of Ename from varchar (30) to char (30).
	ALTER TABLE Employee ALTER COLUMN Ename CHAR(30);
--15. Display city wise maximum salary.
	SELECT City,MAX(Salary) AS MAX_SAL FROM Employee 
	GROUP BY City;
--16. Produce output like <Ename> works at <city> and earns <salary> (In single column).
	SELECT Ename + 'works at'+City+'earns'+CAST(Salary as varchar(10))
	FROM Employee;
--17. Find total number of employees whose salary is more than 5000.
	SELECT COUNT(*) FROM Employee 
	WHERE Salary>5000;
--18. Write a query to display first 4 & last 3 characters of all the employees.
	SELECT LEFT (Ename, 4), RIGHT (Ename, 3)
	FROM Employee;
--19. List the city having total salaries more than 15000 and employees joined after 1st January, 2014.
	SELECT City, SUM(Salary) FROM Employee 
	WHERE JoiningDate > '1-jan-2014'
	GROUP BY City 
	HAVING SUM (Salary)>15000;
--20. Write a query to replace “u” with “oo” in Ename.
	SELECT REPLACE(Ename,'u','oo') FROM Employee;
--21. Display city with average salaries and total number of employees belongs to each city.
	SELECT City, AVG (Salary), COUNT (Ename) FROM Employee 
	GROUP BY City;
--22. Display total salaries paid to female employees.
	SELECT SUM(Salary) FROM Employee 
	WHERE Gender='female';
--23. Display name of the employees and their experience in years.
	SELECT Ename,DATEDIFF(YEAR,JoiningDate,GETDATE()) as Experience_in_Years 
	FROM Employee;
--24. Remove column department from employee table.
	ALTER TABLE Employee DROP COLUMN department;
--25. Update the value of city from syndey to null.
	UPDATE Employee SET City=null
	WHERE City='sydney';
--26. Retrieve all Employee name, Salary & Joining date.
	SELECT Ename,Salary,JoiningDate FROM Employee;
--27. Find out combine length of Ename & Gender.
	SELECT LEN(Ename)+LEN(Gender) FROM Employee;
--28. Find the difference between highest & lowest salary.
	SELECT MAX(Salary)-MIN(Salary) FROM Employee;
--29. Rename a column from Ename to FirstName.
	SP_Rename 'Employee.Ename', 'Firstname';
--30. Rename a table from Employee to EmpMaster.	SP_Rename 'Employee','Empmaster';
