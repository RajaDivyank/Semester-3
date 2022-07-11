--1. Select All
--  CityID, CityName, Pincode, CityRemarks, StateID,StateName 
	create procedure PR_MST_City_SelectAll
	AS
	BEGIN
	SELECT * FROM MST_City inner join MST_State on MST_city.StateID=MST_State.StateID
	END

--2. Insert
	CREATE PROCEDURE PR_MST_CITY_INSERT
	@CITYID			INT,
	@CITYNAME		VARCHAR(250),
	@PINCODE		VARCHAR(6),
	@STATEID		INT,
	@CITYREMARKS	VARCHAR(250)
	AS
	BEGIN
	INSERT INTO MST_CITY(
		CITYID,	
		CITYNAME,	
		PINCODE,	
		STATEID,	
		CITYREMARKS)
	VALUES(
		@CITYID,		
		@CITYNAME,	
		@PINCODE,
		@STATEID,	
		@CITYREMARKS)
	END

--3. Update
	CREATE PROCEDURE PR_MST_CITY_UPDATE
		@CITYID			INT,
		@CITYNAME		VARCHAR(250),
		@PINCODE		VARCHAR(6),
		@STATEID		INT,
		@CITYREMARKS	VARCHAR(250)
	AS
	BEGIN
	UPDATE MST_CITY SET		
		CITYNAME	= @CITYNAME,	
		PINCODE		= @PINCODE,	
		STATEID		= @STATEID,	
		CITYREMARKS	= @CITYREMARKS
	WHERE CITYID=@CITYID
	END

--4. Delete
	CREATE PROCEDURE PR_MST_CITY_DELETE
		@CITYID	 INT
	AS
	BEGIN
	DELETE FROM MST_CITY
	WHERE CITYID = @CITYID
	END

--5. SelectByPK
	CREATE PROCEDURE PR_MST_CITY_PRIMARYKEY
		@CITYID	 INT
	AS
	BEGIN
	SELECT * FROM MST_CITY
	WHERE CITYID=@CITYID
	END

--6. SelectByPincodeStartWith360
	CREATE PROCEDURE PR_MST_CITY_PincodeStartWith360
	AS
	BEGIN
	SELECT * FROM MST_CITY
	WHERE PINCODE LIKE '%360'
	END

--7. SelectByCityNamePincode
	CREATE PROCEDURE PR_MST_CITY_CityNamePincode
		 @CITYNAME VARCHAR(250), 	
		 @PINCODE  VARCHAR(6)
	AS
	BEGIN
	SELECT * FROM MST_CITY
	WHERE PINCODE = @PINCODE AND
		  CITYNAME = @CITYNAME
	END

--8. SelectByCityRemarks
	CREATE PROCEDURE PR_CITY_CityRemarks
		@CITYREMARKS	VARCHAR(250)
	AS
	BEGIN
	SELECT * FROM MST_CITY
	WHERE CITYREMARKS = @CITYREMARKS
	END

--9. SelectByStateID
	CREATE PROCEDURE PR_MST_CITY_StateID
		@STATEID INT
	AS
	BEGIN
	SELECT * FROM Mst_city
	WHERE STATEID=@STATEID
	END

--10. SelectByStateIDCityID
	CREATE PROCEDURE PR_MST_CITY_StateIDCityID
		@CITYID		INT,
		@STATEID	INT
	AS
	BEGIN
	SELECT * FROM MST_CITY
	WHERE CITYID = @CITYID AND
		  STATEID = @STATEID
	END
