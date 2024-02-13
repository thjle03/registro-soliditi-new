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
// truffle-config.js (o truffle.js)

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/your_infura_project_id");
      },
      network_id: 3,
      gas: 5500000
    },
    // Otras redes aquí...
  },
  compilers: {
    solc: {
      version: "^0.8.0" // La versión de Solidity que estás utilizando en tu contrato
    }
  }
};
truffle migrate --network <nombre_de_la_red>
const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = 'tu mnemónico aquí'; // Asegúrate de mantener esto seguro

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    polygon: {
      provider: function() {
        return new HDWalletProvider(mnemonic, 'https://polygon-rpc.com');
      },
      network_id: 137, // Identificador de red de Polygon
      gas: 5500000, // Límite de gas
      confirmations: 2, // Número de confirmaciones para que una transacción sea válida
      timeoutBlocks: 200, // Número de bloques antes de que una transacción caduque
      skipDryRun: true // Salta la comprobación en seco antes de la migración
    },
    // Otras redes aquí...
  },
  compilers: {
    solc: {
      version: "^0.8.0" // La versión de Solidity que estás utilizando en tu contrato
    }
  }
};
npm install @truffle/hdwallet-provider
