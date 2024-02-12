pragma solidity ^0.8.0;

contract RegistroInteligente {
    // Mapping para almacenar registros asociados a direcciones
    mapping(address => string) public registros;

    // Evento emitido cuando se actualiza un registro
    event RegistroActualizado(address indexed cuenta, string nuevoContenido);

    // Función para registrar un contenido asociado a la dirección del usuario
    function registrar(string memory nuevoContenido) public {
        registros[msg.sender] = nuevoContenido;
        emit RegistroActualizado(msg.sender, nuevoContenido);
    }

    // Función para consultar el registro asociado a la dirección del usuario
    function consultarRegistro() public view returns (string memory) {
        return registros[msg.sender];
    }
}
