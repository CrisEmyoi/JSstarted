CREATE TABLE Clientes (
	DNI VARCHAR(9) PRIMARY KEY,
	Nombre VARCHAR(50),
	Apellidos VARCHAR(50),
	Direccion VARCHAR(50),
	Telefono VARCHAR(13)
);
-- Creacion de la tabla de Vehiculos
CREATE TABLE Vehiculos (
	Matricula VARCHAR(10),
	Modelo VARCHAR(50),
	Color VARCHAR(20),
	Fecha_Entrada DATE,
	Hora_Entrada TIME,
	DNI_Cliente VARCHAR(9),
	FOREIGN KEY (DNI_Cliente) REFERENCES Clientes(DNI)
);

-- Creacion de la tabla de Mecanicos
CREATE TABLE Mecanicos (
    ID_Mecanico INT PRIMARY KEY IDENTITY(1,1),
    Nombre VARCHAR(50),
    Apellidos VARCHAR(50)
);

-- Creacion de la tabla de Repuestos
CREATE TABLE Repuestos (
    ID_Repuesto INT IDENTITY(1,1) PRIMARY KEY,
    Nombre VARCHAR(50),
    Precio DECIMAL(10, 2)
);

-- Creacion de la tabla de Repuestos
CREATE TABLE Reparaciones (
    ID_Reparacion INT IDENTITY(1,1) PRIMARY KEY,
    Matricula_Vehiculo CHAR(10),
    ID_Mecanico INT,
    ManoDeObra DECIMAL(10, 2),
    FechaReparacion DATE,
    HoraReparacion TIME,
    FOREIGN KEY (Matricula_Vehiculo) REFERENCES Vehiculos(Matricula),
    FOREIGN KEY (ID_Mecanico) REFERENCES Mecanicos(ID_Mecanico)
);

-- Creacion de la tabla de Reparaciones_Repuestos
CREATE TABLE Reparaciones_Repuestos (
    ID_Reparacion INT,
    ID_Repuesto INT,
    Cantidad INT,
    PRIMARY KEY (ID_Reparacion, ID_Repuesto),
    FOREIGN KEY (ID_Reparacion) REFERENCES Reparaciones(ID_Reparacion),
    FOREIGN KEY (ID_Repuesto) REFERENCES Repuestos(ID_Repuesto)
);

-- Creacion de la tabla de Mecanicos_Reparaciones
CREATE TABLE Mecanicos_Reparaciones (
    ID_Reparacion INT,
    ID_Mecanico INT,
    PRIMARY KEY (ID_Reparacion, ID_Mecanico),
    FOREIGN KEY (ID_Reparacion) REFERENCES Reparaciones(ID_Reparacion),
    FOREIGN KEY (ID_Mecanico) REFERENCES Mecanicos(ID_Mecanico)
);

-- Creacion de la tabla de Facturas
CREATE TABLE Facturas (
    ID_Factura INT IDENTITY(1,1) PRIMARY KEY,
    ID_Reparacion INT,
    DNI_Cliente CHAR(9),
    Total DECIMAL(10, 2),
    Total_IVA DECIMAL(10, 2),
    Total_Euros DECIMAL(10, 2),
    Total_Pesetas DECIMAL(10, 2),
    FOREIGN KEY (ID_Reparacion) REFERENCES Reparaciones(ID_Reparacion),
    FOREIGN KEY (DNI_Cliente) REFERENCES Clientes(DNI)
);

-- Registro de un cliente
INSERT INTO Clientes (DNI, Nombre, Apellidos, Direccion, Telefono) 
VALUES ('12345678A', 'José', 'Lopéz', 'Calle Principal 123', '600123456');

-- Registro de un vehículo
INSERT INTO Vehiculos (Matricula, Modelo, Color, DNI_Cliente, FechaEntrada, HoraEntrada) 
VALUES ('1234ABC', 'Toyota Corolla', 'Rojo', '12345678A', '2024-07-11', '10:00:00');

-- Registro de un mecánico
INSERT INTO Mecanicos (Nombre, Apellidos,) 
VALUES ('Alberto', 'Gómez');

-- Registro de repuestos usados en una reparación
INSERT INTO Reparaciones_Repuestos (ID_Reparacion, ID_Repuesto, Cantidad) 
VALUES (1, 1, 2);

-- Registro de mecánicos que participaron en la reparación
INSERT INTO Mecanicos_Reparaciones (ID_Reparacion, ID_Mecanico) 
VALUES (1, 1);

-- Registro de una factura
INSERT INTO Facturas (ID_Reparacion, DNI_Cliente, Total, Total_IVA, Total_Euros, Total_Pesetas) 
VALUES (1, '12345678A', 200.00, 232.00, 232.00, 38605.12);

